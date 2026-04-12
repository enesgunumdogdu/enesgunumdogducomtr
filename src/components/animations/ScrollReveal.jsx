import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ease } from '../../motion/tokens'

const presets = {
  // Legacy — kept for compatibility
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 }
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  },

  // New editorial primitives
  clipReveal: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  },
  inkBleed: {
    hidden: { filter: 'blur(6px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 }
  },
  draftedLine: {
    hidden: { scaleX: 0, opacity: 0.3 },
    visible: { scaleX: 1, opacity: 1 }
  }
}

function ScrollReveal({
  children,
  preset = 'clipReveal',
  delay = 0,
  duration = 0.6,
  once = true,
  className,
  style,
  as = 'div'
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const isInView = useInView(ref, { once, margin: '0px 0px -80px 0px' })
  const animation = presets[preset] || presets.clipReveal

  const Component = motion[as] || motion.div

  // Reduced motion — skip to visible state instantly
  if (reduced) {
    return (
      <Component ref={ref} className={className} style={style}>
        {children}
      </Component>
    )
  }

  // Pick easing based on preset
  const easeCurve = preset === 'inkBleed' ? ease.ink : preset === 'draftedLine' ? ease.draft : ease.ink

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
      initial={animation.hidden}
      animate={isInView ? animation.visible : animation.hidden}
      transition={{
        duration,
        delay,
        ease: easeCurve
      }}
    >
      {children}
    </Component>
  )
}

export default ScrollReveal
