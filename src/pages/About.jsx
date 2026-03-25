import { Box, Typography, Chip, Link } from '@mui/material'
import { School, OpenInNew } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/animations/ScrollReveal'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import Marquee from '../components/animations/Marquee'
import useDocumentTitle from '../hooks/useDocumentTitle'

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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box className="section-label">About</Box>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              lineHeight: 0.95,
              letterSpacing: '-3px',
              color: 'var(--text-primary)',
              mb: 3,
            }}
          >
            Enes<br />
            <Box component="span" sx={{ color: 'var(--text-dim)' }}>Gunumdogdu</Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
              maxWidth: 900,
            }}
          >
            <Typography
              sx={{
                color: 'var(--text-secondary)',
                lineHeight: 1.9,
                fontSize: '1rem',
              }}
            >
              Backend developer specialized in Java and the Spring Boot ecosystem.
              I build scalable microservices, design event-driven architectures,
              and work with cloud platforms like GCP.
            </Typography>
            <Typography
              sx={{
                color: 'var(--text-secondary)',
                lineHeight: 1.9,
                fontSize: '1rem',
              }}
            >
              In my spare time I build native iOS apps with Swift and create
              educational content about Data Structures & Algorithms on YouTube
              with 50K+ views. I have a keen interest in AI and ML.
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
        <ScrollReveal>
          <Box className="section-header">
            <Box className="section-label">Experience</Box>
            <Typography className="section-title">
              Where I've worked.
            </Typography>
          </Box>
        </ScrollReveal>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
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
                    gridTemplateColumns: { xs: '1fr', md: '60px 1fr auto' },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: { xs: 2, md: 3 },
                    py: 3,
                    px: { xs: 0, md: 2 },
                    borderBottom: '1px solid var(--border-subtle)',
                    transition: 'all 0.3s ease',
                    borderRadius: '8px',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.02)',
                      px: { md: 3 },
                      '& .exp-title': { color: 'var(--accent)' },
                      '& .exp-arrow': { opacity: 1, transform: 'translateX(4px)' },
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.95)',
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
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                      <Typography
                        className="exp-title"
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          color: 'var(--text-primary)',
                          transition: 'color 0.3s ease',
                          letterSpacing: '-0.3px',
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.7rem',
                          color: 'var(--text-dim)',
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'var(--text-muted)', fontSize: '0.85rem', mb: 0.75 }}>
                      {exp.role}
                    </Typography>
                    <Typography sx={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: 550 }}>
                      {exp.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, mt: 1, flexWrap: 'wrap' }}>
                      {exp.tags.map((tag, ti) => (
                        <Box
                          key={ti}
                          sx={{
                            fontFamily: "'JetBrains Mono', monospace",
                            px: 1,
                            py: 0.3,
                            fontSize: '0.6rem',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '4px',
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
                      transition: 'all 0.3s ease',
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
        <ScrollReveal>
          <Box className="section-header">
            <Box className="section-label">Education</Box>
            <Typography className="section-title">
              Academic background.
            </Typography>
          </Box>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '60px 1fr' },
              alignItems: 'flex-start',
              gap: 3,
              py: 3,
              maxWidth: 700,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.3px',
                  }}
                >
                  Erciyes University
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  2021 — 2025
                </Typography>
              </Box>
              <Typography sx={{ color: 'var(--text-muted)', fontSize: '0.85rem', mb: 0.75 }}>
                Computer Engineering
              </Typography>
              <Typography sx={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: 550 }}>
                Developed a Python-based ML project under TUBITAK 2209-A — producing paintings
                in the drawing styles of deceased artists using advanced style transfer techniques.
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
                {['Computer Engineering', 'AI/ML', 'TUBITAK'].map((tag, i) => (
                  <Box
                    key={i}
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      px: 1,
                      py: 0.3,
                      fontSize: '0.6rem',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '4px',
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
