import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function LumoraPrivacyPolicy() {
  useDocumentTitle('Lumora - Privacy Policy')

  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          text: 'Lumora does not require an account, sign-up, or login, and the App has no server of its own. Your photos and edits never leave your device. We collect as little information as possible.'
        },
        {
          subtitle: '1.1 Photos You Edit',
          items: [
            'Choosing Photos: Photos are chosen with the iOS system photo picker. The App receives only the photos you pick and does not ask for read access to your photo library.',
            'Your Edits: The original of each photo you pick is copied into the App\'s private storage on your device, together with your edit settings, so that you can re-open and change an edit later. These copies are never uploaded to us, never sent to a cloud service, and never sent to analytics.',
            'Saving to Photos: Edited photos are saved to your Photos library only when you tap Save. For this the App asks only for add-only access, which lets it add photos but not read your library.'
          ]
        },
        {
          subtitle: '1.2 Automatically Collected Information',
          items: [
            'Usage Data: We use Google Firebase Analytics to collect anonymous product events, such as that a preset was applied, an export was completed, the purchase screen was viewed, or a purchase was started or completed. This data never contains your photos or any personal information.',
            'Device Information: Device model, operating system version, app version, and language are collected with usage data.',
            'Crash Reports: We use Google Firebase Crashlytics to collect crash reports when the App crashes. A crash report contains the stack trace of the crash, device model, operating system version, app version, and an identifier for your installation. Crash reports are not linked to your identity, never contain your photos, and are used only to find and fix crashes.',
            'Approximate Location: Firebase may derive your approximate country from your IP address. The App does not use GPS and does not access your precise location.',
            'App Identifiers: Firebase and RevenueCat generate random identifiers for your installation. They are not linked to your name, email address, or Apple ID.'
          ]
        },
        {
          subtitle: '1.3 Purchase Information',
          items: [
            'In-app purchases and subscriptions are processed entirely by Apple through the App Store. We never see or receive your payment details.',
            'RevenueCat receives an anonymous app user ID together with your purchase receipts and transaction history (such as which product was bought and when), so that your purchases can be validated, your Lumora Pro access can be managed, and your purchases can be restored.'
          ]
        },
        {
          subtitle: '1.4 Information We Do NOT Collect',
          items: [
            'We do NOT collect your name, email address, or any contact information.',
            'We do NOT upload, view, or analyze your photos or your edits.',
            'We do NOT read your photo library, contacts, or calendar.',
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
            'Provide the App\'s features, including presets, edits, and exports',
            'Validate and restore your purchases and manage your Lumora Pro access',
            'Understand how the App is used and improve it',
            'Find and fix crashes and other technical problems, using Crashlytics crash reports',
            'Respond to your support requests'
          ]
        }
      ]
    },
    {
      title: '3. Tracking and Advertising',
      content: [
        {
          text: 'The App does NOT show advertisements. We do NOT track you across other companies\' apps or websites, the data we collect is not linked to your identity, and it is not used for advertising.'
        }
      ]
    },
    {
      title: '4. Data Storage and Security',
      content: [
        {
          items: [
            'Your photos and edits stay on your device and are removed when you delete them or delete the App',
            'The App has no accounts, no sign-in, and no cloud storage',
            'Usage, crash, and purchase data are sent over encrypted connections to the services listed below'
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
            'Firebase Analytics (Google): Anonymous usage statistics, without the Advertising Identifier',
            'Firebase Crashlytics (Google): Crash reports',
            'RevenueCat: Purchase validation and Lumora Pro access management',
            'Apple App Store / StoreKit: In-app purchase and subscription processing'
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
            'Delete any edit in the App at any time',
            'Delete all photos and edits stored by the App by deleting the App',
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
            'Photos and edits remain on your device until you delete them or delete the App',
            'Anonymous analytics data is retained by Firebase for up to 14 months',
            'Crash reports are retained by Firebase Crashlytics for up to 90 days',
            'Purchase history is kept by Apple and RevenueCat'
          ]
        }
      ]
    },
    {
      title: '10. International Data Transfers',
      content: [
        {
          text: 'Usage, crash, and purchase data may be processed in countries other than your own by the service providers listed above. These providers use appropriate safeguards for such transfers.'
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
      appName="Lumora"
      effectiveDate="November 7, 2026"
      lastUpdated="November 7, 2026"
      intro={`Lumora is developed by Enes Günümdoğdu, an individual developer based in Türkiye ("we," "our," or "us"). This Privacy Policy explains what information is collected, how it is used, and how it is protected when you use the Lumora photo editor application for iPhone and iPad (the "App").`}
      sections={sections}
    />
  )
}

export default LumoraPrivacyPolicy
