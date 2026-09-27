import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Button from '../components/ui/Button'
import './NotFound.css'

const funnyMessages = [
  "Looks like you've wandered into the void...",
  'This page took a coffee break and never came back.',
  "Houston, we have a problem. This page doesn't exist.",
  'This page went out for milk and never returned.',
  "Oops! This page is playing hide and seek. It's winning.",
  'Plot twist: The page was never here to begin with.',
]

const quickLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

function NotFound() {
  useDocumentTitle('404 - Page Not Found')
  const { pathname } = useLocation()
  // Picked once per mount (stable across re-renders).
  const [message] = useState(
    () => funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
  )

  return (
    <div className="page not-found">
      <section className="container not-found__inner" aria-labelledby="nf-title">
        <p className="not-found__log mono">
          <span className="not-found__method">GET</span>{' '}
          <span className="not-found__path">{pathname}</span>{' '}
          <span aria-hidden="true">→</span>{' '}
          <span className="not-found__status">404 Not Found</span>
        </p>

        <h1 id="nf-title" className="not-found__code">
          404<span className="visually-hidden"> — Page not found</span>
        </h1>

        <p className="not-found__lead">{message}</p>

        <div className="not-found__actions">
          <Button to="/" blockMobile>
            Back to home
          </Button>
          <Button to="/projects" variant="secondary" blockMobile>
            See work
          </Button>
        </div>

        <nav className="not-found__more" aria-label="Other pages">
          <p className="not-found__more-label mono">Or try one of these:</p>
          <ul className="not-found__links">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default NotFound
