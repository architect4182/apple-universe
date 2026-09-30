const fs = require('fs');

let c = fs.readFileSync('src/pages/Iphone/Iphone.tsx', 'utf8');

c = c.replace(/bg: '#1A0508'/g, "bg: '#FFF0F2'");
c = c.replace(/bg: '#0F1A24'/g, "bg: '#F0F8FF'");
c = c.replace(/bg: '#2A2A2A'/g, "bg: '#F5F5F7'");
c = c.replace(/bg: '#080808'/g, "bg: '#E5E5EA'");

c = c.replace(/bg-black/g, 'bg-white');
c = c.replace(/bg-zinc-950/g, 'bg-zinc-50');

c = c.replace(/text-white/g, 'text-zinc-900');
c = c.replace(/text-gray-400/g, 'text-gray-600');
c = c.replace(/text-gray-500/g, 'text-gray-500'); // keep same
c = c.replace(/border-white\/([0-9]+)/g, 'border-black/$1');
c = c.replace(/bg-white\/([0-9]+)/g, 'bg-black/$1');
c = c.replace(/text-white\/([0-9]+)/g, 'text-black/$1');

// Swap buy button text back
c = c.replace(/bg-white text-black/g, 'bg-black text-white');
c = c.replace(/bg-zinc-800 text-white/g, 'bg-zinc-200 text-black');
c = c.replace(/hover:bg-zinc-700/g, 'hover:bg-zinc-300');

// Fix apple icon invert
c = c.replace(/alt="Apple"\s*className="([^"]*)"/g, 'alt="Apple"\n          className="$1 invert"');

fs.writeFileSync('src/pages/Iphone/Iphone.tsx', c);
