import { Box, Typography } from '@mui/material'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CartoonWeatherPrivacyPolicy() {
  useDocumentTitle('Cartoon Weather - Privacy Policy')

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Information You Provide',
          items: [
            'Account Information: When you create an account, we collect your email address and display name.',
            'Authentication Data: If you sign in via Google or Apple, we receive basic profile information from these services.'
          ]
        },
        {
          subtitle: '1.2 Automatically Collected Information',
          items: [
            'Location Data: With your permission, we collect your device\'s location to provide accurate weather information. You can disable location access at any time through your device settings.',
            'Device Information: We collect device type, operating system version, and app version for troubleshooting and improvement purposes.',
            'Usage Data: We collect anonymous usage statistics to improve our app experience.'
          ]
        },
        {
          subtitle: '1.3 Purchase Information',
          items: [
            'Subscription and purchase data is processed and stored by Apple through the App Store. We only receive confirmation of your subscription status, not your payment details.'
          ]
        }
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          items: [
            'Provide accurate weather forecasts for your location',
            'Manage your account and preferences',
            'Process and manage your subscriptions',
            'Improve our app and develop new features',
            'Send important updates about the app (with your consent)',
            'Provide customer support'
          ]
        }
      ]
    },
    {
      title: '3. Data Storage and Security',
      content: [
        {
          items: [
            'Your data is stored securely using Firebase services (Google Cloud Platform)',
            'We implement industry-standard security measures to protect your information',
            'Location data is processed in real-time and not permanently stored on our servers',
            'Theme preferences and settings are stored locally on your device'
          ]
        }
      ]
    },
    {
      title: '4. Third-Party Services',
      content: [
        {
          text: 'We use the following third-party services:',
          items: [
            'Firebase (Google): Authentication, analytics, and cloud storage',
            'Apple StoreKit: In-app purchase processing',
            'Weather API: Weather data retrieval (only location coordinates are shared)'
          ],
          note: 'These services have their own privacy policies, and we encourage you to review them.'
        }
      ]
    },
    {
      title: '5. Data Sharing',
      content: [
        {
          text: 'We do not sell, trade, or rent your personal information to third parties. We may share data only:',
          items: [
            'With service providers who assist in app operations',
            'When required by law or legal process',
            'To protect our rights or the safety of users'
          ]
        }
      ]
    },
    {
      title: '6. Your Rights',
      content: [
        {
          text: 'You have the right to:',
          items: [
            'Access your personal data',
            'Correct inaccurate data',
            'Delete your account and associated data',
            'Opt-out of analytics collection',
            'Withdraw consent for location access'
          ],
          note: 'To exercise these rights, contact us at support@enesgunumdogdu.com.tr'
        }
      ]
    },
    {
      title: '7. Children\'s Privacy',
      content: [
        {
          text: 'Our app is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.'
        }
      ]
    },
    {
      title: '8. Data Retention',
      content: [
        {
          items: [
            'Account data is retained until you delete your account',
            'Anonymous analytics data is retained for up to 24 months',
            'Purchase history is managed by Apple'
          ]
        }
      ]
    },
    {
      title: '9. International Data Transfers',
      content: [
        {
          text: 'Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.'
        }
      ]
    },
    {
      title: '10. Changes to This Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or via email.'
        }
      ]
    },
    {
      title: '11. Contact Us',
      content: [
        {
          text: 'If you have questions about this Privacy Policy, please contact us at:',
          items: [
            'Email: support@enesgunumdogdu.com.tr',
            'Website: https://enesgunumdogdu.com.tr/cartoon-weather-privacy-policy'
          ]
        }
      ]
    }
  ]

  return (
    <Box className="page">
      <Box className="section">
        <Box className="section-header">
          <Box className="section-label">Legal</Box>
          <Typography variant="h1" component="h1" className="hero-name hero-name-large">
            <span className="gradient-text-animated">Privacy Policy</span>
          </Typography>
          <Typography className="section-subtitle">
            Cartoon Weather
          </Typography>
        </Box>

        <Box
          sx={{
            background: 'rgba(17, 17, 17, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: { xs: '20px', md: '24px' },
            p: { xs: 3, md: 5 },
            maxWidth: 900,
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
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem',
              mb: 4,
              pb: 3,
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            Last Updated: January 14, 2026
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
              mb: 4,
              fontSize: { xs: '0.95rem', md: '1rem' }
            }}
          >
            Cartoon Weather ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
          </Typography>

          {sections.map((section, sectionIndex) => (
            <Box key={sectionIndex} sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: '#a855f7',
                  mb: 2
                }}
              >
                {section.title}
              </Typography>

              {section.content.map((block, blockIndex) => (
                <Box key={blockIndex} sx={{ mb: 2 }}>
                  {block.subtitle && (
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        mb: 1,
                        mt: 2
                      }}
                    >
                      {block.subtitle}
                    </Typography>
                  )}

                  {block.text && (
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.8,
                        mb: block.items ? 1.5 : 0,
                        fontSize: { xs: '0.9rem', md: '0.95rem' }
                      }}
                    >
                      {block.text}
                    </Typography>
                  )}

                  {block.items && (
                    <Box component="ul" sx={{ m: 0, pl: 3 }}>
                      {block.items.map((item, itemIndex) => (
                        <Box
                          component="li"
                          key={itemIndex}
                          sx={{
                            color: 'rgba(255,255,255,0.75)',
                            lineHeight: 1.8,
                            mb: 0.5,
                            fontSize: { xs: '0.9rem', md: '0.95rem' },
                            '&::marker': {
                              color: '#7c3aed'
                            }
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
                        color: 'rgba(255,255,255,0.6)',
                        fontStyle: 'italic',
                        mt: 1.5,
                        fontSize: { xs: '0.85rem', md: '0.9rem' }
                      }}
                    >
                      {block.note}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          ))}

          <Box
            sx={{
              mt: 5,
              pt: 3,
              borderTop: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}
          >
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.85rem'
              }}
            >
              © 2026 Cartoon Weather. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CartoonWeatherPrivacyPolicy
