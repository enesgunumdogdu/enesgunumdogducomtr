import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import useFitText from '../hooks/useFitText'
import { introDelay } from '../motion/intro'
import { person, apps, experiences } from '../data/site'
import { statement, stats, lanes, techStack } from '../data/home'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import ClosingCTA from '../components/ui/ClosingCTA'
import Magnetic from '../components/ui/Magnetic'
import Marquee from '../components/ui/Marquee'
import ScrollWords from '../components/ui/ScrollWords'
import { TagList } from '../components/ui/Tag'
import HeroInk from '../components/hero/HeroInk'
import './Home.css'

const STATUS_CLASS = { live: 'status--live', oss: 'status--oss', soon: 'status--soon' }
const [firstName, lastName] = person.name.split(' ')
const [currentJob] = experiences
const stackItems = techStack.flatMap((g) => g.items)
const EASE = [0.16, 1, 0.3, 1]

// The one orchestrated moment: the name rises out of its line boxes, then the
// supporting copy settles, then the ink layer takes over the name.
const nameLine = (i) => ({
  initial: { y: '110%' },
  animate: { y: '0%' },
  transition: { duration: 1.2, ease: EASE, delay: introDelay + i * 0.08 },
})

const rise = (i) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: EASE, delay: introDelay + 0.45 + i * 0.08 },
})

