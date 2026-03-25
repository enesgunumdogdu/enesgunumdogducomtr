import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const presets = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  }
}

function ScrollReveal({
  children,
  preset = 'fadeUp',
  delay = 0,
  duration = 0.7,
  once = true,
  className,
  style,
  as = 'div'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const animation = presets[preset] || presets.fadeUp

  const Component = motion[as] || motion.div

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
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </Component>
  )
}

export default ScrollReveal
