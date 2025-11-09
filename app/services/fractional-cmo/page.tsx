import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Fractional CMO Services for High-Ticket Businesses | $100k+ Monthly Revenue",
  description: "Get a seasoned Chief Marketing Officer for your high-ticket business without the $250k+ salary. Fractional CMO services for coaches, consultants, and businesses doing $100k+ monthly revenue.",
  keywords: [
    "fractional cmo services",
    "fractional cmo for coaches",
    "fractional cmo for consultants",
    "fractional chief marketing officer",
    "marketing leadership for high ticket businesses",
    "cmo for million dollar businesses",
  ],
});

export default function FractionalCMOPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold">
              Fractional CMO Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Strategic Marketing Leadership
              <span className="text-blue-400"> Without the $250k+ Salary</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get a seasoned Chief Marketing Officer guiding your marketing strategy and execution.
              Perfect for businesses doing $100k+ monthly who need executive-level marketing leadership.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Is a Fractional CMO?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                A Fractional Chief Marketing Officer provides executive-level marketing leadership and strategic guidance
                without the commitment and cost of a full-time hire. You get the expertise of a seasoned marketing executive
                who has scaled businesses like yours—at a fraction of the cost.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Perfect for high-ticket coaches, consultants, course creators, and service businesses doing $100k to $5M monthly
                who need sophisticated marketing strategy but can't justify (or don't need) a full-time CMO.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Full-Time CMO Salary: $250k - $400k+ per year
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  Fractional CMO: $8k - $20k per month (flexible engagement)
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                When You Need a Fractional CMO
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-600">Your revenue is $100k+ monthly but marketing feels chaotic and uncoordinated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-600">You're spending money on ads but lack overall strategy and leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-600">You have a marketing team but no one at the executive level to guide them</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-600">You're ready to scale from 6 to 7 or 7 to 8 figures but need strategic expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-600">You're hiring agencies for execution but lack internal strategic oversight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <span className="text-gray-600">You want to build a marketing function that can scale without bottlenecks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Fractional CMO Service Includes
            </h2>
            <p className="text-xl text-gray-600">
              Complete marketing leadership and strategic execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Strategy Development</h3>
              <p className="text-gray-600">
                Comprehensive marketing strategy aligned with business goals, competitive positioning,
                and growth objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Leadership & Management</h3>
              <p className="text-gray-600">
                Lead internal marketers, manage agency relationships, and ensure all marketing activities
                align with strategy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Acquisition Strategy</h3>
              <p className="text-gray-600">
                Multi-channel acquisition strategies optimized for high-ticket sales cycles and customer lifetime value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Budget Optimization</h3>
              <p className="text-gray-600">
                Strategic budget allocation across channels, campaigns, and initiatives for maximum ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Positioning & Messaging</h3>
              <p className="text-gray-600">
                Define your unique market position, develop compelling messaging, and differentiate from competitors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Systems & Processes</h3>
              <p className="text-gray-600">
                Build scalable marketing systems, processes, and infrastructure for sustainable growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Analytics & Reporting</h3>
              <p className="text-gray-600">
                Track KPIs, analyze performance, and provide executive-level insights and recommendations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Go-to-Market Planning</h3>
              <p className="text-gray-600">
                Launch strategies for new offers, products, or market expansion initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing Technology Stack</h3>
              <p className="text-gray-600">
                Select, implement, and optimize marketing tools and platforms for efficiency and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Fractional CMO Services for Every High-Ticket Business Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/industries/coaches" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-Ticket Coaches</h3>
              <p className="text-gray-600">$10k+ coaching programs, masterminds, and transformation programs</p>
            </Link>
            <Link href="/industries/consultants" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Consultants</h3>
              <p className="text-gray-600">Strategic consulting, implementation services, and advisory</p>
            </Link>
            <Link href="/industries/course-creators" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Course Creators</h3>
              <p className="text-gray-600">Premium online courses, certifications, and training programs</p>
            </Link>
            <Link href="/industries/service-businesses" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">B2B Service Businesses</h3>
              <p className="text-gray-600">Professional services, agencies, and specialized B2B offerings</p>
            </Link>
            <Link href="/industries/saas" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SaaS Companies</h3>
              <p className="text-gray-600">B2B software platforms doing $1M+ ARR</p>
            </Link>
            <Link href="/industries/product-businesses" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-Ticket Products</h3>
              <p className="text-gray-600">Premium ecommerce, luxury goods, and B2B equipment</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Mind Your Business Media as Your Fractional CMO
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-blue-100">
                We've scaled dozens of high-ticket businesses from 6 to 7 and 7 to 8 figures. We know exactly what works
                because we've done it repeatedly.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">High-Ticket Specialization</h3>
              <p className="text-blue-100">
                Unlike generalist CMOs, we exclusively work with high-ticket businesses. We understand long sales cycles,
                relationship-based selling, and premium positioning.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Results Guarantee</h3>
              <p className="text-blue-100">
                30% revenue increase in year 1 or we work for free. Show us another fractional CMO who guarantees results.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Hands-On Execution</h3>
              <p className="text-blue-100">
                We don't just create PowerPoint strategies. We roll up our sleeves and execute alongside your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Executive-Level Marketing Leadership?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you're doing $100k+ monthly and need a CMO to guide your marketing to the next level, let's talk.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all"
          >
            Schedule Your Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
