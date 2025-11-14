"use client";

import Link from "next/link";

export default function MarketingAutomationPage() {
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
              src="/characters/tech-automation.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ MARKETING AUTOMATION - THE TECH ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Scale Marketing<br />Without Scaling Headcount
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Automated nurture sequences and sales systems that run 24/7 while you focus on delivery.
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
            <span>Special Report: Marketing Automation</span>
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
              Most Businesses Are <span className="line-through">Stuck</span> In Manual Marketing
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              Every lead requires manual follow-up. Every campaign needs hands-on management. That doesn't scale.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              You can't scale to 7 or 8 figures doing everything manually.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">Marketing automation isn't about sending more emails. It's about building systems that nurture leads, qualify prospects, and move buyers through your funnel—automatically.</span>
            </p>

            <p className="newspaper-body mb-4">
              High-ticket automation is sophisticated: behavior-based triggers, lead scoring, segmentation, multi-channel orchestration. Done right, it feels personal. Done wrong, it feels spammy.
            </p>

            <p className="newspaper-body font-bold">
              We build automation systems that scale revenue without scaling team size. Sophisticated sequences that nurture complex sales cycles. Attribution tracking that shows ROI. And we guarantee 30% growth.
            </p>
          </div>
        </div>
      </section>

      {/* Automation Services */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Automation Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Email Automation</h3>
              <p className="newspaper-body leading-relaxed">
                Sophisticated nurture sequences based on behavior, engagement, and buying stage. Automated follow-up that feels personal and converts at high rates.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Lead Scoring & Segmentation</h3>
              <p className="newspaper-body leading-relaxed">
                Automatically qualify and segment leads based on behavior, firmographics, and engagement. Sales only talks to hot leads. Everything else nurtures automatically.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">CRM & Marketing Stack</h3>
              <p className="newspaper-body leading-relaxed">
                Complete marketing infrastructure: CRM setup, automation workflows, integration management, data hygiene. Systems that scale with your business.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Multi-Channel Orchestration</h3>
              <p className="newspaper-body leading-relaxed">
                Coordinate campaigns across email, SMS, retargeting, LinkedIn, and more. Unified messaging. Seamless buyer experience. Maximum conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "The difference between 6 and 7 figures is often just automation. You can't manually follow up with 500 leads. But a properly built system can—and it'll convert them better than humans. That's scale."
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
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Platform Setup</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>CRM selection & configuration</li>
                <li className="flex items-start"><span className="mr-2">•</span>Marketing automation platform setup</li>
                <li className="flex items-start"><span className="mr-2">•</span>Integration & data sync</li>
                <li className="flex items-start"><span className="mr-2">•</span>Lead scoring models</li>
                <li className="flex items-start"><span className="mr-2">•</span>Segmentation frameworks</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Automation Development</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Email nurture sequences</li>
                <li className="flex items-start"><span className="mr-2">•</span>Behavior-based triggers</li>
                <li className="flex items-start"><span className="mr-2">•</span>Lead qualification workflows</li>
                <li className="flex items-start"><span className="mr-2">•</span>Sales handoff automation</li>
                <li className="flex items-start"><span className="mr-2">•</span>Re-engagement campaigns</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Management & Optimization</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Performance monitoring</li>
                <li className="flex items-start"><span className="mr-2">•</span>A/B testing sequences</li>
                <li className="flex items-start"><span className="mr-2">•</span>Deliverability optimization</li>
                <li className="flex items-start"><span className="mr-2">•</span>Reporting & analytics</li>
                <li className="flex items-start"><span className="mr-2">•</span>30% growth guarantee</li>
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
              <div className="font-headline text-6xl font-black mb-4">43%</div>
              <div className="font-headline text-xl uppercase mb-4">Lead-to-Close Rate</div>
              <p className="font-newspaper text-gray-700">
                SaaS company: Automated lead scoring and nurture increased close rate from 12% to 43% without adding sales reps
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">6.2x</div>
              <div className="font-headline text-xl uppercase mb-4">Sales Productivity</div>
              <p className="font-newspaper text-gray-700">
                Consulting firm: Automation qualified leads before sales contact, increasing deals closed per rep from 3.1 to 19.2 monthly
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+267%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Course creator: Email automation and segmentation grew revenue from $68k/mo to $249k/mo in 11 months
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
