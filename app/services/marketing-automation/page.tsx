"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function MarketingAutomationPage() {
  return (
    <>
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        <div className="absolute inset-0 screen-tone opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              MAKE MONEY
              <br />
              WHILE YOU
              <br />
              SLEEP
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight mb-8">
              Marketing That Runs 24/7. No People Required.
            </p>
            <ComicPanel className="mb-8">
              <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
                You can't work 24 hours a day.
                <br /><br />
                But your marketing can. We <span className="font-bold text-black">build systems</span> that sell for you. All day. Every day.
                <br /><br />
                <span className="font-bold">30% more revenue. While you sleep.</span>
              </p>
            </ComicPanel>
            <div className="flex flex-col sm:flex-row gap-4">
              <CartoonButton href="/apply" variant="primary" className="text-lg px-8 py-4">APPLY NOW →</CartoonButton>
              <CartoonButton href="/guarantee" variant="gold" className="text-lg px-8 py-4">See The Guarantee</CartoonButton>
            </div>
            <p className="text-sm font-newspaper text-cartoon-brown italic mt-6">
              ★ Limited partnerships • MINIMUM $100,000/month revenue required • 24-48hr review ★
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cartoon-ink text-cartoon-cream border-b-5 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">24/7</div><div className="text-sm font-newspaper uppercase tracking-wide">Always Working</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div><div className="text-sm font-newspaper uppercase tracking-wide">Automated</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">30%</div><div className="text-sm font-newspaper uppercase tracking-wide">Growth Guarantee</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">$0</div><div className="text-sm font-newspaper uppercase tracking-wide">Manual Work</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">BAM!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHY YOU NEED<br /><span className="text-black">AUTOMATION</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{icon: "⏰", title: "YOU'RE TOO BUSY", problem: "You spend all day on manual tasks. No time to grow.", solution: "Automation does it for you. You focus on what matters."},
              {icon: "💸", title: "YOU LOSE LEADS", problem: "Leads come in. You forget to follow up. Money lost.", solution: "Automation follows up instantly. Never miss a lead."},
              {icon: "😴", title: "YOU SLEEP", problem: "You sleep. Your business stops making money.", solution: "Automation works 24/7. Money never stops."}
            ].map((item, i) => (
              <ComicPanel key={i} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="font-cartoon text-3xl text-black mb-4 uppercase">{item.title}</h3>
                <div className="mb-4"><p className="font-newspaper text-lg italic text-cartoon-brown mb-2">The Problem:</p><p className="font-newspaper text-base text-cartoon-ink">{item.problem}</p></div>
                <div className="border-t-3 border-cartoon-ink pt-4"><p className="font-newspaper text-lg font-bold text-black mb-2">The Fix:</p><p className="font-newspaper text-base text-cartoon-ink font-bold">{item.solution}</p></div>
              </ComicPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHAT WE<br /><span className="text-black">AUTOMATE</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">📧</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Email Sequences</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Emails that send themselves. Welcome emails. Follow ups. Sales emails. All automatic.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">🤖</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Lead Follow-Up</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">New lead comes in. System follows up instantly. Books calls. Sends info. No humans needed.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">📊</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">CRM Systems</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Track every lead. Every customer. Every dollar. All automatic. Always up to date.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">💬</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">SMS & Chat</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Text messages. Website chat. All automated. Answer questions. Book appointments. Make sales.</p></div></div></ComicPanel>
          </div>
          <div className="text-center">
            <CartoonButton href="/apply" variant="primary" className="text-xl px-12 py-5">AUTOMATE NOW →</CartoonButton>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-newsprint border-b-5 border-cartoon-ink halftone-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6 text-black">PROOF!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">REAL AUTOMATION<br /><span className="text-black">REAL RESULTS</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[{before: "Manual follow-up", after: "100% automated", growth: "+340% leads", timeline: "3 months", industry: "B2B SaaS"},
              {before: "5hrs/day on email", after: "0hrs/day", growth: "+200% response", timeline: "2 months", industry: "Consulting"},
              {before: "$110k/mo", after: "$287k/mo", growth: "+161%", timeline: "8 months", industry: "Coaching"}
            ].map((c, i) => (
              <ComicPanel key={i} className="text-center bg-white">
                <div className="text-5xl font-cartoon text-black mb-4">{c.growth}</div>
                <div className="space-y-3 font-newspaper">
                  <div><span className="text-sm uppercase tracking-wide text-cartoon-brown">Before:</span><div className="text-2xl font-bold text-cartoon-ink">{c.before}</div></div>
                  <div className="text-3xl text-black">→</div>
                  <div><span className="text-sm uppercase tracking-wide text-cartoon-brown">After:</span><div className="text-2xl font-bold text-black">{c.after}</div></div>
                  <div className="border-t-3 border-cartoon-ink pt-3 mt-4"><div className="text-xs uppercase text-cartoon-brown mb-1">{c.timeline}</div><div className="text-sm font-bold text-black">{c.industry}</div></div>
                </div>
              </ComicPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-tan border-b-5 border-cartoon-ink">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHO NEEDS<br /><span className="text-black">AUTOMATION</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <ComicPanel className="bg-white border-cartoon-ink">
              <div className="text-6xl text-center mb-4">✓</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-black">YOU NEED THIS IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-cartoon-ink">
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You do <span className="font-bold">everything manually</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You <span className="font-bold">forget to follow up</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You want to <span className="font-bold">work less</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You make <span className="font-bold">$100k+ per month</span></span></li>
              </ul>
            </ComicPanel>
            <ComicPanel className="bg-cartoon-ink text-white border-black">
              <div className="text-6xl text-center mb-4">✗</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">NOT A FIT IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-white">
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You like <span className="font-bold">manual work</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You make <span className="font-bold">under $100k/month</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You have <span className="font-bold">no processes</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You want <span className="font-bold">instant results</span></span></li>
              </ul>
            </ComicPanel>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">MAKE THE CALL!</div>
          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">READY TO<br /><span className="text-white">AUTOMATE?</span></h2>
          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you're tired of manual work...<br /><br />
              We'll automate your marketing. Make <span className="font-black text-black">30% more revenue in 12 months</span>.<br /><br />
              <span className="font-black text-2xl text-black">Or we work for free.</span>
            </p>
          </ComicPanel>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">APPLY NOW →</CartoonButton>
          </div>
        </div>
      </section>
    </>
  );
}
