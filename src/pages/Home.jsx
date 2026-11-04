import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import useFitText from '../hooks/useFitText'
import { person, apps, experiences, socials, youtubeChannel } from '../data/site'
import { heroIntro, statement, lanes } from '../data/home'
import Button from '../components/ui/Button'
import ExternalLink from '../components/ui/ExternalLink'
import ClosingCTA from '../components/ui/ClosingCTA'
import AppCard from '../components/ui/AppCard'
import { TagList } from '../components/ui/Tag'
import { otherProjects } from './projects/data'
import './Home.css'

const [firstName, lastName] = person.name.split(' ')
const [currentJob] = experiences
const EASE = [0.16, 1, 0.3, 1]

// The one orchestrated moment: the name rises out of its line boxes, then the
// supporting copy settles in.
const nameLine = (i) => ({
  initial: { y: '108%' },
  animate: { y: '0%' },
  transition: { duration: 1.1, ease: EASE, delay: 0.1 + i * 0.09 },
})

const rise = (i) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay: 0.55 + i * 0.08 },
})

// Section heading with its place on the page (the home page reads top to
// bottom as four chapters).
function ChapterHead({ index, title, id, aside, tone }) {
  return (
    <header className={`chapter-head${tone ? ` chapter-head--${tone}` : ''}`}>
      <span className="chapter-head__index" aria-hidden="true">
        {index}
      </span>
      <h2 id={id} className="chapter-head__title">
        {title}
      </h2>
      {aside && <div className="chapter-head__aside">{aside}</div>}
    </header>
  )
}

function ProjectCard({ project }) {
  return (
    <li className="proj-card">
      <div className="proj-card__head">
        <h4 className="proj-card__title">{project.title}</h4>
        {project.status && <span className={`status status--${project.status}`}>{project.statusLabel}</span>}
      </div>
      <p className="proj-card__desc">{project.description}</p>
      <TagList tags={project.tags} label={`${project.title} stack`} />
      <ul className="proj-card__links" aria-label={`${project.title} links`}>
        {project.live && (
          <li>
            <ExternalLink href={project.live} newTabHint>
              Live site <span aria-hidden="true">↗</span>
            </ExternalLink>
          </li>
        )}
        {project.github && (
          <li>
            <ExternalLink href={project.github} newTabHint>
              Source <span aria-hidden="true">↗</span>
            </ExternalLink>
          </li>
        )}
      </ul>
    </li>
  )
}

function Home() {
  useDocumentTitle(null)
  const nameRef = useRef(null)
  useFitText(nameRef)

  return (
    <div className="page home">
      {/* ============ HERO ============ */}
      <section className="hero container" aria-labelledby="home-title">
        <h1 id="home-title" className="hero__name" ref={nameRef} lang="tr">
          <span className="hero__line">
            <motion.span className="hero__word" data-fit {...nameLine(0)}>
              {firstName}
            </motion.span>
          </span>
          <span className="hero__line">
            <motion.span className="hero__word" data-fit {...nameLine(1)}>
              {lastName}
              <span className="hero__dot" aria-hidden="true" />
            </motion.span>
          </span>
        </h1>

        <div className="hero__foot">
          <motion.p className="hero__intro" {...rise(0)}>
            {heroIntro}
          </motion.p>

          <motion.div className="hero__side" {...rise(1)}>
            <dl className="hero__facts">
              <div>
                <dt>Now</dt>
                <dd>
                  {currentJob.role}, {currentJob.company}
                </dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>{person.locationLong}</dd>
              </div>
              <div>
                <dt>Elsewhere</dt>
                <dd className="hero__links">
                  {socials.map((s) => (
                    <ExternalLink key={s.id} href={s.href} newTabHint>
                      {s.label}
                    </ExternalLink>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="hero__actions">
              <Button to="/projects">See my work</Button>
              <Button to="/contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ WHAT I WORK ON (teal band) ============ */}
      <div className="band band--teal">
        <section className="section" aria-labelledby="build-title">
          <ChapterHead index="01" title="What I work on" id="build-title" tone="band" />
          <div className="band-lead">
            <p className="band-lead__text">{statement}</p>
            <p className="band-lead__link">
              <Link to="/about" className="text-link">
                More about me
              </Link>
            </p>
          </div>
          <ul className="lanes">
            {lanes.map((lane) => (
              <li key={lane.id} className="lane">
                <p className="lane__area">{lane.area}</p>
                <h3 className="lane__title">{lane.title}</h3>
                <p className="lane__body">{lane.body}</p>
                <TagList tags={lane.tags} label={`${lane.area} stack`} />
                {lane.link === 'youtube' && (
                  <p className="lane__link">
                    <ExternalLink href={youtubeChannel} newTabHint>
                      Watch on YouTube <span aria-hidden="true">↗</span>
                    </ExternalLink>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ============ THINGS I'VE MADE ============ */}
      <section className="section" aria-labelledby="projects-title">
        <ChapterHead
          index="02"
          title="Things I've made"
          id="projects-title"
          aside={
            <Link to="/projects" className="text-link">
              All work
            </Link>
          }
        />

        <h3 className="home-subhead">Systems and sites</h3>
        <ul className="proj-grid">
          {otherProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </ul>

        <div className="home-subhead-row">
          <h3 className="home-subhead">Side projects</h3>
          <Link to="/projects#side-projects" className="text-link text-link--quiet home-subhead-link">
            Details, privacy and terms
          </Link>
        </div>
        <div className="app-grid">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} headingLevel="h4" />
          ))}
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <div className="band band--soft">
        <section className="section" aria-labelledby="exp-title">
          <ChapterHead
            index="03"
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
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="home-exp__row">
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
      </div>

      {/* ============ CONTACT ============ */}
      <ClosingCTA index="04" />
    </div>
  )
}

export default Home
