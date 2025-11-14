"use client";

import Link from "next/link";

export default function MarketingStrategyPage() {
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
              src="/characters/consigliere-wisdom.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ MARKETING STRATEGY - THE CONSIGLIERE ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Strategy Without Execution<br />Is Just Talk
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Custom marketing strategies for high-ticket businesses. We don't just plan it—we execute it.
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
            <span>Special Report: Marketing Strategy</span>
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
              Most Strategy Consultants Are <span className="line-through">All Talk</span>
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              They hand you a deck and disappear. We execute the entire plan.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              You've seen it before: hire a consultant, pay $20-50k for a strategy deck, then... nothing. You're left to execute it yourself. Most businesses can't. The deck collects dust.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">We don't do strategy decks. We do complete execution.</span> Your marketing strategy is worthless unless someone implements it correctly.
            </p>

            <p className="newspaper-body mb-4">
              Here's how we're different: we build the strategy, we execute every piece, and we guarantee 30% revenue growth. If the strategy doesn't deliver, we keep working for free until it does.
            </p>

            <p className="newspaper-body font-bold">
              That's why other consultants charge for decks and run. They can't guarantee execution. We can. We do. Every time.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Services */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Strategic Marketing Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Positioning & Messaging</h3>
              <p className="newspaper-body leading-relaxed">
                Most businesses sound like everyone else. We build positioning that makes you the only choice in your market. Clear differentiation. Premium pricing power. Market dominance.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Go-To-Market Strategy</h3>
              <p className="newspaper-body leading-relaxed">
                Complete go-to-market planning for new offers, market expansion, or repositioning. Channel selection, budget allocation, timeline, KPIs—all tied to our 30% revenue guarantee.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Marketing Infrastructure</h3>
              <p className="newspaper-body leading-relaxed">
                Build scalable marketing systems: CRM setup, automation workflows, lead scoring, attribution models, reporting dashboards. Infrastructure that supports 7 and 8-figure growth.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Continuous Optimization</h3>
              <p className="newspaper-body leading-relaxed">
                Strategy isn't static. We continuously test, iterate, and optimize based on data. Monthly reviews. Strategic pivots. Relentless focus on what drives revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "A strategy without execution is just expensive consulting theater. We execute everything. And we guarantee the results. That's the difference between us and every other consultant you've met."
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
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Strategy Development</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Complete marketing audit</li>
                <li className="flex items-start"><span className="mr-2">•</span>Competitive analysis & positioning</li>
                <li className="flex items-start"><span className="mr-2">•</span>Customer research & segmentation</li>
                <li className="flex items-start"><span className="mr-2">•</span>Channel strategy & budget allocation</li>
                <li className="flex items-start"><span className="mr-2">•</span>12-month growth roadmap</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Complete Execution</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Campaign planning & execution</li>
                <li className="flex items-start"><span className="mr-2">•</span>Content strategy & creation</li>
                <li className="flex items-start"><span className="mr-2">•</span>Funnel development & optimization</li>
                <li className="flex items-start"><span className="mr-2">•</span>Team hiring & management</li>
                <li className="flex items-start"><span className="mr-2">•</span>Vendor & agency oversight</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Performance Management</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Revenue tracking & attribution</li>
                <li className="flex items-start"><span className="mr-2">•</span>Monthly performance reviews</li>
                <li className="flex items-start"><span className="mr-2">•</span>Strategic pivot recommendations</li>
                <li className="flex items-start"><span className="mr-2">•</span>Continuous testing & optimization</li>
                <li className="flex items-start"><span className="mr-2">•</span>Guaranteed 30% growth or free work</li>
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
              <div className="font-headline text-6xl font-black mb-4">+287%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Course creator: Complete repositioning and go-to-market strategy grew revenue from $95k/mo to $368k/mo in 12 months
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+156%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                B2B consulting: New positioning and channel strategy grew from $145k/mo to $371k/mo in 11 months
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">100%</div>
              <div className="font-headline text-xl uppercase mb-4">Hit Guarantee</div>
              <p className="font-newspaper text-gray-700">
                Every client exceeds our 30% minimum guarantee because we execute the strategy correctly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE PROCESS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              How It Works
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">1</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Discovery & Audit</h3>
                  <p className="font-newspaper text-gray-700">
                    Complete analysis of your business, market, customers, and current marketing. We identify growth opportunities and blockers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">2</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Strategy Development</h3>
                  <p className="font-newspaper text-gray-700">
                    Build your complete marketing strategy: positioning, channels, messaging, budget allocation, timeline. Tied to our 30% guarantee.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">3</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Complete Execution</h3>
                  <p className="font-newspaper text-gray-700">
                    We execute the entire strategy. No handoffs. No delegation. We manage everything from campaigns to team to vendors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">4</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Optimization & Guarantee</h3>
                  <p className="font-newspaper text-gray-700">
                    Continuous testing and optimization. Monthly reviews. Strategic pivots as needed. We deliver 30% growth or work for free.
                  </p>
                </div>
              </div>
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
