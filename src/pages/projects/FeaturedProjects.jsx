import { ExternalLink, SectionHeader, TagList } from '../../components/ui'
import { youtubeChannel } from '../../data/site'
import { otherProjects, youtubeProject } from './data'

// Backend & web work as a table-like list (ux.md §3.5): name | what | stack | links.
// Rows are not links themselves; each row has explicit Live / GitHub links.
export function BackendProjects() {
  return (
    <section id="backend" className="section section--flush-top" aria-labelledby="backend-title">
      <SectionHeader index="02" label="Backend & web" title="Systems and sites." id="backend-title" />
      <ul className="work-list">
        {otherProjects.map((p) => (
          <li key={p.id} className="work-row">
            <div className="work-row__name">
              <h3 className="work-row__title">{p.title}</h3>
              {p.status && <p className={`status status--${p.status}`}>{p.statusLabel}</p>}
            </div>
            <p className="work-row__desc">{p.description}</p>
            <TagList tags={p.tags} label={`${p.title} stack`} className="work-row__tags" />
            <ul className="work-row__links" aria-label={`${p.title} links`}>
              {p.live && (
                <li>
                  <ExternalLink href={p.live} newTabHint>
                    Live site <span aria-hidden="true">↗</span>
                  </ExternalLink>
                </li>
              )}
              {p.github && (
                <li>
                  <ExternalLink href={p.github} newTabHint>
                    GitHub <span aria-hidden="true">↗</span>
                  </ExternalLink>
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Teaching() {
  const p = youtubeProject
  return (
    <section id="teaching" className="section section--flush-top" aria-labelledby="teaching-title">
      <SectionHeader index="03" label="Teaching" title={p.title} id="teaching-title" />
      <div className="work-teaching">
        <p className="work-teaching__metric">
          {p.metric.value}
          <span className="work-teaching__metric-label">{p.metric.label}</span>
        </p>
        <div>
          <p className="work-row__desc">{p.description}</p>
          <TagList tags={p.tags} label="Topics" className="work-row__tags" />
          <p className="work-teaching__link">
            <ExternalLink href={youtubeChannel} newTabHint>
              Watch on YouTube <span aria-hidden="true">↗</span>
            </ExternalLink>
          </p>
        </div>
      </div>
    </section>
  )
}
