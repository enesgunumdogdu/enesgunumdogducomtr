import { Box, Typography, Grid, Chip, Link } from '@mui/material'
import { WorkOutline, School, AutoAwesome, OpenInNew } from '@mui/icons-material'
import useDocumentTitle from '../hooks/useDocumentTitle'

function About() {
  useDocumentTitle('About')

  const skills = [
    'Java', 'Spring Boot', 'Spring Security', 'Spring Cloud',
    'Python', 'TypeScript', 'C#', 'SQL', 'PLSQL',
    'React', 'Vue.js', 'Swift',
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch',
    'Docker', 'GCP', 'RabbitMQ', 'Terraform',
    'Git', 'Swagger', 'Postman'
  ]

  const experiences = [
    {
      icon: <WorkOutline sx={{ fontSize: 24 }} />,
      title: 'Avevrak.com',
      subtitle: 'Software Developer',
      period: 'June 2025 - August 2025',
      description: 'Automated demo document generation pipeline using GCP and Python with 95% improvement in tag consistency. Merged 20+ pull requests into production.',
      tags: ['GCP', 'Python', 'LLM', 'FAISS'],
      link: 'https://avevrak.com'
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 24 }} />,
      title: 'Toucan Code Labs',
      subtitle: 'Software Developer',
      period: 'August 2023 - November 2024',
      description: 'Integrated 10+ microservices for RoboNimbus mobile application. Enhanced UI/UX and resolved microservice-related issues.',
      tags: ['Microservices', 'Mobile', 'API'],
      link: 'https://toucancodelabs.com'
    },
    {
      icon: <WorkOutline sx={{ fontSize: 24 }} />,
      title: 'Bionluk.com',
      subtitle: 'Freelance Software Developer',
      period: 'June 2021 - June 2025',
      description: 'Delivered 25+ custom projects using Java, Python, C#, and WordPress — including OOP solutions and fully customized web applications.',
      tags: ['Freelance', 'Java', 'Python', 'WordPress'],
      link: 'https://bionluk.com/enesgunumdogdu'
    }
  ]

  const education = {
    icon: <School sx={{ fontSize: 24 }} />,
    title: 'Erciyes University',
    subtitle: 'Computer Engineering',
    period: 'September 2021 - April 2025',
    description: 'Developed a Python-based machine learning project under TUBITAK 2209-A; produced paintings in the drawing styles of deceased artists using advanced style transfer techniques.',
    tags: ['Computer Engineering', 'AI/ML', 'TUBITAK']
  }

  return (
    <Box className="page">
      {/* Hero Section */}
      <Box className="section">
        <Box className="section-header">
          <Box className="section-label">About Me</Box>
          <Typography variant="h1" className="section-title">
            I'm <span className="gradient-text">Enes Günümdoğdu</span>
          </Typography>
          <Typography className="section-subtitle">
            Backend Developer passionate about building scalable systems
          </Typography>
        </Box>

        <Box className="about-content">
          <Box className="about-image-wrapper">
            <Box className="about-image-glow" />
            <Box className="about-image-ring" />
            <Box className="about-image">
              👨🏾‍💻
            </Box>
          </Box>

          <Box className="about-text">
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                mb: 2,
                color: 'white'
              }}
            >
              Building <span className="gradient-text">Robust</span> Backend Systems
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.9,
                mb: 2,
                fontSize: { xs: '0.95rem', md: '1.05rem' }
              }}
            >
              I'm a backend developer specialized in Java and the Spring Boot ecosystem.
              With experience in microservices architecture, cloud platforms, and AI integration,
              I build scalable solutions that solve real-world problems.
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.9,
                mb: 2,
                fontSize: { xs: '0.95rem', md: '1.05rem' }
              }}
            >
              My journey includes working with cutting-edge technologies like Spring Cloud,
              RabbitMQ for event-driven systems, and Google Cloud Platform. I have a keen
              interest in AI and have worked on projects integrating LLMs and machine learning.
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.9,
                fontSize: { xs: '0.95rem', md: '1.05rem' }
              }}
            >
              In my spare time, I enjoy developing native iOS applications with Swift and
              creating educational content about Data Structures & Algorithms on my YouTube
              channel with 50K+ views.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Skills Section */}
      <Box className="section" sx={{ pt: 0 }}>
        <Box className="section-header">
          <Box className="section-label">Tech Stack</Box>
          <Typography variant="h2" className="section-title">
            <span className="gradient-text">Technologies I Use</span>
          </Typography>
          <Typography className="section-subtitle">
            Modern tools and frameworks for building production-ready applications
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 1, md: 1.5 },
            justifyContent: 'center',
            maxWidth: 900,
            mx: 'auto'
          }}
        >
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                px: { xs: 1.5, md: 2 },
                py: { xs: 2, md: 2.5 },
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                fontWeight: 500,
                background: 'rgba(124, 58, 237, 0.08)',
                border: '1px solid rgba(124, 58, 237, 0.15)',
                color: 'rgba(255,255,255,0.8)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(124, 58, 237, 0.2)',
                  borderColor: '#7c3aed',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 30px rgba(124, 58, 237, 0.2)'
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Experience Section */}
      <Box className="section" sx={{ pt: 0 }}>
        <Box className="section-header">
          <Box className="section-label">Experience</Box>
          <Typography variant="h2" className="section-title">
            <span className="gradient-text">My Journey</span>
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  background: 'rgba(17, 17, 17, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: { xs: '20px', md: '24px' },
                  p: { xs: 2.5, md: 3 },
                  height: '100%',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  },
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-8px)' },
                    borderColor: 'rgba(124, 58, 237, 0.3)',
                    '&::before': {
                      transform: 'scaleX(1)',
                    }
                  }
                }}
              >
                <Box
                  sx={{
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    borderRadius: '16px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    color: '#a855f7'
                  }}
                >
                  {exp.icon}
                </Box>

                <Link
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#a855f7'
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <OpenInNew sx={{ fontSize: 16, opacity: 0.7 }} />
                </Link>

                <Typography
                  sx={{
                    color: '#a855f7',
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                    fontWeight: 500,
                    mb: 0.5,
                    mt: 0.5
                  }}
                >
                  {exp.subtitle}
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: { xs: '0.75rem', md: '0.8rem' },
                    mb: 1.5
                  }}
                >
                  {exp.period}
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.7,
                    mb: 2,
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                    flex: 1
                  }}
                >
                  {exp.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  {exp.tags.map((tag, tagIndex) => (
                    <Box
                      key={tagIndex}
                      sx={{
                        px: 1.25,
                        py: 0.4,
                        borderRadius: '8px',
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.15)',
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        fontWeight: 500,
                        color: '#c4b5fd'
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Education Section */}
      <Box className="section" sx={{ pt: 0 }}>
        <Box className="section-header">
          <Box className="section-label">Education</Box>
          <Typography variant="h2" className="section-title">
            <span className="gradient-text">Academic Background</span>
          </Typography>
        </Box>

        <Box
          sx={{
            background: 'rgba(17, 17, 17, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: { xs: '20px', md: '24px' },
            p: { xs: 3, md: 4 },
            maxWidth: 700,
            mx: 'auto',
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
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 2, md: 3 }, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box
              sx={{
                width: { xs: 56, md: 64 },
                height: { xs: 56, md: 64 },
                borderRadius: '16px',
                background: 'rgba(124, 58, 237, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#a855f7'
              }}
            >
              {education.icon}
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  mb: 0.5,
                  color: 'white',
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                {education.title}
              </Typography>

              <Typography
                sx={{
                  color: '#a855f7',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 500,
                  mb: 0.5
                }}
              >
                {education.subtitle}
              </Typography>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: { xs: '0.8rem', md: '0.85rem' },
                  mb: 2
                }}
              >
                {education.period}
              </Typography>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                  mb: 2,
                  fontSize: { xs: '0.9rem', md: '1rem' }
                }}
              >
                {education.description}
              </Typography>

              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                {education.tags.map((tag, tagIndex) => (
                  <Box
                    key={tagIndex}
                    sx={{
                      px: 1.25,
                      py: 0.4,
                      borderRadius: '8px',
                      background: 'rgba(124, 58, 237, 0.1)',
                      border: '1px solid rgba(124, 58, 237, 0.15)',
                      fontSize: { xs: '0.7rem', md: '0.75rem' },
                      fontWeight: 500,
                      color: '#c4b5fd'
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About
