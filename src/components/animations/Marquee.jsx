import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Marquee({ items, speed = 25, className, reverse = false }) {
  const duplicated = [...items, ...items]
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Reduced motion fallback: static wrapped list
  if (prefersReducedMotion) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '0 2rem',
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '0.5rem 1.25rem',
              background: 'transparent',
              border: '1px solid var(--border-light)',
              borderRadius: '2px',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 400,
              color: 'var(--text-secondary)',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          gap: '1.5rem',
          width: 'max-content'
        }}
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear'
          }
        }}
      >
        {duplicated.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '0.6rem 1.5rem',
              background: 'transparent',
              border: '1px solid var(--border-light)',
              borderRadius: '2px',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 400,
              color: 'var(--text-secondary)',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
