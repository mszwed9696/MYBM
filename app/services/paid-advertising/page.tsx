"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PaidAdvertisingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden">
        {/* The Enforcer character */}
        <motion.div
          className="absolute right-0 bottom-0 w-64 md:w-80 opacity-60 z-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/enforcer-statue.png" alt="The Enforcer" className="w-full h-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              className="inline-block mb-4 px-6 py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-sm font-bold tracking-wide"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              🎯 PAID ADVERTISING - THE ENFORCER 🎯
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Don't Chase Leads<br />
              We <span className="text-[#FFD700]">Enforce Results</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Paid ads across Google, Facebook, LinkedIn, YouTube.
              <span className="text-[#FFD700] font-bold"> No tire-kickers. No BS. Just qualified buyers.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/apply"
                className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all transform hover:scale-105 shadow-lg"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Join The Family
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Most Paid Ad Campaigns Fail for High-Ticket Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volume Over Quality</h3>
              <p className="text-gray-600">
                Most agencies optimize for cheap leads, not qualified buyers. You get flooded with $100 tire-kickers
                instead of $10k+ ready buyers.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wrong Sales Cycle</h3>
              <p className="text-gray-600">
                High-ticket requires nurture, trust, and relationship building. Direct-to-sale funnels from cold
                traffic don't work.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Generic Targeting</h3>
              <p className="text-gray-600">
                Broad audience targeting brings in the masses. You need precision targeting to reach buyers who can
                actually afford you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our High-Ticket Paid Advertising Methodology
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Precision Audience Targeting</h3>
              <p className="text-blue-100">
                We target based on income levels, job titles, company size, and buying behavior—not demographics.
                Reach people who can afford your premium pricing.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-3">Multi-Touch Attribution</h3>
              <p className="text-blue-100">
                High-ticket buyers need 7-12 touchpoints. We build campaigns across multiple platforms with
                strategic retargeting and nurture sequences.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">CAC:LTV Optimization</h3>
              <p className="text-blue-100">
                We optimize for customer lifetime value, not cost per lead. Spending $500-2k to acquire a $50k client
                is a great ROI—we focus on what matters.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Revenue Attribution</h3>
              <p className="text-blue-100">
                Track every dollar from ad click to closed client. Full transparency on what's working, what's not,
                and where to scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Multi-Platform Paid Advertising Management
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads (Search & Display)</h3>
              <p className="text-gray-600 mb-4">
                Capture high-intent buyers actively searching for solutions. Search campaigns for bottom-funnel,
                display for awareness and retargeting.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>High-intent keyword targeting</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Competitor conquest campaigns</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Display retargeting sequences</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>YouTube pre-roll and discovery ads</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Facebook & Instagram Ads</h3>
              <p className="text-gray-600 mb-4">
                Advanced audience targeting for coaches, consultants, and high-ticket offers. Best for awareness,
                lead generation, and application funnels.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Custom audience targeting (income, interests, behaviors)</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Lookalike audiences from best clients</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Video view and engagement campaigns</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Multi-step retargeting funnels</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">LinkedIn Ads</h3>
              <p className="text-gray-600 mb-4">
                Perfect for B2B consultants, executive coaches, and professional services. Target by job title,
                company, industry, and seniority.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Job title and seniority targeting</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Company size and industry filters</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Sponsored content and InMail campaigns</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Account-based marketing (ABM) for enterprise</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">YouTube Advertising</h3>
              <p className="text-gray-600 mb-4">
                Video ads for building trust and authority. Pre-roll, discovery, and action campaigns optimized
                for high-ticket conversion.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Skippable and non-skippable pre-roll</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Discovery ads in search results</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Remarketing to engaged viewers</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Action campaigns for conversions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Complete Paid Advertising Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Planning</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Competitive analysis</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Audience research</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Platform selection</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Budget allocation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Creation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Ad copy writing</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Creative design</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Video ad production</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Landing page optimization</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Optimization</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Daily monitoring</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>A/B testing</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Bid optimization</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Performance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Paid Advertising Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">$1.8M</div>
              <div className="text-xl font-semibold mb-4">Revenue Generated</div>
              <p className="text-gray-400">Business coaching program: $22k ad spend generated $1.8M in closed clients over 12 months</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">8.2x</div>
              <div className="text-xl font-semibold mb-4">ROAS</div>
              <p className="text-gray-400">Consultant: $35k/month ad spend returning $287k/month in new client revenue</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">$847</div>
              <div className="text-xl font-semibold mb-4">Cost Per Qualified Lead</div>
              <p className="text-gray-400">Course creator: Generating leads who convert at $15k average—profitable at $847 CPL</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Paid Ads That Actually Work?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop wasting money on agencies optimizing for vanity metrics. Get campaigns built for high-ticket revenue.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
