import LegalPage from '../components/LegalPage'
import useDocumentTitle from '../hooks/useDocumentTitle'

function NsAiTermsOfUse() {
  useDocumentTitle('ns-ai - Terms of Use')

  const sections = [
    {
      title: '1. Eligibility',
      content: [
        {
          text: 'You must be at least 13 years old (or the minimum age required in your country to consent to digital services) to use the Service. If you are a minor in your jurisdiction, you confirm that your parent or legal guardian has read and agreed to these Terms on your behalf and supervises your use of the Service.'
        },
        {
          text: 'You may not use the Service if you are barred from doing so under applicable law (including export control or sanctions law) or if your account has previously been terminated for violation of these Terms.'
        }
      ]
    },
    {
      title: '2. The Service',
      content: [
        {
          text: 'ns-ai · AI Photo Studio is an AI-powered creative tool that lets you:',
          items: [
            'generate images from text prompts ("text-to-image"),',
            'transform an image you provide using a prompt ("image-to-image"),',
            'generate short videos from text prompts ("text-to-video"),',
            'animate a still image you provide ("image-to-video"),'
          ],
          note: 'using third-party AI providers (currently Google Gemini for images and Kling for video; additional providers may be added). The available features, models, providers, durations, and resolutions may change over time and may differ between regions and pricing tiers.'
        }
      ]
    },
    {
      title: '3. Account and Sign-In',
      content: [
        {
          text: 'You access the Service through Sign in with Apple. You are responsible for maintaining the confidentiality of your Apple ID credentials and for all activity under your account. You agree to provide accurate information and to keep it up to date.'
        },
        {
          text: 'You must not:',
          items: [
            'share your account with others or allow others to use it,',
            'impersonate another person or sign in using a false identity,',
            'create accounts by automated means or for purposes that violate these Terms.'
          ]
        },
        {
          text: 'You may delete your account at any time from inside the App (Profile → Account → Delete Account) or by reaching out through our contact page.'
        }
      ]
    },
    {
      title: '4. Credits, Subscriptions, and Purchases',
      content: [
        {
          subtitle: 'a) How credits work',
          text: 'Generations consume "credits". Different generation modes, models, and durations have different credit costs, which are displayed in the App before you confirm a generation. The credit cost may change from time to time, but the price shown to you at the moment of confirmation is the price charged.'
        },
        {
          subtitle: 'b) Credit top-up packs (consumable in-app purchases)',
          text: 'You can buy non-expiring credit top-up packs. Top-up credits do not expire while your account is active.'
        },
        {
          subtitle: 'c) Subscriptions (auto-renewable in-app purchases)',
          text: 'We offer auto-renewable subscriptions (e.g., weekly and yearly plans) that grant a recurring credit allowance and may unlock additional features. The subscription details are described on the in-app paywall before you purchase.'
        },
        {
          subtitle: 'Apple-Mandated Disclosures for Auto-Renewable Subscriptions',
          items: [
            'Payment will be charged to your Apple ID account at confirmation of purchase.',
            'The subscription automatically renews for the same period and at the same price unless auto-renewal is turned off at least 24 hours before the end of the current period.',
            'Your account will be charged for renewal within 24 hours prior to the end of the current period.',
            'You can manage and cancel your subscription by going to your Apple ID account settings on your device after purchase.',
            'Any unused portion of a free trial period (if offered) will be forfeited when you purchase a subscription, where applicable.',
            'Subscription credits granted for a billing period generally expire at the end of that period and are not rolled over, unless the in-app paywall expressly states otherwise.'
          ]
        },
        {
          subtitle: 'd) Refunds',
          text: 'All purchases are processed by Apple under Apple\'s standard terms. Refund requests must be made through Apple. You can request a refund at https://reportaproblem.apple.com.',
          note: 'We may, at our sole discretion and where required by applicable law, refund credits inside the App if a generation fails for reasons attributable to the Service. Such in-app credit refunds are not equivalent to a monetary refund and are not redeemable for cash.'
        },
        {
          subtitle: 'e) Taxes',
          text: 'Prices include applicable taxes where Apple collects them. You are responsible for any other taxes that may apply.'
        }
      ]
    },
    {
      title: '5. Acceptable Use — What You May Not Do',
      content: [
        {
          text: 'You agree NOT to use the Service to create, upload, request, distribute, or share content that:',
          items: [
            'is illegal under applicable law,',
            'contains child sexual abuse material (CSAM) or sexualizes minors in any way,',
            'is non-consensual intimate imagery, "deepfake" pornography, or sexual content depicting real, identifiable people without their explicit consent,',
            'promotes terrorism, violent extremism, mass violence, or self-harm,',
            'contains hate speech, harassment, threats, doxxing, or content that targets people based on protected characteristics,',
            'impersonates a real person or entity in a deceptive or harmful way (including political deepfakes intended to mislead),',
            'depicts real, identifiable people in defamatory, invasive, or misleading scenarios without their consent,',
            'infringes intellectual property, trademark, publicity, or privacy rights of any party,',
            'contains malware, exploits, or attempts to bypass security or rate limits,',
            'is intended to circumvent credit accounting, abuse free trials, or obtain features without paying.'
          ]
        },
        {
          text: 'You also agree NOT to:',
          items: [
            'reverse-engineer, decompile, or attempt to extract source code or model weights from the Service or the underlying AI providers,',
            'access the Service through unofficial clients, bots, scrapers, or automated tools,',
            'resell, rent, sublicense, or redistribute the Service or generation capacity to third parties without our prior written consent,',
            'use the Service to build a competing AI product or to train another machine learning model.'
          ]
        },
        {
          text: 'You must also comply with the acceptable use policies of the underlying AI providers used by the Service (e.g., Google\'s Generative AI Prohibited Use Policy and Kling\'s terms). Some prompts and inputs may be rejected or filtered by these providers, by us, or by safety classifiers, and credits may be refunded to your in-app balance for content that we identify as a Service-side failure.'
        },
        {
          note: 'We may, at our sole discretion, suspend or terminate access for users who violate these rules.'
        }
      ]
    },
    {
      title: '6. Your Content and Outputs',
      content: [
        {
          subtitle: 'a) Your inputs',
          text: 'You retain ownership of the prompts, photos, and other materials you submit to the Service ("User Content"). You represent and warrant that you have all rights, licenses, and consents necessary to submit them and to permit the processing described in these Terms and the Privacy Policy.'
        },
        {
          subtitle: 'b) License to operate the Service',
          text: 'You grant us a limited, worldwide, non-exclusive, royalty-free license to host, store, transmit, process, and display your User Content and the resulting outputs solely as needed to operate, secure, and improve the Service for you, including transmitting them to the AI provider that fulfills your request. This license ends when you delete the relevant content or your account, except for backups and logs we may retain for limited periods or as legally required.'
        },
        {
          subtitle: 'c) No training on your content',
          text: 'We do not use your User Content or your outputs to train AI models, and we contractually expect our providers to honor this for content sent through the Service.'
        },
        {
          subtitle: 'd) Outputs',
          text: 'Subject to your compliance with these Terms and the underlying provider\'s terms, you may use generated outputs you create through the Service for personal or commercial purposes. You acknowledge, however, that:',
          items: [
            'AI-generated outputs may not be unique. Other users may produce similar or identical outputs from similar prompts.',
            'Some jurisdictions may not recognize copyright in fully AI-generated material.',
            'Outputs may inadvertently resemble existing works, real people, or trademarks. You are responsible for clearing any third-party rights before commercial use.'
          ]
        },
        {
          subtitle: 'e) Disclaimer about AI outputs',
          text: 'AI-generated content is produced automatically and may be inaccurate, biased, offensive, or unsuitable for your purpose. The Service is provided for creative and entertainment use only. Do not rely on AI-generated content as professional advice (medical, legal, financial, safety-critical, etc.).'
        }
      ]
    },
    {
      title: '7. Intellectual Property',
      content: [
        {
          text: 'The Service, including the App\'s source code, design, branding, logos, text, graphics, and the underlying software, is owned by the operator or its licensors and is protected by intellectual property laws. Except for the limited rights expressly granted to you in these Terms, no rights are granted to you, by implication or otherwise, in the Service.'
        },
        {
          text: '"ns-ai" and "ns-ai · AI Photo Studio" are trademarks or service marks of the operator. You may not use them without prior written permission.'
        }
      ]
    },
    {
      title: '8. Third-Party Services',
      content: [
        {
          text: 'The Service relies on third-party services, including Apple, Google / Firebase, Google Gemini, Kling, and others. Your use of those services is also subject to their own terms and privacy policies. We are not responsible for the practices of third parties.'
        },
        {
          text: 'These Terms are between you and the operator. Apple is not a party to these Terms.'
        }
      ]
    },
    {
      title: '9. Apple End User License Terms',
      content: [
        {
          text: 'The following acknowledgments apply because the App is delivered through the Apple App Store, in addition to anything else in these Terms:',
          items: [
            'These Terms are concluded between you and the operator only, and not with Apple. Apple is not responsible for the App or its content.',
            'The license granted to you for the App is limited to a non-transferable license to use the App on any Apple-branded products that you own or control, as permitted by the Apple Media Services Terms and Conditions.',
            'Apple has no obligation to furnish any maintenance or support services with respect to the App.',
            'In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price for the App (if any). To the maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever with respect to the App.',
            'The operator, not Apple, is responsible for addressing any claims relating to the App or your use of it, including product liability, legal/regulatory compliance, and consumer protection claims.',
            'The operator, not Apple, is responsible for the investigation, defense, settlement, and discharge of any third-party claim that the App or your use of it infringes that third party\'s intellectual property rights.',
            'You represent and warrant that you are not located in a country subject to a U.S. Government embargo or designated by the U.S. Government as a "terrorist supporting" country, and that you are not on any U.S. Government list of prohibited or restricted parties.',
            'Apple and Apple\'s subsidiaries are third-party beneficiaries of these Terms, and upon your acceptance, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary.'
          ]
        }
      ]
    },
    {
      title: '10. Suspension and Termination',
      content: [
        {
          text: 'We may suspend, restrict, or terminate your access to the Service, in whole or in part, at any time and without prior notice, if we reasonably believe that:',
          items: [
            'you have violated these Terms or applicable law,',
            'your activity creates risk or possible legal exposure for us or other users,',
            'your account is being used fraudulently or has been compromised, or',
            'continued provision of the Service to you is no longer commercially viable.'
          ]
        },
        {
          text: 'You may stop using the Service at any time. Sections that by their nature are intended to survive termination (including ownership, disclaimers, indemnity, limitation of liability, and dispute provisions) will survive.'
        }
      ]
    },
    {
      title: '11. Disclaimer of Warranties',
      content: [
        {
          text: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.'
        },
        {
          text: 'WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM HARMFUL COMPONENTS, OR THAT GENERATED OUTPUTS WILL MEET YOUR EXPECTATIONS, BE ACCURATE, OR BE FREE FROM INFRINGEMENT.'
        },
        {
          note: 'Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you. In that case, the warranties are limited to the maximum extent permitted by law.'
        }
      ]
    },
    {
      title: '12. Limitation of Liability',
      content: [
        {
          text: 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:',
          items: [
            'THE OPERATOR WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (C) ANY CONTENT OBTAINED FROM THE SERVICE; OR (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.',
            'THE OPERATOR\'S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE IS LIMITED TO THE GREATER OF (I) THE AMOUNT YOU PAID THROUGH THE APP IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, AND (II) USD 50.'
          ],
          note: 'These limitations form an essential basis of the bargain between you and the operator.'
        }
      ]
    },
    {
      title: '13. Indemnification',
      content: [
        {
          text: 'You agree to indemnify, defend, and hold harmless the operator from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with: (a) your access to or use of the Service; (b) your violation of these Terms; (c) your User Content; or (d) your violation of any third-party right, including intellectual property, publicity, or privacy rights.'
        }
      ]
    },
    {
      title: '14. Changes to the Service or These Terms',
      content: [
        {
          text: 'We may add, modify, or discontinue features of the Service at any time. We may also update these Terms from time to time. The "Last updated" date at the top reflects the latest revision. Material changes will be communicated through the App or by other reasonable means. Your continued use of the Service after the changes take effect means you accept the updated Terms. If you do not accept the changes, you must stop using the Service and may delete your account.'
        }
      ]
    },
    {
      title: '15. Governing Law and Disputes',
      content: [
        {
          text: 'These Terms are governed by the laws of the Republic of Türkiye, without regard to its conflict-of-law principles. Subject to mandatory consumer protection rules in your country of residence, the courts and enforcement offices of Istanbul, Türkiye, shall have exclusive jurisdiction over any dispute arising out of or in connection with these Terms or the Service.'
        },
        {
          text: 'If you are a consumer in the European Union or another jurisdiction that grants you mandatory rights, nothing in these Terms removes those rights.'
        }
      ]
    },
    {
      title: '16. Miscellaneous',
      content: [
        {
          items: [
            'Entire agreement. These Terms and the Privacy Policy are the entire agreement between you and the operator regarding the Service.',
            'Severability. If any provision is held unenforceable, the remaining provisions remain in effect.',
            'No waiver. Failure to enforce any provision is not a waiver.',
            'Assignment. You may not assign these Terms without our written consent. We may assign them to an affiliate or in connection with a merger, acquisition, or sale of assets.',
            'Force majeure. We are not liable for failures caused by events beyond our reasonable control.',
            'Notices. We may give notice through the App, in-product banners, or by email to the address associated with your account.'
          ]
        }
      ]
    },
    {
      title: '17. Contact Us',
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
      appName="ns-ai · AI Photo Studio"
      effectiveDate="May 9, 2026"
      lastUpdated="May 9, 2026"
      intro={`These Terms of Use ("Terms") form a binding agreement between you and Enes Günümdoğdu (sole developer), the operator of the iOS application "ns-ai · AI Photo Studio" (the "App") and the related backend services (collectively, the "Service"). By downloading, installing, signing in to, or using the App, you confirm that you have read, understood, and agreed to these Terms and to our Privacy Policy. If you do not agree, do not use the Service.`}
      sections={sections}
    />
  )
}

export default NsAiTermsOfUse
