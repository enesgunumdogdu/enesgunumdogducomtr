import { Box, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

function SeasonsTermsOfUse() {
  useDocumentTitle('Seasons - Terms of Use')

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        {
          text: 'By accessing or using the App, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using the App on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.'
        }
      ]
    },
    {
      title: '2. Description of the App',
      content: [
        {
          text: 'Seasons is a mobile application designed to:',
          items: [
            'Track seasonal progress, including the percentage of the current season completed, days passed, and days remaining.',
            'Display sunrise and sunset times, daylight duration, and daily solar information.',
            'Show moon phase data, including illumination percentage and upcoming full moon dates.',
            'Provide information about upcoming astronomical events such as solstices and equinoxes.',
            'Offer customizable home screen and lock screen widgets.'
          ],
          note: 'The App performs all astronomical calculations locally on your device using mathematical algorithms. Results are approximations and may vary slightly from official astronomical data.'
        }
      ]
    },
    {
      title: '3. Eligibility',
      content: [
        {
          text: 'You must be at least 13 years of age (or the minimum age of digital consent in your jurisdiction) to use the App. By using the App, you represent and warrant that you meet this age requirement.'
        }
      ]
    },
    {
      title: '4. User Accounts',
      content: [
        {
          text: 'The App does not require you to create an account. No registration, login, or personal information submission is needed to use the App.'
        }
      ]
    },
    {
      title: '5. In-App Purchases',
      content: [
        {
          subtitle: '5.1 Seasons Pro',
          text: 'The App offers a one-time, non-recurring in-app purchase called "Seasons Pro" that unlocks premium widget themes (Minimal, Aurora, and Mono). The Classic theme is available to all users at no charge.'
        },
        {
          subtitle: '5.2 Pricing',
          text: 'The price of Seasons Pro is displayed within the App and is determined by the Apple App Store. Pricing may vary by region and is subject to change.'
        },
        {
          subtitle: '5.3 Payment',
          text: 'All payments are processed through the Apple App Store. By making a purchase, you agree to Apple\'s terms and conditions for in-app purchases. We do not directly process or store any payment information.'
        },
        {
          subtitle: '5.4 Refunds',
          text: 'All purchases are final. Refund requests must be directed to Apple through the App Store, as Apple handles all payment processing. We do not have the ability to issue refunds directly.'
        },
        {
          subtitle: '5.5 Restore Purchases',
          text: 'If you have previously purchased Seasons Pro, you may restore your purchase at no additional cost using the "Restore Purchases" feature in the App\'s settings. This allows you to access premium features on the same Apple ID across multiple devices.'
        }
      ]
    },
    {
      title: '6. Intellectual Property',
      content: [
        {
          subtitle: '6.1 Ownership',
          text: 'The App and all of its content, features, functionality, design, code, graphics, icons, and visual elements are owned by Enes Gunumdogdu and are protected by international copyright, trademark, and other intellectual property laws.'
        },
        {
          subtitle: '6.2 Limited License',
          text: 'We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial purposes in accordance with these Terms and Apple\'s standard Licensed Application End User License Agreement (EULA).'
        },
        {
          subtitle: '6.3 Restrictions',
          text: 'You agree not to:',
          items: [
            'Copy, modify, distribute, sell, or lease any part of the App.',
            'Reverse engineer, decompile, or disassemble the App or attempt to extract its source code.',
            'Remove, alter, or obscure any proprietary notices or labels on the App.',
            'Use the App for any unlawful purpose or in violation of any applicable laws or regulations.',
            'Use the App to develop a competing product or service.',
            'Use automated systems or software to extract data from the App.'
          ]
        }
      ]
    },
    {
      title: '7. Location Services',
      content: [
        {
          text: 'The App may request access to your device\'s location services to provide accurate sunrise and sunset calculations. Location access is optional and the App will function with reduced accuracy if you decline. You can manage location permissions at any time through your device\'s Settings. For more details on how location data is used, please refer to our Privacy Policy.'
        }
      ]
    },
    {
      title: '8. Widgets',
      content: [
        {
          text: 'The App provides widgets for your device\'s home screen and lock screen. Widgets rely on Apple\'s WidgetKit framework and update according to system-defined schedules. We do not guarantee real-time accuracy of widget data, as update frequency is managed by the operating system.'
        }
      ]
    },
    {
      title: '9. Accuracy Disclaimer',
      content: [
        {
          text: 'The astronomical data provided by the App, including but not limited to seasonal progress, sunrise and sunset times, moon phases, and solstice and equinox dates, are calculated using mathematical approximations. While we strive for accuracy, this data is provided for informational and entertainment purposes only. We do not guarantee the precision of any calculations and recommend consulting official astronomical sources for critical applications such as navigation, scientific research, or professional use.'
        }
      ]
    },
    {
      title: '10. Disclaimer of Warranties',
      content: [
        {
          text: 'THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.'
        }
      ]
    },
    {
      title: '11. Limitation of Liability',
      content: [
        {
          text: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ENES GUNUMDOGDU BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:',
          items: [
            'Your use of or inability to use the App;',
            'Any errors, inaccuracies, or omissions in the App\'s content or calculations;',
            'Unauthorized access to or alteration of your data;',
            'Any third-party conduct or content on or related to the App;',
            'Any other matter relating to the App.'
          ],
          note: 'Our total liability to you for all claims arising from or related to the App shall not exceed the amount you paid for the App or in-app purchases in the twelve (12) months preceding the claim.'
        }
      ]
    },
    {
      title: '12. Indemnification',
      content: [
        {
          text: 'You agree to defend, indemnify, and hold harmless Enes Gunumdogdu from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorney\'s fees) arising from:',
          items: [
            'Your use of the App;',
            'Your violation of these Terms;',
            'Your violation of any third-party rights, including intellectual property rights;',
            'Your violation of any applicable law, rule, or regulation.'
          ]
        }
      ]
    },
    {
      title: '13. Third-Party Services',
      content: [
        {
          text: 'The App uses third-party services including Firebase Crashlytics (Google LLC) for crash reporting and RevenueCat, Inc. for in-app purchase management. Your use of the App is also subject to the terms and conditions of these third-party services. We are not responsible for the practices of any third-party services.',
          items: [
            'Firebase: https://firebase.google.com/support/privacy',
            'RevenueCat: https://www.revenuecat.com/privacy'
          ]
        }
      ]
    },
    {
      title: '14. Termination',
      content: [
        {
          text: 'We reserve the right to terminate or suspend your access to the App at any time, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the App will cease immediately. Provisions of these Terms that by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.'
        }
      ]
    },
    {
      title: '15. Changes to These Terms',
      content: [
        {
          text: 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide notice by updating the "Last Updated" date at the top of these Terms. Your continued use of the App after any such changes constitutes your acceptance of the new Terms. It is your responsibility to review these Terms periodically.'
        }
      ]
    },
    {
      title: '16. Governing Law',
      content: [
        {
          text: 'These Terms shall be governed by and construed in accordance with the laws of the Republic of Turkey, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Turkey.'
        }
      ]
    },
    {
      title: '17. Severability',
      content: [
        {
          text: 'If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.'
        }
      ]
    },
    {
      title: '18. Entire Agreement',
      content: [
        {
          text: 'These Terms, together with the Privacy Policy, constitute the entire agreement between you and Enes Gunumdogdu regarding the use of the App and supersede all prior agreements and understandings, whether written or oral.'
        }
      ]
    },
    {
      title: '19. Contact Us',
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
            <span className="gradient-text-animated">Terms of Use</span>
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
            Please read these Terms of Use ("Terms") carefully before using the Seasons mobile application (the "App") developed by Enes Gunumdogdu ("Developer," "we," "us," or "our"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
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

                  {block.contactLink && (
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.9rem', md: '0.95rem' }
                      }}
                    >
                      If you have any questions about these Terms, please visit our{' '}
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

export default SeasonsTermsOfUse
