import { Box, Typography, Grid, Button, IconButton } from '@mui/material'
import { GitHub, Launch, ArrowForward } from '@mui/icons-material'
import useDocumentTitle from '../hooks/useDocumentTitle'

function Projects() {
  useDocumentTitle('Projects')

  const projects = [
    {
      title: 'Fitness Microservice App',
      description: 'Cloud-native fitness tracking platform built on Spring Boot microservices with Spring Cloud ecosystem. Features OAuth2/OIDC via Keycloak, polyglot persistence, and AI-powered recommendations.',
      tags: ['Java 24', 'Spring Boot', 'Spring Cloud', 'RabbitMQ', 'Gemini API', 'Keycloak'],
      icon: '💪',
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
      github: 'https://github.com/enesgunumdogdu/fitness-microservice',
      live: null
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
      github: 'https://github.com/enesgunumdogdu/task-management-api',
      live: null
    },
    {
      title: 'YouTube Channel',
      description: 'Educational content on Data Structures and Algorithms — one of the core subjects of computer engineering. Simplifying complex concepts for students with 50K+ total views.',
      tags: ['Education', 'DSA', 'Content Creation'],
      icon: '🎬',
      gradient: 'linear-gradient(135deg, #f43f5e 0%, #ff6b6b 100%)',
      github: null,
      live: 'https://youtube.com/@enesgunumdogdu'
    },
    {
      title: 'AI Style Transfer Project',
      description: 'TUBITAK 2209-A funded Python-based machine learning project that produces paintings in the drawing styles of deceased artists using advanced style transfer techniques.',
      tags: ['Python', 'Machine Learning', 'AI', 'TUBITAK'],
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
      github: 'https://github.com/enesgunumdogdu/style-transfer',
      live: null
    },
    {
      title: 'Portfolio Website',
      description: 'This website! Built with React, Material UI, and modern gradient design. Fully responsive with typing effects and smooth animations.',
      tags: ['React', 'MUI', 'Vite', 'Responsive'],
      icon: '🌐',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
      github: 'https://github.com/enesgunumdogdu/enesgunumdogdu.com.tr',
      live: 'https://enesgunumdogdu.com.tr'
    }
  ]

  return (
    <Box className="page">
      <Box className="section">
        <Box className="section-header">
          <Box className="section-label">Portfolio</Box>
          <Typography variant="h1" component="h1" className="hero-name hero-name--large">
            <span className="hero-name-first gradient-text-animated">My</span>
            <span className="hero-name-surname gradient-text-animated">Projects</span>
          </Typography>
          <Typography className="section-subtitle">
            A collection of projects showcasing my expertise in backend development,
            microservices, and cloud technologies.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Box
                sx={{
                  background: 'rgba(17, 17, 17, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(124, 58, 237, 0.3)',
                    boxShadow: '0 20px 60px rgba(124, 58, 237, 0.15)',
                    '& .project-image': {
                      transform: 'scale(1.05)'
                    },
                    '& .project-links': {
                      opacity: 1
                    }
                  }
                }}
              >
                {/* Project Image */}
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
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                    }}
                  >
                    {project.icon}
                  </Box>

                  {/* Overlay with links */}
                  {(project.github || project.live) && (
                    <Box
                      className="project-links"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1.5,
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    >
                      {project.github && (
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            '&:hover': {
                              background: 'rgba(255,255,255,0.2)'
                            }
                          }}
                        >
                          <GitHub />
                        </IconButton>
                      )}
                      {project.live && (
                        <IconButton
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            '&:hover': {
                              background: 'rgba(255,255,255,0.2)'
                            }
                          }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                    </Box>
                  )}

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
                <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
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

                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
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
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box className="section" sx={{ pt: 0 }}>
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
            More Projects <span className="gradient-text">Coming Soon!</span>
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
            I'm constantly working on new projects and exploring technologies.
            Check out my GitHub for the latest updates and contributions.
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
            Visit GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
