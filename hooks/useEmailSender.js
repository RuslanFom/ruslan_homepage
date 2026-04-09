import { useState } from 'react'

export const useEmailSender = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', content: '' })

  const sendEmail = async (form, t) => {
    setLoading(true)
    setMessage({ type: '', content: '' })

    try {
      const res = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          captchaToken: form.captchaToken,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        console.error('Contact form API error:', res.status, data)
        const byCode = {
          captcha_failed: t('form.errorCaptcha'),
          email_not_configured: t('form.errorConfig'),
        }
        setMessage({
          type: 'error',
          content: byCode[data.error] || t('form.error'),
        })
        return false
      }

      setMessage({ type: 'success', content: t('form.success') })
      return true
    } catch (error) {
      console.error('Error sending email:', error)
      setMessage({ type: 'error', content: t('form.error') })
      return false
    } finally {
      setLoading(false)
    }
  }

  return { sendEmail, loading, message }
}
