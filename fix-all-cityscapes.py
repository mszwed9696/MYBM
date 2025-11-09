#!/usr/bin/env python3
"""
Update all hero sections to show FULL cityscapes (not cropped)
"""
from pathlib import Path
import re

# Find all page.tsx files
pages = list(Path('app').glob('**/page.tsx'))

updated_count = 0

for page_file in pages:
    content = page_file.read_text()
    original = content

    # Change object-cover to object-contain for hero images
    content = content.replace(
        'className="w-full h-full object-cover"',
        'className="w-full h-full object-contain"'
    )

    # Add flex centering to background containers
    content = content.replace(
        '<div className="absolute inset-0 z-0">',
        '<div className="absolute inset-0 z-0 flex items-center justify-center">'
    )

    # Only write if changes were made
    if content != original:
        page_file.write_text(content)
        print(f"✓ Updated: {page_file}")
        updated_count += 1

print(f"\n✅ Updated {updated_count} pages to show full cityscapes!")
print("\nChanges:")
print("  • object-cover → object-contain (shows entire image)")
print("  • Added flex centering for proper image display")
print("  • Characters remain as overlays")
