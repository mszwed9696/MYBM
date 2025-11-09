#!/usr/bin/env python3
"""
Remove backgrounds from character images using AI
"""
import os
from pathlib import Path
from rembg import remove
from PIL import Image

# Character images directory
characters_dir = Path("public/characters")

# List of character image files
character_files = [
    "boss-city-hall.png",
    "banker-briefcase.png",
    "enforcer-statue.png",
    "driver-vintage-car.png",
    "bagman-money.png",
    "muscle-gym.png",
    "partner-contractor.png",
    "don-cigar-car.png"
]

print("🎭 Removing backgrounds from character images...\n")

for filename in character_files:
    input_path = characters_dir / filename

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
print("The character images now have transparent backgrounds.")
