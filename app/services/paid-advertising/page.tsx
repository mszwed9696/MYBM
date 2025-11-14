"use client";

import Link from "next/link";

export default function PaidAdvertisingPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      {/* Newspaper Hero Section */}
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Cityscape background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/heroes/las-vegas-skyline.png"
              alt="Cityscape"
              className="w-full h-full object-contain"
              style={{ filter: "grayscale(100%) contrast(1.3)" }}
            />
          </div>

          {/* Character */}
          <div className="absolute right-8 bottom-0 w-48 md:w-64 z-10 opacity-90">
            <img
              src="/characters/enforcer-character.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ PAID ADVERTISING - THE ENFORCER ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              We Don't Chase Leads<br />We Enforce Results
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Paid ads across Google, Facebook, LinkedIn, YouTube. No tire-kickers. No BS. Just qualified buyers.
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
            <span>Special Report: Paid Advertising</span>
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
              Most Paid Ad Agencies Are <span className="line-through">Burning Money</span>
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              They optimize for clicks and impressions. We optimize for revenue.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's what most paid ad agencies won't tell you: they make money whether you do or not. They charge retainers, run campaigns, send pretty reports showing clicks and impressions—and your bank account stays flat.
            </p>

            <p className="newspaper-body mb-4">
              We operate differently. <span className="font-bold">We only get paid if you make money.</span> 30% revenue increase guaranteed, or we work for free.
            </p>

            <p className="newspaper-body mb-4">
              Why? Because we're not optimizing for vanity metrics. We're optimizing for qualified buyers who close. High-ticket offers require different ad strategies than e-commerce. Complex sales cycles need sophisticated targeting, nurture sequences, and attribution tracking.
            </p>

            <p className="newspaper-body font-bold">
              Most agencies treat every business the same. We specialize in high-ticket. That's why we can guarantee results they can't.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              What We Actually Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Strategic Media Buying</h3>
              <p className="newspaper-body leading-relaxed">
                We don't spray and pray. Every dollar is allocated based on data: customer LTV, acquisition cost, channel performance. We build profitable customer acquisition systems, not just ad campaigns.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">High-Ticket Targeting</h3>
              <p className="newspaper-body leading-relaxed">
                Complex B2B and high-ticket offers need sophisticated audience targeting. We build multi-touch attribution models, analyze buying committees, and target decision-makers—not tire-kickers.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Full-Funnel Optimization</h3>
              <p className="newspaper-body leading-relaxed">
                Ads are just the start. We optimize your entire funnel: landing pages, lead magnets, nurture sequences, sales calls. If your funnel leaks revenue, ads won't save you.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Revenue Attribution</h3>
              <p className="newspaper-body leading-relaxed">
                We track every dollar back to the source. You'll know exactly which campaigns drive revenue, which channels are profitable, and where to allocate budget for maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "Most agencies optimize for clicks. We optimize for closings. There's a difference. And that difference is why we can guarantee 30% growth and they can't."
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
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Platform Management</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Google Ads (Search, Display, YouTube)</li>
                <li className="flex items-start"><span className="mr-2">•</span>Facebook & Instagram Ads</li>
                <li className="flex items-start"><span className="mr-2">•</span>LinkedIn Ads for B2B</li>
                <li className="flex items-start"><span className="mr-2">•</span>Retargeting & remarketing campaigns</li>
                <li className="flex items-start"><span className="mr-2">•</span>A/B testing & optimization</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Creative & Copy</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>High-converting ad creative</li>
                <li className="flex items-start"><span className="mr-2">•</span>Video ad production & editing</li>
                <li className="flex items-start"><span className="mr-2">•</span>Landing page copywriting</li>
                <li className="flex items-start"><span className="mr-2">•</span>A/B testing frameworks</li>
                <li className="flex items-start"><span className="mr-2">•</span>Conversion-optimized messaging</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Analytics & Reporting</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Revenue attribution modeling</li>
                <li className="flex items-start"><span className="mr-2">•</span>Multi-touch attribution tracking</li>
                <li className="flex items-start"><span className="mr-2">•</span>ROI reporting tied to revenue</li>
                <li className="flex items-start"><span className="mr-2">•</span>Budget optimization recommendations</li>
                <li className="flex items-start"><span className="mr-2">•</span>Monthly strategy review sessions</li>
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
              <div className="font-headline text-6xl font-black mb-4">+340%</div>
              <div className="font-headline text-xl uppercase mb-4">ROI on Ad Spend</div>
              <p className="font-newspaper text-gray-700">
                B2B SaaS: $45k/mo ad spend → $153k/mo in closed revenue within 8 months
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">62%</div>
              <div className="font-headline text-xl uppercase mb-4">Cost Per Lead Drop</div>
              <p className="font-newspaper text-gray-700">
                Coaching business: Reduced CPL from $180 to $68 while increasing lead quality and close rates
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+215%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Increase</div>
              <p className="font-newspaper text-gray-700">
                Consulting firm: $95k/mo → $299k/mo in 10 months with multi-channel paid strategy
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
