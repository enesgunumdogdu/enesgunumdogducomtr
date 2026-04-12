import { motion, useReducedMotion } from 'framer-motion'
import { ease, duration } from '../../motion/tokens'

function PageTransition({ children }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <>
      {/* Ruled line sweep — draws in from left, exits to right */}
      <motion.div
        aria-hidden
        className="rule-sweep"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: [0, 1, 1, 0], originX: [0, 0, 1, 1] }}
        transition={{
          duration: duration.page,
          ease: ease.draft,
          times: [0, 0.45, 0.55, 1]
        }}
      />

      {/* Page content reveals via clip-path, synchronized with the rule */}
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        exit={{ clipPath: 'inset(0 0 0 100%)' }}
        transition={{
          duration: duration.page,
          ease: ease.draft
        }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default PageTransition
