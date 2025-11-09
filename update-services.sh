#!/bin/bash

# Script to add mobster theme to all service pages

# Define color scheme
COLORS='bg-gradient-to-br from-[#2a1a4a] via-[#1a1a2e] to-black'
GOLD='#FFD700'
RED='#8B0000'

# Update each service page with "use client" directive
for file in app/services/*/page.tsx; do
    # Check if file doesn't already have "use client"
    if ! grep -q '"use client"' "$file"; then
        # Add "use client" at the top
        sed -i '' '1s/^/"use client";\n\n/' "$file"
    fi
done

echo "Updated all service pages with 'use client' directive"
echo "Manual updates still needed for full mobster theme transformation"
