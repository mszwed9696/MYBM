"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContentMarketingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black text-white py-20 overflow-hidden">
        {/* The Driver character */}
        <motion.div
          className="absolute right-0 bottom-0 w-64 md:w-80 opacity-60 z-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <img src="/characters/driver-vintage-car.png" alt="The Driver" className="w-full h-auto" />
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
              🚗 CONTENT MARKETING - THE DRIVER 🚗
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Georgia', serif", textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Own Your Territory<br />
              <span className="text-[#FFD700]">With Content That Commands Respect</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stop chasing clients. Build authority that brings them to you.
              <span className="text-[#FFD700] font-bold"> Content that ranks. SEO that works. Authority nobody questions.</span>
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

      {/* Why Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Why High-Ticket Businesses Need Content Marketing
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Premium buyers don't respond to aggressive ads. They buy from recognized authorities they discover
            through valuable content.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Sold Inbound Leads</h3>
              <p className="text-gray-600">
                People who find you through content are already sold on your expertise. They're reaching out to hire you,
                not to be convinced.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compounds Over Time</h3>
              <p className="text-gray-600">
                Paid ads stop when you stop paying. Content keeps working forever. One great piece can generate leads
                for years.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Category Leadership</h3>
              <p className="text-gray-600">
                When you dominate search results and thought leadership, competitors become irrelevant. You own
                the category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Content Marketing Methodology
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">High-Intent Keyword Research</h3>
              <p className="text-blue-100">
                Target keywords that indicate buying intent and budget. Not "how to" queries from broke beginners,
                but searches from people ready to invest.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-3">Authority Content Creation</h3>
              <p className="text-blue-100">
                Deep, comprehensive content that demonstrates expertise. Not 500-word blog posts, but pillar content
                that becomes the definitive resource.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Technical SEO Excellence</h3>
              <p className="text-blue-100">
                Optimize site architecture, page speed, mobile experience, and technical elements that Google rewards.
                Content quality + technical SEO = rankings.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-3">Strategic Link Building</h3>
              <p className="text-blue-100">
                Earn backlinks from authoritative sources through guest posts, partnerships, PR, and linkable assets.
                Build domain authority over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Content Types We Create
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pillar Content & Guides</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive 3,000-5,000+ word guides that rank for competitive keywords and serve as ultimate
                resources in your niche.
              </p>
              <p className="text-sm text-gray-500">
                Example: "The Complete Guide to Scaling a 7-Figure Coaching Business"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thought Leadership Articles</h3>
              <p className="text-gray-600 mb-4">
                Opinion pieces and frameworks that position you as a category leader. Published on your blog and
                distributed to industry publications.
              </p>
              <p className="text-sm text-gray-500">
                Example: "Why Most Business Coaches Fail (And What To Do Instead)"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Studies & Results Content</h3>
              <p className="text-gray-600 mb-4">
                Detailed breakdowns of client success stories. Ranks for "[your service] results" keywords and
                provides social proof.
              </p>
              <p className="text-sm text-gray-500">
                Example: "How We Grew This Consultant From $150k to $400k/mo in 12 Months"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comparison & Buyer's Guides</h3>
              <p className="text-gray-600 mb-4">
                Content targeting bottom-funnel keywords when buyers are comparing options. Positions you as
                the obvious choice.
              </p>
              <p className="text-sm text-gray-500">
                Example: "Agency vs Fractional CMO vs In-House: What's Right for $1M+ Businesses?"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Content</h3>
              <p className="text-gray-600 mb-4">
                YouTube videos optimized for search. Video builds trust faster than text and ranks well in
                Google search.
              </p>
              <p className="text-sm text-gray-500">
                Example: Weekly thought leadership videos, client interviews, strategy breakdowns
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Podcast Content Strategy</h3>
              <p className="text-gray-600 mb-4">
                Launch or optimize your podcast for authority building. Repurpose into blog posts, clips, and
                social content.
              </p>
              <p className="text-sm text-gray-500">
                Example: Interview other authorities, share frameworks, discuss industry trends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Complete SEO Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical SEO</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Site speed optimization</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Mobile responsiveness</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Site architecture</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Schema markup</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>XML sitemaps</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Page SEO</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Keyword optimization</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Meta tags & descriptions</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Internal linking</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Image optimization</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Content optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Off-Page SEO</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Link building campaigns</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Guest posting</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Digital PR</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Brand mentions</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Authority building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Content Marketing & SEO Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">287%</div>
              <div className="text-xl font-semibold mb-4">Organic Traffic Growth</div>
              <p className="text-gray-400">Business coach: 2,400 → 9,300 monthly organic visitors in 9 months. 35% of new clients from organic search.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">47</div>
              <div className="text-xl font-semibold mb-4">Page 1 Rankings</div>
              <p className="text-gray-400">Consultant: Ranking #1-10 for 47 high-intent keywords in their niche within 12 months.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <div className="text-5xl font-bold text-blue-400 mb-2">$0.00</div>
              <div className="text-xl font-semibold mb-4">Cost Per Lead (Organic)</div>
              <p className="text-gray-400">Course creator: 120+ qualified leads/month from organic content. Zero ad spend required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Authority That Attracts Premium Clients?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Stop renting attention with ads. Own your market through content that compounds forever.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Get Your Content Strategy
          </Link>
        </div>
      </section>
    </div>
  );
}
