import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ease, duration } from '../motion/tokens'
import { person, socials, navLinks } from '../data/site'
import SocialIcon from './ui/SocialIcon'
import './Navbar.css'

const desktopLinks = navLinks.filter((l) => l.to !== '/') // Work / About / Contact
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

// iOS-safe scroll lock: pin the body at the current offset (overflow:hidden
// alone is ignored by iOS Safari). Returns the saved offset.
function lockScroll() {
  const y = window.scrollY
  const { style } = document.body
  style.position = 'fixed'
  style.top = `-${y}px`
  style.left = '0'
  style.right = '0'
  style.width = '100%'
  return y
}

function unlockScroll(restoreTo) {
  const { style } = document.body
  style.position = ''
  style.top = ''
  style.left = ''
  style.right = ''
  style.width = ''
  if (restoreTo != null) window.scrollTo({ top: restoreTo, left: 0, behavior: 'instant' })
}

function setBackgroundInert(on) {
  document.querySelectorAll('#main, .site-footer, .skip-link').forEach((el) => {
    if (on) el.setAttribute('inert', '')
    else el.removeAttribute('inert')
  })
}

function Navbar() {
  const { pathname } = useLocation()
  const reduced = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openedAt, setOpenedAt] = useState(pathname)

  const headerRef = useRef(null)
  const toggleRef = useRef(null)
  const sheetRef = useRef(null)
  const returnFocus = useRef(false)

  // Route change closes the menu (state adjusted during render — no effect).
  if (isOpen && pathname !== openedAt) {
    setIsOpen(false)
  }

  const open = () => {
    setOpenedAt(pathname)
    setIsOpen(true)
  }

  const close = useCallback((restoreFocus = true) => {
    returnFocus.current = restoreFocus
    setIsOpen(false)
  }, [])

  // Hairline under the bar once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll lock + inert background + initial focus while open.
  useEffect(() => {
    if (!isOpen) return undefined
    const lockedPath = window.location.pathname
    const toggle = toggleRef.current
    const y = lockScroll()
    setBackgroundInert(true)
    const first = sheetRef.current?.querySelector('a[href]')
    first?.focus({ preventScroll: true })

    return () => {
      setBackgroundInert(false)
      // Navigated away: ScrollToTop owns the scroll position, don't restore.
      unlockScroll(window.location.pathname === lockedPath ? y : null)
      if (returnFocus.current) toggle?.focus({ preventScroll: true })
      returnFocus.current = false
    }
  }, [isOpen])

  // Disclosure pattern (not a dialog): the toggle stays reachable for VoiceOver.
  // Esc closes; Tab is trapped inside the header (wordmark, toggle, sheet);
  // #main/footer are inert while open.
  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close(true)
        return
      }
      if (e.key !== 'Tab' || !headerRef.current) return
      const items = [...headerRef.current.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.getClientRects().length > 0
      )
      if (!items.length) return
      const firstEl = items[0]
      const lastEl = items[items.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  // Close if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!isOpen) return undefined
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => e.matches && close(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [isOpen, close])

  const sheetMotion = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { clipPath: 'inset(0 0 100% 0)' },
        animate: { clipPath: 'inset(0 0 0% 0)' },
        exit: { clipPath: 'inset(0 0 100% 0)' },
      }

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? ' is-scrolled' : ''}${isOpen ? ' is-open' : ''}`}
    >
      <div className="site-header__bar container">
        <Link to="/" className="site-header__wordmark" onClick={() => isOpen && close(false)}>
          {person.name}
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {desktopLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="site-nav__link">
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="site-nav__indicator"
                          aria-hidden="true"
                          transition={{ duration: duration.phrase, ease: ease.out }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => (isOpen ? close(true) : open())}
        >
          <span className="menu-toggle__line" aria-hidden="true" />
          <span className="menu-toggle__line" aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={sheetRef}
            id="site-menu"
            className="menu-sheet"
            {...sheetMotion}
            transition={{ duration: duration.page, ease: ease.inOut }}
          >
            <nav aria-label="Primary">
              <ol className="menu-sheet__list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.2, ease: ease.out }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className="menu-sheet__link"
                      onClick={() => close(false)}
                    >
                      <span className="menu-sheet__index" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="menu-sheet__label">{link.label}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ol>
            </nav>

            <div className="menu-sheet__footer">
              <a href={person.emailHref} className="text-link break-anywhere menu-sheet__email">
                Email me
              </a>
              <ul className="menu-sheet__socials">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label={`${s.label} (opens in a new tab)`}
                    >
                      <SocialIcon id={s.id} />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="menu-sheet__location mono">{person.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
