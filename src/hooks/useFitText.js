import { useLayoutEffect } from 'react'

// Sizes an element so its widest [data-fit] child fills the element's width.
// Re-fits when the box resizes and once web fonts have loaded.
function useFitText(ref, { max = Infinity, selector = '[data-fit]' } = {}) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const fit = () => {
      const words = [...el.querySelectorAll(selector)]
      if (!words.length) return
      el.style.fontSize = '100px'
      const widest = Math.max(...words.map((w) => w.getBoundingClientRect().width))
      const available = el.clientWidth
      if (!widest || !available) return
      el.style.fontSize = `${Math.min((100 * available) / widest, max)}px`
    }

    fit()
    let cancelled = false
    document.fonts?.ready.then(() => !cancelled && fit())
    const ro = new ResizeObserver(fit)
    ro.observe(el.parentElement || el)
    return () => {
      cancelled = true
      ro.disconnect()
    }
  }, [ref, max, selector])
}

export default useFitText
