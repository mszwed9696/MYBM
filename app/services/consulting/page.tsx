"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConsultingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden">
        {/* Docks Business Deal Image */}
        <motion.div
          className="absolute right-0 bottom-0 w-96 md:w-[500px] opacity-40 z-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 1 }}
        >
          <img src="/heroes/Gemini_Generated_Image_5jsses5jsses5jss.png" alt="Business Deal" className="w-full h-auto" />
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
              🤝 WORK WITH MIKE - DIRECT ACCESS 🤝
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"               style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Personal Consulting,<br />
              <span className="text-[#FFD700]">Coaching & Masterminds</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Three ways to work directly with Mike. <span className="text-[#FFD700] font-bold">1-on-1 strategy. Group masterminds. High-ticket coaching programs.</span>
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
                Apply for Partnership
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Consulting Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>
              Choose Your Level of Access
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you need ongoing 1-on-1 strategy, peer-level masterminding, or a complete coaching program—here's how to work with Mike directly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1-on-1 Consulting */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#FFD700] transition-all shadow-lg hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold text-white mb-2">1-on-1 Consulting</h3>
                <p className="text-gray-300 font-semibold">Private Strategic Advisory</p>
              </div>

              <p className="text-gray-200 mb-6">
                Monthly retainer for direct access to Mike. Custom marketing strategy, funnel reviews, campaign optimization, and growth planning.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">4 hours/month of 1-on-1 time</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">Unlimited async Slack/email support</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">Campaign reviews & funnel audits</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">Custom growth roadmaps</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$7,500<span className="text-xl text-gray-300">/month</span></div>
                <p className="text-sm text-gray-300">6-month minimum commitment</p>
              </div>

              <Link
                href="/apply"
                className="block text-center bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all"
              >
                Apply for 1-on-1 Consulting
              </Link>
            </motion.div>

            {/* Mastermind */}
            <motion.div
              className="bg-gradient-to-br from-[#2a1a4a] to-[#1a1a2e] p-8 rounded-2xl border-4 border-[#FFD700] shadow-2xl relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 bg-[#FFD700] text-black px-4 py-1 text-sm font-bold">
                MOST POPULAR
              </div>

              {/* Hollywood Mansion Image */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <img src="/heroes/Gemini_Generated_Image_5jsses5jsses5jss.png" alt="Mastermind" className="w-full h-full object-cover"  style={{ objectPosition: "center center" }}/>
              </div>

              <div className="text-center mb-6 relative z-10">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-3xl font-bold text-white mb-2">Elite Mastermind</h3>
                <p className="text-[#FFD700] font-semibold">8-12 High-Performers Only</p>
              </div>

              <p className="text-gray-300 mb-6 relative z-10">
                Quarterly in-person meetups + monthly group calls. Peer-level connections with other $100k+/month business owners. Accountability, strategy, and network.
              </p>

              <div className="space-y-3 mb-8 relative z-10">
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-white">4 in-person meetups/year (luxury destinations)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-white">Monthly 3-hour group strategy calls</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-white">Private Slack community with Mike + members</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-white">Hot seat coaching & accountability</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-white">Access to member network & deals</span>
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$25,000<span className="text-xl text-gray-300">/year</span></div>
                <p className="text-sm text-gray-400">Application required. Limited to 12 members.</p>
              </div>

              <Link
                href="/apply"
                className="block text-center bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all"
              >
                Apply for Mastermind
              </Link>
            </motion.div>

            {/* High-Ticket Coaching */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#FFD700] transition-all shadow-lg hover:shadow-2xl"
              whileHover={{ y: -5 }}
            >
              {/* Casino VIP Image */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <img src="/heroes/Gemini_Generated_Image_5jsses5jsses5jss.png" alt="VIP Coaching" className="w-full h-full object-cover"  style={{ objectPosition: "center center" }}/>
              </div>

              <div className="text-center mb-6 relative z-10">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-3xl font-bold text-white mb-2">VIP Coaching Program</h3>
                <p className="text-gray-300 font-semibold">12-Week Intensive Transformation</p>
              </div>

              <p className="text-gray-200 mb-6 relative z-10">
                Complete high-ticket marketing system buildout. Go from $0-100k/month or scale from $100k to $300k+/month in 90 days. Done-with-you implementation.
              </p>

              <div className="space-y-3 mb-8 relative z-10">
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">12 weekly 1-on-1 coaching calls</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">Complete funnel & offer design</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">Ad campaign setup & management</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">Sales script & close optimization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FFD700] mr-2">✓</span>
                  <span className="text-gray-200">90 days of Slack support</span>
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$35,000<span className="text-xl text-gray-300"></span></div>
                <p className="text-sm text-gray-300">One-time investment. Payment plans available.</p>
              </div>

              <Link
                href="/apply"
                className="block text-center bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all"
              >
                Apply for VIP Coaching
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Who Should Work With Mike Directly?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">✓ You're a Good Fit If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start"><span className="mr-2">•</span>Currently doing $100k+/month in revenue</li>
                <li className="flex items-start"><span className="mr-2">•</span>Selling high-ticket offers ($3k-$50k+)</li>
                <li className="flex items-start"><span className="mr-2">•</span>Ready to invest in expert guidance</li>
                <li className="flex items-start"><span className="mr-2">•</span>Coachable and action-oriented</li>
                <li className="flex items-start"><span className="mr-2">•</span>Want to scale to $1M+/year or beyond</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-red-400">✗ You're NOT a Good Fit If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start"><span className="mr-2">•</span>Doing less than $50k/month revenue</li>
                <li className="flex items-start"><span className="mr-2">•</span>Looking for "get rich quick" shortcuts</li>
                <li className="flex items-start"><span className="mr-2">•</span>Not willing to invest $7.5k+</li>
                <li className="flex items-start"><span className="mr-2">•</span>Want someone to do everything for you</li>
                <li className="flex items-start"><span className="mr-2">•</span>Selling low-ticket products/services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Client Results from Direct Consulting
          </h2>
          <p className="text-xl text-red-100 mb-12 text-center max-w-3xl mx-auto">
            These are real businesses Mike worked with 1-on-1 or in the mastermind
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-8 rounded-xl border border-[#FFD700]">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$80k → $310k</div>
              <div className="text-xl font-semibold mb-4">Business Coach (9 months)</div>
              <p className="text-red-100">1-on-1 consulting client. Rebuilt funnel, optimized ads, increased close rate from 18% to 43%</p>
            </div>
            <div className="bg-black/30 p-8 rounded-xl border border-[#FFD700]">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$150k → $480k</div>
              <div className="text-xl font-semibold mb-4">B2B Consultant (12 months)</div>
              <p className="text-red-100">Mastermind member. Scaled LinkedIn ads, built VSL funnel, hired sales team using frameworks from group</p>
            </div>
            <div className="bg-black/30 p-8 rounded-xl border border-[#FFD700]">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$0 → $127k</div>
              <div className="text-xl font-semibold mb-4">Course Creator (90 days)</div>
              <p className="text-red-100">VIP coaching program. Built offer, funnel, and ads from scratch. First $100k in 3 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Fill out an application. We'll review within 24-48 hours and book a strategy call if it's a fit.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#a00000] transition-all transform hover:scale-105 shadow-lg"
          >
            Apply Now
          </Link>
          <p className="text-sm text-gray-500 mt-4">Limited availability. Serious inquiries only.</p>
        </div>
      </section>
    </div>
  );
}
