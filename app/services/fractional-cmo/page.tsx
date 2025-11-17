"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function FractionalCMOPage() {
  return (
    <>
      {/* Hero Section - Exact match to homepage */}
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        {/* Halftone background pattern */}
        <div className="absolute inset-0 screen-tone opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              GET A BOSS
              <br />
              FOR YOUR
              <br />
              MARKETING
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight mb-8">
              Executive Leadership. No Executive Salary.
            </p>

            <ComicPanel className="mb-8">
              <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
                You need someone who runs your marketing.
                <br /><br />
                Not someone who gives you advice. Not someone who makes pretty slides.
                <br /><br />
                Someone who <span className="font-bold text-black">owns it</span>. Someone who answers for revenue.
                <br /><br />
                <span className="font-bold">That's what a Fractional CMO does.</span>
              </p>
            </ComicPanel>

            <div className="flex flex-col sm:flex-row gap-4">
              <CartoonButton href="/apply" variant="primary" className="text-lg px-8 py-4">
                APPLY NOW →
              </CartoonButton>
              <CartoonButton href="/guarantee" variant="gold" className="text-lg px-8 py-4">
                See The Guarantee
              </CartoonButton>
            </div>

            <p className="text-sm font-newspaper text-cartoon-brown italic mt-6">
              ★ Limited partnerships • MINIMUM $100,000/month revenue required • 24-48hr review ★
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cartoon-ink text-cartoon-cream border-b-5 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">$250k</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Full-Time CMO Cost</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">1/3</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Our Cost</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Execution</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">30%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Revenue Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">BAM!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHY MOST BUSINESSES
              <br />
              <span className="text-black">FAIL AT MARKETING</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown max-w-3xl mx-auto">
              They have tactics. But no one owns the whole thing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤷",
                title: "NO LEADER",
                problem: "You hire freelancers. You hire agencies. But no one owns it.",
                solution: "We own it. Marketing runs like a real department."
              },
              {
                icon: "💸",
                title: "TOO EXPENSIVE",
                problem: "Full-time CMOs cost $200k-$300k plus equity.",
                solution: "Get C-level leadership for 1/3 the cost."
              },
              {
                icon: "🎲",
                title: "NO GUARANTEES",
                problem: "Agencies get paid. You hope for results.",
                solution: "30% revenue growth guaranteed. Or free."
              }
            ].map((item, i) => (
              <ComicPanel key={i} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="font-cartoon text-3xl text-black mb-4 uppercase">{item.title}</h3>
                <div className="mb-4">
                  <p className="font-newspaper text-lg italic text-cartoon-brown mb-2">
                    The Problem:
                  </p>
                  <p className="font-newspaper text-base text-cartoon-ink">
                    {item.problem}
                  </p>
                </div>
                <div className="border-t-3 border-cartoon-ink pt-4">
                  <p className="font-newspaper text-lg font-bold text-black mb-2">
                    The Fix:
                  </p>
                  <p className="font-newspaper text-base text-cartoon-ink font-bold">
                    {item.solution}
                  </p>
                </div>
              </ComicPanel>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-32 bg-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHAT A FRACTIONAL CMO
              <br />
              <span className="text-black">ACTUALLY DOES</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown max-w-3xl mx-auto">
              They run your whole marketing. Like a real CMO. But without the salary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ComicPanel className="halftone-overlay">
              <div className="flex items-start gap-4">
                <div className="text-6xl">🎯</div>
                <div>
                  <h3 className="font-cartoon text-2xl text-black uppercase mb-3">Makes The Plan</h3>
                  <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                    Your Fractional CMO figures out the whole strategy. What to say. Who to target. What channels to use. How much to spend. They own the plan.
                  </p>
                </div>
              </div>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <div className="flex items-start gap-4">
                <div className="text-6xl">⚡</div>
                <div>
                  <h3 className="font-cartoon text-2xl text-black uppercase mb-3">Does The Work</h3>
                  <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                    They don't just tell you what to do. They do it. They hire people. They run ads. They build funnels. They manage everything.
                  </p>
                </div>
              </div>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <div className="flex items-start gap-4">
                <div className="text-6xl">💰</div>
                <div>
                  <h3 className="font-cartoon text-2xl text-black uppercase mb-3">Answers For Revenue</h3>
                  <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                    Their job is to make you more money. Not get you likes. Not make pretty websites. <span className="font-bold text-black">30% more revenue. Guaranteed.</span>
                  </p>
                </div>
              </div>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <div className="flex items-start gap-4">
                <div className="text-6xl">🤝</div>
                <div>
                  <h3 className="font-cartoon text-2xl text-black uppercase mb-3">No Politics</h3>
                  <p className="font-newspaper text-base leading-relaxed text-cartoon-ink">
                    No salary. No equity. No office drama. Just results. They get paid when you grow. That's it.
                  </p>
                </div>
              </div>
            </ComicPanel>
          </div>

          <div className="text-center">
            <CartoonButton href="/apply" variant="primary" className="text-xl px-12 py-5">
              GET YOUR CMO →
            </CartoonButton>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 bg-cartoon-newsprint border-b-5 border-cartoon-ink halftone-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6 text-black">PROOF!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              REAL BUSINESSES
              <br />
              <span className="text-black">REAL GROWTH</span>
            </h2>
            <p className="text-xl font-newspaper text-cartoon-brown">
              What happens when you get a real CMO who owns revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                before: "$100k/mo",
                after: "$287k/mo",
                growth: "+187%",
                timeline: "10 months",
                industry: "SaaS Company"
              },
              {
                before: "$150k/mo",
                after: "$385k/mo",
                growth: "+156%",
                timeline: "12 months",
                industry: "Consulting Firm"
              },
              {
                before: "$120k/mo",
                after: "$372k/mo",
                growth: "+210%",
                timeline: "11 months",
                industry: "Online Coaching"
              }
            ].map((caseStudy, i) => (
              <ComicPanel key={i} className="text-center bg-white">
                <div className="text-5xl font-cartoon text-black mb-4">{caseStudy.growth}</div>
                <div className="space-y-3 font-newspaper">
                  <div>
                    <span className="text-sm uppercase tracking-wide text-cartoon-brown">Before:</span>
                    <div className="text-2xl font-bold text-cartoon-ink">{caseStudy.before}</div>
                  </div>
                  <div className="text-3xl text-black">→</div>
                  <div>
                    <span className="text-sm uppercase tracking-wide text-cartoon-brown">After:</span>
                    <div className="text-2xl font-bold text-black">{caseStudy.after}</div>
                  </div>
                  <div className="border-t-3 border-cartoon-ink pt-3 mt-4">
                    <div className="text-xs uppercase text-cartoon-brown mb-1">{caseStudy.timeline}</div>
                    <div className="text-sm font-bold text-black">{caseStudy.industry}</div>
                  </div>
                </div>
              </ComicPanel>
            ))}
          </div>

          <div className="text-center">
            <Link href="/results" className="font-newspaper text-lg text-cartoon-ink underline hover:text-black transition-colors">
              View All Results →
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-32 bg-cartoon-tan border-b-5 border-cartoon-ink">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHO NEEDS
              <br />
              <span className="text-black">A FRACTIONAL CMO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Yes */}
            <ComicPanel className="bg-white border-cartoon-ink">
              <div className="text-6xl text-center mb-4">✓</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-black">YOU NEED THIS IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-cartoon-ink">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>You make <span className="font-bold">$100k+ per month</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Your marketing has <span className="font-bold">no clear leader</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>You're tired of <span className="font-bold">agencies with no skin in the game</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>You want <span className="font-bold">guaranteed revenue growth</span></span>
                </li>
              </ul>
            </ComicPanel>

            {/* No */}
            <ComicPanel className="bg-cartoon-ink text-white border-black">
              <div className="text-6xl text-center mb-4">✗</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">NOT A FIT IF:</h3>
              <ul className="space-y-4 font-newspaper text-lg text-white">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✗</span>
                  <span>You make <span className="font-bold">under $100k/month</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✗</span>
                  <span>You want <span className="font-bold">cheap freelancers</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✗</span>
                  <span>You don't care about <span className="font-bold">guarantees</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✗</span>
                  <span>You need <span className="font-bold">hand-holding</span></span>
                </li>
              </ul>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">MAKE THE CALL!</div>

          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">
            READY FOR A
            <br />
            <span className="text-white">REAL CMO?</span>
          </h2>

          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you make <span className="font-black text-black">$100k+ per month</span>...
              <br /><br />
              And you need someone to run your whole marketing...
              <br /><br />
              We'll guarantee <span className="font-black text-black">30% more revenue in 12 months</span>.
              <br /><br />
              <span className="font-black text-2xl text-black">Or we work for free.</span>
            </p>
          </ComicPanel>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">
              APPLY NOW →
            </CartoonButton>
          </div>

          <p className="font-newspaper text-sm text-cartoon-tan uppercase tracking-wider">
            ★ APPLICATION REVIEW: 24-48 HOURS ★<br/>
            LIMITED PARTNERSHIPS AVAILABLE ★ MINIMUM $100,000/MONTH REVENUE REQUIRED ★
          </p>

          <div className="mt-12 pt-8 border-t-3 border-cartoon-tan">
            <p className="font-mobster text-xl italic text-cartoon-cream">
              "You need a boss for your marketing. Someone who owns it. Someone who answers for revenue. <span className="not-italic font-black">That's what we do.</span>"
            </p>
            <p className="font-newspaper text-sm mt-2 text-cartoon-tan">
              — Don Michael Szwed, Mind Your Business Media
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
