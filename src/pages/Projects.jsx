import { useState, useEffect } from 'react'
import { Box, Typography, Grid, Button, Chip, CircularProgress, IconButton } from '@mui/material'
import { GitHub, ArrowForward, Star, Launch, YouTube, Apple } from '@mui/icons-material'
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

// Category definitions based on topics and languages
const categorizeRepo = (repo) => {
  const topics = repo.topics || []
  const lang = repo.language?.toLowerCase() || ''
  const name = repo.name.toLowerCase()
  const desc = (repo.description || '').toLowerCase()

  const categories = []

  // Backend/Spring
  if (topics.some(t => ['spring-boot', 'api', 'microservices', 'postgresql', 'mongodb', 'docker', 'keycloak', 'oauth2'].includes(t)) ||
      lang === 'java' && (name.includes('api') || name.includes('management') || desc.includes('api')) ||
      topics.includes('dotnet') || topics.includes('asp-net-core')) {
    categories.push('Backend')
  }

  // Web
  if (topics.some(t => ['react', 'vue', 'nextjs', 'flask', 'django', 'web', 'mvc', 'html'].includes(t)) ||
      lang === 'html' || name.includes('web') || topics.includes('csharp') && topics.includes('mvc')) {
    categories.push('Web')
  }

  // AI/ML
  if (topics.some(t => ['machine-learning', 'deep-learning', 'keras', 'cnn', 'image-classification', 'keras-tensorflow', 'random-forest-classifier'].includes(t)) ||
      name.includes('ml') || name.includes('cnn') || desc.includes('machine learning') || desc.includes('neural') ||
      name.includes('emotion') || name.includes('classifier')) {
    categories.push('AI/ML')
  }

  // Mobile
  if (topics.some(t => ['android', 'ios', 'mobile', 'swift', 'kotlin', 'libgdx-game'].includes(t)) ||
      lang === 'swift' || lang === 'kotlin') {
    categories.push('Mobile')
  }

  // DevOps
  if (topics.some(t => ['docker', 'terraform', 'kubernetes', 'ci-cd', 'devops', 'gcp', 'aws'].includes(t)) ||
      lang === 'hcl') {
    categories.push('DevOps')
  }

  // Tools/Bots
  if (topics.some(t => ['discord-bot', 'bot', 'automation', 'tkinter', 'gui-application'].includes(t)) ||
      name.includes('bot') || name.includes('clicker') || name.includes('speech')) {
    categories.push('Tools')
  }

  // If no category matched, assign "Other"
  if (categories.length === 0) {
    categories.push('Other')
  }

  return categories
}

const filterCategories = [
  { id: 'all', label: 'All', icon: null },
  { id: 'Backend', label: 'Backend', icon: null },
  { id: 'Web', label: 'Web', icon: null },
  { id: 'AI/ML', label: 'AI/ML', icon: null },
  { id: 'Mobile', label: 'Mobile', icon: null },
  { id: 'DevOps', label: 'DevOps', icon: null },
  { id: 'Tools', label: 'Tools', icon: null },
  { id: 'Other', label: 'Other', icon: null }
]

