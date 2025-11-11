#!/usr/bin/env python3
import os
import re

# Define the root directory
root_dir = "/Users/mszwed9696/Desktop/MYBM/app"

# Color replacements
replacements = [
    # Background colors
    (r'bg-gray-900', 'bg-gradient-to-br from-[#1a1a2e] to-black'),
    (r'className="py-20 bg-gradient-to-r from-\[#1a1a2e\] to-black text-white"',
     'className="py-20 bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-[#8B0000] text-white"'),

    # Blue accents to gold
    (r'text-blue-400', 'text-[#FFD700]'),
    (r'text-blue-100', 'text-gray-200'),
    (r'text-blue-600', 'text-[#FFD700]'),
    (r'border-blue-600', 'border-[#FFD700]'),
    (r'bg-blue-50', 'bg-[#2a1a4a]/10'),

    # Update CTA buttons with yellow text
    (r'Get Your Funnel Audit', 'Get Your Funnel Audit'),
]

def fix_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Apply all replacements
        for old, new in replacements:
            content = re.sub(old, new, content)

        # Only write if changes were made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Updated: {filepath}")
            return True
        return False
    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")
        return False

# Process all TypeScript/TSX files
updated_files = 0
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            if fix_file(filepath):
                updated_files += 1

print(f"\n✅ Updated {updated_files} files")
