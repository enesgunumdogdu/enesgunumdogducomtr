// Shared motion tokens — all site animations should reference these
// Consistency of easing/duration is what separates crafted from assembled.

export const ease = {
  draft: [0.2, 0.8, 0.2, 1],       // pencil stroke — fast start, long settle
  ink: [0.65, 0, 0.35, 1],         // ink reveal
  paper: [0.77, 0, 0.175, 1],      // heavier page turn
  gentle: [0.25, 0.46, 0.45, 0.94] // soft catch-all
}

export const duration = {
  tap: 0.18,
  phrase: 0.45,
  page: 0.9,
  essay: 1.4
}

// Reusable variant presets
export const variants = {
  clipReveal: {
    hidden: { clipPath: 'inset(100% 0 0 0)', y: 12 },
    shown: { clipPath: 'inset(0% 0 0 0)', y: 0 }
  },
  inkBleed: {
    hidden: { filter: 'blur(6px)', opacity: 0, color: '#8A8278' },
    shown: { filter: 'blur(0px)', opacity: 1, color: 'var(--text-primary)' }
  },
  draftedLine: {
    hidden: { scaleX: 0, opacity: 0.3 },
    shown: { scaleX: 1, opacity: 1 }
  },
  fadeLift: {
    hidden: { opacity: 0, y: 16 },
    shown: { opacity: 1, y: 0 }
  }
}
