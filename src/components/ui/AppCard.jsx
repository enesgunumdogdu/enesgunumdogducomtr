import { Link } from 'react-router-dom'
import { TagList } from './Tag'

// Side-project card shared by Home and Work. The card field is tinted with
// the app's own colour (sampled from its icon in site.js). Live apps get an
// App Store button, open-source ones a source button; `showLegal` adds the
// privacy policy and terms of use links (Work page).

function StoreGlyph() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
      <path
        d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AppCard({ app, long = false, showLegal = false, headingLevel = 'h3' }) {
  const Heading = headingLevel
  const titleId = `app-card-${app.id}`
  const kind = app.appStoreUrl ? 'store' : 'source'

  return (
    <article
      className="app-card"
      aria-labelledby={titleId}
      style={{ '--app-color': app.color }}
    >
      <div className="app-card__field">
        <img
          className="app-icon app-card__icon"
          src={app.icon}
          alt=""
          width="96"
          height="96"
          loading="lazy"
          decoding="async"
        />
        <p className={`status status--${app.status} app-card__status`}>{app.statusLabel}</p>
      </div>

      <div className="app-card__body">
        <Heading id={titleId} className="app-card__name">
          {app.name}
        </Heading>
        <p className="app-card__desc">{long ? app.description : app.summary}</p>
        {long && <TagList tags={app.tags} label={`${app.name} stack`} />}

        <div className="app-card__actions">
          {app.href ? (
            <a
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`store-btn store-btn--${kind}`}
            >
              {app.linkLabel}
              <StoreGlyph />
              <span className="visually-hidden"> for {app.name} (opens in a new tab)</span>
            </a>
          ) : (
            <span className="app-card__soon">Coming soon</span>
          )}
        </div>

        {showLegal && (
          <ul className="app-card__legal" aria-label={`${app.name} legal pages`}>
            <li>
              <Link to={app.legal.privacy} className="text-link text-link--quiet">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to={app.legal.terms} className="text-link text-link--quiet">
                Terms of use
              </Link>
            </li>
          </ul>
        )}
      </div>
    </article>
  )
}

export default AppCard
