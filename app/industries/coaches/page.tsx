"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function CoachesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* Phoenix Desert cityscape - PROMINENT hero image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img src="/heroes/coaches-hero.png" alt="Phoenix Desert" className="w-full h-full object-cover"  style={{ objectPosition: "center center" }}/>
          {/* Light gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/50 via-[#1a1a2e]/40 to-black/60"></div>
        </div>

        {/* The Muscle character */}
        <motion.div
          className="absolute right-10 md:right-20 bottom-0 w-64 md:w-80 opacity-80 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/coaches-character.png" alt="The Muscle" className="w-full h-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              className="inline-block mb-4 px-6 py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-sm font-bold tracking-wide"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              💪 FOR HIGH-TICKET COACHES 💪
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"               style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 8px rgba(0,0,0,0.9)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build A Coaching Empire<br />
              <span className="text-[#FFD700]">That Commands Respect</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stop begging for clients. Build a system that fills your programs on demand.
              <span className="text-[#FFD700] font-bold"> 30% revenue increase guaranteed. No excuses.</span>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/apply"
                className="bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all transform hover:scale-105 shadow-lg text-center"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Join The Family
              </Link>
              <Link
                href="/results"
                className="bg-black/50 border-2 border-[#FFD700] text-[#FFD700] px-10 py-5 rounded-lg font-bold text-lg hover:bg-black/70 transition-all text-center"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                See The Results
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-white" />
      </div>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            The Challenge Every High-Ticket Coach Faces
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Feast or Famine Revenue</h3>
              <p className="text-gray-700">
                Great month during your launch, then crickets. You're constantly chasing new clients instead of
                having a predictable pipeline.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ad Spend Black Hole</h3>
              <p className="text-gray-700">
                You're spending $5k-15k/month on ads but getting unqualified leads who can't afford your $10k+ programs.
                ROI is underwater.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Referral Dependency</h3>
              <p className="text-gray-700">
                Most clients come from word-of-mouth. Great problem to have, but it doesn't scale and you can't
                control the flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Our Marketing Solutions for <span className="text-[#FFD700]">High-Ticket Coaches</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We've scaled dozens of coaching businesses from $100k/mo to $500k+/mo with our proven marketing system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🎯</div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>Application Funnel Systems</h3>
              <p className="text-gray-200">
                High-converting application funnels that pre-qualify leads and book your calendar with ready-to-buy prospects.
                No more discovery calls with tire-kickers.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📱</div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>Multi-Channel Paid Advertising</h3>
              <p className="text-gray-200">
                Strategic campaigns across Facebook, Instagram, YouTube, and LinkedIn targeting your ideal coaching clients.
                Optimized for high-ticket conversion, not cheap leads.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📧</div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>Authority-Building Content</h3>
              <p className="text-gray-200">
                Thought leadership content that positions you as THE expert in your niche. SEO-optimized to attract
                organic leads who are already sold on you.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🚀</div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>Webinar & VSL Funnels</h3>
              <p className="text-gray-200">
                Automated and live webinar systems that sell your high-ticket coaching on autopilot. Plus video sales
                letters that convert cold traffic.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🧲</div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>Lead Nurture Sequences</h3>
              <p className="text-gray-200">
                Email and SMS sequences that warm up leads over time, turning "not now" into "yes" when they're
                ready to invest.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📊</div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>Revenue Analytics & Optimization</h3>
              <p className="text-gray-200">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Marketing Solutions for Every Type of High-Ticket Coaching
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center">
            We specialize in marketing for coaches across all niches and formats
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Coaching</h3>
              <p className="text-gray-700">
                Marketing solutions for business coaches, revenue coaches, and scaling consultants with $10k+ programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Executive & Leadership Coaching</h3>
              <p className="text-gray-700">
                Target C-suite executives and senior leaders with premium coaching and advisory services
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Life & Transformation Coaching</h3>
              <p className="text-gray-700">
                High-ticket personal transformation, mindset coaching, and life coaching programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Wellness Coaching</h3>
              <p className="text-gray-700">
                Premium health transformation, nutrition coaching, and wellness programs $5k+
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Relationship & Dating Coaching</h3>
              <p className="text-gray-700">
                High-end relationship transformation, dating coaching, and marriage programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance & Sports Coaching</h3>
              <p className="text-gray-700">
                Elite performance coaching, athletic coaching, and peak performance programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial & Wealth Coaching</h3>
              <p className="text-gray-700">
                Wealth building, financial transformation, and money mindset coaching services
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Coaching & Masterminds</h3>
              <p className="text-gray-700">
                Fill your mastermind programs, group coaching cohorts, and $25k+ group experiences
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1-on-1 Premium Coaching</h3>
              <p className="text-gray-700">
                Build pipelines for $50k-100k+ per client 1-on-1 transformation programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "'Georgia', serif" }}>
            Real Results from Coaching Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#2a1a4a]/10 to-[#FFD700]/20 p-8 rounded-xl border-2 border-[#FFD700]/30">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "'Georgia', serif" }}>+287%</div>
              <div className="text-xl font-semibold mb-4 text-gray-900">Revenue Growth</div>
              <p className="text-gray-700">
                Business coaching program: $80k/mo to $310k/mo in 9 months. Scaled from 8 clients/month to 31 clients/month
                at $10k average.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2a1a4a]/10 to-[#FFD700]/20 p-8 rounded-xl border-2 border-[#FFD700]/30">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "'Georgia', serif" }}>+210%</div>
              <div className="text-xl font-semibold mb-4 text-gray-900">Revenue Growth</div>
              <p className="text-gray-700">
                Leadership coaching: $95k/mo to $295k/mo in 11 months. Filled 12-month mastermind program
                at $25k/person.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2a1a4a]/10 to-[#FFD700]/20 p-8 rounded-xl border-2 border-[#FFD700]/30">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "'Georgia', serif" }}>+342%</div>
              <div className="text-xl font-semibold mb-4 text-gray-900">Revenue Growth</div>
              <p className="text-gray-700">
                Life transformation coach: $65k/mo to $288k/mo in 8 months. Launched $15k group program
                with automated funnel.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/results" className="text-[#8B0000] text-xl font-semibold hover:underline" style={{ fontFamily: "'Georgia', serif" }}>
              View All Coaching Client Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
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
      <section className="py-20 bg-gradient-to-r from-[#8B0000] via-[#2a1a4a] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to Scale Your <span className="text-[#FFD700]">Coaching Business?</span>
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            If you're a high-ticket coach doing $100k+ monthly and ready for predictable growth, let's talk.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#FFD700] text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#FFA500] transition-all shadow-lg"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Apply for Partnership
          </Link>
          <p className="mt-6 text-gray-300 text-sm">
            Limited coaching client partnerships available
          </p>
        </div>
      </section>
    </div>
  );
}
