#!/bin/bash

echo "🌆 Updating all hero sections to show FULL cityscapes (not cropped)..."
echo ""

# Update all TSX files to change object-cover to object-contain for hero images
# This ensures the full cityscape is visible, not cropped

files_updated=0

# Find all page files with hero images
for file in app/**/*.tsx components/*.tsx; do
  if [ -f "$file" ] && grep -q "object-cover" "$file" 2>/dev/null; then
    echo "Updating: $file"

    # Change object-cover to object-contain for hero cityscape backgrounds
    sed -i '' 's/className="w-full h-full object-cover"/className="w-full h-full object-contain"/g' "$file"

    # Also update any flex centering for backgrounds
    sed -i '' 's/<div className="absolute inset-0 z-0">/<div className="absolute inset-0 z-0 flex items-center justify-center">/g' "$file"

    ((files_updated++))
  fi
done

echo ""
echo "✅ Updated $files_updated files to show full cityscapes"
echo ""
echo "Changes made:"
echo "  • object-cover → object-contain (shows full image, no cropping)"
echo "  • Added flex centering to background containers"
echo "  • Characters remain as overlays with transparent backgrounds"
echo ""
echo "Next: Save Image #2 (Philadelphia skyline) to:"
echo "  public/heroes/philadelphia-skyline.png"
