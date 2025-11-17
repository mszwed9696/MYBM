"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function ServiceBusinessesPage() {
  return (
    <>
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        <div className="absolute inset-0 screen-tone opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              DOMINATE
              <br />
              YOUR LOCAL
              <br />
              MARKET
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight mb-8">
              Own Page 1. Steal Customers. Crush Your Competition.
            </p>
            <ComicPanel className="mb-8">
              <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
                You're better than your competitors.
                <br /><br />
                But they show up first on Google. They get the calls. They get the customers.
                <br /><br />
                We make you <span className="font-bold text-black">impossible to miss</span>. Own page 1. Get all the customers.
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
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">Page 1</div><div className="text-sm font-newspaper uppercase tracking-wide">Google Results</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div><div className="text-sm font-newspaper uppercase tracking-wide">Local Domination</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">30%</div><div className="text-sm font-newspaper uppercase tracking-wide">Revenue Guarantee</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">12mo</div><div className="text-sm font-newspaper uppercase tracking-wide">Max Timeline</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">BAM!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHY YOU'RE<br /><span className="text-black">INVISIBLE</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: "🔍", title: "CAN'T BE FOUND", problem: "People search. Your competitors show up. You don't. You lose.", solution: "We put you on page 1. They find you first."},
              {icon: "💸", title: "COMPETITORS OUTMARKET YOU", problem: "They have worse service. Better marketing. They steal your customers.", solution: "We make your marketing unbeatable. You win."},
              {icon: "📱", title: "BAD ONLINE PRESENCE", problem: "Your website sucks. No one calls. No one books.", solution: "We fix everything. Website. SEO. Ads. Reviews."}
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
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">HOW WE MAKE<br /><span className="text-black">YOU DOMINATE</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">🎯</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Own Local SEO</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Top 3 Google results. Every time. Google Business. Local citations. Reviews. They search. They find you.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">📣</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Run Profitable Ads</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Google Local Service Ads. Google Search Ads. Facebook lead gen. Calls that book. Customers that pay.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">💰</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Convert More Visitors</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Landing pages that work. Booking systems. CRM setup. Automated follow-up. Turn clicks into customers.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">⭐</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Get 5-Star Reviews</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Systematic review generation. Reputation management. Social proof. Dominate search rankings.</p></div></div></ComicPanel>
          </div>
          <div className="text-center">
            <CartoonButton href="/apply" variant="primary" className="text-xl px-12 py-5">DOMINATE MY MARKET →</CartoonButton>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-newsprint border-b-5 border-cartoon-ink halftone-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6 text-black">PROOF!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">REAL SERVICES<br /><span className="text-black">REAL GROWTH</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {before: "$127k/mo", after: "$389k/mo", growth: "+206%", timeline: "11 months", industry: "HVAC"},
              {before: "$95k/mo", after: "$324k/mo", growth: "+241%", timeline: "12 months", industry: "Law Firm"},
              {before: "$210k/mo", after: "$647k/mo", growth: "+208%", timeline: "10 months", industry: "Plumbing"}
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
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHO NEEDS<br /><span className="text-black">THIS</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <ComicPanel className="bg-white border-cartoon-ink">
              <div className="text-6xl text-center mb-4">✓</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-black">YOU NEED THIS IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-cartoon-ink">
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You're <span className="font-bold">invisible online</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>Competitors <span className="font-bold">steal your customers</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You need <span className="font-bold">guaranteed results</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You make <span className="font-bold">$100k+ per month</span></span></li>
              </ul>
            </ComicPanel>
            <ComicPanel className="bg-cartoon-ink text-white border-black">
              <div className="text-6xl text-center mb-4">✗</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">NOT A FIT IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-white">
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You make <span className="font-bold">under $100k/month</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You're <span className="font-bold">already dominating</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You're not <span className="font-bold">serious</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You want <span className="font-bold">quick fixes</span></span></li>
              </ul>
            </ComicPanel>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">MAKE THE CALL!</div>
          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">READY TO<br /><span className="text-white">DOMINATE?</span></h2>
          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you're tired of losing to inferior competitors...<br /><br />
              We'll make you dominate. Make <span className="font-black text-black">30% more revenue in 12 months</span>.<br /><br />
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
