"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function SkoolCommunityPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center">
        {/* Hero cityscape background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img src="/heroes/skool-community-hero.png" alt="Skool Community" className="w-full h-full object-cover" style={{ objectPosition: "center center" }}  loading="lazy" />
          {/* Light gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/50 via-[#1a1a2e]/40 to-black/60"></div>
        </div>

        {/* Character */}
        <motion.div
          className="absolute right-4 sm:right-8 md:right-16 lg:right-20 bottom-0 w-48 sm:w-60 md:w-80 lg:w-96 opacity-80 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/skool-community-character.png" alt="Community Boss" className="w-full h-auto"  loading="lazy" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <div
              className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-xs sm:text-sm font-bold tracking-wide"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              🎓 SKOOL COMMUNITY FUNNELS - THE INNER CIRCLE 🎓
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 8px rgba(0,0,0,0.9)" }}
            >
              Build Your Own<br />
              <span className="text-[#FFD700]">Exclusive Inner Circle</span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
            >
              Turn your expertise into a thriving Skool community.
              <span className="text-[#FFD700] font-bold"> Funnels that fill seats. Systems that keep them engaged.</span> Recurring revenue on autopilot.
            </p>
            <div>
              <Link
                href="/apply"
                className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-[#a00000] transition-all transform hover:scale-105 shadow-lg"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Build Your Empire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-white" />
      </div>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Why <span className="text-[#8B0000]">Skool Communities</span>?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                You've got the expertise. You've got the audience. But you're leaving money on the table
                if you're not building a <strong>recurring revenue community</strong>.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                Skool is the new king of paid communities. Better engagement than Facebook Groups.
                Easier to monetize than Discord. <strong>More profitable than courses alone.</strong>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                But here's the thing: <span className="text-[#8B0000] font-bold">Building a community that actually makes money
                requires a funnel that converts</span> and retention systems that keep people paying month after month.
              </p>
              <div className="bg-gradient-to-br from-[#8B0000] to-black border-2 border-[#FFD700] p-6 my-8 rounded-xl">
                <p className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                  Average Skool Community (DIY): 20-50 members, $2k-5k MRR
                </p>
                <p className="text-lg font-bold text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>
                  Our Clients: 200-1,000+ members, $20k-100k+ MRR
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                You Need This If...
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">🎓</span>
                  <span className="text-gray-700"><strong>You're launching a Skool community</strong> but don't know how to fill it with paying members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">🎓</span>
                  <span className="text-gray-700"><strong>You have a community</strong> but it's a ghost town with poor engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">🎓</span>
                  <span className="text-gray-700"><strong>Your retention sucks</strong>—people join then cancel within 30-60 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">🎓</span>
                  <span className="text-gray-700"><strong>You want recurring revenue</strong> instead of the one-time course sale hamster wheel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">🎓</span>
                  <span className="text-gray-700"><strong>You're spending hours answering DMs</strong> instead of building a scalable support system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] text-2xl mr-3">🎓</span>
                  <span className="text-gray-700"><strong>You know communities are the future</strong> but don't have time to figure it out yourself</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#2a2a2a] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              What We <span className="text-[#FFD700]">Build For You</span>
            </h2>
            <p className="text-xl text-gray-300" style={{ fontFamily: "'Georgia', serif" }}>
              End-to-end Skool community funnels and optimization. No guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Community Funnel Strategy</h3>
              <p className="text-gray-300">
                Multi-step acquisition funnels designed to fill your Skool community with qualified members who actually engage and stay.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Paid Ads to Community Pipeline</h3>
              <p className="text-gray-300">
                Facebook, Instagram, YouTube ads optimized for community applications. Low CAC, high LTV members.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Skool Setup & Optimization</h3>
              <p className="text-gray-300">
                Complete Skool platform setup with onboarding sequences, gamification, and engagement systems that keep members active.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Engagement & Retention Systems</h3>
              <p className="text-gray-300">
                Daily engagement prompts, weekly challenges, leaderboards, and reward systems. Turn lurkers into active participants.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Content & Curriculum Design</h3>
              <p className="text-gray-300">
                Structure your courses, programs, and weekly content to maximize value delivery and minimize churn.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Application & Onboarding Funnels</h3>
              <p className="text-gray-300">
                Pre-qualify members with application funnels. Automated onboarding that gets new members engaged in the first 48 hours.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Churn Reduction Strategies</h3>
              <p className="text-gray-300">
                Win-back sequences, value reinforcement campaigns, and milestone celebrations that keep members subscribed long-term.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Analytics & Optimization</h3>
              <p className="text-gray-300">
                Track member engagement, content performance, churn rates. Data-driven decisions to maximize MRR growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3" style={{ fontFamily: "'Georgia', serif" }}>Upsell & Expansion Revenue</h3>
              <p className="text-gray-300">
                VIP tiers, 1-on-1 coaching upgrades, live events. Turn $99/mo members into $500-2k/mo high-ticket clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              The <span className="text-[#8B0000]">Numbers</span> Don't Lie
            </h2>
            <p className="text-xl text-gray-700">
              Real results from our Skool community clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700] text-center">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                400+
              </div>
              <p className="text-white font-semibold mb-2">Members in 90 Days</p>
              <p className="text-gray-300 text-sm">Business Coach - Started from 0</p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700] text-center">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                $47k
              </div>
              <p className="text-white font-semibold mb-2">Monthly Recurring Revenue</p>
              <p className="text-gray-300 text-sm">Course Creator - Up from $8k/mo</p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-black p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700] text-center">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                89%
              </div>
              <p className="text-white font-semibold mb-2">90-Day Retention Rate</p>
              <p className="text-gray-300 text-sm">SaaS Founder - Up from 52%</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              How We <span className="text-[#FFD700]">Build Your Empire</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>Strategy Session</h3>
              <p className="text-gray-300">
                We map out your community offer, pricing tiers, positioning, and ideal member profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>Funnel Build</h3>
              <p className="text-gray-300">
                Complete funnel setup—landing pages, application forms, payment processing, automated onboarding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>Traffic & Launch</h3>
              <p className="text-gray-300">
                Deploy paid ads, organic content, and email campaigns to fill your community with founding members.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#FFD700]" style={{ fontFamily: "'Georgia', serif" }}>Scale & Optimize</h3>
              <p className="text-gray-300">
                Continuous testing, optimization, and scaling. More members, better engagement, higher LTV.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to Build Your <span className="text-[#8B0000]">Inner Circle</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We're selective. We only work with experts who have proven expertise and are ready to commit to building
            a real community—not a ghost town.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            If you're doing $50k+ monthly and ready to add $20k-100k+ MRR through a Skool community,
            <span className="text-[#8B0000] font-bold"> let's talk.</span>
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-lg font-bold text-lg sm:text-xl hover:bg-[#a00000] transition-all transform hover:scale-105 shadow-lg"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Apply to Work With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
