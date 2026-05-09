import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function MagnetifyTermsOfUse() {
  useDocumentTitle('Magnetify - Terms of Use')

  const sections = [
    {
      title: '1. App Description',
      content: [
        {
          text: 'Magnetify is a macOS window management application that allows you to organize and snap windows to predefined or custom positions using keyboard shortcuts, drag-and-drop, or the menu bar. The App is available on macOS 13.0 (Ventura) and later.'
        }
      ]
    },
    {
      title: '2. License',
      content: [
        {
          text: 'We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal or commercial purposes on any Apple Mac that you own or control, subject to the Apple Media Services Terms and Conditions.'
        }
      ]
    },
    {
      title: '3. Features',
      content: [
        {
          text: 'Magnetify is a paid application available for a one-time purchase on the Mac App Store. All features are included with your purchase:',
          items: [
            'Drag-to-snap window positioning to screen edges and corners',
            'Keyboard shortcuts for 16 snap positions',
            'Window gap and sensitivity customization',
            'Menu bar quick access',
            'Multi-monitor support',
            'Stage Manager compatibility',
            'Workspace profiles — save and restore entire window arrangements',
            'App-specific rules — automatically position windows when apps launch',
            'Custom snap areas — define your own screen regions for snapping',
            'Size templates — predefined window dimensions for quick resizing',
            'Green button snap menu — right-click the zoom button for snap options',
            'Window memory — restore window positions when apps relaunch'
          ]
        }
      ]
    },
    {
      title: '4. Purchase and Refund',
      content: [
        {
          items: [
            'Magnetify is a one-time purchase. There are no subscriptions or recurring charges.',
            'Payment is charged to your Apple ID account upon confirmation of purchase.',
            'The purchase can be restored on any Mac signed in with the same Apple ID.'
          ]
        },
        {
          text: 'Refund requests are handled by Apple in accordance with their refund policy. We do not process refunds directly. To request a refund, visit reportaproblem.apple.com.'
        }
      ]
    },
    {
      title: '5. System Requirements and Permissions',
      content: [
        {
          text: 'The App requires macOS 13.0 (Ventura) or later and Accessibility permission to function. The Accessibility permission is necessary to move and resize windows of other applications. Without this permission, the App cannot perform its core functionality. You can grant or revoke this permission at any time through System Settings > Privacy & Security > Accessibility.'
        }
      ]
    },
    {
      title: '6. User Responsibilities',
      content: [
        {
          text: 'You agree to:',
          items: [
            'Use the App in compliance with all applicable laws and regulations.',
            'Not attempt to reverse engineer, decompile, or disassemble the App.',
            'Not use the App for any unlawful or unauthorized purpose.',
            'Not attempt to interfere with or disrupt the App\'s functionality.',
            'Not redistribute, resell, or sublicense the App.'
          ]
        }
      ]
    },
    {
      title: '7. Intellectual Property',
      content: [
        {
          text: 'All content, features, and functionality of the App — including but not limited to design, graphics, icons, animations, text, and code — are owned by Enes Gunumdogdu and are protected by international copyright, trademark, and other intellectual property laws. The app name "Magnetify" and all associated visual assets are trademarks of Enes Gunumdogdu.'
        }
      ]
    },
    {
      title: '8. Disclaimer of Warranties',
      content: [
        {
          text: 'The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:',
          items: [
            'Warranties of merchantability or fitness for a particular purpose.',
            'Warranties that the App will be uninterrupted, error-free, or secure.',
            'Warranties that the App will be compatible with all macOS configurations or third-party applications.'
          ],
          note: 'Window management behavior may vary depending on macOS version, application-specific window handling, and system configurations such as Stage Manager or Mission Control.'
        }
      ]
    },
    {
      title: '9. Limitation of Liability',
      content: [
        {
          text: 'To the maximum extent permitted by applicable law, Enes Gunumdogdu shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:',
          items: [
            'Your use or inability to use the App.',
            'Any unauthorized access to or use of our services.',
            'Any issues arising from window positioning, including unintended window placement or sizing.',
            'Any interaction between the App and third-party applications.'
          ]
        }
      ]
    },
    {
      title: '10. Third-Party Services',
      content: [
        {
          text: 'The App uses only native Apple frameworks and does not integrate any third-party SDKs or services. The app is distributed through the Mac App Store; your use of the Mac App Store is subject to Apple\'s terms and conditions.'
        }
      ]
    },
    {
      title: '11. Termination',
      content: [
        {
          text: 'We reserve the right to terminate or suspend your access to the App at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your license to use the App will immediately cease.'
        }
      ]
    },
    {
      title: '12. Changes to Terms',
      content: [
        {
          text: 'We may modify these Terms at any time. Changes will be effective upon posting the updated Terms. Your continued use of the App after changes are posted constitutes acceptance of the modified Terms.'
        }
      ]
    },
    {
      title: '13. Governing Law',
      content: [
        {
          text: 'These Terms shall be governed by and construed in accordance with the laws of the Republic of Turkey, without regard to conflict of law provisions.'
        }
      ]
    },
    {
      title: '14. Apple-Specific Terms',
      content: [
        {
          text: 'These Terms are between you and Enes Gunumdogdu, not with Apple. Apple has no obligation to furnish maintenance or support services for the App. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if applicable); beyond that, Apple has no warranty obligation. Apple is not responsible for addressing any claims relating to the App. Apple is a third-party beneficiary of these Terms.'
        }
      ]
    },
    {
      title: '15. Severability',
      content: [
        {
          text: 'If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.'
        }
      ]
    },
    {
      title: '16. Contact Us',
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
      appName="Magnetify"
      lastUpdated="April 11, 2026"
      intro={`Please read these Terms of Use ("Terms") carefully before using the Magnetify app ("App") developed by Enes Gunumdogdu ("we", "us", or "our"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.`}
      sections={sections}
    />
  )
}

export default MagnetifyTermsOfUse
