import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function TextReveal({ children, className, style, delay = 0, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const words = typeof children === 'string' ? children.split(' ') : [children]

  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0 0.3em', ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default TextReveal
