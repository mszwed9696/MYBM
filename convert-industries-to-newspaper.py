#!/usr/bin/env python3
"""
Convert all industry pages to newspaper design
"""

from pathlib import Path

# Industry page configurations
INDUSTRIES = {
    "coaches": {
        "title": "Build A Coaching Empire<br />That Commands Respect",
        "subtitle": "Stop begging for clients. Build a system that fills your programs on demand. 30% revenue increase guaranteed.",
        "badge": "★ FOR HIGH-TICKET COACHES ★",
        "character": "muscle-character.png",
        "hero_image": "phoenix-skyline.png"
    },
    "consultants": {
        "title": "Consulting That Scales<br />Beyond Referrals",
        "subtitle": "Build predictable pipelines and systematized client acquisition. No more feast or famine.",
        "badge": "★ FOR B2B CONSULTANTS ★",
        "character": "advisor-wisdom.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "course-creators": {
        "title": "Scale Your Course Business<br />To 7 Figures",
        "subtitle": "Stop living launch-to-launch. Build evergreen systems that sell your courses 24/7.",
        "badge": "★ FOR COURSE CREATORS ★",
        "character": "professor-knowledge.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "service-businesses": {
        "title": "Dominate Your Local Market<br />And Scale Beyond",
        "subtitle": "Marketing systems for high-ticket service businesses ready to leave competitors in the dust.",
        "badge": "★ FOR SERVICE BUSINESSES ★",
        "character": "tech-innovator.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "product-businesses": {
        "title": "Turn Products Into<br />Profit Machines",
        "subtitle": "E-commerce and product businesses doing $100k+/month. Scale profitably with proven systems.",
        "badge": "★ FOR PRODUCT BUSINESSES ★",
        "character": "merchant-deals.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "saas": {
        "title": "SaaS Growth That<br />Compounds Monthly",
        "subtitle": "Marketing systems built for SaaS companies scaling from 6 to 7 or 7 to 8 figures.",
        "badge": "★ FOR SAAS COMPANIES ★",
        "character": "tech-innovator.png",
        "hero_image": "philadelphia-skyline.png"
    }
}

NEWSPAPER_TEMPLATE = '''"use client";

import Link from "next/link";

export default function {IndustryName}Page() {{
  return (
    <div className="min-h-screen bg-newspaper-cream newspaper-texture">
      {{/* Newspaper Hero Section */}}
      <section className="relative bg-white border-b-5 border-black">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          {{/* Cityscape background */}}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/heroes/{hero_image}"
              alt="Cityscape"
              className="w-full h-full object-contain"
              style={{{{ filter: "grayscale(100%) contrast(1.3)" }}}}
            />
          </div>

          {{/* Character */}}
          <div className="absolute right-8 bottom-0 w-48 md:w-64 z-10 opacity-90">
            <img
              src="/characters/{character}"
              alt="Character"
              className="w-full h-auto"
              style={{{{ filter: "grayscale(100%) contrast(1.3) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}}}
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            {{/* Category badge */}}
            <div className="inline-block mb-8 px-6 py-2 bg-black text-white border-3 border-black font-headline text-sm uppercase tracking-widest">
              {badge}
            </div>

            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight text-black">
              {title}
            </h1>

            <p className="font-newspaper text-xl md:text-2xl text-black leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="inline-block bg-black text-white px-10 py-5 border-3 border-black font-headline text-lg uppercase tracking-wide hover:bg-gray-900 transition-all text-center"
              >
                Join The Operation
              </Link>
              <Link
                href="/results"
                className="inline-block bg-white text-black px-10 py-5 border-3 border-black font-headline text-lg uppercase tracking-wide hover:bg-gray-100 transition-all text-center"
              >
                See The Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {{/* Newspaper Divider */}}
      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: {industry_name}</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      {{/* Main Content Section */}}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ BREAKING NEWS ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block mb-6">
              How We Help {industry_name}
            </h2>
            <p className="font-newspaper text-lg text-gray-700 italic max-w-3xl mx-auto">
              Marketing systems built specifically for your industry
            </p>
          </div>
        </div>
      </section>

      {{/* Results Section */}}
      <section className="py-20 md:py-24 bg-newspaper-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="font-headline text-sm uppercase tracking-widest mb-4">★ STATISTICAL REPORT ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">
              Real Results For {industry_name}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">+287%</div>
              <div className="font-headline text-xl uppercase mb-4">Revenue Growth</div>
              <p className="font-newspaper text-gray-700">
                Average results across our {industry_name_lower} clients in first 12 months
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">30%</div>
              <div className="font-headline text-xl uppercase mb-4">Minimum Guarantee</div>
              <p className="font-newspaper text-gray-700">
                Revenue increase guaranteed in year 1, or we work for free until you get it
              </p>
            </div>

            <div className="bg-white border-5 border-black p-8 text-center">
              <div className="font-headline text-6xl font-black mb-4">$100k+</div>
              <div className="font-headline text-xl uppercase mb-4">Monthly Revenue</div>
              <p className="font-newspaper text-gray-700">
                Minimum requirement to work with us. We only serve established {industry_name_lower}
              </p>
            </div>
          </div>
        </div>
      </section>

      {{/* Pull Quote */}}
      <div className="border-t-5 border-b-5 border-black bg-black text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-headline text-3xl md:text-4xl italic leading-tight mb-6">
            "We're not just another agency. We're your partners. We protect our partners. We deliver results. Or we don't get paid. Capisce?"
          </p>
          <p className="font-newspaper text-xl">
            — Don Michael Szwed, Mind Your Business Media
          </p>
        </div>
      </div>

      {{/* CTA Section */}}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16 bg-black">
            <div className="font-headline text-sm uppercase tracking-widest mb-6">★ Join Mind Your Business Media ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Ready To Scale<br />Your Business?
            </h2>
            <p className="font-newspaper text-xl mb-10 text-white/90">
              If you're doing $100k+ monthly and ready for guaranteed growth, let's talk.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-white text-black px-10 py-5 border-3 border-white font-headline text-lg uppercase tracking-wide hover:bg-gray-100 transition-all"
            >
              APPLY NOW
            </Link>
            <p className="font-newspaper text-sm mt-6 text-white/70 uppercase tracking-wider">
              APPLICATION REVIEW: 24-48 HOURS | LIMITED PARTNERSHIPS AVAILABLE
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}}
'''

def convert_industry_page(industry_slug):
    """Convert a single industry page to newspaper design"""
    if industry_slug not in INDUSTRIES:
        print(f"⚠️  Unknown industry: {industry_slug}")
        return False

    config = INDUSTRIES[industry_slug]
    industry_name_title = industry_slug.replace("-", " ").title().replace(" ", "")
    industry_name_readable = industry_slug.replace("-", " ").title()

    # Generate page content from template
    content = NEWSPAPER_TEMPLATE.format(
        IndustryName=industry_name_title,
        title=config["title"],
        subtitle=config["subtitle"],
        badge=config["badge"],
        character=config["character"],
        hero_image=config["hero_image"],
        industry_name=industry_name_readable,
        industry_name_lower=industry_name_readable.lower()
    )

    # Write to file
    file_path = Path(f"app/industries/{industry_slug}/page.tsx")
    file_path.write_text(content)
    print(f"✅ Converted: {industry_slug}")
    return True

def main():
    print("🗞️  Converting industry pages to newspaper design...\n")

    converted = 0
    for industry_slug in INDUSTRIES.keys():
        if convert_industry_page(industry_slug):
            converted += 1

    print(f"\n✨ Converted {converted}/{len(INDUSTRIES)} industry pages")

if __name__ == "__main__":
    main()
