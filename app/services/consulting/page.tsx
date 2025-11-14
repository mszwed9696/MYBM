"use client";

import Link from "next/link";

export default function ConsultingPage() {
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
              src="/characters/advisor-wisdom.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ CONSULTING - THE ADVISOR ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Expert Guidance<br />For Serious Growth
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Strategic marketing consulting for businesses ready to scale. No hand-holding. Just results.
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
            <span>Special Report: Consulting</span>
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
              Most Consultants Are <span className="line-through">Just Talkers</span>
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              They diagnose problems but don't fix them. We execute solutions.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Traditional consulting is broken: consultants analyze, recommend, charge huge fees—then leave you to execute.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">We don't do traditional consulting. We partner with you, execute alongside your team, and guarantee 30% revenue growth.</span>
            </p>

            <p className="newspaper-body mb-4">
              Our consulting engagements aren't about producing PowerPoint decks. They're about solving specific growth problems: scaling customer acquisition, fixing broken funnels, entering new markets, optimizing pricing, building marketing infrastructure.
            </p>

            <p className="newspaper-body font-bold">
              We diagnose. We prescribe. We execute. We guarantee. That's consulting that actually delivers ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Consulting Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Growth Strategy</h3>
              <p className="newspaper-body leading-relaxed">
                Diagnose growth blockers, identify opportunities, build execution roadmap. Strategic clarity on what to do, why, and how—with measurable outcomes tied to our guarantee.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Marketing Audits</h3>
              <p className="newspaper-body leading-relaxed">
                Complete marketing assessment: channels, messaging, funnel, offers, positioning, team, systems. Identify what's working, what's broken, and exactly how to fix it.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Team Development</h3>
              <p className="newspaper-body leading-relaxed">
                Build internal marketing capability: hiring plans, team structure, processes, training. Develop marketing leadership within your organization.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Execution Partnership</h3>
              <p className="newspaper-body leading-relaxed">
                We don't just advise—we execute alongside you. Hands-on implementation, problem-solving, and optimization until you hit guaranteed growth targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "Advice is cheap. Execution is expensive. Guaranteed results are rare. We do all three. That's why we're not like other consultants."
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
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Strategic Planning</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Business & marketing audit</li>
                <li className="flex items-start"><span className="mr-2">•</span>Growth opportunity analysis</li>
                <li className="flex items-start"><span className="mr-2">•</span>Strategic roadmap development</li>
                <li className="flex items-start"><span className="mr-2">•</span>Channel strategy & prioritization</li>
                <li className="flex items-start"><span className="mr-2">•</span>Resource allocation planning</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Hands-On Execution</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Campaign planning & management</li>
                <li className="flex items-start"><span className="mr-2">•</span>Team training & development</li>
                <li className="flex items-start"><span className="mr-2">•</span>Vendor selection & oversight</li>
                <li className="flex items-start"><span className="mr-2">•</span>System implementation</li>
                <li className="flex items-start"><span className="mr-2">•</span>Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Ongoing Partnership</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Monthly strategy sessions</li>
                <li className="flex items-start"><span className="mr-2">•</span>Performance tracking & reporting</li>
                <li className="flex items-start"><span className="mr-2">•</span>Strategic pivot recommendations</li>
                <li className="flex items-start"><span className="mr-2">•</span>Team coaching & development</li>
                <li className="flex items-start"><span className="mr-2">•</span>30% revenue growth guarantee</li>
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
              <div className="font-headline text-6xl font-black mb-4">+312%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                B2B software: Consulting engagement identified market positioning issues and executed complete go-to-market strategy ($110k/mo → $453k/mo in 13 months)
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+189%</div>
              <div className="font-headline text-xl uppercase mb-4">Marketing ROI</div>
              <p className="font-newspaper text-gray-700">
                Professional services: Marketing infrastructure overhaul improved ROI from 1.2x to 3.5x while scaling spend
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">100%</div>
              <div className="font-headline text-xl uppercase mb-4">Client Satisfaction</div>
              <p className="font-newspaper text-gray-700">
                Every consulting client exceeds 30% guarantee and continues partnership beyond initial engagement
              </p>
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
