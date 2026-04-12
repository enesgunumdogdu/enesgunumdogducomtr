import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ease } from '../motion/tokens'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <NavLink to="/" className="nav-logo" onClick={handleNavClick}>
          3nes
        </NavLink>

        <button
          className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop nav links with shared layoutId underline */}
        <ul className="nav-links nav-links-desktop">
          {links.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.to}>
                <NavLink to={link.to} onClick={handleNavClick}>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        right: '1rem',
                        bottom: '4px',
                        height: '1px',
                        background: 'var(--accent)'
                      }}
                      transition={{ duration: 0.45, ease: ease.draft }}
                    />
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-fullscreen"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: ease.paper }}
          >
            <button
              className="mobile-menu-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>

            <ul className="mobile-menu-links">
              {links.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4, ease: ease.draft }}
                >
                  <NavLink to={link.to} onClick={handleNavClick}>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
