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
              fontFamily: 'var(--font-display)',
              fontVariationSettings: "'opsz' 144, 'wght' 300, 'SOFT' 40",
              letterSpacing: '-0.04em',
              mb: 2,
              color: 'var(--accent)'
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: 'var(--font-display)',
              fontVariationSettings: "'opsz' 48, 'wght' 400",
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              mb: 2,
              letterSpacing: '-0.02em',
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
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
            }}
          >
            {randomMessage}
          </Typography>

          <Button
            component={Link}
            to="/"
            startIcon={<Home />}
            sx={{
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              px: 3,
              py: 1.25,
              borderRadius: '2px',
              fontSize: '0.78rem',
              fontWeight: 500,
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              '&:hover': {
                background: 'var(--accent)',
                opacity: 1,
              }
            }}
          >
            Back to Home
          </Button>

          <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
            <Typography sx={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'lowercase',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '2px',
                    border: '1px solid var(--border-light)',
                    letterSpacing: '0.05em',
                    transition: 'all 0.2s var(--ease-draft)',
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
