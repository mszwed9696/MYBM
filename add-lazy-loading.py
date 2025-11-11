#!/usr/bin/env python3
"""
Add lazy loading attributes to all images across the MYBM site for mobile optimization
Excludes critical above-the-fold images like header/footer logos
"""

import os
import re

# Directories to process
directories = [
    '/Users/mszwed9696/Desktop/MYBM/app',
]

# Images that should NOT be lazy loaded (critical above-the-fold content)
critical_images = [
    'myb-logo-gold.png',  # Header/footer logo
]

def should_skip_lazy_loading(img_tag):
    """Check if this image should skip lazy loading"""
    for critical in critical_images:
        if critical in img_tag:
            return True
    # Skip if already has loading attribute
    if 'loading=' in img_tag:
        return True
    return False

def add_lazy_loading_to_file(filepath):
    """Add lazy loading to img tags in a file"""
    with open(filepath, 'r') as f:
        content = f.read()

    original_content = content
    changes_made = False

    # Find all img tags
    img_pattern = r'<img\s+([^>]*?)/?>'

    def add_loading_attr(match):
        nonlocal changes_made
        img_tag = match.group(0)

        # Skip if this is a critical image or already has loading
        if should_skip_lazy_loading(img_tag):
            return img_tag

        # Add loading="lazy" before the closing >
        if img_tag.endswith('/>'):
            new_tag = img_tag[:-2] + ' loading="lazy" />'
        else:
            new_tag = img_tag[:-1] + ' loading="lazy">'

        changes_made = True
        return new_tag

    content = re.sub(img_pattern, add_loading_attr, content)

    if changes_made:
        with open(filepath, 'w') as f:
            f.write(content)
        return True

    return False

# Process all files
files_updated = 0
for directory in directories:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                if add_lazy_loading_to_file(filepath):
                    files_updated += 1
                    print(f"✓ Updated: {filepath}")

print(f"\n✅ Added lazy loading to {files_updated} files")
