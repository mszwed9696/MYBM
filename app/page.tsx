"use client";

import Link from "next/link";
import SpeechBubble from "@/components/SpeechBubble";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";
import Starburst from "@/components/Starburst";

export default function Home() {
  return (
    <>
      {/* Vintage Cartoon Hero - Above the Fold */}
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        {/* Halftone background pattern */}
        <div className="absolute inset-0 screen-tone opacity-40"></div>

        {/* Philadelphia cityscape silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 opacity-10">
          <img
            src="/heroes/philadelphia-skyline.png"
            alt=""
            className="w-full h-full object-cover object-bottom"
            style={{ filter: 'sepia(1) contrast(1.5)' }}
            loading="eager"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Offer */}
            <div className="space-y-8">
              {/* Main Headline - Dream Outcome */}
              <div>
                <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
                  WE MAKE YOU
                  <br />
                  AN OFFER
                  <br />
                  YOU CAN'T REFUSE
                </h1>
                <p className="text-2xl md:text-3xl font-mobster text-black leading-tight mb-4">
                  30% Revenue Increase Guaranteed Or We Work For Free
                </p>
              </div>

              {/* Value Proposition - Perceived Likelihood */}
              <ComicPanel>
                <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
                  <span className="font-black text-2xl">MINIMUM REQUIREMENT: $100,000+ in monthly revenue</span>
                  <br /><br />
                  We'll add <span className="font-bold text-black">$30k-$100k+ to your monthly revenue</span> in the next 12 months—or we work for free until we hit it.
                  <br /><br />
                  <span className="font-bold">Zero risk. Maximum results. That's the deal.</span>
                </p>
              </ComicPanel>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <CartoonButton href="/apply" variant="primary" className="text-lg px-8 py-4">
                  APPLY NOW →
                </CartoonButton>
                <CartoonButton href="/guarantee" variant="gold" className="text-lg px-8 py-4">
                  See The Guarantee
                </CartoonButton>
              </div>

              <p className="text-sm font-newspaper text-cartoon-brown italic">
                ★ Limited partnerships • MINIMUM $100,000/month revenue required • 24-48hr review ★
              </p>
            </div>

            {/* Right Column - The Don Character */}
            <div className="relative">
              <ComicPanel className="relative halftone-overlay p-0 overflow-hidden">
                <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
                  <img
                    src="/characters/driver-vintage-car.png"
                    alt="The Don - Mind Your Business Media Founder"
                    className="w-full h-full object-contain"
                    style={{ objectPosition: 'center center' }}
                    loading="eager"
                  />
                </div>
                <SpeechBubble className="mt-6 mx-4 mb-4">
                  "We don't make promises. We make <span className="font-black">guarantees</span>. 30% revenue growth or you don't pay. <span className="italic">Capisce?</span>"
                </SpeechBubble>
                <p className="text-center font-newspaper font-bold text-cartoon-ink border-t-3 border-cartoon-ink pt-3 pb-4 mx-4">
                  Don Michael Szwed, Founder
                </p>
              </ComicPanel>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Numbers - Trust Building */}
      <section className="py-16 bg-cartoon-ink text-cartoon-cream border-b-5 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">+287%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Average Growth</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Hit Guarantee</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">$100k+</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Minimum Revenue</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">12mo</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Max Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Why Other Agencies Fail */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">BAM!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHY OTHER AGENCIES
              <br />
              <span className="text-black">FAIL YOU</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown max-w-3xl mx-auto">
              Most agencies drain $5k-10k/month with zero accountability. Here's why:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⏰",
                title: "TOO SLOW",
                problem: "\"Give us 18-24 months...\"",
                solution: "6-month ramp, 12-month guarantee max"
              },
              {
                icon: "🎲",
                title: "TOO RISKY",
                problem: "\"Pay us first, hope for results later...\"",
                solution: "30% or free. You don't lose. We guarantee it."
              },
              {
                icon: "😓",
                title: "TOO MUCH WORK",
                problem: "\"You need to provide content, feedback, resources...\"",
                solution: "We handle everything. You show up to strategy calls."
              }
            ].map((item, i) => (
              <ComicPanel key={i} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="font-cartoon text-3xl text-black mb-4 uppercase">{item.title}</h3>
                <div className="mb-4">
                  <p className="font-newspaper text-lg italic text-cartoon-brown mb-2">
                    Them:
                  </p>
                  <p className="font-newspaper text-base text-cartoon-ink">
                    {item.problem}
                  </p>
                </div>
                <div className="border-t-3 border-cartoon-ink pt-4">
                  <p className="font-newspaper text-lg font-bold text-black mb-2">
                    Us:
                  </p>
                  <p className="font-newspaper text-base text-cartoon-ink font-bold">
                    {item.solution}
                  </p>
                </div>
              </ComicPanel>
            ))}
          </div>
        </div>
      </section>

      {/* The Value Equation Breakdown */}
      <section className="py-20 md:py-32 bg-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              HOW WE DELIVER
              <br />
              <span className="text-black">GUARANTEED RESULTS</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown max-w-3xl mx-auto">
              Maximum outcome + Maximum certainty + Minimum time + Zero extra work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Dream Outcome */}
            <ComicPanel className="halftone-overlay">
              <div className="flex items-start gap-4">
                <div className="text-6xl">🎯</div>
                <div>
                  <h3 className="font-cartoon text-2xl text-black uppercase mb-3">Dream Outcome</h3>
                  <p className="font-newspaper text-lg leading-relaxed text-cartoon-ink mb-4">
                    <span className="font-black">Not "more leads" or "better brand awareness."</span>
                  </p>
                  <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                    We guarantee <span className="font-bold">30% more revenue</span> in 12 months. That's $30k+/month for a $100k/mo business. $75k+/month for a $250k/mo business. Real money. In your account.
                  </p>
                </div>
              </div>
            </ComicPanel>

            {/* Perceived Likelihood */}
            <ComicPanel className="halftone-overlay">
              <div className="flex items-start gap-4">
                <div className="text-6xl">✅</div>
                <div>
                  <h3 className="font-cartoon text-2xl text-black uppercase mb-3">100% Certainty</h3>
                  <p className="font-newspaper text-lg leading-relaxed text-cartoon-ink mb-4">
                    <span className="font-black">We back it with a guarantee:</span>
                  </p>
                  <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                    If we don't hit 30% in 12 months, <span className="font-bold">we work for free</span> until we do. You literally can't lose. We've hit it 100% of the time. We'll hit it for you too.
                  </p>
                </div>
              </div>
            </ComicPanel>

            {/* Time Delay */}
            <ComicPanel className="halftone-overlay">
              <div className="flex items-start gap-4">
                <div className="text-6xl">⚡</div>
                <div>
                  <h3 className="font-cartoon text-2xl text-black uppercase mb-3">Fast Results</h3>
                  <p className="font-newspaper text-lg leading-relaxed text-cartoon-ink mb-4">
                    <span className="font-black">Not "maybe in 2 years."</span>
                  </p>
                  <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                    Most clients see momentum in <span className="font-bold">90-120 days</span>. Full 30% within <span className="font-bold">12 months max</span>. No endless "testing." We know what works.
                  </p>
                </div>
              </div>
            </ComicPanel>

            {/* Effort & Sacrifice */}
            <ComicPanel className="halftone-overlay">
              <div className="flex items-start gap-4">
                <div className="text-6xl">🤝</div>
                <div>
                  <h3 className="font-cartoon text-2xl text-black uppercase mb-3">Zero Extra Work</h3>
                  <p className="font-newspaper text-lg leading-relaxed text-cartoon-ink mb-4">
                    <span className="font-black">Not "You need to create content, manage ads, build funnels..."</span>
                  </p>
                  <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                    <span className="font-bold">We do everything.</span> You show up to weekly strategy calls. We handle ads, funnels, content, automation, optimization. Everything.
                  </p>
                </div>
              </div>
            </ComicPanel>
          </div>

          <div className="text-center">
            <CartoonButton href="/apply" variant="primary" className="text-xl px-12 py-5">
              GET THE GUARANTEE →
            </CartoonButton>
          </div>
        </div>
      </section>

      {/* Case Studies / Proof */}
      <section className="py-20 md:py-32 bg-cartoon-newsprint border-b-5 border-cartoon-ink halftone-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6 text-black">PROOF!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              THE NUMBERS
              <br />
              <span className="text-black">DON'T LIE</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown">
              Real clients. Real results. Real revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                before: "$80k/mo",
                after: "$310k/mo",
                growth: "+287%",
                timeline: "9 months",
                industry: "High-Ticket Coaching"
              },
              {
                before: "$150k/mo",
                after: "$385k/mo",
                growth: "+156%",
                timeline: "12 months",
                industry: "B2B Consulting"
              },
              {
                before: "$120k/mo",
                after: "$372k/mo",
                growth: "+210%",
                timeline: "11 months",
                industry: "Online Courses"
              }
            ].map((caseStudy, i) => (
              <ComicPanel key={i} className="text-center bg-white">
                <div className="text-5xl font-cartoon text-black mb-4">{caseStudy.growth}</div>
                <div className="space-y-3 font-newspaper">
                  <div>
                    <span className="text-sm uppercase tracking-wide text-cartoon-brown">Before:</span>
                    <div className="text-2xl font-bold text-cartoon-ink">{caseStudy.before}</div>
                  </div>
                  <div className="text-3xl text-black">→</div>
                  <div>
                    <span className="text-sm uppercase tracking-wide text-cartoon-brown">After:</span>
                    <div className="text-2xl font-bold text-black">{caseStudy.after}</div>
                  </div>
                  <div className="border-t-3 border-cartoon-ink pt-3 mt-4">
                    <div className="text-xs uppercase text-cartoon-brown mb-1">{caseStudy.timeline}</div>
                    <div className="text-sm font-bold text-black">{caseStudy.industry}</div>
                  </div>
                </div>
              </ComicPanel>
            ))}
          </div>

          <div className="text-center">
            <Link href="/results" className="font-newspaper text-lg text-cartoon-ink underline hover:text-black transition-colors">
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For - Qualification */}
      <section className="py-20 md:py-32 bg-cartoon-tan border-b-5 border-cartoon-ink">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHO WE WORK WITH
              <br />
              <span className="text-black">(AND WHO WE DON'T)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Yes */}
            <ComicPanel className="bg-white border-cartoon-ink">
              <div className="text-6xl text-center mb-4">✓</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-black">PERFECT FIT:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-cartoon-ink">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><span className="font-bold">$100k+/month</span> in revenue (proven business model)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><span className="font-bold">Ready to scale</span> (infrastructure in place)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><span className="font-bold">Want accountability</span> (not just "exposure")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><span className="font-bold">Long-term partner</span> (6-12+ month commitment)</span>
                </li>
              </ul>
            </ComicPanel>

            {/* No */}
            <ComicPanel className="bg-cartoon-ink text-white border-black">
              <div className="text-6xl text-center mb-4">✗</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">NOT A FIT:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-white">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✗</span>
                  <span><span className="font-bold">Under $100k/month</span> (we can't guarantee results at that scale)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✗</span>
                  <span><span className="font-bold">Want "brand awareness"</span> without revenue tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✗</span>
                  <span><span className="font-bold">Looking for cheap labor</span> (we're not the cheapest)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✗</span>
                  <span><span className="font-bold">Need hand-holding</span> (we execute, you approve)</span>
                </li>
              </ul>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Final CTA - The Offer */}
      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>

        {/* Character illustration */}
        <div className="absolute left-0 bottom-0 w-48 md:w-64 opacity-30 z-0">
          <img src="/characters/don-cigar-car.png" alt="" className="w-full h-auto" loading="lazy" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">MAKE THE CALL!</div>

          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">
            READY FOR
            <br />
            <span className="text-white">30% MORE REVENUE?</span>
          </h2>

          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you're doing <span className="font-black text-black">$100k+ monthly</span> and serious about growth...
              <br /><br />
              We'll guarantee you <span className="font-black text-black">30% more revenue in 12 months</span> or work for free until we hit it.
              <br /><br />
              <span className="font-black text-2xl text-black">Zero risk. Maximum results.</span>
            </p>
          </ComicPanel>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">
              APPLY NOW →
            </CartoonButton>
          </div>

          <p className="font-newspaper text-sm text-cartoon-tan uppercase tracking-wider">
            ★ APPLICATION REVIEW: 24-48 HOURS ★<br/>
            LIMITED PARTNERSHIPS AVAILABLE ★ MINIMUM $100,000/MONTH REVENUE REQUIRED ★
          </p>

          <div className="mt-12 pt-8 border-t-3 border-cartoon-tan">
            <p className="font-mobster text-xl italic text-cartoon-cream">
              "We protect our partners. We deliver results. Or we don't get paid. <span className="not-italic font-black">Capisce?</span>"
            </p>
            <p className="font-newspaper text-sm mt-2 text-cartoon-tan">
              — Don Michael Szwed, Mind Your Business Media
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
