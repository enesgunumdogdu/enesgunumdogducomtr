import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function InvitePrivacyPolicy() {
  useDocumentTitle('Invite - Privacy Policy')

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Invitations You Create',
          items: [
            'Invitation Content: The names, dates, venues, messages and other text you type into an invitation are stored only on your device. They are never uploaded to our servers.',
            'Photos: If you add a photo to an invitation, it is copied into the app\'s private storage on your device. It is never uploaded to our servers. The app asks for access only to the photo you pick.',
            'Exports: Images and PDFs you export are created on your device and shared only where you choose to send them.'
          ]
        },
        {
          subtitle: '1.2 Automatically Collected Information',
          items: [
            'Usage Data: We collect anonymous product interaction data, such as which screens are opened, which design and format are chosen, and whether an export succeeded, to improve the app. This data never contains the text or photos of your invitations.',
            'Device Information: Device type, operating system version, app version, and language are collected with usage data for troubleshooting and improvement.',
            'App Identifiers: Analytics and purchase services generate random identifiers for your installation. They are not linked to your name, email, or Apple ID.'
          ]
        },
        {
          subtitle: '1.3 Purchase Information',
          items: [
            'Subscriptions are processed by Apple through the App Store. We receive confirmation of your subscription status and transaction details from Apple, never your payment details.'
          ]
        }
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          items: [
            'Provide the app\'s features, including designs, previews, and exports',
            'Manage and verify your subscription',
            'Understand how the app is used and improve it',
            'Fix crashes and technical problems',
            'Respond to your support requests'
          ]
        }
      ]
    },
    {
      title: '3. Data Storage and Security',
      content: [
        {
          items: [
            'Your invitations and photos stay on your device and are removed when you delete them or delete the app',
            'The app has no accounts and no sign-in',
            'Usage and purchase data are transmitted over encrypted connections to the services listed below'
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
            'Firebase Analytics (Google): Anonymous usage statistics',
            'RevenueCat: Subscription management and purchase verification',
            'Apple StoreKit: In-app purchase processing'
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
            'With the service providers listed above, to operate the app',
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
            'Delete any invitation or photo in the app at any time',
            'Delete all app data by deleting the app',
            'Request access to, or deletion of, data held by our service providers about your installation',
            'Limit ad tracking and analytics through your device settings'
          ],
          note: 'contact-link'
        }
      ]
    },
    {
      title: '7. Children\'s Privacy',
      content: [
        {
          text: 'The app is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.'
        }
      ]
    },
    {
      title: '8. Data Retention',
      content: [
        {
          items: [
            'Invitations and photos remain on your device until you delete them',
            'Anonymous analytics data is retained for up to 14 months',
            'Purchase history is managed by Apple and RevenueCat'
          ]
        }
      ]
    },
    {
      title: '9. International Data Transfers',
      content: [
        {
          text: 'Usage and purchase data may be processed in countries other than your own by the service providers listed above. We ensure appropriate safeguards are in place for such transfers.'
        }
      ]
    },
    {
      title: '10. Changes to This Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time. Significant changes will be announced in the app or on this page.'
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
      appName="Invite"
      lastUpdated="October 17, 2026"
      intro={`Invite ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Invite: Invitation Maker mobile application.`}
      sections={sections}
    />
  )
}

export default InvitePrivacyPolicy
