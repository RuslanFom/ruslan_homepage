async function verifyHcaptcha(token, secret) {
  const response = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ response: token, secret }).toString(),
  })
  return response.json()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const { name, email, message, captchaToken } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'missing_fields' })
  }
  if (!captchaToken) {
    return res.status(400).json({ error: 'captcha_required' })
  }

  const hcaptchaSecret = process.env.HCAPTCHA_SECRET_KEY
  if (hcaptchaSecret) {
    const captchaData = await verifyHcaptcha(captchaToken, hcaptchaSecret)
    if (!captchaData.success) {
      console.warn('[send-contact-email] hCaptcha failed:', captchaData['error-codes'])
      return res.status(400).json({ error: 'captcha_failed' })
    }
  } else {
    console.warn(
      '[send-contact-email] HCAPTCHA_SECRET_KEY is not set; captcha is not verified server-side'
    )
  }

  const serviceId =
    process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
  const templateId =
    process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
  const publicKey =
    process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAIL_USER_ID
  const toName = process.env.EMAILJS_TO_NAME || process.env.NEXT_PUBLIC_EMAIL_TO_NAME
  const toEmail = process.env.EMAILJS_TO_EMAIL || process.env.NEXT_PUBLIC_EMAIL_TO_EMAIL

  if (!serviceId || !templateId || !publicKey) {
    console.error('[send-contact-email] Missing EmailJS env (service, template, or public key)')
    return res.status(500).json({ error: 'email_not_configured' })
  }

  try {
    const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lib_version: 'next-api',
        user_id: publicKey,
        service_id: serviceId,
        template_id: templateId,
        template_params: {
          from_name: name,
          to_name: toName,
          from_email: email,
          to_email: toEmail,
          message,
        },
      }),
    })

    const responseText = await emailRes.text()
    if (!emailRes.ok) {
      console.error('[send-contact-email] EmailJS:', emailRes.status, responseText)
      return res.status(502).json({ error: 'email_send_failed' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[send-contact-email]', err)
    return res.status(500).json({ error: 'internal_error' })
  }
}
