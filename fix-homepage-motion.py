#!/usr/bin/env python3
import re
from pathlib import Path

file_path = Path('/Users/mszwed9696/Desktop/MYBM/app/page.tsx')

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace motion.div with div
content = re.sub(r'<motion\.div(\s+)', r'<div\1', content)

# Replace motion.h2 with h2
content = re.sub(r'<motion\.h2(\s+)', r'<h2\1', content)

# Replace motion.h1 with h1
content = re.sub(r'<motion\.h1(\s+)', r'<h1\1', content)

# Replace motion.p with p
content = re.sub(r'<motion\.p(\s+)', r'<p\1', content)

# Replace closing tags
content = content.replace('</motion.div>', '</div>')
content = content.replace('</motion.h2>', '</h2>')
content = content.replace('</motion.h1>', '</h1>')
content = content.replace('</motion.p>', '</p>')

# Remove animation prop lines (initial, animate, whileInView, transition, viewport)
lines = content.split('\n')
filtered_lines = []
for line in lines:
    stripped = line.strip()
    # Skip lines that only contain animation props
    if (stripped.startswith('initial={{') or
        stripped.startswith('animate={{') or
        stripped.startswith('whileInView={{') or
        stripped.startswith('transition={{') or
        stripped.startswith('viewport={{')):
        continue
    filtered_lines.append(line)

content = '\n'.join(filtered_lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Homepage motion components removed - all content now visible!")
