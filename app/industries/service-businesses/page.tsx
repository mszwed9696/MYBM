"use client";

import Link from "next/link";

export default function ServiceBusinessesPage() {
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
              src="/characters/tech-innovator.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ FOR SERVICE BUSINESSES ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Dominate Your Local Market<br />And Scale Beyond
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Marketing systems for high-ticket service businesses ready to leave competitors in the dust.
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
            <span>Special Report: Service Businesses</span>
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
              Most Service Businesses Are <span className="line-through">Outmarketed</span> By Inferior Competitors
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              Better work. Worse marketing. We flip that equation.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's the frustrating truth about service businesses: the best providers rarely have the best marketing.
            </p>

            <p className="newspaper-body mb-4">
              You deliver superior service. You charge premium rates. You have happy clients. But when someone searches for your services, they find your competitors first. <span className="font-bold">Inferior providers with better SEO and paid ads are eating your lunch.</span>
            </p>

            <p className="newspaper-body mb-4">
              The problem isn't your service quality. It's that you're invisible online. No local SEO. No Google Ads strategy. No content marketing. No automated lead nurture. Your website doesn't convert. Your reviews aren't optimized. Potential clients can't find you—so they hire someone else.
            </p>

            <p className="newspaper-body font-bold">
              We build marketing dominance for premium service businesses. Local SEO that owns your market. Paid ads that convert. Lead nurture that books calls. 30% revenue growth guaranteed—or we work for free.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do For Service Businesses */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              How We Help Service Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Local SEO Dominance</h3>
              <p className="newspaper-body leading-relaxed">
                Own the top 3 Google results for your services in your city. Google Business Profile optimization, local citations, review generation, geo-targeted content. When people search, they find you first.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Paid Ad Systems</h3>
              <p className="newspaper-body leading-relaxed">
                Google Local Service Ads, Google Search Ads, Facebook/Instagram lead gen. Profitable customer acquisition at scale. Track every dollar from click to closed deal.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Conversion Optimization</h3>
              <p className="newspaper-body leading-relaxed">
                Landing pages that convert visitors into calls. Automated lead follow-up. Booking systems. CRM setup. Turn web traffic into booked appointments at maximum conversion rates.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Reputation & Reviews</h3>
              <p className="newspaper-body leading-relaxed">
                Systematic review generation. Reputation management. Social proof optimization. Dominate local search rankings with 5-star reviews that close more deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Service Businesses Choose Us */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ SPECIAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Why Service Businesses Choose Us
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">We Know Local Service Marketing</h3>
              <p className="newspaper-body text-gray-700">
                We specialize in local service businesses: contractors, agencies, professional services, home services. We understand your sales cycle, your average ticket size, your competitive dynamics. We've scaled hundreds of service businesses.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">30% Growth Guarantee</h3>
              <p className="newspaper-body text-gray-700">
                We guarantee 30% revenue growth in year one. If you don't hit it, we keep working for free until you do. Our incentives are completely aligned with yours.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Full-Service Execution</h3>
              <p className="newspaper-body text-gray-700">
                We handle everything: SEO, Google Ads, Facebook Ads, website optimization, CRM setup, review management, content creation. You focus on delivering great service. We handle all marketing.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Proven Systems</h3>
              <p className="newspaper-body text-gray-700">
                We've taken service businesses from $100k/mo to $500k+/mo using our systems. We know the exact playbook: which ad platforms convert, what local SEO tactics work, how to structure service pages for conversions.
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
              Real Results For Service Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+287%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Average results across our service businesses clients in first 12 months
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
                Minimum requirement to work with us. We only serve established service businesses
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
