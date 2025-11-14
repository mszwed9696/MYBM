"use client";

import Link from "next/link";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24">
          <div className="font-headline text-sm uppercase tracking-widest mb-6 text-center">★ B2B STRATEGY ★</div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 leading-tight text-black text-center">
            Account-Based Marketing Guide for Consultants
          </h1>
          <div className="font-newspaper text-center text-gray-600 mb-8">
            <span>Published: January 2025</span> · <span>10 min read</span>
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
          <div className="font-newspaper text-lg text-gray-700 space-y-6 leading-relaxed newspaper-body">
            <p className="text-xl font-bold text-black drop-cap">
              You're a consultant selling $50k-$500k contracts. You need 3-5 new clients annually to hit your revenue goals. But you're wasting time chasing hundreds of unqualified leads who'll never write a six-figure check.
            </p>

            <p className="font-bold">
              Stop spraying and praying. Start targeting your ideal 50 accounts with surgical precision. That's Account-Based Marketing (ABM)—and it's how consultants close $100k+ deals consistently.
            </p>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Why Traditional Lead Gen Fails For Consultants
            </h2>

            <p>
              Most consultants run generic lead gen: Publish content, run ads, capture emails, nurture everyone equally. This works for $5k offers. It fails catastrophically for $100k+ consulting engagements.
            </p>

            <p className="font-bold">Here's why:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li><strong>Volume ≠ Quality:</strong> Generating 500 leads/month means nothing if only 2-3 can afford $100k contracts</li>
              <li><strong>Long Sales Cycles:</strong> $100k deals take 6-12 months. Generic nurture sequences don't cut it</li>
              <li><strong>Multi-Stakeholder Buy-In:</strong> You need C-suite, finance, operations all aligned. Mass marketing doesn't reach them</li>
              <li><strong>Competitive:</strong> Your ideal clients are getting hit by 10 other consultants. Generic outreach gets ignored</li>
            </ul>

            <p className="font-bold">
              ABM flips the model: Instead of fishing with a net, you're spearfishing. You identify your ideal 50 companies and go all-in on winning them.
            </p>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Step 1: Identify Your Ideal 50 Accounts
            </h2>

            <p>
              ABM only works if you target the right accounts. Here's how to build your list:
            </p>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Define Your Ideal Client Profile (ICP)</h3>

            <p>Get specific. Not "mid-market B2B companies." Specific criteria:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li><strong>Revenue Range:</strong> $10M-$100M annual (big enough to afford you, small enough to need you)</li>
              <li><strong>Industry Vertical:</strong> SaaS, manufacturing, professional services—pick 1-2 max</li>
              <li><strong>Trigger Events:</strong> Recent funding, new executive hires, expansion, acquisition</li>
              <li><strong>Pain Points:</strong> Specific problems you solve (scaling operations, entering new markets, tech transformation)</li>
              <li><strong>Decision-Makers:</strong> Who writes the check? CEO, CFO, COO?</li>
            </ul>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Build Your Target Account List</h3>

            <p className="font-bold">Tools to use:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li><strong>LinkedIn Sales Navigator:</strong> Filter by company size, industry, job titles, recent hires</li>
              <li><strong>ZoomInfo / Apollo:</strong> Get contact data for decision-makers at target companies</li>
              <li><strong>Industry Reports:</strong> Inc 5000, Deloitte Fast 500, industry-specific rankings</li>
              <li><strong>Trigger Event Monitoring:</strong> Google Alerts, Owler, Crunchbase for funding/M&A announcements</li>
            </ul>

            <p className="font-bold mt-4">Aim for 50-100 accounts max. Quality over quantity.</p>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Step 2: Research Each Account Deeply
            </h2>

            <p>
              Generic outreach gets deleted. Personalized outreach based on deep research gets meetings. For each target account:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li><strong>Read their annual reports:</strong> What are their strategic priorities? Growth targets? Challenges?</li>
              <li><strong>Follow leadership on LinkedIn:</strong> What are they posting about? What keeps them up at night?</li>
              <li><strong>Map their org chart:</strong> Who are the decision-makers? Who influences them?</li>
              <li><strong>Identify their tech stack:</strong> What tools do they use? Where are the gaps?</li>
              <li><strong>Find trigger events:</strong> Recent funding? New product launch? Leadership changes?</li>
            </ul>

            <p className="font-bold">
              Spend 30-60 minutes researching each account before outreach. This separates you from the 99% sending spray-and-pray cold emails.
            </p>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Step 3: Multi-Channel Outreach Strategy
            </h2>

            <p>
              Don't just send one cold email and give up. Hit them from multiple angles:
            </p>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Channel 1: LinkedIn (Warm-Up Phase)</h3>

            <p><strong>Goal:</strong> Get on their radar before direct outreach</p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Connect with decision-makers (personalized note referencing company-specific insight)</li>
              <li>Engage with their posts (thoughtful comments, not generic "Great post!")</li>
              <li>Share content that solves their specific challenges (tag them when relevant)</li>
              <li>Post case studies from similar companies in their industry</li>
            </ul>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Channel 2: Direct Email (Value-First Approach)</h3>

            <p><strong>Goal:</strong> Start a conversation, not pitch immediately</p>

            <div className="bg-newspaper-cream border-3 border-black p-6 my-6">
              <p className="font-bold mb-2">Bad Email (Generic Pitch):</p>
              <p className="mb-4 text-sm">"Hi [Name], We help companies like yours scale operations. Would you be open to a 15-minute call?"</p>

              <p className="font-bold mb-2">Good Email (Specific Value):</p>
              <p className="text-sm">"Hi [Name], Saw you just raised $25M Series B. Congrats. Most SaaS companies at this stage struggle with [specific challenge]. We helped [Similar Company] solve this by [specific outcome]. Would it be valuable if I shared the 3-step framework we used?"</p>
            </div>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Channel 3: Direct Mail (Stand Out Physically)</h3>

            <p>
              For your top 10-20 accounts, send physical packages that get past gatekeepers:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Industry-specific book with handwritten note highlighting relevant chapter</li>
              <li>Custom research report analyzing their market/competitors</li>
              <li>Thoughtful gift tied to their interests (check LinkedIn for hobbies)</li>
            </ul>

            <p className="font-bold">Cost: $50-$200 per account. ROI: One $100k deal pays for 500-2000 packages.</p>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Channel 4: Retargeting Ads (Stay Top of Mind)</h3>

            <p>
              Upload your target account list to LinkedIn/Facebook. Run ads specifically to decision-makers at those companies:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Case studies from similar companies</li>
              <li>Thought leadership content addressing their specific challenges</li>
              <li>Webinars/workshops designed for their industry</li>
            </ul>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Step 4: Create Account-Specific Content
            </h2>

            <p>
              Generic whitepapers don't close $100k deals. Create custom content for your top accounts:
            </p>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Tier 1 Accounts (Top 10): Custom Analysis</h3>

            <ul className="list-disc pl-8 space-y-2">
              <li>Competitive analysis of their market position</li>
              <li>Operational audit identifying specific gaps</li>
              <li>Custom ROI model showing impact of your solution</li>
            </ul>

            <p className="font-bold">Investment: 5-10 hours per account. Close rate: 40-60%.</p>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Tier 2 Accounts (Next 20): Industry-Specific Content</h3>

            <ul className="list-disc pl-8 space-y-2">
              <li>Case studies from their vertical</li>
              <li>Industry benchmarking reports</li>
              <li>Webinars addressing their sector's challenges</li>
            </ul>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">Tier 3 Accounts (Remaining 20-30): Targeted General Content</h3>

            <ul className="list-disc pl-8 space-y-2">
              <li>Educational content on topics they care about</li>
              <li>Thought leadership positioning you as expert</li>
              <li>Event invitations (webinars, workshops)</li>
            </ul>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Step 5: Measure What Matters
            </h2>

            <p>
              ABM metrics are different from traditional lead gen. Track:
            </p>

            <div className="bg-newspaper-cream border-3 border-black p-8 my-8">
              <h3 className="font-headline text-xl font-bold uppercase mb-4">Key ABM Metrics:</h3>
              <ul className="space-y-3">
                <li><strong>Account Engagement Rate:</strong> % of target accounts engaging with your outreach (target: 40-60%)</li>
                <li><strong>Meeting Conversion Rate:</strong> % of engaged accounts booking discovery calls (target: 20-30%)</li>
                <li><strong>Proposal Rate:</strong> % of meetings converting to proposals (target: 50-70%)</li>
                <li><strong>Close Rate:</strong> % of proposals winning deals (target: 30-50%)</li>
                <li><strong>Average Deal Size:</strong> Track if ABM increases contract value</li>
                <li><strong>Sales Cycle Length:</strong> Time from first touch to closed deal (aim to reduce over time)</li>
              </ul>
            </div>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Real Example: $150k to $385k/Month in 12 Months
            </h2>

            <p className="font-bold">Client: B2B consulting firm selling $50k-$200k engagements</p>

            <p><strong>Starting Point:</strong></p>
            <ul className="list-disc pl-8 space-y-2">
              <li>$150k/month revenue from referrals and networking</li>
              <li>Inconsistent pipeline, feast-or-famine</li>
              <li>Generic lead gen producing unqualified leads</li>
            </ul>

            <p className="mt-6"><strong>What We Built:</strong></p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Identified 50 target accounts (mid-market manufacturing companies)</li>
              <li>Multi-channel outreach: LinkedIn + email + direct mail</li>
              <li>Created industry-specific case studies and benchmarking reports</li>
              <li>LinkedIn retargeting ads to decision-makers</li>
            </ul>

            <p className="mt-6"><strong>Results After 12 Months:</strong></p>
            <ul className="list-disc pl-8 space-y-2">
              <li>$385k/month revenue (156% growth)</li>
              <li>15-20 qualified discovery calls monthly (from target accounts only)</li>
              <li>Sales cycle shortened from 6 months to 3.5 months</li>
              <li>Average deal size increased from $75k to $120k</li>
              <li>Pipeline 100% filled with qualified opportunities (no more feast-or-famine)</li>
            </ul>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              Common ABM Mistakes To Avoid
            </h2>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">🚫 Mistake #1: Targeting Too Many Accounts</h3>
            <p>
              ABM requires deep personalization. If you're targeting 500 accounts, you're not doing ABM—you're doing bad lead gen. Keep it to 50-100 max.
            </p>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">🚫 Mistake #2: Generic Outreach</h3>
            <p>
              "We help companies like yours" is not personalized. Reference specific trigger events, challenges, and opportunities unique to that account.
            </p>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">🚫 Mistake #3: Single-Channel Approach</h3>
            <p>
              One cold email won't cut it. Hit them from LinkedIn, email, direct mail, retargeting ads. Multi-touch wins.
            </p>

            <h3 className="font-headline text-xl font-bold uppercase mt-8 mb-4">🚫 Mistake #4: Pitching Too Soon</h3>
            <p>
              Lead with value, not your pitch deck. Share insights, research, case studies first. Build trust before asking for the meeting.
            </p>

            <h2 className="font-headline text-3xl font-black uppercase mt-12 mb-6 border-b-2 border-black pb-2">
              The Bottom Line
            </h2>

            <p className="text-xl font-bold">
              Stop chasing hundreds of tire-kickers. Target your ideal 50 accounts and go all-in.
            </p>

            <p className="font-bold">
              ABM isn't for every consultant. If you're selling $5k offers, stick to lead gen. But if you're closing $50k-$500k contracts, ABM is the only scalable way to fill your pipeline with qualified opportunities.
            </p>

            <p>
              The consultants billing $500k-$1M+ annually aren't networking their way there. They're running systematic ABM programs that identify, engage, and close their ideal clients predictably.
            </p>

            <p className="font-bold">
              This is how you scale consulting without burning out on referrals and hope.
            </p>
          </div>
        </div>
      </article>

      <section className="py-12 bg-newspaper-cream border-t-5 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/blog" className="font-headline uppercase text-lg hover:underline">
            ← Back to All Articles
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-6">★ Ready To Apply These Strategies? ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Get Guaranteed<br />Marketing Results
            </h2>
            <Link href="/apply" className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-headline text-lg uppercase hover:bg-gray-100">
              APPLY FOR PARTNERSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
