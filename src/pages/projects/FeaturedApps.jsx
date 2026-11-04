import { Link } from 'react-router-dom'
import { ExternalLink, SectionHeader, TagList } from '../../components/ui'
import { apps } from '../../data/site'

// Personal side projects, kept compact and platform-neutral: no store badges
// or ratings. Each entry links its privacy policy and terms of use (app
// review and users rely on these URLs) plus an optional plain external link.

function SideProject({ app }) {
  const titleId = `app-${app.id}-title`
  return (
    <article className="work-app" aria-labelledby={titleId}>
      <img
        className="app-icon work-app__icon"
        src={app.icon}
        alt=""
        width="56"
        height="56"
        loading="lazy"
        decoding="async"
      />

      <div className="work-app__body">
        <div className="work-app__titlerow">
          <h3 id={titleId} className="work-app__title">
            {app.name}
          </h3>
          <p className={`status status--${app.status}`}>{app.statusLabel}</p>
        </div>

        <p className="work-app__desc">{app.description}</p>
        <TagList tags={app.tags} label={`${app.name} stack`} />

        <ul className="work-app__links" aria-label={`${app.name} links`}>
          {app.href && (
            <li>
              <ExternalLink href={app.href} newTabHint>
                {app.linkLabel} <span aria-hidden="true">↗</span>
              </ExternalLink>
            </li>
          )}
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
      </div>
    </article>
  )
}

function FeaturedApps() {
  return (
    <section id="side-projects" className="section section--flush-top" aria-labelledby="apps-title">
      <SectionHeader
        title="Side projects."
        id="apps-title"
        lede="Small apps I make in my own time, each with its own privacy policy and terms."
      />
      <div className="work-apps">
        {apps.map((app) => (
          <SideProject key={app.id} app={app} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedApps
