import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function SplitText({ children, className, style, delay = 0, once = true, as = 'span' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })
  const text = typeof children === 'string' ? children : ''
  const letters = text.split('')

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block', ...style }} aria-label={text}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
          initial={{ y: '110%', opacity: 0, rotateX: -80 }}
          animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : { y: '110%', opacity: 0, rotateX: -80 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.025,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

export default SplitText
