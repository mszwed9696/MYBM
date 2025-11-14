"use client";

import Link from "next/link";

export default function FunnelOptimizationPage() {
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
              src="/characters/optimizer-funnel.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ FUNNEL OPTIMIZATION - THE OPTIMIZER ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Turn Traffic Into<br />Cold Hard Cash
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Complete funnel audits and conversion rate optimization. Stop leaking revenue at every step.
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
            <span>Special Report: Funnel Optimization</span>
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
              Most Funnels Are <span className="line-through">Bleeding Money</span>
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              You're paying for traffic that never converts. We fix that.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's the truth nobody wants to hear: throwing more money at ads won't fix a broken funnel.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">If your funnel converts at 2% instead of 8%, you're leaving 75% of revenue on the table.</span> Most businesses focus on getting more traffic. We focus on converting what you already have.
            </p>

            <p className="newspaper-body mb-4">
              A proper funnel audit reveals exactly where you're losing money: landing page copy, lead magnets, email sequences, sales processes, offer positioning. We find every leak. We plug every hole.
            </p>

            <p className="newspaper-body font-bold">
              Then we guarantee 30% revenue growth. Not from more traffic—from better conversions.
            </p>
          </div>
        </div>
      </section>

      {/* How We Optimize */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              How We Optimize Funnels
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Complete Funnel Audit</h3>
              <p className="newspaper-body leading-relaxed">
                We analyze every step: traffic sources, landing pages, lead magnets, nurture sequences, sales calls, offer positioning. We find where you're losing buyers and exactly why.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Data-Driven Analysis</h3>
              <p className="newspaper-body leading-relaxed">
                We don't guess. We analyze: heat maps, session recordings, conversion data, drop-off points, form analytics. Data tells us what's broken. Then we fix it.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">A/B Testing Framework</h3>
              <p className="newspaper-body leading-relaxed">
                We test everything: headlines, copy, layout, CTAs, offers, pricing. Continuous testing means continuous improvement. Small wins compound into massive revenue gains.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Revenue Optimization</h3>
              <p className="newspaper-body leading-relaxed">
                We optimize for revenue, not clicks. Higher average order value. Better customer lifetime value. Lower acquisition costs. Everything focused on profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "Most businesses are obsessed with traffic. We're obsessed with conversions. Double your conversion rate, you double your revenue—without spending another dollar on ads. That's leverage."
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
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Funnel Audit</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Complete funnel analysis</li>
                <li className="flex items-start"><span className="mr-2">•</span>Conversion tracking setup</li>
                <li className="flex items-start"><span className="mr-2">•</span>Heat mapping & session recording</li>
                <li className="flex items-start"><span className="mr-2">•</span>Drop-off point identification</li>
                <li className="flex items-start"><span className="mr-2">•</span>Competitive benchmarking</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Optimization</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Landing page redesign</li>
                <li className="flex items-start"><span className="mr-2">•</span>Email sequence optimization</li>
                <li className="flex items-start"><span className="mr-2">•</span>Offer positioning & pricing</li>
                <li className="flex items-start"><span className="mr-2">•</span>Sales process refinement</li>
                <li className="flex items-start"><span className="mr-2">•</span>A/B testing implementation</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Ongoing Improvement</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Continuous A/B testing</li>
                <li className="flex items-start"><span className="mr-2">•</span>Monthly performance analysis</li>
                <li className="flex items-start"><span className="mr-2">•</span>Conversion rate tracking</li>
                <li className="flex items-start"><span className="mr-2">•</span>Revenue attribution modeling</li>
                <li className="flex items-start"><span className="mr-2">•</span>30% growth guarantee</li>
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
              <div className="font-headline text-6xl font-black mb-4">3.2x</div>
              <div className="font-headline text-xl uppercase mb-4">Conversion Rate Increase</div>
              <p className="font-newspaper text-gray-700">
                High-ticket coaching: Landing page conversion improved from 2.4% to 7.7%, tripling qualified leads without increasing ad spend
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+189%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Per Lead</div>
              <p className="font-newspaper text-gray-700">
                B2B consulting: Funnel optimization increased revenue per lead from $3,400 to $9,826 through better nurture and offer positioning
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+245%</div>
              <div className="font-headline text-xl uppercase mb-4">Overall Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Course business: Complete funnel overhaul grew monthly revenue from $78k to $269k in 9 months
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
