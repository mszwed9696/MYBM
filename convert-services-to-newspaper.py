#!/usr/bin/env python3
"""
Convert all service pages to newspaper design
"""

from pathlib import Path
import re

# Service page configurations with their unique content
SERVICES = {
    "paid-advertising": {
        "title": "We Don't Chase Leads<br />We Enforce Results",
        "subtitle": "Paid ads across Google, Facebook, LinkedIn, YouTube. No tire-kickers. No BS. Just qualified buyers.",
        "badge": "★ PAID ADVERTISING - THE ENFORCER ★",
        "character": "enforcer-character.png",
        "hero_image": "las-vegas-skyline.png"
    },
    "marketing-strategy": {
        "title": "Strategy Without Execution<br />Is Just Talk",
        "subtitle": "Custom marketing strategies for high-ticket businesses. We don't just plan it—we execute it.",
        "badge": "★ MARKETING STRATEGY - THE CONSIGLIERE ★",
        "character": "consigliere-wisdom.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "funnel-optimization": {
        "title": "Turn Traffic Into<br />Cold Hard Cash",
        "subtitle": "Complete funnel audits and conversion rate optimization. Stop leaking revenue at every step.",
        "badge": "★ FUNNEL OPTIMIZATION - THE OPTIMIZER ★",
        "character": "optimizer-funnel.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "content-marketing": {
        "title": "Content That Commands<br />Attention And Revenue",
        "subtitle": "Authority content that ranks, converts, and attracts premium clients to your business.",
        "badge": "★ CONTENT & SEO - THE WRITER ★",
        "character": "writer-content.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "marketing-automation": {
        "title": "Scale Marketing<br />Without Scaling Headcount",
        "subtitle": "Automated nurture sequences and sales systems that run 24/7 while you focus on delivery.",
        "badge": "★ MARKETING AUTOMATION - THE TECH ★",
        "character": "tech-automation.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "consulting": {
        "title": "Expert Guidance<br />For Serious Growth",
        "subtitle": "Strategic marketing consulting for businesses ready to scale. No hand-holding. Just results.",
        "badge": "★ CONSULTING - THE ADVISOR ★",
        "character": "advisor-wisdom.png",
        "hero_image": "philadelphia-skyline.png"
    },
    "skool-community": {
        "title": "Build A Community<br />That Sells For You",
        "subtitle": "Skool community setup and management. Turn engagement into revenue.",
        "badge": "★ SKOOL COMMUNITY - THE COMMUNITY BUILDER ★",
        "character": "community-builder.png",
        "hero_image": "philadelphia-skyline.png"
    }
}

NEWSPAPER_TEMPLATE = '''"use client";

import Link from "next/link";

export default function {ServiceName}Page() {{
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

            <Link
              href="/apply"
              className="inline-block bg-black text-white px-10 py-5 border-3 border-black font-headline text-lg uppercase tracking-wide hover:bg-gray-900 transition-all"
            >
              Join The Operation
            </Link>
          </div>
        </div>
      </section>

      {{/* Newspaper Divider */}}
      <div className="border-t-5 border-b-5 border-black bg-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between text-xs font-newspaper uppercase tracking-wide">
            <span>★ Philadelphia Edition ★</span>
            <span>Special Report: {service_name}</span>
            <span>Price: Results or Nothing</span>
          </div>
        </div>
      </div>

      {{/* CTA Section */}}
      <section className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border-5 border-white p-10 md:p-16 bg-black">
            <div className="font-headline text-sm uppercase tracking-widest mb-6">★ Join Mind Your Business Media ★</div>
            <h2 className="font-headline text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Ready To Get Started?
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

def convert_service_page(service_slug):
    """Convert a single service page to newspaper design"""
    if service_slug not in SERVICES:
        print(f"⚠️  Unknown service: {service_slug}")
        return False

    config = SERVICES[service_slug]
    service_name_title = service_slug.replace("-", " ").title().replace(" ", "")
    service_name_readable = service_slug.replace("-", " ").title()

    # Generate page content from template
    content = NEWSPAPER_TEMPLATE.format(
        ServiceName=service_name_title,
        title=config["title"],
        subtitle=config["subtitle"],
        badge=config["badge"],
        character=config["character"],
        hero_image=config["hero_image"],
        service_name=service_name_readable
    )

    # Write to file
    file_path = Path(f"app/services/{service_slug}/page.tsx")
    file_path.write_text(content)
    print(f"✅ Converted: {service_slug}")
    return True

def main():
    print("🗞️  Converting service pages to newspaper design...\n")

    converted = 0
    for service_slug in SERVICES.keys():
        if convert_service_page(service_slug):
            converted += 1

    print(f"\n✨ Converted {converted}/{len(SERVICES)} service pages")

if __name__ == "__main__":
    main()
