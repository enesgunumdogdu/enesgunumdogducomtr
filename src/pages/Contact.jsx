import { useState, useRef } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { CheckCircle, East } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import ScrollReveal from '../components/animations/ScrollReveal'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { ease } from '../motion/tokens'

function Contact() {
  useDocumentTitle('Contact')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [captchaValue, setCaptchaValue] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) return
    if (!captchaValue) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'g-recaptcha-response': captchaValue,
          ...formData
        }).toString()
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setCaptchaValue(null)
        recaptchaRef.current?.reset()
        setTimeout(() => setSubmitted(false), 4000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
    setIsSubmitting(false)
  }

  const socialLinks = [
    { label: 'Email', href: 'mailto:enesgunumdogdu0@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/enesgunumdogdu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/enesgunumdogdu/' },
    { label: 'YouTube', href: 'https://youtube.com/@enesgunumdogdu' },
  ]

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      background: 'var(--bg-secondary)',
      borderRadius: '2px',
      color: 'var(--text-primary)',
      fontSize: '0.95rem',
      fontFamily: 'var(--font-body)',
      '& fieldset': { borderColor: 'var(--border-light)', transition: 'all 0.3s var(--ease-draft)' },
      '&:hover fieldset': { borderColor: 'var(--text-dim)' },
      '&.Mui-focused fieldset': { borderColor: 'var(--accent)', borderWidth: '1px' },
      '&.Mui-focused': { background: 'var(--accent-glow)' },
    },
    '& .MuiInputLabel-root': {
      color: 'var(--text-muted)',
      fontSize: '0.82rem',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '0.05em',
      '&.Mui-focused': { color: 'var(--accent)' }
    }
  }

  return (
    <Box className="page">
      <Box className="section">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: ease.ink }}
        >
          <Box className="section-header">
            <Box className="section-label">Say Hello</Box>
            <Typography
              className="section-title"
              sx={{ maxWidth: 640 }}
            >
              Let's build something<br />
              <Box component="em" sx={{ fontStyle: 'italic', color: 'var(--accent)' }}>worth building.</Box>
            </Typography>
            <Typography className="section-subtitle">
              I read every message. No auto-responders, no forms that go to a void.
              If you write, I'll write back.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 960, mx: 'auto' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5 }}>
            {/* Form */}
            <ScrollReveal style={{ flex: 1.4 }} preset="clipReveal">
              <Box
                sx={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  p: { xs: 3, md: 4 },
                }}
              >
                {submitted ? (
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 32, color: '#FFFFFF' }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-display)',
                        fontVariationSettings: "'opsz' 48, 'wght' 400",
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        mb: 0.75,
                        color: 'var(--text-primary)',
                      }}
                    >
                      Message sent.
                    </Typography>
                    <Typography sx={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>
                      I'll get back to you soon.
                    </Typography>
                  </Box>
                ) : (
                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                      <label>
                        Don't fill this out if you're human:
                        <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                        <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required sx={inputStyles} />
                        <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required sx={inputStyles} />
                      </Box>
                      <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} required sx={inputStyles} />
                      <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} required multiline rows={5} sx={inputStyles} />
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ReCAPTCHA ref={recaptchaRef} sitekey="6Lfnw0osAAAAAJkVJJkdS9R2oFWznsihBAtf7xWf" onChange={setCaptchaValue} theme="light" />
                      </Box>
                      <Button
                        type="submit"
                        fullWidth
                        disabled={isSubmitting || !captchaValue}
                        endIcon={!isSubmitting && <East sx={{ fontSize: 14 }} />}
                        sx={{
                          background: 'var(--text-primary)',
                          color: 'var(--bg-primary)',
                          py: 1.5,
                          borderRadius: '2px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          '&:hover': { background: 'var(--accent)', opacity: 1 },
                          '&:disabled': { background: 'var(--text-primary)', opacity: 0.4, color: 'var(--bg-primary)' },
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Box>
                  </form>
                )}
              </Box>
            </ScrollReveal>

            {/* Socials */}
            <ScrollReveal delay={0.15} style={{ flex: 1 }} preset="clipReveal">
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 36, 'wght' 400",
                    fontSize: '1.35rem',
                    mb: 1,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.015em',
                  }}
                >
                  Find me <Box component="em" sx={{ fontStyle: 'italic' }}>elsewhere.</Box>
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    mb: 3,
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Best way to reach me: email. I usually reply within a day,
                  faster if the project sounds interesting.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                  {socialLinks.map((social, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        py: 1,
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'all 0.3s var(--ease-draft)',
                        borderBottom: '1px solid transparent',
                        alignSelf: 'flex-start',
                        '&:hover': {
                          color: 'var(--accent)',
                          borderBottomColor: 'var(--accent)',
                        }
                      }}
                    >
                      {social.label}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid var(--border-subtle)' }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--text-dim)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      mb: 1,
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-display)',
                      fontVariationSettings: "'opsz' 32, 'wght' 400",
                      fontSize: '1.1rem',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    Antalya, Turkey
                  </Typography>
                  <Typography sx={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.72rem', mt: 0.5, letterSpacing: '0.05em' }}>
                    UTC+3 · Turkey Time
                  </Typography>
                </Box>
              </Box>
            </ScrollReveal>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
