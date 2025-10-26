import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email } = req.body

    // Validate email
    if (!email || typeof email !== 'string') {
      console.error('Email validation failed: Email is required')
      return res.status(400).json({ error: 'Email is required' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error('Email validation failed: Invalid format', email)
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Environment variables missing:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS,
      })
      return res.status(500).json({ error: 'Email service not configured' })
    }

    console.log('Configuring email transporter...')

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'lipengcheng808@gmail.com',
      subject: 'SnapCoach Android Waitlist Registration',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">New Android Waitlist Registration</h2>
          <p>A new user has joined the SnapCoach Android waitlist!</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0 0 0;"><strong>Registered at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            This is an automated notification from SnapCoach Waitlist System.
          </p>
        </div>
      `,
    }

    // Send email
    console.log('Sending email to:', 'lipengcheng808@gmail.com')
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully!')

    return res.status(200).json({
      success: true,
      message: 'Thank you for joining the waitlist!',
    })
  } catch (error) {
    console.error('Error processing waitlist registration:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error details:', errorMessage)
    return res.status(500).json({
      error: 'Failed to process your request. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
    })
  }
}
