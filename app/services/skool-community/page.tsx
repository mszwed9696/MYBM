"use client";

import Link from "next/link";

export default function SkoolCommunityPage() {
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
              src="/characters/community-builder.png"
              alt="Character"
              className="w-full h-auto"
              style={{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {/* Category badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              ★ SKOOL COMMUNITY - THE COMMUNITY BUILDER ★
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              Build A Community<br />That Sells For You
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              Skool community setup and management. Turn engagement into revenue.
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
            <span>Special Report: Skool Community</span>
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
              Most Communities Are <span className="line-through">Dead Zones</span>
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              Zero engagement, zero revenue. We build communities that actually sell.
            </p>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              Here's what nobody tells you about online communities: engagement without revenue is just a hobby.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">Most community platforms become ghost towns in 90 days. Members join, lurk for a week, then vanish.</span> Why? Because there's no structure, no value delivery, no reason to stay.
            </p>

            <p className="newspaper-body mb-4">
              Skool is different. It's built for revenue-generating communities: structured courses, gamification, community engagement, all in one platform. But the platform is only 10% of the equation. The other 90%? Content strategy, engagement tactics, monetization funnels, member retention systems.
            </p>

            <p className="newspaper-body font-bold">
              We build Skool communities that generate revenue from day one. Recurring membership revenue. Course sales. Upsells to high-ticket offers. And we guarantee 30% growth.
            </p>
          </div>
        </div>
      </section>

      {/* Community Services */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Community Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Community Setup</h3>
              <p className="newspaper-body leading-relaxed">
                Complete Skool community design and launch: branding, structure, course integration, gamification setup, onboarding sequences. Ready to monetize from day one.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Content & Curriculum</h3>
              <p className="newspaper-body leading-relaxed">
                Structured learning paths, course content, discussion prompts, challenge frameworks. Content that keeps members engaged and drives them toward high-ticket offers.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Engagement Management</h3>
              <p className="newspaper-body leading-relaxed">
                Daily moderation, conversation starters, member recognition, event hosting. We keep your community alive and active—without you doing the heavy lifting.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Monetization Funnels</h3>
              <p className="newspaper-body leading-relaxed">
                Turn community engagement into revenue: membership tiers, course sales, consultation upsells, high-ticket offer nurture. Communities that pay for themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "A community without a business model is just an expensive Facebook group. We build communities that generate recurring revenue, nurture leads, and upsell to high-ticket. That's the difference between engagement and profit."
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
                <li className="flex items-start"><span className="mr-2">•</span>Skool account setup & branding</li>
                <li className="flex items-start"><span className="mr-2">•</span>Community structure & categories</li>
                <li className="flex items-start"><span className="mr-2">•</span>Course/classroom integration</li>
                <li className="flex items-start"><span className="mr-2">•</span>Gamification & leaderboard setup</li>
                <li className="flex items-start"><span className="mr-2">•</span>Member onboarding automation</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Content & Engagement</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Course content development</li>
                <li className="flex items-start"><span className="mr-2">•</span>Weekly discussion prompts</li>
                <li className="flex items-start"><span className="mr-2">•</span>Challenge & event planning</li>
                <li className="flex items-start"><span className="mr-2">•</span>Member recognition systems</li>
                <li className="flex items-start"><span className="mr-2">•</span>Daily moderation & engagement</li>
              </ul>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Revenue Generation</h3>
              <ul className="space-y-2 font-newspaper text-gray-700">
                <li className="flex items-start"><span className="mr-2">•</span>Membership tier strategy</li>
                <li className="flex items-start"><span className="mr-2">•</span>Course monetization funnels</li>
                <li className="flex items-start"><span className="mr-2">•</span>High-ticket offer nurture sequences</li>
                <li className="flex items-start"><span className="mr-2">•</span>Upsell & retention campaigns</li>
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
              <div className="font-headline text-6xl font-black mb-4">$47k</div>
              <div className="font-headline text-xl uppercase mb-4">Monthly Recurring Revenue</div>
              <p className="font-newspaper text-gray-700">
                Course creator: Skool community generated $47k MRR from membership subscriptions within 8 months of launch
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">89%</div>
              <div className="font-headline text-xl uppercase mb-4">Member Retention</div>
              <p className="font-newspaper text-gray-700">
                Coaching business: Engagement strategies maintained 89% member retention vs. industry average of 34%
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+312%</div>
              <div className="font-headline text-xl uppercase mb-4">High-Ticket Conversions</div>
              <p className="font-newspaper text-gray-700">
                Consultant: Community nurture funnel increased high-ticket program sales by 312% through relationship building
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
