"use client";

import Link from "next/link";

export default function ProductBusinessesPage() {
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
              src="/characters/merchant-deals.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ FOR PRODUCT BUSINESSES ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Turn Products Into<br />Profit Machines
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              E-commerce and product businesses doing $100k+/month. Scale profitably with proven systems.
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
            <span>Special Report: Product Businesses</span>
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
              Most Product Businesses Are <span className="line-through">Bleeding Money</span> On Ads
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              Unprofitable customer acquisition. Low LTV. We fix both.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's the harsh reality of e-commerce: most product businesses can't profitably scale paid acquisition.
            </p>

            <p className="newspaper-body mb-4">
              You're spending $10k/month on Facebook and Google Ads, but CAC is too high and LTV is too low. You're either breaking even or losing money on new customer acquisition. <span className="font-bold">That's not sustainable growth—that's slow death by advertising.</span>
            </p>

            <p className="newspaper-body mb-4">
              The problem isn't your product. It's your marketing infrastructure. Poor funnel conversion. No post-purchase nurture. No backend monetization. No referral systems. No retention strategy. You're focused on acquiring customers instead of maximizing their value.
            </p>

            <p className="newspaper-body font-bold">
              We build profitable growth systems for product businesses. Lower CAC through better funnels. Higher LTV through backend offers and retention. 30% revenue growth guaranteed—or we work for free.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do For Product Businesses */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              How We Help Product Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Performance Marketing</h3>
              <p className="newspaper-body leading-relaxed">
                Profitable Facebook, Instagram, Google, and TikTok ads. Creative testing. Audience segmentation. We scale what works and kill what doesn't. Data-driven acquisition at target ROAS.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Conversion Rate Optimization</h3>
              <p className="newspaper-body leading-relaxed">
                Landing pages, product pages, checkout flows—optimized for maximum conversion. A/B testing, heat mapping, user research. Turn more traffic into paying customers.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Email & Retention Marketing</h3>
              <p className="newspaper-body leading-relaxed">
                Automated email flows that maximize LTV. Welcome series, abandoned cart, post-purchase upsells, win-back campaigns. Turn one-time buyers into repeat customers.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Subscription & Backend Offers</h3>
              <p className="newspaper-body leading-relaxed">
                Subscription models, bundles, upsells, cross-sells—systems that double customer lifetime value. Make more money from every customer you acquire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Product Businesses Choose Us */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ SPECIAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Why Product Businesses Choose Us
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">E-Commerce Specialists</h3>
              <p className="newspaper-body text-gray-700">
                We specialize in product businesses: DTC brands, e-commerce stores, physical products. We understand unit economics, contribution margin, CAC/LTV ratios. We've scaled dozens of product businesses profitably.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Guarantee 30% Growth</h3>
              <p className="newspaper-body text-gray-700">
                We guarantee 30% revenue growth. If you don't hit it, we keep working for free until you do. Most agencies charge whether you profit or bleed. We only win when you win.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Full-Funnel Optimization</h3>
              <p className="newspaper-body text-gray-700">
                We optimize every stage: ads, landing pages, checkout, email, retention, referrals. Not just traffic generation—complete revenue optimization from first touch to repeat purchase.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Proven Profitability Systems</h3>
              <p className="newspaper-body text-gray-700">
                We've taken product businesses from $100k/mo to $1M+/mo profitably. We know the playbook: which ad creatives convert, how to structure product pages, what email flows maximize LTV, how to optimize for contribution margin—not just revenue.
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
              Real Results For Product Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+287%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Average results across our product businesses clients in first 12 months
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
                Minimum requirement to work with us. We only serve established product businesses
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
