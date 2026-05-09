import LegalPage from '../components/LegalPage'
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
    <LegalPage
      kind="Privacy Policy"
      appName="Seasons"
      lastUpdated="March 13, 2026"
      intro={`Enes Günümdoğdu ("we", "us", or "our") built the Seasons app ("App") as a commercial application. This Privacy Policy explains how we collect, use, and protect your information when you use our App. By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.`}
      sections={sections}
    />
  )
}

export default SeasonsPrivacyPolicy
