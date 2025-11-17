"use client";

import Link from "next/link";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-cartoon-cream">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24">
          <div className="font-cartoon text-sm uppercase tracking-widest mb-6 text-center">★ COACHING ★</div>
          <h1 className="font-cartoon text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 leading-tight text-black text-center">
            Funnel Strategies for High-Ticket Coaching Programs
          </h1>
          <div className="font-newspaper text-center text-gray-600 mb-8">
            <span>Published: January 2025</span> · <span>11 min read</span>
          </div>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Mind Your Business Media Blog</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      <article className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="font-newspaper text-lg text-gray-700 space-y-6 leading-relaxed font-newspaper text-base text-cartoon-ink">
            <p className="text-xl font-bold text-black drop-cap">
              You're stuck in the quarterly launch cycle. Every 90 days, you burn yourself out running webinars, doing sales calls, and desperately trying to hit your revenue targets. Between launches, revenue dries up. Sound familiar?
            </p>

            <p className="font-bold">
              The launch model is broken for high-ticket coaching. It's unpredictable, exhausting, and impossible to scale. You need an evergreen funnel that converts cold traffic into $10k+ clients on autopilot.
            </p>

            <p>
              Here's exactly how to build it—the same system our coaching clients use to scale from $100k/month to $300k+ without burning out on launches.
            </p>

            <h2 className="font-cartoon text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Why Traditional Coaching Funnels Fail
            </h2>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">The Webinar Launch Trap</h3>

            <p>
              Most coaches rely on live webinar launches: build hype, drive registrations, deliver live presentation, close sales calls, repeat every quarter.
            </p>

            <p className="font-bold">This model has fatal flaws:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li><strong>Feast or Famine:</strong> Revenue spikes during launches, flatlines between them</li>
              <li><strong>Burnout Factor:</strong> You're running the same webinar 4x annually, exhausting yourself</li>
              <li><strong>Can't Scale Traffic:</strong> Live webinars require perfect timing—can't run paid ads 24/7</li>
              <li><strong>Low Show-Up Rates:</strong> 30-40% average, wasting 60% of your ad spend</li>
              <li><strong>Limited Availability:</strong> Sales calls bottleneck your growth</li>
            </ul>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">The Low-Ticket Tripwire Myth</h3>

            <p>
              Some coaches try the low-ticket tripwire approach: Sell a $47 course, then upsell to high-ticket coaching.
            </p>

            <p className="font-bold">Problem: This attracts broke buyers, not $10k+ clients.</p>

            <p>
              Your $10k coaching clients don't buy $47 courses. They buy transformation, not information. Tripwires pre-qualify the wrong audience.
            </p>

            <h2 className="font-cartoon text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              The Evergreen VSL Funnel That Actually Works
            </h2>

            <p>
              Here's the funnel architecture that converts cold traffic into high-ticket clients daily:
            </p>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">Step 1: Hook With A Big Promise (Not Education)</h3>

            <p>
              Your ad creative must promise a specific transformation, not vague education.
            </p>

            <div className="bg-cartoon-cream border-3 border-black p-6 my-6">
              <p className="font-bold mb-2">Bad Hook (Education-Based):</p>
              <p className="mb-4">"Learn the 5 secrets to growing your coaching business"</p>

              <p className="font-bold mb-2">Good Hook (Transformation-Based):</p>
              <p>"How I scaled from $80k to $310k/month in 9 months (and how you can too)"</p>
            </div>

            <p>
              Education attracts freebie-seekers. Transformation attracts buyers.
            </p>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">Step 2: VSL Landing Page (Not Webinar Registration)</h3>

            <p>
              Send traffic directly to a Video Sales Letter (VSL), not a webinar registration page.
            </p>

            <p className="font-bold">Why VSL beats webinars:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li><strong>100% Show-Up Rate:</strong> They watch immediately, no waiting for scheduled time</li>
              <li><strong>24/7 Conversion:</strong> Works while you sleep, no live presentations needed</li>
              <li><strong>Scalable Traffic:</strong> Run ads continuously without timing constraints</li>
              <li><strong>Optimizable:</strong> A/B test scripts, iterate faster than live webinars</li>
            </ul>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">Step 3: Application, Not Direct Sale</h3>

            <p>
              At the end of your VSL, don't try to close the sale. Ask for an application.
            </p>

            <p className="font-bold">Why application funnels work for high-ticket:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li><strong>Pre-Qualification:</strong> Only serious, qualified buyers apply</li>
              <li><strong>Higher Close Rates:</strong> 40-60% close rate vs 10-20% cold sales calls</li>
              <li><strong>Positioning:</strong> You're selective, not desperate—increases perceived value</li>
              <li><strong>Data Collection:</strong> Learn their challenges before the call, personalize pitch</li>
            </ul>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">Step 4: Automated Nurture (For Those Not Ready Yet)</h3>

            <p>
              Not everyone who watches your VSL will apply immediately. Capture their email and nurture them.
            </p>

            <p className="font-bold">Nurture sequence structure:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li><strong>Day 1:</strong> Case study of client who achieved transformation</li>
              <li><strong>Day 3:</strong> Address biggest objection ("I don't have time")</li>
              <li><strong>Day 5:</strong> Scarcity/urgency (limited spots available)</li>
              <li><strong>Day 7:</strong> Final call to action (last chance to apply)</li>
              <li><strong>Day 14+:</strong> Value content + periodic application reminders</li>
            </ul>

            <h2 className="font-cartoon text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Traffic Sources: Where To Find $10k+ Buyers
            </h2>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">Facebook/Instagram Ads (Best for Most Coaches)</h3>

            <p className="font-bold">Targeting Strategy:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Interest-based: Target people interested in competitors, industry leaders, premium brands</li>
              <li>Lookalike audiences: Upload customer list, let Facebook find similar buyers</li>
              <li>Retargeting: Re-engage video viewers, website visitors, email list</li>
            </ul>

            <p className="font-bold">Budget: $3k-$10k+ monthly minimum for consistent results</p>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">YouTube Ads (Best for Complex Offers)</h3>

            <p>
              If your coaching requires education before purchase (B2B, technical niches), YouTube beats Facebook.
            </p>

            <p className="font-bold">Why YouTube works for high-ticket:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Longer attention spans—people watch 10-20 minute VSLs</li>
              <li>Higher intent—they're searching for solutions, not scrolling passively</li>
              <li>Lower CPMs than Facebook in most niches</li>
            </ul>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">Google Search Ads (For Established Brands Only)</h3>

            <p>
              Search ads work if people already know your category exists. Don't use search ads to create demand—use them to capture existing demand.
            </p>

            <h2 className="font-cartoon text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              VSL Script Structure: The 40-Minute Framework
            </h2>

            <p>
              Here's the proven VSL script structure that converts cold traffic into applications:
            </p>

            <div className="bg-cartoon-cream border-3 border-black p-8 my-8">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-6 border-b-2 border-black pb-3">The 40-Minute VSL Formula</h3>

              <ul className="space-y-4">
                <li><strong>Minutes 0-5:</strong> Hook + Promise (Your big transformation story)</li>
                <li><strong>Minutes 5-10:</strong> Problem Agitation (What's keeping them stuck)</li>
                <li><strong>Minutes 10-15:</strong> The Why (Why traditional methods fail)</li>
                <li><strong>Minutes 15-25:</strong> The Solution (Your unique framework/system)</li>
                <li><strong>Minutes 25-30:</strong> Proof (Case studies, testimonials, results)</li>
                <li><strong>Minutes 30-35:</strong> The Offer (What they get, how it works)</li>
                <li><strong>Minutes 35-40:</strong> Call To Action (Apply now, limited spots)</li>
              </ul>
            </div>

            <h2 className="font-cartoon text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Real Example: $80k to $310k/Month In 9 Months
            </h2>

            <p className="font-bold">Client: High-ticket business coaching program ($12k offer)</p>

            <p><strong>Starting Point:</strong></p>
            <ul className="list-disc pl-8 space-y-2">
              <li>$80k/month revenue from referrals + sporadic webinar launches</li>
              <li>Inconsistent pipeline, feast-or-famine cash flow</li>
              <li>Burned out from quarterly launches</li>
            </ul>

            <p className="mt-6"><strong>What We Built:</strong></p>
            <ul className="list-disc pl-8 space-y-2">
              <li>45-minute VSL funnel targeting established entrepreneurs ($100k+ revenue)</li>
              <li>Facebook/YouTube ad campaigns ($8k/month ad spend)</li>
              <li>Automated email nurture sequences</li>
              <li>Application funnel → sales calls</li>
            </ul>

            <p className="mt-6"><strong>Results After 9 Months:</strong></p>
            <ul className="list-disc pl-8 space-y-2">
              <li>$310k/month revenue (287% growth)</li>
              <li>15-20 qualified applications weekly</li>
              <li>40% close rate on sales calls</li>
              <li>Completely eliminated launch dependency—revenue runs on autopilot</li>
            </ul>

            <h2 className="font-cartoon text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Conversion Optimization: The Metrics That Matter
            </h2>

            <p>
              Here are the benchmarks for a profitable high-ticket coaching funnel:
            </p>

            <div className="bg-cartoon-cream border-3 border-black p-8 my-8">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-6 border-b-2 border-black pb-3">Target Metrics</h3>

              <ul className="space-y-3">
                <li><strong>Cost Per Click (CPC):</strong> $1-$3 (Facebook), $0.10-$0.50 (YouTube)</li>
                <li><strong>VSL Watch Rate:</strong> 40-50% watch at least 50% of video</li>
                <li><strong>Application Rate:</strong> 3-5% of VSL viewers submit application</li>
                <li><strong>Application-to-Call Rate:</strong> 60-70% of applications book call</li>
                <li><strong>Call Show-Up Rate:</strong> 70-80% show up for scheduled call</li>
                <li><strong>Close Rate:</strong> 40-60% of calls convert to sale</li>
                <li><strong>Cost Per Acquisition:</strong> $1k-$3k for $10k offer = 3-10x ROI</li>
              </ul>
            </div>

            <h2 className="font-cartoon text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Common Mistakes That Kill Funnels
            </h2>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">🚫 Mistake #1: VSL Too Short</h3>
            <p>
              10-15 minute VSLs don't work for high-ticket. You need 35-50 minutes to build trust, overcome objections, and create urgency. If they won't watch 40 minutes, they won't pay $10k.
            </p>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">🚫 Mistake #2: No Qualification Questions</h3>
            <p>
              If your application form just asks for name/email/phone, you'll get tire-kickers. Ask: revenue, biggest challenge, budget, timeline. Pre-qualify before the call.
            </p>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">🚫 Mistake #3: Underspending on Ads</h3>
            <p>
              $1k-$2k monthly ad spend doesn't give you enough data to optimize. You need $5k-$10k+ monthly minimum to test creatives, audiences, and iterate fast.
            </p>

            <h3 className="font-cartoon text-xl font-bold uppercase mt-8 mb-4">🚫 Mistake #4: No Follow-Up System</h3>
            <p>
              If someone watches your VSL but doesn't apply, and you don't email them again, you're throwing away 80% of your traffic. Build automated nurture sequences.
            </p>

            <h2 className="font-cartoon text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              The Bottom Line
            </h2>

            <p className="text-xl font-bold">
              Stop burning out on launches. Build an evergreen funnel that runs 24/7.
            </p>

            <p className="font-bold">
              The coaches scaling to $300k-$500k+ monthly aren't running quarterly launches. They're running evergreen VSL funnels that convert cold traffic into high-ticket clients daily.
            </p>

            <p>
              This isn't theory. This is the exact funnel we build for our coaching clients—the one that took our clients from $80k to $310k, $120k to $372k, and beyond.
            </p>

            <p className="font-bold">
              You can keep burning out on launches, or you can build a system that scales. Your choice.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 bg-cartoon-cream border-t-5 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/blog" className="font-cartoon uppercase text-lg hover:underline">
            ← Back to All Articles
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16">
            <div className="font-cartoon text-sm uppercase tracking-widest mb-6">★ Ready To Apply These Strategies? ★</div>
            <h2 className="font-cartoon text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Get Guaranteed<br />Marketing Results
            </h2>
            <Link href="/apply" className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-cartoon text-lg uppercase hover:bg-gray-100">
              APPLY FOR PARTNERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
