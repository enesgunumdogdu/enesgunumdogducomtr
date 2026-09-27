import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ExternalLink, SectionHeader } from './ui'
import { apps } from '../data/site'
import '../pages/LegalPage.css'

// Props API is a contract with the 8 read-only legal data files:
//   kind, appName, effectiveDate?, lastUpdated, intro, sections[]
//   section = { title, content: [{ subtitle?, text?, items?[], note?, contactLink? }] }
//   note === 'contact-link' renders the contact-page sentence.

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// "3. Information We Collect" → { num: '3.', text: 'Information We Collect' }
const splitNumber = (title) => {
  const m = title.match(/^(\d+(?:\.\d+)*\.?)\s+(.+)$/)
  return m ? { num: m[1], text: m[2] } : { num: null, text: title }
}

function ContactPageLink() {
  return (
    <Link to="/contact" className="text-link">
      contact page
    </Link>
  )
}

function LegalBlock({ block, isPrivacy }) {
  return (
    <>
      {block.subtitle && <h3 className="legal-h3">{block.subtitle}</h3>}
      {block.text && <p>{block.text}</p>}
      {block.items && (
        <ul className="legal-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {block.note && (
        <p className="legal-note">
          {block.note === 'contact-link' ? (
            <>
              To exercise these rights or for any questions, please visit our <ContactPageLink />.
            </>
          ) : (
            block.note
          )}
        </p>
      )}
      {block.contactLink && (
        <p>
          {isPrivacy
            ? 'For privacy questions or to exercise your rights, please visit our '
            : 'For questions about these Terms, please visit our '}
          <ContactPageLink />.
        </p>
      )}
    </>
  )
}

function LegalPage({ kind, appName, effectiveDate, lastUpdated, intro, sections }) {
  const isPrivacy = kind.toLowerCase().includes('privacy')
  const app = apps.find((a) => a.legal.appName === appName)
  const sibling = app
    ? isPrivacy
      ? { to: app.legal.terms, label: 'Terms of Use' }
      : { to: app.legal.privacy, label: 'Privacy Policy' }
    : null
  const appLink = app?.appStoreUrl || app?.href || null

  // Stable, unique anchor ids from section titles (number stripped).
  const toc = useMemo(() => {
    const seen = {}
    return sections.map((section) => {
      const { num, text } = splitNumber(section.title)
      let id = slugify(text) || 'section'
      seen[id] = (seen[id] || 0) + 1
      if (seen[id] > 1) id = `${id}-${seen[id]}`
      return { id, num, text }
    })
  }, [sections])

  const [activeId, setActiveId] = useState(null)
  const { hash } = useLocation()

  // Deep links (/nsai-privacy-policy#retention) must land on first load.
  useEffect(() => {
    if (!hash) return undefined
    const id = decodeURIComponent(hash.slice(1))
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
    })
    return () => cancelAnimationFrame(frame)
  }, [hash])

  // Current-section highlight for the TOC.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined
    const headings = toc.map((t) => document.getElementById(t.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-72px 0px -65% 0px', threshold: 0 },
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [toc])

  const tocList = (
    <ol className="legal-toc__list">
      {toc.map((t) => (
        <li key={t.id}>
          <a
            href={`#${t.id}`}
            className="legal-toc__link"
            aria-current={activeId === t.id ? 'location' : undefined}
          >
            {t.num && <span className="legal-toc__num">§{t.num.replace(/\.$/, '')}</span>}
            <span>{t.text}</span>
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <div className="page">
      <div className="section legal">
        <div className="legal-layout">
          {/* Desktop TOC (≥1024, sticky) */}
          <nav className="legal-toc legal-toc--rail" aria-label="On this page">
            <p className="legal-toc__title">On this page</p>
            {tocList}
          </nav>

          <article className="legal-article" aria-labelledby="legal-title">
            {app && (
              <p className="legal-app">
                <img
                  className="app-icon legal-app__icon"
                  src={app.icon}
                  alt=""
                  width="32"
                  height="32"
                  decoding="async"
                />
                {appLink ? (
                  <ExternalLink href={appLink} className="text-link text-link--quiet" newTabHint>
                    {app.name}
                  </ExternalLink>
                ) : (
                  <span>{app.name}</span>
                )}
              </p>
            )}

            <SectionHeader
              as="h1"
              id="legal-title"
              label={`Legal / ${appName}`}
              title={
                <>
                  {kind}
                  <span className="visually-hidden"> — {appName}</span>
                </>
              }
              lede={isPrivacy ? 'How we handle your information.' : 'The agreement between you and the operator.'}
              className="legal-header"
            />

            <dl className="legal-dates">
              {effectiveDate && (
                <div>
                  <dt>Effective</dt>
                  <dd>{effectiveDate}</dd>
                </div>
              )}
              <div>
                <dt>Last updated</dt>
                <dd>{lastUpdated}</dd>
              </div>
            </dl>

            {sibling && (
              <p className="legal-sibling">
                Also:{' '}
                <Link to={sibling.to} className="text-link">
                  {sibling.label}
                </Link>
              </p>
            )}

            {/* Mobile / tablet TOC (<1024, collapsed) */}
            <details className="legal-toc legal-toc--details">
              <summary>
                Contents <span className="legal-toc__count">({toc.length})</span>
              </summary>
              <nav aria-label="On this page">{tocList}</nav>
            </details>

            <div className="legal-prose">
              <p className="legal-intro">{intro}</p>

              {sections.map((section, i) => (
                <section key={toc[i].id} aria-labelledby={toc[i].id}>
                  <h2 id={toc[i].id} className="legal-h2">
                    {toc[i].num && <span className="legal-h2__num">{toc[i].num} </span>}
                    {toc[i].text}
                  </h2>
                  {section.content.map((block, j) => (
                    <LegalBlock key={j} block={block} isPrivacy={isPrivacy} />
                  ))}
                </section>
              ))}
            </div>

            <footer className="legal-sign">
              <span>© {new Date().getFullYear()} Enes Günümdoğdu</span>
              <span>{appName}</span>
            </footer>
            <p className="legal-top">
              <a href="#legal-title" className="text-link text-link--quiet">
                <span aria-hidden="true">↑ </span>Back to top
              </a>
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default LegalPage
