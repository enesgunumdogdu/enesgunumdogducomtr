import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { ease, duration, stagger, variants } from '../motion/tokens'
import { person, socials, apps, experiences } from '../data/site'
import { hero, stats, lanes, techStack } from '../data/home'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import ClosingCTA from '../components/ui/ClosingCTA'
import SpecTable from '../components/ui/SpecTable'
import { TagList } from '../components/ui/Tag'
import SocialIcon from '../components/ui/SocialIcon'
import './Home.css'

const STATUS_CLASS = { live: 'status--live', oss: 'status--oss', soon: 'status--soon' }
const [firstName, lastName] = person.name.split(' ')
const [currentJob] = experiences
const recentJobs = experiences.slice(0, 3)
const stackRows = techStack.map((g) => ({ label: g.group, value: g.items }))

// One-shot load fade for the hero only (≤320ms, 60ms stagger). Nothing is
// ever hidden behind a scroll trigger.
const heroItem = (i) => ({
  variants: variants.fadeLift,
  initial: 'hidden',
  animate: 'shown',
  transition: { duration: duration.phrase, ease: ease.out, delay: i * stagger },
})

// One row per app. The whole row is a single link when the app has a
// destination; "Soon" is a static row with no arrow.
function AppRow({ app }) {
  const meta = [app.ratingLabel, app.languages && `${app.languages} languages`, app.platform]
    .filter(Boolean)
    .join(' · ')

  const content = (
    <>
      <img
        src={app.icon}
        alt=""
        width="256"
        height="256"
        loading="lazy"
        decoding="async"
        className="app-icon home-app__icon"
      />
      <div className="home-app__main">
        <div className="home-app__head">
          <h3 className="home-app__name">{app.name}</h3>
          <span className={`status ${STATUS_CLASS[app.status]}`}>{app.statusLabel}</span>
        </div>
        <p className="home-app__meta mono">{meta}</p>
      </div>
      <div className="home-app__body">
        {app.pullquote && <p className="home-app__quote">{app.pullquote}</p>}
        <p className="home-app__desc">{app.summary}</p>
        <TagList tags={app.tags} label={`${app.name} stack`} />
      </div>
      {app.href ? (
        <span className="home-app__arrow" aria-hidden="true">→</span>
      ) : (
        <span className="home-app__arrow" aria-hidden="true" />
      )}
      {app.href && <span className="visually-hidden">{app.linkLabel} (opens in a new tab)</span>}
    </>
  )

  if (!app.href) return <div className="home-app">{content}</div>
  return (
    <a href={app.href} target="_blank" rel="noopener noreferrer" className="home-app is-link">
      {content}
    </a>
  )
}

function Home() {
  useDocumentTitle(null)

  return (
    <div className="page home">
      {/* ============ HERO ============ */}
      <section className="home-hero container" aria-labelledby="home-title">
        <div className="home-hero__grid">
          <div className="home-hero__main">
            <motion.p className="home-hero__eyebrow" {...heroItem(0)}>
              {currentJob.role} at {currentJob.company}{' '}
              <span className="home-hero__nowrap">· {person.location}</span>
            </motion.p>

            <motion.h1 id="home-title" className="home-hero__name" {...heroItem(1)}>
              {firstName}{' '}
              <span className="home-hero__nowrap">
                {lastName}
                <span className="home-hero__dot">.</span>
              </span>
            </motion.h1>

            <motion.p className="home-hero__role" {...heroItem(2)}>
              <strong>Backend engineer &amp; iOS developer.</strong> {hero.tagline[0]}{' '}
              {hero.tagline[1]}
            </motion.p>

            <motion.p className="home-hero__lead" {...heroItem(3)}>
              The guy behind <strong>Cartoon Weather</strong> (5.0 stars, 19 languages) and 50K+
              views worth of algorithm breakdowns on YouTube.
            </motion.p>

            <motion.div className="home-hero__actions" {...heroItem(4)}>
              <Button to={hero.cta.to} arrow>
                {hero.cta.label}
              </Button>
              <Link to="/contact" className="btn btn--text">
                Contact <span aria-hidden="true">→</span>
              </Link>
              <ul className="home-socials" aria-label="Elsewhere">
                {socials.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      aria-label={`${s.label} (opens in a new tab)`}
                    >
                      <SocialIcon id={s.id} />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>

        <ul className="home-stats" aria-label="In numbers">
          {stats.map((s) => (
            <li key={s.label} className="home-stats__cell">
              <span className="home-stats__number">
                {s.number}
                {s.suffix && <span className="home-stats__suffix">{s.suffix}</span>}
              </span>
              <span className="home-stats__label mono">{s.label}</span>
              <span className="home-stats__sub">{s.sub}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ SHIPPED ============ */}
      <section className="section" aria-labelledby="work-title">
        <SectionHeader
          index="01"
          label="Shipped"
          title="Apps people download."
          id="work-title"
          aside={
            <Link to="/projects" className="text-link">
              All work <span aria-hidden="true">→</span>
            </Link>
          }
        />

        <ul className="home-applist">
          {apps.map((app) => (
            <li key={app.id}>
              <AppRow app={app} />
            </li>
          ))}
        </ul>
      </section>

      {/* ============ HOW I BUILD ============ */}
      <section className="section" aria-labelledby="build-title">
        <SectionHeader
          index="02"
          label="How I build"
          title="Three lanes, one developer."
          id="build-title"
        />

        <ol className="home-lanes">
          {lanes.map((lane) => (
            <li key={lane.index} className="home-lane">
              <p className="home-lane__area mono">
                <span className="home-lane__index">{lane.index}</span> / {lane.area}
              </p>
              <h3 className="home-lane__title">{lane.title}</h3>
              <p className="home-lane__body">{lane.body}</p>
              <TagList tags={lane.tags} label={`${lane.area} stack`} />
            </li>
          ))}
        </ol>

        <div className="home-stack">
          <h3 className="home-stack__title mono">Stack</h3>
          <SpecTable rows={stackRows} />
        </div>
      </section>

      {/* ============ EXPERIENCE SNAPSHOT ============ */}
      <section className="section" aria-labelledby="exp-title">
        <SectionHeader
          index="03"
          label="Background"
          title="Experience"
          id="exp-title"
          aside={
            <Link to="/about" className="text-link">
              Full background <span aria-hidden="true">→</span>
            </Link>
          }
        />

        <ul className="home-exp">
          {recentJobs.map((job) => (
            <li key={job.company} className="home-exp__row">
              <span className="home-exp__logo">
                <img
                  src={job.logo}
                  alt=""
                  width={job.logoSize[0]}
                  height={job.logoSize[1]}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="home-exp__company">
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="home-exp__link">
                  {job.company}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </span>
              <span className="home-exp__role">{job.role}</span>
              <span className="home-exp__period mono">
                {job.period}
                {job.current && <span className="home-exp__now">Now</span>}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ CONTACT ============ */}
      <ClosingCTA index="04" />
    </div>
  )
}

export default Home
