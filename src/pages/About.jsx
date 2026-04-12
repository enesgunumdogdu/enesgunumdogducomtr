import { Box, Typography, Link } from '@mui/material'
import { School, OpenInNew } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/animations/ScrollReveal'
import DraftedLine from '../components/animations/DraftedLine'
import Marquee from '../components/animations/Marquee'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { ease } from '../motion/tokens'

function About() {
  useDocumentTitle('About')

  const allSkills = [
    'Java', 'Python', 'TypeScript', 'C#', 'Swift', 'SQL', 'PLSQL',
    'Spring Boot', 'Spring Security', 'Spring Cloud', 'React', 'Vue.js',
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch',
    'Docker', 'GCP', 'RabbitMQ', 'Terraform',
    'Git', 'Swagger', 'Postman'
  ]

  const experiences = [
    {
      logo: '/logos/avevrak.ico',
      title: 'Avevrak.com',
      role: 'Software Developer',
      period: '2025',
      description: 'Built an AI-powered document generation system using LLMs and vector search. Cloud pipelines on GCP with 95% accuracy in automated tagging.',
      tags: ['GCP', 'Python', 'LLM', 'FAISS'],
      link: 'https://avevrak.com'
    },
    {
      logo: '/logos/toucancodelabs.png',
      title: 'Toucan Code Labs',
      role: 'Software Developer',
      period: '2023 — 2024',
      description: 'Developed microservices for the RoboNimbus mobile platform. Designed RESTful APIs and improved system reliability through performance optimization.',
      tags: ['Microservices', 'Mobile', 'API'],
      link: 'https://toucancodelabs.com'
    },
    {
      logo: '/logos/bionluk.png',
      title: 'Bionluk.com',
      role: 'Freelance Developer',
      period: '2021 — 2025',
      description: 'Completed 25+ client projects ranging from backend APIs to full-stack web applications. Specialized in Java, Python, and custom solutions.',
      tags: ['Freelance', 'Java', 'Python'],
      link: 'https://bionluk.com/enesgunumdogdu'
    }
  ]

  return (
    <Box className="page">
      {/* Hero */}
      <Box className="section" sx={{ pb: 4 }}>
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: ease.ink }}
        >
          <Box className="section-label">About</Box>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'var(--font-display)',
              fontVariationSettings: "'opsz' 144, 'wght' 300, 'SOFT' 40",
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              mb: 4,
              fontFeatureSettings: "'ss01'",
              maxWidth: 900,
            }}
          >
            A backend engineer who ships iOS apps{' '}
            <Box component="em" sx={{ fontStyle: 'italic', fontVariationSettings: "'wght' 400", color: 'var(--text-muted)' }}>
              on weekends
            </Box>
            {' '}and teaches algorithms{' '}
            <Box component="em" sx={{ fontStyle: 'italic', fontVariationSettings: "'wght' 400", color: 'var(--accent)' }}>
              on YouTube.
            </Box>
          </Typography>

          {/* Role metadata */}
          <Box
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              mb: 5,
              textTransform: 'uppercase',
            }}
          >
            <span>Enes Günümdoğdu</span>
            <span style={{ color: 'var(--text-dim)' }}>/</span>
            <span>Antalya, TR</span>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: ease.draft }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 3, md: 6 },
              maxWidth: 920,
            }}
          >
            <Box>
              {/* Drop cap paragraph */}
              <Typography
                sx={{
                  color: 'var(--text-primary)',
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  fontFamily: 'var(--font-body)',
                  '&::first-letter': {
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 144, 'wght' 300",
                    fontSize: '4.5em',
                    float: 'left',
                    lineHeight: 0.85,
                    paddingRight: '0.12em',
                    paddingTop: '0.05em',
                    color: 'var(--accent)',
                  }
                }}
              >
                Backend developer specialized in Java and the Spring Boot ecosystem.
                I build scalable microservices, design event-driven architectures,
                and work with cloud platforms like GCP.
              </Typography>
            </Box>
            <Typography
              sx={{
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontSize: '1.05rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              In my spare time I build native iOS apps with Swift and create
              educational content about Data Structures &amp; Algorithms on YouTube
              with <Box component="span" sx={{ color: 'var(--text-primary)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>50,000+ views.</Box> I have a keen interest in AI and ML.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Tech Stack Marquee */}
      <Box sx={{ py: 5, borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <Marquee items={allSkills} speed={50} />
      </Box>

      {/* Experience */}
      <Box className="section">
        <ScrollReveal preset="inkBleed">
          <Box className="section-header">
            <Box className="section-label">§ 01 — Experience</Box>
            <Typography className="section-title">
              The <Box component="em" sx={{ fontStyle: 'italic', color: 'var(--accent)' }}>receipts.</Box>
            </Typography>
          </Box>
        </ScrollReveal>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.08} preset="clipReveal">
              <Link
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ display: 'block' }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '56px 1fr auto' },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: { xs: 2, md: 3 },
                    py: 4,
                    px: { xs: 0, md: 2 },
                    borderBottom: '1px solid var(--border-subtle)',
                    transition: 'all 0.3s var(--ease-draft)',
                    '&:hover': {
                      px: { md: 3 },
                      '& .exp-title': {
                        color: 'var(--accent)',
                        fontVariationSettings: "'opsz' 48, 'wght' 500",
                      },
                      '& .exp-arrow': { opacity: 1, transform: 'translateX(4px)' },
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '2px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 0.75,
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={exp.logo}
                      alt={exp.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </Box>

                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.75, flexWrap: 'wrap' }}>
                      <Typography
                        className="exp-title"
                        sx={{
                          fontFamily: 'var(--font-display)',
                          fontVariationSettings: "'opsz' 48, 'wght' 400",
                          fontSize: '1.4rem',
                          color: 'var(--text-primary)',
                          transition: 'all 0.3s var(--ease-draft)',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--text-dim)',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>
                    <Typography sx={{
                      color: 'var(--text-muted)',
                      fontSize: '0.78rem',
                      mb: 1,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      {exp.role}
                    </Typography>
                    <Typography sx={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      maxWidth: 580,
                      fontFamily: 'var(--font-body)',
                    }}>
                      {exp.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, mt: 1.25, flexWrap: 'wrap' }}>
                      {exp.tags.map((tag, ti) => (
                        <Box
                          key={ti}
                          sx={{
                            fontFamily: 'var(--font-mono)',
                            px: 1,
                            py: 0.3,
                            fontSize: '0.62rem',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '2px',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <OpenInNew
                    className="exp-arrow"
                    sx={{
                      fontSize: 16,
                      color: 'var(--text-dim)',
                      opacity: 0,
                      transition: 'all 0.3s var(--ease-draft)',
                      display: { xs: 'none', md: 'block' },
                    }}
                  />
                </Box>
              </Link>
            </ScrollReveal>
          ))}
        </Box>
      </Box>

      {/* Education */}
      <Box className="section" sx={{ pt: 0 }}>
        <ScrollReveal preset="inkBleed">
          <Box className="section-header">
            <Box className="section-label">§ 02 — Education</Box>
            <Typography className="section-title">
              Where it <Box component="em" sx={{ fontStyle: 'italic', color: 'var(--accent)' }}>started.</Box>
            </Typography>
          </Box>
        </ScrollReveal>

        <ScrollReveal delay={0.08} preset="clipReveal">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '56px 1fr' },
              alignItems: 'flex-start',
              gap: 3,
              py: 3,
              maxWidth: 780,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '2px',
                background: 'var(--accent-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                flexShrink: 0,
              }}
            >
              <School sx={{ fontSize: 22 }} />
            </Box>

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.75, flexWrap: 'wrap' }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 48, 'wght' 400",
                    fontSize: '1.4rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  Erciyes University
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.1em',
                  }}
                >
                  2021 — 2025
                </Typography>
              </Box>
              <Typography sx={{
                color: 'var(--text-muted)',
                fontSize: '0.78rem',
                mb: 1,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                Computer Engineering
              </Typography>
              <Typography sx={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                maxWidth: 580,
                fontFamily: 'var(--font-body)',
              }}>
                During university, I convinced TUBITAK (Turkey's NSF equivalent) to fund a project
                where I trained ML models to paint in the style of deceased Turkish artists. The idea
                was simple: <Box component="span" sx={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>what if Osman Hamdi Bey could paint Istanbul in 2026?</Box> The implementation was not simple.
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, mt: 1.25, flexWrap: 'wrap' }}>
                {['Computer Engineering', 'AI/ML', 'TUBITAK 2209-A'].map((tag, i) => (
                  <Box
                    key={i}
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      px: 1,
                      py: 0.3,
                      fontSize: '0.62rem',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  )
}

export default About
