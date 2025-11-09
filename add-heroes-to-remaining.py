#!/usr/bin/env python3
"""
Add hero cityscape backgrounds to pages that don't have them
"""
from pathlib import Path
import re

# Pages that need hero backgrounds added
pages_needing_heroes = {
    'app/guarantee/page.tsx': 'Gemini_Generated_Image_c5f5mxc5f5mxc5f5.png',
    'app/apply/page.tsx': 'Gemini_Generated_Image_c7ujjpc7ujjpc7uj.png',
    'app/blog/page.tsx': 'Gemini_Generated_Image_dipn3bdipn3bdipn.png',
    'app/privacy/page.tsx': 'Gemini_Generated_Image_dlodzvdlodzvdlod.png',
    'app/terms/page.tsx': 'Gemini_Generated_Image_dy38gmdy38gmdy38.png',
    'app/industries/course-creators/page.tsx': 'Gemini_Generated_Image_6u49bp6u49bp6u49.png',
    'app/industries/service-businesses/page.tsx': 'Gemini_Generated_Image_951cpn951cpn951c.png',
    'app/industries/product-businesses/page.tsx': 'Gemini_Generated_Image_an9k1ian9k1ian9k.png',
    'app/industries/saas/page.tsx': 'Gemini_Generated_Image_aopvueaopvueaopv.png',
}

hero_template = '''        {{/* Cityscape hero background */}}
        <div className="absolute inset-0 z-0">
          <img src="/heroes/{image}" alt="Cityscape" className="w-full h-full object-cover" style={{{{ objectPosition: "center center" }}}} />
          {{/* Gradient overlay for text readability */}}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70"></div>
        </div>

'''

updated_count = 0

for page_path, cityscape_image in pages_needing_heroes.items():
    page_file = Path(page_path)

    if not page_file.exists():
        print(f"⚠️  Skipping {page_path} (not found)")
        continue

    content = page_file.read_text()
    original = content

    # Check if page already has a hero image section
    if '/heroes/' in content and 'object-cover' in content:
        print(f"  {page_path} already has hero - skipping")
        continue

    # Find the section tag and add hero background after it
    # Pattern: <section className="relative bg-gradient...
    # We'll insert the hero div right after the opening section tag

    # Find section with "relative" className
    section_pattern = r'(<section className="relative [^"]+overflow-hidden">)\s*\n'

    if re.search(section_pattern, content):
        hero_code = hero_template.format(image=cityscape_image)
        content = re.sub(section_pattern, r'\1\n' + hero_code, content)

        page_file.write_text(content)
        print(f"✓ Added hero to: {page_path}")
        print(f"   → Using: {cityscape_image}")
        updated_count += 1
    else:
        print(f"⚠️  Could not find section tag in: {page_path}")

print(f"\n✅ Added hero backgrounds to {updated_count} pages!")
