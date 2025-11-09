# Hero Image Setup Instructions

## Required Images

To complete the hero section updates, please save these images:

### 1. Philadelphia Skyline Background (Image #2)
**Save to:** `public/heroes/philadelphia-skyline.png`
- This should be the FULL cityscape image with the Benjamin Franklin Bridge
- The image will be displayed using `object-contain` so the entire scene is visible (not cropped)

### 2. Character Images (Already Available)
The following character images are already in place with transparent backgrounds:
- `public/characters/don-cigar-car.png` - The Don (used on homepage)
- `public/characters/boss-city-hall.png` - The Boss
- `public/characters/muscle-gym.png` - The Muscle
- All other characters in `/public/characters/`

## How the Hero Works

The new hero structure:
1. **Full Cityscape Background** - Shows the complete cityscape image without cropping
2. **Character Overlay** - Character with transparent background positioned in front
3. **Subtle Gradient** - Light overlay for text readability

## CSS Changes Applied

- Changed from `object-cover` (which crops) to `object-contain` (shows full image)
- Background color fills any space around the cityscape
- Character has drop-shadow for depth

## Next Steps

1. Save the Philadelphia skyline image to the path above
2. The site will automatically use it on the homepage
3. All other pages already use full cityscapes with character overlays
