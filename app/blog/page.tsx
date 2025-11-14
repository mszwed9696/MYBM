"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
            Marketing Insights
          </h1>
          <p className="font-newspaper text-xl md:text-2xl text-black max-w-3xl mx-auto">
            Real strategies from scaling businesses from 6 to 7 and 7 to 8 figures
          </p>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: Blog</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE REAL DEAL ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              No Fluff. <span className="line-through">Just</span> Results.
            </h2>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Most marketing blogs are filled with regurgitated SEO garbage written by people who've never scaled a real business.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">Not this one.</span> Every article below comes from real experience scaling businesses from $100k/month to $500k, $1M, and beyond. These are the exact strategies we use with our clients—the ones we guarantee 30% revenue growth on.
            </p>

            <p className="newspaper-body mb-4">
              You won't find fluffy "10 social media tips" nonsense here. You'll find battle-tested systems for paid acquisition, funnel optimization, and scaling high-ticket offers. The stuff that actually moves revenue.
            </p>

            <p className="newspaper-body font-bold">
              Read. Implement. Grow. That's the deal.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ LATEST ARTICLES ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Recent Posts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-xs uppercase mb-3 tracking-widest">★ STRATEGY ★</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-3">
                Fractional CMO vs Agency vs In-House: The Truth
              </h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-6">
                Most businesses waste $120k+ annually on the wrong marketing structure. Here's how to choose between fractional CMO, agency, or in-house—and why most pick wrong.
              </p>
              <Link href="/blog/fractional-cmo-vs-agency-vs-in-house" className="font-headline uppercase text-sm hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </div>

            {/* Article 2 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-xs uppercase mb-3 tracking-widest">★ CONSULTING ★</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-3">
                Marketing Strategy Consultants: What Actually Works
              </h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-6">
                95% of marketing consultants deliver PowerPoints, not revenue. Learn what separates strategy that scales from expensive reports that collect dust.
              </p>
              <Link href="/blog/marketing-strategy-consultants" className="font-headline uppercase text-sm hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-xs uppercase mb-3 tracking-widest">★ COACHING ★</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-3">
                Funnel Strategies for High-Ticket Coaching Programs
              </h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-6">
                How to build evergreen VSL funnels that convert cold traffic into $10k+ clients on autopilot. The exact system our coaching clients use to scale past $300k/month.
              </p>
              <Link href="/blog/funnel-strategies-high-ticket-coaching" className="font-headline uppercase text-sm hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </div>

            {/* Article 4 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-xs uppercase mb-3 tracking-widest">★ TRUTH BOMB ★</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-3">
                Why Marketing Agencies Fail High-Ticket Businesses
              </h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-6">
                Traditional agencies are built for volume clients, not premium offers. Here's why they burn your budget on vanity metrics and what to do instead.
              </p>
              <Link href="/blog/why-marketing-agencies-fail-high-ticket" className="font-headline uppercase text-sm hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </div>

            {/* Article 5 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-xs uppercase mb-3 tracking-widest">★ B2B STRATEGY ★</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-3">
                Account-Based Marketing Guide for Consultants
              </h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-6">
                Stop chasing every lead. Learn how to target your ideal 50 accounts with surgical precision and close $50k-$500k contracts consistently.
              </p>
              <Link href="/blog/account-based-marketing-guide-consultants" className="font-headline uppercase text-sm hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </div>

            {/* Article 6 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-xs uppercase mb-3 tracking-widest">★ COURSE CREATORS ★</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-3">
                Course Creator Evergreen Funnel That Actually Converts
              </h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-6">
                Tired of quarterly launches? Build an evergreen funnel that generates daily sales while you sleep. The exact framework that took our clients from $120k to $372k monthly.
              </p>
              <Link href="/blog/course-creator-evergreen-funnel" className="font-headline uppercase text-sm hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </div>

            {/* Article 7 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-xs uppercase mb-3 tracking-widest">★ OUR GUARANTEE ★</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-3">
                Guaranteed Marketing Results: Why We Can, Others Can't
              </h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-6">
                We guarantee 30% revenue growth or work for free. No other agency dares to make this promise. Here's exactly why we can—and why your current agency won't.
              </p>
              <Link href="/blog/guaranteed-marketing-results" className="font-headline uppercase text-sm hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </div>

            {/* Article 8 */}
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-xs uppercase mb-3 tracking-widest">★ SCALE BLUEPRINT ★</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-3">
                How to Scale a Coaching Business to $500k/Month
              </h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-6">
                The complete playbook for taking a coaching business from $100k to $500k+ monthly. Paid acquisition, funnel optimization, team structure, and scaling without burnout.
              </p>
              <Link href="/blog/scale-coaching-business-500k-month" className="font-headline uppercase text-sm hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16">
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-6">
              Ready To Stop Reading<br />And Start Growing?
            </h2>
            <p className="font-newspaper text-xl mb-8 text-white/90">
              Knowledge is worthless without execution. Let's scale your business with our 30% guarantee.
            </p>
            <Link href="/apply" className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-headline text-lg uppercase hover:bg-gray-100">
              APPLY FOR PARTNERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
