import {
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  CanvasTexture,
  Vector2,
  Vector3,
  WebGLRenderTarget,
  WebGLRenderer,
} from 'three'

// Wet-ink hero. The name and a fine dot grid are drawn into a 2D canvas that
// exactly matches the DOM text; WebGL then smears that canvas along a
// velocity field the pointer paints into (ping-pong render targets). Where
// the ink is pushed it leaves a cobalt ghost behind.

const hex = (h) => {
  const n = parseInt(h.slice(1), 16)
  return new Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255)
}

const PAPER = '#E9E9E4'
const INK = '#0D0D0D'
const ACCENT = '#2B3BFF'

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`

// Velocity field: decays, drifts along itself a little, gets new splats.
const trailShader = /* glsl */ `
uniform sampler2D uPrev;
uniform vec2 uPointer;
uniform vec2 uForce;
uniform float uRadius;
uniform float uAspect;
uniform float uDecay;
varying vec2 vUv;

void main() {
  vec2 prev = texture2D(uPrev, vUv).rg - 0.5;
  vec2 back = texture2D(uPrev, vUv - prev * 0.02).rg - 0.5;
  vec2 v = mix(prev, back, 0.6) * uDecay;
  // Always shrink a little, so 8-bit targets still settle to zero.
  v -= sign(v) * min(abs(v), vec2(1.5 / 255.0));

  vec2 d = vUv - uPointer;
  d.x *= uAspect;
  v += uForce * exp(-dot(d, d) / uRadius);

  gl_FragColor = vec4(clamp(v, -0.5, 0.5) + 0.5, 0.0, 1.0);
}`

const displayShader = /* glsl */ `
uniform sampler2D uText;
uniform sampler2D uTrail;
uniform vec3 uPaper;
uniform vec3 uInk;
uniform vec3 uAccent;
uniform float uStrength;
varying vec2 vUv;

