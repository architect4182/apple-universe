const fs = require('fs');
const path = require('path');

function makeLight(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace colors
  const replacements = [
    { from: /text-white/g, to: 'text-zinc-900' },
    { from: /bg-black/g, to: 'bg-white' },
    { from: /bg-zinc-950/g, to: 'bg-zinc-50' },
    { from: /bg-zinc-900\/80/g, to: 'bg-white/80' },
    { from: /bg-zinc-800/g, to: 'bg-zinc-200' },
    { from: /hover:bg-zinc-700/g, to: 'hover:bg-zinc-300' },
    { from: /text-gray-400/g, to: 'text-gray-600' },
    { from: /text-gray-500/g, to: 'text-gray-500' },
    
    // borders and opacities
    { from: /border-white\/([0-9]+)/g, to: 'border-black/$1' },
    { from: /bg-white\/([0-9]+)/g, to: 'bg-black/$1' },
    { from: /text-white\/([0-9]+)/g, to: 'text-black/$1' },

    // Special cases where we need to revert buttons
    { from: /bg-white text-black/g, to: 'bg-black text-white' },
    
    // For apple.svg icon
    { from: /src="\/images\/apple.svg"/g, to: 'src="/images/apple.svg" className="invert"' },
    // If it already had a className, this might break. Let's do a safer one:
    { from: /alt="Apple"([^>]*)className="([^"]*)"/g, to: 'alt="Apple"$1className="$2 invert"' }
  ];

  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  
  fs.writeFileSync(filePath, content);
}

makeLight('src/pages/Iphone/Iphone.tsx');
makeLight('src/pages/AirpodsMax/AirpodsMax.tsx');
makeLight('src/App.tsx');
makeLight('src/components/Home.tsx');
