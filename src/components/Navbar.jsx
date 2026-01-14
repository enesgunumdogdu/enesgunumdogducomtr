import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" onClick={closeMenu}>
        EG
      </NavLink>

      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Ana Sayfa
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            Hakkımda
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={closeMenu}>
            Projeler
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            İletişim
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
