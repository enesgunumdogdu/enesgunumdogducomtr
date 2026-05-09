import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function NsAiPrivacyPolicy() {
  useDocumentTitle('ns-ai - Privacy Policy')

  const sections = [
    {
      title: '1. Who We Are',
      content: [
        {
          text: 'The App is operated by Enes Günümdoğdu (sole developer / data controller), based in Türkiye. You can reach us through our contact page.'
        },
        {
          text: 'If you have any questions about this policy or your personal information, please reach out via the contact page. For users in the European Economic Area, the United Kingdom, and similar jurisdictions, the operator above acts as the "data controller" for your personal information.'
        }
      ]
    },
    {
      title: '2. Summary (Plain-Language)',
      content: [
        {
          items: [
            'We collect only what we need to run the App: your account, your generation jobs, your purchases and credit balance, device push tokens, basic device and usage telemetry, and crash diagnostics.',
            'We do NOT sell your personal information.',
            'We do NOT use your prompts, uploaded photos, or generated outputs to train AI models — ours or third parties\'.',
            'Generations are produced by third-party AI providers (currently Google Gemini for images, Kling for video). Your prompts and any input images you upload are sent to these providers solely to fulfill your request.',
            'You can sign in with Apple, request deletion of your account, and contact us with privacy questions at any time.'
          ]
        }
      ]
    },
    {
      title: '3. Information We Collect',
      content: [
        {
          text: 'We collect the following categories of information:'
        },
        {
          subtitle: 'a) Account information',
          items: [
            'Apple ID-derived user identifier (Sign in with Apple).',
            'Email address (real or Apple-relay private email, if you choose to share it).',
            'Display name, if provided.',
            'Authentication provider identifier.'
          ]
        },
        {
          subtitle: 'b) Generation content',
          items: [
            'Text prompts you write.',
            'Images you upload as input ("image-to-image" or "image-to-video").',
            'Generated images and videos returned by the AI provider.',
            'Generation parameters (mode, style preset, aspect ratio, model, provider, timestamps, duration, status, attempt count, error codes).'
          ]
        },
        {
          subtitle: 'c) Credits, purchases, and subscriptions',
          items: [
            'In-app purchase transaction identifiers and Apple original transaction identifier.',
            'Subscription product identifier, status, expiration, renewal flag.',
            'Credit balance and an append-only credit ledger (purchases, grants, consumption, refunds).'
          ],
          note: 'We do NOT receive or store your payment card, bank account, or full billing details. Payments are processed by Apple under Apple\'s terms and privacy policy.'
        },
        {
          subtitle: 'd) Device and push information',
          items: [
            'Device push notification token (APNs, exchanged via Firebase Cloud Messaging).',
            'iOS version, device model, app version, locale and timezone.',
            'Crash reports and diagnostic logs (via Firebase Crashlytics).'
          ]
        },
        {
          subtitle: 'e) Usage and analytics',
          items: [
            'Anonymous or pseudonymous events such as: app opens, sign-in attempts, paywall views, purchase events, generation requested/started/completed/failed/cancelled, history opened, result shared, push opened, client errors.',
            'Aggregate counters and error metrics.'
          ]
        },
        {
          subtitle: 'f) Photo library access (only if you grant it)',
          text: 'Access to your photo library is requested only when you save a generated image or video to your device. We do not read or upload your library on your behalf.'
        },
        {
          subtitle: 'g) Information from cookies / local storage',
          text: 'The Service is a native iOS app and does not use website cookies. We use standard iOS local storage (Keychain, UserDefaults, on-device caches) to keep you signed in and to cache UI state.'
        }
      ]
    },
    {
      title: '4. How We Use Information',
      content: [
        {
          text: 'We use the information described above to:',
          items: [
            'Create, secure, and operate your account.',
            'Process your generation requests and deliver the generated outputs back to you.',
            'Calculate and enforce credit balances, charge and refund credits, and manage subscriptions.',
            'Send transactional and feature push notifications you have opted into (e.g. "your video is ready").',
            'Detect, investigate, and prevent abuse, fraud, security incidents, and violations of our Terms of Use.',
            'Diagnose crashes, fix bugs, and improve performance and reliability.',
            'Comply with legal obligations and respond to lawful requests.'
          ],
          note: 'We do NOT use your prompts, uploaded inputs, or generated outputs to train AI models. We do NOT sell your personal information.'
        }
      ]
    },
    {
      title: '5. Legal Bases (GDPR / UK GDPR)',
      content: [
        {
          text: 'If you are in the European Economic Area, United Kingdom, or another region with similar laws, we rely on the following legal bases:',
          items: [
            'Performance of a contract — to provide the Service you requested (account, generations, subscriptions, credits, push notifications).',
            'Legitimate interests — to secure the Service, prevent fraud and abuse, fix crashes, and improve product reliability.',
            'Consent — for permission-gated features such as push notifications and photo library access. You can withdraw consent in iOS Settings at any time.',
            'Legal obligation — to comply with applicable law and lawful requests.'
          ]
        }
      ]
    },
    {
      title: '6. Who We Share With (Processors and Sub-Processors)',
      content: [
        {
          text: 'We share personal information only with service providers who help us run the Service, and only as needed:'
        },
        {
          subtitle: 'a) Apple Inc.',
          text: 'Sign in with Apple, App Store, In-App Purchases, APNs push delivery, Apple Maps, TestFlight (where applicable).'
        },
        {
          subtitle: 'b) Google LLC / Firebase',
          text: 'Authentication, Cloud Firestore, Cloud Storage, Cloud Functions, Cloud Messaging (FCM), Remote Config, Analytics for Firebase, and Crashlytics. Firebase is our core backend.'
        },
        {
          subtitle: 'c) AI providers',
          text: 'Your prompts, parameters, and any input images you upload for a generation are sent to the AI provider that fulfills the request. Currently:',
          items: [
            'Google (Gemini "Nano Banana" image models)',
            'Kling (video models)'
          ],
          note: 'Additional providers may be added (e.g., OpenAI, Runway). When a new provider is enabled, this list will be updated.'
        },
        {
          subtitle: 'd) Payment processing',
          text: 'Handled by Apple. We do not see your payment credentials.'
        },
        {
          text: 'We require service providers to process personal data only on our instructions and to apply appropriate technical and organizational safeguards. We do not sell personal information to anyone.'
        },
        {
          text: 'We may also disclose information when we reasonably believe it is required to comply with law, lawful requests by public authorities, to protect the rights, property, or safety of users or others, or in connection with a merger, acquisition, or sale of all or part of our business.'
        }
      ]
    },
    {
      title: '7. AI Generations and Your Content',
      content: [
        {
          items: [
            'You retain rights to your original inputs (prompts and any photos you upload) and to outputs you generate, subject to our Terms of Use and the rules of the underlying AI providers.',
            'Your prompts and any input images are transmitted to the AI provider selected by the Service to fulfill your request. Each provider has its own privacy and acceptable-use policies that you should review.',
            'We do not use your prompts, inputs, or outputs to train AI models, and we contractually expect our providers to honor this for content sent through our Service.',
            'Generated outputs and your inputs are stored in our Cloud Storage so that you can view them in your in-app history.'
          ]
        }
      ]
    },
    {
      title: '8. Data Retention',
      content: [
        {
          text: 'We retain personal information for as long as your account is active or as needed to provide the Service:',
          items: [
            'Account data: kept while your account exists.',
            'Generation jobs and outputs: kept until you delete them or your account.',
            'Credit ledger entries: retained for accounting integrity for up to ten (10) years after the related transaction, where required by law.',
            'Subscription receipts: retained for the life of the subscription and for legally required record-keeping periods.',
            'Push tokens: deleted when reported invalid by APNs/FCM, when you sign out, or on account deletion.',
            'Crash and analytics data: retained according to Firebase defaults (typically up to 90 days for raw events, longer for aggregated data).'
          ],
          note: 'When data is no longer needed, we delete or anonymize it.'
        }
      ]
    },
    {
      title: '9. Account Deletion',
      content: [
        {
          text: 'You may delete your account at any time from inside the App (Profile → Account → Delete Account) or by reaching out through our contact page.'
        },
        {
          text: 'When you delete your account we delete or anonymize:',
          items: [
            'your user profile,',
            'generation jobs and stored outputs,',
            'credit balance and lock records,',
            'push tokens.'
          ]
        },
        {
          text: 'We may retain limited records (e.g., subscription receipts, tax / accounting data, abuse and security logs) where retention is legally required or necessary to resolve disputes and enforce our agreements.'
        },
        {
          note: 'Deleting the App from your device does not by itself delete your account or backend data — please use the in-app deletion flow.'
        }
      ]
    },
    {
      title: '10. Your Rights',
      content: [
        {
          text: 'Depending on where you live, you may have the right to:',
          items: [
            'access the personal information we hold about you,',
            'correct inaccurate information,',
            'delete your information,',
            'restrict or object to processing,',
            'portability of information you provided,',
            'withdraw consent (where processing is based on consent),',
            'lodge a complaint with your local data protection authority.'
          ],
          note: 'contact-link'
        },
        {
          text: 'If you are a California resident, you also have rights under the CCPA / CPRA (right to know, delete, correct, and opt out of "sale" or "sharing" of personal information). We do not sell or share personal information in the meaning of the CCPA / CPRA.'
        }
      ]
    },
    {
      title: '11. Children\'s Privacy',
      content: [
        {
          text: 'The Service is not directed to children under 13 (or under the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided personal information to us, please reach out via the contact page and we will delete it.'
        }
      ]
    },
    {
      title: '12. Security',
      content: [
        {
          text: 'We use industry-standard technical and organizational measures to protect personal information, including:',
          items: [
            'TLS in transit between the App and our backend and providers.',
            'Encryption at rest for Cloud Firestore and Cloud Storage.',
            'Server-only mutations for sensitive collections (jobs, credit ledger, locks, subscription receipts, pricing). The App holds no AI provider API keys and cannot directly modify pricing or balances.',
            'Least-privilege Firestore and Storage security rules.',
            'Access controls and audit logging on the backend.'
          ],
          note: 'No system is 100% secure. If we become aware of a security incident affecting your information, we will notify you as required by law.'
        }
      ]
    },
    {
      title: '13. International Data Transfers',
      content: [
        {
          text: 'We are based in Türkiye. Our backend providers (Apple, Google) operate data centers in multiple regions, including the United States and the European Union. By using the Service, you understand that your information may be processed in countries other than the one in which you reside, including countries that may have different data protection laws than yours. Where required, we rely on appropriate safeguards such as Standard Contractual Clauses.'
        }
      ]
    },
    {
      title: '14. Push Notifications',
      content: [
        {
          text: 'We ask for permission to send push notifications only after your first successful generation. You can change this at any time in iOS Settings → ns-ai · AI Photo Studio → Notifications. Push tokens are deleted when reported invalid by APNs/FCM or when you sign out.'
        }
      ]
    },
    {
      title: '15. Changes to This Privacy Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the latest revision. Material changes will be communicated through the App or by other reasonable means. Your continued use of the Service after the changes take effect means you accept the updated policy.'
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
      kind="Privacy Policy"
      appName="ns-ai · AI Photo Studio"
      effectiveDate="May 9, 2026"
      lastUpdated="May 9, 2026"
      intro={`This Privacy Policy explains how we collect, use, share, and protect personal information in connection with the iOS application "ns-ai · AI Photo Studio" (the "App") and the related backend services (collectively, the "Service"). By using the Service you confirm that you have read and understood this Privacy Policy.`}
      sections={sections}
    />
  )
}

export default NsAiPrivacyPolicy
