#!/usr/bin/env python3
"""
Update ALL hero sections to use Gemini cityscape images with object-cover
"""
from pathlib import Path
import re

# Map each page to a unique Gemini cityscape
page_to_cityscape = {
    'app/services/fractional-cmo/page.tsx': 'Gemini_Generated_Image_1lqyf51lqyf51lqy.png',
    'app/services/paid-advertising/page.tsx': 'Gemini_Generated_Image_29pmsb29pmsb29pm.png',
    'app/services/marketing-strategy/page.tsx': 'Gemini_Generated_Image_2o59832o59832o59.png',
    'app/services/funnel-optimization/page.tsx': 'Gemini_Generated_Image_4195ak4195ak4195.png',
    'app/services/content-marketing/page.tsx': 'Gemini_Generated_Image_4dzuvr4dzuvr4dzu.png',
    'app/services/marketing-automation/page.tsx': 'Gemini_Generated_Image_5g58tb5g58tb5g58.png',
    'app/services/consulting/page.tsx': 'Gemini_Generated_Image_5jsses5jsses5jss.png',

    'app/industries/coaches/page.tsx': 'Gemini_Generated_Image_5p6y6h5p6y6h5p6y.png',
    'app/industries/consultants/page.tsx': 'Gemini_Generated_Image_68kp2z68kp2z68kp.png',
    'app/industries/course-creators/page.tsx': 'Gemini_Generated_Image_6u49bp6u49bp6u49.png',
    'app/industries/service-businesses/page.tsx': 'Gemini_Generated_Image_951cpn951cpn951c.png',
    'app/industries/product-businesses/page.tsx': 'Gemini_Generated_Image_an9k1ian9k1ian9k.png',
    'app/industries/saas/page.tsx': 'Gemini_Generated_Image_aopvueaopvueaopv.png',

    'app/about/page.tsx': 'Gemini_Generated_Image_b7f0mnb7f0mnb7f0.png',
    'app/results/page.tsx': 'Gemini_Generated_Image_b7xmilb7xmilb7xm.png',
    'app/guarantee/page.tsx': 'Gemini_Generated_Image_c5f5mxc5f5mxc5f5.png',
    'app/apply/page.tsx': 'Gemini_Generated_Image_c7ujjpc7ujjpc7uj.png',
    'app/blog/page.tsx': 'Gemini_Generated_Image_dipn3bdipn3bdipn.png',
    'app/privacy/page.tsx': 'Gemini_Generated_Image_dlodzvdlodzvdlod.png',
    'app/terms/page.tsx': 'Gemini_Generated_Image_dy38gmdy38gmdy38.png',
}

updated_count = 0

for page_path, cityscape_image in page_to_cityscape.items():
    page_file = Path(page_path)

    if not page_file.exists():
        print(f"⚠️  Skipping {page_path} (not found)")
        continue

    content = page_file.read_text()
    original = content

    # Find the hero image div and replace with proper object-cover setup
    # Match: <img src="/heroes/ANYTHING.png" ... className="w-full h-full object-contain" />

    # Pattern 1: Replace object-contain with object-cover
    content = re.sub(
        r'className="w-full h-full object-contain"',
        'className="w-full h-full object-cover"',
        content
    )

    # Pattern 2: Replace the image src to use the Gemini cityscape
    # Find any /heroes/*.png and replace with our assigned Gemini image
    content = re.sub(
        r'src="/heroes/[^"]+\.png"',
        f'src="/heroes/{cityscape_image}"',
        content
    )

    # Pattern 3: Add objectPosition if the img has a style attribute but no objectPosition
    # This ensures the sunset/important parts are visible
    if 'style={{' in content and 'object-cover' in content:
        # Add objectPosition: 'center center' to img tags that don't have it
        content = re.sub(
            r'(<img[^>]+className="[^"]*object-cover[^"]*"[^>]*?)(/?>)',
            r'\1 style={{ objectPosition: "center center" }}\2',
            content
        )

    # Write if changes were made
    if content != original:
        page_file.write_text(content)
        print(f"✓ Updated: {page_path}")
        print(f"   → Using: {cityscape_image}")
        updated_count += 1

print(f"\n✅ Updated {updated_count} pages with Gemini cityscapes!")
print("\nChanges:")
print("  • object-contain → object-cover (fills entire hero section)")
print("  • Each page assigned unique Gemini cityscape image")
print("  • Added objectPosition: 'center center' for proper display")
