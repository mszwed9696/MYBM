"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden">
        {/* DC Monument background for authority/establishment */}
        <div className="absolute inset-0 opacity-15 z-0">
          <img src="/heroes/philadelphia-skyline.png" alt="Authority" className="w-full h-full object-cover"  style={{ objectPosition: "center center" }} loading="lazy" />
        </div>

        {/* The Boss character */}
        <motion.div
          className="absolute right-0 bottom-0 w-72 md:w-96 opacity-50 z-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/boss-city-hall.png" alt="The Boss" className="w-full h-auto"  loading="lazy" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We're Not Like <span className="text-[#FFD700]">The Other Families</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300"
            style={{ fontFamily: "'Georgia', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We only work with serious players doing $100k+ monthly.
            <br /><span className="text-[#FFD700] font-bold">We guarantee results. Most can't.</span>
          </motion.p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Georgia', serif" }}>
            How <span className="text-[#8B0000]">The Family</span> Started
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              <strong>Mind Your Business Media</strong> was built on one rule: marketing agencies should answer for revenue, not vanity metrics.
            </p>
            <p>
              After years in the trenches—scaling high-ticket coaches, consultants, course creators, premium services—we saw the same scam everywhere.
              Agencies charging $10k-20k/month for "clicks," "impressions," "engagement." Meanwhile, their clients couldn't pay rent.
            </p>
            <p>
              So we built it differently. <strong>We only take clients we know we can grow 30%+ in year one.</strong> If we don't hit that number, we work for free until we do.
              No other agency makes this promise because they can't deliver.
            </p>
            <p>
              This model works because we're selective (only $100k+ monthly businesses) and because we've cracked the code on scaling high-ticket offers
              across channels and industries. <span className="text-[#8B0000] font-bold">We don't guess. We execute what works.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "'Georgia', serif" }}>Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue-First</h3>
              <p className="text-gray-700">
                We don't care about likes, followers, or impressions. Our sole focus is increasing your net
                revenue by 30% or more.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High-Ticket Specialized</h3>
              <p className="text-gray-700">
                We exclusively work with high-ticket businesses. Different strategies, different execution,
                different results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Execution</h3>
              <p className="text-gray-700">
                We don't just create strategy decks. We execute everything: ads, funnels, content, email,
                optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Georgia', serif" }}>Our Values</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accountability Over Activity</h3>
              <p className="text-gray-700">
                We measure success by revenue growth, not how busy we look. Results matter, effort doesn't.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Truth Over Comfort</h3>
              <p className="text-gray-700">
                We'll tell you what you need to hear, not what you want to hear. If your offer isn't strong enough
                to scale, we'll say so.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Over Quantity</h3>
              <p className="text-gray-700">
                We work with a limited number of clients because delivering guaranteed results requires deep
                partnership, not surface-level service.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Long-Term Over Quick Wins</h3>
              <p className="text-gray-700">
                We build sustainable marketing systems that compound over years, not gimmicks that spike for a month
                then crash.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center mt-12">
            <div>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>87%</div>
              <div className="text-[#FFD700]">Average Revenue Growth Year 1</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>100%</div>
              <div className="text-[#FFD700]">Clients Hit 30% Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>$18M+</div>
              <div className="text-[#FFD700]">Revenue Added for Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>50+</div>
              <div className="text-[#FFD700]">Businesses Scaled</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you're doing $100k+ monthly and ready for guaranteed growth, let's talk.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-[#a00000]"
          >
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
