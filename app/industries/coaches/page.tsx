import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Marketing Solutions for High-Ticket Coaches | Business Coaching Marketing Agency",
  description: "Marketing agency specializing in high-ticket coaches and coaching businesses. Guaranteed 30% revenue increase for coaches doing $100k+ monthly. Expert marketing for business coaches, life coaches, and high-ticket coaching programs.",
  keywords: [
    "marketing solutions for coaches",
    "marketing solutions for business coaches",
    "marketing agency for coaches",
    "marketing solutions for high ticket coaching",
    "marketing for online coaching",
    "high ticket coach marketing",
    "coaching business marketing agency",
  ],
});

export default function CoachesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold">
              For High-Ticket Coaches
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Marketing Solutions for High-Ticket Coaches
              <span className="text-blue-400"> Doing $100k+ Monthly</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stop relying on referrals and inconsistent launches. Build a predictable client acquisition system
              that fills your high-ticket coaching programs every month. Guaranteed 30% revenue increase or we work for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 text-center"
              >
                Get Your Custom Strategy
              </Link>
              <Link
                href="/results"
                className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 text-center"
              >
                View Coaching Client Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            The Challenge Every High-Ticket Coach Faces
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Feast or Famine Revenue</h3>
              <p className="text-gray-600">
                Great month during your launch, then crickets. You're constantly chasing new clients instead of
                having a predictable pipeline.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ad Spend Black Hole</h3>
              <p className="text-gray-600">
                You're spending $5k-15k/month on ads but getting unqualified leads who can't afford your $10k+ programs.
                ROI is underwater.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Referral Dependency</h3>
              <p className="text-gray-600">
                Most clients come from word-of-mouth. Great problem to have, but it doesn't scale and you can't
                control the flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Marketing Solutions for High-Ticket Coaches
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We've scaled dozens of coaching businesses from $100k/mo to $500k+/mo with our proven marketing system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Application Funnel Systems</h3>
              <p className="text-blue-100">
                High-converting application funnels that pre-qualify leads and book your calendar with ready-to-buy prospects.
                No more discovery calls with tire-kickers.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Multi-Channel Paid Advertising</h3>
              <p className="text-blue-100">
                Strategic campaigns across Facebook, Instagram, YouTube, and LinkedIn targeting your ideal coaching clients.
                Optimized for high-ticket conversion, not cheap leads.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-3">Authority-Building Content</h3>
              <p className="text-blue-100">
                Thought leadership content that positions you as THE expert in your niche. SEO-optimized to attract
                organic leads who are already sold on you.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Webinar & VSL Funnels</h3>
              <p className="text-blue-100">
                Automated and live webinar systems that sell your high-ticket coaching on autopilot. Plus video sales
                letters that convert cold traffic.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🧲</div>
              <h3 className="text-2xl font-bold mb-3">Lead Nurture Sequences</h3>
              <p className="text-blue-100">
                Email and SMS sequences that warm up leads over time, turning "not now" into "yes" when they're
                ready to invest.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Revenue Analytics & Optimization</h3>
              <p className="text-blue-100">
                Track every dollar from ad spend to client LTV. Continuously optimize for maximum ROI and
                predictable revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Marketing Solutions for Every Type of High-Ticket Coaching
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            We specialize in marketing for coaches across all niches and formats
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Coaching</h3>
              <p className="text-gray-600">
                Marketing solutions for business coaches, revenue coaches, and scaling consultants with $10k+ programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Executive & Leadership Coaching</h3>
              <p className="text-gray-600">
                Target C-suite executives and senior leaders with premium coaching and advisory services
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Life & Transformation Coaching</h3>
              <p className="text-gray-600">
                High-ticket personal transformation, mindset coaching, and life coaching programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Wellness Coaching</h3>
              <p className="text-gray-600">
                Premium health transformation, nutrition coaching, and wellness programs $5k+
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Relationship & Dating Coaching</h3>
              <p className="text-gray-600">
                High-end relationship transformation, dating coaching, and marriage programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance & Sports Coaching</h3>
              <p className="text-gray-600">
                Elite performance coaching, athletic coaching, and peak performance programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial & Wealth Coaching</h3>
              <p className="text-gray-600">
                Wealth building, financial transformation, and money mindset coaching services
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Coaching & Masterminds</h3>
              <p className="text-gray-600">
                Fill your mastermind programs, group coaching cohorts, and $25k+ group experiences
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1-on-1 Premium Coaching</h3>
              <p className="text-gray-600">
                Build pipelines for $50k-100k+ per client 1-on-1 transformation programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Real Results from Coaching Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-5xl font-bold text-blue-600 mb-2">+287%</div>
              <div className="text-xl font-semibold mb-4">Revenue Growth</div>
              <p className="text-gray-700">
                Business coaching program: $80k/mo to $310k/mo in 9 months. Scaled from 8 clients/month to 31 clients/month
                at $10k average.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-5xl font-bold text-blue-600 mb-2">+210%</div>
              <div className="text-xl font-semibold mb-4">Revenue Growth</div>
              <p className="text-gray-700">
                Leadership coaching: $95k/mo to $295k/mo in 11 months. Filled 12-month mastermind program
                at $25k/person.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-5xl font-bold text-blue-600 mb-2">+342%</div>
              <div className="text-xl font-semibold mb-4">Revenue Growth</div>
              <p className="text-gray-700">
                Life transformation coach: $65k/mo to $288k/mo in 8 months. Launched $15k group program
                with automated funnel.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/results" className="text-blue-600 text-xl font-semibold hover:underline">
              View All Coaching Client Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Coaches Choose Mind Your Business Media
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">We Only Work With Coaches Doing $100k+ Monthly</h3>
              <p className="text-gray-300">
                We're not for coaches just starting out. We work with established coaches who are ready to scale from
                6-to-7 or 7-to-8 figures. You need specialized strategies, not beginner tactics.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">30% Revenue Increase Guaranteed</h3>
              <p className="text-gray-300">
                We guarantee a 30% net revenue increase in year 1. If we don't hit it, we work for free until we do.
                No other marketing agency for coaches offers this.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">High-Ticket Coaching Specialists</h3>
              <p className="text-gray-300">
                We don't work with $97 programs. We exclusively serve high-ticket coaches with programs $5k-100k+.
                We understand premium positioning and sophisticated buyer psychology.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Complete Marketing Execution</h3>
              <p className="text-gray-300">
                We don't just create strategy decks. We execute everything: ads, funnels, emails, content, optimization.
                Your entire marketing function, handled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Coaching Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            If you're a high-ticket coach doing $100k+ monthly and ready for predictable growth, let's talk.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Apply for Partnership
          </Link>
          <p className="mt-6 text-blue-200 text-sm">
            Limited coaching client partnerships available
          </p>
        </div>
      </section>
    </div>
  );
}
