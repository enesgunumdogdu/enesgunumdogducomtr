import { motion, useReducedMotion } from 'framer-motion'
import { ease } from '../../motion/tokens'

/**
 * "Ledger Entry" number animation.
 * Each glyph settles with a slight y-offset and blur, staggered —
 * like digits being written into a ledger. Not counting up.
 */
function LedgerNumber({ value, delay = 0, style, className, glyphStagger = 0.06 }) {
  const reduced = useReducedMotion()
  const chars = String(value).split('')

  if (reduced) {
    return (
      <span className={className} style={{ fontVariantNumeric: 'tabular-nums', ...style }}>
        {value}
      </span>
    )
  }

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        fontVariantNumeric: 'tabular-nums',
        ...style
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          style={{ display: 'inline-block' }}
          initial={{ y: '0.4em', opacity: 0, filter: 'blur(3px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{
            duration: 0.5,
            delay: delay + i * glyphStagger,
            ease: ease.ink
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default LedgerNumber
