#!/usr/bin/env python3
"""
Fix duplicate style attributes caused by Python script
"""
from pathlib import Path
import re

files_to_fix = [
    'app/services/paid-advertising/page.tsx',
    'app/services/fractional-cmo/page.tsx',
    'app/services/marketing-strategy/page.tsx',
    'app/industries/consultants/page.tsx',
    'app/industries/coaches/page.tsx',
    'app/apply/page.tsx'
]

fixed_count = 0

for file_path in files_to_fix:
    full_path = Path(file_path)
    if not full_path.exists():
        print(f"⚠️  Skipping {file_path} (not found)")
        continue

    content = full_path.read_text()
    original = content

    # Pattern to find duplicate style attributes on the same line
    # Match: style={{ fontFamily: "'Georgia', serif" }} style={{ ...anything... }}
    # Replace with just the second (more complete) style attribute

    # First, find lines with two style attributes
    lines = content.split('\n')
    new_lines = []

    for line in lines:
        # Count style= occurrences
        style_count = line.count('style={{')

        if style_count >= 2:
            # Remove the first occurrence of style={{ fontFamily: "'Georgia', serif" }}
            # This is the one added by our script that might be duplicate
            line = re.sub(
                r'style=\{\{\s*fontFamily:\s*["\']\\?\'?Georgia\\?\'?,\s*serif["\']\s*\}\}\s+',
                '',
                line
            )

        new_lines.append(line)

    content = '\n'.join(new_lines)

    # Write if changes were made
    if content != original:
        full_path.write_text(content)
        print(f"✓ Fixed: {file_path}")
        fixed_count += 1
    else:
        print(f"  No duplicates found in: {file_path}")

print(f"\n✅ Fixed {fixed_count} files")
