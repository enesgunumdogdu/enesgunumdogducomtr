import { motion, useReducedMotion } from 'framer-motion'
import { ease } from '../../motion/tokens'

/**
 * A horizontal rule that "draws itself" when scrolled into view.
 * Editorial divider — evokes a drafting pencil line being laid down.
 */
function DraftedLine({ color, opacity = 1, thickness = 1, delay = 0, style, className }) {
  const reduced = useReducedMotion()

  const baseStyle = {
    width: '100%',
    height: `${thickness}px`,
    background: color || 'var(--border-light)',
    transformOrigin: 'left',
    ...style
  }

  if (reduced) {
    return <div className={className} style={{ ...baseStyle, opacity }} />
  }

  return (
    <motion.div
      className={className}
      style={baseStyle}
      initial={{ scaleX: 0, opacity: 0.3 }}
      whileInView={{ scaleX: 1, opacity }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        duration: 0.55,
        delay,
        ease: ease.draft
      }}
    />
  )
}

export default DraftedLine
