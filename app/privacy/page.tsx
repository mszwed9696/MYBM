import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Privacy Policy | Mind Your Business Media",
  description: "Privacy Policy for Mind Your Business Media. Learn how we collect, use, and protect your personal information.",
});

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <p className="text-gray-600 mb-8">
          <strong>Last Updated:</strong> January 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Mind Your Business Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website or use our
              services.
            </p>
            <p className="text-gray-600">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please
              do not access the site or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Fill out application or contact forms</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Request information about our services</li>
              <li>Participate in surveys or promotions</li>
              <li>Communicate with us via email, phone, or other means</li>
            </ul>
            <p className="text-gray-600 mt-4">
              This personal information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name and information</li>
              <li>Business revenue information</li>
              <li>Marketing challenges and business goals</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Device information</li>
              <li>Location data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide, operate, and maintain our services</li>
              <li>Process your partnership applications and inquiries</li>
              <li>Communicate with you about our services, updates, and marketing materials</li>
              <li>Improve and personalize your experience on our website</li>
              <li>Analyze usage and trends to improve our services</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              <li>Comply with legal obligations</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information.
              Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.
            </p>
            <p className="text-gray-600 mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Marketing Cookies:</strong> Track visitors across websites to display relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you
              do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We may use third-party service providers to help us operate our business and website or administer activities
              on our behalf, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Analytics:</strong> Google Analytics, to understand website usage</li>
              <li><strong>Email Marketing:</strong> Email service providers for newsletters and communications</li>
              <li><strong>CRM:</strong> Customer relationship management tools</li>
              <li><strong>Advertising:</strong> Facebook Pixel, Google Ads, LinkedIn Insight Tag for remarketing</li>
              <li><strong>Payment Processing:</strong> Secure payment processors (if applicable)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              These third parties have access to your personal information only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the
              following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our business</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Protection:</strong> To protect our rights, privacy, safety, or property</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
              the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise any of these rights, please contact us using the information provided in Section 12.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
            <p className="text-gray-600">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your
              information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If you become aware that a child has provided us with personal information, please
              contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy
              periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold">Mind Your Business Media</p>
              <p className="text-gray-600">Email: privacy@mindyourbusinessmedia.com</p>
              <p className="text-gray-600">Website: www.mindyourbusinessmedia.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. California Privacy Rights (CCPA)</h2>
            <p className="text-gray-600 mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information held by businesses</li>
              <li>Right to opt-out of sale of personal information (we do not sell your information)</li>
              <li>Right to non-discrimination for exercising your CCPA rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. GDPR Compliance (European Users)</h2>
            <p className="text-gray-600 mb-4">
              If you are located in the European Economic Area (EEA), you have certain rights under the General Data
              Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision-making and profiling</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We process your data based on legitimate interests, contractual necessity, or your consent. You may withdraw
              consent at any time where we rely on consent as the legal basis for processing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
