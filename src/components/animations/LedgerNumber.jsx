import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ease } from '../../motion/tokens'

/**
 * "Ledger Entry" number animation.
 * Each glyph settles with a slight y-offset and blur, staggered —
 * like digits being written into a ledger. Not counting up.
 *
 * The whole figure shares one viewport observer: with an observer per glyph
 * they could disagree at the fold and leave part of a number invisible
 * (e.g. "5.0" rendering as "0").
 */
function LedgerNumber({ value, delay = 0, style, className, glyphStagger = 0.06 }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  // Negative bottom margin only — the figure reveals once it is comfortably
  // on screen, but never sits blank while it is already visible.
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const chars = String(value).split('')

  if (reduced) {
    return (
      <span className={className} style={{ fontVariantNumeric: 'tabular-nums', ...style }}>
        {value}
      </span>
    )
  }

  const glyph = {
    hidden: { y: '0.4em', opacity: 0, filter: 'blur(3px)' },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        delay: delay + i * glyphStagger,
        ease: ease.ink,
      },
    }),
  }

  return (
    <span
      ref={ref}
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
          custom={i}
          variants={glyph}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default LedgerNumber
