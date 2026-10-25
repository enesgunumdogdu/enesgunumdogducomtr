import { useEffect } from 'react'
import Lenis from 'lenis'

// One Lenis instance for the whole app (inertial wheel scrolling on desktop;
// touch keeps native scrolling). Skipped entirely for reduced motion.
let lenis = null

export const getLenis = () => lenis

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
      autoRaf: true,
    })
    return () => {
      lenis?.destroy()
      lenis = null
    }
  }, [])
}
