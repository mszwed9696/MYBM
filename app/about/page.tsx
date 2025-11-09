import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About Mind Your Business Media | Marketing Agency for $100k+ Businesses",
  description: "Learn about Mind Your Business Media, the only marketing agency that guarantees 30% revenue growth for high-ticket coaches, consultants, and businesses.",
  keywords: [
    "marketing agency",
    "about mind your business media",
    "guaranteed marketing results",
  ],
});

export default function AboutPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We're Not a Typical Marketing Agency
          </h1>
          <p className="text-xl text-gray-300">
            We only work with businesses doing $100k+ monthly because we guarantee results.
            Most agencies can't do that.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Mind Your Business Media was founded on a simple premise: marketing agencies should be accountable
              for revenue results, not just activity metrics.
            </p>
            <p>
              After spending years scaling high-ticket businesses—coaches, consultants, course creators, and
              premium service companies—we noticed a pattern. Most marketing agencies were optimizing for the
              wrong things: clicks, impressions, engagement. Meanwhile, their clients struggled to connect those
              vanity metrics to actual revenue growth.
            </p>
            <p>
              We built Mind Your Business Media differently. We only take on clients we're confident we can grow
              by at least 30% in year one. If we don't hit that number, we work for free until we do. It's that
              simple.
            </p>
            <p>
              This model only works because we're selective about who we partner with (established businesses
              doing $100k+ monthly) and because we've developed a proven system for scaling high-ticket offers
              across multiple channels and industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue-First</h3>
              <p className="text-gray-600">
                We don't care about likes, followers, or impressions. Our sole focus is increasing your net
                revenue by 30% or more.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High-Ticket Specialized</h3>
              <p className="text-gray-600">
                We exclusively work with high-ticket businesses. Different strategies, different execution,
                different results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Execution</h3>
              <p className="text-gray-600">
                We don't just create strategy decks. We execute everything: ads, funnels, content, email,
                optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accountability Over Activity</h3>
              <p className="text-gray-600">
                We measure success by revenue growth, not how busy we look. Results matter, effort doesn't.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Truth Over Comfort</h3>
              <p className="text-gray-600">
                We'll tell you what you need to hear, not what you want to hear. If your offer isn't strong enough
                to scale, we'll say so.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Over Quantity</h3>
              <p className="text-gray-600">
                We work with a limited number of clients because delivering guaranteed results requires deep
                partnership, not surface-level service.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Long-Term Over Quick Wins</h3>
              <p className="text-gray-600">
                We build sustainable marketing systems that compound over years, not gimmicks that spike for a month
                then crash.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center mt-12">
            <div>
              <div className="text-5xl font-bold mb-2">87%</div>
              <div className="text-blue-200">Average Revenue Growth Year 1</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Clients Hit 30% Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$18M+</div>
              <div className="text-blue-200">Revenue Added for Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Businesses Scaled</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you're doing $100k+ monthly and ready for guaranteed growth, let's talk.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-700"
          >
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
