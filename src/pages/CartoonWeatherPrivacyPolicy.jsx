import LegalPage from '../components/LegalPage'
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
            'Device Information: We collect device identifiers, device type, operating system version, and app version for troubleshooting and improvement purposes.',
            'Usage Data: We collect anonymous usage statistics and product interaction data to improve our app experience.',
            'Crash Data: We automatically collect crash logs and diagnostic reports through Firebase Crashlytics to identify and fix technical issues.',
            'Performance Data: We collect app performance metrics including launch times, response times, and resource usage to maintain and improve app stability.',
            'User Identifiers: We generate and store unique user identifiers to manage your account, preferences, and provide personalized services.'
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
            'Firebase (Google): Authentication, analytics, crash reporting, and cloud storage',
            'RevenueCat: Subscription management and purchase verification',
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
          note: 'contact-link'
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
          contactLink: true
        }
      ]
    }
  ]

  return (
    <LegalPage
      kind="Privacy Policy"
      appName="Cartoon Weather"
      lastUpdated="January 23, 2026"
      intro={`Cartoon Weather ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.`}
      sections={sections}
    />
  )
}

export default CartoonWeatherPrivacyPolicy
