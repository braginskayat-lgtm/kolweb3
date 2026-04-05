#!/usr/bin/env node
'use strict';

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, 'outputs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// ─── Avatar SVG: 400×400 ────────────────────────────────────────────────────
// Black bg · grid lines · rounded-rect logo + 2×2 pixel grid + circle
// gradient accent line · KOLWEB3 text
const avatarSVG = `
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0 L0 0 0 40" fill="none" stroke="white" stroke-width="0.6" stroke-opacity="0.07"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="400" height="400" fill="#000000"/>
  <rect width="400" height="400" fill="url(#grid)"/>

  <!-- ── Logo mark ───────────────────────────────────── -->

  <!-- Outer rounded-rect frame -->
  <rect x="137" y="82" width="126" height="126" rx="18" ry="18"
        fill="none" stroke="white" stroke-width="2.5"/>

  <!-- 2×2 pixel grid inside the frame (4 squares, tight gap) -->
  <rect x="155" y="100" width="42" height="42" rx="5" fill="white"/>
  <rect x="203" y="100" width="42" height="42" rx="5" fill="white"/>
  <rect x="155" y="148" width="42" height="42" rx="5" fill="white"/>
  <rect x="203" y="148" width="42" height="42" rx="5" fill="white"/>

  <!-- Circle accent below the frame -->
  <circle cx="200" cy="232" r="24" fill="none" stroke="white" stroke-width="2.5"/>
  <circle cx="200" cy="232" r="6"  fill="white"/>

  <!-- Gradient accent line -->
  <rect x="72" y="278" width="256" height="3" rx="1.5" fill="url(#g)"/>

  <!-- KOLWEB3 lettering -->
  <text x="200" y="318"
    text-anchor="middle"
    fill="white"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="32"
    letter-spacing="7">KOLWEB3</text>

  <!-- Tagline -->
  <text x="200" y="348"
    text-anchor="middle"
    fill="white"
    fill-opacity="0.35"
    font-family="Arial, sans-serif"
    font-size="11"
    letter-spacing="3.5">KOL INFLUENCER AGENCY</text>
</svg>
`;

// ─── Banner SVG: 1500×500 ────────────────────────────────────────────────────
// Black bg · grid lines · ghosted K bg · oversized left text
// stats column right · gradient bottom bar · @kolweb3agency handle
const bannerSVG = `
<svg width="1500" height="500" viewBox="0 0 1500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0 L0 0 0 60" fill="none" stroke="white" stroke-width="0.5" stroke-opacity="0.06"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1500" height="500" fill="#000000"/>
  <rect width="1500" height="500" fill="url(#grid)"/>

  <!-- ── Ghosted K (background layer) ──────────────────────────────────── -->
  <text x="-20" y="450"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="640"
    fill="white"
    fill-opacity="0.028"
    letter-spacing="-20">K</text>

  <!-- ── Left column: headline copy ────────────────────────────────────── -->
  <text x="76" y="132"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="112"
    fill="white"
    letter-spacing="-3">DOMINATE.</text>

  <text x="76" y="260"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="112"
    fill="white"
    letter-spacing="-3">SCALE.</text>

  <!-- 3X ROI. — gradient fill -->
  <text x="76" y="388"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="112"
    fill="url(#g)"
    letter-spacing="-3">3X ROI.</text>

  <!-- ── Vertical divider ───────────────────────────────────────────────── -->
  <line x1="862" y1="28" x2="862" y2="412"
        stroke="white" stroke-width="1" stroke-opacity="0.12"/>

  <!-- ── Right column: stats ───────────────────────────────────────────── -->

  <!-- Stat 1 -->
  <text x="918" y="124"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="64"
    fill="white">$3.1M+</text>
  <text x="920" y="156"
    font-family="Arial, sans-serif"
    font-size="17"
    fill="white"
    fill-opacity="0.45"
    letter-spacing="2.5">BUDGETS MANAGED</text>

  <!-- Thin separator -->
  <line x1="918" y1="178" x2="1420" y2="178"
        stroke="white" stroke-width="0.6" stroke-opacity="0.12"/>

  <!-- Stat 2 -->
  <text x="918" y="250"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="64"
    fill="white">$1B+</text>
  <text x="920" y="282"
    font-family="Arial, sans-serif"
    font-size="17"
    fill="white"
    fill-opacity="0.45"
    letter-spacing="2.5">TVL GENERATED</text>

  <!-- Thin separator -->
  <line x1="918" y1="304" x2="1420" y2="304"
        stroke="white" stroke-width="0.6" stroke-opacity="0.12"/>

  <!-- Stat 3 -->
  <text x="918" y="376"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="64"
    fill="white">$1.34M+</text>
  <text x="920" y="408"
    font-family="Arial, sans-serif"
    font-size="17"
    fill="white"
    fill-opacity="0.45"
    letter-spacing="2.5">DEPOSITS DRIVEN</text>

  <!-- ── Gradient accent line at bottom ────────────────────────────────── -->
  <rect x="0" y="484" width="1500" height="5" fill="url(#g)"/>

  <!-- ── @kolweb3agency handle ─────────────────────────────────────────── -->
  <text x="1488" y="429"
    text-anchor="end"
    font-family="Arial, sans-serif"
    font-size="19"
    fill="white"
    fill-opacity="0.4"
    letter-spacing="0.5">@kolweb3agency</text>
</svg>
`;

