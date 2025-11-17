"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function ResultsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        <div className="absolute inset-0 screen-tone opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              CLIENT RESULTS
              <br />
              THAT SPEAK
              <br />
              FOR THEMSELVES
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight">
              Real revenue growth from real businesses. 30% minimum guaranteed.
            </p>
          </div>

          <ComicPanel className="max-w-4xl mx-auto">
            <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
              Most agencies show you cherry-picked wins from their best month ever.
              <br /><br />
              <span className="font-bold text-black">We show you sustained, year-over-year revenue growth.</span>
              <br /><br />
              Every client below hit—and most exceeded—our 30% minimum guarantee. These aren't outliers. This is our standard.
            </p>
          </ComicPanel>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CartoonButton href="/apply" variant="primary" className="text-lg px-8 py-4">
              APPLY NOW →
            </CartoonButton>
            <CartoonButton href="/guarantee" variant="gold" className="text-lg px-8 py-4">
              See The Guarantee
            </CartoonButton>
          </div>
        </div>
      </section>

      {/* Social Proof Numbers */}
      <section className="py-16 bg-cartoon-ink text-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">87%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Average Growth</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Hit Guarantee</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">$18M+</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Revenue Added</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">50+</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">PROOF!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              REAL BUSINESSES
              <br />
              <span className="text-black">REAL GROWTH</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <ComicPanel className="halftone-overlay">
              <div className="grid grid-cols-3 gap-4 mb-6 text-center border-b-3 border-cartoon-ink pb-6">
                <div>
                  <div className="font-cartoon text-4xl font-black text-black mb-2">+287%</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Revenue Growth</div>
                </div>
                <div>
                  <div className="font-cartoon text-4xl font-black text-black mb-2">9 Mo</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Timeline</div>
                </div>
                <div>
                  <div className="font-cartoon text-3xl font-black text-black mb-2">$80k→$310k</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Monthly</div>
                </div>
              </div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black">High-Ticket Business Coaching</h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-3">
                <span className="font-bold text-black">The Problem:</span> Coach doing $80k/month from referrals. Inconsistent pipeline. No scalable acquisition system.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-3">
                <span className="font-bold text-black">What We Did:</span> Built evergreen VSL funnel, launched profitable ads, implemented automated nurture, optimized close rate.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed font-bold">
                <span className="font-bold text-black">The Result:</span> Scaled to $310k/mo in 9 months. Predictable daily leads. 40% close rate. Zero launch dependency.
              </p>
            </ComicPanel>

            {/* Case Study 2 */}
            <ComicPanel className="halftone-overlay">
              <div className="grid grid-cols-3 gap-4 mb-6 text-center border-b-3 border-cartoon-ink pb-6">
                <div>
                  <div className="font-cartoon text-4xl font-black text-black mb-2">+156%</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Revenue Growth</div>
                </div>
                <div>
                  <div className="font-cartoon text-4xl font-black text-black mb-2">12 Mo</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Timeline</div>
                </div>
                <div>
                  <div className="font-cartoon text-3xl font-black text-black mb-2">$150k→$385k</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Monthly</div>
                </div>
              </div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black">B2B Consulting Firm</h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-3">
                <span className="font-bold text-black">The Problem:</span> Relied entirely on referrals. Zero outbound. No content. Pipeline dried up during slow quarters.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-3">
                <span className="font-bold text-black">What We Did:</span> Launched LinkedIn thought leadership, built SEO strategy, created ABM program, developed case studies.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed font-bold">
                <span className="font-bold text-black">The Result:</span> Grew to $385k/mo in 12 months. 15-20 qualified leads monthly. Sales cycle cut from 6mo to 3.5mo.
              </p>
            </ComicPanel>

            {/* Case Study 3 */}
            <ComicPanel className="halftone-overlay">
              <div className="grid grid-cols-3 gap-4 mb-6 text-center border-b-3 border-cartoon-ink pb-6">
                <div>
                  <div className="font-cartoon text-4xl font-black text-black mb-2">+210%</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Revenue Growth</div>
                </div>
                <div>
                  <div className="font-cartoon text-4xl font-black text-black mb-2">11 Mo</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Timeline</div>
                </div>
                <div>
                  <div className="font-cartoon text-3xl font-black text-black mb-2">$120k→$372k</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Monthly</div>
                </div>
              </div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black">Online Course Creator</h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-3">
                <span className="font-bold text-black">The Problem:</span> Stuck in quarterly launch cycle. Burnout from constant webinars. No evergreen revenue.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-3">
                <span className="font-bold text-black">What We Did:</span> Built evergreen webinar funnel, launched paid traffic, created upsell ecosystem, implemented retention sequences.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed font-bold">
                <span className="font-bold text-black">The Result:</span> Scaled to $372k/mo in 11 months. Daily sales on autopilot. LTV increased 2.4x through backend offers.
              </p>
            </ComicPanel>

            {/* Case Study 4 */}
            <ComicPanel className="halftone-overlay">
              <div className="grid grid-cols-3 gap-4 mb-6 text-center border-b-3 border-cartoon-ink pb-6">
                <div>
                  <div className="font-cartoon text-4xl font-black text-black mb-2">+198%</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Revenue Growth</div>
                </div>
                <div>
                  <div className="font-cartoon text-4xl font-black text-black mb-2">10 Mo</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Timeline</div>
                </div>
                <div>
                  <div className="font-cartoon text-3xl font-black text-black mb-2">$95k→$283k</div>
                  <div className="font-newspaper text-xs uppercase text-cartoon-brown">Monthly</div>
                </div>
              </div>
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black">B2B SaaS Company</h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-3">
                <span className="font-bold text-black">The Problem:</span> High churn (7%), expensive CAC, low trial-to-paid conversion. Bleeding money on ads.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-3">
                <span className="font-bold text-black">What We Did:</span> Rebuilt onboarding, implemented retention campaigns, optimized trial flow, launched content marketing.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed font-bold">
                <span className="font-bold text-black">The Result:</span> Grew MRR to $283k in 10 months. Churn: 7% → 2.5%. Trial-to-paid: 14% → 31%.
              </p>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">MAKE THE CALL!</div>
          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">
            READY FOR YOUR
            <br />
            <span className="text-white">30% GROWTH STORY?</span>
          </h2>
          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you're doing $100k+ monthly and ready for guaranteed growth...<br /><br />
              We'll add <span className="font-black text-black">30% to your revenue in 12 months</span>.<br /><br />
              <span className="font-black text-2xl text-black">Or we work for free.</span>
            </p>
          </ComicPanel>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">
              APPLY NOW →
            </CartoonButton>
          </div>
        </div>
      </section>
    </>
  );
}
