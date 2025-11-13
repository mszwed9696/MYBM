"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SkylineDivider from "@/components/SkylineDivider";

export default function FractionalCMOPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-black text-white py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center">
        {/* Vegas Strip cityscape - PROMINENT hero image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img src="/heroes/paid-advertising-hero.png" alt="Vegas Strip" className="w-full h-full object-cover"  style={{ objectPosition: "center center" }} loading="lazy" />
          {/* Light gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/50 via-[#1a1a2e]/40 to-black/60"></div>
        </div>
        {/* The Enforcer character */}
        <div
          className="absolute right-0 bottom-0 w-64 md:w-80 opacity-60 z-0"
        >
          <img src="/characters/paid-advertising-character.png" alt="The Enforcer" className="w-full h-auto"  loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <div
              className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-xs sm:text-sm font-bold tracking-wide"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              🎯 PAID ADVERTISING - THE ENFORCER 🎯
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"               style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 8px rgba(0,0,0,0.9)" }}
            >
              We Don't Chase Leads<br />
              We <span className="text-[#FFD700]">Enforce Results</span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Paid ads across Google, Facebook, LinkedIn, YouTube.
              <span className="text-[#FFD700] font-bold"> No tire-kickers. No BS. Just qualified buyers.</span>
            </p>
            <div
            >
              <Link
                href="/apply"
                className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-[#a00000] transition-all transform hover:scale-105 shadow-lg"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Join The Family
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-white" />
      </div>

      {/* Problem */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Our High-Ticket Paid Advertising Methodology
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🎯</div>
              <h3 className="text-2xl font-bold mb-3">Precision Audience Targeting</h3>
              <p className="text-gray-200">
                We target based on income levels, job titles, company size, and buying behavior—not demographics.
                Reach people who can afford your premium pricing.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>🔄</div>
              <h3 className="text-2xl font-bold mb-3">Multi-Touch Attribution</h3>
              <p className="text-gray-200">
                High-ticket buyers need 7-12 touchpoints. We build campaigns across multiple platforms with
                strategic retargeting and nurture sequences.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>💰</div>
              <h3 className="text-2xl font-bold mb-3">CAC:LTV Optimization</h3>
              <p className="text-gray-200">
                We optimize for customer lifetime value, not cost per lead. Spending $500-2k to acquire a $50k client
                is a great ROI—we focus on what matters.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4" style={{ fontFamily: "\'Georgia\', serif" }}>📊</div>
              <h3 className="text-2xl font-bold mb-3">Revenue Attribution</h3>
              <p className="text-gray-200">
                Track every dollar from ad click to closed client. Full transparency on what's working, what's not,
                and where to scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Funnel Strategy Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="text-6xl mb-6">🎬</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              VSL Funnels: The Silent Closer
            </h2>
            <p className="text-xl text-red-100">
              Video Sales Letters that sell high-ticket offers while you sleep. No sales calls needed until they're ready to wire the money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>What's a VSL Funnel?</h3>
              <p className="text-red-100 mb-4">
                A Video Sales Letter is a long-form video (15-45 minutes) that does all the selling for you.
                We drive paid traffic directly to the VSL, and it pitches your high-ticket offer using proven
                persuasion frameworks.
              </p>
              <p className="text-red-100">
                <span className="text-[#FFD700] font-bold">The Family way:</span> Your video does the heavy lifting.
                Only qualified, pre-sold prospects book calls. Your close rate skyrockets because they already believe.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>Why VSLs Work for High-Ticket</h3>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 mt-1">•</span>
                  <span><strong>Time to sell:</strong> 30-minute VSL vs 30-second ad gives you room to overcome objections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 mt-1">•</span>
                  <span><strong>Automation:</strong> Works 24/7 without you. Scale without hiring more salespeople</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 mt-1">•</span>
                  <span><strong>Pre-qualification:</strong> Only serious buyers watch a 30-min video and apply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFD700] mr-3 mt-1">•</span>
                  <span><strong>Higher close rates:</strong> Prospects arrive pre-sold on your methodology and pricing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-black/30 p-4 sm:p-6 md:p-8 rounded-xl border-2 border-[#FFD700]">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "'Georgia', serif" }}>
              Our VSL Funnel Package
            </h3>
            <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div>
                <div className="text-3xl mb-3">📝</div>
                <h4 className="font-bold text-lg mb-2">Script Writing</h4>
                <p className="text-red-100 text-sm">
                  Hook, story, offer, objection handling, close. We write VSL scripts using proven frameworks that convert cold traffic.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎥</div>
                <h4 className="font-bold text-lg mb-2">Video Production</h4>
                <p className="text-red-100 text-sm">
                  Professional filming, editing, graphics, captions. Or simple slide-based VSLs that convert just as well.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-lg mb-2">Paid Traffic Campaigns</h4>
                <p className="text-red-100 text-sm">
                  Facebook, YouTube, and Google ads driving targeted traffic to your VSL. Optimized for cost per qualified application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Multi-Platform Paid Advertising Management
          </h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads (Search & Display)</h3>
              <p className="text-gray-700 mb-4">
                Capture high-intent buyers actively searching for solutions. Search campaigns for bottom-funnel,
                display for awareness and retargeting.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>High-intent keyword targeting</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Competitor conquest campaigns</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Display retargeting sequences</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>YouTube pre-roll and discovery ads</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Facebook & Instagram Ads</h3>
              <p className="text-gray-700 mb-4">
                Advanced audience targeting for coaches, consultants, and high-ticket offers. Best for awareness,
                lead generation, and application funnels.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Custom audience targeting (income, interests, behaviors)</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Lookalike audiences from best clients</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Video view and engagement campaigns</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Multi-step retargeting funnels</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">LinkedIn Ads</h3>
              <p className="text-gray-700 mb-4">
                Perfect for B2B consultants, executive coaches, and professional services. Target by job title,
                company, industry, and seniority.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Job title and seniority targeting</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Company size and industry filters</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Sponsored content and InMail campaigns</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Account-based marketing (ABM) for enterprise</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">YouTube Advertising</h3>
              <p className="text-gray-700 mb-4">
                Video ads for building trust and authority. Pre-roll, discovery, and action campaigns optimized
                for high-ticket conversion.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Skippable and non-skippable pre-roll</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Discovery ads in search results</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Remarketing to engaged viewers</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Action campaigns for conversions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Complete Paid Advertising Management
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Planning</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Competitive analysis</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Audience research</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Platform selection</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Budget allocation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Creation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Ad copy writing</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Creative design</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Video ad production</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>VSL funnel creation & scripting</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Landing page optimization</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Optimization</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Daily monitoring</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>A/B testing</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Bid optimization</li>
                <li className="flex items-start"><span className="text-[#FFD700] mr-2">•</span>Performance reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1a1a2e] to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "\'Georgia\', serif" }}>
            Paid Advertising Results
          </h2>
          <div className="grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$1.8M</div>
              <div className="text-xl font-semibold mb-4">Revenue Generated</div>
              <p className="text-gray-400">Business coaching program: $22k ad spend generated $1.8M in closed clients over 12 months</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>8.2x</div>
              <div className="text-xl font-semibold mb-4">ROAS</div>
              <p className="text-gray-400">Consultant: $35k/month ad spend returning $287k/month in new client revenue</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-red-400 mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$2.4M</div>
              <div className="text-xl font-semibold mb-4">VSL Funnel Revenue</div>
              <p className="text-gray-400">High-ticket program: VSL converting at 3.2% to $25k offer. $82k ad spend → $2.4M revenue in 8 months</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "\'Georgia\', serif" }}>$847</div>
              <div className="text-xl font-semibold mb-4">Cost Per Qualified Lead</div>
              <p className="text-gray-400">Course creator: Generating leads who convert at $15k average—profitable at $847 CPL</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "\'Georgia\', serif" }}>
            Ready for Paid Ads That Actually Work?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Stop wasting money on agencies optimizing for vanity metrics. Get campaigns built for high-ticket revenue.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-[#FFD700] px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all"
          >
            Apply for Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
