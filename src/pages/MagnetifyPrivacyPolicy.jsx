import { Box, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

function MagnetifyPrivacyPolicy() {
  useDocumentTitle('Magnetify - Privacy Policy')

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          text: 'Magnetify is designed with privacy as a core principle. The app does NOT collect, transmit, or store any personal data on external servers. There is no account creation, no login, and no registration required.'
        },
        {
          subtitle: 'a) Locally Stored Data',
          text: 'The following data is stored exclusively on your device using macOS UserDefaults (Apple\'s standard local storage mechanism). This data never leaves your device:',
          items: [
            'App preferences: launch at login, menu bar visibility, snap gap, edge sensitivity, animation speed, preview color and opacity, language preference.',
            'Keyboard shortcuts: your custom key bindings for window snap positions.',
            'Window memory: positions and sizes of previously snapped windows, stored by app bundle identifier, to restore layouts when apps relaunch.',
            'Workspace profiles: named window arrangements you save, including window positions and associated app identifiers.',
            'App rules: per-application snap position preferences you configure.',
            'Custom snap areas: user-defined screen regions for window snapping.',
            'Size templates: predefined window dimensions you create.'
          ]
        },
        {
          subtitle: 'b) Information We Do NOT Collect',
          items: [
            'We do NOT collect your name, email address, Apple ID, or any personal identifiers.',
            'We do NOT collect or access your location.',
            'We do NOT collect device identifiers, IP addresses, or hardware information.',
            'We do NOT access your files, documents, photos, or any user content.',
            'We do NOT use cookies, web beacons, or any tracking technologies.',
            'We do NOT collect usage analytics or behavioral data.',
            'We do NOT collect crash reports or diagnostic data.',
            'We do NOT make any network connections whatsoever.'
          ]
        }
      ]
    },
    {
      title: '2. System Permissions',
      content: [
        {
          text: 'Magnetify requires one system permission to function:'
        },
        {
          subtitle: 'Accessibility Access',
          text: 'The app uses the macOS Accessibility API (AXUIElement) solely to move and resize windows on your behalf. This permission is required for core functionality and is used exclusively for window management. No data from other applications is read, recorded, or transmitted.'
        }
      ]
    },
    {
      title: '3. Network and Data Transmission',
      content: [
        {
          text: 'Magnetify makes zero network connections. The app:',
          items: [
            'Does NOT connect to the internet for any purpose.',
            'Does NOT send or receive data to/from any server.',
            'Does NOT include any analytics SDKs or third-party frameworks.',
            'Does NOT use CloudKit, iCloud, or any cloud synchronization.',
            'Operates entirely offline after installation.'
          ]
        }
      ]
    },
    {
      title: '4. Third-Party Services',
      content: [
        {
          text: 'Magnetify does not integrate any third-party services, SDKs, or frameworks. The app is built entirely with native Apple frameworks (SwiftUI, AppKit, Combine, ServiceManagement). The app is purchased through the Mac App Store; all payment processing is handled entirely by Apple. We do not have access to your payment details, Apple ID, or any personally identifiable purchase information.'
        }
      ]
    },
    {
      title: '5. Data Sharing',
      content: [
        {
          text: 'We do NOT sell, trade, rent, or share any user data with any third parties. Since no data is collected or transmitted, there is nothing to share.'
        }
      ]
    },
    {
      title: '6. Data Storage and Security',
      content: [
        {
          items: [
            'All data is stored locally on your device within the app\'s sandbox using Apple\'s UserDefaults mechanism.',
            'The app operates within macOS App Sandbox, which provides system-level isolation and security.',
            'No data is stored on external servers, cloud services, or any location outside your device.',
            'Deleting the app removes all associated data from your device.'
          ]
        }
      ]
    },
    {
      title: '7. Data Retention',
      content: [
        {
          text: 'All data is stored locally on your device for as long as the app is installed. When you uninstall Magnetify, all locally stored preferences and data are automatically removed by macOS.'
        }
      ]
    },
    {
      title: '8. Children\'s Privacy',
      content: [
        {
          text: 'Magnetify does not collect any personal information from anyone, including children under 13. Since no data collection occurs, the app is suitable for users of all ages.'
        }
      ]
    },
    {
      title: '9. Tracking and Advertising',
      content: [
        {
          text: 'Magnetify does NOT track you in any way. The app does not use the Advertising Identifier (IDFA), does not display advertisements, and does not engage in any form of user tracking. The NSPrivacyTracking flag in our privacy manifest is set to false.'
        }
      ]
    },
    {
      title: '10. Your Rights',
      content: [
        {
          text: 'Since Magnetify does not collect or store any personal data externally, your privacy rights are inherently protected. You can:',
          items: [
            'Delete all app data by uninstalling Magnetify from your Mac.',
            'Reset preferences within the app at any time.',
            'Manage your purchase through the Mac App Store.',
            'Revoke Accessibility permission at any time through System Settings > Privacy & Security > Accessibility.'
          ],
          note: 'contact-link'
        }
      ]
    },
    {
      title: '11. Changes to This Privacy Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.'
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
            Magnetify
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
            Last Updated: April 11, 2026
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
              mb: 4,
              fontSize: { xs: '0.95rem', md: '1rem' }
            }}
          >
            Enes Gunumdogdu ("we", "us", or "our") built the Magnetify app ("App") as a commercial application for macOS. This Privacy Policy explains how we handle your information when you use our App. By using the App, you agree to the practices described in this Privacy Policy.
          </Typography>

          {sections.map((section, sectionIndex) => (
            <Box key={sectionIndex} sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "var(--font-display)",
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
                          To exercise these rights or for any questions, please visit our{' '}
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
              © 2026 Enes Gunumdogdu. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MagnetifyPrivacyPolicy
