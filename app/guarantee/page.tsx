"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GuaranteePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden">
        {/* Cityscape hero background */}
        <div className="absolute inset-0 z-0">
          <img src="/heroes/philadelphia-skyline.png" alt="Cityscape" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>
        </div>

        {/* The Don character */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"             style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The <span className="text-[#FFD700]">Family Guarantee</span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-[#FFD700] font-bold mb-8"
            style={{ fontFamily: "'Georgia', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            30% Revenue Increase in Year 1
            <br />
            Or We Work For Free Until It's Done
          </motion.p>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            No other agency makes this promise. They can't back it up.
            <br /><strong className="text-[#FFD700]">Our word is our bond. That's the family way.</strong>
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            How Our Guarantee Works
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Baseline Revenue Documentation</h3>
                  <p className="text-lg text-gray-700">
                    We document your current net monthly revenue over the last 3-6 months to establish a clear baseline.
                    This is the starting point for our guarantee calculation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">12-Month Partnership Period</h3>
                  <p className="text-lg text-gray-700">
                    We work together for 12 months, implementing our comprehensive marketing strategy and executing
                    across all agreed-upon channels and initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">30% Revenue Increase Target</h3>
                  <p className="text-lg text-gray-700">
                    At the end of 12 months, we measure your new average net monthly revenue. Our goal is a minimum
                    30% increase from your baseline.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-600 p-8 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">If We Miss the Target...</h3>
                  <p className="text-lg text-gray-900 font-semibold mb-3">
                    We work for FREE until we achieve the guaranteed 30% increase.
                  </p>
                  <p className="text-lg text-gray-700">
                    No additional fees. No excuses. We continue providing full marketing services at zero cost until
                    we hit the guarantee. Period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Can Offer This */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Why We Can Offer This Guarantee
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Simple: We've done it dozens of times. We know our system works.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-lg text-gray-700">
                We've scaled dozens of businesses from $100k/mo to $300k-500k+/mo. Our average client sees 87% revenue
                growth in year 1. The 30% guarantee is conservative based on our historical performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Selective Client Criteria</h3>
              <p className="text-lg text-gray-700">
                We only work with businesses already doing $100k+ monthly with proven products/services. This ensures
                we're scaling something that already works, not trying to find product-market fit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High-Ticket Specialization</h3>
              <p className="text-lg text-gray-700">
                We exclusively work with high-ticket businesses. A 30% revenue increase might mean just 3-5 additional
                clients per month at your price point. That's achievable with proper marketing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Execution</h3>
              <p className="text-lg text-gray-700">
                We're not just advisors—we execute everything. Ads, funnels, content, email, optimization. When we
                control the entire marketing function, we can guarantee results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's NOT Covered */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Important Terms & Conditions
          </h2>

          <div className="bg-yellow-50 border-2 border-yellow-600 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Guarantee Requirements</h3>
            <p className="text-lg text-gray-700 mb-4">
              To qualify for our guarantee, you must:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                <span>Be doing minimum $100k in monthly revenue at partnership start</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                <span>Provide timely access to required assets, data, and team members</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                <span>Maintain adequate ad spend budget as outlined in strategy ($10k-30k+/month typical)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                <span>Fulfill your sales/closing function for leads we generate</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-3">•</span>
                <span>Not make major changes to pricing, offer, or business model without consultation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Voids the Guarantee</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3">×</span>
                <span>Reducing ad spend below agreed-upon minimums without our approval</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">×</span>
                <span>Failing to fulfill on sales calls/closing process for qualified leads</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">×</span>
                <span>Not providing requested access, assets, or information within reasonable timeframes</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">×</span>
                <span>Making unilateral business model changes that contradict agreed strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3">×</span>
                <span>Terminating partnership before 12-month period completes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Compare Our Guarantee to Typical Agencies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-red-500">
              <h3 className="text-2xl font-bold mb-6 text-red-300">Typical Marketing Agency</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 text-xl mr-3">✗</span>
                  <span>No revenue guarantee, just "we'll try our best"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 text-xl mr-3">✗</span>
                  <span>$5k-15k monthly retainer regardless of results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 text-xl mr-3">✗</span>
                  <span>Report on vanity metrics (clicks, impressions, engagement)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 text-xl mr-3">✗</span>
                  <span>Blame your offer, market, or team when results don't come</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 text-xl mr-3">✗</span>
                  <span>Lock you into 6-12 month contracts with no out</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-green-500">
              <h3 className="text-2xl font-bold mb-6 text-green-300">Mind Your Business Media</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 text-xl mr-3">✓</span>
                  <span>Guaranteed 30% revenue increase or work for free</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 text-xl mr-3">✓</span>
                  <span>Performance-based approach—we win when you win</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 text-xl mr-3">✓</span>
                  <span>Focus solely on revenue and profit metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 text-xl mr-3">✓</span>
                  <span>Take full accountability for marketing results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 text-xl mr-3">✓</span>
                  <span>Continue working until guarantee is met, at our expense</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>
            Ready to Partner With an Agency That Guarantees Results?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            If you're doing $100k+ monthly and tired of agencies with empty promises, let's talk.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all"
          >
            Apply for Partnership
          </Link>
          <p className="mt-6 text-gray-400 text-sm">
            We only accept clients we're confident we can grow
          </p>
        </div>
      </section>
    </div>
  );
}
