import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Box, Container, Typography, IconButton } from '@mui/material'
import { GitHub, LinkedIn, ArrowForward, Apple, Build, East } from '@mui/icons-material'
import ScrollReveal from '../components/animations/ScrollReveal'
import Marquee from '../components/animations/Marquee'
import MagneticButton from '../components/animations/MagneticButton'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import useDocumentTitle from '../hooks/useDocumentTitle'

function Home() {
  useDocumentTitle(null)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const techStack = [
    'Java', 'Spring Boot', 'Python', 'TypeScript', 'Swift',
    'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'GCP',
    'RabbitMQ', 'Terraform', 'React', 'Vue.js', 'SwiftUI',
    'Elasticsearch', 'Microservices', 'REST APIs', 'Spring Cloud', 'Keycloak'
  ]

  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Istanbul',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
      setTime(now)
    }
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box className="page" sx={{ pt: 0 }}>
      {/* ============ HERO ============ */}
      <Box ref={heroRef} className="hero" sx={{ position: 'relative' }}>
        {/* Background gradient orb */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            maxWidth: 700,
            maxHeight: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(60px)',
          }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity, width: '100%' }}>
          <Container maxWidth="lg">
            <Box className="hero-content" sx={{ gap: 4 }}>
              {/* Status line */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '1px',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        boxShadow: '0 0 10px var(--accent)',
                      }}
                    />
                    <span>AVAILABLE FOR WORK</span>
                  </Box>
                  <Box sx={{ width: '1px', height: 12, background: 'var(--border-light)' }} />
                  <span>ISTANBUL {time}</span>
                </Box>
              </motion.div>

              {/* Main heading */}
              <Box>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Typography
                    variant="h1"
                    className="hero-title"
                    sx={{ color: 'var(--text-primary)', mb: 1 }}
                  >
                    I build things
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Typography
                    variant="h1"
                    className="hero-title"
                    sx={{ color: 'var(--accent)' }}
                  >
                    that scale.
                  </Typography>
                </motion.div>
              </Box>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    color: 'var(--text-secondary)',
                    maxWidth: 520,
                    lineHeight: 1.8,
                    fontWeight: 400,
                  }}
                >
                  Backend developer crafting microservices, cloud infrastructure,
                  and the occasional iOS app. Currently deep in Java, Spring Boot,
                  and making systems talk to each other.
                </Typography>
              </motion.div>

              {/* CTA + Socials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <MagneticButton
                    href="/projects"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.85rem 1.75rem',
                      background: 'var(--accent)',
                      color: '#09090b',
                      borderRadius: '10px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      letterSpacing: '-0.3px',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = '/projects'
                    }}
                  >
                    See my work <East sx={{ fontSize: 18 }} />
                  </MagneticButton>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {[
                      { icon: <GitHub sx={{ fontSize: 18 }} />, href: 'https://github.com/enesgunumdogdu' },
                      { icon: <LinkedIn sx={{ fontSize: 18 }} />, href: 'https://www.linkedin.com/in/enesgunumdogdu/' }
                    ].map((social, i) => (
                      <MagneticButton
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        strength={0.4}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 42,
                          height: 42,
                          borderRadius: '10px',
                          border: '1px solid var(--border-light)',
                          background: 'transparent',
                          color: 'var(--text-muted)',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease, border-color 0.3s ease',
                        }}
                      >
                        {social.icon}
                      </MagneticButton>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span>Scroll</span>
          <Box className="scroll-indicator-line" />
        </motion.div>
      </Box>

      {/* ============ TECH MARQUEE ============ */}
      <Box sx={{ py: 6, borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <Marquee items={techStack} speed={60} />
        <Box sx={{ mt: 2 }}>
          <Marquee items={techStack.slice().reverse()} speed={70} reverse />
        </Box>
      </Box>

      {/* ============ WHAT I DO ============ */}
      <Box className="section" sx={{ py: 10 }}>
        <ScrollReveal>
          <Box className="section-header">
            <Box className="section-label">What I do</Box>
            <Typography className="section-title">
              Three things I'm <br />really good at.
            </Typography>
          </Box>
        </ScrollReveal>

        <StaggerChildren style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--border-subtle)', borderRadius: '20px', overflow: 'hidden' }}>
          {[
            {
              num: '01',
              title: 'Backend Systems',
              desc: 'Scalable microservices with Java & Spring Boot. Event-driven architectures, polyglot persistence, and APIs that don\'t break at 3am.',
              tags: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ']
            },
            {
              num: '02',
              title: 'Cloud & DevOps',
              desc: 'Containerized deployments on GCP. Infrastructure as code, CI/CD pipelines, and the kind of monitoring that lets you sleep at night.',
              tags: ['Docker', 'GCP', 'Terraform', 'Redis']
            },
            {
              num: '03',
              title: 'iOS Apps',
              desc: 'Native Swift apps with SwiftUI. From weather apps with animated characters to season trackers with beautiful widgets.',
              tags: ['Swift', 'SwiftUI', 'WidgetKit', 'iOS']
            }
          ].map((item, i) => (
            <StaggerItem key={i}>
              <Box
                sx={{
                  background: 'var(--bg-secondary)',
                  p: { xs: 3, md: 4 },
                  minHeight: { md: 280 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 3,
                  transition: 'background 0.4s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'var(--bg-tertiary)',
                    '& .card-num': {
                      color: 'var(--accent)',
                    }
                  }
                }}
              >
                <Box>
                  <Typography
                    className="card-num"
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      mb: 2,
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {item.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      color: 'var(--text-primary)',
                      mb: 1.5,
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      fontSize: '0.9rem',
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                  {item.tags.map((tag, ti) => (
                    <Box
                      key={ti}
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        px: 1,
                        py: 0.35,
                        fontSize: '0.65rem',
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
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Box>

      {/* ============ FEATURED APPS ============ */}
      <Box className="section" sx={{ pt: 2 }}>
        <ScrollReveal>
          <Box className="section-header">
            <Box className="section-label">Shipped</Box>
            <Typography className="section-title">
              Apps people actually use.
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Cartoon Weather */}
        <ScrollReveal delay={0.1}>
          <Box
            onClick={() => window.open('https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541', '_blank', 'noopener,noreferrer')}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '120px 1fr auto' },
              alignItems: 'center',
              gap: { xs: 2, md: 4 },
              p: { xs: 3, md: 4 },
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              mb: 2,
              '&:hover': {
                borderColor: 'var(--border-accent)',
                transform: 'translateY(-2px)',
                '& .app-arrow': {
                  transform: 'translateX(4px)',
                  color: 'var(--accent)',
                }
              }
            }}
          >
            <Box
              component="img"
              src="/logos/cartoon-weather.png"
              alt="Cartoon Weather"
              sx={{
                width: { xs: 72, md: 88 },
                height: { xs: 72, md: 88 },
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.75 }}>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Cartoon Weather
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1,
                    py: 0.25,
                    borderRadius: '4px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}
                >
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: '#22c55e',
                    }}
                  />
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Live
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  maxWidth: 550,
                }}
              >
                7 animated character themes, full-screen video wallpapers, multi-location tracking.
                19 languages, 5.0 stars.
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, mt: 1.5, flexWrap: 'wrap' }}>
                {['Swift', 'SwiftUI', '19 Languages', '5.0 ★'].map((tag, i) => (
                  <Box
                    key={i}
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      px: 1,
                      py: 0.3,
                      fontSize: '0.65rem',
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

            <ArrowForward
              className="app-arrow"
              sx={{
                fontSize: 24,
                color: 'var(--text-dim)',
                transition: 'all 0.3s ease',
                display: { xs: 'none', md: 'block' },
              }}
            />
          </Box>
        </ScrollReveal>

        {/* Seasons */}
        <ScrollReveal delay={0.2}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '120px 1fr auto' },
              alignItems: 'center',
              gap: { xs: 2, md: 4 },
              p: { xs: 3, md: 4 },
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                borderColor: 'rgba(255, 107, 53, 0.25)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            <Box
              component="img"
              src="/logos/seasons.png"
              alt="Seasons"
              sx={{
                width: { xs: 72, md: 88 },
                height: { xs: 72, md: 88 },
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.75 }}>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Seasons
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1,
                    py: 0.25,
                    borderRadius: '4px',
                    background: 'var(--accent-secondary-dim)',
                    border: '1px solid rgba(255, 107, 53, 0.25)',
                  }}
                >
                  <Build sx={{ fontSize: 10, color: 'var(--accent-secondary)' }} />
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Building
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  maxWidth: 550,
                }}
              >
                Real-time season tracker with moon phases, solstice countdowns, and stunning widgets.
                5 themes, 85+ countries, 6 languages.
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, mt: 1.5, flexWrap: 'wrap' }}>
                {['Swift', 'SwiftUI', 'WidgetKit', '6 Languages'].map((tag, i) => (
                  <Box
                    key={i}
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      px: 1,
                      py: 0.3,
                      fontSize: '0.65rem',
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

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, color: 'var(--text-dim)', fontSize: '0.8rem' }}>
              <Apple sx={{ fontSize: 20 }} />
              <Typography sx={{ fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>
                Coming Soon
              </Typography>
            </Box>
          </Box>
        </ScrollReveal>
      </Box>

      {/* ============ CTA ============ */}
      <Box className="section" sx={{ pt: 2, pb: 10 }}>
        <ScrollReveal>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 3,
              p: { xs: 4, md: 6 },
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              background: 'var(--bg-secondary)',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.5px',
                  mb: 0.5,
                }}
              >
                Want to see more?
              </Typography>
              <Typography
                sx={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                }}
              >
                Check out my projects or drop me a message.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <MagneticButton
                href="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--accent)',
                  color: '#09090b',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/projects'
                }}
              >
                Projects <East sx={{ fontSize: 16 }} />
              </MagneticButton>

              <MagneticButton
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  border: '1px solid var(--border-light)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/contact'
                }}
              >
                Contact
              </MagneticButton>
            </Box>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  )
}

export default Home
