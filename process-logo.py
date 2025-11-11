#!/usr/bin/env python3
from PIL import Image
import numpy as np

# Load the original logo
img = Image.open('/Users/mszwed9696/Desktop/MYBM/public/myb-logo.png')
img = img.convert('RGBA')

# Get the image data
data = np.array(img)

# Define theme colors
GOLD = (255, 215, 0, 255)  # #FFD700
DARK_RED = (139, 0, 0, 255)  # #8B0000

# Get RGB values
red, green, blue, alpha = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Create a mask for white/light pixels (background)
# Pixels with high R, G, B values (near white)
white_mask = (red > 200) & (green > 200) & (blue > 200)

# Create a mask for dark pixels (the logo itself)
# Pixels with low R, G, B values (dark/black)
dark_mask = (red < 100) & (green < 100) & (blue < 100)

# Make white pixels transparent
data[white_mask] = [255, 255, 255, 0]

# Change dark pixels to gold
data[dark_mask] = GOLD

# Create new image
new_img = Image.fromarray(data, 'RGBA')

# Save the new logo
new_img.save('/Users/mszwed9696/Desktop/MYBM/public/myb-logo-gold.png')
print("✓ Created gold logo with transparent background: myb-logo-gold.png")

# Also create a version with dark red for variety
data2 = np.array(img)
red2, green2, blue2, alpha2 = data2[:,:,0], data2[:,:,1], data2[:,:,2], data2[:,:,3]
white_mask2 = (red2 > 200) & (green2 > 200) & (blue2 > 200)
dark_mask2 = (red2 < 100) & (green2 < 100) & (blue2 < 100)
data2[white_mask2] = [255, 255, 255, 0]
data2[dark_mask2] = DARK_RED
new_img2 = Image.fromarray(data2, 'RGBA')
new_img2.save('/Users/mszwed9696/Desktop/MYBM/public/myb-logo-red.png')
print("✓ Created dark red logo with transparent background: myb-logo-red.png")

print("\nBoth versions created successfully!")
