#!/usr/bin/env python3
"""
Fix text contrast issues - change light text on light backgrounds to dark text
"""
from pathlib import Path
import re

# Find all page.tsx files
pages = list(Path('app').glob('**/page.tsx'))
pages.append(Path('app/page.tsx'))

updated_count = 0
changes_log = []

for page_file in pages:
    if not page_file.exists():
        continue

    content = page_file.read_text()
    original = content
    page_name = str(page_file)
    changes_made = []

    # Pattern 1: text-white on bg-white or bg-gray-50
    # This is a major contrast issue - change to text-gray-900
    if 'bg-white' in content or 'bg-gray-50' in content or 'bg-gray-100' in content:
        # Find sections with light backgrounds and fix text colors within them
        lines = content.split('\n')
        in_light_section = False
        new_lines = []

        for i, line in enumerate(lines):
            # Detect light background sections
            if re.search(r'bg-(white|gray-50|gray-100)', line) and '<section' in line:
                in_light_section = True
            elif '</section>' in line:
                in_light_section = False

            # Within light sections, fix text colors
            if in_light_section or re.search(r'bg-(white|gray-50|gray-100)', line):
                # Fix headings: text-white → text-gray-900
                if 'text-white' in line and not 'bg-black' in line and not 'bg-gradient' in line:
                    line = line.replace('text-white', 'text-gray-900')
                    if page_name not in [c['page'] for c in changes_log]:
                        changes_made.append("Fixed white text on light backgrounds")

                # Fix paragraph text: text-gray-300 → text-gray-700
                if 'text-gray-300' in line:
                    line = line.replace('text-gray-300', 'text-gray-700')
                    if "Fixed gray-300" not in changes_made:
                        changes_made.append("Fixed gray-300 → gray-700 for better contrast")

                # Fix light gray text: text-gray-200 → text-gray-700
                if 'text-gray-200' in line:
                    line = line.replace('text-gray-200', 'text-gray-700')
                    if "Fixed gray-200" not in changes_made:
                        changes_made.append("Fixed gray-200 → gray-700 for better contrast")

                # Fix very light gray: text-gray-400 → text-gray-600
                if 'text-gray-400' in line:
                    line = line.replace('text-gray-400', 'text-gray-600')
                    if "Fixed gray-400" not in changes_made:
                        changes_made.append("Fixed gray-400 → gray-600 for better contrast")

            new_lines.append(line)

        content = '\n'.join(new_lines)

    # Write if changes were made
    if content != original:
        page_file.write_text(content)
        updated_count += 1
        changes_log.append({'page': page_name, 'changes': changes_made})
        print(f"✓ Fixed: {page_name}")
        for change in changes_made:
            print(f"  - {change}")

print(f"\n✅ Fixed contrast issues in {updated_count} files")
