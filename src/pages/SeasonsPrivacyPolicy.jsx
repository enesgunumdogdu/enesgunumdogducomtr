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
          subtitle: '1.1 Location Data',
          text: 'The App may request access to your device\'s location services to provide accurate sunrise and sunset times, daylight duration, and moon phase calculations based on your geographic position. Location data is used solely for these on-device calculations and is not transmitted to our servers or shared with third parties. If you decline location access, the App will use default coordinates and continue to function with reduced accuracy.'
        },
        {
          subtitle: '1.2 User Preferences',
          text: 'The App stores your preferences locally on your device, including:',
          items: [
            'Hemisphere selection (Northern or Southern)',
            'App theme preference (System, Light, or Dark)',
            'Notification settings',
            'Widget theme and display preferences'
          ],
          note: 'These preferences are stored using Apple\'s UserDefaults and App Groups frameworks and remain on your device. They are not transmitted to any external server.'
        },
        {
          subtitle: '1.3 Purchase Information',
          text: 'If you choose to make an in-app purchase ("Seasons Pro"), your transaction is processed by Apple\'s App Store and managed through RevenueCat, our purchase management provider. We do not collect or store your payment information (such as credit card numbers) directly. RevenueCat receives transaction data necessary to verify your purchase entitlement.'
        },
        {
          subtitle: '1.4 Crash and Diagnostic Data',
          text: 'We use Firebase Crashlytics, a service provided by Google LLC, to collect crash reports and diagnostic information. This data helps us identify and fix bugs and improve the App\'s stability. Crash data may include device type, operating system version, app state at the time of the crash, and stack traces. This data does not include personally identifiable information.'
        }
      ]
    },
    {
      title: '2. Information We Do Not Collect',
      content: [
        {
          text: 'We want to be transparent about the data we do not collect:',
          items: [
            'We do not collect your name, email address, phone number, or any contact information.',
            'We do not collect health or fitness data.',
            'We do not collect browsing history or search queries.',
            'We do not collect photos, videos, or media from your device.',
            'We do not collect your contacts or address book data.',
            'We do not use advertising identifiers (IDFA).',
            'We do not use analytics or tracking tools. Firebase Analytics is disabled in the App.',
            'We do not display advertisements or use any ad networks.'
          ]
        }
      ]
    },
    {
      title: '3. How We Use Your Information',
      content: [
        {
          text: 'We use the information described above for the following purposes:',
          items: [
            'To calculate and display accurate seasonal, solar, and lunar data based on your location.',
            'To remember your preferences and provide a personalized experience.',
            'To verify your in-app purchase status and provide access to premium features.',
            'To identify and resolve crashes, bugs, and performance issues.'
          ]
        }
      ]
    },
    {
      title: '4. Third-Party Services',
      content: [
        {
          text: 'The App integrates the following third-party services:'
        },
        {
          subtitle: '4.1 Firebase Crashlytics (Google LLC)',
          text: 'Purpose: Crash reporting and error diagnostics.',
          items: [
            'Data collected: Crash logs, device information, and app state at the time of the crash.',
            'Privacy Policy: https://firebase.google.com/support/privacy'
          ]
        },
        {
          subtitle: '4.2 RevenueCat, Inc.',
          text: 'Purpose: In-app purchase management, subscription entitlement verification, and purchase restoration.',
          items: [
            'Data collected: Transaction and purchase data necessary for entitlement verification.',
            'Privacy Policy: https://www.revenuecat.com/privacy'
          ]
        },
        {
          subtitle: '4.3 Apple App Store (Apple Inc.)',
          text: 'Purpose: Processing in-app purchase transactions.',
          items: [
            'Data collected: Transaction and payment data as governed by Apple\'s terms.',
            'Privacy Policy: https://www.apple.com/legal/privacy/'
          ]
        }
      ]
    },
    {
      title: '5. Data Storage and Security',
      content: [
        {
          text: 'All user preferences, location data, and seasonal calculations are processed and stored locally on your device. We do not operate external servers or databases that store your personal information. We implement reasonable security measures to protect the information processed by the App, but no method of electronic storage is 100% secure.'
        }
      ]
    },
    {
      title: '6. Data Retention',
      content: [
        {
          items: [
            'Location data is used in real-time for calculations and is not persistently stored by us.',
            'User preferences are stored locally on your device for as long as the App is installed.',
            'Purchase entitlement data is managed by RevenueCat and Apple and is retained according to their respective policies.',
            'Crash reports collected by Firebase Crashlytics are retained for 90 days by default.'
          ]
        }
      ]
    },
    {
      title: '7. Children\'s Privacy',
      content: [
        {
          text: 'The App is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe that a child has provided us with personal information, please contact us so that we can take appropriate action.'
        }
      ]
    },
    {
      title: '8. Data Sharing and Disclosure',
      content: [
        {
          text: 'We do not sell, trade, or rent your personal information to third parties. We share data only with the third-party services described in Section 4, and only to the extent necessary to provide the App\'s functionality. We may disclose your information if required to do so by law or in response to valid legal requests by public authorities.'
        }
      ]
    },
    {
      title: '9. Your Rights and Choices',
      content: [
        {
          text: 'You have the following choices regarding your data:',
          items: [
            'Location Data: You can enable or disable location access at any time through your device\'s Settings.',
            'Notifications: You can manage notification preferences within the App or through your device\'s Settings.',
            'Purchase Data: You can manage your subscriptions and purchase history through the Apple App Store.',
            'Data Deletion: Since data is stored locally on your device, uninstalling the App will remove all locally stored data. For data held by third-party services (RevenueCat, Firebase), please refer to their respective privacy policies.'
          ],
          note: 'contact-link'
        }
      ]
    },
    {
      title: '10. International Users',
      content: [
        {
          text: 'If you are accessing the App from outside of Turkey, please be aware that crash report data may be processed and stored in countries where our third-party service providers operate (including the United States). By using the App, you consent to the transfer of this information.'
        }
      ]
    },
    {
      title: '11. Changes to This Privacy Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this document. You are advised to review this Privacy Policy periodically for any changes. Changes are effective when they are posted.'
        }
      ]
    },
    {
      title: '12. Contact Us',
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
            Last Updated: February 10, 2026
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
              mb: 4,
              fontSize: { xs: '0.95rem', md: '1rem' }
            }}
          >
            Enes Gunumdogdu ("we," "us," or "our") built the Seasons app (the "App") as a commercial application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this Privacy Policy carefully. By using the App, you agree to the collection and use of information in accordance with this policy.
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
