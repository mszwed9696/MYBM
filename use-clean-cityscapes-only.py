#!/usr/bin/env python3
"""
Replace Gemini images (with baked-in characters) with clean cityscape images
Keep dark mobster theme overlays
"""
from pathlib import Path
import re

# Map pages to clean cityscape images (NO characters in the image)
page_to_cityscape = {
    'app/page.tsx': 'philadelphia-skyline.png',
    'app/services/fractional-cmo/page.tsx': 'european-street.png',
    'app/services/paid-advertising/page.tsx': 'vegas-strip.png',
    'app/services/marketing-strategy/page.tsx': 'chicago-bean.png',
    'app/services/funnel-optimization/page.tsx': 'detroit-skyline.png',
    'app/services/content-marketing/page.tsx': 'portland-mountain.png',
    'app/services/marketing-automation/page.tsx': 'detroit-skyline.png',
    'app/services/consulting/page.tsx': 'docks-deal.png',

    'app/industries/coaches/page.tsx': 'phoenix-desert.png',
    'app/industries/consultants/page.tsx': 'chicago-bean.png',
    'app/industries/course-creators/page.tsx': 'detroit-skyline.png',
    'app/industries/service-businesses/page.tsx': 'european-street.png',
    'app/industries/product-businesses/page.tsx': 'portland-mountain.png',
    'app/industries/saas/page.tsx': 'hollywood-mansion.png',

    'app/about/page.tsx': 'dc-monument.png',
    'app/guarantee/page.tsx': 'philadelphia-skyline.png',
    'app/apply/page.tsx': 'vegas-strip.png',
    'app/blog/page.tsx': 'chicago-bean.png',
    'app/privacy/page.tsx': 'detroit-skyline.png',
    'app/terms/page.tsx': 'european-street.png',
}

updated_count = 0

for page_path, cityscape_image in page_to_cityscape.items():
    page_file = Path(page_path)

    if not page_file.exists():
        print(f"⚠️  Skipping {page_path} (not found)")
        continue

    content = page_file.read_text()
    original = content

    # Replace Gemini images with clean cityscape images
    content = re.sub(
        r'src="/heroes/Gemini_Generated_Image_[^"]+\.png"',
        f'src="/heroes/{cityscape_image}"',
        content
    )

    # Remove character overlay elements
    lines = content.split('\n')
    new_lines = []
    skip_until_closing = 0

    for i, line in enumerate(lines):
        # Check if this is a character motion.div opening
        if '<motion.div' in line and skip_until_closing == 0:
            # Look ahead to see if this contains a character image
            check_ahead = '\n'.join(lines[i:min(i+15, len(lines))])
            if '/characters/' in check_ahead and 'alt=' in check_ahead:
                # This is a character overlay - start skipping
                skip_until_closing = 1
                continue

        # Track nested divs
        if skip_until_closing > 0:
            if '<motion.div' in line or '<div' in line:
                skip_until_closing += 1
            if '</motion.div>' in line or '</div>' in line:
                skip_until_closing -= 1
            continue

        new_lines.append(line)

    content = '\n'.join(new_lines)

    # Keep strong dark overlays for mobster theme
    # Ensure gradients are dark: from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70
    content = re.sub(
        r'from-\[#2a1a4a\]/\d+\s+via-\[#1a1a2e\]/\d+\s+to-black/\d+',
        'from-[#2a1a4a]/60 via-[#1a1a2e]/50 to-black/70',
        content
    )

    if content != original:
        page_file.write_text(content)
        print(f"✓ Updated: {page_path}")
        print(f"   → {cityscape_image} (clean cityscape, no characters)")
        updated_count += 1

# Update ResultsHero component
results_hero = Path('components/ResultsHero.tsx')
if results_hero.exists():
    content = results_hero.read_text()
    original = content

    # Replace Gemini image
    content = re.sub(
        r'src="/heroes/Gemini_Generated_Image_[^"]+\.png"',
        'src="/heroes/vegas-strip.png"',
        content
    )

    # Remove character overlay
    lines = content.split('\n')
    new_lines = []
    skip_until_closing = 0

    for i, line in enumerate(lines):
        if '<motion.div' in line and skip_until_closing == 0:
            check_ahead = '\n'.join(lines[i:min(i+10, len(lines))])
            if '/characters/' in check_ahead:
                skip_until_closing = 1
                continue

        if skip_until_closing > 0:
            if '<motion.div' in line or '<div' in line:
                skip_until_closing += 1
            if '</motion.div>' in line or '</div>' in line:
                skip_until_closing -= 1
            continue

        new_lines.append(line)

    content = '\n'.join(new_lines)

    if content != original:
        results_hero.write_text(content)
        print(f"✓ Updated: components/ResultsHero.tsx → vegas-strip.png")
        updated_count += 1

print(f"\n✅ Updated {updated_count} files")
print("\nResult:")
print("  • Clean cityscape images (NO baked-in characters)")
print("  • NO character overlays")
print("  • Dark mobster theme gradients preserved")
print("  • Cityscapes are now the pure centerpiece")
