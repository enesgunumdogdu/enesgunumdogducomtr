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
    "404: Page not found. But hey, you found this cute friend!",
    "This page went out for milk and never returned.",
    "Oops! This page is playing hide and seek. It's winning.",
    "Plot twist: The page was never here to begin with."
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
      <Container maxWidth="md">
        <Box className="not-found-content">
          <Box className="not-found-animation">
            <RiveComponent />
          </Box>

          <Typography
            variant="h1"
            className="not-found-title"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: '-3px',
              mb: 2,
              color: 'var(--accent)'
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              color: 'var(--text-primary)',
              mb: 2
            }}
          >
            Page Not Found
          </Typography>

          <Typography
            sx={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'var(--text-secondary)',
              maxWidth: 500,
              mx: 'auto',
              lineHeight: 1.8,
              mb: 4,
              textAlign: 'center'
            }}
          >
            {randomMessage}
          </Typography>

          <Button
            component={Link}
            to="/"
            startIcon={<Home />}
            sx={{
              background: 'var(--accent)',
              color: '#FFFFFF',
              px: 3,
              py: 1.25,
              borderRadius: '3px',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              '&:hover': {
                background: 'var(--accent)',
                opacity: 0.9,
              }
            }}
          >
            Back to Home
          </Button>

          <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.5px' }}>
              Or try one of these:
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', justifyContent: 'center' }}>
              {quickLinks.map((link) => (
                <Button
                  key={link.to}
                  component={Link}
                  to={link.to}
                  sx={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    fontFamily: "'JetBrains Mono', monospace",
                    textTransform: 'lowercase',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '2px',
                    border: '1px solid var(--border-light)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: 'var(--border-accent)',
                      color: 'var(--accent)',
                      background: 'var(--accent-glow)',
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
