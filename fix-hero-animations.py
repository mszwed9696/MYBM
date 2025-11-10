#!/usr/bin/env python3
import os
import re
from pathlib import Path

base_dir = Path('/Users/mszwed9696/Desktop/MYBM')

# Files to fix
files_to_fix = [
    'app/services/consulting/page.tsx',
    'app/services/content-marketing/page.tsx',
    'app/services/fractional-cmo/page.tsx',
    'app/services/funnel-optimization/page.tsx',
    'app/services/marketing-automation/page.tsx',
    'app/services/marketing-strategy/page.tsx',
    'app/services/paid-advertising/page.tsx',
    'app/services/skool-community/page.tsx',
    'app/industries/coaches/page.tsx',
    'app/industries/consultants/page.tsx',
    'app/industries/course-creators/page.tsx',
    'app/industries/product-businesses/page.tsx',
    'app/industries/saas/page.tsx',
    'app/industries/service-businesses/page.tsx',
]

def fix_hero_animations(content):
    """Replace animate prop with whileInView to ensure animations trigger"""

    # Replace animate={{ with whileInView={{
    content = re.sub(
        r'\banimate=\{\{',
        'whileInView={{',
        content
    )

    # Add viewport prop after transition prop in motion components
    # This ensures animations trigger when elements are in view
    def add_viewport(match):
        full_match = match.group(0)
        # Check if viewport already exists
        if 'viewport=' in full_match:
            return full_match
        # Add viewport before closing >
        return full_match.replace(
            '>',
            '\n              viewport={{ once: true, amount: 0.3 }}\n            >',
            1
        )

    # Find motion.div and motion.h1, motion.p with transition prop but no viewport
    content = re.sub(
        r'<motion\.(div|h1|p)\s+.*?transition=\{\{[^}]+\}\}\s*>',
        add_viewport,
        content,
        flags=re.DOTALL
    )

    return content

print("=" * 80)
print("FIXING HERO SECTION ANIMATIONS")
print("=" * 80)
print()
print("Replacing 'animate' with 'whileInView' to ensure visibility...")
print()

fixed_count = 0
for file_path in files_to_fix:
    full_path = base_dir / file_path
    if not full_path.exists():
        print(f"⚠️  File not found: {file_path}")
        continue

    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        content = fix_hero_animations(content)

        if content != original_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Fixed: {file_path}")
            fixed_count += 1
        else:
            print(f"ℹ️  No changes needed: {file_path}")

    except Exception as e:
        print(f"❌ Error: {file_path} - {str(e)}")

print()
print("=" * 80)
print(f"✅ Fixed {fixed_count}/{len(files_to_fix)} files")
print("=" * 80)
print()
print("Next: Restart dev server to see changes")
