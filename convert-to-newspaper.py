#!/usr/bin/env python3
"""
Convert all MYBM pages to black and white newspaper aesthetic
while preserving mobster-themed copy.
"""

import os
import re

# Color replacements - convert from gold/red to black/white/gray
COLOR_REPLACEMENTS = {
    # Gold colors to black
    r'#FFD700': '#000000',
    r'text-\[#FFD700\]': 'text-black',
    r'hover:text-\[#FFD700\]': 'hover:text-newspaper-dark-gray',
    r'border-\[#FFD700\]': 'border-black',

    # Dark red colors to black
    r'#8B0000': '#000000',
    r'#a00000': '#333333',
    r'bg-\[#8B0000\]': 'bg-black',
    r'from-\[#8B0000\]': 'from-black',
    r'to-\[#5a0000\]': 'to-newspaper-charcoal',

    # Dark backgrounds to white/cream
    r'bg-gradient-to-br from-\[#1a1a2e\] via-\[#2a1a4a\] to-black': 'bg-white',
    r'bg-gradient-to-br from-\[#1a1a2e\] to-black': 'bg-white',
    r'bg-gradient-to-br from-\[#2a2a2a\] to-\[#1a1a1a\]': 'bg-newspaper-cream',
    r'bg-gradient-to-br from-\[#1a1a1a\] to-black': 'bg-white',
    r'from-\[#1a1a2e\] to-\[#2a1a4a\]': 'from-white to-newspaper-light-gray',

    # Text colors - white/gray to black
    r'text-white drop-shadow-lg': 'text-black',
    r'text-white': 'text-black',
    r'text-gray-200': 'text-black',
    r'text-gray-300': 'text-newspaper-charcoal',
    r'text-gray-400': 'text-newspaper-dark-gray',

    # Border colors
    r'border-\[#FFD700\]/30': 'border-black',
    r'border-\[#FFD700\]/20': 'border-black',
    r'border-\[#8B0000\]/30': 'border-black',
}

# Typography replacements - add newspaper fonts
TYPOGRAPHY_REPLACEMENTS = {
    r'style=\{\{ fontFamily: "\'Georgia\', serif" \}\}': 'className="font-newspaper"',
    r'font-bold': 'font-newspaper font-bold',
    r'font-semibold': 'font-newspaper font-semibold',
}

def convert_file_to_newspaper(filepath):
    """Convert a single TSX file to newspaper aesthetic."""
    print(f"Processing: {filepath}")

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Apply color replacements
        for old_color, new_color in COLOR_REPLACEMENTS.items():
            content = re.sub(old_color, new_color, content)

        # Add border styling for newspaper look
        # Convert hover states
        content = re.sub(
            r'hover:bg-\[#FFD700\]/10',
            'hover:bg-newspaper-light-gray',
            content
        )

        # Convert background opacities
        content = re.sub(r'bg-black/60', 'bg-white border-3 border-black', content)
        content = re.sub(r'bg-black/50', 'bg-white border-2 border-black', content)

        # Add grayscale filter to images
        if 'style={{ filter:' not in content:
            content = re.sub(
                r'<img\s+src="/characters/',
                '<img style={{ filter: "grayscale(100%) contrast(1.2)" }} src="/characters/',
                content
            )
            content = re.sub(
                r'<img\s+src="/heroes/',
                '<img style={{ filter: "grayscale(100%) contrast(1.2)" }} src="/heroes/',
                content
            )

        # Only write if changes were made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✓ Updated: {filepath}")
            return True
        else:
            print(f"  - No changes needed: {filepath}")
            return False

    except Exception as e:
        print(f"  ✗ Error processing {filepath}: {e}")
        return False

def main():
    """Convert all relevant TSX files to newspaper aesthetic."""
    base_dir = "/Users/mszwed9696/Desktop/MYBM/app"

    # Find all .tsx files (excluding layout files and broken files)
    tsx_files = []
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.tsx') and not file.endswith('-broken.tsx') and not file.endswith('layout.tsx'):
                filepath = os.path.join(root, file)
                tsx_files.append(filepath)

    print(f"\nFound {len(tsx_files)} TSX files to process\n")
    print("=" * 60)

    updated_count = 0
    for filepath in tsx_files:
        if convert_file_to_newspaper(filepath):
            updated_count += 1

    print("=" * 60)
    print(f"\n✅ Conversion complete!")
    print(f"   Updated: {updated_count} files")
    print(f"   Total processed: {len(tsx_files)} files")

if __name__ == "__main__":
    main()
