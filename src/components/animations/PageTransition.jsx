import { motion } from 'framer-motion'
import { duration, ease } from '../../motion/tokens'

// Route enter: a single ≤200ms opacity fade (cto-decisions §4). No exit
// animation, so navigation never waits on the old page.
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration.fade, ease: ease.out }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
