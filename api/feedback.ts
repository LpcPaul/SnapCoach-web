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
    const { email, feedback } = req.body

    // Validate email
    if (!email || typeof email !== 'string') {
      console.error('Feedback validation failed: Email is required')
      return res.status(400).json({ error: 'Email is required' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error('Feedback validation failed: Invalid email format', email)
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Validate feedback
    if (!feedback || typeof feedback !== 'string') {
      console.error('Feedback validation failed: Feedback is required')
      return res.status(400).json({ error: 'Feedback is required' })
    }

    if (feedback.trim().length < 10) {
      console.error('Feedback validation failed: Feedback too short')
      return res.status(400).json({ error: 'Please provide more detailed feedback (at least 10 characters)' })
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Environment variables missing:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS,
      })
      return res.status(500).json({ error: 'Email service not configured' })
    }

    console.log('Configuring email transporter for feedback...')

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
      subject: 'SnapCoach User Feedback',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">New User Feedback Received</h2>
          <p>A user has submitted feedback for SnapCoach!</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>User Email:</strong> ${email}</p>
            <p style="margin: 10px 0 0 0;"><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="background-color: #fff7ed; padding: 20px; border-left: 4px solid #f97316; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #333;">Feedback:</h3>
            <p style="margin: 0; white-space: pre-wrap; color: #333;">${feedback}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            This is an automated notification from SnapCoach Feedback System.
          </p>
        </div>
      `,
    }

    // Send email
    console.log('Sending feedback email to:', 'lipengcheng808@gmail.com')
    await transporter.sendMail(mailOptions)
    console.log('Feedback email sent successfully!')

    return res.status(200).json({
      success: true,
      message: 'Thank you for your feedback!',
    })
  } catch (error) {
    console.error('Error processing feedback:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error details:', errorMessage)
    return res.status(500).json({
      error: 'Failed to process your feedback. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
    })
  }
}
