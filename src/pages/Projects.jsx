import { useState, useEffect, useMemo } from 'react'
import { Box, Typography, Button, CircularProgress, IconButton } from '@mui/material'
import { GitHub, East, Star } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/animations/ScrollReveal'
import DraftedLine from '../components/animations/DraftedLine'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { ease } from '../motion/tokens'

// Palette-aligned language colors — sienna/teal/ochre family instead of GitHub
const languageColors = {
  JavaScript: '#C49A2A',   // ochre
  TypeScript: '#2A6F6F',   // teal
  Python: '#8A4732',        // muted sienna
  Java: '#C05A3D',          // primary sienna
  'C#': '#4A7C59',          // muted green
  HTML: '#B87333',          // copper
  CSS: '#6B5B95',           // dusty purple
  HCL: '#8B7355',           // walnut
  Assembly: '#5D4E37',      // dark walnut
  'Jupyter Notebook': '#D4A574', // aged brass
  Swift: '#D4674D',         // light sienna
  Kotlin: '#7B3FA8',        // plum
  Go: '#2B5F5A',            // viridian
  Rust: '#8B4513',          // saddle brown
  Ruby: '#701516',          // oxblood
  PHP: '#4F5D95',           // navy
}

const categorizeRepo = (repo) => {
  const topics = repo.topics || []
  const lang = repo.language?.toLowerCase() || ''
  const name = repo.name.toLowerCase()
  const desc = (repo.description || '').toLowerCase()
  const categories = []

  if (topics.some(t => ['spring-boot', 'api', 'microservices', 'postgresql', 'mongodb', 'docker', 'keycloak', 'oauth2'].includes(t)) ||
      lang === 'java' && (name.includes('api') || name.includes('management') || desc.includes('api')) ||
      topics.includes('dotnet') || topics.includes('asp-net-core')) {
    categories.push('Backend')
  }
  if (topics.some(t => ['react', 'vue', 'nextjs', 'flask', 'django', 'web', 'mvc', 'html'].includes(t)) ||
      lang === 'html' || name.includes('web') || topics.includes('csharp') && topics.includes('mvc')) {
    categories.push('Web')
  }
  if (topics.some(t => ['machine-learning', 'deep-learning', 'keras', 'cnn', 'image-classification', 'keras-tensorflow', 'random-forest-classifier'].includes(t)) ||
      name.includes('ml') || name.includes('cnn') || desc.includes('machine learning') || desc.includes('neural') ||
      name.includes('emotion') || name.includes('classifier')) {
    categories.push('AI/ML')
  }
  if (topics.some(t => ['android', 'ios', 'mobile', 'swift', 'kotlin', 'libgdx-game'].includes(t)) ||
      lang === 'swift' || lang === 'kotlin') {
    categories.push('Mobile')
  }
  if (topics.some(t => ['docker', 'terraform', 'kubernetes', 'ci-cd', 'devops', 'gcp', 'aws'].includes(t)) ||
      lang === 'hcl') {
    categories.push('DevOps')
  }
  if (topics.some(t => ['discord-bot', 'bot', 'automation', 'tkinter', 'gui-application'].includes(t)) ||
      name.includes('bot') || name.includes('clicker') || name.includes('speech')) {
    categories.push('Tools')
  }
  if (categories.length === 0) categories.push('Other')
  return categories
}

const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'Backend', label: 'Backend' },
  { id: 'Web', label: 'Web' },
  { id: 'AI/ML', label: 'AI/ML' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'DevOps', label: 'DevOps' },
  { id: 'Tools', label: 'Tools' },
  { id: 'Other', label: 'Other' }
]

