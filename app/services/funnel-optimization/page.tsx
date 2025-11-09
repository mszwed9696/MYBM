"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function FunnelOptimizationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* Detroit Skyline cityscape - PROMINENT hero image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img src="/heroes/detroit-skyline.png" alt="Detroit Skyline" className="w-full h-full object-cover"  style={{ objectPosition: "center center" }}/>
          {/* Light gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/30 via-[#1a1a2e]/20 to-black/40"></div>
        </div>
        {/* The Banker character */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              className="inline-block mb-4 px-6 py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-sm font-bold tracking-wide"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              💰 FUNNEL OPTIMIZATION - THE BANKER 💰
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"               style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 8px rgba(0,0,0,0.9)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Funnel Is Bleeding<br />
              <span className="text-[#FFD700]">Money. We Stop The Leak.</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Most businesses lose 60-80% of prospects in their funnel.
              <span className="text-[#FFD700] font-bold"> We plug the holes. We collect what's owed.</span>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Where High-Ticket Funnels Fail
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            You're driving traffic but revenue isn't growing proportionally. The problem isn't traffic—it's conversion.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Low Application Rates</h3>
              <p className="text-gray-700">
                Visitors land on your page but don't fill out applications. Poor copy, unclear value prop, or
                friction in the process.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>☎️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No-Shows & Cancellations</h3>
              <p className="text-gray-700">
                People book calls but don't show up. Or they show up unqualified. Your funnel isn't pre-selling
                or qualifying properly.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>💸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Long Sales Cycles</h3>
              <p className="text-gray-700">
                Prospects enter your funnel but take months to close (or never do). Missing nurture sequences
                and trust-building elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Our 5-Step Funnel Optimization Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center font-bold text-xl mr-6">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Complete Funnel Audit</h3>
                  <p className="text-blue-100">
                    We analyze every step of your current funnel: landing pages, forms, emails, call booking, sales
                    process. Identify drop-off points and conversion blockers.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center font-bold text-xl mr-6">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Conversion Gap Analysis</h3>
                  <p className="text-blue-100">
                    Calculate conversion rates at each step. Compare to industry benchmarks for high-ticket offers.
                    Prioritize fixes by revenue impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center font-bold text-xl mr-6">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Strategic Redesign</h3>
                  <p className="text-blue-100">
                    Rebuild problem areas with high-ticket conversion psychology: trust elements, social proof,
                    pre-qualification, and urgency without pressure.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center font-bold text-xl mr-6">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">A/B Testing & Iteration</h3>
                  <p className="text-blue-100">
                    Test headlines, CTAs, page layouts, form fields, and nurture sequences. Continuous optimization
                    based on real conversion data.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center font-bold text-xl mr-6">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Scale What Works</h3>
                  <p className="text-blue-100">
                    Once we've optimized conversion rates, we scale traffic knowing each visitor is worth more.
                    Compound revenue growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            High-Ticket Funnels We Optimize
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Funnels</h3>
              <p className="text-gray-700 mb-4">
                Landing page → Application form → Qualification → Call booking. Perfect for high-ticket coaching,
                consulting, and done-for-you services.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Pre-qualification questions</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Calendar integration</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Automated screening</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>SMS/email confirmations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Webinar Funnels</h3>
              <p className="text-gray-700 mb-4">
                Registration → Webinar (live/automated) → Pitch → Application. High-converting for coaches,
                course creators, and group programs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Registration page optimization</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Webinar script refinement</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Replay sequences</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Post-webinar followup</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">VSL (Video Sales Letter) Funnels</h3>
              <p className="text-gray-700 mb-4">
                Traffic → VSL → Application/Purchase. Automated selling for high-ticket offers through long-form
                video presentations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Script optimization</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Video production</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Call-to-action timing</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Scarcity mechanisms</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Magnet → Nurture Funnels</h3>
              <p className="text-gray-700 mb-4">
                Free resource → Email sequence → Discovery call. Build trust over time with valuable content
                before the pitch.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Lead magnet creation</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Email sequence writing</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Segmentation logic</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Multi-step nurture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Optimize */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Every Element We Test & Optimize
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3" style={{ fontFamily: "\'Georgia\', serif" }}>📝</div>
              <h3 className="font-bold text-gray-900 mb-2">Copy & Messaging</h3>
              <p className="text-sm text-gray-700">Headlines, bullets, CTAs, value props</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3" style={{ fontFamily: "\'Georgia\', serif" }}>🎨</div>
              <h3 className="font-bold text-gray-900 mb-2">Design & Layout</h3>
              <p className="text-sm text-gray-700">Visual hierarchy, whitespace, flow</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3" style={{ fontFamily: "\'Georgia\', serif" }}>📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Forms & Fields</h3>
              <p className="text-sm text-gray-700">Question order, required fields, length</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3" style={{ fontFamily: "\'Georgia\', serif" }}>⭐</div>
              <h3 className="font-bold text-gray-900 mb-2">Social Proof</h3>
              <p className="text-sm text-gray-700">Testimonials, case studies, logos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3" style={{ fontFamily: "\'Georgia\', serif" }}>🎥</div>
              <h3 className="font-bold text-gray-900 mb-2">Video Content</h3>
              <p className="text-sm text-gray-700">VSLs, explainers, testimonials</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3" style={{ fontFamily: "\'Georgia\', serif" }}>📧</div>
              <h3 className="font-bold text-gray-900 mb-2">Email Sequences</h3>
              <p className="text-sm text-gray-700">Subject lines, timing, content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3" style={{ fontFamily: "\'Georgia\', serif" }}>⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Urgency & Scarcity</h3>
              <p className="text-sm text-gray-700">Deadlines, bonuses, limited spots</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3" style={{ fontFamily: "\'Georgia\', serif" }}>📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Mobile Experience</h3>
              <p className="text-sm text-gray-700">Responsive design, load speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Funnel Optimization Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>+127%</div>
              <div className="text-xl font-semibold mb-4">Application Rate</div>
              <p className="text-gray-400">Coaching program: 4.2% → 9.5% application rate through page redesign and copy optimization</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>+89%</div>
              <div className="text-xl font-semibold mb-4">Show-Up Rate</div>
              <p className="text-gray-400">Consultant: 51% → 96% call show rate with automated SMS reminders and pre-call video</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>+203%</div>
              <div className="text-xl font-semibold mb-4">Webinar Conversion</div>
              <p className="text-gray-400">Course creator: 2.8% → 8.5% webinar-to-sale conversion through script and offer optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1a1a2e] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>
            Ready to Fix Your Leaky Funnel?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop losing revenue to poor conversion. Get a complete funnel audit and optimization strategy.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-[#FFD700] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Get Your Funnel Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
