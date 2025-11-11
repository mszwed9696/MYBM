#!/usr/bin/env python3
import re

# Map of files to their correct hero and character images
fixes = {
    "app/industries/coaches/page.tsx": {
        "hero": "heroes/coaches-hero.png",
        "character": "characters/coaches-character.png"
    },
    "app/industries/consultants/page.tsx": {
        "hero": "heroes/consultants-hero.png",
        "character": "characters/consultants-character.png"
    },
    "app/industries/course-creators/page.tsx": {
        "hero": "heroes/course-creators-hero.png",
        "character": "characters/course-creators-character.png"
    },
    "app/industries/service-businesses/page.tsx": {
        "hero": "heroes/service-businesses-hero.png",
        "character": "characters/service-businesses-character.png"
    },
    "app/industries/product-businesses/page.tsx": {
        "hero": "heroes/product-businesses-hero.png",
        "character": "characters/product-businesses-character.png"
    },
    "app/industries/saas/page.tsx": {
        "hero": "heroes/saas-hero.png",
        "character": "characters/saas-character.png"
    },
    "app/services/fractional-cmo/page.tsx": {
        "hero": "heroes/fractional-cmo-hero.png",
        "character": "characters/fractional-cmo-character.png"
    },
    "app/services/marketing-strategy/page.tsx": {
        "hero": "heroes/marketing-strategy-hero.png",
        "character": "characters/marketing-strategy-character.png"
    },
    "app/services/paid-advertising/page.tsx": {
        "hero": "heroes/paid-advertising-hero.png",
        "character": "characters/paid-advertising-character.png"
    },
    "app/services/funnel-optimization/page.tsx": {
        "hero": "heroes/funnel-optimization-hero.png",
        "character": "characters/funnel-optimization-character.png"
    },
    "app/services/content-marketing/page.tsx": {
        "hero": "heroes/content-marketing-hero.png",
        "character": "characters/content-marketing-character.png"
    },
    "app/services/marketing-automation/page.tsx": {
        "hero": "heroes/marketing-automation-hero.png",
        "character": "characters/marketing-automation-character.png"
    },
    "app/services/consulting/page.tsx": {
        "hero": "heroes/consulting-hero.png",
        "character": "characters/consulting-character.png"
    },
    "app/blog/page.tsx": {
        "hero": "heroes/philadelphia-skyline.png",
        "character": "characters/boss-city-hall.png"
    }
}

for file_path, images in fixes.items():
    try:
        with open(file_path, 'r') as f:
            content = f.read()

        # Replace hero image path
        content = re.sub(
            r'src="/heroes/[^"]*"',
            f'src="/{images["hero"]}"',
            content,
            count=1
        )

        # Replace character image path
        content = re.sub(
            r'src="/characters/[^"]*"',
            f'src="/{images["character"]}"',
            content,
            count=1
        )

        with open(file_path, 'w') as f:
            f.write(content)

        print(f"✓ Updated {file_path}")
    except FileNotFoundError:
        print(f"✗ File not found: {file_path}")
    except Exception as e:
        print(f"✗ Error updating {file_path}: {e}")

print("\n✓ All image paths updated!")