// Freshness orb component
function FreshnessOrb({ updatedAt }) {
  const now = new Date()
  const then = new Date(updatedAt)
  const daysOld = Math.floor((now - then) / (1000 * 60 * 60 * 24))

  let fill, opacity, pulse
  if (daysOld < 7) { fill = 'var(--accent)'; opacity = 1; pulse = true }
  else if (daysOld < 30) { fill = 'var(--accent)'; opacity = 0.7; pulse = false }
  else if (daysOld < 180) { fill = 'var(--accent)'; opacity = 0.35; pulse = false }
  else { fill = 'var(--text-dim)'; opacity = 0.5; pulse = false }

  return (
    <Box
      sx={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: fill,
        opacity,
        flexShrink: 0,
        animation: pulse ? 'freshnessPulse 2s ease-in-out infinite' : 'none',
        '@keyframes freshnessPulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      }}
      title={`Updated ${daysOld} day${daysOld !== 1 ? 's' : ''} ago`}
    />
  )
}

function Projects() {
  useDocumentTitle('Projects')

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeLanguages, setActiveLanguages] = useState([])

  const featuredProjects = [
    {
      title: 'Cartoon Weather',
      description: '7 animated character themes with full-screen video wallpapers. Multi-location tracking, widgets, AQI, 19 languages.',
      pullquote: 'Weather apps are boring. This one isn\'t.',
      tags: ['Swift', 'iOS', 'SwiftUI'],
      live: 'https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541',
      badge: { label: 'LIVE', color: 'var(--accent-secondary)' },
      metric: { value: '5.0', label: 'App Store' },
      size: 'hero',
    },
    {
      title: 'Seasons',
      description: 'Real-time season tracker with moon phases, solstice countdowns, 5 themes, 85+ countries.',
      tags: ['Swift', 'SwiftUI', 'WidgetKit'],
      live: 'https://apps.apple.com/us/app/seasons-solstice-tracker/id6758998537',
      badge: { label: 'LIVE', color: 'var(--accent-secondary)' },
      size: 'portrait',
    },
    {
      title: 'Magnetify',
      description: 'Professional window manager for macOS. Drag-to-snap, 16 positions, keyboard shortcuts, workspace profiles, 33 languages.',
      tags: ['Swift', 'SwiftUI', 'macOS', 'AppKit'],
      badge: { label: 'SOON', color: '#C49A2A' },
      size: 'wide',
    },
    {
      title: 'Fitness Microservice',
      description: 'Cloud-native fitness platform with Spring Cloud, OAuth2 via Keycloak, AI-powered recommendations.',
      tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Keycloak'],
      github: 'https://github.com/enesgunumdogdu/fitness-microservice',
      live: 'https://aeg.fitness',
      badge: { label: 'LIVE', color: 'var(--accent-secondary)' },
      size: 'square',
    },
    {
      title: 'Guzel Hatirla',
      description: 'A digital memory garden for collecting and sharing beautiful moments with loved ones.',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/enesgunumdogdu/guzelhatirlacom',
      live: 'https://guzelhatirla.com',
      badge: { label: 'LIVE', color: 'var(--accent-secondary)' },
      size: 'square',
    },
    {
      title: 'Hospital Management',
      description: 'Full-stack hospital system with layered architecture, Spring Security, and Vue.js 3 SPA.',
      tags: ['Java', 'Spring Boot', 'Vue.js', 'Docker'],
      github: 'https://github.com/enesgunumdogdu/hospital-management',
      size: 'wide',
    },
    {
      title: 'YouTube Channel',
      description: 'Educational content on Data Structures and Algorithms. 50,000+ views.',
      tags: ['Education', 'DSA'],
      live: 'https://youtube.com/@enesgunumdogdu',
      badge: { label: '50K+', color: 'var(--accent)' },
      metric: { value: '50K+', label: 'Views' },
      size: 'wide',
    }
  ]

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/enesgunumdogdu/repos?per_page=100&sort=updated')
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const data = await response.json()
        const processedRepos = data
          .filter(repo => !repo.fork && repo.name !== 'enesgunumdogdu')
          .map(repo => ({ ...repo, categories: categorizeRepo(repo) }))
        setRepos(processedRepos)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  const toggleLanguage = (lang) => {
    setActiveLanguages(prev =>
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    )
  }

  // Language distribution
  const langDistribution = useMemo(() => {
    const counts = {}
    repos.forEach(r => {
      if (r.language) counts[r.language] = (counts[r.language] || 0) + 1
    })
    const total = Object.values(counts).reduce((a, b) => a + b, 0)
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([lang, count]) => ({ lang, count, pct: (count / total) * 100 }))
  }, [repos])

  const filteredRepos = useMemo(() => {
    return repos.filter(repo => {
      const categoryMatch = activeCategory === 'all' || repo.categories.includes(activeCategory)
      const languageMatch = activeLanguages.length === 0 || activeLanguages.includes(repo.language)
      return categoryMatch && languageMatch
    })
  }, [repos, activeCategory, activeLanguages])

  return (
    <Box className="page">
      {/* ============ FEATURED — EDITORIAL BROADSHEET ============ */}
      <Box className="section">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: ease.ink }}
        >
          <Box className="section-header">
            <Box className="section-label">§ 01 — The Work</Box>
            <Typography className="section-title" sx={{ maxWidth: 620 }}>
              Things I've built and <Box component="em" sx={{ fontStyle: 'italic', color: 'var(--accent)' }}>shipped.</Box>
            </Typography>
            <Typography className="section-subtitle">
              A mix of backend systems, iOS apps, and open-source projects.
            </Typography>
          </Box>
        </motion.div>

        {/* Asymmetric editorial grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {featuredProjects.map((project, index) => {
            const primaryLink = project.live || project.github
            const handleClick = () => {
              if (primaryLink) window.open(primaryLink, '_blank', 'noopener,noreferrer')
            }

            // Layout mapping per size
            const gridSpan = {
              hero: { xs: 'span 1', md: 'span 8' },
              portrait: { xs: 'span 1', md: 'span 4' },
              wide: { xs: 'span 1', md: 'span 7' },
              square: { xs: 'span 1', md: 'span 5' },
            }[project.size] || { xs: 'span 1', md: 'span 6' }

            return (
              <ScrollReveal
                key={index}
                delay={index * 0.06}
                preset="clipReveal"
                style={{ gridColumn: gridSpan.md, gridColumnXs: gridSpan.xs }}
              >
                <Box
                  onClick={handleClick}
                  sx={{
                    gridColumn: gridSpan.md,
                    height: '100%',
                    p: { xs: 3, md: 4 },
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    cursor: primaryLink ? 'pointer' : 'default',
                    transition: 'all 0.3s var(--ease-draft)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 3,
                    minHeight: project.size === 'hero' ? { md: 360 } : { md: 240 },
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: 'var(--text-dim)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(80, 60, 30, 0.08)',
                      '& .project-title': {
                        fontVariationSettings: project.size === 'hero'
                          ? "'opsz' 96, 'wght' 500"
                          : "'opsz' 48, 'wght' 500",
                      },
                      '& .project-arrow': { transform: 'translate(4px, -4px)' },
                    }
                  }}
                >
                  {/* Top — badge + metric */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
                    {project.badge && (
                      <Box
                        sx={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.58rem',
                          fontWeight: 500,
                          px: 1,
                          py: 0.35,
                          background: `${project.badge.color}15`,
                          color: project.badge.color,
                          letterSpacing: '0.15em',
                        }}
                      >
                        {project.badge.label}
                      </Box>
                    )}
                    {primaryLink && (
                      <East
                        className="project-arrow"
                        sx={{
                          fontSize: 18,
                          color: 'var(--text-dim)',
                          transition: 'transform 0.3s var(--ease-draft)',
                        }}
                      />
                    )}
                  </Box>

                  {/* Middle — title + pullquote for hero */}
                  <Box>
                    <Typography
                      className="project-title"
                      sx={{
                        fontFamily: 'var(--font-display)',
                        fontVariationSettings: project.size === 'hero'
                          ? "'opsz' 96, 'wght' 400"
                          : "'opsz' 48, 'wght' 400",
                        fontSize: project.size === 'hero'
                          ? { xs: '2.25rem', md: '3.5rem' }
                          : { xs: '1.65rem', md: '2rem' },
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.05,
                        mb: project.pullquote ? 2 : 1.5,
                        transition: 'font-variation-settings 0.3s var(--ease-draft)',
                      }}
                    >
                      {project.title}
                    </Typography>

                    {project.pullquote && project.size === 'hero' && (
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-display)',
                          fontStyle: 'italic',
                          fontVariationSettings: "'opsz' 48, 'wght' 400",
                          fontSize: { xs: '1.1rem', md: '1.4rem' },
                          color: 'var(--text-muted)',
                          mb: 2,
                          lineHeight: 1.3,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        "{project.pullquote}"
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.92rem',
                        lineHeight: 1.7,
                        fontFamily: 'var(--font-body)',
                        maxWidth: 560,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  {/* Bottom — tags + metric + github icon */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {project.tags.map((tag, ti) => (
                        <Box
                          key={ti}
                          sx={{
                            fontFamily: 'var(--font-mono)',
                            px: 1,
                            py: 0.3,
                            fontSize: '0.6rem',
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

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      {project.metric && project.size === 'hero' && (
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography
                            sx={{
                              fontFamily: 'var(--font-display)',
                              fontVariationSettings: "'wght' 500",
                              fontStyle: 'italic',
                              fontSize: '1.5rem',
                              color: 'var(--accent)',
                              lineHeight: 1,
                            }}
                          >
                            {project.metric.value}
                          </Typography>
                          <Typography sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            {project.metric.label}
                          </Typography>
                        </Box>
                      )}
                      {project.github && (
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.github, '_blank', 'noopener,noreferrer')
                          }}
                          size="small"
                          sx={{
                            color: 'var(--text-dim)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '2px',
                            width: 32,
                            height: 32,
                            '&:hover': {
                              color: 'var(--text-primary)',
                              borderColor: 'var(--text-muted)',
                            }
                          }}
                        >
                          <GitHub sx={{ fontSize: 14 }} />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                </Box>
              </ScrollReveal>
            )
          })}
        </Box>
      </Box>

      {/* ============ LANGUAGE MASS VIZ ============ */}
      {!loading && !error && langDistribution.length > 0 && (
        <Box sx={{ borderTop: '1px solid var(--border-subtle)' }}>
          <Box className="section" sx={{ py: 7 }}>
            <ScrollReveal preset="inkBleed">
              <Box sx={{ mb: 3 }}>
                <Box className="section-label">§ 02 — Volume</Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 48, 'wght' 400",
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.025em',
                    mb: 1,
                  }}
                >
                  What I <Box component="em" sx={{ fontStyle: 'italic', color: 'var(--accent)' }}>actually write,</Box> by volume.
                </Typography>
                <Typography sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                  Across {repos.length} public repositories · {langDistribution.length} languages
                </Typography>
              </Box>
            </ScrollReveal>

            {/* Horizontal stacked bar */}
            <ScrollReveal preset="draftedLine" duration={0.8}>
              <Box
                sx={{
                  display: 'flex',
                  height: 44,
                  width: '100%',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  transformOrigin: 'left',
                }}
              >
                {langDistribution.map(({ lang, pct }, i) => {
                  const color = languageColors[lang] || 'var(--text-muted)'
                  return (
                    <Box
                      key={lang}
                      sx={{
                        width: `${pct}%`,
                        background: color,
                        position: 'relative',
                        transition: 'all 0.3s var(--ease-draft)',
                        '&:hover': { opacity: 0.85 },
                        '&:hover .lang-tooltip': { opacity: 1, transform: 'translateY(-8px)' }
                      }}
                      title={`${lang}: ${pct.toFixed(1)}%`}
                    >
                      {pct > 8 && (
                        <Typography
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.62rem',
                            color: '#FFFFFF',
                            fontWeight: 500,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                            pointerEvents: 'none',
                          }}
                        >
                          {lang}
                        </Typography>
                      )}
                    </Box>
                  )
                })}
              </Box>

              {/* Legend row */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                  mt: 2,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                }}
              >
                {langDistribution.slice(0, 8).map(({ lang, count, pct }) => (
                  <Box key={lang} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    <Box sx={{ width: 8, height: 8, background: languageColors[lang] || 'var(--text-muted)' }} />
                    <span>{lang}</span>
                    <span style={{ opacity: 0.5 }}>({count})</span>
                  </Box>
                ))}
              </Box>
            </ScrollReveal>
          </Box>
        </Box>
      )}

      {/* ============ CONTROL PANEL + REPOS ============ */}
      <Box sx={{ borderTop: '1px solid var(--border-subtle)' }}>
        <Box className="section" sx={{ pt: 7 }}>
          <ScrollReveal preset="inkBleed">
            <Box className="section-header">
              <Box className="section-label">§ 03 — Open Source</Box>
              <Typography className="section-title">
                GitHub <Box component="em" sx={{ fontStyle: 'italic' }}>Repositories.</Box>
              </Typography>
              <Typography className="section-subtitle">
                All public repositories. Filter by category or language.
              </Typography>
            </Box>
          </ScrollReveal>

          {/* Control Panel */}
          <ScrollReveal delay={0.1}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr 280px' },
                gap: 4,
                mb: 5,
                pb: 4,
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {/* Left: Filters */}
              <Box>
                {/* Categories as text toggles */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--text-dim)',
                      mb: 1.25,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Category
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {filterCategories.map((filter) => {
                      const isActive = activeCategory === filter.id
                      const count = filter.id === 'all' ? repos.length : repos.filter(r => r.categories.includes(filter.id)).length
                      return (
                        <Box
                          key={filter.id}
                          onClick={() => setActiveCategory(filter.id)}
                          sx={{
                            cursor: 'pointer',
                            userSelect: 'none',
                            px: 1.25,
                            py: 0.6,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            letterSpacing: '0.05em',
                            color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                            borderBottom: isActive ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                            transition: 'all 0.2s var(--ease-draft)',
                            '&:hover': { color: 'var(--text-primary)' }
                          }}
                        >
                          {filter.label}
                          <span style={{ fontSize: '0.62rem', opacity: 0.5, marginLeft: 4 }}>{count}</span>
                        </Box>
                      )
                    })}
                  </Box>
                </Box>

                {/* Languages as weighted typography */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--text-dim)',
                      mb: 1.25,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Language <span style={{ opacity: 0.5, textTransform: 'none', letterSpacing: '0.05em' }}>· multi-select</span>
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'baseline',
                      gap: '0.5rem 1rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {langDistribution.map(({ lang, count }) => {
                      const isActive = activeLanguages.includes(lang)
                      // Weight font size by count
                      const maxCount = langDistribution[0]?.count || 1
                      const ratio = count / maxCount
                      const fontSize = `${0.85 + ratio * 0.8}rem`
                      return (
                        <Box
                          key={lang}
                          onClick={() => toggleLanguage(lang)}
                          sx={{
                            cursor: 'pointer',
                            userSelect: 'none',
                            fontFamily: 'var(--font-display)',
                            fontSize,
                            fontVariationSettings: isActive ? "'wght' 500" : "'wght' 400",
                            color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                            opacity: isActive || activeLanguages.length === 0 ? 1 : 0.4,
                            borderBottom: isActive ? '1.5px solid var(--accent)' : 'none',
                            transition: 'all 0.25s var(--ease-draft)',
                            fontStyle: isActive ? 'italic' : 'normal',
                            letterSpacing: '-0.015em',
                            '&:hover': { color: 'var(--accent)', opacity: 1 }
                          }}
                        >
                          {lang}
                          <Box component="span" sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', ml: 0.35, opacity: 0.5, verticalAlign: 'super', fontStyle: 'normal' }}>
                            {count}
                          </Box>
                        </Box>
                      )
                    })}
                  </Box>
                </Box>
              </Box>

              {/* Right: Receipt */}
              <Box
                sx={{
                  background: 'var(--bg-secondary)',
                  border: '1px dashed var(--border-light)',
                  p: 2,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-secondary)',
                  alignSelf: 'start',
                }}
              >
                <Box sx={{ color: 'var(--text-dim)', letterSpacing: '0.1em', mb: 1, textTransform: 'uppercase', fontSize: '0.58rem' }}>
                  ── Filter receipt ──
                </Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.25rem 1rem', mb: 1.5 }}>
                  <span style={{ color: 'var(--text-dim)' }}>Cat</span>
                  <span>{activeCategory}</span>
                  <span style={{ color: 'var(--text-dim)' }}>Lang</span>
                  <span>{activeLanguages.length === 0 ? '—' : activeLanguages.join(' · ')}</span>
                  <span style={{ color: 'var(--text-dim)' }}>Show</span>
                  <span style={{ color: 'var(--accent)' }}>{filteredRepos.length} / {repos.length}</span>
                </Box>
                <Box sx={{ borderTop: '1px dashed var(--border-light)', pt: 1 }}>
                  <Box
                    component="button"
                    onClick={() => { setActiveCategory('all'); setActiveLanguages([]) }}
                    sx={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      cursor: 'pointer',
                      p: 0,
                      letterSpacing: '0.05em',
                      '&:hover': { color: 'var(--accent)' }
                    }}
                  >
                    Clear ↺
                  </Box>
                </Box>
              </Box>
            </Box>
          </ScrollReveal>

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress size={24} sx={{ color: 'var(--accent)' }} />
            </Box>
          )}

          {error && (
            <Box sx={{ textAlign: 'center', py: 8, color: 'var(--text-secondary)' }}>
              <Typography sx={{ mb: 2, fontSize: '0.9rem' }}>Failed to load repositories</Typography>
              <Button
                onClick={() => window.location.reload()}
                sx={{
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  px: 3,
                }}
              >
                Retry
              </Button>
            </Box>
          )}

          {/* Ledger grid — compact tiles */}
          {!loading && !error && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
                gap: 1,
              }}
            >
              <AnimatePresence>
                {filteredRepos.map((repo, i) => {
                  const langColor = languageColors[repo.language] || 'var(--text-muted)'
                  return (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: Math.min(i * 0.02, 0.4), duration: 0.35, ease: ease.draft }}
                      style={{ textDecoration: 'none' }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '2px',
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: 140,
                          position: 'relative',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.3s var(--ease-draft)',
                          '&:hover': {
                            borderColor: 'var(--text-dim)',
                            transform: 'translateY(-2px)',
                            '& .repo-name': {
                              color: 'var(--accent)',
                              fontVariationSettings: "'wght' 500",
                            }
                          }
                        }}
                      >
                        {/* Language corner stripe */}
                        {repo.language && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              width: 0,
                              height: 0,
                              borderLeft: '20px solid transparent',
                              borderTop: `20px solid ${langColor}`,
                            }}
                          />
                        )}

                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                            <FreshnessOrb updatedAt={repo.updated_at} />
                            {repo.stargazers_count > 0 && (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, ml: 'auto' }}>
                                <Star sx={{ fontSize: 10, color: 'var(--accent-tertiary, #C49A2A)' }} />
                                <Typography sx={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                                  {repo.stargazers_count}
                                </Typography>
                              </Box>
                            )}
                          </Box>
                          <Typography
                            className="repo-name"
                            sx={{
                              fontFamily: 'var(--font-display)',
                              fontVariationSettings: "'opsz' 24, 'wght' 400",
                              fontSize: '0.92rem',
                              color: 'var(--text-primary)',
                              letterSpacing: '-0.015em',
                              lineHeight: 1.2,
                              mb: 0.75,
                              transition: 'all 0.3s var(--ease-draft)',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                          >
                            {repo.name}
                          </Typography>
                          <Typography
                            sx={{
                              color: 'var(--text-muted)',
                              fontSize: '0.72rem',
                              lineHeight: 1.55,
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              fontFamily: 'var(--font-body)',
                            }}
                          >
                            {repo.description || '—'}
                          </Typography>
                        </Box>

                        {repo.language && (
                          <Typography
                            sx={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.58rem',
                              color: 'var(--text-dim)',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              mt: 1,
                            }}
                          >
                            {repo.language}
                          </Typography>
                        )}
                      </Box>
                    </motion.a>
                  )
                })}
              </AnimatePresence>
            </Box>
          )}

          {/* Freshness legend */}
          {!loading && !error && (
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mt: 4,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--text-dim)',
                flexWrap: 'wrap',
                letterSpacing: '0.05em',
              }}
            >
              <span style={{ textTransform: 'uppercase', opacity: 0.7, letterSpacing: '0.12em' }}>Freshness</span>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
                &lt;7 days
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', opacity: 0.7 }} />
                7-30d
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', opacity: 0.35 }} />
                1-6 mo
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--text-dim)', opacity: 0.5 }} />
                6+ mo
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {/* CTA */}
      <Box className="section" sx={{ pt: 4, pb: 10 }}>
        <ScrollReveal preset="inkBleed">
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 5, md: 7 },
              borderTop: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font-display)',
                fontVariationSettings: "'opsz' 72, 'wght' 300",
                fontSize: { xs: '1.65rem', md: '2.5rem' },
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                mb: 2.5,
                lineHeight: 1.15,
              }}
            >
              Want to <Box component="em" sx={{ fontStyle: 'italic', fontVariationSettings: "'wght' 500", color: 'var(--accent)' }}>collaborate?</Box>
            </Typography>

            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Box
                component="a"
                href="https://github.com/enesgunumdogdu"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid var(--text-dim)',
                  pb: 0.25,
                  transition: 'all 0.3s var(--ease-draft)',
                  '&:hover': { color: 'var(--accent)', borderColor: 'var(--accent)' }
                }}
              >
                GitHub Profile →
              </Box>
              <Box
                component="a"
                href="/contact"
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid var(--text-dim)',
                  pb: 0.25,
                  transition: 'all 0.3s var(--ease-draft)',
                  '&:hover': { color: 'var(--accent)', borderColor: 'var(--accent)' }
                }}
              >
                Get in Touch →
              </Box>
            </Box>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  )
}

export default Projects
