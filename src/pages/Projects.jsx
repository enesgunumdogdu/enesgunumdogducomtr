import { useState, useEffect } from 'react'
import { Box, Typography, Grid, Button, Chip, CircularProgress, IconButton } from '@mui/material'
import { GitHub, ArrowForward, Star, Launch, YouTube } from '@mui/icons-material'
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
  { id: 'Backend', label: 'Backend', icon: '🔧' },
  { id: 'Web', label: 'Web', icon: '🌐' },
  { id: 'AI/ML', label: 'AI/ML', icon: '🤖' },
  { id: 'Mobile', label: 'Mobile', icon: '📱' },
  { id: 'DevOps', label: 'DevOps', icon: '☁️' },
  { id: 'Tools', label: 'Tools', icon: '🛠️' },
  { id: 'Other', label: 'Other', icon: '📦' }
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
      title: 'Fitness Microservice App',
      description: 'Cloud-native fitness tracking platform built on Spring Boot microservices with Spring Cloud ecosystem. Features OAuth2/OIDC via Keycloak, polyglot persistence, and AI-powered recommendations.',
      tags: ['Java 24', 'Spring Boot', 'Spring Cloud', 'RabbitMQ', 'Gemini API', 'Keycloak'],
      icon: '💪🏾',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
      github: 'https://github.com/enesgunumdogdu/fitness-microservice',
      live: 'https://aeg.fitness'
    },
    {
      title: 'Güzel Hatırla',
      description: 'A digital memory garden where we can collect and share the beautiful moments we lived with the people we lost. Built with Next.js and TypeScript.',
      tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      icon: '🕊️',
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
      github: 'https://github.com/enesgunumdogdu/guzelhatirlacom',
      live: 'https://guzelhatirla.com'
    },
    {
      title: 'Hospital Management System',
      description: 'Full-stack hospital management using Layered Architecture pattern with RESTful APIs, DTO pattern with MapStruct, and modern Vue.js 3 SPA frontend.',
      tags: ['Java 24', 'Spring Boot', 'Spring Security', 'Vue.js', 'PostgreSQL', 'Docker'],
      icon: '🏥',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      github: 'https://github.com/enesgunumdogdu/hospital-management',
      live: null
    },
    {
      title: 'Task Management API',
      description: 'RESTful CRUD operations for TaskList and Task entities using Layered Architecture pattern, DTO-based clean API design, and global exception handling.',
      tags: ['Java 24', 'Spring Boot', 'PostgreSQL', 'Maven', 'Docker'],
      icon: '📋',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
      github: 'https://github.com/enesgunumdogdu/Task-Management-API',
      live: null
    },
    {
      title: 'YouTube Channel',
      description: 'Educational content on Data Structures and Algorithms — one of the core subjects of computer engineering. Simplifying complex concepts for students with 50K+ total views.',
      tags: ['Education', 'DSA', 'Content Creation'],
      icon: '▶️',
      gradient: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
      github: null,
      live: 'https://youtube.com/@enesgunumdogdu',
      isYouTube: true
    },
    {
      title: 'Portfolio Website',
      description: 'This website! Built with React, Material UI, and modern gradient design. Fully responsive with typing effects and smooth animations.',
      tags: ['React', 'MUI', 'Vite', 'Responsive'],
      icon: '3nes',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
      github: 'https://github.com/enesgunumdogdu/enesgunumdogdu.com.tr',
      live: 'https://enesgunumdogdu.com.tr',
      isLogo: true
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
                  background: 'rgba(17, 17, 17, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(124, 58, 237, 0.3)',
                    boxShadow: '0 20px 60px rgba(124, 58, 237, 0.15)',
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
                    ) : project.isLogo ? (
                      <Typography
                        sx={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '3.5rem',
                          fontWeight: 800,
                          color: 'white',
                          textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                        }}
                      >
                        {project.icon}
                      </Typography>
                    ) : (
                      project.icon
                    )}
                  </Box>

                  {/* Gradient overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '50%',
                      background: 'linear-gradient(180deg, transparent 0%, rgba(17,17,17,0.9) 100%)'
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
                      color: 'white',
                      fontSize: '1.1rem'
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.75)',
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
                          background: 'rgba(124, 58, 237, 0.1)',
                          border: '1px solid rgba(124, 58, 237, 0.15)',
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          color: '#c4b5fd'
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
                          background: 'rgba(124, 58, 237, 0.05)',
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.4)'
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
                          color: 'rgba(255,255,255,0.6)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '10px',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: 'white',
                            borderColor: '#7c3aed',
                            backgroundColor: 'rgba(124, 58, 237, 0.1)',
                          }
                        }}
                      >
                        <GitHub fontSize="small" />
                      </IconButton>
                    )}
                    {project.live && (
                      <Box
                        component="span"
                        onClick={(e) => e.stopPropagation()}
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
                          background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.15) 100%)',
                          border: '1px solid rgba(168,85,247,0.3)',
                          color: '#c4b5fd',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.2), rgba(236,72,153,0.2), transparent)',
                            animation: 'shimmer-slide 2.5s ease-in-out infinite',
                          },
                          '@keyframes shimmer-slide': {
                            '0%': { transform: 'translateX(-100%)' },
                            '100%': { transform: 'translateX(100%)' }
                          }
                        }}
                      >
                        {project.live.includes('youtube') ? (
                          <YouTube sx={{ fontSize: 16, position: 'relative', zIndex: 1, color: '#ff4444' }} />
                        ) : (
                          <Launch sx={{ fontSize: 14, position: 'relative', zIndex: 1 }} />
                        )}
                        <span style={{ position: 'relative', zIndex: 1 }}>
                          {project.live.includes('youtube')
                            ? 'YouTube'
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
          <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', mb: 1.5, textAlign: 'center' }}>
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
                      {filter.icon && <span>{filter.icon}</span>}
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
                    borderColor: isActive ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255,255,255,0.1)',
                    background: isActive
                      ? 'rgba(168, 85, 247, 0.2)'
                      : 'rgba(255,255,255,0.03)',
                    color: isActive ? '#c4b5fd' : 'rgba(255,255,255,0.7)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'rgba(168, 85, 247, 0.4)',
                      background: isActive
                        ? 'rgba(168, 85, 247, 0.25)'
                        : 'rgba(168, 85, 247, 0.1)',
                    }
                  }}
                />
              )
            })}
          </Box>
        </Box>

        {/* Language Filters */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', mb: 1.5, textAlign: 'center' }}>
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
                borderColor: activeLanguages.includes('all') ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255,255,255,0.1)',
                background: activeLanguages.includes('all')
                  ? 'rgba(168, 85, 247, 0.2)'
                  : 'rgba(255,255,255,0.03)',
                color: activeLanguages.includes('all') ? '#c4b5fd' : 'rgba(255,255,255,0.7)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'rgba(168, 85, 247, 0.4)',
                  background: activeLanguages.includes('all')
                    ? 'rgba(168, 85, 247, 0.25)'
                    : 'rgba(168, 85, 247, 0.1)',
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
                    borderColor: isActive ? `${color}80` : 'rgba(255,255,255,0.1)',
                    background: isActive
                      ? `${color}20`
                      : 'rgba(255,255,255,0.03)',
                    color: isActive ? color : 'rgba(255,255,255,0.7)',
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
            <CircularProgress sx={{ color: '#a855f7' }} />
          </Box>
        )}

        {/* Error State */}
        {error && (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              color: 'rgba(255,255,255,0.6)'
            }}
          >
            <Typography sx={{ mb: 2 }}>Failed to load repositories</Typography>
            <Button
              variant="outlined"
              onClick={() => window.location.reload()}
              sx={{
                borderColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                '&:hover': {
                  borderColor: '#a855f7'
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
                color: 'rgba(255,255,255,0.5)',
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
                      background: 'rgba(17, 17, 17, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '16px',
                      p: 2.5,
                      height: '100%',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'rgba(124, 58, 237, 0.3)',
                        boxShadow: '0 10px 40px rgba(124, 58, 237, 0.1)',
                      }
                    }}
                  >
                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                      <GitHub sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 20, mt: 0.25 }} />
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                            color: 'white',
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
                        color: 'rgba(255,255,255,0.6)',
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
                          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
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
                              background: 'rgba(124, 58, 237, 0.1)',
                              fontSize: '0.65rem',
                              color: '#c4b5fd'
                            }}
                          >
                            {cat}
                          </Box>
                        ))}
                      </Box>

                      {/* Updated date */}
                      <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>
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
            background: 'rgba(17, 17, 17, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '24px',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background glow */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              height: 400,
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              mb: 2,
              position: 'relative',
              color: 'white',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Let's <span className="gradient-text">Collaborate!</span>
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.8)',
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
              background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
              position: 'relative',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 30px rgba(124, 58, 237, 0.5)',
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
