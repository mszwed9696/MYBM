#!/usr/bin/env python3
import os
import re

# Map pages to hero images and character images
page_configs = {
    "app/industries/service-businesses/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/accountant-numbers.png",
        "alt_character": "The Accountant"
    },
    "app/industries/product-businesses/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/merchant-deals.png",
        "alt_character": "The Merchant"
    },
    "app/industries/saas/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/tech-innovator.png",
        "alt_character": "The Innovator"
    },
    "app/services/fractional-cmo/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/strategist-planning.png",
        "alt_character": "The Strategist"
    },
    "app/services/marketing-strategy/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/strategist-planning.png",
        "alt_character": "The Strategist"
    },
    "app/services/paid-advertising/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/money-ads.png",
        "alt_character": "The Money Man"
    },
    "app/services/funnel-optimization/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/optimizer-funnel.png",
        "alt_character": "The Optimizer"
    },
    "app/services/content-marketing/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/writer-content.png",
        "alt_character": "The Writer"
    },
    "app/services/marketing-automation/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/tech-automation.png",
        "alt_character": "The Tech Guy"
    },
    "app/services/consulting/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/advisor-wisdom.png",
        "alt_character": "The Advisor"
    },
    "app/services/skool-community/page.tsx": {
        "hero": "/heroes/detroit-skyline.png",
        "character": "/characters/community-builder.png",
        "alt_character": "The Community Builder"
    }
}

def has_hero_images(content):
    """Check if page already has hero background and character images"""
    has_hero_bg = 'heroes/' in content and 'absolute inset-0' in content
    has_character = 'characters/' in content and 'absolute right-0 bottom-0' in content
    return has_hero_bg and has_character

def add_hero_images(file_path, config):
    """Add hero background and character images to page"""
    with open(file_path, 'r') as f:
        content = f.read()

    # Check if already has hero images
    if has_hero_images(content):
        print(f"✓ {file_path} already has hero images")
        return False

    # Find the first section tag and add hero images
    # Look for patterns like: <section className="relative bg-gradient...
    # or <section className="bg-gradient...

    pattern = r'(<section className=")((?:relative )?bg-gradient[^"]+)(" text-white py-20[^>]*>)'

    def replacement(match):
        classes = match.group(2)
        if 'relative' not in classes and 'overflow-hidden' not in classes:
            classes = 'relative ' + classes
        if 'overflow-hidden' not in classes:
            classes = classes + ' overflow-hidden'

        # Change gradient colors to mobster theme
        classes = re.sub(r'from-gray-900 via-blue-900 to-gray-900', 'from-[#2a1a4a] via-[#1a1a2e] to-black', classes)
        classes = re.sub(r'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900', 'bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black', classes)

        hero_section = f'''{match.group(1)}{classes}{match.group(3)}
        {{/* Hero background image */}}
        <div className="absolute inset-0 opacity-20 z-0">
          <img src="{config['hero']}" alt="Cityscape" className="w-full h-full object-cover" style={{{{ objectPosition: "center center" }}}} />
        </div>

        {{/* Character image */}}
        <div className="absolute right-0 bottom-0 w-64 md:w-80 opacity-30 z-0">
          <img src="{config['character']}" alt="{config['alt_character']}" className="w-full h-auto" />
        </div>

        '''
        return hero_section

    # Try to replace
    new_content, count = re.subn(pattern, replacement, content, count=1)

    if count == 0:
        print(f"✗ Could not find section to update in {file_path}")
        return False

    # Also need to add relative z-10 to the content div
    # Look for the first div after the section
    new_content = re.sub(
        r'(<section className="[^"]*">\s*(?:{/\*.*?\*/}\s*<div[^>]*>\s*<img[^>]*>\s*</div>\s*){2})\s*(<div className="max-w)',
        r'\1\n        <\2 relative z-10',
        new_content,
        count=1
    )

    # Write back
    with open(file_path, 'w') as f:
        f.write(new_content)

    print(f"✓ Updated {file_path}")
    return True

# Process all pages
updated_count = 0
for file_path, config in page_configs.items():
    if os.path.exists(file_path):
        if add_hero_images(file_path, config):
            updated_count += 1
    else:
        print(f"⚠ File not found: {file_path}")

print(f"\nUpdated {updated_count} pages with hero images")
