"use client";

import Link from "next/link";

export default function AboutPage() {
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
              src="/characters/don-mobster.png"
              alt="The Boss"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              We're Not Like<br />The Other Families
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed">
              We only work with serious players doing $100k+ monthly.
              <br /><span className="font-bold">We guarantee results. Most can't.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Newspaper Divider */}
      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: About Mind Your Business Media</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      {/* How The Family Started */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ ORIGIN STORY ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              How The Family Started
            </h2>
          </div>

          <div className="font-newspaper text-lg text-gray-700 space-y-8 leading-relaxed">
            <p>
              <strong className="text-black">Mind Your Business Media</strong> was built on one rule: marketing agencies should answer for revenue, not vanity metrics.
            </p>
            <p>
              After years in the trenches—scaling high-ticket coaches, consultants, course creators, premium services—we saw the same scam everywhere.
              Agencies charging $10k-20k/month for "clicks," "impressions," "engagement." Meanwhile, their clients couldn't pay rent.
            </p>
            <p>
              So we built it differently. <strong className="text-black">We only take clients we know we can grow 30%+ in year one.</strong> If we don't hit that number, we work for free until we do.
              No other agency makes this promise because they can't deliver.
            </p>
            <p>
              This model works because we're selective (only $100k+ monthly businesses) and because we've cracked the code on scaling high-ticket offers
              across channels and industries. <span className="font-bold text-black">We don't guess. We execute what works.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ EDITORIAL ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Our Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Revenue-First</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                We don't care about likes, followers, or impressions. Our sole focus is increasing your net
                revenue by 30% or more.
              </p>
            </div>
            <div className="bg-white border-5 border-black p-8">
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">High-Ticket Specialized</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                We exclusively work with high-ticket businesses. Different strategies, different execution,
                different results.
              </p>
            </div>
            <div className="bg-white border-5 border-black p-8">
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Complete Execution</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                We don't just create strategy decks. We execute everything: ads, funnels, content, email,
                optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE CODE ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Accountability Over Activity</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                We measure success by revenue growth, not how busy we look. Results matter, effort doesn't.
              </p>
            </div>
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Truth Over Comfort</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                We'll tell you what you need to hear, not what you want to hear. If your offer isn't strong enough to scale, we'll say so.
              </p>
            </div>
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Quality Over Quantity</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                We work with a limited number of clients because delivering guaranteed results requires deep partnership, not surface-level service.
              </p>
            </div>
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Long-Term Over Quick Wins</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                We build sustainable marketing systems that compound over years, not gimmicks that spike for a month then crash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ STATISTICAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              By the Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">87%</div>
              <div className="font-newspaper text-lg">Average Revenue Growth Year 1</div>
            </div>
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">100%</div>
              <div className="font-newspaper text-lg">Clients Hit 30% Guarantee</div>
            </div>
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">$18M+</div>
              <div className="font-newspaper text-lg">Revenue Added for Clients</div>
            </div>
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">50+</div>
              <div className="font-newspaper text-lg">Businesses Scaled</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16 bg-black">
            <div className="font-headline text-sm uppercase tracking-widest mb-6">★ Join Mind Your Business Media ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Ready To Partner<br />With Us?
            </h2>
            <p className="font-newspaper text-xl mb-10 text-white/90">
              If you're doing $100k+ monthly and ready for guaranteed growth, let's talk.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-headline text-lg uppercase tracking-wide hover:bg-gray-100 transition-all"
            >
              APPLY FOR PARTNERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
