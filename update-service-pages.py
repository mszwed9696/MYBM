#!/usr/bin/env python3
"""
Update service pages with cityscape hero images and skyline dividers
"""
import re
from pathlib import Path

# Map each service page to its cityscape image
service_cityscapes = {
    "fractional-cmo": "european-street.png",
    "funnel-optimization": "detroit-skyline.png",
    "content-marketing": "portland-mountain.png",
    "marketing-automation": "detroit-skyline.png",
    "marketing-strategy": "chicago-bean.png",
    "paid-advertising": "vegas-strip.png",
    # Skip consulting - already has hero images
}

services_dir = Path("app/services")

for service, cityscape in service_cityscapes.items():
    page_file = services_dir / service / "page.tsx"

    if not page_file.exists():
        print(f"⚠️  Skipping {service} (file not found)")
        continue

    print(f"Updating {service} with {cityscape}...", end=" ")

    try:
        content = page_file.read_text()

        # 1. Add SkylineDivider import if not present
        if "SkylineDivider" not in content:
            # Find the last import statement
            import_pattern = r'(import .+ from ["\'][^"\']+["\'];)'
            imports = re.findall(import_pattern, content)
            if imports:
                last_import = imports[-1]
                content = content.replace(
                    last_import,
                    last_import + '\nimport SkylineDivider from "@/components/SkylineDivider";'
                )

        # 2. Update hero section to include cityscape background
        # Find the hero section opening
        hero_pattern = r'(<section className="relative bg-gradient-to-br from-\[#2a1a4a\] via-\[#1a1a2e\] to-black text-white py-20 overflow-hidden">)'

        if re.search(hero_pattern, content):
            # Replace with new hero structure
            cityscape_name = cityscape.replace('.png', '').title().replace('-', ' ')
            new_hero_start = f'''<section className="relative bg-black text-white py-32 overflow-hidden min-h-[70vh] flex items-center">
        {{/* {cityscape_name} cityscape - PROMINENT hero image */}}
        <div className="absolute inset-0 z-0">
          <img src="/heroes/{cityscape}" alt="{cityscape_name}" className="w-full h-full object-cover" />
          {{/* Light gradient overlay for text readability */}}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/50 via-[#1a1a2e]/40 to-black/60"></div>
        </div>'''

            content = re.sub(hero_pattern, new_hero_start, content)

            # Update character positioning and opacity
            content = re.sub(
                r'className="absolute right-0 bottom-0 w-72 md:w-96 opacity-60 z-0"',
                'className="absolute right-10 md:right-20 bottom-0 w-72 md:w-96 opacity-80 z-10"',
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

            # Update text shadows in hero
            content = re.sub(
                r'textShadow: "3px 3px 6px rgba\(0,0,0,0\.8\)"',
                'textShadow: "3px 3px 8px rgba(0,0,0,0.9)"',
                content
            )

            # Update text color in hero paragraph
            content = re.sub(
                r'(className="text-xl md:text-2xl )text-gray-300( mb-8 leading-relaxed")',
                r'\1text-white/90\2',
                content
            )

            # Add text shadow to paragraph if not present
            if 'textShadow' not in content.split('</h1>')[1].split('</p>')[0]:
                content = re.sub(
                    r'(className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"\n              style={{ fontFamily: "\'Georgia\', serif" }})',
                    r'\1',
                    content
                )
                content = re.sub(
                    r'(text-xl md:text-2xl text-white/90 mb-8.*?\n\s+style={{ fontFamily: "\'Georgia\', serif" }})',
                    r'\1, textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }',
                    content
                )

        # 3. Add skyline divider after hero section
        # Find where hero section ends and next section begins
        hero_end_patterns = [
            r'(</section>\n\n      {/\* Main Content \*/})',
            r'(</section>\n\n      {/\* Pain Points \*/})',
            r'(</section>\n\n      {/\* What is)',
            r'(</section>\n\n      <section className="py-20)',
        ]

        for pattern in hero_end_patterns:
            if re.search(pattern, content):
                replacement = '''</section>

      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-white" />
      </div>

      ''' + pattern.replace('(</section>\\n\\n      ', '').replace(')', '').replace('\\n', '\n      ')
                content = re.sub(pattern, replacement, content)
                break

        # Write updated content
        page_file.write_text(content)
        print("✓ Updated")

    except Exception as e:
        print(f"✗ Error: {e}")

print("\n✅ All service pages updated with cityscape heroes and skyline dividers!")
