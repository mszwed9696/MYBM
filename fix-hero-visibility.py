import os
import re

# Directories to process
directories = [
    '/Users/mszwed9696/Desktop/MYBM/app/industries',
    '/Users/mszwed9696/Desktop/MYBM/app/services'
]

files_updated = []

for directory in directories:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file == 'page.tsx':
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r') as f:
                    content = f.read()
                
                # Check if file has opacity-20 or opacity-30 on hero images
                if 'opacity-20' in content or 'opacity-30' in content:
                    # Increase background image opacity from 20 to 40
                    content = re.sub(
                        r'<div className="absolute inset-0 opacity-20 z-0">',
                        '<div className="absolute inset-0 z-0">',
                        content
                    )
                    
                    # Add opacity-40 to the img tag itself and overlay gradient
                    content = re.sub(
                        r'<img src="(/heroes/[^"]+)" alt="([^"]*)" className="w-full h-full object-cover"[^>]*/>',
                        r'<img src="\1" alt="\2" className="w-full h-full object-cover opacity-40" />\n          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#2a1a4a]/90 to-[#1a1a2e]/80"></div>',
                        content
                    )
                    
                    # Increase character opacity from 30 to 90
                    content = re.sub(
                        r'<div className="absolute right-0 bottom-0 w-64 md:w-80 opacity-30 z-0">',
                        '<div className="absolute right-0 bottom-0 w-80 md:w-96 lg:w-[500px] z-0">',
                        content
                    )
                    
                    content = re.sub(
                        r'(<img src="/characters/[^"]+)" alt="([^"]*)" className="w-full h-auto" />',
                        r'\1" alt="\2" className="w-full h-auto opacity-90" />',
                        content
                    )
                    
                    with open(filepath, 'w') as f:
                        f.write(content)
                    
                    files_updated.append(filepath)
                    print(f"✓ Updated: {filepath}")

print(f"\n✅ Total files updated: {len(files_updated)}")
