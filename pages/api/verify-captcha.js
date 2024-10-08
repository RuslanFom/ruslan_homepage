export default async function handler(req, res) {
  const token = req.body.captchaToken;

  if (!token) {
    return res.status(400).json({ success: false, message: "Token is missing" });
  }

  const secret = process.env.HCAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(`https://hcaptcha.com/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `response=${token}&secret=${secret}`,
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, message: "Captcha verification failed" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
