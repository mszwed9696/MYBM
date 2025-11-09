"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MarketingAutomationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden">
        {/* The Partner character */}
        <motion.div
          className="absolute right-0 bottom-0 w-64 md:w-80 opacity-60 z-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/partner-contractor.png" alt="The Partner" className="w-full h-auto" />
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
              🤝 MARKETING AUTOMATION - THE PARTNER 🤝
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Marketing<br />
              <span className="text-[#FFD700]">Works While You Sleep</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Automated systems that nurture leads, book calls, close deals.
              <span className="text-[#FFD700] font-bold"> 24/7 operation. No days off. Just results.</span>
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
            The Problem With Manual Marketing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Time Bottleneck</h3>
              <p className="text-gray-600">
                You're manually sending emails, following up with leads, and managing campaigns. Your time should
                be spent on strategy and delivery, not repetitive tasks.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inconsistent Follow-Up</h3>
              <p className="text-gray-600">
                Leads fall through cracks. Some get nurtured, some don't. No systematic approach to moving
                prospects through your pipeline.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Can't Scale</h3>
              <p className="text-gray-600">
                Doubling revenue means doubling your workload and team size. You need leverage to grow
                without linear costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What We Automate
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-3">Email Marketing Automation</h3>
              <p className="text-blue-100 mb-4">
                Automated email sequences that nurture leads from cold to hot. Welcome sequences, educational series,
                sales sequences, and re-engagement campaigns.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Welcome sequences for new subscribers</li>
                <li>• Educational nurture series</li>
                <li>• Sales sequences with strategic CTAs</li>
                <li>• Cart abandonment recovery</li>
                <li>• Re-engagement campaigns</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-3">Calendar & Booking Automation</h3>
              <p className="text-blue-100 mb-4">
                Automated scheduling that fills your calendar with qualified prospects. Smart booking logic,
                automated reminders, and no-show reduction.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Intelligent calendar routing</li>
                <li>• Automated booking confirmations</li>
                <li>• Multi-touch reminder sequences</li>
                <li>• Rescheduling automation</li>
                <li>• Post-call follow-up</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Lead Scoring & Segmentation</h3>
              <p className="text-blue-100 mb-4">
                Automatically tag and segment leads based on behavior, engagement, and demographics. Priority
                routing to sales for hot leads.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Behavioral tracking and scoring</li>
                <li>• Automatic segmentation</li>
                <li>• Hot lead notifications</li>
                <li>• CRM integration and sync</li>
                <li>• Pipeline automation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">SMS & Chat Automation</h3>
              <p className="text-blue-100 mb-4">
                Automated SMS sequences for appointment reminders, follow-ups, and engagement. AI chatbots to
                qualify and route leads 24/7.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• SMS appointment confirmations</li>
                <li>• Text-based nurture sequences</li>
                <li>• Two-way conversational automation</li>
                <li>• AI chatbot qualification</li>
                <li>• After-hours lead capture</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-3">Multi-Channel Workflows</h3>
              <p className="text-blue-100 mb-4">
                Sophisticated workflows across email, SMS, ads, and CRM. Trigger-based automation that responds
                to prospect actions in real-time.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Trigger-based workflows</li>
                <li>• Cross-channel sequences</li>
                <li>• Conditional logic and branching</li>
                <li>• Abandoned funnel recovery</li>
                <li>• Referral automation</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Reporting & Analytics Automation</h3>
              <p className="text-blue-100 mb-4">
                Automated dashboards and reports delivered to your inbox. Real-time visibility into funnel
                performance, revenue, and ROI.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Automated performance reports</li>
                <li>• Real-time dashboards</li>
                <li>• Revenue attribution</li>
                <li>• Alert notifications</li>
                <li>• Executive summaries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Marketing Automation Platforms We Master
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ActiveCampaign</h3>
              <p className="text-gray-600">
                Advanced automation, CRM, and email marketing. Best for complex multi-touch sequences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">HubSpot</h3>
              <p className="text-gray-600">
                All-in-one platform for marketing, sales, and service. Great for teams scaling operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keap (Infusionsoft)</h3>
              <p className="text-gray-600">
                Powerful automation with built-in CRM and e-commerce. Popular with coaches and consultants.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">GoHighLevel</h3>
              <p className="text-gray-600">
                White-label platform with SMS, email, funnels, and calendars. All-in-one for agencies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zapier & Make</h3>
              <p className="text-gray-600">
                Connect any tools together. Build custom automation workflows across platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">
                We build custom automation with APIs, webhooks, and no-code tools for unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            The ROI of Marketing Automation
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            What happens when you automate marketing and sales processes
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Before Automation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">✗</span>
                  <span>10-15 hours/week on manual marketing tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">✗</span>
                  <span>40-60% of leads never get followed up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">✗</span>
                  <span>Sales team handling unqualified leads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">✗</span>
                  <span>No visibility into funnel performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-3">✗</span>
                  <span>Revenue caps based on manual capacity</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">After Automation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span>90% reduction in manual marketing work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span>100% of leads nurtured systematically</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span>Only qualified leads reach sales team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span>Real-time dashboards and insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span>Scale revenue without scaling team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Marketing Automation Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">87%</div>
              <div className="text-xl font-semibold mb-4">Time Saved</div>
              <p className="text-gray-400">Coach reduced weekly marketing time from 14 hours to 2 hours with full automation</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">+143%</div>
              <div className="text-xl font-semibold mb-4">Lead Conversion</div>
              <p className="text-gray-400">Consultant increased lead-to-client rate from 12% to 29% with automated nurture</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">$287k</div>
              <div className="text-xl font-semibold mb-4">Revenue From Automation</div>
              <p className="text-gray-400">Course creator generated $287k from automated evergreen funnel in 12 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop trading time for revenue. Build systems that scale without you.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Get Your Automation Strategy
          </Link>
        </div>
      </section>
    </div>
  );
}
