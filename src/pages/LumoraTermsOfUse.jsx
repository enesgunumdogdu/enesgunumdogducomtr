import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function LumoraTermsOfUse() {
  useDocumentTitle('Lumora - Terms of Use')

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
          text: 'Lumora is a photo editing application for iPhone and iPad. You pick photos with the iOS photo picker, apply hand-crafted presets and adjustments, and save the result to your Photos library. Your photos and edits are stored only on your device. The App requires no account and works without a server of its own.'
        }
      ]
    },
    {
      title: '3. Free Version and Lumora Pro',
      content: [
        {
          subtitle: '3.1 Free Version',
          items: [
            'The free features of the App remain free to use',
            'Photos exported with the free version carry no watermark'
          ]
        },
        {
          subtitle: '3.2 Lumora Pro',
          text: 'Additional features are available with Lumora Pro, offered as:',
          items: [
            'Lumora Pro Monthly: $3.99/month (US price), an auto-renewing subscription',
            'Lumora Pro Lifetime: $19.99 (US price), a one-time, non-consumable purchase that does not renew'
          ],
          note: 'Prices vary by country and region; the exact price in your currency is shown in the App and on the Apple purchase sheet before you confirm.'
        },
        {
          subtitle: '3.3 Payment',
          items: [
            'Payment is charged to your Apple ID account at confirmation of purchase',
            'Payment is handled entirely by Apple. We never see your payment details'
          ]
        },
        {
          subtitle: '3.4 Subscription Renewal',
          items: [
            'Lumora Pro Monthly renews automatically unless it is cancelled at least 24 hours before the end of the current period',
            'Your account will be charged for renewal within 24 hours before the end of the current period',
            'You can manage or cancel your subscription at any time in your Apple Account settings (Settings > your name > Subscriptions)',
            'Cancellation takes effect at the end of the current billing period, and you keep Lumora Pro access until then'
          ]
        },
        {
          subtitle: '3.5 Restoring Purchases',
          text: 'You can restore your purchases on any device signed in with the same Apple ID by tapping Restore Purchases in the App.'
        },
        {
          subtitle: '3.6 Refunds',
          text: 'Refunds are handled by Apple according to its policies. You can request a refund at reportaproblem.apple.com.'
        }
      ]
    },
    {
      title: '4. Your Content',
      content: [
        {
          subtitle: '4.1 Ownership',
          text: 'You keep all rights to the photos you edit with the App. Lumora claims no ownership of your photos or edits. They are stored on your device and are not uploaded to us.'
        },
        {
          subtitle: '4.2 Responsibility',
          text: 'You are responsible for the photos you edit and share with the App, and you must have the right to use them. Do not use the App to create unlawful, misleading, offensive, or infringing material.'
        }
      ]
    },
    {
      title: '5. Intellectual Property',
      content: [
        {
          subtitle: '5.1 Presets and App',
          text: 'The presets, artwork, and code of the App are owned by Enes Günümdoğdu or his licensors and are protected by intellectual property laws.'
        },
        {
          subtitle: '5.2 Using Your Edited Photos',
          text: 'You may use, share, and publish the photos you edit with the App for any lawful purpose. You may not extract, sell, or redistribute the presets themselves.'
        },
        {
          subtitle: '5.3 Restrictions',
          text: 'You may not:',
          items: [
            'Copy, modify, or distribute the App or its presets',
            'Reverse engineer or decompile the App',
            'Circumvent the limits of the free version by means other than a purchase',
            'Remove any copyright or proprietary notices'
          ]
        }
      ]
    },
    {
      title: '6. Privacy',
      content: [
        {
          text: 'Your use of the App is also governed by our Privacy Policy, available at https://enesgunumdogdu.com.tr/lumora-privacy-policy'
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
          subtitle: '8.2 Your Data',
          text: 'Your photos and edits are stored only on your device. If you delete the App or lose your device, edits that you have not saved to your Photos library cannot be recovered by us.'
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
      appName="Lumora"
      effectiveDate="November 7, 2026"
      lastUpdated="November 7, 2026"
      intro={`Please read these Terms of Use ("Terms") carefully before using the Lumora photo editor application for iPhone and iPad (the "App"), developed by Enes Günümdoğdu, an individual developer based in Türkiye ("we," "our," or "us").`}
      sections={sections}
    />
  )
}

export default LumoraTermsOfUse