// ─── Favicon SVG: 192×192 (master — downscaled to 32 for .ico) ──────────────
// #0A0A0F bg · flat-top hex outline · lightning bolt · gradient bar (bottom 2px)
// Flat-top hex: r=80, center=(96,94)  →  points computed via cos/sin multiples
// Lightning bolt fits inside the hex
const faviconSVG = `
<svg width="192" height="192" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="gb" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="192" height="192" fill="#0A0A0F"/>

  <!-- Hex outline — flat-top, r=80, center (96,94) -->
  <!-- Angles 0°,60°,120°,180°,240°,300° -->
  <!-- (176,94) (136,163.3) (56,163.3) (16,94) (56,24.7) (136,24.7) -->
  <polygon
    points="176,94 136,163 56,163 16,94 56,25 136,25"
    fill="none"
    stroke="url(#g)"
    stroke-width="6"
    stroke-linejoin="round"/>

  <!-- Lightning bolt — classic ⚡ filled shape inside the hex -->
  <!-- Upper arm: top-right → middle-left jag point -->
  <!-- Lower arm: middle-right jag → bottom-left -->
  <path d="
    M 116,28
    L  68,105
    L  98,105
    L  76,164
    L 124,87
    L  94,87
    Z"
    fill="url(#g)"/>

  <!-- Gradient bar at very bottom — 2px -->
  <rect x="0" y="190" width="192" height="2" fill="url(#gb)"/>
</svg>
`;

async function generate() {
  const publicDir = path.join(__dirname, 'public');

  const files = [
    { svg: avatarSVG,  name: 'avatar.png',     w: 400,  h: 400  },
    { svg: bannerSVG,  name: 'banner.png',     w: 1500, h: 500  },
    { svg: faviconSVG, name: 'favicon.png',    w: 32,   h: 32   },
    { svg: faviconSVG, name: 'favicon-192.png', w: 192,  h: 192  },
  ];

  for (const { svg, name, w, h } of files) {
    const dest = path.join(outputDir, name);
    await sharp(Buffer.from(svg))
      .resize(w, h)
      .png({ compressionLevel: 9 })
      .toFile(dest);
    const size = fs.statSync(dest).size;
    console.log(`✓ ${name}  (${w}×${h}px, ${(size / 1024).toFixed(1)} KB)  →  ${dest}`);
  }

  // Copy favicon files into public/
  const copies = [
    { src: 'favicon.png',     dst: 'favicon.ico'       },  // PNG accepted as .ico by all modern browsers
    { src: 'favicon-192.png', dst: 'favicon-192.png'   },
    { src: 'favicon-192.png', dst: 'apple-icon.png'    },
  ];

  console.log('');
  for (const { src, dst } of copies) {
    const srcPath = path.join(outputDir, src);
    const dstPath = path.join(publicDir, dst);
    fs.copyFileSync(srcPath, dstPath);
    console.log(`✓ public/${dst}  ←  outputs/${src}`);
  }

  console.log('\nDone.');
}

generate().catch((err) => {
  console.error('Generation failed:', err.message);
  process.exit(1);
});
