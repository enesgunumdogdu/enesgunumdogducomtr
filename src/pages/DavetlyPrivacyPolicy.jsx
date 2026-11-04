import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DavetlyPrivacyPolicy() {
  useDocumentTitle('Davetly - Privacy Policy')

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          text: 'Davetly does not require an account, sign-up, or login, and the App has no server of its own. We collect as little information as possible.'
        },
        {
          subtitle: '1.1 Invitations You Create',
          items: [
            'Invitation Content: The names, dates, venues, addresses, phone numbers, messages, and other text you type into an invitation are stored only on your device, in the App\'s private storage. They are never uploaded to us and are never sent to analytics.',
            'Photos: Photos are chosen with the iOS system photo picker. The App receives only the photo you pick and does not ask for access to your photo library. A picked photo is copied into the App\'s private storage on your device. It is never uploaded to us and is never sent to analytics.',
            'Exports: Images and PDFs you export are created on your device. They are shared only where you choose to send them through the iOS share sheet.'
          ]
        },
        {
          subtitle: '1.2 Automatically Collected Information',
          items: [
            'Usage Data: We use Google Firebase Analytics to collect anonymous usage data, such as app opens, the screens you view, and feature events (for example, that the purchase screen was viewed or that an export was completed). This data never contains the text or photos of your invitations.',
            'Device Information: Device model, operating system version, app version, and language are collected with usage data.',
            'Approximate Location: Firebase may derive your approximate country from your IP address. The App does not use GPS and does not access your precise location.',
            'App Identifiers: Firebase and RevenueCat generate random identifiers for your installation. They are not linked to your name, email address, or Apple ID.'
          ]
        },
        {
          subtitle: '1.3 Purchase Information',
          items: [
            'In-app purchases are processed entirely by Apple through the App Store. We never see or receive your payment details.',
            'RevenueCat may receive purchase transaction details (such as which product was bought and when) together with an anonymous app user ID, so that your purchases can be verified and restored.'
          ]
        },
        {
          subtitle: '1.4 Information We Do NOT Collect',
          items: [
            'We do NOT collect your name, email address, or any contact information.',
            'We do NOT upload or read the contents of your invitations or your photos.',
            'We do NOT access your photo library, contacts, or calendar.',
            'We do NOT collect the Advertising Identifier (IDFA) and do NOT ask for tracking permission.'
          ]
        }
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          items: [
            'Provide the App\'s features, including designs, previews, and exports',
            'Verify and restore your in-app purchases',
            'Understand how the App is used and improve it',
            'Find and fix technical problems',
            'Respond to your support requests'
          ]
        }
      ]
    },
    {
      title: '3. Tracking and Advertising',
      content: [
        {
          text: 'The App does NOT show advertisements. We do NOT track you across other companies\' apps or websites, and the usage data we collect is not linked to your identity.'
        }
      ]
    },
    {
      title: '4. Data Storage and Security',
      content: [
        {
          items: [
            'Your invitations and photos stay on your device and are removed when you delete them or delete the App',
            'The App has no accounts and no sign-in',
            'Usage and purchase data are sent over encrypted connections to the services listed below'
          ]
        }
      ]
    },
    {
      title: '5. Third-Party Services',
      content: [
        {
          text: 'We use the following third-party services:',
          items: [
            'Firebase Analytics (Google): Anonymous usage statistics',
            'RevenueCat: Purchase verification and purchase analytics',
            'Apple App Store / StoreKit: In-app purchase processing'
          ],
          note: 'These services have their own privacy policies, and we encourage you to review them.'
        }
      ]
    },
    {
      title: '6. Data Sharing',
      content: [
        {
          text: 'We do not sell, trade, or rent your information to third parties. We may share data only:',
          items: [
            'With the service providers listed above, to operate the App',
            'When required by law or legal process',
            'To protect our rights or the safety of users'
          ]
        }
      ]
    },
    {
      title: '7. Your Rights',
      content: [
        {
          text: 'You have the right to:',
          items: [
            'Delete any invitation or photo in the App at any time',
            'Delete all App data by deleting the App',
            'Request access to, or deletion of, data held by our service providers about your installation',
            'Reset or limit analytics identifiers through your device settings'
          ],
          note: 'contact-link'
        }
      ]
    },
    {
      title: '8. Children\'s Privacy',
      content: [
        {
          text: 'The App is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.'
        }
      ]
    },
    {
      title: '9. Data Retention',
      content: [
        {
          items: [
            'Invitations and photos remain on your device until you delete them or delete the App',
            'Anonymous analytics data is retained by Firebase for up to 14 months',
            'Purchase history is kept by Apple and RevenueCat'
          ]
        }
      ]
    },
    {
      title: '10. International Data Transfers',
      content: [
        {
          text: 'Usage and purchase data may be processed in countries other than your own by the service providers listed above. These providers use appropriate safeguards for such transfers.'
        }
      ]
    },
    {
      title: '11. Changes to This Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time. Significant changes will be announced in the App or on this page, and the "Last updated" date above will change.'
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
    <LegalPage
      kind="Privacy Policy"
      appName="Davetly"
      effectiveDate="November 4, 2026"
      lastUpdated="November 4, 2026"
      intro={`Davetly is developed by Enes Günümdoğdu, an individual developer based in Türkiye ("we," "our," or "us"). This Privacy Policy explains what information is collected, how it is used, and how it is protected when you use the Davetly: Invitation Maker application for iOS (the "App").`}
      sections={sections}
    />
  )
}

export default DavetlyPrivacyPolicy
