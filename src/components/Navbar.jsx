import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
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

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={handleNavClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleNavClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={handleNavClick}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleNavClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
