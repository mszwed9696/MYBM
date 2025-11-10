#!/usr/bin/env python3
import os
import re
from pathlib import Path

def extract_featured_images(file_path):
    """Extract featured image src from a page.tsx file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Look for image src patterns that might be featured images
        # Exclude /heroes/ and /characters/ paths
        images = []

        # Pattern: src="/[path]/[filename]" but not heroes or characters
        matches = re.findall(r'src="(/(?!heroes/|characters/)[^"]+\.(?:png|jpg|jpeg|webp|svg))"', content)

        if matches:
            # Filter out common non-featured images
            for match in matches:
                # Skip logos, icons, and common UI elements
                if not any(x in match.lower() for x in ['logo', 'icon', 'favicon', '/svg/', '_next']):
                    images.append(match)

        return images if images else ["No featured images found"]
    except Exception as e:
        return [f"Error: {str(e)}"]

# Directory paths
base_dir = Path('/Users/mszwed9696/Desktop/MYBM')

print("=" * 80)
print("CURRENT FEATURED IMAGES BY PAGE")
print("=" * 80)
print()

# Homepage
print("HOMEPAGE:")
print("-" * 80)
homepage = base_dir / 'app' / 'page.tsx'
if homepage.exists():
    images = extract_featured_images(homepage)
    for img in images:
        print(f"/                                  → {img}")
print()

# Service pages
print("SERVICE PAGES:")
print("-" * 80)
services_dir = base_dir / 'app' / 'services'
if services_dir.exists():
    service_pages = sorted([d for d in services_dir.iterdir() if d.is_dir()])
    for service_dir in service_pages:
        page_file = service_dir / 'page.tsx'
        if page_file.exists():
            service_name = service_dir.name
            images = extract_featured_images(page_file)
            for img in images:
                print(f"/services/{service_name:<25} → {img}")
print()

# Industry pages
print("INDUSTRY PAGES:")
print("-" * 80)
industries_dir = base_dir / 'app' / 'industries'
if industries_dir.exists():
    industry_pages = sorted([d for d in industries_dir.iterdir() if d.is_dir()])
    for industry_dir in industry_pages:
        page_file = industry_dir / 'page.tsx'
        if page_file.exists():
            industry_name = industry_dir.name
            images = extract_featured_images(page_file)
            for img in images:
                print(f"/industries/{industry_name:<22} → {img}")
print()

# Other important pages
print("OTHER PAGES:")
print("-" * 80)
other_pages = [
    ('about', 'app/about/page.tsx'),
    ('results', 'app/results/page.tsx'),
    ('guarantee', 'app/guarantee/page.tsx'),
    ('apply', 'app/apply/page.tsx'),
]

for page_name, page_path in other_pages:
    full_path = base_dir / page_path
    if full_path.exists():
        images = extract_featured_images(full_path)
        for img in images:
            print(f"/{page_name:<29} → {img}")
print()

print("=" * 80)
