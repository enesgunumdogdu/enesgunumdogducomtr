import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Mounts the wet-ink WebGL layer once the name has finished its entrance and
// the web font is ready. Until then (and without WebGL, or with reduced
// motion) the real DOM heading is what you see.
const hasWebGL2 = () => {
  try {
    return Boolean(document.createElement('canvas').getContext('webgl2'))
  } catch {
    return false
  }
}

function HeroInk({ nameRef, startAfter = 0, onReady }) {
  const hostRef = useRef(null)
  const onReadyRef = useRef(onReady)
  const reduced = useReducedMotion()
  const [supported] = useState(hasWebGL2)

  useEffect(() => {
    onReadyRef.current = onReady
  }, [onReady])

  useEffect(() => {
    if (!supported || reduced) return undefined
    let disposed = false
    let ink = null

    const timer = setTimeout(async () => {
      try {
        await document.fonts?.ready
        const { createInk } = await import('./createInk')
        if (disposed || !hostRef.current || !nameRef.current) return
        ink = createInk(hostRef.current, { nameEl: nameRef.current })
        onReadyRef.current?.(true)
      } catch {
        onReadyRef.current?.(false)
      }
    }, startAfter * 1000)

    return () => {
      disposed = true
      clearTimeout(timer)
      ink?.dispose()
      onReadyRef.current?.(false)
    }
  }, [supported, reduced, startAfter, nameRef])

  return <div ref={hostRef} className="hero__ink" aria-hidden="true" />
}

export default HeroInk
