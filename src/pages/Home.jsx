import { Link } from 'react-router-dom'
import { Box, Container, Typography, Button, Grid, Card, CardContent, IconButton } from '@mui/material'
import { GitHub, LinkedIn, ArrowForward, Storage, CloudQueue, PhoneIphone, Apple } from '@mui/icons-material'
import TypeWriter from '../components/TypeWriter'
import useDocumentTitle from '../hooks/useDocumentTitle'

function Home() {
  useDocumentTitle(null)

  const roles = ['Backend Developer', 'Spring Boot Expert', 'Cloud Enthusiast', 'AI Explorer']

  const features = [
    {
      icon: <Storage sx={{ fontSize: 28 }} />,
      title: 'Backend Development',
      description: 'Building scalable and robust backend systems with Java, Spring Boot, and microservices architecture.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL']
    },
    {
      icon: <CloudQueue sx={{ fontSize: 28 }} />,
      title: 'Cloud & DevOps',
      description: 'Deploying and managing applications on cloud platforms with Docker, GCP, and modern CI/CD pipelines.',
      tags: ['Docker', 'GCP', 'RabbitMQ']
    },
    {
      icon: <PhoneIphone sx={{ fontSize: 28 }} />,
      title: 'iOS Development',
      description: 'Crafting native iOS applications with Swift in my spare time, combining creativity with technical excellence.',
      tags: ['Swift', 'iOS', 'Mobile']
    }
  ]

  const stats = [
    { number: '25+', label: 'Projects Delivered' },
    { number: '4+', label: 'Years Experience' },
    { number: '50K+', label: 'YouTube Views' },
    { number: '10+', label: 'Microservices Built' }
  ]

  return (
    <Box className="page">
      {/* Hero Section */}
      <Box className="hero">

        <Container maxWidth="lg">
          <Box className="hero-content">
            {/* Title */}
            <Typography
              variant="h1"
              className="hero-title"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: '-2px',
                mb: 2
              }}
            >
              <span>Hi, I'm </span>
              <span className="gradient-text">Enes</span>
            </Typography>

            {/* Typing Effect */}
            <Box
              sx={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 500,
                color: '#ededed',
                mb: 3,
                minHeight: '2.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
              }}
            >
              <span style={{ color: '#555555' }}>&lt;</span>
              <TypeWriter words={roles} speed={80} deleteSpeed={40} delay={2000} />
              <span style={{ color: '#555555' }}>/&gt;</span>
            </Box>

            {/* Subtitle */}
            <Typography
              className="hero-subtitle"
              sx={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: '#888888',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.8,
                mb: 4,
                textAlign: 'center'
              }}
            >
              Backend developer specialized in Java & Spring Boot ecosystem.
              Passionate about AI, cloud technologies, and building scalable microservices.
            </Typography>

            {/* Buttons */}
            <Box className="hero-buttons">
              <Button
                component={Link}
                to="/projects"
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
                  '&:hover': {
                    background: '#059669',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)',
                  }
                }}
              >
                View My Projects
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderColor: '#2a2a2a',
                  color: '#ededed',
                  '&:hover': {
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                Get In Touch
              </Button>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', mt: 5 }}>
              <IconButton
                href="https://github.com/enesgunumdogdu"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#888888',
                  border: '1px solid #2a2a2a',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ededed',
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/enesgunumdogdu/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#888888',
                  border: '1px solid #2a2a2a',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ededed',
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    transform: 'translateY(-3px)',
                  }
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Container>

        {/* Scroll Indicator */}
        <Box className="scroll-indicator">
          <span>Scroll</span>
          <Box className="scroll-indicator-line" />
        </Box>
      </Box>

      {/* Features Section */}
      <Box className="section">
        <Box className="section-header">
          <Box className="section-label">Expertise</Box>
          <Typography variant="h2" className="section-title">
            <span className="gradient-text-shimmer">What I Do</span>
          </Typography>
          <Typography className="section-subtitle">
            Specializing in backend development, cloud infrastructure, and AI integration
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                className="feature-card"
                sx={{
                  background: '#161616',
                  border: '1px solid #1e1e1e',
                  borderRadius: '24px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: '#06b6d4',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(6, 182, 212, 0.3)',
                    boxShadow: '0 20px 60px rgba(6, 182, 212, 0.1)',
                    '&::before': {
                      transform: 'scaleX(1)',
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    className="feature-icon"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '16px',
                      background: 'rgba(6, 182, 212, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                      color: '#06b6d4'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      mb: 1.5,
                      color: '#ededed'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#888888',
                      lineHeight: 1.8,
                      mb: 2,
                      fontSize: '0.95rem'
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                    {feature.tags.map((tag, tagIndex) => (
                      <Box
                        key={tagIndex}
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '8px',
                          background: 'rgba(6, 182, 212, 0.08)',
                          border: '1px solid rgba(6, 182, 212, 0.15)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: '#22d3ee'
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Stats Section */}
      <Box className="section" sx={{ pt: 0 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 2, md: 3 },
            width: '100%'
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              className="stat-item"
              sx={{
                textAlign: 'center',
                p: { xs: 2.5, md: 3 },
                background: '#161616',
                borderRadius: '20px',
                border: '1px solid #1e1e1e',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(16, 185, 129, 0.2)',
                  transform: 'translateY(-5px)',
                }
              }}
            >
              <Typography
                className="stat-number"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 700,
                  mb: 0.5,
                  color: '#10b981'
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                sx={{
                  color: '#888888',
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  fontWeight: 500
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {/* App Showcase Section */}
      <Box className="section" sx={{ pt: 2 }}>
        <Box
          onClick={() => window.open('https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541', '_blank', 'noopener,noreferrer')}
          sx={{
            position: 'relative',
            background: '#161616',
            border: '1px solid #1e1e1e',
            borderRadius: '28px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-4px)',
              borderColor: 'rgba(16, 185, 129, 0.3)',
              boxShadow: '0 20px 60px rgba(16, 185, 129, 0.08)',
              '& .app-icon': {
                transform: 'scale(1.1) rotate(-3deg)',
              },
              '& .app-cta': {
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                color: 'white',
              }
            }
          }}
        >
          {/* Top gradient bar */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #10b981, #06b6d4, #10b981)',
              backgroundSize: '200% 100%',
              animation: 'gradientSlide 3s linear infinite',
              '@keyframes gradientSlide': {
                '0%': { backgroundPosition: '0% 0%' },
                '100%': { backgroundPosition: '200% 0%' },
              }
            }}
          />

          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', md: 'center' },
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 },
              p: { xs: 3, md: 4 },
            }}
          >
            {/* App Icon */}
            <Box
              className="app-icon"
              component="img"
              src="/logos/cartoon-weather.png"
              alt="Cartoon Weather"
              sx={{
                width: { xs: 80, md: 90 },
                height: { xs: 80, md: 90 },
                minWidth: { xs: 80, md: 90 },
                borderRadius: '22px',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)',
                transition: 'transform 0.4s ease',
                objectFit: 'cover',
              }}
            />

            {/* Content */}
            <Box sx={{ flex: 1 }}>
              {/* Live badge */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    px: 1.25,
                    py: 0.4,
                    borderRadius: '20px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#22c55e',
                      boxShadow: '0 0 8px #22c55e',
                      animation: 'livePulse 2s ease-in-out infinite',
                      '@keyframes livePulse': {
                        '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                        '50%': { opacity: 0.5, transform: 'scale(0.8)' },
                      }
                    }}
                  />
                  <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Now Live
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.75rem', color: '#555555' }}>
                  App Store
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  color: '#ededed',
                  mb: 0.75,
                }}
              >
                Cartoon Weather: Cute Forecast
              </Typography>

              <Typography
                sx={{
                  color: '#888888',
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  lineHeight: 1.7,
                  maxWidth: 600,
                }}
              >
                Say goodbye to boring weather apps! 7 animated character themes with full-screen video wallpapers react to real-time conditions. Track up to 5 locations with widgets, AQI, and more.
              </Typography>

              {/* Tags */}
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mt: 1.5 }}>
                {['Swift', 'iOS', 'SwiftUI', '19 Languages', '5.0 ★'].map((tag, i) => (
                  <Box
                    key={i}
                    sx={{
                      px: 1.25,
                      py: 0.35,
                      borderRadius: '6px',
                      background: i === 4 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.08)',
                      border: `1px solid ${i === 4 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.15)'}`,
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: i === 4 ? '#6ee7b7' : '#10b981',
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* CTA */}
            <Box
              className="app-cta"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1.25,
                borderRadius: '14px',
                border: '1px solid #2a2a2a',
                background: '#1e1e1e',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <Apple sx={{ fontSize: 22 }} />
              <Box>
                <Typography sx={{ fontSize: '0.6rem', color: '#555555', lineHeight: 1 }}>
                  Download on the
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#ededed', lineHeight: 1.3 }}>
                  App Store
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
