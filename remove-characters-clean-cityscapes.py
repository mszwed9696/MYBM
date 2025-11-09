#!/usr/bin/env python3
"""
Remove character overlays and use clean cityscape images without characters
"""
from pathlib import Path
import re

# Map pages to clean cityscape images (without characters)
page_to_cityscape = {
    'app/page.tsx': 'philadelphia-skyline.png',  # Keep homepage as is
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

    # Step 1: Replace Gemini images with clean cityscape images
    content = re.sub(
        r'src="/heroes/Gemini_Generated_Image_[^"]+\.png"',
        f'src="/heroes/{cityscape_image}"',
        content
    )

    # Step 2: Remove character overlay elements
    # Pattern: <motion.div ... character ... > ... </motion.div>
    # This removes the entire character overlay section

    # Find and remove character motion.div sections (greedy multi-line match)
    # Look for motion.div that contains character references
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

    # Step 3: Reduce gradient overlay opacity to make cityscape more visible
    content = re.sub(
        r'from-\[#2a1a4a\]/\d+\s+via-\[#1a1a2e\]/\d+\s+to-black/\d+',
        'from-[#2a1a4a]/30 via-[#1a1a2e]/20 to-black/40',
        content
    )

    # Write if changes were made
    if content != original:
        page_file.write_text(content)
        print(f"✓ Updated: {page_path}")
        print(f"   → Using: {cityscape_image} (no characters)")
        updated_count += 1

# Also update ResultsHero component
results_hero = Path('components/ResultsHero.tsx')
if results_hero.exists():
    content = results_hero.read_text()
    original = content

    # Replace Gemini image with vegas-strip
    content = re.sub(
        r'src="/heroes/Gemini_Generated_Image_[^"]+\.png"',
        'src="/heroes/vegas-strip.png"',
        content
    )

    # Remove character
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
        print(f"✓ Updated: components/ResultsHero.tsx")
        updated_count += 1

print(f"\n✅ Updated {updated_count} files")
print("\nChanges:")
print("  • Replaced Gemini images (with characters) → Clean cityscapes (no characters)")
print("  • Removed all character overlay elements")
print("  • Reduced gradient overlay opacity for better cityscape visibility")
print("  • Cityscapes are now the pure centerpiece of hero sections")
