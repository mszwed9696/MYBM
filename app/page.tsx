"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SpeechBubble from "@/components/SpeechBubble";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";
import Starburst from "@/components/Starburst";

export default function Home() {
  return (
    <>
      {/* Vintage Cartoon Hero - Above the Fold */}
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        {/* Halftone background pattern */}
        <motion.div
          className="absolute inset-0 screen-tone opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        />

        {/* Philadelphia cityscape silhouette */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-48 opacity-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <img
            src="/heroes/philadelphia-skyline.png"
            alt=""
            className="w-full h-full object-cover object-bottom"
            style={{ filter: 'sepia(1) contrast(1.5)' }}
            loading="eager"
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Offer */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Headline - Dream Outcome */}
              <div>
                <motion.h1
                  className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  WE MAKE YOU
                  <br />
                  AN OFFER
                  <br />
                  YOU CAN'T REFUSE
                </motion.h1>
                <motion.p
                  className="text-2xl md:text-3xl font-mobster text-black leading-tight mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  30% Revenue Increase Guaranteed Or We Work For Free
                </motion.p>
              </div>

              {/* Value Proposition - Perceived Likelihood */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <ComicPanel>
                  <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
                    <span className="font-black text-2xl">MINIMUM REQUIREMENT: $100,000+ in monthly revenue</span>
                    <br /><br />
                    We'll add <span className="font-bold text-black">$30k-$100k+ to your monthly revenue</span> in the next 12 months—or we work for free until we hit it.
                    <br /><br />
                    <span className="font-bold">Zero risk. Maximum results. That's the deal.</span>
                  </p>
                </ComicPanel>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <CartoonButton href="/apply" variant="primary" className="text-lg px-8 py-4">
                  APPLY NOW →
                </CartoonButton>
                <CartoonButton href="/guarantee" variant="gold" className="text-lg px-8 py-4">
                  See The Guarantee
                </CartoonButton>
              </motion.div>

              <motion.p
                className="text-sm font-newspaper text-cartoon-brown italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                ★ Limited partnerships • MINIMUM $100,000/month revenue required • 24-48hr review ★
              </motion.p>
            </motion.div>

            {/* Right Column - The Don Character */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ComicPanel className="relative halftone-overlay p-0 overflow-hidden">
                <motion.div
                  className="relative w-full h-[600px] overflow-hidden flex items-center justify-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <img
                    src="/characters/driver-vintage-car.png"
                    alt="The Don - Mind Your Business Media Founder"
                    className="w-full h-full object-contain"
                    style={{ objectPosition: 'center center' }}
                    loading="eager"
                  />
                </motion.div>
                <SpeechBubble className="mt-6 mx-4 mb-4">
                  "We don't make promises. We make <span className="font-black">guarantees</span>. 30% revenue growth or you don't pay. <span className="italic">Capisce?</span>"
                </SpeechBubble>
                <p className="text-center font-newspaper font-bold text-cartoon-ink border-t-3 border-cartoon-ink pt-3 pb-4 mx-4">
                  Don Michael Szwed, Founder
                </p>
              </ComicPanel>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Numbers - Trust Building */}
      <section className="py-16 bg-cartoon-ink text-cartoon-cream border-b-5 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "+287%", label: "Average Growth", delay: 0 },
              { value: "100%", label: "Hit Guarantee", delay: 0.1 },
              { value: "$100k+", label: "Minimum Revenue", delay: 0.2 },
              { value: "12mo", label: "Max Timeline", delay: 0.3 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: stat.delay }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-cartoon text-white mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-newspaper uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem - Why Other Agencies Fail */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="sound-effect mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              BAM!
            </motion.div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHY OTHER AGENCIES
              <br />
              <span className="text-black">FAIL YOU</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown max-w-3xl mx-auto">
              Most agencies drain $5k-10k/month with zero accountability. Here's why:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⏰",
                title: "TOO SLOW",
                problem: "\"Give us 18-24 months...\"",
                solution: "6-month ramp, 12-month guarantee max"
              },
              {
                icon: "🎲",
                title: "TOO RISKY",
                problem: "\"Pay us first, hope for results later...\"",
                solution: "30% or free. You don't lose. We guarantee it."
              },
              {
                icon: "😓",
                title: "TOO MUCH WORK",
                problem: "\"You need to provide content, feedback, resources...\"",
                solution: "We handle everything. You show up to strategy calls."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <ComicPanel className="text-center h-full">
                  <motion.div
                    className="text-6xl mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring" }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-cartoon text-3xl text-black mb-4 uppercase">{item.title}</h3>
                  <div className="mb-4">
                    <p className="font-newspaper text-lg italic text-cartoon-brown mb-2">
                      Them:
                    </p>
                    <p className="font-newspaper text-base text-cartoon-ink">
                      {item.problem}
                    </p>
                  </div>
                  <div className="border-t-3 border-cartoon-ink pt-4">
                    <p className="font-newspaper text-lg font-bold text-black mb-2">
                      Us:
                    </p>
                    <p className="font-newspaper text-base text-cartoon-ink font-bold">
                      {item.solution}
                    </p>
                  </div>
                </ComicPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Value Equation Breakdown */}
      <section className="py-20 md:py-32 bg-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              HOW WE DELIVER
              <br />
              <span className="text-black">GUARANTEED RESULTS</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown max-w-3xl mx-auto">
              Maximum outcome + Maximum certainty + Minimum time + Zero extra work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "🎯",
                title: "Dream Outcome",
                boldText: "Not \"more leads\" or \"better brand awareness.\"",
                description: "We guarantee 30% more revenue in 12 months. That's $30k+/month for a $100k/mo business. $75k+/month for a $250k/mo business. Real money. In your account.",
                delay: 0
              },
              {
                icon: "✅",
                title: "100% Certainty",
                boldText: "We back it with a guarantee:",
                description: "If we don't hit 30% in 12 months, we work for free until we do. You literally can't lose. We've hit it 100% of the time. We'll hit it for you too.",
                delay: 0.15
              },
              {
                icon: "⚡",
                title: "Fast Results",
                boldText: "Not \"maybe in 2 years.\"",
                description: "Most clients see momentum in 90-120 days. Full 30% within 12 months max. No endless \"testing.\" We know what works.",
                delay: 0.3
              },
              {
                icon: "🤝",
                title: "Zero Extra Work",
                boldText: "Not \"You need to create content, manage ads, build funnels...\"",
                description: "We do everything. You show up to weekly strategy calls. We handle ads, funnels, content, automation, optimization. Everything.",
                delay: 0.45
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <ComicPanel className="halftone-overlay h-full">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-6xl"
                      initial={{ rotate: -180, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay + 0.2, type: "spring" }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-cartoon text-2xl text-black uppercase mb-3">{item.title}</h3>
                      <p className="font-newspaper text-lg leading-relaxed text-cartoon-ink mb-4">
                        <span className="font-black">{item.boldText}</span>
                      </p>
                      <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ComicPanel>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CartoonButton href="/apply" variant="primary" className="text-xl px-12 py-5">
              GET THE GUARANTEE →
            </CartoonButton>
          </motion.div>
        </div>
      </section>

      {/* Case Studies / Proof */}
      <section className="py-20 md:py-32 bg-cartoon-newsprint border-b-5 border-cartoon-ink halftone-bg">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="sound-effect mb-6 text-black"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              PROOF!
            </motion.div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              THE NUMBERS
              <br />
              <span className="text-black">DON'T LIE</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown">
              Real clients. Real results. Real revenue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                before: "$80k/mo",
                after: "$310k/mo",
                growth: "+287%",
                timeline: "9 months",
                industry: "High-Ticket Coaching"
              },
              {
                before: "$150k/mo",
                after: "$385k/mo",
                growth: "+156%",
                timeline: "12 months",
                industry: "B2B Consulting"
              },
              {
                before: "$120k/mo",
                after: "$372k/mo",
                growth: "+210%",
                timeline: "11 months",
                industry: "Online Courses"
              }
            ].map((caseStudy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateY: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <ComicPanel className="text-center bg-white h-full">
                  <motion.div
                    className="text-5xl font-cartoon text-black mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    {caseStudy.growth}
                  </motion.div>
                  <div className="space-y-3 font-newspaper">
                    <div>
                      <span className="text-sm uppercase tracking-wide text-cartoon-brown">Before:</span>
                      <div className="text-2xl font-bold text-cartoon-ink">{caseStudy.before}</div>
                    </div>
                    <div className="text-3xl text-black">→</div>
                    <div>
                      <span className="text-sm uppercase tracking-wide text-cartoon-brown">After:</span>
                      <div className="text-2xl font-bold text-black">{caseStudy.after}</div>
                    </div>
                    <div className="border-t-3 border-cartoon-ink pt-3 mt-4">
                      <div className="text-xs uppercase text-cartoon-brown mb-1">{caseStudy.timeline}</div>
                      <div className="text-sm font-bold text-black">{caseStudy.industry}</div>
                    </div>
                  </div>
                </ComicPanel>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/results" className="font-newspaper text-lg text-cartoon-ink underline hover:text-black transition-colors">
              View All Case Studies →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For - Qualification */}
      <section className="py-20 md:py-32 bg-cartoon-tan border-b-5 border-cartoon-ink">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHO WE WORK WITH
              <br />
              <span className="text-black">(AND WHO WE DON'T)</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Yes */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <ComicPanel className="bg-white border-cartoon-ink h-full">
                <motion.div
                  className="text-6xl text-center mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  ✓
                </motion.div>
                <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-black">PERFECT FIT:</h3>
                <ul className="space-y-4 font-newspaper text-lg text-cartoon-ink">
                  {[
                    { text: "$100k+/month", subtext: " in revenue (proven business model)" },
                    { text: "Ready to scale", subtext: " (infrastructure in place)" },
                    { text: "Want accountability", subtext: " (not just \"exposure\")" },
                    { text: "Long-term partner", subtext: " (6-12+ month commitment)" }
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <span className="text-2xl">✓</span>
                      <span><span className="font-bold">{item.text}</span>{item.subtext}</span>
                    </motion.li>
                  ))}
                </ul>
              </ComicPanel>
            </motion.div>

            {/* No */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <ComicPanel className="bg-cartoon-ink text-white border-black h-full">
                <motion.div
                  className="text-6xl text-center mb-4"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  ✗
                </motion.div>
                <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">NOT A FIT:</h3>
                <ul className="space-y-4 font-newspaper text-lg text-white">
                  {[
                    { text: "Under $100k/month", subtext: " (we can't guarantee results at that scale)" },
                    { text: "Want \"brand awareness\"", subtext: " without revenue tracking" },
                    { text: "Looking for cheap labor", subtext: " (we're not the cheapest)" },
                    { text: "Need hand-holding", subtext: " (we execute, you approve)" }
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <span className="text-2xl">✗</span>
                      <span><span className="font-bold">{item.text}</span>{item.subtext}</span>
                    </motion.li>
                  ))}
                </ul>
              </ComicPanel>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - The Offer */}
      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 halftone-bg opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Character illustration */}
        <motion.div
          className="absolute left-0 bottom-0 w-48 md:w-64 opacity-30 z-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/characters/don-cigar-car.png" alt="" className="w-full h-auto" loading="lazy" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <motion.div
            className="sound-effect text-white mb-8"
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            MAKE THE CALL!
          </motion.div>

          <motion.h2
            className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            READY FOR
            <br />
            <span className="text-white">30% MORE REVENUE?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
              <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
                If you're doing <span className="font-black text-black">$100k+ monthly</span> and serious about growth...
                <br /><br />
                We'll guarantee you <span className="font-black text-black">30% more revenue in 12 months</span> or work for free until we hit it.
                <br /><br />
                <span className="font-black text-2xl text-black">Zero risk. Maximum results.</span>
              </p>
            </ComicPanel>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">
              APPLY NOW →
            </CartoonButton>
          </motion.div>

          <motion.p
            className="font-newspaper text-sm text-cartoon-tan uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            ★ APPLICATION REVIEW: 24-48 HOURS ★<br/>
            LIMITED PARTNERSHIPS AVAILABLE ★ MINIMUM $100,000/MONTH REVENUE REQUIRED ★
          </motion.p>

          <motion.div
            className="mt-12 pt-8 border-t-3 border-cartoon-tan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="font-mobster text-xl italic text-cartoon-cream">
              "We protect our partners. We deliver results. Or we don't get paid. <span className="not-italic font-black">Capisce?</span>"
            </p>
            <p className="font-newspaper text-sm mt-2 text-cartoon-tan">
              — Don Michael Szwed, Mind Your Business Media
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
