"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function ContentMarketingPage() {
  return (
    <>
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        <div className="absolute inset-0 screen-tone opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              WORDS THAT
              <br />
              SELL
              <br />
              FOR YOU
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight mb-8">
              Content That Gets Found. Read. And Buys.
            </p>
            <ComicPanel className="mb-8">
              <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
                Most content is boring. No one reads it.
                <br /><br />
                We write content that people <span className="font-bold text-black">find on Google</span>. They read it. They trust you. They <span className="font-bold text-black">buy from you</span>.
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
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">Page 1</div><div className="text-sm font-newspaper uppercase tracking-wide">Google Rankings</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div><div className="text-sm font-newspaper uppercase tracking-wide">Original Content</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">30%</div><div className="text-sm font-newspaper uppercase tracking-wide">Revenue Guarantee</div></div>
            <div><div className="text-5xl md:text-6xl font-cartoon text-white mb-2">$0</div><div className="text-sm font-newspaper uppercase tracking-wide">Fluff</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">BAM!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHY MOST CONTENT<br /><span className="text-black">DOESN'T WORK</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{icon: "🙈", title: "NO ONE FINDS IT", problem: "Your content doesn't rank. No one sees it. Wasted effort.", solution: "We make it rank on Google. People find you."},
              {icon: "😴", title: "TOO BORING", problem: "Your content is dry. People don't read it. They leave.", solution: "We make it interesting. They read. They stay."},
              {icon: "🤷", title: "DOESN'T SELL", problem: "Your content doesn't lead to sales. Just views. No money.", solution: "We make content that sells. Views become buyers."}
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
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHAT WE<br /><span className="text-black">WRITE FOR YOU</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">📝</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Blog Posts</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Articles that rank on Google. People find you. They learn from you. They trust you.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">📺</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Videos & Scripts</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">YouTube scripts. LinkedIn posts. Content for every platform. All written to sell.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">📧</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Email Sequences</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Emails that people open. Read. And click. Nurture leads into customers.</p></div></div></ComicPanel>
            <ComicPanel className="halftone-overlay"><div className="flex items-start gap-4"><div className="text-6xl">📄</div><div><h3 className="font-cartoon text-2xl text-black uppercase mb-3">Sales Pages</h3><p className="font-newspaper text-base leading-relaxed text-cartoon-ink">Landing pages that convert. Clear offers. No confusion. Just sales.</p></div></div></ComicPanel>
          </div>
          <div className="text-center">
            <CartoonButton href="/apply" variant="primary" className="text-xl px-12 py-5">GET CONTENT →</CartoonButton>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-newsprint border-b-5 border-cartoon-ink halftone-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6 text-black">PROOF!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">REAL CONTENT<br /><span className="text-black">REAL TRAFFIC</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[{before: "500/mo visitors", after: "12k/mo visitors", growth: "+2300%", timeline: "9 months", industry: "B2B SaaS"},
              {before: "$120k/mo", after: "$342k/mo", growth: "+185%", timeline: "12 months", industry: "Consulting"},
              {before: "0 leads/mo", after: "89 leads/mo", growth: "New Channel", timeline: "6 months", industry: "Coaching"}
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
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">WHO NEEDS<br /><span className="text-black">CONTENT</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <ComicPanel className="bg-white border-cartoon-ink">
              <div className="text-6xl text-center mb-4">✓</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-black">YOU NEED THIS IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-cartoon-ink">
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You want <span className="font-bold">Google traffic</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You need <span className="font-bold">authority content</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You hate <span className="font-bold">writing</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✓</span><span>You make <span className="font-bold">$100k+ per month</span></span></li>
              </ul>
            </ComicPanel>
            <ComicPanel className="bg-cartoon-ink text-white border-black">
              <div className="text-6xl text-center mb-4">✗</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">NOT A FIT IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-white">
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You want <span className="font-bold">quick results</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You make <span className="font-bold">under $100k/month</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You just want <span className="font-bold">blog posts</span></span></li>
                <li className="flex items-start gap-3"><span className="text-2xl">✗</span><span>You don't care about <span className="font-bold">ROI</span></span></li>
              </ul>
            </ComicPanel>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">MAKE THE CALL!</div>
          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">READY FOR<br /><span className="text-white">CONTENT THAT SELLS?</span></h2>
          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you need content that ranks and sells...<br /><br />
              We'll write it. Make <span className="font-black text-black">30% more revenue in 12 months</span>.<br /><br />
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
