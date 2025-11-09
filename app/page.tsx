"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import SkylineDivider from "@/components/SkylineDivider";

export default function Home() {
  return (
    <>
      {/* Hero Section - Mobster Theme with Philadelphia Skyline */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#2a1a4a] to-black text-white overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Philadelphia cityscape - FULL image visible including sunset and all details */}
        <div className="absolute inset-0 z-0">
          <img
            src="/heroes/philadelphia-skyline.png"
            alt="Philadelphia Skyline"
            className="w-full h-full object-cover opacity-95"
            style={{ objectPosition: 'center top' }}
          />
          {/* Very subtle gradient overlay - preserve sunset visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>

        {/* Floating gold particles (money theme) */}
        <FloatingParticles count={40} color="#FFD700" />

        {/* The Don character with car - positioned in front */}
        <motion.div
          className="absolute right-8 md:right-16 lg:right-24 bottom-0 w-72 md:w-[400px] lg:w-[520px] z-10"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 25px 60px rgba(0, 0, 0, 0.9))" }}
        >
          <img src="/characters/driver-vintage-car.png" alt="The Don" className="w-full h-auto" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-20 flex items-center min-h-screen">
          <div className="max-w-4xl">
            <motion.div
              className="inline-block mb-6 px-6 py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-sm font-bold tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: "'Georgia', serif" }}
            >
              🎩 FOR BUSINESSES DOING $100K+ MONTHLY REVENUE 🎩
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Don't Make Offers
              <br />
              <span className="text-[#FFD700]">We Make You An Offer</span>
              <br />
              <span className="text-5xl md:text-6xl">You Can't Refuse</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              30% revenue increase in year 1, <span className="text-[#FFD700] font-bold">guaranteed</span>.
              Or we work for free until you get it. That's the family way.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/apply"
                className="bg-[#8B0000] border-2 border-[#FFD700] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all transform hover:scale-105 text-center shadow-lg"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Join The Family
              </Link>
              <Link
                href="/guarantee"
                className="bg-black/50 border-2 border-[#FFD700] text-[#FFD700] px-10 py-5 rounded-lg font-bold text-lg hover:bg-black/70 transition-all text-center"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                See The Guarantee
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8 bg-black/60 p-8 rounded-xl border-2 border-[#FFD700]/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <div className="text-5xl font-bold text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>30%</div>
                <div className="text-gray-400 mt-2 text-sm">Minimum Revenue Increase</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>$100k+</div>
                <div className="text-gray-400 mt-2 text-sm">Monthly Revenue Required</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>100%</div>
                <div className="text-gray-400 mt-2 text-sm">Risk-Free Guarantee</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-[#2a2a2a]" />
      </div>

      {/* Why Most Agencies Are "Weak" Section */}
      <section className="py-20 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] text-white relative overflow-hidden">
        <FloatingParticles count={20} color="#8B0000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              Why Most Agencies Are <span className="text-[#8B0000]">Weak</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "'Georgia', serif" }}>
              They make empty promises, take your money, and disappear when results don't show.
              <br />We don't do business that way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💸",
                title: "They Burn Your Money",
                description: "$5k-10k/month retainers with zero accountability. They test on your dime while you bleed cash.",
              },
              {
                icon: "🎭",
                title: "They Hide Behind Metrics",
                description: "Clicks, impressions, engagement—all vanity. They don't talk about revenue because they can't deliver it.",
              },
              {
                icon: "🤡",
                title: "They Use Cookie-Cutters",
                description: "Same strategy for everyone. High-ticket businesses need specialized expertise, not generic templates.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/50 p-8 rounded-xl border-2 border-[#8B0000]/30 hover:border-[#FFD700] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Way - The Family Business */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white relative overflow-hidden">
        {/* The Banker - Left side */}
        <motion.div
          className="absolute left-0 bottom-0 w-56 md:w-72 opacity-70 z-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/banker-briefcase.png" alt="The Banker" className="w-full h-auto" />
        </motion.div>

        {/* The Enforcer - Right side */}
        <motion.div
          className="absolute right-0 bottom-0 w-56 md:w-72 opacity-70 z-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/enforcer-statue.png" alt="The Enforcer" className="w-full h-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              The <span className="text-[#FFD700]">Mind Your Business</span> Way
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "'Georgia', serif" }}>
              We're a family business. We protect our partners. We deliver results. Or we don't get paid. Capisce?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Revenue Is The Only Metric That Matters",
                description: "We don't care about vanity metrics. Our sole focus: increase your net revenue by 30% minimum. That's it.",
              },
              {
                icon: "👔",
                title: "We Only Work With Serious Players",
                description: "$100k+ monthly revenue businesses only. You're established, you're ready to scale, you want guarantees.",
              },
              {
                icon: "🤝",
                title: "Our Word Is Our Bond",
                description: "30% revenue increase in year 1 or we work for free. No other agency makes this promise because they can't deliver.",
              },
              {
                icon: "💼",
                title: "Complete Execution, Not Just Strategy",
                description: "We don't hand you a deck and disappear. We execute everything: ads, funnels, content, optimization. Done.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-xl border-2 border-[#FFD700]/20 hover:border-[#FFD700] transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Services with cartoon cards */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-black text-white relative overflow-hidden">
        <FloatingParticles count={25} color="#FFD700" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              What The <span className="text-[#FFD700]">Family</span> Does For You
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "'Georgia', serif" }}>
              Everything you need to dominate your market and scale to 8-figures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Fractional CMO", desc: "Strategic leadership without the $250k salary. We run your entire marketing operation.", link: "/services/fractional-cmo" },
              { title: "Paid Advertising", desc: "High-converting campaigns on Google, Facebook, LinkedIn, YouTube. Built for high-ticket.", link: "/services/paid-advertising" },
              { title: "Funnel Optimization", desc: "Turn traffic into qualified leads and sales. Complete funnel audits and conversion optimization.", link: "/services/funnel-optimization" },
              { title: "Marketing Strategy", desc: "Custom strategies for scaling high-ticket offers. Positioning, messaging, go-to-market.", link: "/services/marketing-strategy" },
              { title: "Content & SEO", desc: "Authority content that ranks and converts. Thought leadership that attracts premium clients.", link: "/services/content-marketing" },
              { title: "Marketing Automation", desc: "Scale marketing without scaling team. Automated nurture sequences and sales systems.", link: "/services/marketing-automation" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={service.link}
                  className="group block bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-8 rounded-xl border-2 border-[#8B0000]/30 hover:border-[#FFD700] hover:shadow-2xl transition-all h-full"
                >
                  <h3 className="text-2xl font-bold mb-3 text-[#FFD700] group-hover:text-white transition-colors" style={{ fontFamily: "'Georgia', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.desc}</p>
                  <span className="text-[#FFD700] font-semibold group-hover:underline">Learn More →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - The Numbers */}
      <section className="py-20 bg-gradient-to-br from-black via-[#1a1a2e] to-black text-white relative overflow-hidden">
        {/* The Bagman character - floating animation */}
        <motion.div
          className="absolute right-10 top-10 w-64 md:w-80 opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/characters/bagman-money.png" alt="The Bagman" className="w-full h-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              The <span className="text-[#FFD700]">Numbers</span> Don't Lie
            </h2>
            <Link href="/results" className="text-[#FFD700] text-xl hover:underline font-bold">
              View All Case Studies →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { percent: "+287%", desc: "High-ticket coaching: $80k/mo → $310k/mo in 9 months" },
              { percent: "+156%", desc: "B2B consulting: $150k/mo → $385k/mo in 12 months" },
              { percent: "+210%", desc: "Online courses: $120k/mo → $372k/mo in 11 months" },
            ].map((result, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#8B0000] to-[#5a0000] p-8 rounded-xl border-2 border-[#FFD700]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl font-bold text-[#FFD700] mb-4" style={{ fontFamily: "'Georgia', serif" }}>{result.percent}</div>
                <p className="text-white text-lg">{result.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#8B0000] to-black text-white relative overflow-hidden">
        <FloatingParticles count={30} color="#FFD700" />

        {/* The Don character - Left side */}
        <motion.div
          className="absolute left-0 bottom-0 w-64 md:w-96 opacity-75 z-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.75 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <img src="/characters/don-cigar-car.png" alt="The Don" className="w-full h-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready To Join <span className="text-[#FFD700]">The Family</span>?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 text-gray-200"
            style={{ fontFamily: "'Georgia', serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            If you're doing $100k+ monthly and serious about scaling,
            <br />
            we'll make you an offer you can't refuse.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/apply"
              className="inline-block bg-black border-4 border-[#FFD700] text-[#FFD700] px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#FFD700] hover:text-black transition-all transform hover:scale-110 shadow-2xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Join The Family Now
            </Link>
          </motion.div>
          <motion.p
            className="mt-8 text-[#FFD700] text-sm font-bold"
            style={{ fontFamily: "'Georgia', serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Application review: 24-48 hours | Limited partnerships available
          </motion.p>
        </div>
      </section>
    </>
  );
}
