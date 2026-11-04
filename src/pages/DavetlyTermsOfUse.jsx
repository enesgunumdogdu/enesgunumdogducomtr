import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DavetlyTermsOfUse() {
  useDocumentTitle('Davetly - Terms of Use')

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        {
          text: 'By downloading, installing, or using the App, you agree to be bound by these Terms and by Apple\'s Licensed Application End User License Agreement (EULA). If these Terms and Apple\'s EULA conflict, these Terms apply to the extent permitted. If you do not agree to these Terms, do not use the App.'
        }
      ]
    },
    {
      title: '2. Description of Service',
      content: [
        {
          text: 'Davetly is an application for creating invitations for weddings, engagements, birthdays, and other events. You enter details such as names, date, venue, address, and an optional phone number or message, can add a photo, choose a design, and export your invitation as an image or PDF through the iOS share sheet. The App requires no account and works without a server of its own.'
        }
      ]
    },
    {
      title: '3. Free Version and Purchases',
      content: [
        {
          subtitle: '3.1 Free Version',
          items: [
            'The free version includes six designs',
            'Images exported with the free version carry a small "Made with Davetly" mark'
          ]
        },
        {
          subtitle: '3.2 Davetly Plus and Davetly Pro',
          items: [
            'Davetly Plus and Davetly Pro are one-time, non-consumable in-app purchases',
            'Davetly Plus unlocks every design except the photo designs, and exports images without the "Made with Davetly" mark',
            'Davetly Pro includes everything in Davetly Plus, and adds print-ready PDF export (A5, A6, and 5×7) and the photo designs',
            'The price of each purchase in your local currency is shown in the App before you buy',
            'There are no subscriptions and nothing renews automatically: you pay once and keep what you bought'
          ]
        },
        {
          subtitle: '3.3 Payment',
          items: [
            'Payment is charged to your Apple ID account at confirmation of purchase',
            'Payment is handled entirely by Apple. We never see your payment details'
          ]
        },
        {
          subtitle: '3.4 Restoring Purchases',
          text: 'You can restore your purchases on any device signed in with the same Apple ID by tapping Restore Purchases in the App.'
        },
        {
          subtitle: '3.5 Refunds',
          text: 'Refunds are handled by Apple according to its policies. You can request a refund at reportaproblem.apple.com.'
        }
      ]
    },
    {
      title: '4. Your Content',
      content: [
        {
          subtitle: '4.1 Ownership',
          text: 'You keep all rights to the text and photos you add to your invitations. They are stored on your device and are not uploaded to us.'
        },
        {
          subtitle: '4.2 Responsibility',
          text: 'You are responsible for the content you create and share with the App, and you must have the right to use any photo you add. Do not use the App to create unlawful, misleading, offensive, or infringing material, or to share other people\'s personal information without their permission.'
        }
      ]
    },
    {
      title: '5. Intellectual Property',
      content: [
        {
          subtitle: '5.1 Designs and App',
          text: 'The designs, artwork, illustrations, and code of the App are owned by Enes Günümdoğdu or his licensors and are protected by intellectual property laws. Fonts included in the App remain the property of their authors; open-source fonts are used under the SIL Open Font License.'
        },
        {
          subtitle: '5.2 Using Your Exported Invitations',
          text: 'You may print, share, and send invitations you export from the App for personal and event purposes, including events you organize for others. You may not sell or redistribute the designs themselves as templates or artwork.'
        },
        {
          subtitle: '5.3 Restrictions',
          text: 'You may not:',
          items: [
            'Copy, modify, or distribute the App or its designs apart from your exported invitations',
            'Reverse engineer or decompile the App',
            'Circumvent the limits of the free version, or remove the "Made with Davetly" mark by means other than a purchase',
            'Remove any copyright or proprietary notices'
          ]
        }
      ]
    },
    {
      title: '6. Privacy',
      content: [
        {
          text: 'Your use of the App is also governed by our Privacy Policy, available at https://enesgunumdogdu.com.tr/davetly-privacy-policy'
        }
      ]
    },
    {
      title: '7. Third-Party Services',
      content: [
        {
          text: 'The App uses third-party services including Firebase Analytics and Firebase Crashlytics (Google), RevenueCat, and Apple\'s App Store. Your use of the App is also subject to these providers\' terms.'
        }
      ]
    },
    {
      title: '8. Disclaimers',
      content: [
        {
          subtitle: '8.1 "As Is" Service',
          text: 'The App is provided "as is" and "as available" without warranties of any kind, either express or implied.'
        },
        {
          subtitle: '8.2 Check Before You Send',
          text: 'Check the names, dates, addresses, and other details on your invitation before sharing or printing it. Colours and sizes of printed invitations depend on the printer and paper used.'
        },
        {
          subtitle: '8.3 Your Data',
          text: 'Your invitations are stored only on your device. If you delete the App or lose your device, your invitations cannot be recovered by us.'
        }
      ]
    },
    {
      title: '9. Limitation of Liability',
      content: [
        {
          text: 'To the maximum extent permitted by law, Enes Günümdoğdu shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.'
        }
      ]
    },
    {
      title: '10. Changes to Terms',
      content: [
        {
          text: 'We may modify these Terms at any time. Changes will be posted on this page with a new "Last updated" date. Continued use of the App after changes constitutes acceptance of the modified Terms.'
        }
      ]
    },
    {
      title: '11. Governing Law',
      content: [
        {
          text: 'These Terms are governed by the laws of the Republic of Türkiye, without regard to conflict of law principles. This does not limit any mandatory consumer rights you have under the laws of the country where you live.'
        }
      ]
    },
    {
      title: '12. Contact',
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
      appName="Davetly"
      effectiveDate="November 4, 2026"
      lastUpdated="November 4, 2026"
      intro={`Please read these Terms of Use ("Terms") carefully before using the Davetly: Invitation Maker application for iOS (the "App"), developed by Enes Günümdoğdu, an individual developer based in Türkiye ("we," "our," or "us").`}
      sections={sections}
    />
  )
}

export default DavetlyTermsOfUse
