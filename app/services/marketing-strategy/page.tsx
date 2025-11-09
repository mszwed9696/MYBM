import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Marketing Strategy for High-Ticket Businesses | Strategic Marketing Consulting",
  description: "Custom marketing strategies for coaches, consultants, and businesses doing $100k+ monthly. Get a proven roadmap to scale from 6 to 7 or 7 to 8 figures with guaranteed results.",
  keywords: [
    "marketing strategy",
    "marketing strategy consultant",
    "marketing strategy for coaches",
    "marketing strategy for consultants",
    "high ticket marketing strategy",
    "growth strategy",
  ],
});

export default function MarketingStrategyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold">
              Marketing Strategy
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Custom Marketing Strategies for
              <span className="text-blue-400"> Scaling High-Ticket Businesses</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stop executing random tactics hoping something works. Get a comprehensive marketing strategy designed
              specifically for your business, market, and revenue goals.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700"
            >
              Get Your Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Most Marketing Strategies Fail
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Copy-Paste Blueprints</h3>
              <p className="text-gray-600">
                Most "strategies" are generic templates that worked for someone else in a different market.
                Your business needs custom strategy, not cookie-cutter plans.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">No Execution Plan</h3>
              <p className="text-gray-600">
                Beautiful PowerPoints that sit in a folder. Strategy without execution roadmap is worthless.
                You need step-by-step implementation plans.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Built by Non-Operators</h3>
              <p className="text-gray-600">
                Created by consultants who've never scaled a business. We've scaled dozens of high-ticket businesses—
                we know what actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Marketing Strategy Development Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Deep Business Analysis</h3>
              <p className="text-blue-100">
                We analyze your business model, offers, pricing, unit economics, customer LTV, sales process, and
                current marketing. Find what's working and what's not.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">Market & Competitive Research</h3>
              <p className="text-blue-100">
                Study your market, competitors, customer psychology, and industry trends. Identify white space
                opportunities and positioning strategies.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Strategic Positioning</h3>
              <p className="text-blue-100">
                Define your unique market position, differentiation, and messaging. Create a positioning strategy
                that commands premium pricing.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3">Growth Roadmap</h3>
              <p className="text-blue-100">
                Map out the exact channels, campaigns, and initiatives to hit your revenue goals. Prioritized by
                impact and feasibility.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Budget Allocation</h3>
              <p className="text-blue-100">
                Strategic budget allocation across channels and campaigns. Know exactly where to spend for
                maximum ROI.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">90-Day Execution Plan</h3>
              <p className="text-blue-100">
                Detailed 90-day implementation roadmap with specific tasks, timelines, and success metrics.
                You know exactly what to do next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What's Included in Your Marketing Strategy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Documents</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Market analysis and competitive positioning report</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Customer avatar and buying journey mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Brand positioning and messaging framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>12-month growth roadmap with quarterly milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Channel strategy and budget allocation plan</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tactical Playbooks</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Customer acquisition playbook (by channel)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Content marketing and SEO strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Email marketing and nurture strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Paid advertising strategy (multi-platform)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Partnership and referral strategy</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Tools</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>90-day execution roadmap with weekly tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Marketing calendar and campaign timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>KPI dashboard and tracking framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Marketing technology stack recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Team structure and hiring plan</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Monthly strategy review and optimization sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Quarterly business review and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Direct access to strategic team via Slack/email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Ad-hoc consulting for strategic decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">✓</span>
                  <span>Market intelligence and competitive updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Strategic Priorities by Growth Stage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border-2 border-blue-600 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$100k-300k/mo</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">Foundation Stage</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Positioning and differentiation</li>
                <li className="flex items-start"><span className="mr-2">•</span>Product-market fit optimization</li>
                <li className="flex items-start"><span className="mr-2">•</span>1-2 core acquisition channels</li>
                <li className="flex items-start"><span className="mr-2">•</span>Basic automation and systems</li>
                <li className="flex items-start"><span className="mr-2">•</span>Referral program development</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-600 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$300k-750k/mo</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">Scaling Stage</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Multi-channel expansion</li>
                <li className="flex items-start"><span className="mr-2">•</span>Content and SEO investment</li>
                <li className="flex items-start"><span className="mr-2">•</span>Marketing team buildout</li>
                <li className="flex items-start"><span className="mr-2">•</span>Advanced automation</li>
                <li className="flex items-start"><span className="mr-2">•</span>Partnership ecosystem</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-600 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$750k+/mo</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">Optimization Stage</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Market expansion strategies</li>
                <li className="flex items-start"><span className="mr-2">•</span>Product line extension</li>
                <li className="flex items-start"><span className="mr-2">•</span>Brand authority & thought leadership</li>
                <li className="flex items-start"><span className="mr-2">•</span>Advanced attribution modeling</li>
                <li className="flex items-start"><span className="mr-2">•</span>Exit/acquisition positioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Real Marketing Strategy?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop guessing. Get a comprehensive strategy built specifically for your business and guaranteed to deliver 30% growth.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Schedule Strategy Session
          </Link>
        </div>
      </section>
    </div>
  );
}
