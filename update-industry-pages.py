#!/usr/bin/env python3
"""
Update all remaining industry pages with cityscape hero images and mobster color scheme
"""
import re
from pathlib import Path

# Map each industry page to its cityscape image
industry_cityscapes = {
    "consultants": "detroit-skyline.png",
    "course-creators": "portland-mountain.png",
    "product-businesses": "european-street.png",
    "saas": "detroit-skyline.png",
    "service-businesses": "european-street.png",
}

industries_dir = Path("app/industries")

for industry, cityscape in industry_cityscapes.items():
    page_file = industries_dir / industry / "page.tsx"

    if not page_file.exists():
        print(f"⚠️  Skipping {industry} (file not found)")
        continue

    print(f"Updating {industry} with {cityscape}...", end=" ")

    try:
        content = page_file.read_text()

        # 1. Add SkylineDivider import if not present
        if "SkylineDivider" not in content:
            content = content.replace(
                'import { motion } from "framer-motion";',
                'import { motion } from "framer-motion";\nimport SkylineDivider from "@/components/SkylineDivider";'
            )

        # 2. Update hero section to include cityscape background
        # Find the hero section opening
        hero_pattern = r'(<section className="relative bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white py-20 overflow-hidden">)'

        if re.search(hero_pattern, content):
            # Replace with new hero structure
            new_hero_start = f'''<section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">
        {{/* {cityscape.replace('.png', '').title().replace('-', ' ')} cityscape - PROMINENT hero image */}}
        <div className="absolute inset-0 z-0">
          <img src="/heroes/{cityscape}" alt="{cityscape.replace('.png', '').replace('-', ' ').title()}" className="w-full h-full object-cover" />
          {{/* Light gradient overlay for text readability */}}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/50 via-[#1a1a2e]/40 to-black/60"></div>
        </div>'''

            content = re.sub(hero_pattern, new_hero_start, content)

            # Update character z-index and opacity
            content = re.sub(
                r'className="absolute right-0 bottom-0 w-64 md:w-80 opacity-60 z-0"',
                'className="absolute right-10 md:right-20 bottom-0 w-64 md:w-80 opacity-80 z-10"',
                content
            )
            content = re.sub(
                r'animate={{ x: 0, opacity: 0\.6 }}',
                'animate={{ x: 0, opacity: 0.8 }}',
                content
            )

            # Update content z-index
            content = re.sub(
                r'px-4 sm:px-6 lg:px-8 relative z-10">',
                'px-4 sm:px-6 lg:px-8 relative z-20">',
                content
            )

            # Update text shadows and colors in hero
            content = re.sub(
                r'textShadow: "3px 3px 6px rgba\(0,0,0,0\.8\)"',
                'textShadow: "3px 3px 8px rgba(0,0,0,0.9)"',
                content
            )
            content = re.sub(
                r'text-gray-300 mb-8',
                'text-white/90 mb-8',
                content
            )
            content = re.sub(
                r'style={{ fontFamily: "\'Georgia\', serif" }}',
                'style={{ fontFamily: "\'Georgia\', serif", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}',
                content,
                count=1  # Only first occurrence in description paragraph
            )

        # 3. Add skyline divider after hero section
        # Find where hero section ends
        hero_end_pattern = r'(</section>\n\n      {/\* Pain Points \*/})'
        if re.search(hero_end_pattern, content):
            skyline_divider = '''</section>

      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-white" />
      </div>

      {/* Pain Points */}'''
            content = re.sub(hero_end_pattern, skyline_divider, content)

        # 4. Replace blue gradients with mobster colors
        # Solution section background
        content = re.sub(
            r'bg-gradient-to-br from-blue-600 to-blue-800',
            'bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000]',
            content
        )

        # CTA section background
        content = re.sub(
            r'bg-gradient-to-r from-blue-600 to-blue-800',
            'bg-gradient-to-r from-[#8B0000] via-[#2a1a4a] to-black',
            content
        )

        # 5. Update text colors
        content = re.sub(r'text-blue-100', 'text-gray-200', content)
        content = re.sub(r'text-blue-200', 'text-gray-300', content)
        content = re.sub(r'text-blue-600', 'text-[#FFD700]', content)

        # Update result card backgrounds
        content = re.sub(
            r'bg-gradient-to-br from-blue-50 to-blue-100',
            'bg-gradient-to-br from-[#2a1a4a]/10 to-[#FFD700]/20',
            content
        )

        # Update card borders
        content = re.sub(
            r'border border-white/20',
            'border border-[#FFD700]/30',
            content
        )

        # Update result card borders
        content = re.sub(
            r'rounded-xl">(\s+)<div className="text-5xl font-bold text-\[#FFD700\]',
            'rounded-xl border-2 border-[#FFD700]/30">\\1<div className="text-5xl font-bold text-[#FFD700]',
            content
        )

        # 6. Update CTA button
        content = re.sub(
            r'bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100',
            'bg-[#FFD700] text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#FFA500] shadow-lg',
            content
        )

        # 7. Add Georgia font to headings (add style prop if not present)
        # For h2 and h3 tags that don't have style
        content = re.sub(
            r'<h2 className="([^"]*)">\n',
            lambda m: f'<h2 className="{m.group(1)}" style={{{{ fontFamily: "\'Georgia\', serif" }}}}>\n' if 'Georgia' not in m.group(0) else m.group(0),
            content
        )
        content = re.sub(
            r'<h3 className="([^"]*)">\n',
            lambda m: f'<h3 className="{m.group(1)}" style={{{{ fontFamily: "\'Georgia\', serif" }}}}>\n' if 'Georgia' not in m.group(0) else m.group(0),
            content
        )

        # Update links to use mobster colors
        content = re.sub(
            r'className="text-blue-600 text-xl font-semibold hover:underline"',
            'className="text-[#8B0000] text-xl font-semibold hover:underline" style={{ fontFamily: "\'Georgia\', serif" }}',
            content
        )

        # Write updated content
        page_file.write_text(content)
        print("✓ Updated")

    except Exception as e:
        print(f"✗ Error: {e}")

print("\n✅ All industry pages updated with cityscape heroes and mobster theme!")
