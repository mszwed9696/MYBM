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

def fix_hero_visibility(content):
    """
    Replace motion.div/h1/p with regular div/h1/p in hero sections to ensure visibility.
    Keep framer-motion for the character image animation only.
    """

    lines = content.split('\n')
    fixed_lines = []
    in_hero_section = False
    in_hero_text_area = False

    for i, line in enumerate(lines):
        # Detect hero section start
        if 'Hero Section' in line and '/*' in line:
            in_hero_section = True

        # Detect the text content area (after the character image)
        if in_hero_section and 'max-w-7xl mx-auto' in line:
            in_hero_text_area = True

        # End of hero section
        if in_hero_section and '</section>' in line:
            in_hero_section = False
            in_hero_text_area = False

        # Fix motion components in hero text area (but NOT the character image)
        if in_hero_text_area and 'motion.' in line and 'characters/' not in line:
            # Skip motion. for text elements - replace with regular elements
            if '<motion.div' in line:
                # Remove motion props and just use regular div
                line = re.sub(r'<motion\.div', '<div', line)
            elif '<motion.h1' in line:
                line = re.sub(r'<motion\.h1', '<h1', line)
            elif '<motion.p' in line:
                line = re.sub(r'<motion\.p', '<p', line)
            elif '</motion.div>' in line:
                line = line.replace('</motion.div>', '</div>')
            elif '</motion.h1>' in line:
                line = line.replace('</motion.h1>', '</h1>')
            elif '</motion.p>' in line:
                line = line.replace('</motion.p>', '</p>')
            # Remove framer-motion props
            elif 'initial={{' in line or 'animate={{' in line or 'transition={{' in line:
                # Skip these lines - they're motion props we don't need
                continue

        fixed_lines.append(line)

    return '\n'.join(fixed_lines)

print("=" * 80)
print("FIXING HERO SECTION VISIBILITY")
print("=" * 80)
print()
print("Removing Framer Motion from hero text to ensure immediate visibility...")
print("(Keeping character image animations)")
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
        content = fix_hero_visibility(content)

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
