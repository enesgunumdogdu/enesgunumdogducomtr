import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { person, socials, navLinks } from '../data/site'
import { getLenis } from '../motion/smoothScroll'
import useFitText from '../hooks/useFitText'
import './Footer.css'

const year = new Date().getFullYear()

const backToTop = () => {
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(0, { duration: 1.6 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Footer() {
  const nameRef = useRef(null)
  useFitText(nameRef)

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <p className="site-footer__intro">
            This is my personal site. The apps, code and videos here are my own projects, and any
            views are my own.
          </p>

          <nav className="site-footer__groups" aria-label="Footer">
            <div className="site-footer__group">
              <h2 className="site-footer__label">Pages</h2>
              <ul className="site-footer__list">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="site-footer__link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__group">
              <h2 className="site-footer__label">Elsewhere</h2>
              <ul className="site-footer__list">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="site-footer__link">
                      {s.label} <span aria-hidden="true">↗</span>
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={person.emailHref} className="site-footer__link">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="site-footer__name" ref={nameRef} aria-hidden="true">
          <span data-fit>{person.name}</span>
        </p>

        <div className="site-footer__bottom">
          <p>
            © {year} {person.name}
          </p>
          <p>
            Designed and built by{' '}
            <Link to="/" className="site-footer__signoff">
              {person.signoff}
            </Link>
          </p>
          <button type="button" className="site-footer__top-btn" onClick={backToTop}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
