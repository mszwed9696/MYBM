import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function generateFaviconPngs() {
  console.log('🎨 Generating PNG favicons from SVG...\n');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Read the favicon SVG
  const faviconSvgPath = join(__dirname, '../public/favicon.svg');
  const faviconSvg = readFileSync(faviconSvgPath, 'utf-8');

  // Create data URL from SVG
  const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(faviconSvg).toString('base64')}`;

  // Sizes to generate
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  for (const { name, size } of sizes) {
    await page.setViewportSize({ width: size, height: size });

    // Create HTML with SVG
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { margin: 0; padding: 0; width: ${size}px; height: ${size}px; }
            img { width: 100%; height: 100%; }
          </style>
        </head>
        <body>
          <img src="${svgDataUrl}" />
        </body>
      </html>
    `;

    await page.setContent(html);
    await page.waitForTimeout(500); // Let SVG render

    const screenshot = await page.screenshot({
      type: 'png',
      omitBackground: false
    });

    const outputPath = join(__dirname, '../public', name);
    writeFileSync(outputPath, screenshot);
    console.log(`✅ Generated ${name} (${size}x${size})`);
  }

  // Generate favicon.png (32x32 is standard)
  await page.setViewportSize({ width: 32, height: 32 });
  const html32 = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { margin: 0; padding: 0; width: 32px; height: 32px; }
          img { width: 100%; height: 100%; }
        </style>
      </head>
      <body>
        <img src="${svgDataUrl}" />
      </body>
    </html>
  `;
  await page.setContent(html32);
  await page.waitForTimeout(500);
  const screenshot32 = await page.screenshot({ type: 'png', omitBackground: false });
  writeFileSync(join(__dirname, '../public/favicon.png'), screenshot32);
  console.log(`✅ Generated favicon.png (32x32)`);

  await browser.close();

  console.log('\n✨ All PNG favicons generated successfully!');
  console.log('📁 Files created in /public directory');
}

generateFaviconPngs().catch(console.error);
