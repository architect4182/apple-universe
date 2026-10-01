import React, { useRef, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';

const IPHONE_PRODUCTS = [
  {
    id: 'burgundy',
    name: 'Burgundy',
    color: '#60101C',
    bg: '#1A0508',
    price: 'From $999',
    description: 'A rich, standout hero shade that shifts slightly depending on the light.',
    image: '/images/iphone-18-burgundy.png',
    baseScale: 1.3
  },
  {
    id: 'glacier',
    name: 'Glacier',
    color: '#A9D1F0',
    bg: '#0F1A24',
    price: 'From $999',
    description: 'A soft, light blue tone.',
    image: '/images/iphone-18-glacier.png',
    baseScale: 1.3
  },
  {
    id: 'silver',
    name: 'Silver',
    color: '#D1D1D1',
    bg: '#2A2A2A',
    price: 'From $999',
    description: 'A classic, clean metallic finish.',
    image: '/images/iphone-18-silver.png',
    baseScale: 1.3
  },
  {
    id: 'black',
    name: 'Black',
    color: '#222222',
    bg: '#080808',
    price: 'From $999',
    description: 'A sleek, deep matte shade.',
    image: '/images/iphone-18-black.png',
    baseScale: 1.3
  }
];



const VideoSection = () => {
  return (
    <section className="w-full bg-white py-32 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full px-8 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900">
          Meet iPhone 18 Pro.
        </h2>
      </div>
      
      <div className="w-full max-w-5xl px-6 md:px-8 relative mx-auto">
        <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-black/5 ring-1 ring-black/5">
          <iframe
            src="https://www.youtube.com/embed/Q3zwkxqh1t0?autoplay=1&mute=1&loop=1&playlist=Q3zwkxqh1t0&modestbranding=1"
            title="iPhone Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

const TitaniumSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="h-[150vh] w-full bg-zinc-50 relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-8 overflow-hidden">
        <motion.div style={{ y, opacity }} className="max-w-5xl w-full text-center">
          <Shield className="w-20 h-20 text-zinc-500 mx-auto mb-12" />
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-zinc-900 leading-tight">
            Forged in titanium.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            iPhone 18 Pro Max is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.
          </p>
        </motion.div>
      </div>
    </section>
  );
};






const SummarySection = () => {
  return (
    <section className="w-full bg-[#1c1c1e] py-24 flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto flex justify-center">
        <img 
          src="/images/iphone-summary.png" 
          alt="Here's what you get with iPhone 18 Pro" 
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

const ModelComparisonSection = () => {
  const [duoColor, setDuoColor] = useState<'black' | 'white'>('white');

  return (
    <section className="py-32 w-full bg-white relative border-t border-black/5">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900">Which iPhone is right for you?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* iPhone 18 Pro Max */}
          <div className="flex flex-col items-center">
            <img src="/images/iphone-18-burgundy.png" alt="iPhone 18 Pro Max" className="h-64 object-contain mb-8 mask-image-b drop-shadow-2xl" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
            <div className="h-6 mb-6" /> {/* Spacer to align with color switcher */}
            <h3 className="text-3xl font-semibold text-zinc-900 mb-2 tracking-tight">iPhone 18 Pro Max</h3>
            <p className="text-gray-600 mb-8 font-medium">The ultimate iPhone.</p>
            <p className="text-xl text-zinc-900 font-medium mb-12">From $999</p>
            <div className="w-full h-px bg-black/10 mb-8" />
            <p className="text-zinc-900 font-semibold mb-2">A20 Pro chip</p>
            <p className="text-sm text-gray-500 mb-8">with 8-core GPU</p>
            <p className="text-zinc-900 font-semibold mb-2">Pro camera system</p>
            <p className="text-sm text-gray-500 mb-8">48MP Main | 48MP Ultra Wide | 48MP Telephoto</p>
            <p className="text-zinc-900 font-semibold mb-2">Up to 35 hrs</p>
            <p className="text-sm text-gray-500 mb-8">video playback</p>
            <button className="px-6 py-2 bg-black text-white rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform">Buy</button>
          </div>

          {/* iPhone Duo */}
          <div className="flex flex-col items-center">
            <div className="h-64 w-full flex items-center justify-center mb-4">
              <img 
                src={duoColor === 'black' ? "/images/iphone-duo.png" : "/images/iphone-duo-white.png"} 
                alt="iPhone Duo" 
                className={`object-contain mask-image-b drop-shadow-2xl mix-blend-darken transition-all duration-300 ${duoColor === 'black' ? 'h-56' : 'h-64'}`} 
                style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} 
              />
            </div>
            
            {/* Color Switcher */}
            <div className="flex gap-4 mb-6">
              <button 
                onClick={() => setDuoColor('white')}
                className={`w-6 h-6 rounded-full bg-zinc-100 border-2 ring-offset-2 transition-all ${duoColor === 'white' ? 'ring-2 ring-zinc-400 border-transparent' : 'border-gray-200'}`}
                aria-label="Starlight White"
              />
              <button 
                onClick={() => setDuoColor('black')}
                className={`w-6 h-6 rounded-full bg-zinc-900 border-2 ring-offset-2 transition-all ${duoColor === 'black' ? 'ring-2 ring-zinc-400 border-transparent' : 'border-transparent'}`}
                aria-label="Space Black"
              />
            </div>

            <h3 className="text-3xl font-semibold text-zinc-900 mb-2 tracking-tight">iPhone Duo</h3>
            <p className="text-gray-600 mb-8 font-medium">The ultimate foldable experience.</p>
            <p className="text-xl text-zinc-900 font-medium mb-12">From $1499</p>
            <div className="w-full h-px bg-black/10 mb-8" />
            <p className="text-zinc-900 font-semibold mb-2">A19 Pro chip</p>
            <p className="text-sm text-gray-500 mb-8">with 7-core GPU</p>
            <p className="text-zinc-900 font-semibold mb-2">Pro camera system</p>
            <p className="text-sm text-gray-500 mb-8">48MP Main | 48MP Ultra Wide</p>
            <p className="text-zinc-900 font-semibold mb-2">Up to 30 hrs</p>
            <p className="text-sm text-gray-500 mb-8">video playback</p>
            <button className="px-6 py-2 bg-zinc-200 text-black rounded-full font-bold text-sm hover:bg-zinc-300 transition-colors">Buy</button>
          </div>

          {/* iPhone 17 Pro */}
          <div className="flex flex-col items-center">
            <img src="/images/iphone-17-pro.png" alt="iPhone 17 Pro" className="h-56 object-contain mb-16 mask-image-b drop-shadow-2xl mix-blend-darken" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
            <div className="h-6 mb-6" /> {/* Spacer to align with color switcher */}
            <h3 className="text-3xl font-semibold text-zinc-900 mb-2 tracking-tight">iPhone 17 Pro</h3>
            <p className="text-gray-600 mb-8 font-medium">Titanium. So strong. So light.</p>
            <p className="text-xl text-zinc-900 font-medium mb-12">From $899</p>
            <div className="w-full h-px bg-black/10 mb-8" />
            <p className="text-zinc-900 font-semibold mb-2">A19 Pro chip</p>
            <p className="text-sm text-gray-500 mb-8">with 6-core GPU</p>
            <p className="text-zinc-900 font-semibold mb-2">Pro camera system</p>
            <p className="text-sm text-gray-500 mb-8">48MP Main | 12MP Ultra Wide | 12MP Telephoto</p>
            <p className="text-zinc-900 font-semibold mb-2">Up to 29 hrs</p>
            <p className="text-sm text-gray-500 mb-8">video playback</p>
            <button className="px-6 py-2 bg-zinc-200 text-black rounded-full font-bold text-sm hover:bg-zinc-300 transition-colors">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-12 px-8 border-t border-black/5">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-gray-500 font-medium">
      <div className="flex flex-col gap-1">
        <span className="text-gray-600 font-semibold">Designed & Developed by Chaitanya as a Concept</span>
        <span className="text-gray-600">Not affiliated with Apple Inc. Original assets and branding belong to Apple.</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Use</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">Sales and Refunds</a>
        <a href="#" className="hover:text-zinc-900 transition-colors">Legal</a>
      </div>
    </div>
  </footer>
);

const Iphone: React.FC = () => {
  const [activeId, setActiveId] = useState(IPHONE_PRODUCTS[0].id);
  const activeProduct = IPHONE_PRODUCTS.find(p => p.id === activeId) || IPHONE_PRODUCTS[0];

  return (
    <div className="w-full font-sans select-none bg-white text-zinc-900 min-h-screen">
      <div 
        className="relative h-screen w-full overflow-hidden transition-colors duration-1000 ease-in-out" 
        style={{ backgroundColor: activeProduct.bg }}
      >
        <Navbar theme="dark" activePage="iphone" />

        <div className="relative h-full w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between z-10 pt-20">
          
          {/* Left Side: Product Info */}
          <div className="flex-1 text-left flex flex-col justify-center items-start z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${activeProduct.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <h2 className="text-sm font-semibold tracking-widest text-white/60 uppercase mb-4">
                  iPhone 18 Pro Max
                </h2>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
                  Titanium. <br />
                  <span style={{ color: activeProduct.color }}>{activeProduct.name}.</span>
                </h1>
                <p className="text-xl text-white/80 max-w-md mb-8 leading-relaxed">
                  {activeProduct.description}
                </p>
                
                <div className="flex items-center gap-8 mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">{activeProduct.price}</span>
                  </div>
                </div>
  
                <div className="flex items-center gap-4">
                  <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm shadow-xl flex items-center gap-2 group hover:scale-105 transition-transform">
                    Buy Now
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Product Image & Colors */}
          <div className="flex-1 h-full relative flex items-center justify-center mt-10 md:mt-0">
            
            {/* Background "PRO" text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <span className="text-[25vw] font-black tracking-tighter text-white leading-none">PRO</span>
            </div>

            <div
              className="relative z-20 w-full max-w-xl lg:max-w-2xl transition-none"
              style={{ transform: `scale(${activeProduct.baseScale || 1.1})` }}
            >
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
              />
            </div>

            {/* Color Options Displayed Horizontally */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-row gap-8 z-40">
              {IPHONE_PRODUCTS.map((product) => (
                <div 
                  key={product.id} 
                  className="relative group cursor-pointer" 
                  onClick={() => setActiveId(product.id)}
                >
                  {/* Tooltip */}
                  <span className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 text-white text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/50 px-3 py-1.5 rounded-md backdrop-blur-md">
                    {product.name}
                  </span>
                  
                  <motion.div
                    animate={{
                      scale: activeId === product.id ? 1.4 : 1,
                    }}
                    className={`w-6 h-6 rounded-full shadow-lg ${activeId === product.id ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent' : ''}`}
                    style={{ backgroundColor: product.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Sections below the hero slider */}
      <VideoSection />
      <TitaniumSection />
      <SummarySection />
      <ModelComparisonSection />
      <Footer />
    </div>
  );
};

export default Iphone;
