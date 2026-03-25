import { useState, useRef } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Send, Email, GitHub, LinkedIn, CheckCircle, East } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import ScrollReveal from '../components/animations/ScrollReveal'
import useDocumentTitle from '../hooks/useDocumentTitle'

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
    { icon: <Email sx={{ fontSize: 18 }} />, label: 'enesgunumdogdu0@gmail.com', href: 'mailto:enesgunumdogdu0@gmail.com' },
    { icon: <GitHub sx={{ fontSize: 18 }} />, label: 'GitHub', href: 'https://github.com/enesgunumdogdu' },
    { icon: <LinkedIn sx={{ fontSize: 18 }} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/enesgunumdogdu/' }
  ]

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '10px',
      color: 'var(--text-primary)',
      fontSize: '0.9rem',
      '& fieldset': { borderColor: 'var(--border-light)', transition: 'all 0.3s ease' },
      '&:hover fieldset': { borderColor: 'var(--text-dim)' },
      '&.Mui-focused fieldset': { borderColor: 'var(--accent)', borderWidth: '1px' },
      '&.Mui-focused': { background: 'var(--accent-glow)' },
    },
    '& .MuiInputLabel-root': {
      color: 'var(--text-dim)',
      fontSize: '0.85rem',
      '&.Mui-focused': { color: 'var(--accent)' }
    }
  }

  return (
    <Box className="page">
      <Box className="section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box className="section-header">
            <Box className="section-label">Contact</Box>
            <Typography className="section-title" sx={{ maxWidth: 400 }}>
              Let's build something together.
            </Typography>
            <Typography className="section-subtitle">
              Have a project in mind? Send me a message.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5 }}>
            {/* Form */}
            <ScrollReveal style={{ flex: 1.4 }}>
              <Box
                sx={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
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
                      <CheckCircle sx={{ fontSize: 32, color: '#09090b' }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        mb: 0.5,
                        color: 'var(--text-primary)',
                      }}
                    >
                      Message sent!
                    </Typography>
                    <Typography sx={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
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
                        <ReCAPTCHA ref={recaptchaRef} sitekey="6Lfnw0osAAAAAJkVJJkdS9R2oFWznsihBAtf7xWf" onChange={setCaptchaValue} theme="dark" />
                      </Box>
                      <Button
                        type="submit"
                        fullWidth
                        disabled={isSubmitting || !captchaValue}
                        endIcon={!isSubmitting && <East sx={{ fontSize: 16 }} />}
                        sx={{
                          background: 'var(--accent)',
                          color: '#09090b',
                          py: 1.5,
                          borderRadius: '10px',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          '&:hover': { background: 'var(--accent)', opacity: 0.9 },
                          '&:disabled': { background: 'var(--accent)', opacity: 0.5, color: '#09090b' },
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
            <ScrollReveal delay={0.2} style={{ flex: 1 }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    mb: 1,
                    color: 'var(--text-primary)',
                  }}
                >
                  Other ways to connect
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: '0.85rem',
                  }}
                >
                  Feel free to reach out through any of these platforms.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {socialLinks.map((social, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: '10px',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.03)',
                          color: 'var(--text-primary)',
                          transform: 'translateX(4px)',
                          '& .social-icon': { color: 'var(--accent)' },
                        }
                      }}
                    >
                      <Box
                        className="social-icon"
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: '8px',
                          border: '1px solid var(--border-light)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-dim)',
                          transition: 'color 0.3s ease',
                          flexShrink: 0,
                        }}
                      >
                        {social.icon}
                      </Box>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                        {social.label}
                      </Typography>
                    </Box>
                  ))}
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
