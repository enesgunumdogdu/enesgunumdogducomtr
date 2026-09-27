import { Button, SectionHeader, TagList } from '../../components/ui'
import { apps } from '../../data/site'

function AppMeta({ app }) {
  // Platform row only when site.js sources it (null = unsourced, hidden).
  const rows = app.platform ? [{ key: 'Platform', value: app.platform }] : []
  if (app.rating) {
    rows.push({
      key: 'Rating',
      value: (
        <>
          <span aria-hidden="true">{app.rating} ★</span>
          <span className="visually-hidden">Rated {app.rating} out of 5 on the App Store</span>
        </>
      ),
    })
  }
  if (app.languages) rows.push({ key: 'Languages', value: app.languages })

  return (
    <dl className="work-meta">
      {rows.map((row) => (
        <div key={row.key}>
          <dt>{row.key}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function AppBlock({ app, index }) {
  const titleId = `app-${app.id}-title`
  return (
    <article className="work-app" aria-labelledby={titleId}>
      {/* Brand tint comes from site.js (the only allowed per-app colour). */}
      <div className="work-app__field" style={{ '--app-tint': app.tint }}>
        <img
          className="app-icon work-app__icon"
          src={app.icon}
          alt=""
          width="96"
          height="96"
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      <div className="work-app__body">
        <p className="work-app__index">{String(index + 1).padStart(2, '0')}</p>
        <div className="work-app__titlerow">
          <h3 id={titleId} className="work-app__title">
            {app.name}
          </h3>
          <p className={`status status--${app.status}`}>{app.statusLabel}</p>
        </div>

        {app.pullquote && <p className="work-app__quote">“{app.pullquote}”</p>}
        <p className="work-app__desc">{app.description}</p>

        <AppMeta app={app} />
        <TagList tags={app.tags} label={`${app.name} stack`} />

        <div className="work-app__actions">
          {app.href && (
            <Button href={app.href} variant="secondary" arrow>
              {app.linkLabel}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

function FeaturedApps() {
  return (
    <section id="apps" className="section section--flush-top" aria-labelledby="apps-title">
      <SectionHeader index="01" label="Apps" title="iOS and macOS apps." id="apps-title" />
      <div className="work-apps">
        {apps.map((app, i) => (
          <AppBlock key={app.id} app={app} index={i} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedApps
