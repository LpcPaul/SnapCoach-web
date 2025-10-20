import express, { Request, Response } from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Waitlist endpoint
app.post('/api/waitlist', async (req: Request, res: Response) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  try {
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'lipengcheng808@gmail.com',
      subject: 'SnapCoach Android Waitlist Registration',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F97316;">New Android Waitlist Registration</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> SnapCoach Website</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was automatically sent from the SnapCoach website waitlist form.
          </p>
        </div>
      `,
      text: `New Android Waitlist Registration\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}\nSource: SnapCoach Website`,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.status(200).json({
      success: true,
      message: 'Thank you for joining the waitlist!'
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({
      error: 'Failed to send email. Please try again later.'
    })
  }
})

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})
