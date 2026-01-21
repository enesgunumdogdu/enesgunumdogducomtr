import { Link } from 'react-router-dom'
import { Box, Container, Typography, Button } from '@mui/material'
import { Home } from '@mui/icons-material'
import { useRive } from '@rive-app/react-canvas'
import useDocumentTitle from '../hooks/useDocumentTitle'

function NotFound() {
  useDocumentTitle('404 - Page Not Found')

  const { RiveComponent } = useRive({
    src: 'https://public.rive.app/community/runtime-files/8546-16367-404-error-with-a-cute-animal.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  })

  const funnyMessages = [
    "Looks like you've wandered into the void...",
    "This page took a coffee break and never came back.",
    "Houston, we have a problem. This page doesn't exist.",
    "404: Page not found. But hey, you found this cute friend!"
  ]

  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)]

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <Box className="page not-found-page">
      <Box className="hero-bg">
        <Box className="orb orb-1" />
        <Box className="orb orb-2" />
        <Box className="orb orb-3" />
      </Box>

      <Container maxWidth="md">
        <Box className="not-found-content">
          {/* Rive Animation */}
          <Box className="not-found-animation">
            <RiveComponent />
          </Box>

          {/* 404 Title */}
          <Typography
            variant="h1"
            className="not-found-title"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: '-3px',
              mb: 2
            }}
          >
            <span className="gradient-text-animated">404</span>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              color: 'white',
              mb: 2
            }}
          >
            Page Not Found
          </Typography>

          {/* Funny Message */}
          <Typography
            sx={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 500,
              mx: 'auto',
              lineHeight: 1.8,
              mb: 4,
              textAlign: 'center'
            }}
          >
            {randomMessage}
          </Typography>

          {/* Action Button */}
          <Button
            component={Link}
            to="/"
            variant="contained"
            startIcon={<Home />}
            sx={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 30px rgba(124, 58, 237, 0.5)',
              }
            }}
          >
            Back to Home
          </Button>

          {/* Quick Links */}
          <Box
            sx={{
              mt: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5
            }}
          >
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.5)'
              }}
            >
              Lost? Try one of these:
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              {quickLinks.map((link) => (
                <Button
                  key={link.to}
                  component={Link}
                  to={link.to}
                  variant="text"
                  sx={{
                    color: '#a855f7',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    px: 2,
                    py: 0.75,
                    borderRadius: '8px',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                      borderColor: 'rgba(168, 85, 247, 0.4)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFound
