import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Box, Container, Typography } from '@mui/material'
import { GitHub, LinkedIn, East } from '@mui/icons-material'
import ScrollReveal from '../components/animations/ScrollReveal'
import Marquee from '../components/animations/Marquee'
import MagneticButton from '../components/animations/MagneticButton'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import DraftedLine from '../components/animations/DraftedLine'
import LedgerNumber from '../components/animations/LedgerNumber'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { ease, duration } from '../motion/tokens'

function Home() {
  useDocumentTitle(null)

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const techStack = [
    'Java', 'Spring Boot', 'Python', 'TypeScript', 'Swift',
    'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'GCP',
    'RabbitMQ', 'Terraform', 'React', 'Vue.js', 'SwiftUI',
    'Elasticsearch', 'Microservices', 'REST APIs', 'Spring Cloud', 'Keycloak'
  ]

  return (
    <Box className="page" sx={{ pt: 0 }}>
      {/* ============ HERO ============ */}
      <Box ref={heroRef} className="hero" sx={{ position: 'relative' }}>
        <motion.div style={{ y: heroY, opacity: heroOpacity, width: '100%' }}>
          <Container maxWidth="lg">
            <Box className="hero-content" sx={{ gap: 4 }}>
              {/* Status line */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: ease.draft }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--accent-secondary)',
                      boxShadow: '0 0 8px rgba(42, 111, 111, 0.4)',
                    }}
                  />
                  <span>Open to work</span>
                </Box>
              </motion.div>

              {/* Main heading — serif display with italic emphasis */}
              <Box>
                <motion.div
                  initial={{ opacity: 0, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.9, delay: 0.2, ease: ease.ink }}
                >
                  <Typography
                    component="h1"
                    sx={{
                      fontFamily: 'var(--font-display)',
                      fontVariationSettings: "'opsz' 144, 'wght' 300, 'SOFT' 40",
                      fontSize: 'clamp(3rem, 9vw, 6.5rem)',
                      lineHeight: 0.95,
                      letterSpacing: '-0.035em',
                      color: 'var(--text-primary)',
                      fontFeatureSettings: "'ss01'",
                    }}
                  >
                    From <Box component="span" sx={{ fontStyle: 'italic', fontVariationSettings: "'opsz' 144, 'wght' 400" }}>servers</Box>
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.9, delay: 0.35, ease: ease.ink }}
                >
                  <Typography
                    component="h1"
                    sx={{
                      fontFamily: 'var(--font-display)',
                      fontVariationSettings: "'opsz' 144, 'wght' 300, 'SOFT' 40",
                      fontSize: 'clamp(3rem, 9vw, 6.5rem)',
                      lineHeight: 0.95,
                      letterSpacing: '-0.035em',
                      color: 'var(--text-primary)',
                    }}
                  >
                    to the <Box component="span" sx={{ fontStyle: 'italic', fontVariationSettings: "'opsz' 144, 'wght' 500", color: 'var(--accent)' }}>App Store.</Box>
                  </Typography>
                </motion.div>
              </Box>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: ease.draft }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    color: 'var(--text-secondary)',
                    maxWidth: 560,
                    lineHeight: 1.7,
                    fontWeight: 400,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Java and Spring Boot during the week. Swift and SwiftUI when the idea
                  won't wait. I build backend systems that power things, and consumer
                  apps that people actually download.
                </Typography>
              </motion.div>

              {/* CTA + Socials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75, ease: ease.draft }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <MagneticButton
                    href="/projects"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.9rem 1.75rem',
                      background: 'var(--text-primary)',
                      color: 'var(--bg-primary)',
                      borderRadius: '2px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'none',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = '/projects'
                    }}
                  >
                    See what I've shipped <East sx={{ fontSize: 14 }} />
                  </MagneticButton>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {[
                      { icon: <GitHub sx={{ fontSize: 18 }} />, href: 'https://github.com/enesgunumdogdu', label: 'GitHub' },
                      { icon: <LinkedIn sx={{ fontSize: 18 }} />, href: 'https://www.linkedin.com/in/enesgunumdogdu/', label: 'LinkedIn' },
                      { icon: <Box component="svg" viewBox="0 0 24 24" sx={{ width: 18, height: 18, fill: 'currentColor' }}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" /><path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#F5F0E8" /></Box>, href: 'https://youtube.com/@enesgunumdogdu', label: 'YouTube' },
                    ].map((social, i) => (
                      <MagneticButton
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        strength={0.4}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 42,
                          height: 42,
                          borderRadius: '2px',
                          border: '1px solid var(--border-light)',
                          background: 'transparent',
                          color: 'var(--text-muted)',
                          textDecoration: 'none',
                          transition: 'color 0.3s var(--ease-draft), border-color 0.3s var(--ease-draft)',
                        }}
                      >
                        {social.icon}
                      </MagneticButton>
                    ))}
                  </Box>
                </Box>
              </motion.div>

              {/* Credibility — Ledger Entry animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.95, ease: ease.draft }}
                style={{ marginTop: '1.5rem' }}
              >
                <DraftedLine delay={0.95} opacity={0.6} />
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 3, md: 5 },
                    flexWrap: 'wrap',
                    pt: 3,
                  }}
                >
                  {[
                    { number: '5.0', label: 'App Store', sub: 'Cartoon Weather' },
                    { number: '50K+', label: 'Views', sub: 'YouTube DSA' },
                    { number: '25+', label: 'Projects', sub: 'Freelance' },
                    { number: '3', label: 'Apps', sub: 'Shipped & Coming' },
                  ].map((stat, i) => (
                    <Box key={i}>
                      <LedgerNumber
                        value={stat.number}
                        delay={i * 0.12}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontVariationSettings: "'opsz' 48, 'wght' 400",
                          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.02em',
                          lineHeight: 1,
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          mt: 0.75,
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.75rem',
                          fontStyle: 'italic',
                          color: 'var(--text-dim)',
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
      </Box>

      {/* ============ TECH MARQUEE ============ */}
      <Box sx={{ py: 5, borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <Marquee items={techStack} speed={60} />
        <Box sx={{ mt: 2 }}>
          <Marquee items={techStack.slice().reverse()} speed={70} reverse />
        </Box>
      </Box>

      {/* ============ HOW I BUILD ============ */}
      <Box className="section" sx={{ py: 10 }}>
        <ScrollReveal preset="inkBleed">
          <Box className="section-header">
            <Box className="section-label">§ 01 — How I Build</Box>
            <Typography
              className="section-title"
              sx={{
                '& em': { fontStyle: 'italic', fontVariationSettings: "'wght' 400" },
              }}
            >
              Three lanes,<br />
              <Box component="em" sx={{ color: 'var(--accent)' }}>one developer.</Box>
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Bento grid — no background numbers, cleaner */}
        <StaggerChildren style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1px',
          background: 'var(--border-light)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          {/* Backend — full width */}
          <StaggerItem style={{ gridColumn: 'span 6' }}>
            <Box
              sx={{
                background: 'var(--bg-secondary)',
                p: { xs: 3, md: 5 },
                minHeight: { md: 240 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 3,
                transition: 'background 0.4s var(--ease-draft)',
                '&:hover': { background: 'var(--bg-card-hover)' }
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    mb: 2,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  01 / Backend Systems
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 48, 'wght' 400",
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    color: 'var(--text-primary)',
                    mb: 2,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                >
                  Microservices that talk to each other <Box component="em" sx={{ fontStyle: 'italic' }}>without drama.</Box>
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    maxWidth: 640,
                  }}
                >
                  Event-driven architectures that handle the 3am spike you didn't plan for.
                  Java and Spring Boot, because some things just work.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                {['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Keycloak', 'Redis'].map((tag, ti) => (
                  <Box
                    key={ti}
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      px: 1,
                      py: 0.4,
                      fontSize: '0.65rem',
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
          </StaggerItem>

          {/* Cloud — half */}
          <StaggerItem style={{ gridColumn: 'span 3' }}>
            <Box
              sx={{
                background: 'var(--bg-secondary)',
                p: { xs: 3, md: 4 },
                minHeight: { md: 240 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 3,
                transition: 'background 0.4s var(--ease-draft)',
                '&:hover': { background: 'var(--bg-card-hover)' }
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    mb: 2,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  02 / Cloud & DevOps
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 36, 'wght' 400",
                    fontSize: { xs: '1.35rem', md: '1.65rem' },
                    color: 'var(--text-primary)',
                    mb: 1.5,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                  }}
                >
                  I containerize <Box component="em" sx={{ fontStyle: 'italic' }}>everything.</Box>
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Not because it's trendy — because I got tired of "works on my machine" conversations.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                {['Docker', 'GCP', 'Terraform', 'CI/CD'].map((tag, ti) => (
                  <Box
                    key={ti}
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      px: 1,
                      py: 0.4,
                      fontSize: '0.65rem',
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
          </StaggerItem>

          {/* iOS — half */}
          <StaggerItem style={{ gridColumn: 'span 3' }}>
            <Box
              sx={{
                background: 'var(--bg-secondary)',
                p: { xs: 3, md: 4 },
                minHeight: { md: 240 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 3,
                transition: 'background 0.4s var(--ease-draft)',
                '&:hover': { background: 'var(--bg-card-hover)' }
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    mb: 2,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  03 / iOS Apps
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 36, 'wght' 400",
                    fontSize: { xs: '1.35rem', md: '1.65rem' },
                    color: 'var(--text-primary)',
                    mb: 1.5,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                  }}
                >
                  I build the apps I <Box component="em" sx={{ fontStyle: 'italic' }}>wish existed.</Box>
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontSize: '0.92rem',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  A weather app with cartoon characters because weather apps are boring.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                {['Swift', 'SwiftUI', 'WidgetKit', 'iOS'].map((tag, ti) => (
                  <Box
                    key={ti}
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      px: 1,
                      py: 0.4,
                      fontSize: '0.65rem',
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
          </StaggerItem>
        </StaggerChildren>

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
          <ScrollReveal preset="inkBleed">
            <Box className="section-header">
              <Box className="section-label">§ 02 — Shipped</Box>
              <Typography className="section-title">
                Apps people <Box component="em" sx={{ fontStyle: 'italic', color: 'var(--accent)' }}>download.</Box>
              </Typography>
            </Box>
          </ScrollReveal>

          {[
            {
              logo: '/logos/cartoon-weather.png',
              name: 'Cartoon Weather',
              desc: '7 animated character themes, full-screen video wallpapers, multi-location tracking. 19 languages.',
              tags: ['Swift', 'SwiftUI', '19 Languages'],
              status: 'LIVE',
              statusColor: 'var(--accent-secondary)',
              rating: '5.0 ★',
              href: 'https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541',
            },
            {
              logo: '/logos/seasons.png',
              name: 'Seasons',
              desc: 'Real-time season tracker with moon phases, solstice countdowns, and stunning widgets. 5 themes, 85+ countries.',
              tags: ['Swift', 'SwiftUI', 'WidgetKit'],
              status: 'LIVE',
              statusColor: 'var(--accent-secondary)',
              href: 'https://apps.apple.com/us/app/seasons-solstice-tracker/id6758998537',
            },
            {
              logo: '/logos/magnetify.png',
              name: 'Magnetify',
              desc: 'Professional window manager for macOS. Drag-to-snap, keyboard shortcuts, workspace profiles, app rules. 33 languages.',
              tags: ['Swift', 'SwiftUI', 'macOS'],
              status: 'SOON',
              statusColor: '#C49A2A',
              href: null,
            },
          ].map((app, i) => (
            <Box key={i}>
              <ScrollReveal delay={i * 0.08} preset="clipReveal">
                <Box
                  onClick={app.href ? () => window.open(app.href, '_blank', 'noopener,noreferrer') : undefined}
                  className="paper-card"
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '96px 1fr auto' },
                    alignItems: 'center',
                    gap: { xs: 2, md: 4 },
                    py: { xs: 3, md: 3.5 },
                    px: { xs: 2, md: 3 },
                    cursor: app.href ? 'pointer' : 'default',
                    transition: 'all 0.3s var(--ease-draft)',
                    '&:hover': {
                      '& .app-arrow': {
                        transform: 'translateX(4px)',
                        color: 'var(--accent)',
                      },
                      '& .app-title': {
                        fontVariationSettings: "'opsz' 48, 'wght' 500",
                      }
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={app.logo}
                    alt={app.name}
                    sx={{
                      width: { xs: 64, md: 80 },
                      height: { xs: 64, md: 80 },
                      borderRadius: '16px',
                      objectFit: 'cover',
                    }}
                  />

                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.75, flexWrap: 'wrap' }}>
                      <Typography
                        className="app-title"
                        sx={{
                          fontFamily: 'var(--font-display)',
                          fontVariationSettings: "'opsz' 48, 'wght' 400",
                          fontSize: { xs: '1.5rem', md: '1.9rem' },
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.025em',
                          lineHeight: 1,
                          transition: 'font-variation-settings 0.22s var(--ease-draft)',
                        }}
                      >
                        {app.name}
                      </Typography>
                      <Box
                        sx={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.58rem',
                          fontWeight: 500,
                          px: 0.75,
                          py: 0.25,
                          background: `${app.statusColor}15`,
                          color: app.statusColor,
                          letterSpacing: '0.15em',
                        }}
                      >
                        {app.status}
                      </Box>
                      {app.rating && (
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-display)',
                            fontVariationSettings: "'wght' 500",
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            color: 'var(--accent)',
                          }}
                        >
                          {app.rating}
                        </Typography>
                      )}
                    </Box>
                    <Typography
                      sx={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.92rem',
                        lineHeight: 1.65,
                        maxWidth: 560,
                        mb: 1.25,
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {app.desc}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {app.tags.map((tag, ti) => (
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

                  <East
                    className="app-arrow"
                    sx={{
                      fontSize: 20,
                      color: 'var(--text-dim)',
                      transition: 'all 0.3s var(--ease-draft)',
                      display: { xs: 'none', md: 'block' },
                      opacity: app.href ? 1 : 0.3,
                    }}
                  />
                </Box>
              </ScrollReveal>
              {i < 2 && <DraftedLine color="var(--border-subtle)" />}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ============ CTA ============ */}
      <Box className="section" sx={{ pt: 4, pb: 10 }}>
        <ScrollReveal preset="inkBleed">
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
                fontFamily: 'var(--font-display)',
                fontVariationSettings: "'opsz' 72, 'wght' 300, 'SOFT' 40",
                fontSize: { xs: '1.85rem', md: '3rem' },
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                mb: 1.5,
              }}
            >
              Got a project?{' '}
              <Box
                component={Link}
                to="/contact"
                sx={{
                  fontStyle: 'italic',
                  fontVariationSettings: "'opsz' 72, 'wght' 500",
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  borderBottom: '1.5px solid var(--accent)',
                  transition: 'opacity 0.3s var(--ease-draft)',
                  '&:hover': { opacity: 0.7 },
                }}
              >
                I'm listening.
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
              }}
            >
              Currently taking on backend and iOS freelance work · Response usually under 24 hours
            </Typography>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  )
}

export default Home
