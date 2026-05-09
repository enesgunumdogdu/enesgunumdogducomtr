import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CartoonWeatherTermsOfUse() {
  useDocumentTitle('Cartoon Weather - Terms of Use')

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        {
          text: 'By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.'
        }
      ]
    },
    {
      title: '2. Description of Service',
      content: [
        {
          text: 'Cartoon Weather is an application that provides weather forecasts with unique animated themes. The App offers both free and premium features through subscription plans.'
        }
      ]
    },
    {
      title: '3. User Accounts',
      content: [
        {
          subtitle: '3.1 Account Creation',
          text: 'You may use the App as a guest or create an account. Account creation requires a valid email address or authentication through Google/Apple. Guest users have limited features, including saving only one location. Creating an account unlocks additional features such as saving up to 5 locations.'
        },
        {
          subtitle: '3.2 Account Responsibility',
          text: 'You are responsible for maintaining the confidentiality of your account and for all activities under your account.'
        },
        {
          subtitle: '3.3 Account Termination',
          text: 'We reserve the right to suspend or terminate accounts that violate these Terms.'
        }
      ]
    },
    {
      title: '4. Subscriptions and Purchases',
      content: [
        {
          subtitle: '4.1 Subscription Plans',
          items: [
            'Single Plan: Access to 1 premium theme',
            'Pro Plan: Access to 3 premium themes',
            'Premium Plan: Access to all premium themes'
          ]
        },
        {
          subtitle: '4.2 Billing',
          items: [
            'Subscriptions are billed monthly through your Apple ID account',
            'Lifetime purchases are one-time payments',
            'Prices are displayed in your local currency'
          ]
        },
        {
          subtitle: '4.3 Cancellation',
          items: [
            'You may cancel your subscription at any time through your Apple ID settings',
            'Cancellation takes effect at the end of the current billing period',
            'No refunds for partial subscription periods'
          ]
        },
        {
          subtitle: '4.4 Free Trial',
          items: [
            'If offered, free trials automatically convert to paid subscriptions',
            'Cancel before the trial ends to avoid charges'
          ]
        }
      ]
    },
    {
      title: '5. Intellectual Property',
      content: [
        {
          subtitle: '5.1 App Content',
          text: 'All content, including but not limited to themes, animations, graphics, and code, is owned by Cartoon Weather and protected by intellectual property laws.'
        },
        {
          subtitle: '5.2 User License',
          text: 'We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.'
        },
        {
          subtitle: '5.3 Restrictions',
          text: 'You may not:',
          items: [
            'Copy, modify, or distribute the App or its content',
            'Reverse engineer or decompile the App',
            'Use the App for commercial purposes without permission',
            'Remove any copyright or proprietary notices'
          ]
        }
      ]
    },
    {
      title: '6. Weather Data Disclaimer',
      content: [
        {
          subtitle: '6.1 Accuracy',
          text: 'Weather forecasts are provided for informational purposes only. We do not guarantee the accuracy, completeness, or reliability of weather data.'
        },
        {
          subtitle: '6.2 No Liability',
          text: 'We are not liable for any decisions or actions taken based on weather information provided by the App.'
        }
      ]
    },
    {
      title: '7. Privacy',
      content: [
        {
          text: 'Your use of the App is also governed by our Privacy Policy, available at https://enesgunumdogdu.com.tr/cartoon-weather-privacy-policy'
        }
      ]
    },
    {
      title: '8. Third-Party Services',
      content: [
        {
          text: 'The App uses third-party services including Firebase (Google) and weather data providers. Your use of the App is subject to these providers\' terms of service.'
        }
      ]
    },
    {
      title: '9. Disclaimers',
      content: [
        {
          subtitle: '9.1 "As Is" Service',
          text: 'The App is provided "as is" without warranties of any kind, either express or implied.'
        },
        {
          subtitle: '9.2 Service Availability',
          text: 'We do not guarantee uninterrupted or error-free service. The App may be temporarily unavailable for maintenance or updates.'
        }
      ]
    },
    {
      title: '10. Limitation of Liability',
      content: [
        {
          text: 'To the maximum extent permitted by law, Cartoon Weather shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.'
        }
      ]
    },
    {
      title: '11. Indemnification',
      content: [
        {
          text: 'You agree to indemnify and hold harmless Cartoon Weather from any claims, damages, or expenses arising from your violation of these Terms.'
        }
      ]
    },
    {
      title: '12. Changes to Terms',
      content: [
        {
          text: 'We may modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the modified Terms.'
        }
      ]
    },
    {
      title: '13. Governing Law',
      content: [
        {
          text: 'These Terms are governed by the laws of Turkey, without regard to conflict of law principles.'
        }
      ]
    },
    {
      title: '14. Contact',
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
      appName="Cartoon Weather"
      lastUpdated="January 23, 2026"
      intro={`Please read these Terms of Use ("Terms") carefully before using Cartoon Weather ("the App").`}
      sections={sections}
    />
  )
}

export default CartoonWeatherTermsOfUse
