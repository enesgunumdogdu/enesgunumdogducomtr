import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { person } from '../data/site'
import { PRELOADER_SECONDS, markIntroSeen, showPreloader } from '../motion/intro'

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

// Ink screen with a 0 → 100 counter, then it lifts off like a shutter.
// Decorative: hidden from assistive tech, the page underneath is already there.
function Preloader() {
  const [done, setDone] = useState(!showPreloader)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (done) return undefined
    markIntroSeen()
    const start = performance.now()
    const countFor = PRELOADER_SECONDS * 1000 * 0.82
    let frame
    const tick = () => {
      const t = Math.min((performance.now() - start) / countFor, 1)
      setCount(Math.round(easeInOut(t) * 100))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    const timer = setTimeout(() => setDone(true), PRELOADER_SECONDS * 1000)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    }
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          aria-hidden="true"
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader__top">
            <span>{person.name}</span>
            <span>Portfolio, {new Date().getFullYear()}</span>
          </div>
          <div>
            <p className="preloader__count">{String(count).padStart(3, '0')}</p>
            <motion.div
              className="preloader__bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: PRELOADER_SECONDS * 0.82, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
