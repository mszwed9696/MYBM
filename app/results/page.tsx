"use client";

import Link from "next/link";

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
            Client Results<br />That Speak For Themselves
          </h1>
          <p className="font-newspaper text-xl md:text-2xl text-black max-w-3xl mx-auto">
            Real revenue growth from real businesses. 30% minimum guaranteed or we work for free.
          </p>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: Client Results</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      {/* The Truth About Results */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE TRUTH ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Why Our Results Are <span className="line-through">Different</span>
            </h2>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Most agencies show you cherry-picked wins from their best month ever. We show you sustained, year-over-year revenue growth.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">Every client you see below hit—and most exceeded—our 30% minimum guarantee.</span> These aren't outliers. This is our standard.
            </p>

            <p className="newspaper-body mb-4">
              We only work with businesses doing $100k+ monthly because that's the threshold where our systems produce predictable results. Below that, you're fighting different battles. Above that, it's execution.
            </p>

            <p className="newspaper-body font-bold">
              100% of our clients exceed the 30% guarantee. That's not luck. That's systems that work.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ CASE STUDIES ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Client Success Stories
            </h2>
          </div>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center border-r-0 md:border-r-3 border-black pr-4">
                  <div className="font-headline text-5xl font-black mb-2">+287%</div>
                  <div className="font-newspaper text-sm uppercase">Revenue Growth</div>
                </div>
                <div className="text-center border-r-0 md:border-r-3 border-black pr-4">
                  <div className="font-headline text-5xl font-black mb-2">9 Mo</div>
                  <div className="font-newspaper text-sm uppercase">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-5xl font-black mb-2">$80k→$310k</div>
                  <div className="font-newspaper text-sm uppercase">Monthly Revenue</div>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">High-Ticket Business Coaching</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">The Problem:</span> Coach was doing $80k/month from referrals and sporadic webinar launches. Inconsistent pipeline. No scalable acquisition system.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">What We Did:</span> Built evergreen VSL funnel, launched profitable Facebook/YouTube ads, implemented automated nurture sequences, optimized application-to-close rate.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                <span className="font-bold">The Result:</span> Scaled from $80k/mo to $310k/mo in 9 months. Predictable daily lead flow. 40% close rate on applications. Completely eliminated launch dependency.
              </p>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center border-r-0 md:border-r-3 border-black pr-4">
                  <div className="font-headline text-5xl font-black mb-2">+156%</div>
                  <div className="font-newspaper text-sm uppercase">Revenue Growth</div>
                </div>
                <div className="text-center border-r-0 md:border-r-3 border-black pr-4">
                  <div className="font-headline text-5xl font-black mb-2">12 Mo</div>
                  <div className="font-newspaper text-sm uppercase">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-5xl font-black mb-2">$150k→$385k</div>
                  <div className="font-newspaper text-sm uppercase">Monthly Revenue</div>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">B2B Consulting Firm</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">The Problem:</span> Consulting firm relied entirely on referrals and networking. Zero outbound. No content strategy. Pipeline dried up during slow quarters.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">What We Did:</span> Launched LinkedIn thought leadership campaign, built SEO content strategy, created targeted ABM program, developed case study library and sales enablement.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                <span className="font-bold">The Result:</span> Grew from $150k/mo to $385k/mo in 12 months. Now generating 15-20 qualified leads monthly. Sales cycle shortened from 6 months to 3.5 months.
              </p>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center border-r-0 md:border-r-3 border-black pr-4">
                  <div className="font-headline text-5xl font-black mb-2">+210%</div>
                  <div className="font-newspaper text-sm uppercase">Revenue Growth</div>
                </div>
                <div className="text-center border-r-0 md:border-r-3 border-black pr-4">
                  <div className="font-headline text-5xl font-black mb-2">11 Mo</div>
                  <div className="font-newspaper text-sm uppercase">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-5xl font-black mb-2">$120k→$372k</div>
                  <div className="font-newspaper text-sm uppercase">Monthly Revenue</div>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Online Course Creator</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">The Problem:</span> Course creator stuck in quarterly launch cycle. Burnout from constant webinar launches. No evergreen revenue between launches.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">What We Did:</span> Built evergreen webinar funnel, launched paid traffic campaigns, created upsell/cross-sell product ecosystem, implemented email retention sequences.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                <span className="font-bold">The Result:</span> Scaled from $120k/mo to $372k/mo in 11 months. Now making daily sales on autopilot. Launches are optional, not required. LTV increased 2.4x through backend offers.
              </p>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center border-r-0 md:border-r-3 border-black pr-4">
                  <div className="font-headline text-5xl font-black mb-2">+198%</div>
                  <div className="font-newspaper text-sm uppercase">Revenue Growth</div>
                </div>
                <div className="text-center border-r-0 md:border-r-3 border-black pr-4">
                  <div className="font-headline text-5xl font-black mb-2">10 Mo</div>
                  <div className="font-newspaper text-sm uppercase">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="font-headline text-5xl font-black mb-2">$95k→$283k</div>
                  <div className="font-newspaper text-sm uppercase">Monthly Revenue</div>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">B2B SaaS Company</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">The Problem:</span> SaaS company had high churn (7%), expensive CAC, low trial-to-paid conversion. Bleeding money on paid ads that didn't convert.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                <span className="font-bold">What We Did:</span> Rebuilt onboarding to drive activation, implemented retention campaigns, optimized trial-to-paid flow, launched content marketing for qualified pipeline, developed expansion revenue program.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                <span className="font-bold">The Result:</span> Grew MRR from $95k to $283k in 10 months. Reduced churn from 7% to 2.5%. Increased trial-to-paid from 14% to 31%. Expansion revenue now 40% of new MRR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ STATISTICAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              By The Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">87%</div>
              <div className="font-headline text-xl uppercase mb-4">Avg Growth</div>
              <p className="font-newspaper text-gray-700">Average revenue growth across all clients in year 1</p>
            </div>
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">100%</div>
              <div className="font-headline text-xl uppercase mb-4">Hit Guarantee</div>
              <p className="font-newspaper text-gray-700">Every client exceeds our 30% minimum guarantee</p>
            </div>
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">$18M+</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Added</div>
              <p className="font-newspaper text-gray-700">Total new revenue generated for client businesses</p>
            </div>
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">50+</div>
              <div className="font-headline text-xl uppercase mb-4">Businesses</div>
              <p className="font-newspaper text-gray-700">Companies we've partnered with and scaled</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16">
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8">
              Ready For Your<br />30% Growth Story?
            </h2>
            <Link href="/apply" className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-headline text-lg uppercase hover:bg-gray-100">
              APPLY NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
