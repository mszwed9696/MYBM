#!/usr/bin/env python3
"""
Fix duplicate style attributes that span multiple lines
"""
from pathlib import Path
import re

# Get all page.tsx files
pages = list(Path('app').glob('**/page.tsx'))

fixed_count = 0

for page_file in pages:
    content = page_file.read_text()
    original = content

    # Pattern to match duplicate style attributes across lines
    # Match: style={{ fontFamily: "'Georgia', serif" }}\n  ...  style={{ fontFamily: "'Georgia', serif", ...other... }}
    # This regex finds the simpler version followed by a more complete version

    content = re.sub(
        r'style=\{\{\s*fontFamily:\s*["\']\\?\'?Georgia\\?\'?,\s*serif["\']\s*\}\}\s*\n(\s*)style=\{\{',
        r'\1style={{',
        content,
        flags=re.MULTILINE
    )

    # Write if changes were made
    if content != original:
        page_file.write_text(content)
        print(f"✓ Fixed: {page_file}")
        fixed_count += 1

print(f"\n✅ Fixed {fixed_count} files")
