"use client";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
            Join The Operation
          </h1>
          <p className="font-newspaper text-xl md:text-2xl text-black max-w-3xl mx-auto">
            Limited partnerships available for businesses doing $100k+ monthly revenue
          </p>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: Partnership Application</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      {/* Who This Is For */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ QUALIFICATION ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              Who We <span className="line-through">Don't</span> Work With
            </h2>
          </div>

          <div className="newspaper-columns-2 newspaper-columns">
            <p className="newspaper-body drop-cap mb-4">
              We're selective. Extremely selective. We turn down most applicants.
            </p>

            <p className="newspaper-body mb-4">
              <span className="font-bold">If you're doing less than $100k monthly revenue, we can't help you.</span> Not because we don't want to—but because the systems we build are designed for businesses at scale. Below $100k/month, you're solving different problems.
            </p>

            <p className="newspaper-body mb-4">
              We don't work with businesses that need "brand awareness" or "thought leadership" without revenue accountability. We don't work with startups looking for cheap labor. We don't work with anyone who isn't serious about growth.
            </p>

            <p className="newspaper-body font-bold">
              We only partner with established businesses doing $100k+ monthly who are ready to scale to $250k, $500k, $1M+ per month. If that's you, apply below.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ REQUIREMENTS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Who We DO Work With
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Minimum Revenue</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                $100k+ monthly revenue minimum. Proven business model. Existing customer base. We're scaling what works, not building from scratch.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Proven Offer</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                You have an offer that converts. Product-market fit established. You're not experimenting with pricing or positioning—you know what sells.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Ready To Scale</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                You have the infrastructure to handle more customers. Team, fulfillment, operations—ready to grow. Marketing is your bottleneck, not delivery.
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4 border-b-2 border-black pb-2">Committed To Partnership</h3>
              <p className="font-newspaper text-gray-700 leading-relaxed">
                You're looking for a long-term partner, not a vendor. You understand this takes 6-12 months to hit full momentum. You're in it for real growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Expect */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE PROCESS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              What Happens Next
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">1</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Application Review (24-48 Hours)</h3>
                  <p className="font-newspaper text-gray-700">
                    We review every application personally. If you meet our criteria, we'll send you a calendar link to schedule a strategy call.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">2</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Strategy Call (60 Minutes)</h3>
                  <p className="font-newspaper text-gray-700">
                    We analyze your business, identify growth opportunities, and determine if we're a good fit. This is a real strategy session, not a sales pitch. You'll leave with actionable insights whether we work together or not.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-3 border-black p-6">
              <div className="flex items-start">
                <div className="font-headline text-4xl font-black mr-6 border-3 border-black px-4 py-2 bg-black text-white">3</div>
                <div>
                  <h3 className="font-headline text-xl font-bold uppercase mb-2">Proposal & Partnership Agreement</h3>
                  <p className="font-newspaper text-gray-700">
                    If we're aligned, we'll send a custom proposal with our strategy, timeline, and guarantee. Once signed, we start building your growth systems immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white border-5 border-black p-8">
            <div className="text-center mb-8">
              <div className="font-headline text-2xl font-black uppercase mb-4">Application Form</div>
              <p className="font-newspaper text-gray-700">
                Complete the form below. We'll review your application within 24-48 hours.
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="font-headline uppercase text-sm font-bold block mb-2">Full Name *</label>
                <input type="text" required className="w-full border-3 border-black px-4 py-3 font-newspaper" />
              </div>
              <div>
                <label className="font-headline uppercase text-sm font-bold block mb-2">Email *</label>
                <input type="email" required className="w-full border-3 border-black px-4 py-3 font-newspaper" />
              </div>
              <div>
                <label className="font-headline uppercase text-sm font-bold block mb-2">Monthly Revenue *</label>
                <select required className="w-full border-3 border-black px-4 py-3 font-newspaper">
                  <option>Select...</option>
                  <option>$100k-250k/month</option>
                  <option>$250k-500k/month</option>
                  <option>$500k-1M/month</option>
                  <option>$1M+/month</option>
                </select>
              </div>
              <div>
                <label className="font-headline uppercase text-sm font-bold block mb-2">Business Type *</label>
                <input type="text" required className="w-full border-3 border-black px-4 py-3 font-newspaper" />
              </div>
              <button type="submit" className="w-full bg-black text-white py-5 px-8 font-headline text-lg uppercase tracking-wide hover:bg-gray-900 transition-all">
                SUBMIT APPLICATION
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
