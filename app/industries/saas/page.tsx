"use client";

import Link from "next/link";

export default function SaasPage() {
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
              ★ FOR SAAS COMPANIES ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              SaaS Growth That<br />Compounds Monthly
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Marketing systems built for SaaS companies scaling from 6 to 7 or 7 to 8 figures.
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
            <span>Special Report: Saas</span>
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
              Most SaaS Companies Are <span className="line-through">Drowning</span> In Churn
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              High churn. Low LTV. Expensive acquisition. We fix all three.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's the brutal math of SaaS: if your churn rate is higher than your growth rate, you're slowly dying.
            </p>

            <p className="newspaper-body mb-4">
              You're acquiring new customers, but they're churning before you recover CAC. Your LTV:CAC ratio is broken. You can't profitably scale because every new customer costs more than they're worth. <span className="font-bold">That's not sustainable growth—that's a leaky bucket that eventually runs dry.</span>
            </p>

            <p className="newspaper-body mb-4">
              The problem isn't your product. It's that you haven't built the growth infrastructure SaaS requires: qualified lead generation, effective onboarding, feature adoption campaigns, retention playbooks, expansion revenue systems. You're focused on new logos instead of optimizing the full customer lifecycle.
            </p>

            <p className="newspaper-body font-bold">
              We build complete growth systems for B2B SaaS. Qualified pipeline. Better onboarding. Lower churn. Expansion revenue. 30% MRR growth guaranteed—or we work for free.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do For SaaS */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              How We Help SaaS Companies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Qualified Lead Generation</h3>
              <p className="newspaper-body leading-relaxed">
                Content marketing, SEO, paid ads, and ABM campaigns that generate qualified pipeline. Not just MQLs—leads that convert to paying customers with strong product fit.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Conversion & Onboarding</h3>
              <p className="newspaper-body leading-relaxed">
                Optimize trial-to-paid conversion. Onboarding sequences that drive feature adoption. Activation campaigns that get users to "aha" moments faster. Turn trials into revenue.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Retention & Churn Reduction</h3>
              <p className="newspaper-body leading-relaxed">
                Automated engagement campaigns, usage monitoring, at-risk customer identification, win-back programs. Reduce churn from 5% to 2% and watch MRR compound.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Expansion Revenue</h3>
              <p className="newspaper-body leading-relaxed">
                Upsell campaigns, cross-sell strategies, usage-based expansion, enterprise tier migrations. Get more revenue from existing customers than you spend acquiring new ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SaaS Companies Choose Us */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ SPECIAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Why SaaS Companies Choose Us
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">SaaS Growth Specialists</h3>
              <p className="newspaper-body text-gray-700">
                We specialize in B2B SaaS growth. We understand your metrics: MRR, churn rate, LTV:CAC, NRR, activation rate, expansion revenue. We know what drives sustainable SaaS growth because we've done it dozens of times.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Guarantee 30% MRR Growth</h3>
              <p className="newspaper-body text-gray-700">
                We guarantee 30% MRR growth. If you don't hit it, we keep working for free until you do. Most agencies get paid whether your churn kills you or not. We only win when you win.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Full Lifecycle Optimization</h3>
              <p className="newspaper-body text-gray-700">
                We don't just generate leads. We optimize the entire customer journey: acquisition, activation, retention, expansion. Complete growth infrastructure from first touch to expansion revenue.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">Proven SaaS Playbooks</h3>
              <p className="newspaper-body text-gray-700">
                We've scaled SaaS companies from $10k MRR to $500k+ MRR. We know the playbook: which acquisition channels work, how to optimize onboarding, what retention tactics reduce churn, how to build expansion revenue that compounds monthly.
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
              Real Results For Saas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+287%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Average results across our saas clients in first 12 months
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
                Minimum requirement to work with us. We only serve established saas
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
