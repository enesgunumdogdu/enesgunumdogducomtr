import { Box, Typography, Link } from '@mui/material'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CartoonWeatherTermsOfUse() {
  useDocumentTitle('Cartoon Weather - Terms of Use')

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        {
          text: 'By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.'
        }
      ]
    },
    {
      title: '2. Description of Service',
      content: [
        {
          text: 'Cartoon Weather is an application that provides weather forecasts with unique animated themes. The App offers both free and premium features through subscription plans.'
        }
      ]
    },
    {
      title: '3. User Accounts',
      content: [
        {
          subtitle: '3.1 Account Creation',
          text: 'You may use the App as a guest or create an account. Account creation requires a valid email address or authentication through Google/Apple. Guest users have limited features, including saving only one location. Creating an account unlocks additional features such as saving up to 5 locations.'
        },
        {
          subtitle: '3.2 Account Responsibility',
          text: 'You are responsible for maintaining the confidentiality of your account and for all activities under your account.'
        },
        {
          subtitle: '3.3 Account Termination',
          text: 'We reserve the right to suspend or terminate accounts that violate these Terms.'
        }
      ]
    },
    {
      title: '4. Subscriptions and Purchases',
      content: [
        {
          subtitle: '4.1 Subscription Plans',
          items: [
            'Single Plan: Access to 1 premium theme',
            'Pro Plan: Access to 3 premium themes',
            'Premium Plan: Access to all premium themes'
          ]
        },
        {
          subtitle: '4.2 Billing',
          items: [
            'Subscriptions are billed monthly through your Apple ID account',
            'Lifetime purchases are one-time payments',
            'Prices are displayed in your local currency'
          ]
        },
        {
          subtitle: '4.3 Cancellation',
          items: [
            'You may cancel your subscription at any time through your Apple ID settings',
            'Cancellation takes effect at the end of the current billing period',
            'No refunds for partial subscription periods'
          ]
        },
        {
          subtitle: '4.4 Free Trial',
          items: [
            'If offered, free trials automatically convert to paid subscriptions',
            'Cancel before the trial ends to avoid charges'
          ]
        }
      ]
    },
    {
      title: '5. Intellectual Property',
      content: [
        {
          subtitle: '5.1 App Content',
          text: 'All content, including but not limited to themes, animations, graphics, and code, is owned by Cartoon Weather and protected by intellectual property laws.'
        },
        {
          subtitle: '5.2 User License',
          text: 'We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.'
        },
        {
          subtitle: '5.3 Restrictions',
          text: 'You may not:',
          items: [
            'Copy, modify, or distribute the App or its content',
            'Reverse engineer or decompile the App',
            'Use the App for commercial purposes without permission',
            'Remove any copyright or proprietary notices'
          ]
        }
      ]
    },
    {
      title: '6. Weather Data Disclaimer',
      content: [
        {
          subtitle: '6.1 Accuracy',
          text: 'Weather forecasts are provided for informational purposes only. We do not guarantee the accuracy, completeness, or reliability of weather data.'
        },
        {
          subtitle: '6.2 No Liability',
          text: 'We are not liable for any decisions or actions taken based on weather information provided by the App.'
        }
      ]
    },
    {
      title: '7. Privacy',
      content: [
        {
          text: 'Your use of the App is also governed by our Privacy Policy, available at https://enesgunumdogdu.com.tr/cartoon-weather-privacy-policy'
        }
      ]
    },
    {
      title: '8. Third-Party Services',
      content: [
        {
          text: 'The App uses third-party services including Firebase (Google), RevenueCat, and weather data providers. Your use of the App is subject to these providers\' terms of service.'
        }
      ]
    },
    {
      title: '9. Disclaimers',
      content: [
        {
          subtitle: '8.1 "As Is" Service',
          text: 'The App is provided "as is" without warranties of any kind, either express or implied.'
        },
        {
          subtitle: '8.2 Service Availability',
          text: 'We do not guarantee uninterrupted or error-free service. The App may be temporarily unavailable for maintenance or updates.'
        }
      ]
    },
    {
      title: '10. Limitation of Liability',
      content: [
        {
          text: 'To the maximum extent permitted by law, Cartoon Weather shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.'
        }
      ]
    },
    {
      title: '11. Indemnification',
      content: [
        {
          text: 'You agree to indemnify and hold harmless Cartoon Weather from any claims, damages, or expenses arising from your violation of these Terms.'
        }
      ]
    },
    {
      title: '12. Changes to Terms',
      content: [
        {
          text: 'We may modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the modified Terms.'
        }
      ]
    },
    {
      title: '13. Governing Law',
      content: [
        {
          text: 'These Terms are governed by the laws of Turkey, without regard to conflict of law principles.'
        }
      ]
    },
    {
      title: '14. Contact',
      content: [
        {
          text: 'For questions about these Terms:',
          links: [
            { label: 'Contact Page', url: '/contact' }
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
            <span className="gradient-text-animated">Terms of Use</span>
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
            Last Updated: January 23, 2026
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
              mb: 4,
              fontSize: { xs: '0.95rem', md: '1rem' }
            }}
          >
            Please read these Terms of Use ("Terms") carefully before using Cartoon Weather ("the App").
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

                  {block.links && (
                    <Box component="ul" sx={{ m: 0, pl: 3 }}>
                      {block.links.map((link, linkIndex) => (
                        <Box
                          component="li"
                          key={linkIndex}
                          sx={{
                            lineHeight: 1.8,
                            mb: 0.5,
                            fontSize: { xs: '0.9rem', md: '0.95rem' },
                            '&::marker': {
                              color: '#7c3aed'
                            }
                          }}
                        >
                          <Link
                            href={link.url}
                            sx={{
                              color: '#a855f7',
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                color: '#c084fc',
                                textDecoration: 'underline'
                              }
                            }}
                          >
                            {link.label}
                          </Link>
                        </Box>
                      ))}
                    </Box>
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
              © 2026 Enes Günümdoğdu. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CartoonWeatherTermsOfUse
