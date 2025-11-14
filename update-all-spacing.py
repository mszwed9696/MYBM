#!/usr/bin/env python3
"""
Apply improved spacing to all pages in the MYBM site
"""

import re
from pathlib import Path

# All page files to update
PAGE_FILES = [
    "app/apply/page.tsx",
    "app/privacy/page.tsx",
    "app/guarantee/page.tsx",
    "app/terms/page.tsx",
    "app/industries/coaches/page.tsx",
    "app/industries/course-creators/page.tsx",
    "app/industries/consultants/page.tsx",
    "app/industries/service-businesses/page.tsx",
    "app/industries/product-businesses/page.tsx",
    "app/industries/saas/page.tsx",
    "app/about/page.tsx",
    "app/blog/page.tsx",
    "app/blog/fractional-cmo-vs-agency-vs-in-house/page.tsx",
    "app/blog/marketing-strategy-consultants/page.tsx",
    "app/blog/funnel-strategies-high-ticket-coaching/page.tsx",
    "app/blog/why-marketing-agencies-fail-high-ticket/page.tsx",
    "app/blog/account-based-marketing-guide-consultants/page.tsx",
    "app/blog/course-creator-evergreen-funnel/page.tsx",
    "app/blog/guaranteed-marketing-results/page.tsx",
    "app/blog/scale-coaching-business-500k-month/page.tsx",
    "app/results/page.tsx",
    "app/services/marketing-strategy/page.tsx",
    "app/services/skool-community/page.tsx",
    "app/services/funnel-optimization/page.tsx",
    "app/services/content-marketing/page.tsx",
    "app/services/marketing-automation/page.tsx",
    "app/services/consulting/page.tsx",
    "app/services/fractional-cmo/page.tsx",
    "app/services/paid-advertising/page.tsx",
]

# Spacing replacements to apply
REPLACEMENTS = [
    # Padding increases
    (r'py-8(\s+[^"]*?"|\s*")', r'py-12\1'),
    (r'py-12(\s+[^m][^d])', r'py-20\1'),  # Avoid py-12 md:py-
    (r'py-16(\s+[^"]*?"|\s*")', r'py-20 md:py-24\1'),
    (r'px-4(\s+py)', r'px-6 \1'),
    (r'px-6(\s+lg:px-8)', r'px-8 lg:px-12'),

    # Margin increases
    (r'mb-4(\s+[^"]*?"|\s*")', r'mb-6\1'),
    (r'mb-6(\s+[^"]*?"|\s*")', r'mb-8\1'),
    (r'mb-8(\s+[^"]*?"|\s*")', r'mb-12\1'),
    (r'mb-10(\s+[^"]*?"|\s*")', r'mb-16\1'),
    (r'mt-4(\s+[^"]*?"|\s*")', r'mt-6\1'),
    (r'mt-6(\s+[^"]*?"|\s*")', r'mt-8\1'),
    (r'mt-8(\s+[^"]*?"|\s*")', r'mt-12\1'),

    # Gap increases
    (r'gap-4(\s+[^"]*?"|\s*")', r'gap-6\1'),
    (r'gap-6(\s+[^"]*?"|\s*")', r'gap-8\1'),
    (r'gap-8(\s+[^"]*?"|\s*")', r'gap-12\1'),

    # Space-y increases
    (r'space-y-4(\s+[^"]*?"|\s*")', r'space-y-6\1'),
    (r'space-y-6(\s+[^"]*?"|\s*")', r'space-y-8\1'),
    (r'space-y-8(\s+[^"]*?"|\s*")', r'space-y-12\1'),

    # Padding for specific elements
    (r'p-4(\s+[^"]*?"|\s*")', r'p-6\1'),
    (r'p-6(\s+[^"]*?"|\s*")', r'p-8\1'),
    (r'p-8(\s+[^"]*?"|\s*")', r'p-10\1'),

    # Responsive padding
    (r'md:py-16', r'md:py-24'),
    (r'md:px-8', r'md:px-12'),
    (r'lg:px-8', r'lg:px-12'),
]

def update_file(file_path):
    """Update a single file with improved spacing"""
    path = Path(file_path)

    if not path.exists():
        print(f"⚠️  Skipping {file_path} (not found)")
        return False

    try:
        content = path.read_text()
        original_content = content

        # Apply all replacements
        for pattern, replacement in REPLACEMENTS:
            content = re.sub(pattern, replacement, content)

        # Only write if changed
        if content != original_content:
            path.write_text(content)
            print(f"✅ Updated {file_path}")
            return True
        else:
            print(f"⏭️  No changes needed for {file_path}")
            return False
    except Exception as e:
        print(f"❌ Error updating {file_path}: {e}")
        return False

def main():
    """Update all pages with improved spacing"""
    print("🚀 Applying improved spacing to all pages...\n")

    updated_count = 0
    skipped_count = 0

    for file_path in PAGE_FILES:
        if update_file(file_path):
            updated_count += 1
        else:
            skipped_count += 1

    print(f"\n✨ Complete!")
    print(f"   Updated: {updated_count} files")
    print(f"   Skipped: {skipped_count} files")
    print(f"   Total: {len(PAGE_FILES)} files")

if __name__ == "__main__":
    main()
