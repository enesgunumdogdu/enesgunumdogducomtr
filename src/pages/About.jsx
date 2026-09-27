import { ClosingCTA, ExternalLink, SectionHeader, SpecTable, TagList } from '../components/ui'
import { experiences, person, socials } from '../data/site'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './About.css'

// Skills, grouped for scanning (ui.md anti-slop #8: no marquee). 24 items total,
// same set and spelling as before.
const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'TypeScript', 'C#', 'Swift', 'SQL', 'PLSQL'] },
  { label: 'Backend', items: ['Spring Boot', 'Spring Security', 'Spring Cloud'] },
  { label: 'Frontend', items: ['React', 'Vue.js'] },
  { label: 'Data', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'] },
  { label: 'Infra', items: ['Docker', 'GCP', 'RabbitMQ', 'Terraform'] },
  { label: 'Tools', items: ['Git', 'Swagger', 'Postman'] },
]

function TimelineItem({ period, current, logo, logoSize = [32, 32], logoAlt, company, role, children, tags, tagLabel, link, linkLabel }) {
  return (
    <li className="timeline-item">
      <p className="timeline-item__period">
        {period}
        {current && <span className="timeline-item__now">Now</span>}
      </p>
      <div>
        <div className="timeline-item__head">
          <span className="logo-box">
            <img src={logo} alt={logoAlt} width={logoSize[0]} height={logoSize[1]} loading="lazy" decoding="async" />
          </span>
          <h3 className="timeline-item__company">{company}</h3>
        </div>
        <p className="timeline-item__role">{role}</p>
        <p className="timeline-item__desc">{children}</p>
        <TagList tags={tags} label={tagLabel} />
        {link && (
          <p className="timeline-item__link">
            <ExternalLink href={link} newTabHint>
              {linkLabel} <span aria-hidden="true">↗</span>
            </ExternalLink>
          </p>
        )}
      </div>
    </li>
  )
}

function About() {
  useDocumentTitle('About')

  return (
    <div className="page">
      {/* ---------- Intro ---------- */}
      <section className="section" aria-labelledby="about-title">
        <div className="about-intro">
          <div>
            <SectionHeader
              as="h1"
              id="about-title"
              label="About"
              title="A backend engineer who ships iOS apps on weekends and teaches algorithms on YouTube."
            />
            <p className="about-meta">
              <span>
                {person.currentPosition.title} at {person.currentPosition.company}
              </span>
              <span className="about-meta__sep" aria-hidden="true">/</span>
              <span>{person.location}</span>
            </p>
            <div className="about-bio">
              <p>
                Backend developer specialized in Java and the Spring Boot ecosystem. I build scalable
                microservices, design event-driven architectures, and work with cloud platforms like GCP.
              </p>
              <p>
                In my spare time I build native iOS apps with Swift and create educational content about
                Data Structures &amp; Algorithms on YouTube with 50,000+ views. I have a keen interest in AI
                and ML.
              </p>
            </div>
          </div>

          <aside className="about-now" aria-labelledby="about-now-title">
            <h2 id="about-now-title" className="about-now__title">Now</h2>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>
                  {person.currentPosition.title} at {person.currentPosition.company}
                </dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>{person.locationLong}</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>{person.timezone}</dd>
              </div>
              <div>
                <dt>Elsewhere</dt>
                <dd className="about-now__links">
                  {socials.map((s) => (
                    <ExternalLink key={s.id} href={s.href} newTabHint>
                      {s.label}
                    </ExternalLink>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="section section--flush-top" aria-labelledby="experience-title">
        <SectionHeader index="01" label="Experience" title="The receipts." id="experience-title" />
        <ol className="timeline">
          {experiences.map((exp) => (
            <TimelineItem
              key={exp.company}
              period={exp.period}
              current={exp.current}
              logo={exp.logo}
              logoSize={exp.logoSize}
              logoAlt={`${exp.company} logo`}
              company={exp.company}
              role={exp.role}
              tags={exp.tags}
              tagLabel={`${exp.company} stack`}
              link={exp.link}
              linkLabel={exp.linkLabel}
            >
              {exp.description}
            </TimelineItem>
          ))}
        </ol>
      </section>

      {/* ---------- Education ---------- */}
      <section className="section section--flush-top" aria-labelledby="education-title">
        <SectionHeader index="02" label="Education" title="Where it started." id="education-title" />
        <ul className="timeline">
          <TimelineItem
            period="2021 — 2025"
            logo="/logos/erciyes.svg"
            logoAlt="Erciyes University logo"
            company="Erciyes University"
            role="Computer Engineering"
            tags={['Computer Engineering', 'AI/ML', 'TUBITAK 2209-A']}
            tagLabel="Education topics"
          >
            During university, I convinced TUBITAK (Turkey's NSF equivalent) to fund a project where I
            trained ML models to paint in the style of deceased Turkish artists. The idea was simple:{' '}
            <span className="timeline-item__emph">what if Osman Hamdi Bey could paint Istanbul in 2026?</span>{' '}
            The implementation was not simple.
          </TimelineItem>
        </ul>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="section section--flush-top" aria-labelledby="skills-title">
        <SectionHeader index="03" label="Skills" title="What I work with." id="skills-title" />
        <SpecTable
          label="Skills by area"
          rows={skillGroups.map((g) => ({ label: g.label, value: g.items }))}
        />
      </section>

      {/* ---------- Closing CTA (shared) ---------- */}
      <ClosingCTA index="04" className="section--flush-top" />
    </div>
  )
}

export default About
