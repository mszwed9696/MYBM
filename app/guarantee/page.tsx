"use client";

import Link from "next/link";

export default function GuaranteePage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
            30% Revenue Growth<br />Or We Work For Free
          </h1>
          <p className="font-newspaper text-xl md:text-2xl text-black max-w-3xl mx-auto">
            The only marketing guarantee that actually means something. No other agency dares to offer this.
          </p>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: Our Guarantee</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      {/* The Guarantee Explained */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE DEAL ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Here's <span className="line-through">Exactly</span> How It Works
            </h2>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              We guarantee a minimum 30% net revenue increase in your first 12 months working with us.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">If we don't hit that number, we continue working for free until you do.</span> No excuses. No fine print. No weasel clauses. Just results.
            </p>

            <p className="newspaper-body mb-4">
              Why can we make this promise when no other agency will? Because we've cracked the code on scaling high-ticket businesses. We don't guess. We don't experiment on your dime. We execute proven systems that work.
            </p>

            <p className="newspaper-body font-bold">
              100% of our clients exceed the 30% guarantee. That's not luck. That's why we can make this promise.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE MECHANICS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              How The Guarantee Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">What We Measure</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                Net revenue growth. Not leads. Not traffic. Not "engagement." We track your monthly recurring revenue or gross revenue (depending on your business model) and guarantee 30% growth minimum.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                <span className="font-bold">Baseline:</span> Your average monthly revenue over the last 90 days before we start.<br/>
                <span className="font-bold">Target:</span> 30% increase by month 12.<br/>
                <span className="font-bold">Measurement:</span> Verified financials at 6 months and 12 months.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">What Happens If We Miss</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed mb-4">
                If at month 12 you haven't hit 30% growth, we continue working for $0 monthly fees until you do. You only pay for ad spend and tools. We work for free.
              </p>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                <span className="font-bold">This has never happened.</span> Every single client has exceeded the guarantee. But if it did, we'd keep working until you got your 30%+. That's the deal.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Why We Can Guarantee</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                We only take clients we <span className="font-bold">know</span> we can grow. That means $100k+ monthly revenue minimum, proven offer, existing customer base. We're not building from zero—we're scaling what works. That's why we have a 100% success rate.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">The Fine Print (There Isn't Any)</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                No hidden clauses. No "attribution windows." No "effort-based" guarantees. If you don't hit 30% net revenue growth in 12 months, we work for free. Period. That's the entire contract in one sentence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE TRUTH ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Why Other Agencies Won't Do This
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">They Can't Deliver</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                Most agencies run cookie-cutter tactics that work for some clients and fail for others. They can't guarantee results because they don't have proven systems. They're guessing. We're executing what we know works.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">They Don't Want The Risk</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                Agencies prefer to get paid whether you succeed or fail. Retainers with no skin in the game. We're different. Our entire business model depends on your success. If you don't grow, we don't get paid. Incentives aligned.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-xl font-bold uppercase mb-3 border-b-2 border-black pb-2">They Work With Anyone</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                Most agencies take any client who can pay. We're selective: $100k+ monthly minimum, proven business model, established customer base. We only work with businesses we know we can scale. That's how we maintain a 100% success rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ Q&A ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Common Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-lg font-bold uppercase mb-3">Is it really 30% minimum?</h3>
              <p className="font-newspaper text-gray-700">
                Yes. That's our floor, not our ceiling. Our average client growth is 87% in year one. The 30% is the bare minimum we guarantee or we work for free.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-lg font-bold uppercase mb-3">What if my business is seasonal?</h3>
              <p className="font-newspaper text-gray-700">
                We baseline against your last 12 months and compare year-over-year growth. Seasonal fluctuations are accounted for in our calculations.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-lg font-bold uppercase mb-3">Do I still pay for ads if you work for free?</h3>
              <p className="font-newspaper text-gray-700">
                Yes. Ad spend and tools are pass-through costs. The guarantee covers our service fees. If we don't hit 30%, you pay $0 for our work but still cover ad spend.
              </p>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <h3 className="font-headline text-lg font-bold uppercase mb-3">Has anyone ever not hit the guarantee?</h3>
              <p className="font-newspaper text-gray-700">
                No. 100% of our clients exceed the 30% minimum. That's why we can make this promise. We're selective about who we work with and we execute proven systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16">
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8">
              Ready To Get<br />Guaranteed Growth?
            </h2>
            <Link href="/apply" className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-headline text-lg uppercase hover:bg-gray-100">
              APPLY NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
