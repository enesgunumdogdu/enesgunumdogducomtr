import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Route enter. The first page of a visit just appears (the preloader covers
// it); every later navigation lifts an ink curtain and slides the page up.
// Nothing waits on the old page.
let hasMounted = false

const ease = [0.76, 0, 0.24, 1]

function PageTransition({ children }) {
  const reduced = useReducedMotion()
  const [first] = useState(() => !hasMounted)

  useEffect(() => {
    hasMounted = true
  }, [])

  const animate = !first && !reduced

  return (
    <>
      {animate && (
        <motion.div
          className="curtain"
          aria-hidden="true"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
        />
      )}
      <motion.div
        initial={animate ? { opacity: 0, y: 60 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default PageTransition
