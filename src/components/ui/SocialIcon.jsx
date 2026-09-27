import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import YouTube from '@mui/icons-material/YouTube'
import MailOutline from '@mui/icons-material/MailOutline'

// Icon for a site.js social/contact `id` ('github' | 'linkedin' | 'youtube' | 'email').
// Decorative: always pair with a visible label or an aria-label on the link.
const ICONS = { github: GitHub, linkedin: LinkedIn, youtube: YouTube, email: MailOutline }

function SocialIcon({ id, ...rest }) {
  const Icon = ICONS[id]
  if (!Icon) return null
  return <Icon aria-hidden="true" focusable="false" fontSize="inherit" {...rest} />
}

export default SocialIcon
