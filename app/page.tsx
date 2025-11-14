"use client";

import Link from "next/link";
import NewspaperDivider from "@/components/NewspaperDivider";
import NewspaperHeadline from "@/components/NewspaperHeadline";
import NewspaperMasthead from "@/components/NewspaperMasthead";
import NewspaperGrid, { NewspaperGridItem } from "@/components/NewspaperGrid";
import PullQuote from "@/components/PullQuote";
import ClassifiedAd from "@/components/ClassifiedAd";

export default function Home() {
  return (
    <>
      {/* Newspaper Masthead - Mobster Style */}
      <section className="bg-white border-b-5 border-black newspaper-texture">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <NewspaperMasthead subtitle="For Businesses Doing $100K+ Monthly Revenue · Established 2024 · Philadelphia">
            MIND YOUR BUSINESS MEDIA
          </NewspaperMasthead>

          {/* Date and Edition - Mobster Theme */}
          <div className="flex justify-between items-center border-t-2 border-b-2 border-black py-2 mt-4 text-xs font-newspaper uppercase">
            <span>★ Philadelphia Edition ★</span>
            <span className="font-bold">SPECIAL EDITION: The Offer You Can't Refuse</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </section>

      {/* Hero Section - Front Page Lead Story */}
      <section className="relative bg-white text-black overflow-hidden border-b-5 border-black newspaper-texture">
        {/* Philadelphia cityscape - Black and white background */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/heroes/philadelphia-skyline.png"
            alt="Philadelphia Skyline"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.2)' }}
            loading="lazy"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 z-20">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Main Story - Left Column (8 cols) */}
            <div className="md:col-span-8 border-r-0 md:border-r-3 border-black pr-0 md:pr-12">
              {/* Main Headline */}
              <div className="mb-10 animate-stamp">
                <div className="inline-block mb-3 px-4 py-2 border-3 border-black bg-black text-white font-newspaper font-bold text-xs uppercase tracking-wider">
                  ★ BREAKING NEWS ★
                </div>

                <h1 className="font-headline font-black uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tighter border-b-5 border-black pb-4 mb-6">
                  WE DON'T MAKE OFFERS
                  <br />
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">WE MAKE YOU AN OFFER</span>
                  <br />
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1">YOU CAN'T REFUSE</span>
                </h1>

                <p className="newspaper-byline text-base mb-8">
                  By The Don · Special Investigative Report · Mind Your Business Media Exclusive
                </p>
              </div>

              {/* Article Body - Newspaper Columns */}
              <div className="newspaper-columns-2 newspaper-columns animate-ink mb-8">
                <div className="no-column-break">
                  <p className="newspaper-body drop-cap mb-4">
                    In an unprecedented move shaking up the marketing industry, Philadelphia-based Mind Your Business Media has issued a bold guarantee that other agencies won't touch: <span className="font-bold">30% revenue increase in year 1, or they work for free until you get it.</span>
                  </p>

                  <p className="newspaper-body mb-4">
                    Industry insiders are calling it "the offer you can't refuse" — a complete reversal of the typical agency model where businesses pay hefty retainers with zero accountability.
                  </p>

                  <p className="newspaper-body mb-4">
                    "Most agencies burn through $5k-10k monthly while delivering nothing but vanity metrics," says Don Michael Szwed, founder of Mind Your Business Media. "Clicks, impressions, engagement — all smoke and mirrors. They don't talk revenue because they can't deliver it."
                  </p>

                  <p className="newspaper-body mb-4">
                    But Mind Your Business Media operates differently. <span className="font-bold">Revenue is the only metric that matters.</span> No excuses. No BS. Just results — or you don't pay.
                  </p>

                  <p className="newspaper-body mb-4">
                    The Philadelphia operation only works with established businesses doing $100k+ monthly revenue. "We're not here for tire-kickers," Szwed explains. "You're serious, we're serious. You want guarantees, we give guarantees."
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid md:grid-cols-2 gap-6 mt-8 animate-stamp">
                <Link href="/apply" className="newspaper-ad group hover:shadow-2xl transition-all">
                  <div className="text-2xl font-headline font-black uppercase mb-2">JOIN THE OPERATION</div>
                  <p className="font-newspaper text-xs">Limited partnerships · Apply in 24-48 hours</p>
                </Link>
                <Link href="/guarantee" className="border-5 border-black p-4 text-center bg-white group hover:bg-black hover:text-white transition-all">
                  <div className="text-2xl font-headline font-black uppercase mb-2">SEE THE GUARANTEE</div>
                  <p className="font-newspaper text-xs">30% or we work for free</p>
                </Link>
              </div>
            </div>

            {/* Right Sidebar - Stats & Character */}
            <div className="md:col-span-4">
              {/* Stats Box */}
              <div className="border-5 border-black bg-black text-white p-6 mb-8 newspaper-shadow animate-unfold">
                <h3 className="font-headline font-black uppercase text-xl mb-6 border-b-2 border-white pb-3">
                  THE NUMBERS
                </h3>
                <div className="space-y-6">
                  <div className="border-b border-white pb-3">
                    <div className="text-4xl font-headline font-black">30%</div>
                    <div className="text-xs font-newspaper uppercase">Minimum Guarantee</div>
                  </div>
                  <div className="border-b border-white pb-3">
                    <div className="text-4xl font-headline font-black">$100k+</div>
                    <div className="text-xs font-newspaper uppercase">Monthly Revenue Required</div>
                  </div>
                  <div>
                    <div className="text-4xl font-headline font-black">100%</div>
                    <div className="text-xs font-newspaper uppercase">Risk-Free</div>
                  </div>
                </div>
              </div>

              {/* The Don Image */}
              <div className="border-5 border-black bg-white p-2 animate-stamp">
                <img
                  src="/characters/driver-vintage-car.png"
                  alt="The Don"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <p className="text-xs font-newspaper italic text-center mt-2 border-t-2 border-black pt-2">
                  Don Michael Szwed, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newspaper Ornamental Divider */}
      <NewspaperDivider />

      {/* Why Most Agencies Fail - Editorial Section */}
      <section className="py-20 md:py-24 bg-newspaper-cream border-b-5 border-black newspaper-texture">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-section-fade">
            <div className="inline-block px-4 py-1 border-2 border-black bg-white font-newspaper font-bold text-xs uppercase mb-3">
              ★ EDITORIAL ★
            </div>
            <h2 className="font-headline font-black uppercase text-3xl md:text-5xl lg:text-6xl border-b-4 border-black pb-3 inline-block">
              WHY MOST AGENCIES ARE <span className="line-through">WEAK</span>
            </h2>
            <p className="newspaper-byline text-center mt-4 border-l-0">
              An exposé on the marketing racket's dirty secrets
            </p>
          </div>

          <NewspaperGrid columns={3} className="stagger-children">
            <NewspaperGridItem>
              <div className="text-5xl text-center mb-3">💸</div>
              <h3 className="font-headline font-black text-lg uppercase mb-2 border-b-2 border-black pb-2 text-center">
                THEY BURN YOUR MONEY
              </h3>
              <p className="newspaper-body text-sm">
                $5k-10k/month retainers with zero accountability. They test on your dime while you bleed cash. No guarantees. No results. Just excuses and vanity metrics.
              </p>
            </NewspaperGridItem>

            <NewspaperGridItem>
              <div className="text-5xl text-center mb-3">🎭</div>
              <h3 className="font-headline font-black text-lg uppercase mb-2 border-b-2 border-black pb-2 text-center">
                THEY HIDE BEHIND METRICS
              </h3>
              <p className="newspaper-body text-sm">
                Clicks, impressions, engagement—all vanity. They don't talk about revenue because they can't deliver it. Smoke and mirrors to cover their incompetence.
              </p>
            </NewspaperGridItem>

            <NewspaperGridItem>
              <div className="text-5xl text-center mb-3">🤡</div>
              <h3 className="font-headline font-black text-lg uppercase mb-2 border-b-2 border-black pb-2 text-center">
                THEY USE COOKIE-CUTTERS
              </h3>
              <p className="newspaper-body text-sm">
                Same strategy for everyone. High-ticket businesses need specialized expertise, not generic templates from a $99 playbook they bought online.
              </p>
            </NewspaperGridItem>
          </NewspaperGrid>
        </div>
      </section>

      {/* Pull Quote - Mobster Style */}
      <div className="relative -my-12 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="border-5 border-black bg-white p-10 md:p-12 newspaper-shadow animate-ink">
            <p className="text-2xl md:text-3xl font-newspaper italic text-center font-bold leading-relaxed">
              "We're not just another agency. We're your partners. We protect our partners. We deliver results. Or we don't get paid. <span className="not-italic">Capisce?</span>"
            </p>
            <p className="text-base mt-4 text-center font-newspaper">
              — Don Michael Szwed, Mind Your Business Media
            </p>
          </div>
        </div>
      </div>

      {/* The Mind Your Business Way - Feature Story */}
      <section className="py-20 md:py-24 bg-white border-b-5 border-black newspaper-texture relative">
        {/* Background characters */}
        <div className="absolute left-0 bottom-0 w-32 md:w-48 opacity-15 z-0">
          <img src="/characters/banker-briefcase.png" alt="The Banker" className="w-full h-auto" loading="lazy" />
        </div>
        <div className="absolute right-0 bottom-0 w-32 md:w-48 opacity-15 z-0">
          <img src="/characters/enforcer-statue.png" alt="The Enforcer" className="w-full h-auto" loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10 animate-section-fade">
            <div className="inline-block px-4 py-1 border-2 border-black bg-black text-white font-newspaper font-bold text-xs uppercase mb-3">
              ★ FEATURE STORY ★
            </div>
            <h2 className="font-headline font-black uppercase text-3xl md:text-5xl lg:text-6xl border-b-4 border-black pb-3 inline-block">
              THE MIND YOUR BUSINESS WAY
            </h2>
            <p className="newspaper-byline text-center mt-4 border-l-0">
              How we operate: No BS, just results
            </p>
          </div>

          <NewspaperGrid columns={2} className="stagger-children">
            <NewspaperGridItem>
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-headline font-black text-xl uppercase mb-2 border-b-2 border-black pb-1">REVENUE IS THE ONLY METRIC</h3>
              <p className="newspaper-body text-sm">
                We don't care about vanity metrics. Our sole focus: increase your net revenue by 30% minimum in year 1. That's it. Nothing else matters. No clicks. No impressions. Just cold hard cash in your bank account.
              </p>
            </NewspaperGridItem>

            <NewspaperGridItem>
              <div className="text-3xl mb-2">👔</div>
              <h3 className="font-headline font-black text-xl uppercase mb-2 border-b-2 border-black pb-1">SERIOUS PLAYERS ONLY</h3>
              <p className="newspaper-body text-sm">
                $100k+ monthly revenue businesses only. You're established, you're ready to scale, you want guarantees. That's our clientele. We don't waste time with anyone else.
              </p>
            </NewspaperGridItem>

            <NewspaperGridItem>
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-headline font-black text-xl uppercase mb-2 border-b-2 border-black pb-1">OUR WORD IS OUR BOND</h3>
              <p className="newspaper-body text-sm">
                30% revenue increase in year 1 or we work for free. No other agency makes this promise because they can't deliver. We can. We do. Every single time.
              </p>
            </NewspaperGridItem>

            <NewspaperGridItem>
              <div className="text-3xl mb-2">💼</div>
              <h3 className="font-headline font-black text-xl uppercase mb-2 border-b-2 border-black pb-1">COMPLETE EXECUTION</h3>
              <p className="newspaper-body text-sm">
                We don't hand you a deck and disappear. We execute everything: ads, funnels, content, optimization. Done. Complete. No hand-holding. No excuses.
              </p>
            </NewspaperGridItem>
          </NewspaperGrid>
        </div>
      </section>

      {/* Newspaper Divider */}
      <NewspaperDivider className="bg-newspaper-cream" />

      {/* Services - Classified Ads Section */}
      <section className="py-20 md:py-24 bg-newspaper-cream border-b-5 border-black newspaper-texture">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-section-fade">
            <div className="inline-block px-4 py-1 border-2 border-black bg-white font-newspaper font-bold text-xs uppercase mb-3">
              ★ SERVICES DIRECTORY ★
            </div>
            <h2 className="font-headline font-black uppercase text-3xl md:text-5xl lg:text-6xl border-b-4 border-black pb-3 inline-block">
              WHAT WE DO FOR YOU
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              { title: "FRACTIONAL CMO", desc: "Strategic leadership without the $250k salary. We run your entire marketing operation like it's our own business.", link: "/services/fractional-cmo" },
              { title: "PAID ADVERTISING", desc: "High-converting campaigns on Google, Facebook, LinkedIn, YouTube. Built specifically for high-ticket offers.", link: "/services/paid-advertising" },
              { title: "FUNNEL OPTIMIZATION", desc: "Turn traffic into qualified leads and sales. Complete funnel audits and conversion rate optimization.", link: "/services/funnel-optimization" },
              { title: "MARKETING STRATEGY", desc: "Custom strategies for scaling high-ticket offers. Positioning, messaging, and complete go-to-market execution.", link: "/services/marketing-strategy" },
              { title: "CONTENT & SEO", desc: "Authority content that ranks and converts. Thought leadership that attracts premium clients to your business.", link: "/services/content-marketing" },
              { title: "MARKETING AUTOMATION", desc: "Scale marketing without scaling team. Automated nurture sequences and sales systems that run 24/7.", link: "/services/marketing-automation" },
            ].map((service, index) => (
              <Link key={index} href={service.link} className="block group">
                <ClassifiedAd title={service.title}>
                  <p className="mb-2 leading-tight">{service.desc}</p>
                  <span className="font-bold underline group-hover:bg-black group-hover:text-white px-2 py-1 transition-all inline-block mt-1">
                    LEARN MORE →
                  </span>
                </ClassifiedAd>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newspaper Divider */}
      <NewspaperDivider className="bg-white" />

      {/* Results - Statistics Report */}
      <section className="py-20 md:py-24 bg-white border-b-5 border-black newspaper-texture relative">
        <div className="absolute right-8 top-8 w-40 md:w-56 opacity-15 z-0">
          <img src="/characters/bagman-money.png" alt="The Bagman" className="w-full h-auto" loading="lazy" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10 animate-section-fade">
            <div className="inline-block px-4 py-1 border-2 border-black bg-black text-white font-newspaper font-bold text-xs uppercase mb-3">
              ★ STATISTICAL REPORT ★
            </div>
            <h2 className="font-headline font-black uppercase text-3xl md:text-5xl lg:text-6xl border-b-4 border-black pb-3 inline-block">
              THE NUMBERS DON'T LIE
            </h2>
            <Link href="/results" className="inline-block mt-4 newspaper-link font-newspaper font-bold text-base">
              View Complete Case Studies Archive →
            </Link>
          </div>

          <NewspaperGrid columns={3} className="stagger-children">
            <NewspaperGridItem>
              <div className="text-center">
                <div className="text-6xl font-headline font-black mb-3">+287%</div>
                <div className="border-t-2 border-black pt-2">
                  <p className="newspaper-body text-xs font-bold">HIGH-TICKET COACHING</p>
                  <p className="newspaper-body text-xs mt-1">$80k/mo → $310k/mo in 9 months</p>
                </div>
              </div>
            </NewspaperGridItem>

            <NewspaperGridItem>
              <div className="text-center">
                <div className="text-6xl font-headline font-black mb-3">+156%</div>
                <div className="border-t-2 border-black pt-2">
                  <p className="newspaper-body text-xs font-bold">B2B CONSULTING</p>
                  <p className="newspaper-body text-xs mt-1">$150k/mo → $385k/mo in 12 months</p>
                </div>
              </div>
            </NewspaperGridItem>

            <NewspaperGridItem>
              <div className="text-center">
                <div className="text-6xl font-headline font-black mb-3">+210%</div>
                <div className="border-t-2 border-black pt-2">
                  <p className="newspaper-body text-xs font-bold">ONLINE COURSES</p>
                  <p className="newspaper-body text-xs mt-1">$120k/mo → $372k/mo in 11 months</p>
                </div>
              </div>
            </NewspaperGridItem>
          </NewspaperGrid>
        </div>
      </section>

      {/* Final CTA - Back Page Ad */}
      <section className="py-20 md:py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-48 md:w-72 opacity-50 z-0">
          <img src="/characters/don-cigar-car.png" alt="The Don" className="w-full h-auto" loading="lazy" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-unfold">
          <div className="border-5 border-white p-10 md:p-16 bg-black">
            <div className="border-2 border-white px-4 py-1 inline-block mb-4 font-newspaper text-xs uppercase tracking-wider">
              ★ Join Mind Your Business Media ★
            </div>
            <h2 className="font-headline font-black uppercase text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              READY TO MAKE
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">AN OFFER YOU CAN'T REFUSE?</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 font-newspaper leading-relaxed">
              If you're doing $100k+ monthly and serious about scaling,
              <br />
              <span className="font-bold">we'll guarantee you 30% revenue growth or work for free.</span>
            </p>
            <Link
              href="/apply"
              className="inline-block bg-white border-5 border-white text-black px-12 md:px-16 py-5 md:py-6 font-newspaper font-black text-lg uppercase tracking-wide hover:bg-newspaper-light-gray transition-all transform hover:scale-105 shadow-2xl"
            >
              APPLY NOW
            </Link>
            <p className="mt-8 text-xs font-newspaper uppercase tracking-wider border-t-2 border-white pt-6 inline-block">
              APPLICATION REVIEW: 24-48 HOURS | LIMITED PARTNERSHIPS AVAILABLE
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