function Projects() {
  useDocumentTitle('Projects')

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilters, setActiveFilters] = useState(['all'])
  const [activeLanguages, setActiveLanguages] = useState(['all'])

  // Featured projects (curated) - only projects with valid links
  const featuredProjects = [
    {
      title: 'Cartoon Weather',
      description: 'Cute weather app with 7 animated character themes and full-screen video wallpapers that react to real-time conditions. Features multi-location tracking, home screen widgets, AQI, hourly & 7-day forecasts, and supports 19 languages.',
      tags: ['Swift', 'iOS', 'SwiftUI'],
      icon: null,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #3b82f6 100%)',
      github: null,
      live: 'https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541',
      isAppStore: true
    },
    {
      title: 'Fitness Microservice App',
      description: 'Cloud-native fitness tracking platform built on Spring Boot microservices with Spring Cloud ecosystem. Features OAuth2/OIDC via Keycloak, polyglot persistence, and AI-powered recommendations.',
      tags: ['Java 24', 'Spring Boot', 'Spring Cloud', 'RabbitMQ', 'Gemini API', 'Keycloak'],
      icon: null,
      gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      github: 'https://github.com/enesgunumdogdu/fitness-microservice',
      live: 'https://aeg.fitness'
    },
    {
      title: 'Guzel Hatirla',
      description: 'A digital memory garden where we can collect and share the beautiful moments we lived with the people we lost. Built with Next.js and TypeScript.',
      tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      icon: null,
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
      github: 'https://github.com/enesgunumdogdu/guzelhatirlacom',
      live: 'https://guzelhatirla.com'
    },
    {
      title: 'Hospital Management System',
      description: 'Full-stack hospital management using Layered Architecture pattern with RESTful APIs, DTO pattern with MapStruct, and modern Vue.js 3 SPA frontend.',
      tags: ['Java 24', 'Spring Boot', 'Spring Security', 'Vue.js', 'PostgreSQL', 'Docker'],
      icon: null,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      github: 'https://github.com/enesgunumdogdu/hospital-management',
      live: null
    },
    {
      title: 'Task Management API',
      description: 'RESTful CRUD operations for TaskList and Task entities using Layered Architecture pattern, DTO-based clean API design, and global exception handling.',
      tags: ['Java 24', 'Spring Boot', 'PostgreSQL', 'Maven', 'Docker'],
      icon: null,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      github: 'https://github.com/enesgunumdogdu/Task-Management-API',
      live: null
    },
    {
      title: 'YouTube Channel',
      description: 'Educational content on Data Structures and Algorithms \u2014 one of the core subjects of computer engineering. Simplifying complex concepts for students with 50K+ total views.',
      tags: ['Education', 'DSA', 'Content Creation'],
      icon: null,
      gradient: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)',
      github: null,
      live: 'https://youtube.com/@enesgunumdogdu',
      isYouTube: true
    }
  ]

  // Fetch GitHub repos
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/enesgunumdogdu/repos?per_page=100&sort=updated')

        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }

        const data = await response.json()

        // Filter out forks and profile repo, add categories
        const processedRepos = data
          .filter(repo => !repo.fork && repo.name !== 'enesgunumdogdu')
          .map(repo => ({
            ...repo,
            categories: categorizeRepo(repo)
          }))

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
        } else {
          return [...newFilters, filterId]
        }
      })
    }
  }

  // Toggle language filter
  const toggleLanguage = (lang) => {
    if (lang === 'all') {
      setActiveLanguages(['all'])
    } else {
      setActiveLanguages(prev => {
        const newLangs = prev.filter(l => l !== 'all')

        if (newLangs.includes(lang)) {
          const result = newLangs.filter(l => l !== lang)
          return result.length === 0 ? ['all'] : result
        } else {
          return [...newLangs, lang]
        }
      })
    }
  }

  // Get unique languages from repos, sorted by count (most used first)
  const availableLanguages = [...new Set(repos.map(r => r.language).filter(Boolean))]
    .sort((a, b) => {
      const countA = repos.filter(r => r.language === a).length
      const countB = repos.filter(r => r.language === b).length
      return countB - countA
    })

  // Filter repos based on active filters and languages
  const filteredRepos = repos.filter(repo => {
    const categoryMatch = activeFilters.includes('all') || repo.categories.some(cat => activeFilters.includes(cat))
    const languageMatch = activeLanguages.includes('all') || activeLanguages.includes(repo.language)
    return categoryMatch && languageMatch
  })

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <Box className="page">
      {/* Featured Projects Section */}
      <Box className="section">
        <Box className="section-header">
          <Box className="section-label">Portfolio</Box>
          <Typography variant="h1" component="h1" className="hero-name hero-name--large">
            <span className="hero-name-first gradient-text-animated">Featured</span>
            <span className="hero-name-surname gradient-text-animated">Projects</span>
          </Typography>
          <Typography className="section-subtitle">
            A curated collection of projects showcasing my expertise in backend development,
            microservices, and cloud technologies.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {featuredProjects.map((project, index) => {
            // Determine primary link: live takes priority, then github
            const primaryLink = project.live || project.github

            const handleCardClick = () => {
              window.open(primaryLink, '_blank', 'noopener,noreferrer')
            }

            const handleGitHubClick = (e) => {
              e.stopPropagation()
              window.open(project.github, '_blank', 'noopener,noreferrer')
            }

            return (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Box
                onClick={handleCardClick}
                sx={{
                  background: '#161616',
                  border: '1px solid #1e1e1e',
                  borderLeft: '3px solid #10b981',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    borderLeftColor: '#10b981',
                    boxShadow: '0 20px 60px rgba(16, 185, 129, 0.08)',
                    '& .project-image': {
                      transform: 'scale(1.1)'
                    }
                  }
                }}
              >
                {/* Project Header */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 180,
                    background: project.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    className="project-image"
                    sx={{
                      fontSize: '4rem',
                      transition: 'transform 0.4s ease',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {project.isYouTube ? (
                      <YouTube sx={{ fontSize: '5rem', color: 'white' }} />
                    ) : project.isAppStore ? (
                      <Apple sx={{ fontSize: '5rem', color: 'white' }} />
                    ) : (
                      <Box sx={{ fontSize: '5rem', color: 'white', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {project.title.charAt(0)}
                      </Box>
                    )}
                  </Box>

                  {/* Gradient overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '5%',
                      background: 'linear-gradient(180deg, transparent 0%, #161616 100%)'
                    }}
                  />
                </Box>

                {/* Content */}
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      mb: 1,
                      color: '#ededed',
                      fontSize: '1.1rem'
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#888888',
                      lineHeight: 1.8,
                      mb: 2,
                      flex: 1,
                      fontSize: '0.9rem'
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <Box
                        key={tagIndex}
                        sx={{
                          px: 1.25,
                          py: 0.4,
                          borderRadius: '6px',
                          background: 'rgba(16, 185, 129, 0.08)',
                          border: '1px solid rgba(16, 185, 129, 0.15)',
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          color: '#6ee7b7'
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                    {project.tags.length > 4 && (
                      <Box
                        sx={{
                          px: 1.25,
                          py: 0.4,
                          borderRadius: '6px',
                          background: 'rgba(16, 185, 129, 0.05)',
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          color: '#555555'
                        }}
                      >
                        +{project.tags.length - 4}
                      </Box>
                    )}
                  </Box>

                  {/* Action Links */}
                  <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto', alignItems: 'center' }}>
                    {project.github && (
                      <IconButton
                        onClick={handleGitHubClick}
                        size="small"
                        sx={{
                          color: '#888888',
                          border: '1px solid #2a2a2a',
                          borderRadius: '10px',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: '#ededed',
                            borderColor: '#10b981',
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          }
                        }}
                      >
                        <GitHub fontSize="small" />
                      </IconButton>
                    )}
                    {project.live && (
                      <Box
                        component="span"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.live, '_blank', 'noopener,noreferrer')
                        }}
                        className="live-badge"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.75,
                          px: 1.5,
                          py: 0.75,
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          background: 'rgba(16, 185, 129, 0.1)',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                          color: '#6ee7b7',
                        }}
                      >
                        {project.live.includes('youtube') ? (
                          <YouTube sx={{ fontSize: 16, color: '#ef4444' }} />
                        ) : project.isAppStore ? (
                          <Apple sx={{ fontSize: 16 }} />
                        ) : (
                          <Launch sx={{ fontSize: 14 }} />
                        )}
                        <span>
                          {project.live.includes('youtube')
                            ? 'YouTube'
                            : project.isAppStore
                            ? 'App Store'
                            : project.live.replace('https://', '').replace('http://', '').split('/')[0]}
                        </span>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          )})}
        </Grid>
      </Box>

      {/* GitHub Repositories Section */}
      <Box className="section" sx={{ pt: 2 }}>
        <Box className="section-header">
          <Box className="section-label">Open Source</Box>
          <Typography variant="h2" className="section-title">
            <span className="gradient-text-shimmer">GitHub Repositories</span>
          </Typography>
          <Typography className="section-subtitle">
            All my <strong>public</strong> repositories from GitHub. Use filters to explore by category or language.
          </Typography>
        </Box>

        {/* Category Filters */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: '0.8rem', color: '#555555', mb: 1.5, textAlign: 'center' }}>
            Category
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {filterCategories.map((filter) => {
              const isActive = activeFilters.includes(filter.id)
              const count = filter.id === 'all'
                ? repos.length
                : repos.filter(r => r.categories.includes(filter.id)).length

              return (
                <Chip
                  key={filter.id}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                      <span>{filter.label}</span>
                      <Box
                        component="span"
                        sx={{
                          fontSize: '0.7rem',
                          opacity: 0.7,
                          ml: 0.5
                        }}
                      >
                        ({count})
                      </Box>
                    </Box>
                  }
                  onClick={() => toggleFilter(filter.id)}
                  sx={{
                    px: 1,
                    py: 2.5,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(16, 185, 129, 0.5)' : '#2a2a2a',
                    background: isActive
                      ? 'rgba(16, 185, 129, 0.15)'
                      : '#161616',
                    color: isActive ? '#6ee7b7' : '#888888',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'rgba(16, 185, 129, 0.4)',
                      background: isActive
                        ? 'rgba(16, 185, 129, 0.2)'
                        : 'rgba(16, 185, 129, 0.08)',
                    }
                  }}
                />
              )
            })}
          </Box>
        </Box>

        {/* Language Filters */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontSize: '0.8rem', color: '#555555', mb: 1.5, textAlign: 'center' }}>
            Language
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 0.75,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <Chip
              label="All"
              onClick={() => toggleLanguage('all')}
              size="small"
              sx={{
                px: 0.5,
                fontSize: '0.8rem',
                fontWeight: 500,
                borderRadius: '8px',
                border: '1px solid',
                borderColor: activeLanguages.includes('all') ? 'rgba(16, 185, 129, 0.5)' : '#2a2a2a',
                background: activeLanguages.includes('all')
                  ? 'rgba(16, 185, 129, 0.15)'
                  : '#161616',
                color: activeLanguages.includes('all') ? '#6ee7b7' : '#888888',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'rgba(16, 185, 129, 0.4)',
                  background: activeLanguages.includes('all')
                    ? 'rgba(16, 185, 129, 0.2)'
                    : 'rgba(16, 185, 129, 0.08)',
                }
              }}
            />
            {availableLanguages.map((lang) => {
              const isActive = activeLanguages.includes(lang)
              const count = repos.filter(r => r.language === lang).length
              const color = languageColors[lang] || '#8b8b8b'

              return (
                <Chip
                  key={lang}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: color
                        }}
                      />
                      <span>{lang}</span>
                      <Box component="span" sx={{ fontSize: '0.65rem', opacity: 0.7 }}>
                        ({count})
                      </Box>
                    </Box>
                  }
                  onClick={() => toggleLanguage(lang)}
                  size="small"
                  sx={{
                    px: 0.5,
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: isActive ? `${color}80` : '#2a2a2a',
                    background: isActive
                      ? `${color}20`
                      : '#161616',
                    color: isActive ? color : '#888888',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: `${color}60`,
                      background: isActive
                        ? `${color}30`
                        : `${color}15`,
                    }
                  }}
                />
              )
            })}
          </Box>
        </Box>

        {/* Loading State */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress sx={{ color: '#10b981' }} />
          </Box>
        )}

        {/* Error State */}
        {error && (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              color: '#888888'
            }}
          >
            <Typography sx={{ mb: 2 }}>Failed to load repositories</Typography>
            <Button
              variant="outlined"
              onClick={() => window.location.reload()}
              sx={{
                borderColor: '#2a2a2a',
                color: '#ededed',
                '&:hover': {
                  borderColor: '#10b981'
                }
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
                textAlign: 'center',
                mb: 3,
                color: '#555555',
                fontSize: '0.9rem'
              }}
            >
              Showing {filteredRepos.length} of {repos.length} repositories
            </Typography>

            <Grid container spacing={2}>
              {filteredRepos.map((repo) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={repo.id}>
                  <Box
                    component="a"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'block',
                      background: '#161616',
                      border: '1px solid #1e1e1e',
                      borderRadius: '16px',
                      p: 2.5,
                      height: '100%',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'rgba(16, 185, 129, 0.3)',
                        boxShadow: '0 10px 40px rgba(16, 185, 129, 0.06)',
                      }
                    }}
                  >
                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                      <GitHub sx={{ color: '#555555', fontSize: 20, mt: 0.25 }} />
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                            color: '#ededed',
                            fontSize: '0.95rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {repo.name}
                        </Typography>
                      </Box>
                      {repo.stargazers_count > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#fbbf24' }}>
                          <Star sx={{ fontSize: 14 }} />
                          <Typography sx={{ fontSize: '0.75rem' }}>{repo.stargazers_count}</Typography>
                        </Box>
                      )}
                    </Box>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: '#666666',
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        mb: 2,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '2.5rem'
                      }}
                    >
                      {repo.description || 'No description available'}
                    </Typography>

                    {/* Footer */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                      {/* Language */}
                      {repo.language && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                          <Box
                            sx={{
                              width: 10,
                              height: 10,
                              borderRadius: '50%',
                              background: languageColors[repo.language] || '#8b8b8b'
                            }}
                          />
                          <Typography sx={{ fontSize: '0.75rem', color: '#666666' }}>
                            {repo.language}
                          </Typography>
                        </Box>
                      )}

                      {/* Categories */}
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {repo.categories.slice(0, 2).map((cat) => (
                          <Box
                            key={cat}
                            sx={{
                              px: 1,
                              py: 0.25,
                              borderRadius: '4px',
                              background: 'rgba(16, 185, 129, 0.08)',
                              fontSize: '0.65rem',
                              color: '#6ee7b7'
                            }}
                          >
                            {cat}
                          </Box>
                        ))}
                      </Box>

                      {/* Updated date */}
                      <Typography sx={{ fontSize: '0.7rem', color: '#555555' }}>
                        {formatDate(repo.updated_at)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>

      {/* CTA Section */}
      <Box className="section" sx={{ pt: 2 }}>
        <Box
          sx={{
            background: '#161616',
            border: '1px solid #1e1e1e',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              mb: 2,
              position: 'relative',
              color: '#ededed',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Let's <span className="gradient-text">Collaborate!</span>
          </Typography>

          <Typography
            sx={{
              color: '#888888',
              maxWidth: 500,
              mx: 'auto',
              mb: 4,
              lineHeight: 1.8,
              position: 'relative',
              fontSize: '1rem'
            }}
          >
            Interested in working together? Check out my GitHub for more projects
            or reach out to discuss potential collaborations.
          </Typography>

          <Button
            href="https://github.com/enesgunumdogdu"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              background: '#10b981',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
              position: 'relative',
              '&:hover': {
                background: '#059669',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)',
              }
            }}
          >
            Visit GitHub Profile
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
