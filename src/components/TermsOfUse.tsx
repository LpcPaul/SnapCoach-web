import { Link } from 'react-router-dom'

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Terms of Use
        </h1>
        <p className="text-gray-600 text-lg mb-8">Last updated: October 26, 2025</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            These Terms of Use ("Terms") form a binding agreement between you and SnapCoach (the "Company", "we", "us", or "our"). By accessing or using the SnapCoach mobile application and the aisnapcoach.com website (collectively, the "Service"), you agree to these Terms. If you do not agree, do not use the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Interpretation and Definitions</h2>
          <p>Capitalized words have the meanings below. Singular includes plural and vice versa.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Company:</strong> SnapCoach.</li>
            <li><strong>Country or Region:</strong> People's Republic of China (Mainland).</li>
            <li><strong>Device:</strong> Any device that can access the Service (e.g., phone, tablet, computer).</li>
            <li><strong>Service:</strong> The SnapCoach mobile app and the aisnapcoach.com website, including related content and services.</li>
            <li><strong>Terms:</strong> These Terms of Use.</li>
            <li><strong>Third-Party Services:</strong> Services, products, or content provided by third parties and made available through or linked from the Service (e.g., app stores, cloud storage, analytics).</li>
            <li><strong>User Content:</strong> Photos, videos, text, and other materials that you upload, post, submit, or otherwise make available through the Service.</li>
            <li><strong>Website:</strong> <a href="https://aisnapcoach.com" className="text-orange-500 hover:text-orange-600">aisnapcoach.com</a> (including subdomains) and <a href="https://www.aisnapcoach.com" className="text-orange-500 hover:text-orange-600">www.aisnapcoach.com</a>.</li>
            <li><strong>You:</strong> The individual or entity using the Service.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Acknowledgment & Eligibility</h2>
          <p>You must be 18 years or older to use the Service.</p>
          <p>
            Your use of the Service is also governed by our Privacy Policy, which explains how we collect and use personal information. Please read it carefully before using the Service. Link:{' '}
            <Link to="/privacy-policy" className="text-orange-500 hover:text-orange-600">https://aisnapcoach.com/privacy-policy</Link>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Registration & Security</h2>
          <p>You may need an account to use some features. Provide accurate information and keep your credentials secure. You are responsible for all activities under your account.</p>
          <p>
            Notify us promptly at{' '}
            <a href="mailto:support@aisnapcoach.com" className="text-orange-500 hover:text-orange-600">support@aisnapcoach.com</a>{' '}
            if you suspect unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. License to Use the Service</h2>
          <p>We grant you a limited, non-exclusive, non-transferable, revocable license to install and use the app and to access the Website for your personal or internal business use, subject to these Terms.</p>
          <p>You may not: (a) copy, modify, or create derivative works; (b) reverse engineer or attempt to extract source code except to the extent permitted by law; (c) rent, lease, sell, or sublicense; (d) bypass or disable security features; (e) use the Service in violation of applicable law; or (f) use the Service to develop a competing product.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. User Content; License to Company</h2>
          <p><strong>Ownership:</strong> You retain ownership of your User Content.</p>
          <p><strong>License to us:</strong> By making User Content available, you grant the Company a worldwide, non-exclusive, royalty-free license to use, host, store, reproduce, modify, adapt, translate, create derivative works (only as necessary for technical operations), and display your User Content for the limited purpose of operating, providing, maintaining, protecting, and improving the Service. This license continues for a commercially reasonable period after you remove the content (e.g., in backups), but we will not publicly display removed content after deletion except as required by law or to comply with these Terms.</p>
          <p><strong>No model training:</strong> We do not use User Content to train our own machine-learning models.</p>
          <p><strong>Data retention & deletion:</strong> We aim to delete or irreversibly anonymize User Content within 24 hours after upload or processing completion, except for (i) limited security/abuse logs and (ii) backups retained for a short period. Where deletion is infeasible, we will isolate and restrict further processing.</p>
          <p><strong>Representations:</strong> You represent that you own or have all necessary rights to the User Content and its use as permitted by these Terms, and that it does not violate any third-party rights, laws, or these Terms.</p>
          <p><strong>Moderation:</strong> We may (but have no obligation to) review, remove, or disable access to User Content that we reasonably believe violates these Terms or the law.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upload unlawful, defamatory, harassing, hateful, discriminatory, sexually explicit, or violent content, or content that infringes intellectual property or privacy rights;</li>
            <li>Use the Service for surveillance of individuals without consent, to create facial recognition databases, or otherwise in ways that invade privacy or violate laws;</li>
            <li>Interfere with or disrupt the Service, including by introducing malware, scraping at scale, or overloading infrastructure;</li>
            <li>Misrepresent your identity or affiliation, or attempt to access accounts or data without authorization.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Third-Party Services & Links</h2>
          <p>The Service may link to or integrate with Third-Party Services. We do not control and are not responsible for their content, policies, or practices. Your use of Third-Party Services is at your own risk and may be governed by separate terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Mobile App Stores</h2>
          <p>If you download the app from Apple App Store or Google Play:</p>
          <p><strong>Apple:</strong> These Terms are between you and the Company, not Apple. Apple is not responsible for the app or its content. Apple has no obligation to furnish maintenance or support. To the maximum extent permitted by law, Apple has no warranty obligations. Apple and its subsidiaries are third-party beneficiaries to these Terms and may enforce them.</p>
          <p><strong>Google:</strong> Your use of the app must also comply with Google Play terms and policies.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Fees, Trials, and Subscriptions (if applicable)</h2>
          <p>If the Service includes paid features, we will disclose prices, billing cycles, and terms before purchase. Subscriptions renew automatically unless canceled per platform or account settings.</p>
          <p>Refunds are handled per our refund policy and, for in-app purchases, per the applicable app store rules.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Intellectual Property; Feedback</h2>
          <p>We and our licensors own all rights in the Service and its content (excluding User Content). No rights are granted except as expressly set forth.</p>
          <p>If you submit Feedback, you grant us a perpetual, irrevocable, royalty-free license to use it without restriction or obligation to you.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Copyright Complaints</h2>
          <p>
            If you believe that content available through the Service infringes your copyright, please email{' '}
            <a href="mailto:support@aisnapcoach.com" className="text-orange-500 hover:text-orange-600">support@aisnapcoach.com</a>{' '}
            with a notice containing: (i) identification of the copyrighted work claimed to have been infringed; (ii) identification of the material that is claimed to be infringing (URL or in-app location sufficient to permit us to locate the material); (iii) your name, address, telephone number, and email; (iv) a statement that you have a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; (v) a statement that the information in the notice is accurate, and that you are the copyright owner or authorized to act on the copyright owner's behalf; and (vi) a physical or electronic signature of the copyright owner or a person authorized to act on their behalf.
          </p>
          <p>We may remove or restrict access to the material complained of while we review the notice. Handling of notices will follow applicable laws and our internal policies. Submission of a notice does not constitute our acceptance of jurisdiction in any specific country.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Termination</h2>
          <p>We may suspend or terminate access to the Service immediately and without notice if you breach these Terms or if we believe your use may cause harm or liability. Upon termination, your right to use the Service ceases. Some provisions survive termination (see Section 20).</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Disclaimers</h2>
          <p>The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, secure, or error-free.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, the Company and its suppliers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or loss of profits, revenues, data, goodwill, or other intangible losses.</p>
          <p>Our aggregate liability for all claims relating to the Service will not exceed the amounts you paid to us for the Service in the 12 months before the claim arose or USD $100, whichever is greater. Some jurisdictions do not allow certain limitations; in those cases, the limitation applies to the fullest extent permitted.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Indemnification</h2>
          <p>You will indemnify and hold harmless the Company and its affiliates, officers, employees, and agents from and against any claims, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or relating to your User Content, your use of the Service, or your breach of these Terms or applicable law.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Governing Law; Dispute Resolution</h2>
          <p><strong>Governing law:</strong> These Terms are governed by the laws of the People's Republic of China (Mainland), excluding its conflict-of-laws rules.</p>
          <p>
            <strong>Informal Resolution First:</strong> Before filing a claim, you agree to email{' '}
            <a href="mailto:support@aisnapcoach.com" className="text-orange-500 hover:text-orange-600">support@aisnapcoach.com</a>{' '}
            and attempt to resolve the dispute informally within 30 days.
          </p>
          <p><strong>Arbitration (CIETAC):</strong> Any dispute, controversy, or claim arising out of or relating to these Terms or the Service shall be submitted to the China International Economic and Trade Arbitration Commission (CIETAC) for arbitration. The seat/place of arbitration shall be Beijing, China. The language of the arbitration shall be Chinese. There shall be one arbitrator. The arbitral award shall be final and binding on both parties.</p>
          <p><strong>Injunctive relief:</strong> Either party may seek temporary or preliminary injunctive relief from a court of competent jurisdiction in Mainland China to protect its rights pending final arbitration.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">17. International; EU/UK Consumers</h2>
          <p>If you are an EU/UK consumer, you will benefit from any mandatory consumer protections of your country of residence. Nothing in these Terms limits those rights.</p>
          <p>You are responsible for compliance with local laws when you access the Service from outside Mainland China.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">18. Export & Sanctions Compliance</h2>
          <p>You represent that you are not on any list of sanctioned or restricted parties and that you will comply with all applicable export control and sanctions laws, including those of the People's Republic of China, the United States, the European Union, and other relevant jurisdictions.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">19. Changes to the Service and Terms</h2>
          <p>We may modify the Service and these Terms. For material changes, we will provide at least 30 days' notice by posting on the Website or in-app (and/or by email if you have provided one). Changes take effect on the date indicated. By continuing to use the Service after the effective date, you agree to the new Terms.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">20. Miscellaneous</h2>
          <p><strong>Severability:</strong> If any provision is unenforceable, it will be modified to the minimum extent necessary or severed; the remainder stays in effect.</p>
          <p><strong>Waiver:</strong> A failure to enforce a provision is not a waiver.</p>
          <p><strong>Assignment:</strong> You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</p>
          <p><strong>Entire Agreement:</strong> These Terms and any policies referenced (including the Privacy Policy) constitute the entire agreement between you and us regarding the Service.</p>
          <p><strong>Force Majeure:</strong> We are not liable for delays or failures caused by events beyond our reasonable control.</p>
          <p><strong>Survival:</strong> Sections 5 (to the extent of residual copies), 6–8, 10–20 survive termination.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">21. Contact Us</h2>
          <p>Questions about these Terms?</p>
          <p>
            Email:{' '}
            <a href="mailto:support@aisnapcoach.com" className="text-orange-500 hover:text-orange-600">support@aisnapcoach.com</a>
          </p>
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

export default TermsOfUse
