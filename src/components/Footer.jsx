import { Box, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0.75,
      }}
    >
      <Typography
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          letterSpacing: '1px',
        }}
      >
        &copy; {new Date().getFullYear()}
      </Typography>
      <Link
        href="https://enesgunumdogdu.com.tr"
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500,
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          transition: 'color 0.3s ease',
          letterSpacing: '0.5px',
          '&:hover': {
            color: 'var(--accent)',
          },
        }}
      >
        3nes
      </Link>
    </Box>
  )
}

export default Footer
