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
        flexWrap: 'wrap',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
        }}
      >
        Designed with
      </Typography>
      <Box
        component="span"
        aria-label="love"
        role="img"
        sx={{
          fontSize: '0.85rem',
          lineHeight: 1,
          color: '#7B3FA8',
          display: 'inline-block',
          transform: 'translateY(-1px)',
          filter: 'hue-rotate(0deg)',
        }}
      >
        {/* Purple heart SVG so color renders consistently across platforms */}
        <Box
          component="svg"
          viewBox="0 0 24 24"
          sx={{ width: 14, height: 14, display: 'block', fill: '#7B3FA8' }}
        >
          <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12c-2.5 4.5-9.5 9-9.5 9z" />
        </Box>
      </Box>
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
        }}
      >
        by
      </Typography>
      <Link
        href="https://enesgunumdogdu.com.tr"
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={{
          fontFamily: 'var(--font-display)',
          fontVariationSettings: "'opsz' 24, 'wght' 500",
          fontStyle: 'italic',
          fontSize: '0.88rem',
          color: 'var(--text-primary)',
          transition: 'color 0.3s var(--ease-draft)',
          '&:hover': {
            color: 'var(--accent)',
          },
        }}
      >
        3nes
      </Link>
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.08em',
        }}
      >
        · Antalya, {new Date().getFullYear()}
      </Typography>
    </Box>
  )
}

export default Footer
