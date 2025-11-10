"use client";

import Link from "next/link";
import { generateMetadata } from "@/lib/seo";
import { motion } from "framer-motion";
import Image from "next/image";
import SkylineDivider from "@/components/SkylineDivider";

export default function FractionalCMOPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">
        {/* European Street cityscape - PROMINENT hero image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img src="/heroes/fractional-cmo-hero.png" alt="European Street" className="w-full h-full object-cover"  style={{ objectPosition: "center center" }}/>
          {/* Light gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/50 via-[#1a1a2e]/40 to-black/60"></div>
        </div>

        {/* The Don character */}
        <motion.div
          className="absolute right-10 md:right-20 bottom-0 w-72 md:w-96 opacity-80 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/fractional-cmo-character.png" alt="The Don" className="w-full h-auto" />
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
              🎩 FRACTIONAL CMO - THE CONSIGLIERE 🎩
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"               style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 8px rgba(0,0,0,0.9)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Every Don Needs A<br />
              <span className="text-[#FFD700]">Trusted Consigliere</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Strategic marketing leadership for $100k+ monthly businesses.
              <span className="text-[#FFD700] font-bold"> No $250k+ salary. No empty suits.</span> Just results.
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

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                What's a <span className="text-[#8B0000]">Consigliere</span>?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                In the family, the <strong>Consigliere</strong> is the trusted advisor. The strategic mind. The one who sees the whole board
                while everyone else is focused on one move. That's what a Fractional CMO does for your business.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                You get executive-level marketing leadership—someone who's scaled businesses from 6 to 7 and 7 to 8 figures.
                <strong> But you don't pay a $250k+ salary.</strong> You get the expertise. We handle the execution. Capisce?
              </p>
              <div className="bg-gradient-to-br from-[#8B0000] to-black border-2 border-[#FFD700] p-6 my-8 rounded-xl">
                <p className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                  Full-Time CMO: $250k - $400k/year + benefits
                </p>
                <p className="text-lg font-bold text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>
                  Our Consigliere: $8k - $20k/month (no BS, just results)
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                When You Need <span className="text-[#8B0000]">The Consigliere</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">💼</span>
                  <span className="text-gray-700"><strong>You're doing $100k+ monthly</strong> but your marketing is all over the place—no strategy, just tactics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">💼</span>
                  <span className="text-gray-700"><strong>You're burning cash on ads</strong> with no one at the top calling the shots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">💼</span>
                  <span className="text-gray-700"><strong>You have a marketing team</strong> but they're rudderless—need a boss to lead them</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">💼</span>
                  <span className="text-gray-700"><strong>You're ready to scale to 7 or 8 figures</strong> but don't have the marketing chops in-house</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">💼</span>
                  <span className="text-gray-700"><strong>Agencies are executing</strong> but there's no strategic oversight—the inmates are running the asylum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">💼</span>
                  <span className="text-gray-700"><strong>You want a scalable marketing operation</strong> that doesn't depend on you for every decision</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-[#2a2a2a] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              What The <span className="text-[#FFD700]">Consigliere</span> Handles
            </h2>
            <p className="text-xl text-gray-300" style={{ fontFamily: "'Georgia', serif" }}>
              Complete marketing leadership. No guesswork. No excuses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Marketing Strategy Development</h3>
              <p className="text-gray-300">
                The master plan. Your roadmap to domination. Strategy aligned with your business goals and market position.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Team Leadership & Management</h3>
              <p className="text-gray-300">
                We run the crew. Lead your internal team, manage agency partners, make sure everyone's following orders.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Customer Acquisition Strategy</h3>
              <p className="text-gray-300">
                Multi-channel plays optimized for high-ticket sales. We bring in the right people, not tire-kickers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Marketing Budget Optimization</h3>
              <p className="text-gray-300">
                Every dollar has a job. Strategic allocation for maximum ROI. No wasteful spending on our watch.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Brand Positioning & Messaging</h3>
              <p className="text-gray-300">
                Define your territory. Own your market position. Make competitors look like amateurs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Marketing Systems & Processes</h3>
              <p className="text-gray-300">
                Build infrastructure that scales. Systems that work while you sleep. Sustainable growth, not chaos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Performance Analytics & Reporting</h3>
              <p className="text-gray-300">
                Track what matters. Executive-level insights. We tell you what's working and what's getting cut.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Go-to-Market Planning</h3>
              <p className="text-gray-300">
                Launch strategies for new offers. Market expansion. We make sure every launch is a hit, not a flop.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" style={{ fontFamily: "'Georgia', serif" }}>Marketing Technology Stack</h3>
              <p className="text-gray-300">
                Select and optimize your tools. The right tech for maximum efficiency. No bloated software budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Fractional CMO Services for Every High-Ticket Business Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/industries/coaches" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-Ticket Coaches</h3>
              <p className="text-gray-700">$10k+ coaching programs, masterminds, and transformation programs</p>
            </Link>
            <Link href="/industries/consultants" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Consultants</h3>
              <p className="text-gray-700">Strategic consulting, implementation services, and advisory</p>
            </Link>
            <Link href="/industries/course-creators" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Course Creators</h3>
              <p className="text-gray-700">Premium online courses, certifications, and training programs</p>
            </Link>
            <Link href="/industries/service-businesses" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">B2B Service Businesses</h3>
              <p className="text-gray-700">Professional services, agencies, and specialized B2B offerings</p>
            </Link>
            <Link href="/industries/saas" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SaaS Companies</h3>
              <p className="text-gray-700">B2B software platforms doing $1M+ ARR</p>
            </Link>
            <Link href="/industries/product-businesses" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-Ticket Products</h3>
              <p className="text-gray-700">Premium ecommerce, luxury goods, and B2B equipment</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#8B0000] to-black text-white relative overflow-hidden">
        {/* Character image */}
        <motion.div
          className="absolute left-0 bottom-0 w-64 opacity-50"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/fractional-cmo-character.png" alt="The Boss" className="w-full h-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            Why <span className="text-[#FFD700]">The Family</span> Is Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border-2 border-[#FFD700]/30">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>Proven Track Record</h3>
              <p className="text-gray-200">
                We've scaled dozens of high-ticket businesses from 6 to 7 and 7 to 8 figures. We don't guess. We execute what works.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border-2 border-[#FFD700]/30">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>High-Ticket Specialization</h3>
              <p className="text-gray-200">
                Unlike amateurs, we exclusively work with high-ticket businesses. Long sales cycles, premium positioning—this is our territory.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border-2 border-[#FFD700]/30">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>The Family Guarantee</h3>
              <p className="text-gray-200">
                30% revenue increase in year 1 or we work for free. Find another Consigliere who guarantees results. You can't.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border-2 border-[#FFD700]/30">
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>Hands-On Execution</h3>
              <p className="text-gray-200">
                We don't create PowerPoint decks and disappear. We execute. We're in the trenches with you. That's the family way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            Ready to Bring In <span className="text-[#FFD700]">The Consigliere</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            If you're doing $100k+ monthly and serious about scaling, let's talk.
            <br />We don't work with everyone. Only serious players.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#a00000] transition-all transform hover:scale-105 shadow-2xl"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Join The Family
          </Link>
        </div>
      </section>
    </div>
  );
}
