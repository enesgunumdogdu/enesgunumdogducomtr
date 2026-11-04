import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { person, apps, experiences, youtubeChannel } from '../data/site'
import { heroIntro, statement, lanes } from '../data/home'
import { otherProjects } from './projects/data'
import Button from '../components/ui/Button'
import ExternalLink from '../components/ui/ExternalLink'
import SectionHeader from '../components/ui/SectionHeader'
import ClosingCTA from '../components/ui/ClosingCTA'
import { TagList } from '../components/ui/Tag'
import Dial from '../components/hero/Dial'
import './Home.css'

const [firstName, lastName] = person.name.split(' ')
const [currentJob] = experiences
const EASE = [0.16, 1, 0.3, 1]

// The one orchestrated moment: the hero settles in, line by line.
const rise = (i) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay: 0.1 + i * 0.08 },
})

function SideProject({ app }) {
  return (
    <li className="home-side">
      <img
        src={app.icon}
        alt=""
        width="256"
        height="256"
        loading="lazy"
        decoding="async"
        className="app-icon home-side__icon"
      />
      <div className="home-side__body">
        <h4 className="home-side__name">
          {app.name}
          <span className={`status status--${app.status}`}>{app.statusLabel}</span>
        </h4>
        <p className="home-side__desc">{app.summary}</p>
      </div>
    </li>
  )
}

function ProjectRow({ project }) {
  return (
    <li className="home-proj">
      <div className="home-proj__head">
        <h4 className="home-proj__title">{project.title}</h4>
        {project.status && <span className={`status status--${project.status}`}>{project.statusLabel}</span>}
      </div>
      <p className="home-proj__desc">{project.description}</p>
      <TagList tags={project.tags} label={`${project.title} stack`} />
      <ul className="home-proj__links" aria-label={`${project.title} links`}>
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

  return (
    <div className="page home">
      {/* ============ HERO ============ */}
      <section className="hero container" aria-labelledby="home-title">
        <div className="hero__text">
          <motion.h1 id="home-title" className="hero__name" lang="tr" {...rise(0)}>
            <span>{firstName}</span> <span>{lastName}</span>
          </motion.h1>
          <motion.p className="hero__intro" {...rise(1)}>
            {heroIntro}
          </motion.p>
          <motion.div className="hero__actions" {...rise(2)}>
            <Button to="/projects">See my work</Button>
            <Button to="/contact" variant="secondary">
              Get in touch
            </Button>
          </motion.div>
          <motion.p className="hero__now" {...rise(3)}>
            <span className="hero__now-dot" aria-hidden="true" />
            Now: {currentJob.role}, {currentJob.company}
          </motion.p>
        </div>

        <motion.div className="hero__dial" {...rise(2)}>
          <Dial />
        </motion.div>
      </section>

      {/* ============ STATEMENT ============ */}
      <section className="section home-statement" aria-label="About">
        <p className="home-statement__text">{statement}</p>
        <p className="home-statement__link">
          <Link to="/about" className="text-link">
            More about me
          </Link>
        </p>
      </section>

      {/* ============ WHAT I WORK ON ============ */}
      <section className="section" aria-labelledby="build-title">
        <SectionHeader title="What I work on" id="build-title" />
        <ul className="home-lanes">
          {lanes.map((lane) => (
            <li key={lane.id} className="home-lane">
              <p className="home-lane__area">{lane.area}</p>
              <h3 className="home-lane__title">{lane.title}</h3>
              <p className="home-lane__body">{lane.body}</p>
              <TagList tags={lane.tags} label={`${lane.area} stack`} />
              {lane.link === 'youtube' && (
                <p className="home-lane__link">
                  <ExternalLink href={youtubeChannel} newTabHint>
                    Watch on YouTube <span aria-hidden="true">↗</span>
                  </ExternalLink>
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ============ PROJECTS ============ */}
      <section className="section" aria-labelledby="projects-title">
        <SectionHeader
          title="Things I've made"
          id="projects-title"
          aside={
            <Link to="/projects" className="text-link">
              All work
            </Link>
          }
        />

        <h3 className="home-subhead">Systems and sites</h3>
        <ul className="home-projs">
          {otherProjects.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
        </ul>

        <div className="home-subhead-row">
          <h3 className="home-subhead">Side projects</h3>
          <Link to="/projects#side-projects" className="text-link text-link--quiet home-subhead-link">
            Details and legal pages
          </Link>
        </div>
        <ul className="home-sides">
          {apps.map((app) => (
            <SideProject key={app.id} app={app} />
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

      {/* ============ CONTACT ============ */}
      <ClosingCTA />
    </div>
  )
}

export default Home
