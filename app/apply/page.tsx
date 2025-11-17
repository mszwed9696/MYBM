"use client";

import { useState } from "react";
import ComicPanel from "@/components/ComicPanel";
import CartoonButton from "@/components/CartoonButton";
import Starburst from "@/components/Starburst";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    revenue: "",
    businessType: "",
    currentRevenue: "",
    biggestChallenge: "",
    readyToScale: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Application submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-cartoon-cream">
      {/* Hero Section */}
      <section className="relative bg-cartoon-sepia border-b-5 border-cartoon-ink py-20 md:py-32 crosshatch">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Starburst className="w-32 h-32 flex items-center justify-center">
                <div className="text-xl">30%<br/>FREE!</div>
              </Starburst>
            </div>

            <h1 className="vintage-headline text-5xl md:text-7xl mb-6">
              PARTNER WITH
              <br />
              <span className="text-black">THE OPERATION</span>
            </h1>

            <ComicPanel className="bg-cartoon-cream max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-newspaper leading-relaxed text-cartoon-ink">
                <span className="font-black text-black">MINIMUM REQUIREMENT: $100,000+ per month in revenue</span>
                <br /><br />
                If you qualify, we'll guarantee you <span className="font-bold">30% more revenue in 12 months</span> or work for free until we hit it.
                <br /><br />
                <span className="font-bold">Application review: 24-48 hours.</span>
              </p>
            </ComicPanel>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-20 md:py-24 bg-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="sound-effect mb-6 text-black">STOP!</div>
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              READ THIS FIRST
              <br />
              <span className="text-black">BEFORE YOU APPLY</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* ONLY Apply If... */}
            <ComicPanel className="bg-cartoon-green text-white">
              <div className="text-6xl text-center mb-6">✓</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">
                ONLY APPLY IF:
              </h3>
              <ul className="space-y-4 font-newspaper text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <span>You're doing <span className="font-black">$100,000+ per month</span> in revenue (we verify this)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <span>You have a <span className="font-black">proven offer</span> that converts (not experimenting)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <span>You can <span className="font-black">handle more customers</span> right now (operations ready)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <span>You want a <span className="font-black">long-term partner</span> (6-12+ months minimum)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <span>You care about <span className="font-black">revenue</span>, not vanity metrics</span>
                </li>
              </ul>
            </ComicPanel>

            {/* DON'T Apply If... */}
            <ComicPanel className="bg-cartoon-red text-white">
              <div className="text-6xl text-center mb-6">✗</div>
              <h3 className="font-cartoon text-3xl text-center uppercase mb-6 text-white">
                DON'T WASTE TIME IF:
              </h3>
              <ul className="space-y-4 font-newspaper text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✗</span>
                  <span>You're under <span className="font-black">$100,000/month</span> in revenue (we can't help yet)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✗</span>
                  <span>You want <span className="font-black">"brand awareness"</span> without revenue accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✗</span>
                  <span>You're looking for the <span className="font-black">cheapest option</span> (we're not it)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✗</span>
                  <span>You need <span className="font-black">hand-holding</span> on every decision</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✗</span>
                  <span>You want to <span className="font-black">"test"</span> for 30 days (we don't do trials)</span>
                </li>
              </ul>
            </ComicPanel>
          </div>

          <ComicPanel className="bg-cartoon-yellow border-cartoon-ink max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-xl font-newspaper font-bold text-cartoon-ink leading-relaxed">
                ⚠️ We reject 80% of applications. Not because we're mean—because we only work with businesses we can guarantee results for.
                <br /><br />
                If you don't meet these criteria, <span className="underline">don't apply</span>. Save us both the time.
              </p>
            </div>
          </ComicPanel>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 md:py-24 bg-cartoon-newsprint border-b-5 border-cartoon-ink halftone-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              WHAT HAPPENS
              <br />
              <span className="text-cartoon-gold">AFTER YOU APPLY</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Application Review (24-48 Hours)",
                description: "We review every application personally. If you qualify, we'll send you a calendar link for a strategy call. If not, we'll tell you why and what needs to change."
              },
              {
                step: "2",
                title: "Strategy Call (60 Minutes)",
                description: "We analyze your business, identify revenue opportunities, and determine fit. This is a real strategy session—you'll leave with actionable insights whether we work together or not."
              },
              {
                step: "3",
                title: "Custom Proposal + Guarantee",
                description: "If we're aligned, we send a custom proposal with our 30% revenue guarantee, timeline, and complete strategy. Once signed, we start immediately."
              }
            ].map((item, i) => (
              <ComicPanel key={i} className="bg-white">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-cartoon-red text-white flex items-center justify-center rounded-lg border-4 border-cartoon-ink">
                    <span className="font-cartoon text-3xl">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-cartoon text-2xl text-cartoon-ink uppercase mb-3">
                      {item.title}
                    </h3>
                    <p className="font-newspaper text-lg text-cartoon-brown leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ComicPanel>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-32 bg-cartoon-cream border-b-5 border-cartoon-ink">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="vintage-headline text-4xl md:text-6xl mb-6">
              SUBMIT YOUR
              <br />
              <span className="text-black">APPLICATION</span>
            </h2>
            <p className="text-xl font-newspaper text-black">
              Answer honestly. We'll review within 24-48 hours.
            </p>
          </div>

          <ComicPanel className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div>
                <label className="block font-cartoon text-lg uppercase mb-2 text-cartoon-ink">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-3 border-cartoon-ink px-4 py-3 font-newspaper text-lg focus:outline-none focus:ring-4 focus:ring-cartoon-yellow"
                  placeholder="Don Michael Szwed"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-cartoon text-lg uppercase mb-2 text-cartoon-ink">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border-3 border-cartoon-ink px-4 py-3 font-newspaper text-lg focus:outline-none focus:ring-4 focus:ring-cartoon-yellow"
                    placeholder="don@business.com"
                  />
                </div>

                <div>
                  <label className="block font-cartoon text-lg uppercase mb-2 text-cartoon-ink">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border-3 border-cartoon-ink px-4 py-3 font-newspaper text-lg focus:outline-none focus:ring-4 focus:ring-cartoon-yellow"
                    placeholder="(215) 555-1234"
                  />
                </div>
              </div>

              {/* Revenue Qualification */}
              <div className="bg-cartoon-yellow border-3 border-cartoon-ink p-6 -mx-6">
                <label className="block font-cartoon text-xl uppercase mb-3 text-cartoon-ink">
                  ⚠️ Current Monthly Revenue * (We verify this)
                </label>
                <select
                  required
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  className="w-full border-3 border-cartoon-ink px-4 py-3 font-newspaper text-lg bg-white focus:outline-none focus:ring-4 focus:ring-cartoon-red"
                >
                  <option value="">Select your revenue range...</option>
                  <option value="under-100k">Under $100k/month (Not qualified yet)</option>
                  <option value="100k-250k">$100k - $250k/month ✓</option>
                  <option value="250k-500k">$250k - $500k/month ✓</option>
                  <option value="500k-1m">$500k - $1M/month ✓</option>
                  <option value="1m-plus">$1M+/month ✓</option>
                </select>
                <p className="text-sm font-newspaper text-cartoon-brown mt-2 italic">
                  Be honest—we'll ask for proof if you're accepted.
                </p>
              </div>

              {/* Business Details */}
              <div>
                <label className="block font-cartoon text-lg uppercase mb-2 text-cartoon-ink">
                  Business Type / Industry *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  className="w-full border-3 border-cartoon-ink px-4 py-3 font-newspaper text-lg focus:outline-none focus:ring-4 focus:ring-cartoon-yellow"
                  placeholder="High-ticket coaching, B2B consulting, SaaS, etc."
                />
              </div>

              <div>
                <label className="block font-cartoon text-lg uppercase mb-2 text-cartoon-ink">
                  What's your biggest marketing challenge right now? *
                </label>
                <textarea
                  required
                  value={formData.biggestChallenge}
                  onChange={(e) => setFormData({...formData, biggestChallenge: e.target.value})}
                  rows={4}
                  className="w-full border-3 border-cartoon-ink px-4 py-3 font-newspaper text-lg focus:outline-none focus:ring-4 focus:ring-cartoon-yellow resize-none"
                  placeholder="Be specific. What's preventing you from scaling right now?"
                />
              </div>

              <div>
                <label className="block font-cartoon text-lg uppercase mb-2 text-cartoon-ink">
                  Can you handle 30% more customers right now? *
                </label>
                <select
                  required
                  value={formData.readyToScale}
                  onChange={(e) => setFormData({...formData, readyToScale: e.target.value})}
                  className="w-full border-3 border-cartoon-ink px-4 py-3 font-newspaper text-lg bg-white focus:outline-none focus:ring-4 focus:ring-cartoon-yellow"
                >
                  <option value="">Select one...</option>
                  <option value="yes">Yes - I can handle more customers today</option>
                  <option value="almost">Almost - minor adjustments needed</option>
                  <option value="no">No - I need to build infrastructure first</option>
                </select>
              </div>

              {/* Consent */}
              <div className="border-t-3 border-cartoon-ink pt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-6 h-6 border-3 border-cartoon-ink mt-1 cursor-pointer"
                  />
                  <span className="font-newspaper text-base text-cartoon-brown">
                    I understand that Mind Your Business Media only works with businesses doing a MINIMUM of $100,000+ per month in revenue, and I meet this requirement. I'm ready for a 6-12+ month partnership focused on revenue growth.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <CartoonButton
                  variant="gold"
                  className="text-2xl px-12 py-6 w-full md:w-auto"
                  onClick={() => {}}
                >
                  SUBMIT APPLICATION →
                </CartoonButton>
                <p className="mt-4 text-sm font-newspaper text-cartoon-brown italic">
                  ★ We'll review your application within 24-48 hours ★
                </p>
              </div>
            </form>
          </ComicPanel>

          {/* Final Note */}
          <ComicPanel className="mt-12 bg-cartoon-sepia border-cartoon-ink">
            <div className="text-center">
              <p className="text-lg font-newspaper text-cartoon-ink leading-relaxed italic">
                "We don't accept everyone. But if you qualify and we accept you, you get the full operation behind you—and a <span className="font-black">30% revenue guarantee</span>. That's our word."
                <br /><br />
                <span className="not-italic font-bold">— Don Michael Szwed, Founder</span>
              </p>
            </div>
          </ComicPanel>
        </div>
      </section>
    </div>
  );
}
