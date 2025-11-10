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

def remove_motion_from_hero_text(content):
    """
    Replace motion.div, motion.h1, motion.p with regular elements in hero sections.
    Remove initial, animate, transition props.
    Keep character/hero image animations intact.
    """

    # Pattern to match motion component opening tags with their props
    # This matches: <motion.TAG ... initial={{...}} animate={{...}} transition={{...}}>

    # Replace motion.div with div (for badges and button wrappers in hero)
    content = re.sub(
        r'<motion\.div\s+className="inline-block[^>]*?"[^>]*?initial=\{\{[^}]+\}\}[^>]*?animate=\{\{[^}]+\}\}[^>]*?transition=\{\{[^}]+\}\}[^>]*?>',
        lambda m: '<div' + m.group(0).split('motion.div')[1].split('initial=')[0].rstrip() + '>',
        content,
        flags=re.DOTALL
    )

    # Replace motion.h1 with h1
    content = re.sub(
        r'<motion\.h1\s+className="[^"]*?"[^>]*?style=\{\{[^}]+\}\}[^>]*?initial=\{\{[^}]+\}\}[^>]*?animate=\{\{[^}]+\}\}[^>]*?transition=\{\{[^}]+\}\}[^>]*?>',
        lambda m: '<h1 className="' + re.search(r'className="([^"]*?)"', m.group(0)).group(1) + '" style={' + re.search(r'style=(\{\{[^}]+\}\})', m.group(0)).group(1) + '}>',
        content,
        flags=re.DOTALL
    )

    # Replace motion.p with p
    content = re.sub(
        r'<motion\.p\s+className="[^"]*?"[^>]*?style=\{\{[^}]+\}\}[^>]*?initial=\{\{[^}]+\}\}[^>]*?animate=\{\{[^}]+\}\}[^>]*?transition=\{\{[^}]+\}\}[^>]*?>',
        lambda m: '<p className="' + re.search(r'className="([^"]*?)"', m.group(0)).group(1) + '" style={' + re.search(r'style=(\{\{[^}]+\}\})', m.group(0)).group(1) + '}>',
        content,
        flags=re.DOTALL
    )

    # Replace closing tags
    content = content.replace('</motion.div>', '</div>')
    content = content.replace('</motion.h1>', '</h1>')
    content = content.replace('</motion.p>', '</p>')

    return content

print("=" * 80)
print("FIXING ALL HERO SECTIONS - REMOVING OPACITY:0 ANIMATIONS")
print("=" * 80)
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
        content = remove_motion_from_hero_text(content)

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
