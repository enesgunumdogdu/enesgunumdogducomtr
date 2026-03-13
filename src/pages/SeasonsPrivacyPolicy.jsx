import { Box, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

function SeasonsPrivacyPolicy() {
  useDocumentTitle('Seasons - Privacy Policy')

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          text: 'We are committed to minimizing data collection. The Seasons app does NOT require account creation, login, or any personal information to function.'
        },
        {
          subtitle: 'a) Information You Provide',
          text: 'Country/hemisphere selection: During onboarding, you select your country to determine your hemisphere. This data is stored locally on your device only and is never transmitted to our servers.',
          items: [
            'Notification preferences: Your preference for receiving season change notifications is stored locally on your device.'
          ]
        },
        {
          subtitle: 'b) Automatically Collected Information',
          items: [
            'Crash data: We use Firebase Crashlytics to collect anonymous crash reports and non-fatal error logs. This helps us identify and fix bugs. Crash data is not linked to your identity.',
            'Analytics data: We use Firebase Analytics to collect anonymous usage data such as app opens, feature usage (theme changes, settings views), and purchase events. This data is not linked to your identity and is used solely to improve the App.',
            'Purchase data: When you subscribe to Seasons Pro, your purchase is processed through Apple\'s App Store and managed by RevenueCat. We receive anonymous subscription status information (active, expired, trial) but do NOT have access to your payment details, Apple ID, or any personally identifiable information.'
          ]
        },
        {
          subtitle: 'c) Information We Do NOT Collect',
          items: [
            'We do NOT collect your name, email address, or any contact information.',
            'We do NOT collect or access your location (no GPS, no IP-based location).',
            'We do NOT collect device identifiers for tracking purposes.',
            'We do NOT collect photos, contacts, calendar data, or any other personal files.',
            'We do NOT use cookies or web tracking technologies.'
          ]
        }
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          text: 'The limited data we collect is used exclusively for:',
          items: [
            'Providing and maintaining the App\'s core functionality',
            'Processing and validating your subscription status',
            'Improving app stability through crash reporting',
            'Understanding feature usage to improve the user experience',
            'Delivering local push notifications about season changes (if enabled)'
          ]
        }
      ]
    },
    {
      title: '3. Data Storage and Security',
      content: [
        {
          items: [
            'All user preferences (country, theme, language, notification settings) are stored locally on your device using Apple\'s standard storage mechanisms (UserDefaults/AppStorage).',
            'We do not operate any custom backend servers. Your data is not synced to the cloud.',
            'Subscription data is managed securely by Apple (StoreKit) and RevenueCat.',
            'Firebase services (Analytics, Crashlytics) are provided by Google and operate under Google\'s security standards.'
          ]
        }
      ]
    },
    {
      title: '4. Third-Party Services',
      content: [
        {
          text: 'The App uses the following third-party services, each with their own privacy policies:'
        },
        {
          subtitle: 'RevenueCat (subscription management)',
          text: 'Privacy Policy: https://www.revenuecat.com/privacy'
        },
        {
          subtitle: 'Firebase Analytics (usage analytics)',
          text: 'Privacy Policy: https://firebase.google.com/support/privacy'
        },
        {
          subtitle: 'Firebase Crashlytics (crash reporting)',
          text: 'Privacy Policy: https://firebase.google.com/support/privacy'
        },
        {
          subtitle: 'Apple StoreKit (in-app purchases)',
          text: 'Privacy Policy: https://www.apple.com/legal/privacy'
        }
      ]
    },
    {
      title: '5. Data Sharing',
      content: [
        {
          text: 'We do NOT sell, trade, or rent your information to third parties. Anonymous, aggregated analytics and crash data may be processed by our third-party service providers (Firebase, RevenueCat) solely for the purposes described in this policy.'
        }
      ]
    },
    {
      title: '6. Data Retention',
      content: [
        {
          items: [
            'Local data: Stored on your device until you delete the App or clear app data.',
            'Analytics data: Retained by Firebase for up to 14 months in aggregated, anonymized form.',
            'Crash data: Retained by Firebase Crashlytics for up to 90 days.',
            'Purchase data: Retained by RevenueCat and Apple as required for subscription management and financial record-keeping.'
          ]
        }
      ]
    },
    {
      title: '7. Children\'s Privacy',
      content: [
        {
          text: 'The App does not knowingly collect personal information from children under 13. Since the App does not require account creation or collect personal data, it is suitable for users of all ages.'
        }
      ]
    },
    {
      title: '8. Tracking and Advertising',
      content: [
        {
          text: 'The App does NOT track you across other companies\' apps or websites. We do NOT display advertisements. The NSPrivacyTracking flag in our App is set to false.'
        }
      ]
    },
    {
      title: '9. Your Rights',
      content: [
        {
          text: 'Since we do not collect personal data or maintain user accounts, there is minimal data to manage. However, you can:',
          items: [
            'Delete all local data by uninstalling the App.',
            'Manage or cancel your subscription through Apple\'s subscription settings.',
            'Disable notifications through your device\'s Settings app.',
            'Request information about data processing by contacting us.'
          ],
          note: 'contact-link'
        }
      ]
    },
    {
      title: '10. Changes to This Privacy Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.'
        }
      ]
    },
    {
      title: '11. Contact Us',
      content: [
        {
          contactLink: true
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
            Seasons
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
            Last Updated: March 13, 2026
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
              mb: 4,
              fontSize: { xs: '0.95rem', md: '1rem' }
            }}
          >
            Enes Günümdoğdu ("we", "us", or "our") built the Seasons app ("App") as a commercial application. This Privacy Policy explains how we collect, use, and protect your information when you use our App. By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
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
                      {block.note === 'contact-link' ? (
                        <>
                          To exercise these rights, please visit our{' '}
                          <Link
                            component={RouterLink}
                            to="/contact"
                            sx={{
                              color: '#a855f7',
                              textDecoration: 'underline',
                              '&:hover': { color: '#c084fc' }
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
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.9rem', md: '0.95rem' }
                      }}
                    >
                      If you have questions about this Privacy Policy, please visit our{' '}
                      <Link
                        component={RouterLink}
                        to="/contact"
                        sx={{
                          color: '#a855f7',
                          textDecoration: 'underline',
                          '&:hover': { color: '#c084fc' }
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

export default SeasonsPrivacyPolicy
