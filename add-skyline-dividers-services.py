#!/usr/bin/env python3
"""
Add skyline dividers to service pages after hero sections
"""
from pathlib import Path

service_pages = [
    "funnel-optimization",
    "content-marketing",
    "marketing-automation",
    "marketing-strategy",
    "paid-advertising"
]

services_dir = Path("app/services")

skyline_divider = '''
      {/* Skyline Divider */}
      <div className="relative -mt-1">
        <SkylineDivider className="text-white" />
      </div>
'''

for service in service_pages:
    page_file = services_dir / service / "page.tsx"

    if not page_file.exists():
        print(f"⚠️  Skipping {service} (file not found)")
        continue

    print(f"Adding skyline divider to {service}...", end=" ")

    try:
        content = page_file.read_text()

        # Check if skyline divider already exists
        if "SkylineDivider" in content and "{/* Skyline Divider */}" in content:
            print("⏭️  Already has divider")
            continue

        # Find the end of hero section
        # Look for </section> followed by a new section
        hero_end = "</section>\n\n      {/* "

        if hero_end in content:
            # Insert skyline divider
            content = content.replace(hero_end, "</section>\n" + skyline_divider + "\n      {/* ", 1)
            page_file.write_text(content)
            print("✓ Added")
        else:
            # Try alternate pattern
            hero_end_alt = "</section>\n\n      <section"
            if hero_end_alt in content:
                content = content.replace(hero_end_alt, "</section>\n" + skyline_divider + "\n      <section", 1)
                page_file.write_text(content)
                print("✓ Added")
            else:
                print("✗ Pattern not found")

    except Exception as e:
        print(f"✗ Error: {e}")

print("\n✅ Skyline dividers added to service pages!")
