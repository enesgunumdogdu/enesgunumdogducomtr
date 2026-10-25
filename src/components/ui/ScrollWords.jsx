import { Fragment, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

// A statement whose words light up one by one as it scrolls through the
// viewport. Plain text for reduced motion.
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.16, 1])
  return (
    <motion.span className="scroll-words__word" style={{ opacity }}>
      {children}
    </motion.span>
  )
}

function ScrollWords({ text, as = 'p', className = '' }) {
  const Tag = as
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')

  if (reduced) {
    return (
      <Tag ref={ref} className={className}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length
        return (
          <Fragment key={i}>
            <Word progress={scrollYProgress} range={[start, start + 1 / words.length]}>
              {word}
            </Word>
            {i < words.length - 1 && ' '}
          </Fragment>
        )
      })}
    </Tag>
  )
}

export default ScrollWords
