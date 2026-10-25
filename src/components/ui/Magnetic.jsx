import { useRef } from 'react'
import { motion, useReducedMotion, useSpring } from 'framer-motion'

// Pulls its child toward a mouse pointer hovering it, springs back on leave.
//   <Magnetic><Button …/></Magnetic>
const SPRING = { stiffness: 200, damping: 16, mass: 0.6 }

function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const x = useSpring(0, SPRING)
  const y = useSpring(0, SPRING)

  const onMove = (e) => {
    if (reduced || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      className={`magnetic ${className}`.trim()}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  )
}

export default Magnetic