void main() {
  vec2 v = texture2D(uTrail, vUv).rg - 0.5;
  vec2 off = v * uStrength;
  float ink = texture2D(uText, vUv - off).a;
  float ghost = texture2D(uText, vUv - off * 2.2).a;
  // Only real movement leaves a ghost; resting residue stays clean.
  float moving = smoothstep(0.004, 0.03, length(v));
  vec3 col = uPaper;
  col = mix(col, uAccent, clamp(ghost - ink, 0.0, 1.0) * moving);
  col = mix(col, uInk, ink);
  gl_FragColor = vec4(col, 1.0);
}`

const STRETCH = [
  [125, 'expanded'],
  [112.5, 'semi-expanded'],
  [100, 'normal'],
  [87.5, 'semi-condensed'],
  [75, 'condensed'],
]

const stretchKeyword = (computed) => {
  const pct = parseFloat(computed) || 100
  return (STRETCH.find(([v]) => pct >= v - 0.1) || STRETCH[STRETCH.length - 1])[1]
}

// Measure every word of the DOM heading relative to the host.
function measure(nameEl, host) {
  const hostRect = host.getBoundingClientRect()
  return [...nameEl.querySelectorAll('[data-ink-word]')].map((el) => {
    const r = el.getBoundingClientRect()
    const cs = getComputedStyle(el)
    return {
      text: el.textContent.toLocaleUpperCase('tr-TR'),
      left: r.left - hostRect.left,
      top: r.top - hostRect.top,
      width: r.width,
      height: r.height,
      fontSize: parseFloat(cs.fontSize),
      weight: cs.fontWeight,
      stretch: stretchKeyword(cs.fontStretch),
      letterSpacing: parseFloat(cs.letterSpacing) || 0,
      family: cs.fontFamily,
    }
  })
}

function paint(canvas, width, height, dpr, words) {
  const ctx = canvas.getContext('2d')
  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Fine dot grid: shows the field moving even away from the name.
  const step = width < 640 ? 18 : 22
  const dot = Math.max(1, 1.4 * dpr)
  ctx.fillStyle = 'rgba(13, 13, 13, 0.2)'
  for (let y = step / 2; y < height; y += step) {
    for (let x = step / 2; x < width; x += step) {
      ctx.fillRect(Math.round(x * dpr), Math.round(y * dpr), dot, dot)
    }
  }

  ctx.fillStyle = INK
  ctx.textBaseline = 'alphabetic'
  for (const w of words) {
    const size = w.fontSize * dpr
    ctx.font = `${w.weight} ${w.stretch} ${size}px ${w.family}`
    if ('fontStretch' in ctx) ctx.fontStretch = w.stretch
    if ('letterSpacing' in ctx) ctx.letterSpacing = `${w.letterSpacing * dpr}px`
    const m = ctx.measureText(w.text)
    const ascent = m.fontBoundingBoxAscent ?? m.actualBoundingBoxAscent
    const descent = m.fontBoundingBoxDescent ?? m.actualBoundingBoxDescent
    // CSS half-leading: the glyph box is centred in the line box.
    const baseline = w.top * dpr + (w.height * dpr - (ascent + descent)) / 2 + ascent
    // Whatever the canvas did with width/spacing, land on the DOM's width.
    const sx = m.width > 0 ? (w.width * dpr) / m.width : 1
    ctx.save()
    ctx.translate(w.left * dpr, baseline)
    ctx.scale(sx, 1)
    ctx.fillText(w.text, 0, 0)
    ctx.restore()
  }
}

/**
 * Mounts the ink layer into `host`. Returns { dispose }.
 * options.nameEl  the heading whose [data-ink-word] spans get redrawn
 */
export function createInk(host, { nameEl }) {
  const small = Math.min(window.innerWidth, window.innerHeight) < 640
  const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2)

  const canvas = document.createElement('canvas')
  host.appendChild(canvas)
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' })
  renderer.setPixelRatio(dpr)

  const textCanvas = document.createElement('canvas')
  const textTexture = new CanvasTexture(textCanvas)
  textTexture.generateMipmaps = false
  textTexture.minFilter = LinearFilter
  textTexture.magFilter = LinearFilter

  const targetOptions = { minFilter: LinearFilter, magFilter: LinearFilter, depthBuffer: false }
  let read = new WebGLRenderTarget(4, 4, targetOptions)
  let write = new WebGLRenderTarget(4, 4, targetOptions)

  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const quad = new PlaneGeometry(2, 2)

  const trailMaterial = new ShaderMaterial({
    vertexShader,
    fragmentShader: trailShader,
    uniforms: {
      uPrev: { value: null },
      uPointer: { value: new Vector2(-1, -1) },
      uForce: { value: new Vector2(0, 0) },
      uRadius: { value: 0.004 },
      uAspect: { value: 1 },
      uDecay: { value: 0.955 },
    },
  })
  const trailScene = new Scene()
  trailScene.add(new Mesh(quad, trailMaterial))

  const displayMaterial = new ShaderMaterial({
    vertexShader,
    fragmentShader: displayShader,
    uniforms: {
      uText: { value: textTexture },
      uTrail: { value: null },
      uPaper: { value: hex(PAPER) },
      uInk: { value: hex(INK) },
      uAccent: { value: hex(ACCENT) },
      uStrength: { value: 0.16 },
    },
  })
  const displayScene = new Scene()
  displayScene.add(new Mesh(quad, displayMaterial))

  // Start the field at "no velocity" (0.5 encoded).
  const clearField = () => {
    renderer.setClearColor(0x808000, 1)
    for (const t of [read, write]) {
      renderer.setRenderTarget(t)
      renderer.clear()
    }
    renderer.setRenderTarget(null)
  }

  let width = 1
  let height = 1

  const layout = () => {
    width = Math.max(host.clientWidth, 1)
    height = Math.max(host.clientHeight, 1)
    renderer.setSize(width, height, false)
    const tw = Math.max(Math.round(width / 3), 8)
    const th = Math.max(Math.round(height / 3), 8)
    read.setSize(tw, th)
    write.setSize(tw, th)
    clearField()
    trailMaterial.uniforms.uAspect.value = width / height
    paint(textCanvas, width, height, dpr, measure(nameEl, host))
    textTexture.needsUpdate = true
  }

  // ---- Pointer → force ----
  const pointer = new Vector2(-1, -1)
  const last = new Vector2(-1, -1)
  let lastInput = -Infinity
  let hasPointer = false

  const setPointer = (clientX, clientY) => {
    const rect = host.getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width
    const y = 1 - (clientY - rect.top) / rect.height
    if (y < 0 || y > 1) return
    pointer.set(x, y)
    if (!hasPointer) last.copy(pointer)
    hasPointer = true
    lastInput = performance.now()
  }
  const onPointerMove = (e) => setPointer(e.clientX, e.clientY)
  const onTouchMove = (e) => {
    const t = e.touches[0]
    if (t) setPointer(t.clientX, t.clientY)
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('touchmove', onTouchMove, { passive: true })

  // ---- Loop ----
  let frame = 0
  let running = false
  let visible = true
  const startTime = performance.now()

  const step = () => {
    const now = performance.now()
    const idle = now - lastInput > 2200
    const u = trailMaterial.uniforms

    if (idle) {
      // Nobody's touching it: a slow figure-eight drifts across the name.
      const t = (now - startTime) / 1000
      pointer.set(0.5 + Math.sin(t * 0.45) * 0.42, 0.24 + Math.sin(t * 0.9) * 0.14)
      if (!hasPointer) {
        last.copy(pointer)
        hasPointer = true
      }
    }

    const force = new Vector2().subVectors(pointer, last).multiplyScalar(idle ? 3 : 7)
    if (force.length() > 0.35) force.setLength(0.35)
    u.uForce.value.copy(force)
    u.uPointer.value.copy(pointer)
    u.uRadius.value = idle ? 0.006 : 0.004
    last.copy(pointer)

    u.uPrev.value = read.texture
    renderer.setRenderTarget(write)
    renderer.render(trailScene, camera)
    renderer.setRenderTarget(null)
    ;[read, write] = [write, read]

    displayMaterial.uniforms.uTrail.value = read.texture
    renderer.render(displayScene, camera)
  }

  const tick = () => {
    frame = requestAnimationFrame(tick)
    step()
  }

  const start = () => {
    if (running || !visible || document.hidden) return
    running = true
    frame = requestAnimationFrame(tick)
  }
  const stop = () => {
    running = false
    cancelAnimationFrame(frame)
  }

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) start()
    else stop()
  })
  io.observe(host)

  let resizeTimer
  const ro = new ResizeObserver(() => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      layout()
      if (!running) step()
    }, 80)
  })
  ro.observe(host)
  ro.observe(nameEl)

  const onVisibility = () => (document.hidden ? stop() : start())
  document.addEventListener('visibilitychange', onVisibility)

  const onContextLost = (e) => {
    e.preventDefault()
    stop()
  }
  canvas.addEventListener('webglcontextlost', onContextLost)

  layout()
  step()
  start()

  return {
    dispose() {
      stop()
      clearTimeout(resizeTimer)
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      read.dispose()
      write.dispose()
      quad.dispose()
      trailMaterial.dispose()
      displayMaterial.dispose()
      textTexture.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
      canvas.remove()
    },
  }
}
