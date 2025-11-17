"use client";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cartoon-cream">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <h1 className="font-cartoon text-4xl md:text-5xl font-black uppercase mb-8 text-black text-center">
            Terms of Service
          </h1>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Legal Notice: Terms of Service</span>
            <span>Last Updated: 2025</span>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="font-newspaper text-base text-gray-700 space-y-8 leading-relaxed">
            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of Mind Your Business Media's website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Services Description</h2>
              <p>
                Mind Your Business Media provides marketing strategy, execution, and consulting services to businesses generating $100,000+ in monthly revenue. Our services include but are not limited to: paid advertising management, funnel optimization, content marketing, marketing automation, and fractional CMO services.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Revenue Growth Guarantee</h2>
              <p className="mb-4">
                We guarantee a minimum 30% net revenue increase within the first 12 months of partnership for qualifying clients. The guarantee is subject to the following conditions:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Client must maintain minimum $100,000 monthly revenue at partnership commencement</li>
                <li>Baseline revenue is calculated as the average of the 90 days preceding partnership start</li>
                <li>Client must implement recommended strategies and provide necessary access to marketing platforms</li>
                <li>Growth is measured against verified financial documentation at 6 and 12 month intervals</li>
                <li>If the 30% minimum is not achieved by month 12, we continue providing services at no fee until the guarantee is met</li>
                <li>The guarantee covers service fees only; client remains responsible for advertising spend and third-party tools</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Client Obligations</h2>
              <p className="mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Provide accurate business information and financial documentation for baseline and progress measurement</li>
                <li>Grant timely access to necessary marketing platforms, analytics, and business systems</li>
                <li>Implement recommended strategies and changes within agreed timelines</li>
                <li>Maintain adequate infrastructure and team capacity to handle increased customer volume</li>
                <li>Respond to communications and requests for information within reasonable timeframes</li>
                <li>Pay all fees and advertising costs as outlined in the partnership agreement</li>
                <li>Maintain confidentiality of proprietary strategies and methodologies shared during partnership</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Payment Terms</h2>
              <p className="mb-4">
                Payment terms are specified in individual client agreements. Generally:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Service fees are billed monthly in advance</li>
                <li>Advertising spend is billed separately and paid directly to advertising platforms</li>
                <li>Payment is due within 5 business days of invoice date</li>
                <li>Late payments may result in service suspension and accrue interest at 1.5% per month</li>
                <li>All fees are non-refundable except as required by law or specified in the guarantee</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Partnership Term and Termination</h2>
              <p className="mb-4">
                Partnership agreements typically have a 12-month initial term. Either party may terminate the agreement with 30 days written notice, subject to:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>If client terminates before achieving the 30% guarantee, no refund is provided</li>
                <li>If we terminate without cause, client receives a pro-rated refund of unused service fees</li>
                <li>Either party may terminate immediately for material breach after 15 days written notice without cure</li>
                <li>Upon termination, client retains ownership of all created assets and intellectual property specific to their business</li>
                <li>Confidentiality obligations survive termination indefinitely</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Intellectual Property</h2>
              <p>
                All proprietary methodologies, frameworks, and strategic approaches remain the intellectual property of Mind Your Business Media. Client-specific deliverables (ad creative, landing pages, email copy, etc.) become client property upon full payment. We retain the right to use anonymized case studies and aggregate performance data for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of sensitive business information, financial data, strategic plans, and proprietary methods shared during the partnership. This obligation extends indefinitely beyond partnership termination.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Mind Your Business Media's liability is limited to the total fees paid by client in the 12 months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages. This limitation does not affect our revenue growth guarantee obligations.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Warranties and Disclaimers</h2>
              <p>
                We warrant that services will be performed with professional skill and care. However, marketing results depend on numerous factors beyond our control. Except for the explicit 30% revenue guarantee, services are provided "as is" without warranties of any kind, express or implied.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Indemnification</h2>
              <p>
                Client agrees to indemnify and hold harmless Mind Your Business Media from claims arising from: (a) client's use of our services, (b) violation of these Terms, (c) infringement of third-party rights, or (d) client's business operations, products, or services.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Dispute Resolution</h2>
              <p>
                Any disputes will first be addressed through good-faith negotiation. If unresolved within 30 days, disputes will be settled through binding arbitration in Philadelphia, PA, under the American Arbitration Association's Commercial Arbitration Rules. Each party bears its own costs; arbitrator fees are split equally.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Governing Law</h2>
              <p>
                These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict of law provisions. Any legal action must be brought in the state or federal courts located in Philadelphia, PA.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of services after changes constitutes acceptance. Material changes affecting existing clients will be communicated directly.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Severability</h2>
              <p>
                If any provision of these Terms is found unenforceable, the remaining provisions continue in full force and effect. The unenforceable provision will be modified to the minimum extent necessary to make it enforceable.
              </p>
            </div>

            <div>
              <h2 className="font-cartoon text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Contact Information</h2>
              <p>
                For questions about these Terms, contact us at:<br/>
                <strong>Email:</strong> legal@mindyourbusinessmedia.com<br/>
                <strong>Address:</strong> Mind Your Business Media, Philadelphia, PA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
