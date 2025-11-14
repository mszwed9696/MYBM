"use client";

import Link from "next/link";

export default function ContentMarketingPage() {
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
              src="/characters/writer-content.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ CONTENT & SEO - THE WRITER ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Content That Commands<br />Attention And Revenue
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Authority content that ranks, converts, and attracts premium clients to your business.
            </p>

            <Link
              href="/apply"
              className="inline-block bg-black text-white px-10 py-5 border-3 border-black font-headline text-lg uppercase tracking-wide hover:bg-gray-900 transition-all"
            >
              Join The Operation
            </Link>
          </div>
        </div>
      </section>

      {/* Newspaper Divider */}
      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: Content Marketing</span>
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
              Most Content Marketing Is <span className="line-through">Worthless</span>
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              Blog posts that get zero traffic. SEO that drives tire-kickers. We build content that attracts buyers.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's what most content agencies won't admit: traffic doesn't equal revenue.
            </p>

            <p className="newspaper-body mb-4">
              You can rank #1 for keywords that bring 10,000 visitors who never buy. Or you can rank for keywords that bring 500 visitors who close at $50k each. <span className="font-bold">We optimize for the second one.</span>
            </p>

            <p className="newspaper-body mb-4">
              High-ticket content marketing is different. Your buyers aren't searching for "best project management software"—they're searching for strategic insights that demonstrate your expertise. They want thought leadership, not listicles.
            </p>

            <p className="newspaper-body font-bold">
              We build authority content that attracts premium buyers, positions you as the expert, and drives actual revenue. Then we guarantee 30% growth.
            </p>
          </div>
        </div>
      </section>

      {/* Content Services */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Content Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Thought Leadership Content</h3>
              <p className="newspaper-body leading-relaxed">
                Long-form articles, case studies, and frameworks that demonstrate expertise. Content that attracts executives and decision-makers, not DIY shoppers.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">SEO Strategy</h3>
              <p className="newspaper-body leading-relaxed">
                We don't optimize for high-volume keywords. We optimize for buyer intent keywords. Search terms used by people with budgets, authority, and urgency.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Content Systems</h3>
              <p className="newspaper-body leading-relaxed">
                Scalable content production: editorial calendars, content briefs, quality control, optimization frameworks. Consistent publishing without the chaos.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Revenue-Focused</h3>
              <p className="newspaper-body leading-relaxed">
                Every piece of content serves a purpose: attract buyers, demonstrate authority, nurture leads, or close sales. No content for content's sake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "Traffic is a vanity metric. We optimize for revenue. That means attracting fewer, higher-quality visitors who actually have budgets and buying authority. Quality over quantity. Always."
          </p>
          <p className="font-newspaper text-xl">
            — Don Michael Szwed, Mind Your Business Media
          </p>
        </div>
      </div>

      {/* What's Included */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ WHAT YOU GET ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              What's Included
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Strategy & Research</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Keyword research (buyer-intent focused)</li>
                <li className="flex items-start"><span className="mr-2">•</span>Competitive content analysis</li>
                <li className="flex items-start"><span className="mr-2">•</span>Topic clustering & pillar strategy</li>
                <li className="flex items-start"><span className="mr-2">•</span>Content audit & optimization</li>
                <li className="flex items-start"><span className="mr-2">•</span>Editorial calendar development</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Content Creation</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Long-form blog articles (2000+ words)</li>
                <li className="flex items-start"><span className="mr-2">•</span>Case studies & client stories</li>
                <li className="flex items-start"><span className="mr-2">•</span>White papers & research reports</li>
                <li className="flex items-start"><span className="mr-2">•</span>Email newsletter content</li>
                <li className="flex items-start"><span className="mr-2">•</span>LinkedIn thought leadership</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">SEO & Distribution</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>On-page SEO optimization</li>
                <li className="flex items-start"><span className="mr-2">•</span>Technical SEO implementation</li>
                <li className="flex items-start"><span className="mr-2">•</span>Link building & outreach</li>
                <li className="flex items-start"><span className="mr-2">•</span>Content promotion strategy</li>
                <li className="flex items-start"><span className="mr-2">•</span>Performance tracking & reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ STATISTICAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Results That Matter
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">847%</div>
              <div className="font-headline text-xl uppercase mb-4">ROI on Content</div>
              <p className="font-newspaper text-gray-700">
                B2B SaaS: Content marketing program generated $340k in closed revenue from $40k investment over 12 months
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">34</div>
              <div className="font-headline text-xl uppercase mb-4">High-Value Leads/Month</div>
              <p className="font-newspaper text-gray-700">
                Consulting firm: Thought leadership content attracts 34 qualified leads monthly (avg deal size $45k)
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+198%</div>
              <div className="font-headline text-xl uppercase mb-4">Organic Revenue</div>
              <p className="font-newspaper text-gray-700">
                Coaching business: SEO-optimized content grew organic revenue from $52k/mo to $155k/mo in 14 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16 bg-black">
            <div className="font-headline text-sm uppercase tracking-widest mb-6">★ Join Mind Your Business Media ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Ready To Get Started?
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
