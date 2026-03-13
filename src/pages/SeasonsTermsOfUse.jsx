import { Box, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

function SeasonsTermsOfUse() {
  useDocumentTitle('Seasons - Terms of Use')

  const sections = [
    {
      title: '1. App Description',
      content: [
        {
          text: 'Seasons is a mobile application that provides real-time tracking of seasonal progress, including season countdowns, moon phase information, and customizable widgets. The App is available on iOS devices.'
        }
      ]
    },
    {
      title: '2. License',
      content: [
        {
          text: 'We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes on any Apple device that you own or control, subject to the Apple Media Services Terms and Conditions.'
        }
      ]
    },
    {
      title: '3. Free and Premium Features',
      content: [
        {
          subtitle: 'a) Free Features',
          text: 'The App provides core functionality at no cost, including:',
          items: [
            'Real-time season progress tracking',
            'Moon phase information',
            'Home screen and lock screen widgets (default theme)',
            'Season change notifications',
            'Hemisphere selection for 85+ countries'
          ]
        },
        {
          subtitle: 'b) Seasons Pro (Premium Subscription)',
          text: 'Additional features are available through a paid subscription:',
          items: [
            'Monthly Plan: $0.99/month (with a 3-day free trial for eligible users)',
            'Annual Plan: $9.99/year'
          ]
        },
        {
          text: 'Premium features include:',
          items: [
            'Access to all premium visual themes (Frost, Bloom, Dusk, Ember)',
            'All future premium themes'
          ]
        }
      ]
    },
    {
      title: '4. Subscription Terms',
      content: [
        {
          subtitle: 'a) Billing',
          items: [
            'Payment is charged to your Apple ID account upon confirmation of purchase.',
            'Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.',
            'Your account will be charged for renewal within 24 hours prior to the end of the current period at the same price.'
          ]
        },
        {
          subtitle: 'b) Free Trial',
          items: [
            'Eligible users may receive a 3-day free trial for the monthly plan.',
            'If you do not cancel before the trial ends, your subscription will automatically convert to a paid subscription.',
            'Free trial eligibility is determined by Apple and may only be used once per Apple ID.'
          ]
        },
        {
          subtitle: 'c) Managing Subscriptions',
          items: [
            'You can manage or cancel your subscription at any time through your device\'s Settings > Apple ID > Subscriptions.',
            'Cancellation takes effect at the end of the current billing period. You will retain access to premium features until that date.',
            'No refunds will be provided for the unused portion of a subscription period.'
          ]
        },
        {
          subtitle: 'd) Price Changes',
          text: 'We reserve the right to change subscription prices. Any price changes will take effect at the start of the next subscription period following the date of the price change. Your continued use after a price change constitutes acceptance of the new price.'
        }
      ]
    },
    {
      title: '5. User Responsibilities',
      content: [
        {
          text: 'You agree to:',
          items: [
            'Use the App in compliance with all applicable laws and regulations.',
            'Not attempt to reverse engineer, decompile, or disassemble the App.',
            'Not use the App for any unlawful or unauthorized purpose.',
            'Not attempt to interfere with or disrupt the App\'s functionality.'
          ]
        }
      ]
    },
    {
      title: '6. Intellectual Property',
      content: [
        {
          text: 'All content, features, and functionality of the App — including but not limited to design, graphics, icons, animations, text, and code — are owned by Enes Günümdoğdu and are protected by international copyright, trademark, and other intellectual property laws. The app name "Seasons" and all associated visual assets are trademarks of Enes Günümdoğdu.'
        }
      ]
    },
    {
      title: '7. Disclaimer of Warranties',
      content: [
        {
          text: 'The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:',
          items: [
            'Warranties of merchantability or fitness for a particular purpose.',
            'Warranties that the App will be uninterrupted, error-free, or secure.',
            'Warranties regarding the accuracy of season or moon phase calculations.'
          ],
          note: 'Season and astronomical calculations are approximations and may vary slightly from official sources.'
        }
      ]
    },
    {
      title: '8. Limitation of Liability',
      content: [
        {
          text: 'To the maximum extent permitted by applicable law, Enes Günümdoğdu shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:',
          items: [
            'Your use or inability to use the App.',
            'Any unauthorized access to or use of our services.',
            'Any bugs, viruses, or other harmful code transmitted through the App.'
          ]
        }
      ]
    },
    {
      title: '9. Third-Party Services',
      content: [
        {
          text: 'The App uses third-party services including:',
          items: [
            'Apple StoreKit for in-app purchases',
            'RevenueCat for subscription management',
            'Firebase for analytics and crash reporting'
          ],
          note: 'Your use of these services is subject to their respective terms and conditions. We are not responsible for the practices of third-party services.'
        }
      ]
    },
    {
      title: '10. Termination',
      content: [
        {
          text: 'We reserve the right to terminate or suspend your access to the App at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.'
        }
      ]
    },
    {
      title: '11. Changes to Terms',
      content: [
        {
          text: 'We may modify these Terms at any time. Changes will be effective upon posting the updated Terms. Your continued use of the App after changes are posted constitutes acceptance of the modified Terms.'
        }
      ]
    },
    {
      title: '12. Governing Law',
      content: [
        {
          text: 'These Terms shall be governed by and construed in accordance with the laws of the Republic of Turkey, without regard to conflict of law provisions.'
        }
      ]
    },
    {
      title: '13. Apple-Specific Terms',
      content: [
        {
          text: 'These Terms are between you and Enes Günümdoğdu, not with Apple. Apple has no obligation to furnish maintenance or support services for the App. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if applicable); beyond that, Apple has no warranty obligation. Apple is not responsible for addressing any claims relating to the App. Apple is a third-party beneficiary of these Terms.'
        }
      ]
    },
    {
      title: '14. Severability',
      content: [
        {
          text: 'If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.'
        }
      ]
    },
    {
      title: '15. Contact Us',
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
            Please read these Terms of Use ("Terms") carefully before using the Seasons app ("App") developed by Enes Günümdoğdu ("we", "us", or "our"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.
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
