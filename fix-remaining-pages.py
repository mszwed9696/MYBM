#!/usr/bin/env python3
import re
from pathlib import Path

base_dir = Path('/Users/mszwed9696/Desktop/MYBM')

files_to_fix = [
    'app/services/content-marketing/page.tsx',
    'app/services/funnel-optimization/page.tsx',
    'app/services/marketing-automation/page.tsx',
    'app/services/marketing-strategy/page.tsx',
    'app/services/paid-advertising/page.tsx',
    'app/industries/coaches/page.tsx',
    'app/industries/consultants/page.tsx',
    'app/industries/course-creators/page.tsx',
    'app/industries/product-businesses/page.tsx',
    'app/industries/saas/page.tsx',
    'app/industries/service-businesses/page.tsx',
]

def fix_motion_components(content):
    """Remove motion. prefix and animation props from hero text elements"""

    # Replace <motion.div with <div
    content = re.sub(r'<motion\.div(\s+)', r'<div\1', content)

    # Replace <motion.h1 with <h1
    content = re.sub(r'<motion\.h1(\s+)', r'<h1\1', content)

    # Replace <motion.p with <p
    content = re.sub(r'<motion\.p(\s+)', r'<p\1', content)

    # Replace closing tags
    content = content.replace('</motion.div>', '</div>')
    content = content.replace('</motion.h1>', '</h1>')
    content = content.replace('</motion.p>', '</p>')

    # Remove lines with animation props (initial, animate, transition)
    lines = content.split('\n')
    filtered_lines = []
    for line in lines:
        # Skip lines that only contain animation props
        stripped = line.strip()
        if (stripped.startswith('initial={{') or
            stripped.startswith('animate={{') or
            stripped.startswith('transition={{')):
            continue
        filtered_lines.append(line)

    return '\n'.join(filtered_lines)

print("=" * 80)
print("FIXING REMAINING PAGES - REMOVING MOTION COMPONENTS")
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
        content = fix_motion_components(content)

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
print("\nContent is now visible immediately on all hero sections!")
