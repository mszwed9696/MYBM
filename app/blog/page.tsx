"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        <div className="absolute inset-0 screen-tone opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              MARKETING
              <br />
              INSIGHTS
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight">
              Real strategies from scaling businesses from 6 to 7 and 7 to 8 figures
            </p>
          </div>

          <ComicPanel className="max-w-4xl mx-auto">
            <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
              Most marketing blogs are filled with regurgitated SEO garbage written by people who've never scaled a real business.
              <br /><br />
              <span className="font-bold text-black">Not this one.</span> Every article below comes from real experience scaling businesses from $100k/month to $500k, $1M, and beyond. These are the exact strategies we use with our clients—the ones we guarantee 30% revenue growth on.
              <br /><br />
              You won't find fluffy "10 social media tips" nonsense here. You'll find battle-tested systems for paid acquisition, funnel optimization, and scaling high-ticket offers.
              <br /><br />
              <span className="font-bold text-2xl text-black">Read. Implement. Grow. That's the deal.</span>
            </p>
          </ComicPanel>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CartoonButton href="/apply" variant="primary" className="text-lg px-8 py-4">
              APPLY NOW →
            </CartoonButton>
            <CartoonButton href="/guarantee" variant="gold" className="text-lg px-8 py-4">
              See Our Guarantee
            </CartoonButton>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">THE LIBRARY!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              LATEST
              <br />
              <span className="text-black">ARTICLES</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <ComicPanel className="halftone-overlay">
              <div className="font-cartoon text-xs uppercase mb-3 tracking-widest text-cartoon-brown">★ STRATEGY ★</div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Fractional CMO vs Agency vs In-House: The Truth
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-6">
                Most businesses waste $120k+ annually on the wrong marketing structure. Here's how to choose between fractional CMO, agency, or in-house—and why most pick wrong.
              </p>
              <Link href="/blog/fractional-cmo-vs-agency-vs-in-house" className="font-cartoon uppercase text-sm text-black hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </ComicPanel>

            {/* Article 2 */}
            <ComicPanel className="halftone-overlay">
              <div className="font-cartoon text-xs uppercase mb-3 tracking-widest text-cartoon-brown">★ CONSULTING ★</div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Marketing Strategy Consultants: What Actually Works
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-6">
                95% of marketing consultants deliver PowerPoints, not revenue. Learn what separates strategy that scales from expensive reports that collect dust.
              </p>
              <Link href="/blog/marketing-strategy-consultants" className="font-cartoon uppercase text-sm text-black hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </ComicPanel>

            {/* Article 3 */}
            <ComicPanel className="halftone-overlay">
              <div className="font-cartoon text-xs uppercase mb-3 tracking-widest text-cartoon-brown">★ COACHING ★</div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Funnel Strategies for High-Ticket Coaching Programs
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-6">
                How to build evergreen VSL funnels that convert cold traffic into $10k+ clients on autopilot. The exact system our coaching clients use to scale past $300k/month.
              </p>
              <Link href="/blog/funnel-strategies-high-ticket-coaching" className="font-cartoon uppercase text-sm text-black hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </ComicPanel>

            {/* Article 4 */}
            <ComicPanel className="halftone-overlay">
              <div className="font-cartoon text-xs uppercase mb-3 tracking-widest text-cartoon-brown">★ TRUTH BOMB ★</div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Why Marketing Agencies Fail High-Ticket Businesses
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-6">
                Traditional agencies are built for volume clients, not premium offers. Here's why they burn your budget on vanity metrics and what to do instead.
              </p>
              <Link href="/blog/why-marketing-agencies-fail-high-ticket" className="font-cartoon uppercase text-sm text-black hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </ComicPanel>

            {/* Article 5 */}
            <ComicPanel className="halftone-overlay">
              <div className="font-cartoon text-xs uppercase mb-3 tracking-widest text-cartoon-brown">★ B2B STRATEGY ★</div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Account-Based Marketing Guide for Consultants
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-6">
                Stop chasing every lead. Learn how to target your ideal 50 accounts with surgical precision and close $50k-$500k contracts consistently.
              </p>
              <Link href="/blog/account-based-marketing-guide-consultants" className="font-cartoon uppercase text-sm text-black hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </ComicPanel>

            {/* Article 6 */}
            <ComicPanel className="halftone-overlay">
              <div className="font-cartoon text-xs uppercase mb-3 tracking-widest text-cartoon-brown">★ COURSE CREATORS ★</div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Course Creator Evergreen Funnel That Actually Converts
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-6">
                Tired of quarterly launches? Build an evergreen funnel that generates daily sales while you sleep. The exact framework that took our clients from $120k to $372k monthly.
              </p>
              <Link href="/blog/course-creator-evergreen-funnel" className="font-cartoon uppercase text-sm text-black hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </ComicPanel>

            {/* Article 7 */}
            <ComicPanel className="halftone-overlay">
              <div className="font-cartoon text-xs uppercase mb-3 tracking-widest text-cartoon-brown">★ OUR GUARANTEE ★</div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Guaranteed Marketing Results: Why We Can, Others Can't
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-6">
                We guarantee 30% revenue growth or work for free. No other agency dares to make this promise. Here's exactly why we can—and why your current agency won't.
              </p>
              <Link href="/blog/guaranteed-marketing-results" className="font-cartoon uppercase text-sm text-black hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </ComicPanel>

            {/* Article 8 */}
            <ComicPanel className="halftone-overlay">
              <div className="font-cartoon text-xs uppercase mb-3 tracking-widest text-cartoon-brown">★ SCALE BLUEPRINT ★</div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                How to Scale a Coaching Business to $500k/Month
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-6">
                The complete playbook for taking a coaching business from $100k to $500k+ monthly. Paid acquisition, funnel optimization, team structure, and scaling without burnout.
              </p>
              <Link href="/blog/scale-coaching-business-500k-month" className="font-cartoon uppercase text-sm text-black hover:underline border-b-2 border-black pb-1">
                Read Full Article →
              </Link>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">TAKE ACTION!</div>
          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">
            READY TO STOP READING
            <br />
            <span className="text-white">AND START GROWING?</span>
          </h2>
          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              Knowledge is worthless without execution.<br /><br />
              Let's scale your business with our <span className="font-black text-black">30% guarantee</span>.<br /><br />
              <span className="font-black text-2xl text-black">Or we work for free.</span>
            </p>
          </ComicPanel>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">
              APPLY FOR PARTNERSHIP →
            </CartoonButton>
          </div>
        </div>
      </section>
    </>
  );
}
