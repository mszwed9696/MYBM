import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Terms of Service | Mind Your Business Media",
  description: "Terms of Service for Mind Your Business Media. Review our terms and conditions for using our website and services.",
});

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-[#1a1a2e] to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: "\'Georgia\', serif" }}>Terms of Service</h1>

        <p className="text-gray-300 mb-8">
          <strong>Last Updated:</strong> January 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300">
              These Terms of Service ("Terms") govern your access to and use of the Mind Your Business Media website
              and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by
              these Terms. If you do not agree to these Terms, do not use our Services.
            </p>
            <p className="text-gray-300 mt-4">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the
              new Terms on this page. Your continued use of the Services after such modifications constitutes your
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
            <p className="text-gray-300 mb-4">
              Mind Your Business Media provides marketing services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Fractional Chief Marketing Officer (CMO) services</li>
              <li>Paid advertising management (Google Ads, Facebook Ads, LinkedIn Ads, YouTube Ads)</li>
              <li>Marketing strategy development and consulting</li>
              <li>Funnel optimization and conversion rate optimization</li>
              <li>Content marketing and SEO services</li>
              <li>Marketing automation setup and management</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Specific services, deliverables, pricing, and terms will be outlined in individual service agreements
              or statements of work executed between Mind Your Business Media and the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility and Account Registration</h2>
            <p className="text-gray-300">
              To use our Services, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Be at least 18 years of age</li>
              <li>Have the legal authority to enter into binding contracts</li>
              <li>Provide accurate, current, and complete information when requested</li>
              <li>Maintain the accuracy of your account information</li>
              <li>Be responsible for all activity under your account</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We reserve the right to refuse service, terminate accounts, or cancel applications at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Partnership Application Process</h2>
            <p className="text-gray-300 mb-4">
              Our partnership application process includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Submission of a partnership application form</li>
              <li>Review of application by our team (typically within 24-48 hours)</li>
              <li>Strategy call if you meet our qualification criteria</li>
              <li>Execution of a formal service agreement if both parties agree to move forward</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We work exclusively with businesses generating a minimum of $100,000 in monthly revenue. Applications that
              do not meet our criteria may be declined. Acceptance into our partnership program is at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Revenue Guarantee</h2>
            <p className="text-gray-300 mb-4">
              Mind Your Business Media offers a 30% net revenue increase guarantee subject to the following terms:
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Guarantee Terms</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Client must be generating minimum $100,000 in monthly revenue at partnership start</li>
              <li>Partnership agreement must be for a minimum 12-month term</li>
              <li>Baseline revenue is documented based on 3-6 months of historical data</li>
              <li>Target is 30% increase in average net monthly revenue after 12 months</li>
              <li>If target is not met, we continue services at no cost until 30% increase is achieved</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Client Obligations for Guarantee</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Provide timely access to required data, assets, and team members</li>
              <li>Maintain agreed-upon advertising spend budget</li>
              <li>Fulfill sales and closing responsibilities for leads generated</li>
              <li>Not make major changes to pricing, offer, or business model without consultation</li>
              <li>Provide honest and transparent financial reporting</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Guarantee Exclusions</h3>
            <p className="text-gray-300 mb-4">The guarantee does not apply if:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Client reduces advertising spend below agreed minimums without our approval</li>
              <li>Client fails to fulfill sales responsibilities for qualified leads</li>
              <li>Client does not provide requested access, assets, or information within reasonable timeframes</li>
              <li>Client makes unilateral business model changes contradicting agreed strategy</li>
              <li>Client terminates partnership before 12-month period completes</li>
              <li>Circumstances beyond our control (force majeure events, platform policy changes, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
            <p className="text-gray-300 mb-4">
              Payment terms will be specified in individual service agreements and may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Monthly retainer fees for ongoing services</li>
              <li>Setup or onboarding fees (if applicable)</li>
              <li>Separate advertising spend budgets (paid directly to platforms)</li>
              <li>Payment is typically due on the 1st of each month</li>
              <li>Late payments may incur fees and/or service suspension</li>
            </ul>
            <p className="text-gray-300 mt-4">
              All fees are non-refundable unless otherwise specified in your service agreement. Pricing is subject to
              change with 30 days' notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property Rights</h2>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Our Content</h3>
            <p className="text-gray-300 mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of
              Mind Your Business Media or its licensors and is protected by copyright, trademark, and other intellectual
              property laws. You may not reproduce, distribute, modify, or create derivative works without our express
              written permission.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Work Product</h3>
            <p className="text-gray-300 mb-4">
              Upon full payment, you will own:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Custom creative assets created specifically for your campaigns</li>
              <li>Campaign copy and messaging developed for your business</li>
              <li>Custom strategy documents and reports</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We retain ownership of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Our proprietary processes, frameworks, and methodologies</li>
              <li>Template documents and tools</li>
              <li>Data and insights used across multiple clients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Confidentiality</h2>
            <p className="text-gray-300">
              Both parties agree to maintain confidentiality of any proprietary or sensitive information shared during
              the partnership. This includes business strategies, financial data, customer information, and trade secrets.
              Confidentiality obligations survive termination of the service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Mind Your Business Media shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages</li>
              <li>Our total liability shall not exceed the amount paid by you for services in the 12 months preceding
                  the claim</li>
              <li>We are not responsible for third-party platform changes, policy updates, or service interruptions</li>
              <li>We do not guarantee specific results from advertising campaigns (except as outlined in our revenue
                  guarantee)</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Some jurisdictions do not allow the limitation or exclusion of liability, so some of the above limitations
              may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimers</h2>
            <p className="text-gray-300 mb-4">
              Our Services are provided "as is" and "as available" without warranties of any kind, either express or
              implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Uninterrupted or error-free service</li>
            </ul>
            <p className="text-gray-300 mt-4">
              We do not warrant that the Services will meet your specific requirements or that any defects will be
              corrected. Marketing results depend on many factors beyond our control, including market conditions,
              competition, and execution of sales processes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify, defend, and hold harmless Mind Your Business Media and its officers, directors,
              employees, and agents from any claims, liabilities, damages, losses, and expenses (including legal fees)
              arising out of or related to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Content or information you provide to us</li>
              <li>Your products, services, or business practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
            <p className="text-gray-300 mb-4">
              Either party may terminate the service agreement according to the terms specified in the individual
              agreement, typically with 30 days' written notice.
            </p>
            <p className="text-gray-300 mb-4">
              We reserve the right to terminate or suspend your access immediately, without notice, for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Breach of these Terms or service agreement</li>
              <li>Non-payment of fees</li>
              <li>Fraudulent or illegal activity</li>
              <li>Conduct that damages our reputation or business</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Upon termination, you remain obligated to pay for services rendered through the termination date. Some
              provisions of these Terms survive termination, including intellectual property rights, confidentiality,
              and limitation of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Dispute Resolution</h2>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Governing Law</h3>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without
              regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Arbitration</h3>
            <p className="text-gray-300 mb-4">
              Any dispute arising from or relating to these Terms or our Services shall be resolved through binding
              arbitration, except that either party may seek injunctive relief in court for intellectual property
              infringement or confidentiality breaches.
            </p>
            <p className="text-gray-300">
              Arbitration will be conducted by a single arbitrator in accordance with the rules of the American
              Arbitration Association. The arbitrator's decision shall be final and binding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Miscellaneous</h2>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Entire Agreement</h3>
            <p className="text-gray-300 mb-4">
              These Terms, together with any service agreement and our Privacy Policy, constitute the entire agreement
              between you and Mind Your Business Media regarding the Services.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Severability</h3>
            <p className="text-gray-300 mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, that provision shall be enforced
              to the maximum extent possible, and the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Waiver</h3>
            <p className="text-gray-300 mb-4">
              No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
              Our failure to enforce any right or provision shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Assignment</h3>
            <p className="text-gray-300 mb-4">
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent.
              We may assign these Terms without restriction.
            </p>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">Force Majeure</h3>
            <p className="text-gray-300 mb-4">
              Neither party shall be liable for any failure or delay in performance due to circumstances beyond their
              reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or
              government actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-white font-semibold">Mind Your Business Media</p>
              <p className="text-gray-300">Email: legal@mindyourbusinessmedia.com</p>
              <p className="text-gray-300">Website: www.mindyourbusinessmedia.com</p>
            </div>
          </section>

          <section className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="text-white font-semibold mb-2">Acknowledgment</p>
            <p className="text-gray-300">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these
              Terms of Service. If you do not agree to these Terms, please discontinue use of our Services immediately.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
