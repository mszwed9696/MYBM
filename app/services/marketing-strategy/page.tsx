"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function MarketingStrategyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* Chicago Bean cityscape - PROMINENT hero image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img src="/heroes/chicago-bean.png" alt="Chicago Bean" className="w-full h-full object-cover"  style={{ objectPosition: "center center" }}/>
          {/* Light gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/30 via-[#1a1a2e]/20 to-black/40"></div>
        </div>
        {/* The Boss character */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              className="inline-block mb-4 px-6 py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-sm font-bold tracking-wide"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              👑 MARKETING STRATEGY - THE BOSS 👑
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"               style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 8px rgba(0,0,0,0.9)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Strategy From<br />
              <span className="text-[#FFD700]">The Top. Not The Bottom.</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stop throwing tactics at the wall. Get a master plan designed for domination.
              <span className="text-[#FFD700] font-bold"> Custom strategy. Proven roadmap. Guaranteed results.</span>
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

      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-white" />
      </div>

      {/* Problem */}
      <section className="py-20 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            Why Most Marketing Strategies <span className="text-[#8B0000]">Fail</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-xl border-2 border-[#8B0000]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-4" style={{ fontFamily: "'Georgia', serif" }}>Copy-Paste Blueprints</h3>
              <p className="text-gray-300">
                Most "strategies" are generic templates that worked for someone else in a different market.
                Your business needs custom strategy, not cookie-cutter plans.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border-2 border-[#8B0000]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-4" style={{ fontFamily: "'Georgia', serif" }}>No Execution Plan</h3>
              <p className="text-gray-300">
                Beautiful PowerPoints that sit in a folder. Strategy without execution roadmap is worthless.
                You need step-by-step implementation plans.
              </p>
            </div>
            <div className="bg-black/50 p-8 rounded-xl border-2 border-[#8B0000]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-4" style={{ fontFamily: "'Georgia', serif" }}>Built by Non-Operators</h3>
              <p className="text-gray-300">
                Created by consultants who've never scaled a business. We've scaled dozens of high-ticket businesses—
                we know what actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            The <span className="text-[#FFD700]">Family's</span> Strategy Development Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-xl border-2 border-[#FFD700]/20 hover:border-[#FFD700] transition-all">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📊</div>
              <h3 className="text-2xl font-bold mb-3 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>Deep Business Analysis</h3>
              <p className="text-gray-300">
                We analyze your business model, offers, pricing, unit economics, customer LTV, sales process, and
                current marketing. Find what's working and what's not.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🔍</div>
              <h3 className="text-2xl font-bold mb-3">Market & Competitive Research</h3>
              <p className="text-blue-100">
                Study your market, competitors, customer psychology, and industry trends. Identify white space
                opportunities and positioning strategies.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🎯</div>
              <h3 className="text-2xl font-bold mb-3">Strategic Positioning</h3>
              <p className="text-blue-100">
                Define your unique market position, differentiation, and messaging. Create a positioning strategy
                that commands premium pricing.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📈</div>
              <h3 className="text-2xl font-bold mb-3">Growth Roadmap</h3>
              <p className="text-blue-100">
                Map out the exact channels, campaigns, and initiatives to hit your revenue goals. Prioritized by
                impact and feasibility.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>💰</div>
              <h3 className="text-2xl font-bold mb-3">Budget Allocation</h3>
              <p className="text-blue-100">
                Strategic budget allocation across channels and campaigns. Know exactly where to spend for
                maximum ROI.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🚀</div>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            What's Included in Your Marketing Strategy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Documents</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Market analysis and competitive positioning report</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Customer avatar and buying journey mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Brand positioning and messaging framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>12-month growth roadmap with quarterly milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Channel strategy and budget allocation plan</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tactical Playbooks</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Customer acquisition playbook (by channel)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Content marketing and SEO strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Email marketing and nurture strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Paid advertising strategy (multi-platform)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Partnership and referral strategy</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Tools</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>90-day execution roadmap with weekly tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Marketing calendar and campaign timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>KPI dashboard and tracking framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Marketing technology stack recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Team structure and hiring plan</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Monthly strategy review and optimization sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Quarterly business review and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Direct access to strategic team via Slack/email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
                  <span>Ad-hoc consulting for strategic decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-xl">✓</span>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Strategic Priorities by Growth Stage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border-2 border-blue-600 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$100k-300k/mo</h3>
              <p className="text-sm font-semibold text-[#FFD700] mb-4">Foundation Stage</p>
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
              <p className="text-sm font-semibold text-[#FFD700] mb-4">Scaling Stage</p>
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
              <p className="text-sm font-semibold text-[#FFD700] mb-4">Optimization Stage</p>
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
      <section className="py-20 bg-gradient-to-r from-[#1a1a2e] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>
            Ready for a Real Marketing Strategy?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop guessing. Get a comprehensive strategy built specifically for your business and guaranteed to deliver 30% growth.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-[#FFD700] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Schedule Strategy Session
          </Link>
        </div>
      </section>
    </div>
  );
}
