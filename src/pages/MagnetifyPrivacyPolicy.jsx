import LegalPage from '../components/LegalPage'
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
    <LegalPage
      kind="Privacy Policy"
      appName="Magnetify"
      lastUpdated="April 11, 2026"
      intro={`Enes Gunumdogdu ("we", "us", or "our") built the Magnetify app ("App") as a commercial application for macOS. This Privacy Policy explains how we handle your information when you use our App. By using the App, you agree to the practices described in this Privacy Policy.`}
      sections={sections}
    />
  )
}

export default MagnetifyPrivacyPolicy
