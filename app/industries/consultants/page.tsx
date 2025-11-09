"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function ConsultantsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* Detroit Skyline cityscape - PROMINENT hero image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img src="/heroes/detroit-skyline.png" alt="Detroit Skyline" className="w-full h-full object-contain" />
          {/* Light gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/50 via-[#1a1a2e]/40 to-black/60"></div>
        </div>
        {/* The Boss character */}
        <motion.div
          className="absolute right-10 md:right-20 bottom-0 w-64 md:w-80 opacity-80 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/boss-city-hall.png" alt="The Boss" className="w-full h-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              className="inline-block mb-4 px-6 py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-sm font-bold tracking-wide"
              style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              👔 FOR CONSULTANTS 👔
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"               style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 8px rgba(0,0,0,0.9)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build A Consulting Practice<br /><span className="text-[#FFD700]">Nobody Can Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stop chasing clients. Position yourself as the authority everyone wants to work with.<span className="text-[#FFD700] font-bold"> Premium clients. Premium fees. No competition.</span>
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
          <h2 className="text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: "'Georgia', serif" }}>
            The Growth Challenges Consultants Face
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Network Dependency</h3>
              <p className="text-gray-300">
                80% of clients come from referrals and past connections. Great for starting, terrible for scaling.
                You've maxed out your network and need new sources.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Long Sales Cycles</h3>
              <p className="text-gray-300">
                Months of nurturing, multiple stakeholders, endless proposals. Your pipeline is full of maybes
                but nothing's closing.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Commoditization Pressure</h3>
              <p className="text-gray-300">
                Competing on price instead of value. Prospects see you as interchangeable with every other consultant.
                Your premium positioning is weak.
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
              Our Marketing Solutions for Consultants
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We've helped consulting firms scale from $1M to $5M+ ARR with predictable client acquisition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🎯</div>
              <h3 className="text-2xl font-bold mb-3">Thought Leadership & Authority Building</h3>
              <p className="text-gray-200">
                Position yourself as THE expert through strategic content marketing, speaking opportunities, and
                media placements. Become the obvious choice in your category.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📊</div>
              <h3 className="text-2xl font-bold mb-3">Account-Based Marketing (ABM)</h3>
              <p className="text-gray-200">
                Target specific companies and decision-makers with personalized campaigns. Land enterprise clients
                worth $100k-500k+ engagements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🔗</div>
              <h3 className="text-2xl font-bold mb-3">LinkedIn Lead Generation</h3>
              <p className="text-gray-200">
                Systematic LinkedIn outreach and content strategy that fills your calendar with qualified discovery calls.
                B2B lead generation that actually works.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📈</div>
              <h3 className="text-2xl font-bold mb-3">Strategic Partnerships & Alliances</h3>
              <p className="text-gray-200">
                Build referral partnerships with complementary firms, create co-marketing initiatives, and tap into
                existing client bases.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🎓</div>
              <h3 className="text-2xl font-bold mb-3">Educational Marketing & Workshops</h3>
              <p className="text-gray-200">
                Host workshops, webinars, and executive briefings that demonstrate your expertise and convert
                attendees into clients.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#FFD700]/30">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📧</div>
              <h3 className="text-2xl font-bold mb-3">Multi-Touch Nurture Campaigns</h3>
              <p className="text-gray-200">
                Sophisticated email, LinkedIn, and retargeting sequences that stay top-of-mind throughout long
                B2B sales cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center" style={{ fontFamily: "'Georgia', serif" }}>
            Marketing Solutions for Every Type of Consultant
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            We work with consultants across industries and specialties
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">Strategy Consultants</h3>
              <p className="text-gray-300">
                Business strategy, growth strategy, market entry, and transformation consulting
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">Management Consultants</h3>
              <p className="text-gray-300">
                Operations, process improvement, organizational design, and change management
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">Fractional Executives</h3>
              <p className="text-gray-300">
                Fractional CFO, COO, CMO, CTO, and other C-suite advisory services
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">Technology Consultants</h3>
              <p className="text-gray-300">
                IT strategy, digital transformation, system implementation, and tech advisory
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">Financial Consultants</h3>
              <p className="text-gray-300">
                M&A advisory, financial restructuring, valuation, and corporate finance
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">HR & Talent Consultants</h3>
              <p className="text-gray-300">
                Talent strategy, compensation design, organizational culture, and people operations
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">Marketing Consultants</h3>
              <p className="text-gray-300">
                Marketing strategy, brand positioning, go-to-market, and growth marketing
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">Sales Consultants</h3>
              <p className="text-gray-300">
                Sales strategy, sales enablement, revenue operations, and sales training
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-white mb-3">Industry-Specific Consultants</h3>
              <p className="text-gray-300">
                Healthcare, manufacturing, retail, financial services, and other industry specialists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: "'Georgia', serif" }}>
            Real Results from Consulting Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#2a1a4a]/10 to-[#FFD700]/20 p-8 rounded-xl border-2 border-[#FFD700]/30">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>+156%</div>
              <div className="text-xl font-semibold mb-4">Revenue Growth</div>
              <p className="text-gray-200">
                Strategy consulting firm: $150k/mo to $385k/mo in 12 months. Landed 3 enterprise clients worth
                $500k+ each through ABM.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2a1a4a]/10 to-[#FFD700]/20 p-8 rounded-xl border-2 border-[#FFD700]/30">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>+203%</div>
              <div className="text-xl font-semibold mb-4">Revenue Growth</div>
              <p className="text-gray-200">
                Fractional CFO practice: $110k/mo to $333k/mo in 10 months. Scaled from 11 to 37 monthly retainer
                clients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2a1a4a]/10 to-[#FFD700]/20 p-8 rounded-xl border-2 border-[#FFD700]/30">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>+178%</div>
              <div className="text-xl font-semibold mb-4">Revenue Growth</div>
              <p className="text-gray-200">
                HR consulting firm: $135k/mo to $375k/mo in 11 months. Built thought leadership platform that
                generates 40+ qualified leads monthly.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/results" className="text-[#FFD700] text-xl font-semibold hover:underline">
              View All Consulting Client Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Georgia', serif" }}>
            Why Consultants Choose Mind Your Business Media
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">We Understand B2B Consulting Sales</h3>
              <p className="text-gray-300">
                Long sales cycles, multiple stakeholders, high-touch relationships. We've helped consultants close
                $100k-500k+ engagements consistently.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">30% Revenue Increase Guaranteed</h3>
              <p className="text-gray-300">
                We don't get paid unless you grow. 30% revenue increase in year 1 or we work for free until we achieve it.
                That's our commitment to you.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Expertise in Premium Positioning</h3>
              <p className="text-gray-300">
                We help consultants command premium fees by building unassailable authority and market positioning.
                Stop competing on price.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Full-Service Marketing Execution</h3>
              <p className="text-gray-300">
                We handle everything from thought leadership content to ABM campaigns to partnership development.
                Your entire marketing function, managed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] via-[#2a1a4a] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to Scale Your Consulting Practice?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            If you're a consultant doing $100k+ monthly and ready for predictable growth, let's talk.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-[#FFD700] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Apply for Partnership
          </Link>
          <p className="mt-6 text-gray-300 text-sm">
            Limited consulting client partnerships available
          </p>
        </div>
      </section>
    </div>
  );
}
