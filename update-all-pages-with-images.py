#!/usr/bin/env python3
import os
import re
from pathlib import Path

# Mapping of pages to their image filenames (without extensions)
PAGE_IMAGES = {
    # Service pages
    'app/services/consulting/page.tsx': {
        'hero': 'consulting-hero',
        'character': 'consulting-character',
        'featured': 'consulting-featured'
    },
    'app/services/content-marketing/page.tsx': {
        'hero': 'content-marketing-hero',
        'character': 'content-marketing-character',
        'featured': 'content-marketing-featured'
    },
    'app/services/fractional-cmo/page.tsx': {
        'hero': 'fractional-cmo-hero',
        'character': 'fractional-cmo-character',
        'featured': 'fractional-cmo-featured'
    },
    'app/services/funnel-optimization/page.tsx': {
        'hero': 'funnel-optimization-hero',
        'character': 'funnel-optimization-character',
        'featured': 'funnel-optimization-featured'
    },
    'app/services/marketing-automation/page.tsx': {
        'hero': 'marketing-automation-hero',
        'character': 'marketing-automation-character',
        'featured': 'marketing-automation-featured'
    },
    'app/services/marketing-strategy/page.tsx': {
        'hero': 'marketing-strategy-hero',
        'character': 'marketing-strategy-character',
        'featured': 'marketing-strategy-featured'
    },
    'app/services/paid-advertising/page.tsx': {
        'hero': 'paid-advertising-hero',
        'character': 'paid-advertising-character',
        'featured': 'paid-advertising-featured'
    },
    'app/services/skool-community/page.tsx': {
        'hero': 'skool-community-hero',
        'character': 'skool-community-character',
        'featured': 'skool-community-featured'
    },
    # Industry pages
    'app/industries/coaches/page.tsx': {
        'hero': 'coaches-hero',
        'character': 'coaches-character',
        'featured': 'coaches-featured'
    },
    'app/industries/consultants/page.tsx': {
        'hero': 'consultants-hero',
        'character': 'consultants-character',
        'featured': 'consultants-featured'
    },
    'app/industries/course-creators/page.tsx': {
        'hero': 'course-creators-hero',
        'character': 'course-creators-character',
        'featured': 'course-creators-featured'
    },
    'app/industries/product-businesses/page.tsx': {
        'hero': 'product-businesses-hero',
        'character': 'product-businesses-character',
        'featured': 'product-businesses-featured'
    },
    'app/industries/saas/page.tsx': {
        'hero': 'saas-hero',
        'character': 'saas-character',
        'featured': 'saas-featured'
    },
    'app/industries/service-businesses/page.tsx': {
        'hero': 'service-businesses-hero',
        'character': 'service-businesses-character',
        'featured': 'service-businesses-featured'
    },
}

base_dir = Path('/Users/mszwed9696/Desktop/MYBM')

def update_hero_image(content, hero_filename):
    """Update hero image src to use standardized filename"""
    # Pattern to match hero image src
    pattern = r'src="(/heroes/[^"]+\.(?:png|jpg|jpeg|webp))"'
    replacement = f'src="/heroes/{hero_filename}.png"'
    return re.sub(pattern, replacement, content)

def update_character_image(content, character_filename):
    """Update character image src to use standardized filename"""
    # Pattern to match character image src
    pattern = r'src="(/characters/[^"]+\.(?:png|jpg|jpeg|webp))"'
    replacement = f'src="/characters/{character_filename}.png"'
    return re.sub(pattern, replacement, content)

def add_featured_image_section(content, featured_filename):
    """Add a featured image section if it doesn't exist"""
    # Check if featured image already exists
    if '/featured/' in content:
        # Update existing featured image
        pattern = r'src="(/featured/[^"]+\.(?:png|jpg|jpeg|webp))"'
        replacement = f'src="/featured/{featured_filename}.png"'
        return re.sub(pattern, replacement, content)

    # Find the last closing section tag before the final closing div
    # We'll insert the featured section before the final CTA section
    featured_section = f'''
      {/* Featured Image Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/featured/{featured_filename}.png"
                alt="Featured"
                className="w-full h-auto rounded-xl shadow-2xl border-4 border-[#FFD700]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Real Results. <span className="text-[#8B0000]">Real Growth.</span>
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                We don't just talk strategy—we execute. Every client gets a dedicated team focused on one thing:
                <span className="text-[#8B0000] font-bold"> delivering the 30% revenue increase we promised.</span>
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From funnel optimization to paid advertising, content marketing to automation—we handle it all so you can focus on running your business.
              </p>
              <Link
                href="/results"
                className="inline-block bg-[#8B0000] border-2 border-[#FFD700] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#a00000] transition-all"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                See Our Results
              </Link>
            </div>
          </div>
        </div>
      </section>
'''

    # Insert before the last closing div/section
    # Find the position to insert (before final CTA or last section)
    last_section_pattern = r'(</section>\s*</div>\s*$)'
    if re.search(last_section_pattern, content):
        return re.sub(last_section_pattern, featured_section + r'\1', content)

    # If pattern not found, insert before the final closing brace and tags
    final_pattern = r'(\s*</div>\s*\);\s*}\s*$)'
    if re.search(final_pattern, content):
        return re.sub(final_pattern, featured_section + r'\1', content)

    return content

def process_file(file_path, images):
    """Process a single file to update images"""
    full_path = base_dir / file_path
    if not full_path.exists():
        print(f"⚠️  File not found: {file_path}")
        return False

    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Update hero image
        if images['hero']:
            content = update_hero_image(content, images['hero'])

        # Update character image
        if images['character']:
            content = update_character_image(content, images['character'])

        # Add/update featured image section
        if images['featured']:
            content = add_featured_image_section(content, images['featured'])

        # Only write if content changed
        if content != original_content:
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Updated: {file_path}")
            return True
        else:
            print(f"ℹ️  No changes needed: {file_path}")
            return False

    except Exception as e:
        print(f"❌ Error processing {file_path}: {str(e)}")
        return False

# Main execution
print("=" * 80)
print("UPDATING ALL PAGES WITH STANDARDIZED IMAGE FILENAMES")
print("=" * 80)
print()

updated_count = 0
for file_path, images in PAGE_IMAGES.items():
    if process_file(file_path, images):
        updated_count += 1
    print()

print("=" * 80)
print(f"✅ Update complete! {updated_count}/{len(PAGE_IMAGES)} files updated.")
print("=" * 80)
