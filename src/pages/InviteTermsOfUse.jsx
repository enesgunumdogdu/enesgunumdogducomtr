import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function InviteTermsOfUse() {
  useDocumentTitle('Invite - Terms of Use')

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        {
          text: 'By downloading, installing, or using the App, you agree to be bound by these Terms and by Apple\'s Licensed Application End User License Agreement. If you do not agree to these Terms, do not use the App.'
        }
      ]
    },
    {
      title: '2. Description of Service',
      content: [
        {
          text: 'Invite is an application for designing invitations for weddings, engagements, henna nights, birthdays, baby showers, openings, and other events, and for exporting them as images and print-ready PDFs. A selection of designs is free to use and export. The other designs and features are available with an Invite Pro subscription.'
        }
      ]
    },
    {
      title: '3. Subscriptions and Purchases',
      content: [
        {
          subtitle: '3.1 Invite Pro',
          items: [
            'Invite Pro unlocks every premium design, photo invitations, and clean exports of those designs',
            'Invite Pro is offered as weekly, monthly, and yearly auto-renewable subscriptions',
            'Prices are shown in the app in your local currency before you subscribe'
          ]
        },
        {
          subtitle: '3.2 Billing and Renewal',
          items: [
            'Payment is charged to your Apple ID account at confirmation of purchase',
            'Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period',
            'Your account is charged for renewal within 24 hours before the end of the current period, at the price of your plan'
          ]
        },
        {
          subtitle: '3.3 Free Trial',
          items: [
            'If a free trial is offered, it converts automatically to a paid subscription at the end of the trial',
            'Cancel at least 24 hours before the trial ends to avoid being charged',
            'Any unused portion of a free trial is forfeited when you purchase a subscription'
          ]
        },
        {
          subtitle: '3.4 Cancellation and Refunds',
          items: [
            'You can manage or cancel your subscription in your Apple ID account settings, or from Settings in the App',
            'Cancellation takes effect at the end of the current billing period',
            'Refunds are handled by Apple according to its policies'
          ]
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
          text: 'You are responsible for the content of your invitations and for having the right to use any photos you add. Do not use the App to create unlawful, misleading, or infringing material.'
        }
      ]
    },
    {
      title: '5. Intellectual Property',
      content: [
        {
          subtitle: '5.1 Designs',
          text: 'The designs, artwork, illustrations, and code of the App are owned by Invite or its licensors and are protected by intellectual property laws.'
        },
        {
          subtitle: '5.2 License to Use Exports',
          text: 'You may print, share, and distribute invitations you export from the App for your own events, including events you organize for others. You may not sell or redistribute the designs themselves, or exports with the preview watermark removed, as templates or artwork.'
        },
        {
          subtitle: '5.3 Restrictions',
          text: 'You may not:',
          items: [
            'Copy, modify, or distribute the App or its designs apart from your exported invitations',
            'Reverse engineer or decompile the App',
            'Circumvent the preview protection of premium designs',
            'Remove any copyright or proprietary notices'
          ]
        }
      ]
    },
    {
      title: '6. Privacy',
      content: [
        {
          text: 'Your use of the App is also governed by our Privacy Policy, available at https://enesgunumdogdu.com.tr/invite-privacy-policy'
        }
      ]
    },
    {
      title: '7. Third-Party Services',
      content: [
        {
          text: 'The App uses third-party services including Firebase (Google), RevenueCat, and Apple StoreKit. Your use of the App is also subject to these providers\' terms.'
        }
      ]
    },
    {
      title: '8. Disclaimers',
      content: [
        {
          subtitle: '8.1 "As Is" Service',
          text: 'The App is provided "as is" without warranties of any kind, either express or implied.'
        },
        {
          subtitle: '8.2 Printing',
          text: 'Colours and sizes of printed invitations depend on the printer and paper used. Check a proof before printing in quantity.'
        }
      ]
    },
    {
      title: '9. Limitation of Liability',
      content: [
        {
          text: 'To the maximum extent permitted by law, Invite shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.'
        }
      ]
    },
    {
      title: '10. Changes to Terms',
      content: [
        {
          text: 'We may modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the modified Terms.'
        }
      ]
    },
    {
      title: '11. Governing Law',
      content: [
        {
          text: 'These Terms are governed by the laws of Turkey, without regard to conflict of law principles.'
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
      appName="Invite"
      lastUpdated="October 17, 2026"
      intro={`Please read these Terms of Use ("Terms") carefully before using the Invite: Invitation Maker mobile application (the "App").`}
      sections={sections}
    />
  )
}

export default InviteTermsOfUse
