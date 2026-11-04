import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Route enter. The first page of a visit just appears; every later navigation
// fades the new page in with a short lift. Nothing waits on the old page.
let hasMounted = false

function PageTransition({ children }) {
  const reduced = useReducedMotion()
  const [first] = useState(() => !hasMounted)

  useEffect(() => {
    hasMounted = true
  }, [])

  const animate = !first && !reduced

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
