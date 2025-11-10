#!/usr/bin/env python3
import os
import re
from pathlib import Path

def extract_hero_image(file_path):
    """Extract hero image src from a page.tsx file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Look for image src in hero sections
        # Pattern: src="/heroes/[filename].png"
        match = re.search(r'src="(/heroes/[^"]+\.(?:png|jpg|jpeg|webp))"', content)
        if match:
            return match.group(1).replace('/heroes/', '')

        return "No hero image found"
    except Exception as e:
        return f"Error: {str(e)}"

# Directory paths
base_dir = Path('/Users/mszwed9696/Desktop/MYBM')

print("=" * 80)
print("CURRENT HERO IMAGES BY PAGE")
print("=" * 80)
print()

# Homepage
print("HOMEPAGE:")
print("-" * 80)
homepage = base_dir / 'app' / 'page.tsx'
if homepage.exists():
    image = extract_hero_image(homepage)
    print(f"/                                  → {image}")
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
            image = extract_hero_image(page_file)
            print(f"/services/{service_name:<25} → {image}")
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
            image = extract_hero_image(page_file)
            print(f"/industries/{industry_name:<22} → {image}")
print()

# Other important pages
print("OTHER PAGES:")
print("-" * 80)
other_pages = [
    ('about', 'app/about/page.tsx'),
    ('results', 'app/results/page.tsx'),
    ('guarantee', 'app/guarantee/page.tsx'),
    ('apply', 'app/apply/page.tsx'),
    ('contact', 'app/contact/page.tsx'),
]

for page_name, page_path in other_pages:
    full_path = base_dir / page_path
    if full_path.exists():
        image = extract_hero_image(full_path)
        print(f"/{page_name:<29} → {image}")
print()

# Check for ResultsHero component
print("COMPONENTS:")
print("-" * 80)
results_hero = base_dir / 'components' / 'ResultsHero.tsx'
if results_hero.exists():
    image = extract_hero_image(results_hero)
    print(f"components/ResultsHero.tsx        → {image}")
print()

print("=" * 80)
print("Copy the list above and tell me which images should replace each one.")
print("=" * 80)
