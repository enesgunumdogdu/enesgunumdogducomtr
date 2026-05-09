import { Box, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'
import DraftedLine from './animations/DraftedLine'
import { ease } from '../motion/tokens'

function LegalPage({ kind, appName, effectiveDate, lastUpdated, intro, sections }) {
  const isPrivacy = kind.toLowerCase().includes('privacy')
  const headWord = kind.split(' ')[0]
  const tailWord = kind.split(' ').slice(1).join(' ')

  return (
    <Box className="page">
      <Box className="section">
        {/* ============ HEADER ============ */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: ease.ink }}
        >
          <Box className="section-header">
            <Box className="section-label">§ Legal · {appName}</Box>
            <Typography className="section-title">
              {headWord}{' '}
              <Box
                component="em"
                sx={{
                  fontStyle: 'italic',
                  fontVariationSettings: "'opsz' 72, 'wght' 500",
                  color: 'var(--accent)',
                }}
              >
                {tailWord.toLowerCase()}.
              </Box>
            </Typography>
            <Typography className="section-subtitle">
              {isPrivacy
                ? 'How we handle your information.'
                : 'The agreement between you and the operator.'}
            </Typography>
          </Box>
        </motion.div>

        {/* ============ BODY ============ */}
        <Box sx={{ maxWidth: 760, mx: 'auto' }}>
          {/* Date row — looks like a ledger entry */}
          <ScrollReveal preset="draftedLine">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                gap: 1,
                pb: 2,
                mb: 4,
                borderBottom: '1px solid var(--border-light)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {effectiveDate && (
                <Box sx={{ color: 'var(--text-muted)' }}>
                  Effective <span style={{ color: 'var(--text-secondary)' }}>{effectiveDate}</span>
                </Box>
              )}
              <Box sx={{ color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                Last updated <span style={{ color: 'var(--text-secondary)' }}>{lastUpdated}</span>
              </Box>
            </Box>
          </ScrollReveal>

          {/* Intro */}
          <ScrollReveal preset="inkBleed">
            <Typography
              sx={{
                fontFamily: 'var(--font-display)',
                fontVariationSettings: "'opsz' 24, 'wght' 400",
                color: 'var(--text-primary)',
                lineHeight: 1.6,
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                letterSpacing: '-0.01em',
                mb: 5,
              }}
            >
              {intro}
            </Typography>
          </ScrollReveal>

          {/* Sections */}
          {sections.map((section, sectionIndex) => (
            <ScrollReveal key={sectionIndex} preset="clipReveal" delay={Math.min(sectionIndex * 0.02, 0.2)}>
              <Box sx={{ mb: 5 }}>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontVariationSettings: "'opsz' 36, 'wght' 400",
                    fontSize: { xs: '1.4rem', md: '1.65rem' },
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.15,
                    mb: 2.5,
                  }}
                >
                  {section.title}
                </Typography>

                {section.content.map((block, blockIndex) => (
                  <Box key={blockIndex} sx={{ mb: 2 }}>
                    {block.subtitle && (
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-display)',
                          fontVariationSettings: "'opsz' 24, 'wght' 500",
                          fontStyle: 'italic',
                          color: 'var(--accent)',
                          fontSize: { xs: '1rem', md: '1.05rem' },
                          letterSpacing: '-0.01em',
                          mt: 2.5,
                          mb: 1,
                        }}
                      >
                        {block.subtitle}
                      </Typography>
                    )}

                    {block.text && (
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-body)',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.75,
                          mb: block.items ? 1.25 : 0,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                        }}
                      >
                        {block.text}
                      </Typography>
                    )}

                    {block.items && (
                      <Box
                        component="ul"
                        sx={{
                          m: 0,
                          pl: 0,
                          listStyle: 'none',
                        }}
                      >
                        {block.items.map((item, itemIndex) => (
                          <Box
                            component="li"
                            key={itemIndex}
                            sx={{
                              fontFamily: 'var(--font-body)',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.75,
                              mb: 0.75,
                              fontSize: { xs: '0.95rem', md: '1rem' },
                              pl: '1.25rem',
                              position: 'relative',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '0.7em',
                                width: '0.5rem',
                                height: '1px',
                                background: 'var(--accent)',
                              },
                            }}
                          >
                            {item}
                          </Box>
                        ))}
                      </Box>
                    )}

                    {block.note && (
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-body)',
                          color: 'var(--text-muted)',
                          fontStyle: 'italic',
                          mt: 1.5,
                          fontSize: { xs: '0.88rem', md: '0.92rem' },
                          lineHeight: 1.7,
                          pl: 2,
                          borderLeft: '2px solid var(--border-light)',
                        }}
                      >
                        {block.note === 'contact-link' ? (
                          <>
                            To exercise these rights or for any questions, please visit our{' '}
                            <Link
                              component={RouterLink}
                              to="/contact"
                              sx={{
                                color: 'var(--accent)',
                                fontStyle: 'italic',
                                textDecoration: 'none',
                                borderBottom: '1px solid var(--border-accent)',
                                transition: 'border-color 0.3s var(--ease-draft)',
                                '&:hover': { borderColor: 'var(--accent)' },
                              }}
                            >
                              contact page
                            </Link>
                            .
                          </>
                        ) : (
                          block.note
                        )}
                      </Typography>
                    )}

                    {block.contactLink && (
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-body)',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.75,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                        }}
                      >
                        {isPrivacy
                          ? 'For privacy questions or to exercise your rights, please visit our '
                          : 'For questions about these Terms, please visit our '}
                        <Link
                          component={RouterLink}
                          to="/contact"
                          sx={{
                            color: 'var(--accent)',
                            fontStyle: 'italic',
                            fontFamily: 'var(--font-display)',
                            fontVariationSettings: "'wght' 500",
                            textDecoration: 'none',
                            borderBottom: '1px solid var(--border-accent)',
                            transition: 'border-color 0.3s var(--ease-draft)',
                            '&:hover': { borderColor: 'var(--accent)' },
                          }}
                        >
                          contact page
                        </Link>
                        .
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </ScrollReveal>
          ))}

          {/* Footer signature */}
          <DraftedLine color="var(--border-light)" />
          <Box
            sx={{
              mt: 3,
              pt: 1,
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 1,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <span>© {new Date().getFullYear()} Enes Günümdoğdu</span>
            <span>{appName}</span>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LegalPage
