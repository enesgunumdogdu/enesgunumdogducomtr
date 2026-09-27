// Shared motion tokens — mirror the CSS vars in index.css.
// Hard cap: 320ms for anything (cto-decisions §4). Motion is functional only:
// fade + ≤12px lift, run once, respect prefers-reduced-motion.

export const ease = {
  out: [0.2, 0.8, 0.2, 1],   // default for enters / hovers  (--ease-out)
  inOut: [0.65, 0, 0.35, 1], // sheets                        (--ease-in-out)
}

export const duration = {
  fade: 0.2,    // route cross-fade (150–200ms max)
  phrase: 0.32, // reveals, nav indicator
  page: 0.32,   // mobile menu sheet
}

export const stagger = 0.06 // hero item stagger (ui.md §3.0)

export const variants = {
  fadeLift: {
    hidden: { opacity: 0, y: 12 },
    shown: { opacity: 1, y: 0 },
  },
}
