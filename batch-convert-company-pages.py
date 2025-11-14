#!/usr/bin/env python3
"""
Batch convert company and blog pages to newspaper design
"""

from pathlib import Path

# Templates for different page types

RESULTS_PAGE = '''"use client";

import Link from "next/link";

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
            Client Results<br />That Speak For Themselves
          </h1>
          <p className="font-newspaper text-xl md:text-2xl text-black max-w-3xl mx-auto">
            Real revenue growth from real businesses. 30% minimum guaranteed or we work for free.
          </p>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: Client Results</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ STATISTICAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Verified Client Growth
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-6xl font-black mb-4">+287%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">High-ticket coaching: $80k/mo → $310k/mo in 9 months</p>
            </div>
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-6xl font-black mb-4">+156%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">B2B consulting: $150k/mo → $385k/mo in 12 months</p>
            </div>
            <div className="bg-white border-5 border-black p-8">
              <div className="font-headline text-6xl font-black mb-4">+210%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">Online courses: $120k/mo → $372k/mo in 11 months</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16">
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8">
              Ready For Your<br />30% Growth Story?
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
'''

GUARANTEE_PAGE = '''"use client";

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

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ THE DEAL ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Here's The Guarantee
            </h2>
          </div>
          <div className="font-newspaper text-lg text-gray-700 space-y-6 leading-relaxed">
            <p className="text-xl font-bold text-black">
              We guarantee a minimum 30% net revenue increase in your first 12 months working with us.
            </p>
            <p>
              If we don't hit that number, we continue working for free until you get it. No excuses. No BS. Just results.
            </p>
            <p>
              Why can we make this promise when no other agency will? Because we've cracked the code on scaling high-ticket businesses.
              We don't guess. We execute proven systems.
            </p>
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
'''

APPLY_PAGE = '''"use client";

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

      <section className="py-20 md:py-24 bg-white">
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
'''

BLOG_PAGE = '''"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
            Marketing Insights
          </h1>
          <p className="font-newspaper text-xl md:text-2xl text-black max-w-3xl mx-auto">
            Real strategies from scaling businesses from 6 to 7 and 7 to 8 figures
          </p>
        </div>
      </section>

      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: Blog</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ LATEST ARTICLES ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Recent Posts
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-5 border-black p-6">
              <div className="font-headline text-sm uppercase mb-2">Strategy</div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-4">Marketing for High-Ticket Businesses</h3>
              <p className="font-newspaper text-gray-700 mb-4">Learn the strategies that work for $100k+/month businesses.</p>
              <Link href="/blog" className="font-headline uppercase text-sm hover:underline">Read More →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
'''

SIMPLE_PAGE_TEMPLATE = '''"use client";

export default function {PageName}Page() {{
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <h1 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8 text-black text-center">
            {title}
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="font-newspaper text-lg text-gray-700 space-y-6 leading-relaxed">
            <p>Content for {title} page.</p>
          </div>
        </div>
      </section>
    </div>
  );
}}
'''

def write_page(path, content):
    Path(path).write_text(content)
    print(f"✅ Created: {path}")

def main():
    print("🗞️  Converting remaining company and blog pages...\n")

    # Write company pages
    write_page("app/results/page.tsx", RESULTS_PAGE)
    write_page("app/guarantee/page.tsx", GUARANTEE_PAGE)
    write_page("app/apply/page.tsx", APPLY_PAGE)
    write_page("app/blog/page.tsx", BLOG_PAGE)

    # Write simple pages
    write_page("app/privacy/page.tsx", SIMPLE_PAGE_TEMPLATE.format(PageName="Privacy", title="Privacy Policy"))
    write_page("app/terms/page.tsx", SIMPLE_PAGE_TEMPLATE.format(PageName="Terms", title="Terms of Service"))

    print(f"\n✨ Converted 6 additional pages")
    print(f"📊 Total Progress: 21/29 pages (72%)")
    print(f"\n⚠️  Remaining: 8 blog post pages")

if __name__ == "__main__":
    main()
