import { useState, useRef } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Send, Email, GitHub, LinkedIn, CheckCircle } from '@mui/icons-material'
import ReCAPTCHA from 'react-google-recaptcha'
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      return
    }

    // Validate reCAPTCHA
    if (!captchaValue) {
      return
    }

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
    {
      icon: <Email sx={{ fontSize: 22 }} />,
      label: 'Email',
      href: 'mailto:enesgunumdogdu0@gmail.com',
      color: '#ea4335'
    },
    {
      icon: <GitHub sx={{ fontSize: 22 }} />,
      label: 'GitHub',
      href: 'https://github.com/enesgunumdogdu',
      color: '#ffffff'
    },
    {
      icon: <LinkedIn sx={{ fontSize: 22 }} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/enesgunumdogdu/',
      color: '#0077b5'
    }
  ]

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '14px',
      color: 'white',
      fontSize: { xs: '0.95rem', md: '1rem' },
      transition: 'all 0.3s ease',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(124, 58, 237, 0.4)'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7c3aed',
        borderWidth: '2px',
        boxShadow: '0 0 20px rgba(124, 58, 237, 0.15)'
      },
      '&.Mui-focused': {
        background: 'rgba(124, 58, 237, 0.08)'
      }
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: { xs: '0.9rem', md: '1rem' },
      '&.Mui-focused': {
        color: '#a855f7'
      }
    }
  }

  return (
    <Box className="page">
      <Box className="section">
        <Box className="section-header">
          <Box className="section-label">Contact</Box>
          <Typography variant="h1" component="h1" className="hero-name hero-name--large">
            <span className="hero-name-first gradient-text-animated">Get In</span>
            <span className="hero-name-surname gradient-text-animated">Touch</span>
          </Typography>
          <Typography className="section-subtitle">
            Have a project in mind? Let's build something great together.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Contact Form */}
            <Box sx={{ flex: { xs: '1', md: '1.4' } }}>
              <Box
                sx={{
                  background: 'rgba(17, 17, 17, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 4 },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
                  }
                }}
              >
                {/* Decorative glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none'
                  }}
                />
                {submitted ? (
                  <Box sx={{ textAlign: 'center', py: 6, position: 'relative' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      <CheckCircle sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        mb: 1,
                        color: 'white'
                      }}
                    >
                      Message Sent!
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      I'll get back to you as soon as possible.
                    </Typography>
                  </Box>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Honeypot field - hidden by CSS, bots will fill it */}
                    <p style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                      <label>
                        Don't fill this out if you're human:
                        <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        mb: 3,
                        color: 'white',
                        fontSize: { xs: '1.1rem', md: '1.25rem' }
                      }}
                    >
                      Send Me a Message
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2.5 }}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          sx={inputStyles}
                        />
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          sx={inputStyles}
                        />
                      </Box>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        sx={inputStyles}
                      />
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={5}
                        sx={inputStyles}
                      />
                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                          onChange={setCaptchaValue}
                          theme="dark"
                        />
                      </Box>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isSubmitting || !captchaValue}
                        endIcon={!isSubmitting && <Send />}
                        sx={{
                          background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
                          py: { xs: 1.5, md: 1.75 },
                          borderRadius: '14px',
                          fontSize: { xs: '0.95rem', md: '1.05rem' },
                          fontWeight: 600,
                          textTransform: 'none',
                          boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: '0 12px 35px rgba(124, 58, 237, 0.5)'
                          },
                          '&:active': {
                            transform: 'translateY(-1px)'
                          },
                          '&:disabled': {
                            background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
                            opacity: 0.7,
                            color: 'white'
                          }
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Box>
                  </form>
                )}
              </Box>
            </Box>

            {/* Contact Info */}
            <Box sx={{ flex: '1' }}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    mb: 2,
                    color: 'white'
                  }}
                >
                  Other Ways to Connect
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.8,
                    mb: 3
                  }}
                >
                  Feel free to reach out through any of these platforms.
                  I'm always open to discussing new projects and opportunities.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
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
                        gap: 2,
                        p: 2,
                        background: 'rgba(17, 17, 17, 0.7)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '14px',
                        color: 'rgba(255,255,255,0.8)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'rgba(124, 58, 237, 0.3)',
                          transform: 'translateX(8px)',
                          background: 'rgba(124, 58, 237, 0.1)',
                          '& .social-icon': {
                            color: social.color
                          }
                        }
                      }}
                    >
                      <Box
                        className="social-icon"
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '12px',
                          background: 'rgba(124, 58, 237, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'rgba(255,255,255,0.7)',
                          transition: 'color 0.3s ease',
                          flexShrink: 0
                        }}
                      >
                        {social.icon}
                      </Box>
                      <Typography sx={{ fontWeight: 500 }}>
                        {social.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
