#!/usr/bin/env python3
"""
Optimize homepage sections for mobile: headings, character images, spacing
"""

import re

filepath = '/Users/mszwed9696/Desktop/MYBM/app/page.tsx'

with open(filepath, 'r') as f:
    content = f.read()

# 1. Optimize character images in sections for mobile
content = re.sub(
    r'className="absolute left-0 bottom-0 w-56 md:w-72 opacity-70 z-0"',
    'className="absolute left-0 bottom-0 w-40 sm:w-48 md:w-60 lg:w-72 opacity-70 z-0"',
    content
)

content = re.sub(
    r'className="absolute right-0 bottom-0 w-56 md:w-72 opacity-70 z-0"',
    'className="absolute right-0 bottom-0 w-40 sm:w-48 md:w-60 lg:w-72 opacity-70 z-0"',
    content
)

content = re.sub(
    r'className="absolute right-10 top-10 w-64 md:w-80 opacity-60"',
    'className="absolute right-4 sm:right-8 md:right-10 top-4 sm:top-8 md:top-10 w-48 sm:w-56 md:w-72 lg:w-80 opacity-60"',
    content
)

content = re.sub(
    r'className="absolute left-0 bottom-0 w-64 md:w-96 opacity-75 z-0"',
    'className="absolute left-0 bottom-0 w-48 sm:w-56 md:w-72 lg:w-96 opacity-75 z-0"',
    content
)

# 2. Optimize section headings for mobile (h2 tags)
content = re.sub(
    r'className="text-5xl md:text-6xl font-bold mb-6"',
    'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"',
    content
)

content = re.sub(
    r'className="text-4xl md:text-5xl font-bold mb-6"',
    'className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"',
    content
)

content = re.sub(
    r'className="text-4xl md:text-5xl font-bold mb-12"',
    'className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12"',
    content
)

# 3. Optimize subtitle text for mobile
content = re.sub(
    r'className="text-xl text-gray-300 max-w-3xl mx-auto"',
    'className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"',
    content
)

content = re.sub(
    r'className="text-xl text-gray-300 mb-8"',
    'className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8"',
    content
)

content = re.sub(
    r'className="text-2xl mb-10 text-gray-200"',
    'className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 text-gray-200"',
    content
)

# 4. Optimize card padding and spacing for mobile
content = re.sub(
    r'className="bg-black/50 p-8 rounded-xl border-2',
    'className="bg-black/50 p-4 sm:p-6 md:p-8 rounded-xl border-2',
    content
)

content = re.sub(
    r'className="bg-gradient-to-br from-\[#2a2a2a\] to-\[#1a1a1a\] p-8 rounded-xl border-2',
    'className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-4 sm:p-6 md:p-8 rounded-xl border-2',
    content
)

content = re.sub(
    r'className="bg-gradient-to-br from-\[#8B0000\] to-\[#5a0000\] p-8 rounded-xl border-2',
    'className="bg-gradient-to-br from-[#8B0000] to-[#5a0000] p-4 sm:p-6 md:p-8 rounded-xl border-2',
    content
)

# 5. Optimize icon sizes in cards
content = re.sub(
    r'className="text-6xl mb-4"',
    'className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4"',
    content
)

content = re.sub(
    r'className="text-5xl mb-4"',
    'className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"',
    content
)

# 6. Optimize card headings
content = re.sub(
    r'className="text-2xl font-bold mb-3 text-\[#FFD700\]"',
    'className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-[#FFD700]"',
    content
)

# 7. Optimize section padding for mobile
content = re.sub(
    r'<section className="py-20 bg-',
    '<section className="py-12 sm:py-16 md:py-20 bg-',
    content
)

# 8. Optimize grid gaps for mobile
content = re.sub(
    r' gap-8(?! )',
    ' gap-4 sm:gap-6 md:gap-8',
    content
)

# 9. Optimize final CTA text sizes
content = re.sub(
    r'className="inline-block bg-black border-4 border-\[#FFD700\] text-\[#FFD700\] px-12 py-6 rounded-lg font-bold text-xl',
    'className="inline-block bg-black border-4 border-[#FFD700] text-[#FFD700] px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-lg font-bold text-lg sm:text-xl',
    content
)

with open(filepath, 'w') as f:
    f.write(content)

print("✅ Homepage optimized for mobile:")
print("  • Responsive character image sizing")
print("  • Mobile-friendly heading sizes")
print("  • Optimized padding and spacing")
print("  • Responsive grid gaps")
print("  • Better touch targets for CTAs")
