import { useState, useEffect } from 'react'
import { Box, Typography, Grid, Button, CircularProgress, IconButton } from '@mui/material'
import { GitHub, ArrowForward, Star, East } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/animations/ScrollReveal'
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren'
import useDocumentTitle from '../hooks/useDocumentTitle'

// Language colors (GitHub style)
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  HCL: '#844FBA',
  Assembly: '#6E4C13',
  'Jupyter Notebook': '#DA5B0B',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95'
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

function Projects() {
  useDocumentTitle('Projects')

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilters, setActiveFilters] = useState(['all'])
  const [activeLanguages, setActiveLanguages] = useState(['all'])

  const featuredProjects = [
    {
      title: 'Cartoon Weather',
      description: '7 animated character themes with full-screen video wallpapers. Multi-location tracking, widgets, AQI, 19 languages.',
      tags: ['Swift', 'iOS', 'SwiftUI'],
      github: null,
      live: 'https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541',
      isAppStore: true,
      badge: { label: 'LIVE', color: '#2A6F6F' }
    },
    {
      title: 'Seasons',
      description: 'Real-time season tracker with moon phases, solstice countdowns, 5 themes, 85+ countries.',
      tags: ['Swift', 'SwiftUI', 'WidgetKit'],
      github: null,
      live: 'https://apps.apple.com/us/app/seasons-solstice-tracker/id6758998537',
      isAppStore: true,
      badge: { label: 'LIVE', color: '#2A6F6F' }
    },
    {
      title: 'Magnetify',
      description: 'Professional window manager for macOS. Drag-to-snap, 16 positions, keyboard shortcuts, workspace profiles, app rules, 33 languages.',
      tags: ['Swift', 'SwiftUI', 'macOS', 'AppKit'],
      github: null,
      live: null,
      isAppStore: true,
      badge: { label: 'SOON', color: '#C49A2A' }
    },
    {
      title: 'Fitness Microservice',
      description: 'Cloud-native fitness platform with Spring Cloud, OAuth2 via Keycloak, AI-powered recommendations.',
      tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Keycloak'],
      github: 'https://github.com/enesgunumdogdu/fitness-microservice',
      live: 'https://aeg.fitness',
      badge: { label: 'LIVE', color: '#2A6F6F' }
    },
    {
      title: 'Guzel Hatirla',
      description: 'A digital memory garden for collecting and sharing beautiful moments with loved ones.',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/enesgunumdogdu/guzelhatirlacom',
      live: 'https://guzelhatirla.com',
      badge: { label: 'LIVE', color: '#2A6F6F' }
    },
    {
      title: 'Hospital Management',
      description: 'Full-stack hospital system with layered architecture, Spring Security, and Vue.js 3 SPA.',
      tags: ['Java', 'Spring Boot', 'Vue.js', 'Docker'],
      github: 'https://github.com/enesgunumdogdu/hospital-management',
      live: null
    },
    {
      title: 'YouTube Channel',
      description: 'Educational content on Data Structures and Algorithms. 50,000+ views.',
      tags: ['Education', 'DSA'],
      github: null,
      live: 'https://youtube.com/@enesgunumdogdu',
      isYouTube: true,
      badge: { label: '50K+', color: '#C05A3D' }
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

  const toggleFilter = (filterId) => {
    if (filterId === 'all') {
      setActiveFilters(['all'])
    } else {
      setActiveFilters(prev => {
        const newFilters = prev.filter(f => f !== 'all')
        if (newFilters.includes(filterId)) {
          const result = newFilters.filter(f => f !== filterId)
          return result.length === 0 ? ['all'] : result
        }
        return [...newFilters, filterId]
      })
    }
  }

  const toggleLanguage = (lang) => {
    if (lang === 'all') {
      setActiveLanguages(['all'])
    } else {
      setActiveLanguages(prev => {
        const newLangs = prev.filter(l => l !== 'all')
        if (newLangs.includes(lang)) {
          const result = newLangs.filter(l => l !== lang)
          return result.length === 0 ? ['all'] : result
        }
        return [...newLangs, lang]
      })
    }
  }

  const availableLanguages = [...new Set(repos.map(r => r.language).filter(Boolean))]
    .sort((a, b) => repos.filter(r => r.language === b).length - repos.filter(r => r.language === a).length)

  const filteredRepos = repos.filter(repo => {
    const categoryMatch = activeFilters.includes('all') || repo.categories.some(cat => activeFilters.includes(cat))
    const languageMatch = activeLanguages.includes('all') || activeLanguages.includes(repo.language)
    return categoryMatch && languageMatch
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <Box className="page">
      {/* Featured Projects */}
      <Box className="section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box className="section-header">
            <Box className="section-label">The Work</Box>
            <Typography className="section-title" sx={{ maxWidth: 500 }}>
              Things I've built and shipped.
            </Typography>
            <Typography className="section-subtitle">
              A mix of backend systems, iOS apps, and open-source projects.
            </Typography>
          </Box>
        </motion.div>

        <StaggerChildren style={{ display: 'flex', flexDirection: 'column' }}>
          {featuredProjects.map((project, index) => {
            const primaryLink = project.live || project.github
            const handleClick = () => {
              if (primaryLink) window.open(primaryLink, '_blank', 'noopener,noreferrer')
            }

            return (
              <StaggerItem key={index}>
                <Box
                  onClick={handleClick}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
                    alignItems: 'center',
                    gap: { xs: 1.5, md: 3 },
                    py: 3,
                    px: { xs: 0, md: 2 },
                    borderBottom: '1px solid var(--border-subtle)',
                    cursor: primaryLink ? 'pointer' : 'default',
                    transition: 'all 0.3s ease',
                    borderRadius: '2px',
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.015)',
                      px: { md: 3 },
                      '& .project-title': { color: 'var(--accent)' },
                      '& .project-arrow': { opacity: 1, transform: 'translateX(4px)' },
                    }
                  }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                      <Typography
                        className="project-title"
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: { xs: '1.1rem', md: '1.25rem' },
                          color: 'var(--text-primary)',
                          transition: 'color 0.3s ease',
                          letterSpacing: '-0.3px',
                        }}
                      >
                        {project.title}
                      </Typography>
                      {project.badge && (
                        <Box
                          sx={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.55rem',
                            fontWeight: 600,
                            px: 0.75,
                            py: 0.2,
                            borderRadius: '2px',
                            background: `${project.badge.color}15`,
                            color: project.badge.color,
                            letterSpacing: '0.5px',
                          }}
                        >
                          {project.badge.label}
                        </Box>
                      )}
                    </Box>
                    <Typography
                      sx={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        lineHeight: 1.7,
                        maxWidth: 550,
                        mb: 1,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {project.tags.map((tag, ti) => (
                        <Box
                          key={ti}
                          sx={{
                            fontFamily: "'JetBrains Mono', monospace",
                            px: 1,
                            py: 0.3,
                            fontSize: '0.6rem',
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

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                          borderRadius: '3px',
                          width: 34,
                          height: 34,
                          '&:hover': {
                            color: 'var(--text-primary)',
                            borderColor: 'var(--text-muted)',
                          }
                        }}
                      >
                        <GitHub sx={{ fontSize: 16 }} />
                      </IconButton>
                    )}
                    <East
                      className="project-arrow"
                      sx={{
                        fontSize: 18,
                        color: 'var(--text-dim)',
                        opacity: 0,
                        transition: 'all 0.3s ease',
                        display: { xs: 'none', md: 'block' },
                      }}
                    />
                  </Box>
                </Box>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </Box>

      {/* GitHub Repositories */}
      <Box sx={{ borderTop: '1px solid var(--border-subtle)' }}>
        <Box className="section" sx={{ pt: 6 }}>
          <ScrollReveal>
            <Box className="section-header">
              <Box className="section-label">Open Source</Box>
              <Typography className="section-title">
                GitHub Repositories
              </Typography>
              <Typography className="section-subtitle">
                All public repositories. Filter by category or language.
              </Typography>
            </Box>
          </ScrollReveal>

          {/* Category Filters */}
          <ScrollReveal delay={0.1}>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'var(--text-dim)', mb: 1.5, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Category
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                {filterCategories.map((filter) => {
                  const isActive = activeFilters.includes(filter.id)
                  const count = filter.id === 'all' ? repos.length : repos.filter(r => r.categories.includes(filter.id)).length

                  return (
                    <Box
                      key={filter.id}
                      onClick={() => toggleFilter(filter.id)}
                      sx={{
                        px: 1.25,
                        py: 0.5,
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        borderRadius: '2px',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--border-accent)' : 'var(--border-light)',
                        background: isActive ? 'var(--accent-dim)' : 'transparent',
                        color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        userSelect: 'none',
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.3px',
                        '&:hover': {
                          borderColor: isActive ? 'var(--border-accent)' : 'var(--text-dim)',
                        }
                      }}
                    >
                      {filter.label} <span style={{ fontSize: '0.62rem', opacity: 0.6, marginLeft: 4 }}>({count})</span>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </ScrollReveal>

          {/* Language Filters */}
          <ScrollReveal delay={0.15}>
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'var(--text-dim)', mb: 1.5, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Language
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                <Box
                  onClick={() => toggleLanguage('all')}
                  sx={{
                    px: 1,
                    py: 0.4,
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    borderRadius: '2px',
                    border: '1px solid',
                    borderColor: activeLanguages.includes('all') ? 'var(--border-accent)' : 'var(--border-light)',
                    background: activeLanguages.includes('all') ? 'var(--accent-dim)' : 'transparent',
                    color: activeLanguages.includes('all') ? 'var(--accent)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    userSelect: 'none',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  All
                </Box>
                {availableLanguages.map((lang) => {
                  const isActive = activeLanguages.includes(lang)
                  const count = repos.filter(r => r.language === lang).length
                  const color = languageColors[lang] || '#8b8b8b'

                  return (
                    <Box
                      key={lang}
                      onClick={() => toggleLanguage(lang)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1,
                        py: 0.4,
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        borderRadius: '2px',
                        border: '1px solid',
                        borderColor: isActive ? `${color}50` : 'var(--border-light)',
                        background: isActive ? `${color}12` : 'transparent',
                        color: isActive ? color : 'var(--text-muted)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        userSelect: 'none',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
                      {lang}
                      <span style={{ fontSize: '0.58rem', opacity: 0.6 }}>({count})</span>
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </ScrollReveal>

          {/* Loading */}
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress size={24} sx={{ color: 'var(--accent)' }} />
            </Box>
          )}

          {/* Error */}
          {error && (
            <Box sx={{ textAlign: 'center', py: 8, color: 'var(--text-secondary)' }}>
              <Typography sx={{ mb: 2, fontSize: '0.9rem' }}>Failed to load repositories</Typography>
              <Button
                onClick={() => window.location.reload()}
                sx={{
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '3px',
                  fontSize: '0.82rem',
                  textTransform: 'none',
                  fontFamily: "'JetBrains Mono', monospace",
                  px: 3,
                }}
              >
                Retry
              </Button>
            </Box>
          )}

          {/* Repos Grid */}
          {!loading && !error && (
            <>
              <Typography
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  mb: 3,
                  color: 'var(--text-dim)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.5px',
                }}
              >
                {filteredRepos.length} / {repos.length} repositories
              </Typography>

              <Grid container spacing={1.5}>
                {filteredRepos.map((repo, i) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={repo.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i * 0.03, 0.5), duration: 0.4 }}
                    >
                      <Box
                        component="a"
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gradient-border-card"
                        sx={{
                          display: 'block',
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '3px',
                          p: 2.5,
                          height: '100%',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: 'var(--border-light)',
                            '& .repo-name': { color: 'var(--accent)' },
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                          <GitHub sx={{ color: 'var(--text-dim)', fontSize: 16, mt: 0.25, flexShrink: 0 }} />
                          <Typography
                            className="repo-name"
                            sx={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontWeight: 500,
                              color: 'var(--text-primary)',
                              fontSize: '0.82rem',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              transition: 'color 0.3s ease',
                              flex: 1,
                            }}
                          >
                            {repo.name}
                          </Typography>
                          {repo.stargazers_count > 0 && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#C49A2A', flexShrink: 0 }}>
                              <Star sx={{ fontSize: 12 }} />
                              <Typography sx={{ fontSize: '0.68rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                {repo.stargazers_count}
                              </Typography>
                            </Box>
                          )}
                        </Box>

                        <Typography
                          sx={{
                            color: 'var(--text-muted)',
                            fontSize: '0.75rem',
                            lineHeight: 1.6,
                            mb: 2,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            minHeight: '2.4rem',
                          }}
                        >
                          {repo.description || 'No description'}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                          {repo.language && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: languageColors[repo.language] || '#8b8b8b' }} />
                              <Typography sx={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                                {repo.language}
                              </Typography>
                            </Box>
                          )}

                          <Typography sx={{ fontSize: '0.62rem', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace" }}>
                            {formatDate(repo.updated_at)}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Box>
      </Box>

      {/* CTA */}
      <Box className="section" sx={{ pt: 2 }}>
        <ScrollReveal>
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
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 300,
                fontSize: { xs: '1.5rem', md: '2.25rem' },
                color: 'var(--text-primary)',
                letterSpacing: '-0.5px',
                mb: 2,
              }}
            >
              Want to <Box component="span" sx={{ fontWeight: 700 }}>collaborate?</Box>
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                href="https://github.com/enesgunumdogdu"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<East sx={{ fontSize: 14 }} />}
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--text-dim)',
                  borderRadius: 0,
                  px: 0.5,
                  textTransform: 'none',
                  letterSpacing: '0.3px',
                  '&:hover': {
                    color: 'var(--accent)',
                    borderColor: 'var(--accent)',
                    background: 'transparent',
                  }
                }}
              >
                GitHub Profile
              </Button>
              <Button
                href="/contact"
                endIcon={<East sx={{ fontSize: 14 }} />}
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--text-dim)',
                  borderRadius: 0,
                  px: 0.5,
                  textTransform: 'none',
                  letterSpacing: '0.3px',
                  '&:hover': {
                    color: 'var(--accent)',
                    borderColor: 'var(--accent)',
                    background: 'transparent',
                  }
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  )
}

export default Projects