// Floating app preview that trails the pointer over the work list (mouse only).
function useTrailingPreview() {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let frame
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    const loop = () => {
      const dx = tx - x
      x += dx * 0.12
      y += (ty - y) * 0.12
      const tilt = Math.max(Math.min(dx * 0.05, 12), -12)
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${tilt}deg)`
      frame = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    frame = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
    }
  }, [reduced])

  return ref
}

function AppRow({ app, onHover }) {
  const meta = [app.platform, app.ratingLabel, app.languages && `${app.languages} languages`].filter(Boolean)

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
      <h3 className="home-app__name">
        <span className="home-app__name-text">{app.name}</span>
      </h3>
      <p className="home-app__desc">{app.summary}</p>
      <ul className="home-app__meta" aria-label={`${app.name} details`}>
        <li>
          <span className={`status ${STATUS_CLASS[app.status]}`}>{app.statusLabel}</span>
        </li>
        {meta.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      {app.href && <span className="visually-hidden">{app.linkLabel} (opens in a new tab)</span>}
    </>
  )

  const hover = {
    onPointerEnter: () => onHover(app.id),
    onPointerLeave: () => onHover(null),
  }

  if (!app.href) {
    return (
      <div className="home-app" {...hover}>
        {content}
      </div>
    )
  }
  return (
    <a
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      className="home-app is-link"
      data-cursor="Open"
      {...hover}
    >
      {content}
    </a>
  )
}

function Home() {
  useDocumentTitle(null)
  const nameRef = useRef(null)
  const [inkReady, setInkReady] = useState(false)
  const [activeApp, setActiveApp] = useState(null)
  const previewRef = useTrailingPreview()
  const onInkReady = useCallback((ready) => setInkReady(ready), [])
  useFitText(nameRef)

  const preview = apps.find((a) => a.id === activeApp)

  return (
    <div className="page home">
      {/* ============ HERO ============ */}
      <section className={`hero${inkReady ? ' is-ink' : ''}`} aria-labelledby="home-title">
        <HeroInk nameRef={nameRef} startAfter={introDelay + 1.5} onReady={onInkReady} />

        <div className="hero__inner container">
          <div className="hero__top">
            <motion.p className="hero__intro" {...rise(0)}>
              Software engineer. I like building things end to end, from the server to the
              screen.
            </motion.p>
            <motion.dl className="hero__facts" {...rise(1)}>
              <div>
                <dt>Now</dt>
                <dd>
                  {currentJob.role} at {currentJob.company}
                </dd>
              </div>
            </motion.dl>
          </div>

          <div className="hero__bottom">
            <motion.div className="hero__actions" {...rise(2)}>
              <Magnetic>
                <Button to="/projects" data-cursor="Work">
                  See my work
                </Button>
              </Magnetic>
              <a href="#statement" className="hero__scroll">
                <span className="hero__scroll-line" aria-hidden="true" />
                Scroll
              </a>
            </motion.div>

            <h1 id="home-title" className="hero__name" ref={nameRef} lang="tr">
              <span className="hero__line">
                <motion.span className="hero__word" data-fit data-ink-word {...nameLine(0)}>
                  {firstName}
                </motion.span>
              </span>
              <span className="hero__line">
                <motion.span className="hero__word" data-fit data-ink-word {...nameLine(1)}>
                  {lastName}
                </motion.span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ============ STATEMENT ============ */}
      <section id="statement" className="section home-statement" aria-label="About">
        <ScrollWords className="home-statement__text" text={statement} />
        <div className="home-statement__foot">
          <ul className="home-stats" aria-label="In numbers">
            {stats.map((s) => (
              <li key={s.label} className="home-stats__item">
                <span className="home-stats__value">{s.value}</span>
                <span className="home-stats__label">{s.label}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="text-link home-statement__link">
            More about me
          </Link>
        </div>
      </section>

      {/* ============ SELECTED APPS ============ */}
      <section className="section home-work" aria-labelledby="work-title">
        <SectionHeader
          title="Selected apps"
          id="work-title"
          aside={
            <Link to="/projects" className="text-link">
              All work
            </Link>
          }
        />

        <ul className="home-applist">
          {apps.map((app) => (
            <li key={app.id}>
              <AppRow app={app} onHover={setActiveApp} />
            </li>
          ))}
        </ul>

        {createPortal(
          <div
          ref={previewRef}
          className={`home-preview${preview ? ' is-visible' : ''}`}
          style={preview ? { '--preview-tint': preview.tint } : undefined}
          aria-hidden="true"
        >
          {apps.map((app) => (
            <img
              key={app.id}
              src={app.icon}
              alt=""
              width="256"
              height="256"
              loading="lazy"
              decoding="async"
              className={`home-preview__icon${app.id === activeApp ? ' is-active' : ''}`}
            />
          ))}
          </div>,
          document.body,
        )}
      </section>

      {/* ============ STACK MARQUEE ============ */}
      <section className="home-marquee" aria-label="Tech stack">
        <Marquee
          items={stackItems}
          duration={55}
          label="Technologies I work with"
          renderItem={(item) => (
            <span className="home-marquee__item">
              {item}
              <span className="home-marquee__sep" aria-hidden="true" />
            </span>
          )}
        />
      </section>

      {/* ============ HOW I BUILD ============ */}
      <section className="section home-lanes-section" aria-labelledby="build-title">
        <SectionHeader title="What I work on" id="build-title" />

        <ul className="home-lanes">
          {lanes.map((lane) => (
            <li key={lane.index} className="home-lane">
              <p className="home-lane__area">{lane.area}</p>
              <h3 className="home-lane__title">{lane.title}</h3>
              <p className="home-lane__body">{lane.body}</p>
              <TagList tags={lane.tags} label={`${lane.area} stack`} />
            </li>
          ))}
        </ul>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section className="section" aria-labelledby="exp-title">
        <SectionHeader
          title="Experience"
          id="exp-title"
          aside={
            <Link to="/about" className="text-link">
              Full background
            </Link>
          }
        />

        <ul className="home-exp">
          {experiences.map((job) => (
            <li key={job.company}>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="home-exp__row"
                data-cursor="Visit"
              >
                <span className="home-exp__period">
                  {job.period}
                  {job.current && <span className="home-exp__now">Now</span>}
                </span>
                <span className="home-exp__company">{job.company}</span>
                <span className="home-exp__role">{job.role}</span>
                <span className="home-exp__arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ CONTACT ============ */}
      <ClosingCTA />
    </div>
  )
}

export default Home
