"use client";

import Link from "next/link";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";

export default function GuaranteePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cartoon-cream border-b-5 border-cartoon-ink overflow-hidden">
        <div className="absolute inset-0 screen-tone opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="vintage-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              30% REVENUE GROWTH
              <br />
              OR WE WORK
              <br />
              FOR FREE
            </h1>
            <p className="text-2xl md:text-3xl font-mobster text-black leading-tight">
              The only marketing guarantee that actually means something.
              <br />
              No other agency dares to offer this.
            </p>
          </div>

          <ComicPanel className="max-w-4xl mx-auto">
            <p className="text-xl font-newspaper leading-relaxed text-cartoon-ink">
              We guarantee a minimum 30% net revenue increase in your first 12 months working with us.
              <br /><br />
              <span className="font-bold text-black">If we don't hit that number, we continue working for free until you do.</span> No excuses. No fine print. No weasel clauses. Just results.
              <br /><br />
              Why can we make this promise when no other agency will? Because we've cracked the code on scaling high-ticket businesses. We don't guess. We don't experiment on your dime. We execute proven systems that work.
              <br /><br />
              <span className="font-bold text-2xl text-black">100% of our clients exceed the 30% guarantee.</span> That's not luck. That's why we can make this promise.
            </p>
          </ComicPanel>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <CartoonButton href="/apply" variant="primary" className="text-lg px-8 py-4">
              APPLY NOW →
            </CartoonButton>
            <CartoonButton href="/results" variant="gold" className="text-lg px-8 py-4">
              See Client Results
            </CartoonButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cartoon-ink text-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">30%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Minimum Growth</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">100%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">87%</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">Average Growth</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-cartoon text-white mb-2">$0</div>
              <div className="text-sm font-newspaper uppercase tracking-wide">If We Miss</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">THE DEAL!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              HOW THE GUARANTEE
              <br />
              <span className="text-black">ACTUALLY WORKS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Measure */}
            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                What We Measure
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-4">
                Net revenue growth. Not leads. Not traffic. Not "engagement." We track your monthly recurring revenue or gross revenue (depending on your business model) and guarantee 30% growth minimum.
              </p>
              <div className="font-newspaper text-cartoon-ink leading-relaxed space-y-2">
                <p><span className="font-bold text-black">Baseline:</span> Your average monthly revenue over the last 90 days before we start.</p>
                <p><span className="font-bold text-black">Target:</span> 30% increase by month 12.</p>
                <p><span className="font-bold text-black">Measurement:</span> Verified financials at 6 months and 12 months.</p>
              </div>
            </ComicPanel>

            {/* What Happens If We Miss */}
            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                What Happens If We Miss
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed mb-4">
                If at month 12 you haven't hit 30% growth, we continue working for $0 monthly fees until you do. You only pay for ad spend and tools. We work for free.
              </p>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                <span className="font-bold text-black text-xl">This has never happened.</span> Every single client has exceeded the guarantee. But if it did, we'd keep working until you got your 30%+. That's the deal.
              </p>
            </ComicPanel>

            {/* Why We Can Guarantee */}
            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                Why We Can Guarantee
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                We only take clients we <span className="font-bold text-black">know</span> we can grow. That means $100k+ monthly revenue minimum, proven offer, existing customer base. We're not building from zero—we're scaling what works. That's why we have a 100% success rate.
              </p>
            </ComicPanel>

            {/* The Fine Print */}
            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-2xl font-bold uppercase mb-4 text-black border-b-3 border-cartoon-ink pb-3">
                The Fine Print (There Isn't Any)
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                No hidden clauses. No "attribution windows." No "effort-based" guarantees. If you don't hit 30% net revenue growth in 12 months, we work for free. Period. That's the entire contract in one sentence.
              </p>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Why Other Agencies Won't Do This */}
      <section className="py-20 md:py-32 bg-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">THE TRUTH!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHY OTHER AGENCIES
              <br />
              <span className="text-black">WON'T DO THIS</span>
            </h2>
          </div>

          <div className="space-y-6">
            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-3 text-black border-b-3 border-cartoon-ink pb-2">
                They Can't Deliver
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                Most agencies run cookie-cutter tactics that work for some clients and fail for others. They can't guarantee results because they don't have proven systems. They're guessing. We're executing what we know works.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-3 text-black border-b-3 border-cartoon-ink pb-2">
                They Don't Want The Risk
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                Agencies prefer to get paid whether you succeed or fail. Retainers with no skin in the game. We're different. Our entire business model depends on your success. If you don't grow, we don't get paid. Incentives aligned.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-xl font-bold uppercase mb-3 text-black border-b-3 border-cartoon-ink pb-2">
                They Work With Anyone
              </h3>
              <p className="font-newspaper text-cartoon-ink leading-relaxed">
                Most agencies take any client who can pay. We're selective: $100k+ monthly minimum, proven business model, established customer base. We only work with businesses we know we can scale. That's how we maintain a 100% success rate.
              </p>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 md:py-32 bg-cartoon-sepia border-b-5 border-cartoon-ink crosshatch">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6">Q&A!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              COMMON
              <br />
              <span className="text-black">QUESTIONS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-lg font-bold uppercase mb-3 text-black">
                Is it really 30% minimum?
              </h3>
              <p className="font-newspaper text-cartoon-ink">
                Yes. That's our floor, not our ceiling. Our average client growth is 87% in year one. The 30% is the bare minimum we guarantee or we work for free.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-lg font-bold uppercase mb-3 text-black">
                What if my business is seasonal?
              </h3>
              <p className="font-newspaper text-cartoon-ink">
                We baseline against your last 12 months and compare year-over-year growth. Seasonal fluctuations are accounted for in our calculations.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-lg font-bold uppercase mb-3 text-black">
                Do I still pay for ads if you work for free?
              </h3>
              <p className="font-newspaper text-cartoon-ink">
                Yes. Ad spend and tools are pass-through costs. The guarantee covers our service fees. If we don't hit 30%, you pay $0 for our work but still cover ad spend.
              </p>
            </ComicPanel>

            <ComicPanel className="halftone-overlay">
              <h3 className="font-cartoon text-lg font-bold uppercase mb-3 text-black">
                Has anyone ever not hit the guarantee?
              </h3>
              <p className="font-newspaper text-cartoon-ink">
                No. 100% of our clients exceed the 30% minimum. That's why we can make this promise. We're selective about who we work with and we execute proven systems.
              </p>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 bg-cartoon-ink text-cartoon-cream border-b-5 border-black relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <div className="sound-effect text-white mb-8">TAKE THE DEAL!</div>
          <h2 className="vintage-headline text-4xl md:text-6xl lg:text-7xl text-white mb-8">
            READY FOR
            <br />
            <span className="text-white">GUARANTEED GROWTH?</span>
          </h2>
          <ComicPanel className="mb-12 bg-cartoon-cream text-cartoon-ink">
            <p className="text-xl md:text-2xl font-newspaper leading-relaxed">
              If you're doing $100k+ monthly and ready for guaranteed growth...<br /><br />
              We'll add <span className="font-black text-black">30% to your revenue in 12 months</span>.<br /><br />
              <span className="font-black text-2xl text-black">Or we work for free.</span>
            </p>
          </ComicPanel>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <CartoonButton href="/apply" variant="gold" className="text-2xl px-16 py-6">
              APPLY NOW →
            </CartoonButton>
          </div>
        </div>
      </section>
    </>
  );
}
