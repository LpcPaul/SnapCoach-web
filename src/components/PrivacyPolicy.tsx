import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg mb-8">Last updated: October 19, 2025</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            This Privacy Policy explains how SnapCoach LLC ("SnapCoach," "we," "us," or "our") collects, uses, and discloses information when you use our services in the United States. The Service is offered only to individuals located in the United States. If you are outside the U.S., please do not use the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1) Who We Are & How to Contact Us</h2>
          <p><strong>Controller:</strong> SnapCoach LLC</p>
          <p><strong>Website:</strong> <a href="https://aisnapcoach.com" className="text-orange-500 hover:text-orange-600">https://aisnapcoach.com</a></p>
          <p><strong>Email:</strong> <a href="mailto:support@aisnapcoach.com" className="text-orange-500 hover:text-orange-600">support@aisnapcoach.com</a></p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2) Scope & Definitions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>"Service"</strong> means the SnapCoach mobile application and the SnapCoach website at <a href="https://aisnapcoach.com" className="text-orange-500 hover:text-orange-600">https://aisnapcoach.com</a> (including support pages).</li>
            <li><strong>"User Content"</strong> means photos, videos, audio, and other media you upload or capture to receive AI guidance.</li>
            <li><strong>"Personal Information"</strong> means information that identifies or could reasonably be linked to an individual or household.</li>
            <li><strong>"Service Provider"</strong> means a vendor processing information for us under contract.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3) What We Collect (Minimal Collection)</h2>
          <p>We collect only what is necessary to run the Service:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Apple-provided anonymized user ID (to operate your account and protect the Service).</li>
            <li>User Content (photos/videos/audio you choose to submit) to provide core features.</li>
            <li>Transient technical data (e.g., IP address in transit) solely to route requests and provide security; we do not retain it beyond what's necessary for the session.</li>
          </ul>
          <p className="mt-4">We do not collect payment card details, precise geolocation, advertising identifiers, analytics profiles, or behavior-based advertising data.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4) How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain the Service and core features you request.</li>
            <li>Operate your account, provide customer support, and protect the Service from abuse.</li>
            <li>Comply with law and enforce our terms.</li>
            <li><strong>AI & model improvement.</strong> We do not use your User Content to train or improve AI models. Our vendors are contractually prohibited from training their own models on your data.</li>
            <li><strong>No identification.</strong> We do not perform facial recognition, voiceprint identification, or attempt to identify people in your content.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5) Retention</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>User Content is kept up to 24 hours to deliver requested functionality, then deleted.</li>
            <li>Apple anonymized user ID is retained for the life of your account and deleted upon account deletion or verified request.</li>
            <li><strong>Backups.</strong> User Content is excluded from backups by design.</li>
            <li>We may retain minimal records where required by law (e.g., to resolve disputes).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6) Cookies & SDKs</h2>
          <p>We do not use advertising or analytics cookies/SDKs. The website/app may use strictly necessary technologies (e.g., session management, security) to function.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7) When We Disclose Information</h2>
          <p>We disclose information only as needed to operate the Service:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> cloud hosting/storage/CDN; AI inference/TTS/STT strictly to process your requests; authentication; customer support. Providers may use data only to perform services for us and must protect it. We maintain a list of our major service-provider categories and can provide additional details upon request. Our contracts prohibit providers from using data to train their own models.</li>
            <li><strong>Legal/Safety:</strong> where required by law or to protect rights, safety, and the Service.</li>
            <li><strong>Business transfers:</strong> in connection with a merger, acquisition, or asset sale (we will notify you of material changes).</li>
            <li><strong>No Sale/Sharing.</strong> We do not sell or share Personal Information for cross-context or behavior-based advertising.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8) Your Privacy Requests</h2>
          <p>
            You can access or delete your information (including account deletion) or ask questions by emailing{' '}
            <a href="mailto:support@aisnapcoach.com" className="text-orange-500 hover:text-orange-600">support@aisnapcoach.com</a>{' '}
            with the subject "Privacy Request." We will verify your identity as appropriate and respond within a reasonable period.
          </p>
          <p className="mt-4"><strong>Appeal.</strong> If we decline your request, you may reply to ask for a further review, and we will take another look.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9) Children's Privacy</h2>
          <p>
            The Service is not directed to children under 13. We do not knowingly collect information from children under 13. If we learn we have done so, we will delete it. Parents/guardians may contact{' '}
            <a href="mailto:support@aisnapcoach.com" className="text-orange-500 hover:text-orange-600">support@aisnapcoach.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10) Security</h2>
          <p>We use technical and organizational measures including encryption in transit and at rest, access controls, least-privilege, and security monitoring. No method of transmission or storage is 100% secure.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11) Purchases</h2>
          <p>If you make a purchase, it is processed by the app marketplace (e.g., Apple App Store). We do not receive or store your full payment card details.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12) Links to Other Sites</h2>
          <p>The Service may contain links to third-party websites or services that we do not operate. We are not responsible for their content or privacy practices. We encourage you to review the privacy policies of those sites.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13) Changes to This Policy</h2>
          <p>We may update this Policy from time to time. If we make material changes, we will notify you in the app or by email and update the "Last updated" date above.</p>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
