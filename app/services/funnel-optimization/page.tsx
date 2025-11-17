"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function FunnelOptimizationPage() {
  return (
    <>
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        <div className="absolute inset-0 screen-tone opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              STOP THE
              <br />
              MONEY
              <br />
              LEAKS
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight mb-8">
              Fix Your Funnel. Keep More Money.
            </p>
            <ComicPanel className="mb-8">
              <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
                People visit your site. They don't buy.
                <br /><br />
                Your funnel leaks money at every step.
                <br /><br />
                We <span className="font-bold text-black">plug the leaks</span>. More people buy. You make <span className="font-bold text-black">30% more money</span>.
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
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">2-5x</div><div className="text-sm font-newspaper uppercase tracking-wide">Conversion Increase</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div><div className="text-sm font-newspaper uppercase tracking-wide">Data-Driven</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">30%</div><div className="text-sm font-newspaper uppercase tracking-wide">Revenue Guarantee</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">$0</div><div className="text-sm font-newspaper uppercase tracking-wide">Guesswork</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">BAM!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHY YOUR FUNNEL<br /><span className="text-black">LEAKS MONEY</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{icon: "📉", title: "TOO SLOW", problem: "Pages load slow. People leave. You lose money.", solution: "We make it fast. People stay. You make money."},
              {icon: "😕", title: "TOO CONFUSING", problem: "Your offer is unclear. People don't understand. They don't buy.", solution: "We make it crystal clear. They understand. They buy."},
              {icon: "🛑", title: "TOO MANY STEPS", problem: "Too many clicks. Too many forms. People quit.", solution: "We remove friction. Make buying easy. More sales."}
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
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">HOW WE FIX<br /><span className="text-black">YOUR FUNNEL</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">🔍</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Find The Leaks</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">We look at every step. Where do people drop off? Where do they quit? We find it.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">🔧</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Fix The Leaks</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">We fix what's broken. Faster pages. Better copy. Easier checkout. All of it.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">📊</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Test Everything</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">We test different versions. We see what works best. We do more of that.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">💰</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Make You Money</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">More people buy. You make <span className="font-bold text-black">30% more revenue</span>. Guaranteed.</p></div></div></ComicPanel>
          </div>
          <div className="text-center">
            <CartoonButton href="/apply" variant="primary" className="text-xl px-12 py-5">FIX MY FUNNEL →</CartoonButton>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-newsprint border-b-5 border-cartoon-ink halftone-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6 text-black">PROOF!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">REAL FUNNELS<br /><span className="text-black">REAL RESULTS</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[{before: "2.1% CR", after: "8.3% CR", growth: "+295%", timeline: "5 months", industry: "SaaS"},
              {before: "3.5% CR", after: "11.2% CR", growth: "+220%", timeline: "4 months", industry: "Coaching"},
              {before: "1.8% CR", after: "7.1% CR", growth: "+294%", timeline: "6 months", industry: "Consulting"}
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
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHO NEEDS<br /><span className="text-black">FUNNEL FIXES</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <ComicPanel className="bg-white border-cartoon-ink">
              <div className="text-6xl text-center mb-4">✓</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-black">YOU NEED THIS IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-cartoon-ink">
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You get <span className="font-bold">traffic but no sales</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>Your <span className="font-bold">conversion rate is low</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>People <span className="font-bold">abandon checkout</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You make <span className="font-bold">$100k+ per month</span></span></li>
              </ul>
            </ComicPanel>
            <ComicPanel className="bg-cartoon-ink text-white border-black">
              <div className="text-6xl text-center mb-4">✗</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">NOT A FIT IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-white">
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You have <span className="font-bold">no traffic</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You make <span className="font-bold">under $100k/month</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You don't track <span className="font-bold">conversions</span></span></li>
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
          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">READY TO<br /><span className="text-white">STOP LEAKING MONEY?</span></h2>
          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you get traffic but not enough sales...<br /><br />
              We'll fix your funnel. Make <span className="font-black text-black">30% more revenue in 12 months</span>.<br /><br />
              <span className="font-black text-2xl text-black">Or we work for free.</span>
            </p>
          </ComicPanel>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">APPLY NOW →</CartoonButton>
          </div>
          <p className="font-newspaper text-sm text-cartoon-tan uppercase tracking-wider">★ APPLICATION REVIEW: 24-48 HOURS ★<br/>LIMITED PARTNERSHIPS AVAILABLE ★ MINIMUM $100,000/MONTH REVENUE REQUIRED ★</p>
        </div>
      </section>
    </>
  );
}
