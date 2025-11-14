"use client";

import Link from "next/link";

export default function FractionalCMOPage() {
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
              alt="The Don"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ FRACTIONAL CMO - THE DON ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Get A $250K CMO<br />
              For A Fraction Of The Price
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Executive marketing leadership without the executive salary. We run your entire marketing operation like it's our own business.
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
            <span>Special Report: Fractional CMO Services</span>
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
              Most Businesses Don't Need <span className="line-through">More Tactics</span>
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              They need someone who owns the entire marketing function and answers for revenue.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's the dirty truth about marketing that nobody tells you: tactics don't scale businesses. Leadership does.
            </p>

            <p className="newspaper-body mb-4">
              You can throw money at ads. You can hire freelancers. You can piece together systems. But without strategic leadership holding it all together, you're just bleeding cash.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">Hiring a full-time CMO? That's $200-300k/year, plus benefits, equity, and politics.</span> And most CMOs at that level don't execute—they delegate to agencies who charge you even more.
            </p>

            <p className="newspaper-body mb-4">
              That's where we come in. You get executive-level marketing leadership without the executive salary. No politics. No BS. Just someone who runs your marketing like it's their own money on the line.
            </p>

            <p className="newspaper-body font-bold">
              Because with our guarantee, it is.
            </p>
          </div>
        </div>
      </section>

      {/* What a Fractional CMO Does */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              What A Fractional CMO Actually Does
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              The difference between having a plan and having execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Strategic Leadership</h3>
              <p className="newspaper-body leading-relaxed">
                Your Fractional CMO acts as your executive marketing leader. They own the entire strategy: positioning, messaging, go-to-market, channel selection, budget allocation. This isn't a consultant who hands you a deck—this is leadership.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Complete Execution</h3>
              <p className="newspaper-body leading-relaxed">
                We don't just hand you a strategy deck. We execute everything: hiring, managing agencies, building systems, running campaigns, optimizing funnels. Your Fractional CMO doesn't delegate to you. They handle it.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Revenue Accountability</h3>
              <p className="newspaper-body leading-relaxed">
                Your CMO's job is revenue growth. Not activity. Not vanity metrics. <span className="font-bold">30% revenue increase guaranteed or we work for free.</span> That's accountability most CMOs would never accept.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">No $250K Salary</h3>
              <p className="newspaper-body leading-relaxed">
                Get C-level marketing expertise for a fraction of a full-time CMO salary. No benefits, no equity, no politics. Just results. And if we don't deliver them, you don't pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "Most businesses don't need more tactics. They need a leader who owns the entire marketing function and delivers revenue. That's what a Fractional CMO does. No excuses. No BS."
          </p>
          <p className="font-newspaper text-xl">
            — Don Michael Szwed, Mind Your Business Media
          </p>
        </div>
      </div>

      {/* What's Included Section */}
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
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Strategy</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Full marketing audit & competitive analysis</li>
                <li className="flex items-start"><span className="mr-2">•</span>Positioning & messaging framework</li>
                <li className="flex items-start"><span className="mr-2">•</span>Go-to-market strategy & channel selection</li>
                <li className="flex items-start"><span className="mr-2">•</span>Budget allocation & ROI modeling</li>
                <li className="flex items-start"><span className="mr-2">•</span>KPI framework tied to revenue</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Execution</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Campaign management across all channels</li>
                <li className="flex items-start"><span className="mr-2">•</span>Agency oversight & vendor management</li>
                <li className="flex items-start"><span className="mr-2">•</span>Team hiring, training & management</li>
                <li className="flex items-start"><span className="mr-2">•</span>System implementation & optimization</li>
                <li className="flex items-start"><span className="mr-2">•</span>Complete accountability for results</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Optimization</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Revenue tracking & attribution modeling</li>
                <li className="flex items-start"><span className="mr-2">•</span>Continuous testing & iteration</li>
                <li className="flex items-start"><span className="mr-2">•</span>Channel optimization & reallocation</li>
                <li className="flex items-start"><span className="mr-2">•</span>Monthly reporting & strategic review</li>
                <li className="flex items-start"><span className="mr-2">•</span>Strategic pivots based on data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ QUALIFICATION ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Who This Is For
            </h2>
          </div>

          <div className="bg-white border-5 border-black p-8">
            <div className="space-y-6 font-newspaper text-lg leading-relaxed">
              <p className="flex items-start">
                <span className="font-bold mr-3 text-2xl">✓</span>
                <span><span className="font-bold">$100k+/month revenue.</span> You're established. You're ready to scale. You need leadership, not more tactics.</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold mr-3 text-2xl">✓</span>
                <span><span className="font-bold">High-ticket offers.</span> Coaches, consultants, course creators, SaaS, premium services. We specialize in complex sales cycles and educated buyers.</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold mr-3 text-2xl">✓</span>
                <span><span className="font-bold">Serious about growth.</span> You want 30%+ revenue increase. You're tired of agencies with no accountability. You want guarantees.</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold mr-3 text-2xl">✓</span>
                <span><span className="font-bold">Ready to execute.</span> You don't need hand-holding. You need strategic direction and complete execution. We provide both.</span>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-black text-white border-5 border-black p-8">
            <div className="space-y-6 font-newspaper text-lg leading-relaxed">
              <p className="flex items-start">
                <span className="font-bold mr-3 text-2xl">✗</span>
                <span><span className="font-bold">Startups under $100k/month.</span> We only work with established businesses. No exceptions.</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold mr-3 text-2xl">✗</span>
                <span><span className="font-bold">Businesses looking for cheap solutions.</span> Quality leadership costs money. If you want cheap, hire a freelancer.</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold mr-3 text-2xl">✗</span>
                <span><span className="font-bold">Companies that don't value accountability.</span> We guarantee results. If you don't care about guarantees, we're not a fit.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ STATISTICAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Fractional CMO Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+287%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                SaaS company: $150k/mo → $580k/mo in 14 months with Fractional CMO leading entire marketing operation
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+156%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Consulting firm: $95k/mo → $243k/mo in 11 months with complete marketing system overhaul
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+210%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Course creator: $120k/mo → $372k/mo in 10 months with new positioning and channel strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
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
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Application & Review</h3>
                  <p className="font-newspaper text-gray-700">
                    Apply through our partnership form. We review within 24-48 hours to determine if we're a fit. We only accept businesses doing $100k+ monthly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">2</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Strategy Session</h3>
                  <p className="font-newspaper text-gray-700">
                    Deep-dive into your business, current marketing, goals, and growth blockers. We assess if we can guarantee 30%+ growth. If we can't, we tell you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">3</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Onboarding & Audit</h3>
                  <p className="font-newspaper text-gray-700">
                    Full marketing audit, competitive analysis, customer research. We build your complete growth roadmap with clear milestones tied to our 30% guarantee.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">4</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Execution & Optimization</h3>
                  <p className="font-newspaper text-gray-700">
                    Your Fractional CMO runs the entire marketing function. Strategy, execution, management, optimization. Monthly reviews. Guaranteed results. Or we work for free.
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
              Ready For Executive<br />Marketing Leadership?
            </h2>
            <p className="font-newspaper text-xl mb-10 text-white/90">
              If you're doing $100k+ monthly and need strategic marketing leadership with guaranteed results, let's talk.
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
