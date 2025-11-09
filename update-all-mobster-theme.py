#!/usr/bin/env python3
"""
Systematically update ALL pages to mobster theme
"""
from pathlib import Path
import re

# Find all page.tsx files
pages = list(Path('app').glob('**/page.tsx'))

# Exclude homepage (already perfect)
pages = [p for p in pages if str(p) != 'app/page.tsx']

updated_count = 0
changes_log = []

for page_file in pages:
    content = page_file.read_text()
    original = content
    page_name = str(page_file)

    changes_made = []

    # 1. Replace blue gradients with dark mobster colors
    if 'from-blue-600' in content or 'to-blue-800' in content:
        content = content.replace('from-blue-600', 'from-[#1a1a2e]')
        content = content.replace('to-blue-800', 'to-black')
        content = content.replace('from-blue-500', 'from-[#2a1a4a]')
        content = content.replace('to-blue-700', 'to-[#1a1a2e]')
        changes_made.append("Replaced blue gradients with dark mobster colors")

    # 2. Replace blue buttons with dark red mobster buttons
    if 'bg-blue-600' in content:
        content = content.replace('bg-blue-600', 'bg-[#8B0000] border-2 border-[#FFD700]')
        content = content.replace('hover:bg-blue-700', 'hover:bg-[#a00000]')
        content = content.replace('bg-blue-500', 'bg-[#8B0000] border-2 border-[#FFD700]')
        changes_made.append("Updated buttons to dark red with gold borders")

    # 3. Add mobster styling to sections that might be missing it
    # Replace generic white backgrounds with dark theme
    if 'bg-white' in content and 'relative' not in content:
        content = content.replace('bg-white', 'bg-gradient-to-b from-[#1a1a2e] to-black')
        changes_made.append("Replaced white backgrounds")

    # 4. Update text colors for dark backgrounds
    if 'text-gray-900' in content and ('bg-black' in content or 'from-[#1a1a2e]' in content):
        content = content.replace('text-gray-900', 'text-white')
        content = content.replace('text-gray-800', 'text-gray-100')
        content = content.replace('text-gray-700', 'text-gray-200')
        content = content.replace('text-gray-600', 'text-gray-300')
        changes_made.append("Updated text colors for dark theme")

    # 5. Ensure gold accents are used
    if 'text-blue-600' in content:
        content = content.replace('text-blue-600', 'text-[#FFD700]')
        changes_made.append("Updated accent colors to gold")

    # 6. Add Georgia fonts to h1/h2/h3 that don't have fontFamily
    # This is more complex, so we'll do targeted replacements
    content = re.sub(
        r'(className="[^"]*text-[45]xl[^"]*")',
        r'\1 style={{ fontFamily: "\'Georgia\', serif" }}',
        content
    )

    # Write if changes were made
    if content != original:
        page_file.write_text(content)
        updated_count += 1
        changes_log.append({
            'page': page_name,
            'changes': changes_made
        })
        print(f"✓ Updated: {page_name}")
        for change in changes_made:
            print(f"  - {change}")

print(f"\n✅ Updated {updated_count}/{len(pages)} pages")
print(f"\n📋 Summary:")
for entry in changes_log:
    print(f"\n{entry['page']}:")
    for change in entry['changes']:
        print(f"  - {change}")
