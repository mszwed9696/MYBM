#!/usr/bin/env python3
"""
Remove backgrounds from hero images using AI
"""
import os
from pathlib import Path
from rembg import remove
from PIL import Image

# Hero images directory
heroes_dir = Path("public/heroes")

# List of hero image files to process
hero_files = [
    "dc-monument.png",
    "hollywood-mansion.png",
    "chicago-bean.png",
    "portland-mountain.png",
    "vegas-strip.png",
    "docks-deal.png",
    "phoenix-desert.png",
    "casino-vip.png",
    "european-street.png",
    "detroit-skyline.png"
]

print("🎭 Removing backgrounds from hero images...\n")

for filename in hero_files:
    input_path = heroes_dir / filename

    if not input_path.exists():
        print(f"⚠️  Skipping {filename} (not found)")
        continue

    print(f"Processing {filename}...", end=" ")

    try:
        # Open the image
        input_image = Image.open(input_path)

        # Remove background using AI
        output_image = remove(input_image)

        # Save back to the same file
        output_image.save(input_path)

        print("✓ Background removed")

    except Exception as e:
        print(f"✗ Error: {e}")

print("\n✅ Background removal complete!")
print("All hero images now have transparent backgrounds.")
