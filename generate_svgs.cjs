const fs = require('fs');
const path = require('path');

const generateProSVG = (gradientId, colors) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800" width="100%" height="100%">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors[0]}"/>
      <stop offset="50%" stop-color="${colors[1]}"/>
      <stop offset="100%" stop-color="${colors[2]}"/>
    </linearGradient>
    <linearGradient id="wallpaperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors[0]}"/>
      <stop offset="40%" stop-color="#111118"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <linearGradient id="glare" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.15"/>
      <stop offset="30%" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Phone Body (Titanium frame edge) -->
  <rect x="18" y="18" width="364" height="764" rx="64" fill="url(#${gradientId})"/>
  
  <!-- Antenna bands -->
  <rect x="18" y="100" width="4" height="6" fill="#444"/>
  <rect x="378" y="100" width="4" height="6" fill="#444"/>
  <rect x="18" y="700" width="4" height="6" fill="#444"/>
  <rect x="378" y="700" width="4" height="6" fill="#444"/>

  <!-- Bezel -->
  <rect x="22" y="22" width="356" height="756" rx="60" fill="#050505"/>
  
  <!-- Screen -->
  <rect x="30" y="30" width="340" height="740" rx="52" fill="url(#wallpaperGradient)"/>
  
  <!-- Screen Glare overlay -->
  <rect x="30" y="30" width="340" height="740" rx="52" fill="url(#glare)"/>
  
  <!-- Dynamic Island -->
  <rect x="135" y="45" width="130" height="36" rx="18" fill="#000000"/>
  <!-- Front Camera -->
  <circle cx="245" cy="63" r="8" fill="#080808"/>
  <circle cx="245" cy="63" r="3" fill="#001144"/>
  <!-- Sensors -->
  <circle cx="155" cy="63" r="5" fill="#080808"/>
  
  <!-- Action Button -->
  <path d="M 14 160 L 18 160 L 18 190 L 14 190 Q 12 175 14 160" fill="url(#${gradientId})"/>
  <!-- Volume Up -->
  <path d="M 14 230 L 18 230 L 18 290 L 14 290 Q 12 260 14 230" fill="url(#${gradientId})"/>
  <!-- Volume Down -->
  <path d="M 14 310 L 18 310 L 18 370 L 14 370 Q 12 340 14 310" fill="url(#${gradientId})"/>
  
  <!-- Power Button -->
  <path d="M 382 250 L 386 250 Q 388 295 386 340 L 382 340 L 382 250" fill="url(#${gradientId})"/>

  <!-- Home Indicator -->
  <rect x="130" y="755" width="140" height="4" rx="2" fill="#ffffff" fill-opacity="0.5"/>
</svg>`;

const outputDir = path.join(__dirname, 'public', 'images');

fs.writeFileSync(path.join(outputDir, 'iphone-18-pro-burgundy.svg'), generateProSVG('gradBurgundy', ['#8E2A3A', '#60101C', '#3A060F']));
fs.writeFileSync(path.join(outputDir, 'iphone-18-pro-glacier.svg'), generateProSVG('gradGlacier', ['#D4EBF8', '#A9D1F0', '#7CAED6']));
fs.writeFileSync(path.join(outputDir, 'iphone-18-pro-silver.svg'), generateProSVG('gradSilver', ['#FFFFFF', '#D1D1D1', '#9E9E9E']));
fs.writeFileSync(path.join(outputDir, 'iphone-18-pro-black.svg'), generateProSVG('gradBlack', ['#444444', '#222222', '#0A0A0A']));

console.log("iPhone 18 Pro Official SVGs generated successfully!");
