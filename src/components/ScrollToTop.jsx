import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// On every route change: jump (not smooth-scroll) to the top and move focus to
// the new page's <h1> (falls back to <main id="main">), so keyboard and
// screen-reader users start at the new content. On the initial load focus is
// left alone, so the first Tab reaches the skip link. Comparing paths (rather
// than a "first run" flag) keeps this correct under StrictMode's double effect.
function ScrollToTop() {
  const { pathname } = useLocation()
  const prev = useRef(pathname)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (prev.current === pathname) return
    prev.current = pathname

    // Lazy routes may not have rendered their h1 yet — retry briefly.
    let tries = 0
    let timer
    const focusTarget = () => {
      const h1 = document.querySelector('#main h1')
      if (h1) {
        if (!h1.hasAttribute('tabindex')) h1.setAttribute('tabindex', '-1')
        h1.focus({ preventScroll: true })
      } else if (tries++ < 20) {
        timer = setTimeout(focusTarget, 50)
      } else {
        document.getElementById('main')?.focus({ preventScroll: true })
      }
    }
    focusTarget()
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default ScrollToTop
