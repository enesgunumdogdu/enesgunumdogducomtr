import { useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import ErrorOutline from '@mui/icons-material/ErrorOutline'
import { Button, ExternalLink, SectionHeader } from '../components/ui'
import { contactLinks, person } from '../data/site'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './Contact.css'

// Netlify form contract — keep in sync with the hidden form in index.html:
// form-name "contact", fields name/email/subject/message, honeypot bot-field,
// g-recaptcha-response. Do not rename.
const RECAPTCHA_SITE_KEY = '6Lfnw0osAAAAAJkVJJkdS9R2oFWznsihBAtf7xWf'
const COMPACT_QUERY = '(max-width: 399.98px)'
const MESSAGE_MAX = 5000
const MESSAGE_COUNTER_FROM = 4000

const EMPTY = { name: '', email: '', subject: '', message: '' }
const FIELDS = ['name', 'email', 'subject', 'message']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = (field, value) => {
  const v = value.trim()
  switch (field) {
    case 'name':
      return v ? '' : 'Enter your name.'
    case 'email':
      if (!v) return 'Enter your email address.'
      return EMAIL_RE.test(v) ? '' : 'Enter a valid email address, like name@example.com.'
    case 'subject':
      return v ? '' : 'Enter a subject.'
    case 'message':
      return v ? '' : 'Write a message.'
    default:
      return ''
  }
}

const getCompact = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(COMPACT_QUERY).matches
    : false

function FieldError({ id, children }) {
  if (!children) return null
  return (
    <p id={id} className="field-error">
      <ErrorOutline aria-hidden="true" focusable="false" />
      <span>{children}</span>
    </p>
  )
}

function Contact() {
  useDocumentTitle('Contact')

  const [formData, setFormData] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [sentTo, setSentTo] = useState(null)
  const [captchaValue, setCaptchaValue] = useState(null)
  const [captchaError, setCaptchaError] = useState('')
  const [compact, setCompact] = useState(getCompact)
  const [copied, setCopied] = useState(false)

  const recaptchaRef = useRef(null)
  const successRef = useRef(null)
  const fieldRefs = useRef({})

  // Compact reCAPTCHA (164px) below 400px so the 304px widget never overflows at 320.
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined
    const mql = window.matchMedia(COMPACT_QUERY)
    const onChange = (e) => {
      setCompact(e.matches)
      setCaptchaValue(null) // widget remounts with the new size; old token is gone
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((d) => ({ ...d, [name]: value }))
    if (touched[name] && errors[name]) {
      setErrors((er) => ({ ...er, [name]: validate(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    // Only validate on blur once the user has typed something or already submitted.
    if (!value && !touched[name]) return
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((er) => ({ ...er, [name]: validate(name, value) }))
  }

  const handleCaptcha = (value) => {
    setCaptchaValue(value)
    if (value) setCaptchaError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return

    const nextErrors = {}
    FIELDS.forEach((f) => {
      const msg = validate(f, formData[f])
      if (msg) nextErrors[f] = msg
    })
    setErrors(nextErrors)
    setTouched({ name: true, email: true, subject: true, message: true })

    const firstInvalid = FIELDS.find((f) => nextErrors[f])
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus()
      return
    }
    if (!captchaValue) {
      setCaptchaError("Please confirm you're not a robot.")
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'g-recaptcha-response': captchaValue,
          ...formData,
        }).toString(),
      })
      if (!response.ok) throw new Error(`Form endpoint responded ${response.status}`)

      setSentTo({ name: formData.name.trim() })
      setFormData(EMPTY)
      setTouched({})
      setErrors({})
      setStatus('success')
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    } finally {
      // Tokens are single-use: always require a fresh captcha for the next attempt.
      setCaptchaValue(null)
      recaptchaRef.current?.reset()
    }
  }

  const sendAnother = () => {
    setStatus('idle')
    setSentTo(null)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const describedBy = (field, extra) =>
    [errors[field] && touched[field] ? `${field}-error` : null, extra].filter(Boolean).join(' ') || undefined

  const invalid = (field) => (errors[field] && touched[field] ? true : undefined)

  const submitting = status === 'submitting'
  const messageLength = formData.message.length

  return (
    <div className="page">
      <section className="section" aria-labelledby="contact-title">
        <SectionHeader
          as="h1"
          id="contact-title"
          label="Say hello"
          title="Let's build something worth building."
          lede="I read every message. No auto-responders, no forms that go to a void. If you write, I'll write back."
        />

        <div className="contact-layout">
          {/* ---------- Direct channels ---------- */}
          <div className="contact-direct">
            <h2 className="contact-h2">Email me</h2>
            <p className="contact-lead">
              Best way to reach me: email. I usually reply within a day, faster if the project sounds
              interesting.
            </p>

            <p className="contact-email">
              <ExternalLink href={person.emailHref} className="text-link break-anywhere">
                Send an email
              </ExternalLink>
            </p>
            <div className="contact-copy">
              <Button variant="secondary" onClick={copyEmail}>
                {copied ? 'Copied' : 'Copy address'}
              </Button>
              <span className="visually-hidden" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>
          </div>

          {/* ---------- Elsewhere + facts (after the form on mobile) ---------- */}
          <div className="contact-elsewhere">
            <h2 className="contact-h2">Find me elsewhere.</h2>
            <ul className="contact-links" aria-label="Contact links">
              {/* Email is the big link above; the list keeps the three socials. */}
              {contactLinks.filter((link) => link.id !== 'email').map((link) => (
                <li key={link.id}>
                  <ExternalLink href={link.href} className="contact-link" newTabHint>
                    <span className="contact-link__label">{link.label}</span>
                    <span className="contact-link__handle">{link.handle}</span>
                    <span className="contact-link__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>

            <dl className="contact-facts">
              <div>
                <dt>Location</dt>
                <dd>{person.locationLong}</dd>
              </div>
              <div>
                <dt>Time zone</dt>
                <dd className="contact-facts__mono">{person.timezone}</dd>
              </div>
              <div>
                <dt>Response</dt>
                <dd>{person.replyTime}</dd>
              </div>
            </dl>
          </div>

          {/* ---------- Form ---------- */}
          <div className="contact-form-wrap">
            <h2 className="contact-h2" id="contact-form-title">
              Send a message
            </h2>

            {status === 'success' ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="form-feedback form-feedback--success contact-success"
              >
                <p className="contact-success__title">Message sent.</p>
                <p>
                  {sentTo?.name ? `Thanks, ${sentTo.name}. ` : ''}I'll get back to you soon.
                </p>
                <Button variant="text" onClick={sendAnother}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
                aria-labelledby="contact-form-title"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="visually-hidden" aria-hidden="true">
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div className="form-grid">
                  <div className="field">
                    <label className="field-label" htmlFor="contact-name">
                      Name<span className="field-required" aria-hidden="true"> *</span>
                    </label>
                    <input
                      ref={(el) => {
                        fieldRefs.current.name = el
                      }}
                      id="contact-name"
                      className="field-input"
                      type="text"
                      name="name"
                      autoComplete="name"
                      autoCapitalize="words"
                      enterKeyHint="next"
                      required
                      aria-required="true"
                      aria-invalid={invalid('name')}
                      aria-describedby={describedBy('name')}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FieldError id="name-error">{touched.name && errors.name}</FieldError>
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="contact-email">
                      Email<span className="field-required" aria-hidden="true"> *</span>
                    </label>
                    <input
                      ref={(el) => {
                        fieldRefs.current.email = el
                      }}
                      id="contact-email"
                      className="field-input"
                      type="email"
                      name="email"
                      inputMode="email"
                      autoComplete="email"
                      autoCapitalize="off"
                      spellCheck="false"
                      enterKeyHint="next"
                      required
                      aria-required="true"
                      aria-invalid={invalid('email')}
                      aria-describedby={describedBy('email')}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FieldError id="email-error">{touched.email && errors.email}</FieldError>
                  </div>

                  <div className="field field--full">
                    <label className="field-label" htmlFor="contact-subject">
                      Subject<span className="field-required" aria-hidden="true"> *</span>
                    </label>
                    <input
                      ref={(el) => {
                        fieldRefs.current.subject = el
                      }}
                      id="contact-subject"
                      className="field-input"
                      type="text"
                      name="subject"
                      autoComplete="off"
                      enterKeyHint="next"
                      required
                      aria-required="true"
                      aria-invalid={invalid('subject')}
                      aria-describedby={describedBy('subject')}
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FieldError id="subject-error">{touched.subject && errors.subject}</FieldError>
                  </div>

                  <div className="field field--full">
                    <label className="field-label" htmlFor="contact-message">
                      Message<span className="field-required" aria-hidden="true"> *</span>
                    </label>
                    <textarea
                      ref={(el) => {
                        fieldRefs.current.message = el
                      }}
                      id="contact-message"
                      className="field-input"
                      name="message"
                      rows={6}
                      maxLength={MESSAGE_MAX}
                      autoComplete="off"
                      required
                      aria-required="true"
                      aria-invalid={invalid('message')}
                      aria-describedby={describedBy(
                        'message',
                        messageLength >= MESSAGE_COUNTER_FROM ? 'message-count' : null,
                      )}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FieldError id="message-error">{touched.message && errors.message}</FieldError>
                    {messageLength >= MESSAGE_COUNTER_FROM && (
                      <p id="message-count" className="field-help">
                        {messageLength} / {MESSAGE_MAX} characters
                      </p>
                    )}
                  </div>

                  <div className="field field--full">
                    <div className="contact-captcha">
                      <ReCAPTCHA
                        key={compact ? 'compact' : 'normal'}
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleCaptcha}
                        onExpired={() => setCaptchaValue(null)}
                        theme="light"
                        size={compact ? 'compact' : 'normal'}
                      />
                    </div>
                    <div aria-live="polite">
                      {captchaError ? (
                        <FieldError id="captcha-help">{captchaError}</FieldError>
                      ) : (
                        !captchaValue && (
                          <p id="captcha-help" className="field-help">
                            Complete the captcha to send.
                          </p>
                        )
                      )}
                    </div>
                  </div>

                  <div className="field field--full">
                    {status === 'error' && (
                      <div role="alert" className="form-feedback form-feedback--error contact-error">
                        Couldn't send your message. Your text is still here — try again, or{' '}
                        <ExternalLink href={person.emailHref} className="text-link break-anywhere">
                          email me directly
                        </ExternalLink>
                        .
                      </div>
                    )}
                    <Button
                      type="submit"
                      blockMobile
                      arrow={!submitting}
                      aria-busy={submitting || undefined}
                      aria-disabled={submitting || !captchaValue ? 'true' : undefined}
                      aria-describedby={!captchaValue ? 'captcha-help' : undefined}
                    >
                      {submitting ? 'Sending…' : 'Send message'}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
