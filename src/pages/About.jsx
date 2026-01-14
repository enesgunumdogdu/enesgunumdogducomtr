import { Box, Typography, Grid, Chip } from '@mui/material'
import { WorkOutline, School, AutoAwesome } from '@mui/icons-material'
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
      tags: ['GCP', 'Python', 'LLM', 'FAISS']
    },
    {
      icon: <AutoAwesome sx={{ fontSize: 24 }} />,
      title: 'Toucan Code Labs',
      subtitle: 'Software Developer',
      period: 'August 2023 - November 2024',
      description: 'Integrated 10+ microservices for RoboNimbus mobile application. Enhanced UI/UX and resolved microservice-related issues.',
      tags: ['Microservices', 'Mobile', 'API']
    },
    {
      icon: <WorkOutline sx={{ fontSize: 24 }} />,
      title: 'Bionluk.com',
      subtitle: 'Freelance Software Developer',
      period: 'June 2021 - June 2025',
      description: 'Delivered 25+ custom projects using Java, Python, C#, and WordPress — including OOP solutions and fully customized web applications.',
      tags: ['Freelance', 'Java', 'Python', 'WordPress']
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
            I'm <span className="gradient-text">Enes Gunumdogdu</span>
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
              👨‍💻
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
                fontSize: '1.05rem'
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
                fontSize: '1.05rem'
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
                fontSize: '1.05rem'
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
            gap: 1.5,
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
                px: 2,
                py: 2.5,
                fontSize: '0.95rem',
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

        <Grid container spacing={3}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  background: 'rgba(17, 17, 17, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '24px',
                  p: 3,
                  height: '100%',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'rgba(124, 58, 237, 0.3)',
                    '&::before': {
                      transform: 'scaleX(1)',
                    }
                  }
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '16px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                    color: '#a855f7'
                  }}
                >
                  {exp.icon}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    mb: 0.5,
                    color: 'white'
                  }}
                >
                  {exp.title}
                </Typography>

                <Typography
                  sx={{
                    color: '#a855f7',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    mb: 0.5
                  }}
                >
                  {exp.subtitle}
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '0.8rem',
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
                    fontSize: '0.9rem'
                  }}
                >
                  {exp.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                  {exp.tags.map((tag, tagIndex) => (
                    <Box
                      key={tagIndex}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '8px',
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1px solid rgba(124, 58, 237, 0.15)',
                        fontSize: '0.75rem',
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
            borderRadius: '24px',
            p: 4,
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
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
            <Box
              sx={{
                width: 64,
                height: 64,
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

            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  mb: 0.5,
                  color: 'white'
                }}
              >
                {education.title}
              </Typography>

              <Typography
                sx={{
                  color: '#a855f7',
                  fontSize: '1rem',
                  fontWeight: 500,
                  mb: 0.5
                }}
              >
                {education.subtitle}
              </Typography>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.85rem',
                  mb: 2
                }}
              >
                {education.period}
              </Typography>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                  mb: 2
                }}
              >
                {education.description}
              </Typography>

              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                {education.tags.map((tag, tagIndex) => (
                  <Box
                    key={tagIndex}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '8px',
                      background: 'rgba(124, 58, 237, 0.1)',
                      border: '1px solid rgba(124, 58, 237, 0.15)',
                      fontSize: '0.75rem',
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
