import { Link } from 'react-router-dom'
import { person, socials, navLinks, apps } from '../data/site'
import { getLenis } from '../motion/smoothScroll'
import './Footer.css'

const year = new Date().getFullYear()

const backToTop = () => {
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(0, { duration: 1.6 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__about">
            <p className="site-footer__name">{person.name}</p>
            <p className="site-footer__intro">
              This is my personal site. The apps, code and videos here are my own projects, and any
              views are my own.
            </p>
          </div>

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

            <div className="site-footer__group site-footer__group--legal">
              <h2 className="site-footer__label">App privacy and terms</h2>
              <ul className="site-footer__legal">
                {apps.map((app) => (
                  <li key={app.id}>
                    <span className="site-footer__legal-name">{app.name}</span>
                    <Link to={app.legal.privacy} className="site-footer__legal-link">
                      Privacy<span className="visually-hidden"> policy for {app.name}</span>
                    </Link>
                    <Link to={app.legal.terms} className="site-footer__legal-link">
                      Terms<span className="visually-hidden"> of use for {app.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

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
