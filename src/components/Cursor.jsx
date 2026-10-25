import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Follower dot for fine pointers. Grows over links; over anything with
// data-cursor="Label" it becomes a cobalt disc with that label. The native
// cursor stays visible, so nothing is lost if this fails.
const FINE = '(hover: hover) and (pointer: fine)'
const INTERACTIVE = '[data-cursor], a, button, [role="button"], label, input, textarea, select, summary'

function Cursor() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [fine] = useState(() => typeof window !== 'undefined' && window.matchMedia(FINE).matches)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const label = el.querySelector('.cursor__label')
    let x = -100
    let y = -100
    let tx = -100
    let ty = -100
    let frame

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      el.classList.add('is-visible')
    }
    const onOver = (e) => {
      const target = e.target instanceof Element ? e.target.closest(INTERACTIVE) : null
      el.classList.remove('is-link', 'is-label', 'is-text')
      if (!target) return
      if (target.matches('input, textarea, select')) {
        el.classList.add('is-text')
        return
      }
      const text = target.closest('[data-cursor]')?.getAttribute('data-cursor')
      if (text) {
        label.textContent = text
        el.classList.add('is-label')
      } else {
        el.classList.add('is-link')
      }
    }
    const onLeave = () => el.classList.remove('is-visible')
    const loop = () => {
      x += (tx - x) * 0.22
      y += (ty - y) * 0.22
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver)
    document.documentElement.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [fine, reduced])

  if (!fine || reduced) return null
  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span className="cursor__label" />
    </div>
  )
}

export default Cursor
