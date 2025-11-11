#!/usr/bin/env python3
"""
Optimize all service and industry pages for mobile responsiveness
"""

import os
import re

directories = [
    '/Users/mszwed9696/Desktop/MYBM/app/services',
    '/Users/mszwed9696/Desktop/MYBM/app/industries',
    '/Users/mszwed9696/Desktop/MYBM/app/about',
    '/Users/mszwed9696/Desktop/MYBM/app/guarantee',
    '/Users/mszwed9696/Desktop/MYBM/app/apply',
]

def optimize_page(filepath):
    """Apply mobile optimizations to a page"""
    with open(filepath, 'r') as f:
        content = f.read()

    original = content

    # Hero section optimizations
    # 1. Optimize hero character images for mobile
    content = re.sub(
        r'className="absolute right-10 md:right-20 bottom-0 w-72 md:w-96',
        'className="absolute right-4 sm:right-8 md:right-16 lg:right-20 bottom-0 w-48 sm:w-60 md:w-80 lg:w-96',
        content
    )

    content = re.sub(
        r'className="absolute left-0 bottom-0 w-64 opacity-50"',
        'className="absolute left-0 bottom-0 w-40 sm:w-48 md:w-56 lg:w-64 opacity-50"',
        content
    )

    # 2. Optimize hero section padding
    content = re.sub(
        r'py-32 overflow-hidden min-h-\[70vh\]',
        'py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]',
        content
    )

    # 3. Optimize hero headings (h1)
    content = re.sub(
        r'className="text-5xl md:text-6xl font-bold mb-6 leading-tight"',
        'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"',
        content
    )

    # 4. Optimize hero subtext
    content = re.sub(
        r'className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"',
        'className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed"',
        content
    )

    # 5. Optimize badge/label text
    content = re.sub(
        r'className="inline-block mb-4 px-6 py-3 border-2 border-\[#FFD700\] rounded-full text-\[#FFD700\] text-sm font-bold tracking-wide"',
        'className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] text-xs sm:text-sm font-bold tracking-wide"',
        content
    )

    # 6. Optimize section padding
    content = re.sub(
        r'<section className="py-20 bg-',
        '<section className="py-12 sm:py-16 md:py-20 bg-',
        content
    )

    # 7. Optimize section headings (h2)
    content = re.sub(
        r'className="text-4xl md:text-5xl font-bold mb-',
        'className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-',
        content
    )

    content = re.sub(
        r'className="text-3xl font-bold text-gray-900 mb-',
        'className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-',
        content
    )

    # 8. Optimize card padding
    content = re.sub(
        r'p-8 rounded-xl border-2',
        'p-4 sm:p-6 md:p-8 rounded-xl border-2',
        content
    )

    content = re.sub(
        r'backdrop-blur-sm p-8 rounded',
        'backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded',
        content
    )

    # 9. Optimize grid gaps
    content = re.sub(
        r'gap-8(?! )',
        'gap-4 sm:gap-6 md:gap-8',
        content
    )

    content = re.sub(
        r'gap-6(?! )',
        'gap-3 sm:gap-4 md:gap-6',
        content
    )

    # 10. Optimize card headings (h3)
    content = re.sub(
        r'className="text-2xl font-bold mb-4 text-\[#FFD700\]"',
        'className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#FFD700]"',
        content
    )

    content = re.sub(
        r'className="text-xl font-bold text-\[#FFD700\] mb-3"',
        'className="text-base sm:text-lg md:text-xl font-bold text-[#FFD700] mb-2 sm:mb-3"',
        content
    )

    content = re.sub(
        r'className="text-xl font-bold text-gray-900 mb-2"',
        'className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2"',
        content
    )

    # 11. Optimize CTA buttons
    content = re.sub(
        r'px-10 py-5 rounded-lg font-bold text-lg',
        'px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg',
        content
    )

    content = re.sub(
        r'px-12 py-6 rounded-lg font-bold text-xl',
        'px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-lg font-bold text-lg sm:text-xl',
        content
    )

    # 12. Optimize text sizes in paragraphs
    content = re.sub(
        r'className="text-lg text-gray-700',
        'className="text-sm sm:text-base md:text-lg text-gray-700',
        content
    )

    content = re.sub(
        r'className="text-lg font-bold text-white',
        'className="text-base sm:text-lg font-bold text-white',
        content
    )

    # 13. Optimize spacing in hero content
    content = re.sub(
        r'<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">',
        '<div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-20">',
        content
    )

    # 14. Optimize list spacing
    content = re.sub(
        r'<ul className="space-y-4">',
        '<ul className="space-y-3 sm:space-y-4">',
        content
    )

    # 15. Optimize industry card links
    content = re.sub(
        r'<Link href="/industries/[^"]*" className="p-6 border-2',
        lambda m: m.group(0).replace('p-6', 'p-4 sm:p-5 md:p-6'),
        content
    )

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

# Process all pages
files_updated = 0
for directory in directories:
    if os.path.exists(directory):
        for root, dirs, files in os.walk(directory):
            for file in files:
                if file == 'page.tsx':
                    filepath = os.path.join(root, file)
                    if optimize_page(filepath):
                        files_updated += 1
                        print(f"✓ {filepath}")

print(f"\n✅ Optimized {files_updated} pages for mobile")
print("  • Responsive hero sections")
print("  • Mobile-friendly text sizes")
print("  • Optimized padding and spacing")
print("  • Better touch targets")
