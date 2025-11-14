"use client";

import Link from "next/link";

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      {/* Newspaper Hero Section */}
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Cityscape background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/heroes/philadelphia-skyline.png"
              alt="Cityscape"
              className="w-full h-full object-contain"
              style={{ filter: "grayscale(100%) contrast(1.3)" }}
            />
          </div>

          {/* Character */}
          <div className="absolute right-8 bottom-0 w-48 md:w-64 z-10 opacity-90">
            <img
              src="/characters/advisor-wisdom.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ FOR B2B CONSULTANTS ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Consulting That Scales<br />Beyond Referrals
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Build predictable pipelines and systematized client acquisition. No more feast or famine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="inline-block bg-black text-white px-10 py-5 border-3 border-black font-headline text-lg uppercase tracking-wide hover:bg-gray-900 transition-all text-center"
              >
                Join The Operation
              </Link>
              <Link
                href="/results"
                className="inline-block bg-white text-black px-10 py-5 border-3 border-black font-headline text-lg uppercase tracking-wide hover:bg-gray-100 transition-all text-center"
              >
                See The Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newspaper Divider */}
      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: Consultants</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE SITUATION ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Most Consultants Are <span className="line-through">Stuck</span> Living Referral To Referral
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              Unpredictable pipeline. Inconsistent revenue. We build systems that scale.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's the cold truth about consulting: most consultants are one referral away from a bad quarter.
            </p>

            <p className="newspaper-body mb-4">
              You're great at delivering results for clients. But when it comes to your own lead generation? You're dependent on referrals, waiting for your network to throw you a bone. <span className="font-bold">That's not a scalable business model—that's hope disguised as strategy.</span>
            </p>

            <p className="newspaper-body mb-4">
              The problem isn't your expertise. It's that you don't have a predictable client acquisition system. LinkedIn posts that go nowhere. Cold email that gets ignored. Partnerships that never materialize. Website traffic that doesn't convert. You're busy delivering for existing clients while your pipeline dries up.
            </p>

            <p className="newspaper-body font-bold">
              We build systematized marketing for B2B consultants. Predictable lead flow. Qualified prospects. Shorter sales cycles. 30% revenue growth guaranteed—or we work for free.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do For Consultants */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              How We Help Consultants
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Thought Leadership Positioning</h3>
              <p className="newspaper-body leading-relaxed">
                Position yourself as the expert in your vertical. Strategic content on LinkedIn, podcasts, speaking, and publishing that attracts enterprise clients and builds premium pricing power.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Outbound & ABM Systems</h3>
              <p className="newspaper-body leading-relaxed">
                Targeted account-based marketing and outbound programs. We identify your ideal clients, build multi-touch campaigns, and book meetings with decision-makers at target accounts.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Content & SEO</h3>
              <p className="newspaper-body leading-relaxed">
                Authority content that ranks for buyer-intent keywords. Case studies, white papers, research reports—content that attracts executives searching for solutions you provide.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Sales Enablement</h3>
              <p className="newspaper-body leading-relaxed">
                Proposal templates, case study frameworks, ROI calculators, sales collateral. Everything you need to shorten sales cycles and close enterprise deals faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consultants Choose Us */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ SPECIAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Why Consultants Choose Us
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">We Understand B2B Consulting</h3>
              <p className="newspaper-body text-gray-700">
                We know your sales cycles: 6-18 months, multiple stakeholders, enterprise budgets. We build marketing that works for complex B2B sales, not transactional consumer funnels. Relationship-based selling. Trust-building content. Long-term nurture.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Results-Based Partnership</h3>
              <p className="newspaper-body text-gray-700">
                We guarantee 30% revenue growth. If you don't hit it, we keep working for free until you do. Most marketing agencies get paid whether you succeed or fail. We only win when you win.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Complete Marketing Execution</h3>
              <p className="newspaper-body text-gray-700">
                We don't just hand you a strategy deck and disappear. We execute everything: build campaigns, create content, manage outreach, optimize funnels, track attribution. You focus on delivering client results. We handle marketing.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Proven With Enterprise Consultants</h3>
              <p className="newspaper-body text-gray-700">
                We've helped dozens of consulting firms scale from $100k/mo to $500k+/mo. We know what works: the positioning angles, the content strategy, the outbound cadences, the enterprise sales enablement. We've already solved your growth problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ STATISTICAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Real Results For Consultants
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+287%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Average results across our consultants clients in first 12 months
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">30%</div>
              <div className="font-headline text-xl uppercase mb-4">Minimum Guarantee</div>
              <p className="font-newspaper text-gray-700">
                Revenue increase guaranteed in year 1, or we work for free until you get it
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">$100k+</div>
              <div className="font-headline text-xl uppercase mb-4">Monthly Revenue</div>
              <p className="font-newspaper text-gray-700">
                Minimum requirement to work with us. We only serve established consultants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "We're not just another agency. We're your partners. We protect our partners. We deliver results. Or we don't get paid. Capisce?"
          </p>
          <p className="font-newspaper text-xl">
            — Don Michael Szwed, Mind Your Business Media
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16 bg-black">
            <div className="font-headline text-sm uppercase tracking-widest mb-6">★ Join Mind Your Business Media ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Ready To Scale<br />Your Business?
            </h2>
            <p className="font-newspaper text-xl mb-10 text-white/90">
              If you're doing $100k+ monthly and ready for guaranteed growth, let's talk.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-headline text-lg uppercase tracking-wide hover:bg-gray-100 transition-all"
            >
              APPLY NOW
            </Link>
            <p className="font-newspaper text-sm mt-6 text-white/70 uppercase tracking-wider">
              APPLICATION REVIEW: 24-48 HOURS | LIMITED PARTNERSHIPS AVAILABLE
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
