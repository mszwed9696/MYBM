import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold">
              For Businesses Doing $100k+ Monthly Revenue
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Guaranteed 30% Revenue Increase in Year 1
              <span className="text-blue-400"> Or We Work For Free</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We're the marketing agency for high-ticket coaches, consultants, and businesses generating serious revenue.
              Stop gambling with agencies that can't back up their promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 text-center"
              >
                Apply for Partnership
              </Link>
              <Link
                href="/guarantee"
                className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all text-center"
              >
                See Our Guarantee
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400">30%</div>
                <div className="text-gray-400 mt-1">Minimum Revenue Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400">$100k+</div>
                <div className="text-gray-400 mt-1">Monthly Revenue Required</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400">100%</div>
                <div className="text-gray-400 mt-1">Risk-Free Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tired of Marketing Agencies That Under-Deliver?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most agencies charge premium prices but deliver mediocre results. They hide behind vanity metrics
              while your revenue stays flat. You deserve better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-red-600 text-5xl mb-4">✗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empty Promises</h3>
              <p className="text-gray-600">
                Agencies promise the moon but deliver nothing. No accountability, no guarantees, just excuses.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-red-600 text-5xl mb-4">✗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wasted Budgets</h3>
              <p className="text-gray-600">
                Burning through $5k-10k/month in retainers with nothing to show for it. Testing takes months with no ROI.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-red-600 text-5xl mb-4">✗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Generic Strategies</h3>
              <p className="text-gray-600">
                Cookie-cutter approaches that don't work for high-ticket businesses. You need specialized expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Mind Your Business Media Difference
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We only work with established businesses doing $100k+ monthly because we deliver guaranteed results.
              Here's how we do it:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Revenue-First Strategy</h3>
              <p className="text-blue-100">
                We don't care about likes, follows, or vanity metrics. Our sole focus is increasing your net revenue by 30% or more.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-3">Data-Driven Execution</h3>
              <p className="text-blue-100">
                Every decision backed by data. We track everything, optimize relentlessly, and scale what works.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-3">High-Ticket Expertise</h3>
              <p className="text-blue-100">
                We specialize in businesses with high customer lifetime value. Different strategies, different execution.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-3">Ironclad Guarantee</h3>
              <p className="text-blue-100">
                30% revenue increase in year 1 or we work for free until we hit it. No agency offers this because they can't deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate your market and scale to 8-figures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/fractional-cmo" className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Fractional CMO Services</h3>
              <p className="text-gray-600 mb-4">
                Strategic leadership without the $250k+ salary. Get a seasoned CMO guiding your entire marketing operation.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">Learn More →</span>
            </Link>

            <Link href="/services/paid-advertising" className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Paid Advertising Management</h3>
              <p className="text-gray-600 mb-4">
                High-converting campaigns across Google, Facebook, LinkedIn, and YouTube. Optimized for high-ticket sales.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">Learn More →</span>
            </Link>

            <Link href="/services/funnel-optimization" className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Funnel Optimization</h3>
              <p className="text-gray-600 mb-4">
                Turn more traffic into qualified leads and customers. Complete funnel audits and conversion rate optimization.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">Learn More →</span>
            </Link>

            <Link href="/services/marketing-strategy" className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Marketing Strategy</h3>
              <p className="text-gray-600 mb-4">
                Custom strategies for scaling high-ticket offers. Positioning, messaging, and go-to-market plans that work.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">Learn More →</span>
            </Link>

            <Link href="/services/content-marketing" className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Content Marketing & SEO</h3>
              <p className="text-gray-600 mb-4">
                Authority-building content that ranks and converts. Thought leadership that attracts premium clients.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">Learn More →</span>
            </Link>

            <Link href="/services/marketing-automation" className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Marketing Automation</h3>
              <p className="text-gray-600 mb-4">
                Scale your marketing without scaling your team. Automated nurture sequences and sales systems.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized marketing solutions for high-ticket businesses across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/industries/coaches" className="group p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">High-Ticket Coaches</h3>
              <p className="text-gray-600">$10k+ programs, masterminds, and 1-on-1 coaching</p>
            </Link>

            <Link href="/industries/consultants" className="group p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Consultants</h3>
              <p className="text-gray-600">Business consultants, fractional executives, advisory services</p>
            </Link>

            <Link href="/industries/course-creators" className="group p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Online Course Creators</h3>
              <p className="text-gray-600">Premium courses, memberships, certification programs</p>
            </Link>

            <Link href="/industries/service-businesses" className="group p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">High-Ticket Services</h3>
              <p className="text-gray-600">Professional services, agencies, B2B services</p>
            </Link>

            <Link href="/industries/product-businesses" className="group p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">High-Ticket Products</h3>
              <p className="text-gray-600">Premium ecommerce, luxury goods, B2B equipment</p>
            </Link>

            <Link href="/industries/saas" className="group p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">SaaS Companies</h3>
              <p className="text-gray-600">Enterprise software, B2B platforms, $1M+ ARR</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results. Real Revenue Growth.
            </h2>
            <Link href="/results" className="text-blue-400 text-xl hover:underline">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">+287%</div>
              <div className="text-xl font-semibold mb-4">Revenue Increase</div>
              <p className="text-gray-400">High-ticket business coaching program went from $80k/mo to $310k/mo in 9 months</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">+156%</div>
              <div className="text-xl font-semibold mb-4">Revenue Increase</div>
              <p className="text-gray-400">B2B consulting firm scaled from $150k/mo to $385k/mo in 12 months</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">+210%</div>
              <div className="text-xl font-semibold mb-4">Revenue Increase</div>
              <p className="text-gray-400">Online course creator grew from $120k/mo to $372k/mo in 11 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Guarantee Your Growth?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            If you're doing $100k+ monthly revenue and serious about scaling, let's talk.
            Limited partnerships available.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Apply for Partnership Now
          </Link>
          <p className="mt-6 text-blue-200 text-sm">
            Application review typically takes 24-48 hours
          </p>
        </div>
      </section>
    </>
  );
}
