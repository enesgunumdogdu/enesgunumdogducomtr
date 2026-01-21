import { Link } from 'react-router-dom'
import { Box, Container, Typography, Button } from '@mui/material'
import { Home, ArrowBack } from '@mui/icons-material'
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
    "The page you're looking for is probably coding somewhere else.",
    "404: Page not found. But hey, you found this cute friend!"
  ]

  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)]

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

          {/* Action Buttons */}
          <Box className="not-found-buttons">
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

            <Button
              onClick={() => window.history.back()}
              variant="outlined"
              startIcon={<ArrowBack />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  borderColor: '#7c3aed',
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  transform: 'translateY(-3px)',
                }
              }}
            >
              Go Back
            </Button>
          </Box>

          {/* Fun Hint */}
          <Typography
            sx={{
              mt: 6,
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.4)',
              textAlign: 'center'
            }}
          >
            Lost? Try one of these:{' '}
            <Link to="/" style={{ color: '#a855f7' }}>Home</Link>
            {' '}/{' '}
            <Link to="/about" style={{ color: '#a855f7' }}>About</Link>
            {' '}/{' '}
            <Link to="/projects" style={{ color: '#a855f7' }}>Projects</Link>
            {' '}/{' '}
            <Link to="/contact" style={{ color: '#a855f7' }}>Contact</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default NotFound
