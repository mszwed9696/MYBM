#!/usr/bin/env python3
import os
import re
from pathlib import Path

# Mapping of pages to their image filenames (without extensions)
PAGE_IMAGES = {
    # Service pages
    'app/services/consulting/page.tsx': {
        'hero': 'consulting-hero',
        'character': 'consulting-character',
    },
    'app/services/content-marketing/page.tsx': {
        'hero': 'content-marketing-hero',
        'character': 'content-marketing-character',
    },
    'app/services/fractional-cmo/page.tsx': {
        'hero': 'fractional-cmo-hero',
        'character': 'fractional-cmo-character',
    },
    'app/services/funnel-optimization/page.tsx': {
        'hero': 'funnel-optimization-hero',
        'character': 'funnel-optimization-character',
    },
    'app/services/marketing-automation/page.tsx': {
        'hero': 'marketing-automation-hero',
        'character': 'marketing-automation-character',
    },
    'app/services/marketing-strategy/page.tsx': {
        'hero': 'marketing-strategy-hero',
        'character': 'marketing-strategy-character',
    },
    'app/services/paid-advertising/page.tsx': {
        'hero': 'paid-advertising-hero',
        'character': 'paid-advertising-character',
    },
    'app/services/skool-community/page.tsx': {
        'hero': 'skool-community-hero',
        'character': 'skool-community-character',
    },
    # Industry pages
    'app/industries/coaches/page.tsx': {
        'hero': 'coaches-hero',
        'character': 'coaches-character',
    },
    'app/industries/consultants/page.tsx': {
        'hero': 'consultants-hero',
        'character': 'consultants-character',
    },
    'app/industries/course-creators/page.tsx': {
        'hero': 'course-creators-hero',
        'character': 'course-creators-character',
    },
    'app/industries/product-businesses/page.tsx': {
        'hero': 'product-businesses-hero',
        'character': 'product-businesses-character',
    },
    'app/industries/saas/page.tsx': {
        'hero': 'saas-hero',
        'character': 'saas-character',
    },
    'app/industries/service-businesses/page.tsx': {
        'hero': 'service-businesses-hero',
        'character': 'service-businesses-character',
    },
}

base_dir = Path('/Users/mszwed9696/Desktop/MYBM')

def update_hero_image(content, hero_filename):
    """Update hero image src to use standardized filename"""
    # Pattern to match hero image src in /heroes/ directory
    pattern = r'src="/heroes/[^"]+\.(?:png|jpg|jpeg|webp)"'
    replacement = f'src="/heroes/{hero_filename}.png"'
    updated = re.sub(pattern, replacement, content)
    return updated

def update_character_image(content, character_filename):
    """Update character image src to use standardized filename"""
    # Pattern to match character image src in /characters/ directory
    pattern = r'src="/characters/[^"]+\.(?:png|jpg|jpeg|webp)"'
    replacement = f'src="/characters/{character_filename}.png"'
    updated = re.sub(pattern, replacement, content)
    return updated

def process_file(file_path, images):
    """Process a single file to update images"""
    full_path = base_dir / file_path
    if not full_path.exists():
        print(f"⚠️  File not found: {file_path}")
        return False

    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Update hero image
        if images['hero']:
            content = update_hero_image(content, images['hero'])

        # Update character image
        if images['character']:
            content = update_character_image(content, images['character'])

        # Only write if content changed
        if content != original_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Updated: {file_path}")
            return True
        else:
            print(f"ℹ️  No changes needed: {file_path}")
            return False

    except Exception as e:
        print(f"❌ Error processing {file_path}: {str(e)}")
        return False

# Main execution
print("=" * 80)
print("UPDATING ALL PAGES WITH STANDARDIZED IMAGE FILENAMES")
print("=" * 80)
print()

updated_count = 0
for file_path, images in PAGE_IMAGES.items():
    if process_file(file_path, images):
        updated_count += 1

print()
print("=" * 80)
print(f"✅ Update complete! {updated_count}/{len(PAGE_IMAGES)} files updated.")
print("=" * 80)
