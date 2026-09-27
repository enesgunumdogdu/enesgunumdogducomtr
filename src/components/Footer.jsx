import { Link } from 'react-router-dom'
import { person, socials, navLinks } from '../data/site'
import './Footer.css'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__cta">
            <p className="site-footer__label">Email</p>
            <a href={person.emailHref} className="site-footer__email mono break-anywhere">
              Email me <span aria-hidden="true">→</span>
            </a>
          </div>

          <nav className="site-footer__groups" aria-label="Footer">
            <div className="site-footer__group">
              <h2 className="site-footer__label">Pages</h2>
              <ul className="site-footer__list">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="site-footer__link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__group">
              <h2 className="site-footer__label">Elsewhere</h2>
              <ul className="site-footer__list">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-footer__link"
                    >
                      {s.label} <span aria-hidden="true">↗</span>
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </nav>
        </div>

        <div className="site-footer__bottom mono">
          <p>
            © {year} {person.name} · {person.location} · UTC+3
          </p>
          <p>
            Designed by{' '}
            <Link to="/" className="site-footer__signoff">
              {person.signoff}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
