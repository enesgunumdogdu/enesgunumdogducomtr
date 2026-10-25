// First-visit intro: the preloader runs once per browser session, and the
// hero waits for it. Computed once at module load.

const KEY = 'eg-intro-seen'

const reduced =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let seen = false
try {
  seen = sessionStorage.getItem(KEY) === '1'
} catch {
  seen = false
}

export const PRELOADER_SECONDS = 1.6
export const showPreloader = !reduced && !seen
// Seconds the hero waits before its own entrance.
export const introDelay = showPreloader ? PRELOADER_SECONDS + 0.1 : 0.15

export function markIntroSeen() {
  try {
    sessionStorage.setItem(KEY, '1')
  } catch {
    /* private mode — the preloader just runs again next time */
  }
}
