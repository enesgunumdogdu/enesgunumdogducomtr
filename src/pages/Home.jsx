import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Box, Container, Typography, IconButton } from '@mui/material'
import { GitHub, LinkedIn, ArrowForward, East } from '@mui/icons-material'
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
      <Box ref={heroRef} className="hero mesh-bg" sx={{ position: 'relative' }}>
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
                    fontSize: '0.72rem',
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
                        background: '#2A6F6F',
                        boxShadow: '0 0 8px rgba(42, 111, 111, 0.4)',
                      }}
                    />
                    <span>OPEN TO WORK</span>
                  </Box>
                  <Box sx={{ width: '1px', height: 12, background: 'var(--border-light)' }} />
                  <span>ISTANBUL {time}</span>
                </Box>
              </motion.div>

              {/* Main heading — editorial mixed-weight */}
              <Box>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
                      fontWeight: 300,
                      lineHeight: 1,
                      letterSpacing: '-2px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    From <Box component="span" sx={{ fontWeight: 700 }}>servers</Box>
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
                      fontWeight: 300,
                      lineHeight: 1,
                      letterSpacing: '-2px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    to the <Box component="span" sx={{ fontWeight: 700, color: 'var(--accent)' }}>App Store.</Box>
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
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: 'var(--text-secondary)',
                    maxWidth: 520,
                    lineHeight: 1.8,
                    fontWeight: 400,
                  }}
                >
                  Java and Spring Boot during the week. Swift and SwiftUI when the idea
                  won't wait. I build backend systems that power things, and consumer
                  apps that people actually download.
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
                      color: '#FFFFFF',
                      borderRadius: '3px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      fontFamily: "'JetBrains Mono', monospace",
                      textDecoration: 'none',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = '/projects'
                    }}
                  >
                    See what I've shipped <East sx={{ fontSize: 16 }} />
                  </MagneticButton>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {[
                      { icon: <GitHub sx={{ fontSize: 18 }} />, href: 'https://github.com/enesgunumdogdu' },
                      { icon: <LinkedIn sx={{ fontSize: 18 }} />, href: 'https://www.linkedin.com/in/enesgunumdogdu/' },
                      { icon: <Box component="svg" viewBox="0 0 24 24" sx={{ width: 18, height: 18, fill: 'currentColor' }}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" /><path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#F5F0E8" /></Box>, href: 'https://youtube.com/@enesgunumdogdu' },
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
                          borderRadius: '3px',
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

              {/* Credibility Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 3, md: 5 },
                    flexWrap: 'wrap',
                    mt: 2,
                    pt: 3,
                    borderTop: '1px solid var(--border-light)',
                  }}
                >
                  {[
                    { number: '5.0', label: 'App Store', sub: 'Cartoon Weather' },
                    { number: '50K+', label: 'Views', sub: 'YouTube DSA' },
                    { number: '25+', label: 'Projects', sub: 'Freelance' },
                    { number: '2209-A', label: 'TUBITAK', sub: 'Research Grant' },
                  ].map((stat, i) => (
                    <Box key={i}>
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          letterSpacing: '-1px',
                          lineHeight: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.65rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.5px',
                          mt: 0.5,
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.6rem',
                          color: 'var(--text-dim)',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {stat.sub}
                      </Typography>
                    </Box>
                  ))}
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
      <Box sx={{ py: 5, borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <Marquee items={techStack} speed={60} />
        <Box sx={{ mt: 2 }}>
          <Marquee items={techStack.slice().reverse()} speed={70} reverse />
        </Box>
      </Box>

      {/* ============ THREE LANES ============ */}
      <Box className="section" sx={{ py: 10 }}>
        <ScrollReveal>
          <Box className="section-header">
            <Box className="section-label">How I Build</Box>
            <Typography className="section-title">
              Three lanes,<br />one developer.
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Bento Grid — backend gets 2x span */}
        <StaggerChildren style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1px',
          background: 'var(--border-light)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          {/* Backend — large card */}
          <StaggerItem style={{ gridColumn: 'span 6' }}>
            <Box
              className="gradient-border-card"
              sx={{
                background: 'var(--bg-secondary)',
                p: { xs: 3, md: 5 },
                minHeight: { md: 260 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 3,
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.4s ease',
                '&:hover': {
                  background: 'var(--bg-card-hover)',
                  '& .card-num': { color: 'var(--accent)' }
                }
              }}
            >
              {/* Oversized background number */}
              <Typography
                sx={{
                  position: 'absolute',
                  top: { xs: -10, md: -20 },
                  right: { xs: 10, md: 30 },
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: { xs: '120px', md: '180px' },
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  opacity: 0.03,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                01
              </Typography>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  className="card-num"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                    mb: 2,
                    transition: 'color 0.4s ease',
                    letterSpacing: '1px',
                  }}
                >
                  01
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: 'var(--text-primary)',
                    mb: 1.5,
                    letterSpacing: '-1px',
                  }}
                >
                  Backend Systems
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    fontSize: '0.95rem',
                    maxWidth: 600,
                  }}
                >
                  Microservices that talk to each other without drama. Event-driven architectures
                  that handle the 3am spike you didn't plan for. Java and Spring Boot, because
                  some things just work.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                {['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Keycloak', 'Redis'].map((tag, ti) => (
                  <Box
                    key={ti}
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      px: 1,
                      py: 0.35,
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </StaggerItem>

          {/* Cloud — half */}
          <StaggerItem style={{ gridColumn: 'span 3' }}>
            <Box
              className="gradient-border-card"
              sx={{
                background: 'var(--bg-secondary)',
                p: { xs: 3, md: 4 },
                minHeight: { md: 260 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 3,
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.4s ease',
                '&:hover': {
                  background: 'var(--bg-card-hover)',
                  '& .card-num': { color: 'var(--accent-secondary)' }
                }
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  top: { xs: -10, md: -15 },
                  right: { xs: 10, md: 20 },
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: { xs: '100px', md: '140px' },
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  opacity: 0.03,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                02
              </Typography>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  className="card-num"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                    mb: 2,
                    transition: 'color 0.4s ease',
                    letterSpacing: '1px',
                  }}
                >
                  02
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: 'var(--text-primary)',
                    mb: 1.5,
                    letterSpacing: '-0.5px',
                  }}
                >
                  Cloud & DevOps
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.9rem',
                  }}
                >
                  I containerize everything. Not because it's trendy, but because I got
                  tired of "works on my machine" conversations.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                {['Docker', 'GCP', 'Terraform', 'CI/CD'].map((tag, ti) => (
                  <Box
                    key={ti}
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      px: 1,
                      py: 0.35,
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </StaggerItem>

          {/* iOS — half */}
          <StaggerItem style={{ gridColumn: 'span 3' }}>
            <Box
              className="gradient-border-card"
              sx={{
                background: 'var(--bg-secondary)',
                p: { xs: 3, md: 4 },
                minHeight: { md: 260 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 3,
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.4s ease',
                '&:hover': {
                  background: 'var(--bg-card-hover)',
                  '& .card-num': { color: 'var(--accent-tertiary)', }
                }
              }}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  top: { xs: -10, md: -15 },
                  right: { xs: 10, md: 20 },
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: { xs: '100px', md: '140px' },
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  opacity: 0.03,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                03
              </Typography>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  className="card-num"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                    mb: 2,
                    transition: 'color 0.4s ease',
                    letterSpacing: '1px',
                  }}
                >
                  03
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: 'var(--text-primary)',
                    mb: 1.5,
                    letterSpacing: '-0.5px',
                  }}
                >
                  iOS Apps
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.9rem',
                  }}
                >
                  I build the apps I wish existed. A weather app with cartoon characters
                  because weather apps are boring. SwiftUI makes the ideas real.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                {['Swift', 'SwiftUI', 'WidgetKit', 'iOS'].map((tag, ti) => (
                  <Box
                    key={ti}
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      px: 1,
                      py: 0.35,
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '2px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </StaggerItem>
        </StaggerChildren>

        {/* Mobile: make bento grid stack */}
        <style>{`
          @media (max-width: 768px) {
            [style*="grid-column: span 3"] {
              grid-column: span 6 !important;
            }
          }
        `}</style>
      </Box>

      {/* ============ SHIPPED ============ */}
      <Box sx={{ borderTop: '1px solid var(--border-subtle)' }}>
        <Box className="section" sx={{ pt: 8 }}>
          <ScrollReveal>
            <Box className="section-header">
              <Box className="section-label">Shipped</Box>
              <Typography className="section-title">
                Apps people download.
              </Typography>
            </Box>
          </ScrollReveal>

          {/* Cartoon Weather */}
          <ScrollReveal delay={0.1}>
            <Box
              className="gradient-border-card"
              onClick={() => window.open('https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541', '_blank', 'noopener,noreferrer')}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '100px 1fr auto' },
                alignItems: 'center',
                gap: { xs: 2, md: 4 },
                p: { xs: 3, md: 4 },
                background: 'var(--bg-secondary)',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                mb: 1,
                '&:hover': {
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
                  width: { xs: 64, md: 80 },
                  height: { xs: 64, md: 80 },
                  borderRadius: '16px',
                  objectFit: 'cover',
                }}
              />

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.75 }}>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    Cartoon Weather
                  </Typography>
                  <Box
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      px: 0.75,
                      py: 0.2,
                      borderRadius: '2px',
                      background: 'rgba(42, 111, 111, 0.08)',
                      color: '#2A6F6F',
                      letterSpacing: '0.5px',
                    }}
                  >
                    LIVE
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: 'var(--accent)',
                    }}
                  >
                    5.0 ★
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    maxWidth: 550,
                  }}
                >
                  7 animated character themes, full-screen video wallpapers, multi-location tracking.
                  19 languages.
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5, mt: 1.5, flexWrap: 'wrap' }}>
                  {['Swift', 'SwiftUI', '19 Languages'].map((tag, i) => (
                    <Box
                      key={i}
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        px: 1,
                        py: 0.3,
                        fontSize: '0.62rem',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '2px',
                        letterSpacing: '0.5px',
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
                  fontSize: 22,
                  color: 'var(--text-dim)',
                  transition: 'all 0.3s ease',
                  display: { xs: 'none', md: 'block' },
                }}
              />
            </Box>
          </ScrollReveal>

          {/* Pencil line divider */}
          <Box sx={{ height: '1px', background: 'var(--border-subtle)', mx: { md: 2 } }} />

          {/* Seasons */}
          <ScrollReveal delay={0.2}>
            <Box
              className="gradient-border-card"
              onClick={() => window.open('https://apps.apple.com/us/app/seasons-solstice-tracker/id6758998537', '_blank', 'noopener,noreferrer')}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '100px 1fr auto' },
                alignItems: 'center',
                gap: { xs: 2, md: 4 },
                p: { xs: 3, md: 4 },
                background: 'var(--bg-secondary)',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                mb: 1,
                '&:hover': {
                  '& .app-arrow': {
                    transform: 'translateX(4px)',
                    color: 'var(--accent)',
                  }
                }
              }}
            >
              <Box
                component="img"
                src="/logos/seasons.png"
                alt="Seasons"
                sx={{
                  width: { xs: 64, md: 80 },
                  height: { xs: 64, md: 80 },
                  borderRadius: '16px',
                  objectFit: 'cover',
                }}
              />

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.75 }}>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    Seasons
                  </Typography>
                  <Box
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      px: 0.75,
                      py: 0.2,
                      borderRadius: '2px',
                      background: 'rgba(42, 111, 111, 0.08)',
                      color: '#2A6F6F',
                      letterSpacing: '0.5px',
                    }}
                  >
                    LIVE
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
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
                        fontSize: '0.62rem',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '2px',
                        letterSpacing: '0.5px',
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
                  fontSize: 22,
                  color: 'var(--text-dim)',
                  transition: 'all 0.3s ease',
                  display: { xs: 'none', md: 'block' },
                }}
              />
            </Box>
          </ScrollReveal>

          {/* Pencil line divider */}
          <Box sx={{ height: '1px', background: 'var(--border-subtle)', mx: { md: 2 } }} />

          {/* Magnetify */}
          <ScrollReveal delay={0.3}>
            <Box
              className="gradient-border-card"
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '100px 1fr auto' },
                alignItems: 'center',
                gap: { xs: 2, md: 4 },
                p: { xs: 3, md: 4 },
                background: 'var(--bg-secondary)',
                borderRadius: '3px',
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                component="img"
                src="/logos/magnetify.png"
                alt="Magnetify"
                sx={{
                  width: { xs: 64, md: 80 },
                  height: { xs: 64, md: 80 },
                  borderRadius: '16px',
                  objectFit: 'cover',
                }}
              />

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.75 }}>
                  <Typography
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    Magnetify
                  </Typography>
                  <Box
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      px: 0.75,
                      py: 0.2,
                      borderRadius: '2px',
                      background: 'rgba(196, 154, 42, 0.1)',
                      color: '#C49A2A',
                      letterSpacing: '0.5px',
                    }}
                  >
                    SOON
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    maxWidth: 550,
                  }}
                >
                  Professional window manager for macOS. Drag-to-snap, keyboard shortcuts,
                  workspace profiles, app rules, and multi-monitor support. 33 languages.
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5, mt: 1.5, flexWrap: 'wrap' }}>
                  {['Swift', 'SwiftUI', 'macOS', '33 Languages'].map((tag, i) => (
                    <Box
                      key={i}
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        px: 1,
                        py: 0.3,
                        fontSize: '0.62rem',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-light)',
                        borderRadius: '2px',
                        letterSpacing: '0.5px',
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
                  fontSize: 22,
                  color: 'var(--text-dim)',
                  transition: 'all 0.3s ease',
                  display: { xs: 'none', md: 'block' },
                  opacity: 0.3,
                }}
              />
            </Box>
          </ScrollReveal>
        </Box>
      </Box>

      {/* ============ CTA ============ */}
      <Box className="section" sx={{ pt: 2, pb: 10 }}>
        <ScrollReveal>
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 5, md: 8 },
              borderTop: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 300,
                fontSize: { xs: '1.75rem', md: '2.75rem' },
                color: 'var(--text-primary)',
                letterSpacing: '-1px',
                mb: 1,
              }}
            >
              Got a project? <Box
                component={Link}
                to="/contact"
                sx={{
                  fontWeight: 700,
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  borderBottom: '2px solid var(--accent)',
                  transition: 'opacity 0.3s ease',
                  '&:hover': { opacity: 0.7 },
                }}
              >
                I'm listening.
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.5px',
              }}
            >
              Currently taking on backend and iOS freelance work. Response time: usually under 24 hours.
            </Typography>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  )
}

export default Home
