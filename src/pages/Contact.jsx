import { useState } from 'react'
import { Box, Typography, TextField, Button, Grid } from '@mui/material'
import { Send, Email, GitHub, LinkedIn, CheckCircle, LocationOn } from '@mui/icons-material'
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
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
      borderRadius: '12px',
      color: 'white',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.08)'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(124, 58, 237, 0.3)'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7c3aed',
        borderWidth: '1px'
      },
      '&.Mui-focused': {
        background: 'rgba(124, 58, 237, 0.05)'
      }
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.5)',
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
          <Typography variant="h1" className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </Typography>
          <Typography className="section-subtitle">
            Have a project in mind? Let's build something great together.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  background: 'rgba(17, 17, 17, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '24px',
                  p: { xs: 3, md: 4 }
                }}
              >
                {submitted ? (
                  <Box sx={{ textAlign: 'center', py: 6 }}>
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
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>
                      I'll get back to you as soon as possible.
                    </Typography>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2.5}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          sx={inputStyles}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
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
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          sx={inputStyles}
                        />
                      </Grid>
                      <Grid item xs={12}>
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
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          disabled={isSubmitting}
                          endIcon={!isSubmitting && <Send />}
                          sx={{
                            background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
                            py: 1.5,
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 30px rgba(124, 58, 237, 0.5)'
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
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
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
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.8,
                    mb: 3
                  }}
                >
                  Feel free to reach out through any of these platforms.
                  I'm always open to discussing new projects and opportunities.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
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

                {/* Location */}
                <Box
                  sx={{
                    mt: 'auto',
                    p: 2.5,
                    background: 'rgba(17, 17, 17, 0.5)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'rgba(124, 58, 237, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a855f7',
                      flexShrink: 0
                    }}
                  >
                    <LocationOn sx={{ fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.5)',
                        mb: 0.25
                      }}
                    >
                      Location
                    </Typography>
                    <Typography sx={{ fontWeight: 500, color: 'white' }}>
                      Turkey
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
