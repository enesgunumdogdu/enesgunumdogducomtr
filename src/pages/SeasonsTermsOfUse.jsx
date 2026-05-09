import LegalPage from '../components/LegalPage'
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
    <LegalPage
      kind="Terms of Use"
      appName="Seasons"
      lastUpdated="March 13, 2026"
      intro={`Please read these Terms of Use ("Terms") carefully before using the Seasons app ("App") developed by Enes Günümdoğdu ("we", "us", or "our"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.`}
      sections={sections}
    />
  )
}

export default SeasonsTermsOfUse
