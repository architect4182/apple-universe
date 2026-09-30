import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, Search, Shield, Cpu, Orbit, Camera, Focus, Target, ChevronRight } from 'lucide-react';

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
    image: '/images/iphone-18-glacier.jpg',
    baseScale: 0.8
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

const Navbar = () => (
  <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between text-white text-xs">
    <div className="flex items-center gap-8 w-full">
      <div className="flex items-center gap-4 cursor-pointer group">
        <img
          src="/images/apple.svg"
          alt="Apple"
          className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <span className="text-white/30 font-light text-xs group-hover:text-white/60 transition-colors">|</span>
        <span className="text-white/70 font-semibold tracking-widest text-[11px] uppercase group-hover:text-white transition-colors">Chai's Studio</span>
      </div>
      <div className="hidden md:flex flex-1 justify-center gap-8 font-medium tracking-wide opacity-80">
        <a href="#" className="hover:opacity-100 transition-opacity">Store</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Mac</a>
        <a href="#" className="hover:opacity-100 transition-opacity">iPad</a>
        <Link to="/iphone" className="hover:opacity-100 transition-opacity text-white drop-shadow-md">iPhone</Link>
        <a href="#" className="hover:opacity-100 transition-opacity">Watch</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Vision</a>
        <Link to="/" className="hover:opacity-100 transition-opacity">AirPods</Link>
        <a href="#" className="hover:opacity-100 transition-opacity">TV & Home</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Entertainment</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Accessories</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Support</a>
      </div>
    </div>
    <div className="flex items-center gap-6 ml-8">
      <Search className="w-4 h-4 cursor-pointer opacity-80 hover:opacity-100" />
      <ShoppingBag className="w-4 h-4 cursor-pointer opacity-80 hover:opacity-100" />
      <Menu className="w-4 h-4 cursor-pointer md:hidden opacity-80 hover:opacity-100" />
    </div>
  </nav>
);

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

const ChipSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section ref={ref} className="h-[150vh] w-full bg-white relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-8 overflow-hidden">
        <motion.div style={{ scale, opacity }} className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Cpu className="w-24 h-24 text-zinc-900 mb-12" />
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-zinc-900 leading-tight">
              A17 Pro chip.<br />A monster win for gaming.
            </h2>
            <p className="text-2xl text-gray-600 font-medium leading-relaxed">
              It's here. The biggest redesign in the history of Apple GPUs. A17 Pro is an entirely new class of iPhone chip that delivers our best graphics performance by far.
            </p>
          </div>
          <div className="bg-zinc-900/50 p-12 rounded-[3rem] border border-black/5 relative overflow-hidden shadow-2xl">
            <Orbit className="absolute -right-20 -top-20 w-96 h-96 text-zinc-900/5" style={{ animation: 'spin 20s linear infinite' }} />
            <h3 className="text-4xl font-semibold text-zinc-900 mb-2">Up to 20% faster GPU</h3>
            <p className="text-xl text-gray-500 mb-8">Now with 6 cores</p>
            <h3 className="text-4xl font-semibold text-zinc-900 mb-2">Up to 10% faster CPU</h3>
            <p className="text-xl text-gray-500 mb-8">With 6 cores</p>
            <h3 className="text-4xl font-semibold text-zinc-900 mb-2">4x faster ray tracing</h3>
            <p className="text-xl text-gray-500">Than A16 Bionic</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CameraSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="h-[200vh] w-full bg-zinc-50 relative">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 overflow-hidden max-w-6xl mx-auto">
        <motion.div style={{ y, opacity }} className="mb-24 text-center">
          <Camera className="w-16 h-16 text-zinc-900 mx-auto mb-8" />
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 leading-tight">
            A camera that captures your wildest imagination.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0.3, 0.6], [100, 0]), opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]) }}
            className="bg-white p-12 rounded-[3rem] border border-black/10"
          >
            <Focus className="w-10 h-10 text-zinc-900 mb-6" />
            <h3 className="text-3xl font-semibold text-zinc-900 mb-4">48MP Main camera</h3>
            <p className="text-xl text-gray-600">The advanced quad-pixel sensor makes the most of 48 megapixels by adapting to what you're shooting, for phenomenal detail.</p>
          </motion.div>
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0.4, 0.7], [100, 0]), opacity: useTransform(scrollYProgress, [0.4, 0.7], [0, 1]) }}
            className="bg-white p-12 rounded-[3rem] border border-black/10"
          >
            <Target className="w-10 h-10 text-zinc-900 mb-6" />
            <h3 className="text-3xl font-semibold text-zinc-900 mb-4">5x Telephoto zoom</h3>
            <p className="text-xl text-gray-600">We designed a state-of-the-art tetraprism design — a folded glass structure below the lens — to reflect light rays four times over.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ModelComparisonSection = () => {
  return (
    <section className="py-32 w-full bg-white relative border-t border-black/5">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900">Which iPhone is right for you?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* iPhone 15 Pro */}
          <div className="flex flex-col items-center">
            <img src="/images/iphone-18-burgundy.png" alt="iPhone 18 Pro Max" className="h-64 object-contain mb-8 mask-image-b drop-shadow-2xl" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
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
            <img src="/images/iphone-duo.png" alt="iPhone Duo" className="h-64 object-contain mb-8 mask-image-b drop-shadow-2xl mix-blend-darken" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }} />
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

  return (
    <div className="w-full font-sans select-none bg-white text-zinc-900 min-h-screen">
      <div className="relative h-screen w-full overflow-hidden bg-white">
        <Navbar />

        {/* Main Showcase Panels */}
        <div className="flex h-full w-full">
          {IPHONE_PRODUCTS.map((product) => {
            const isActive = activeId === product.id;
            return (
              <motion.div
                key={product.id}
                initial={false}
                animate={{
                  width: isActive ? '100%' : '15%',
                  backgroundColor: product.bg
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.32, 0.72, 0, 1]
                }}
                onClick={() => setActiveId(product.id)}
                className="relative h-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
              >
                {/* Background Text "PRO" */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 100, scale: 0.8 }}
                      animate={{ opacity: 0.1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -100, scale: 0.8 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                    >
                      <span className="text-[20vw] font-black tracking-tighter text-white/10 leading-none">PRO</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Product Image */}
                <motion.div
                  animate={{
                    scale: isActive ? (1.2 * (product.baseScale || 1)) : (0.5 * (product.baseScale || 1)),
                    y: isActive ? -80 : 0
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  className={`relative z-20 w-[250px] md:w-[450px] pointer-events-none ${product.id === 'glacier' ? 'mix-blend-screen' : ''}`}
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    animate={{
                      y: isActive ? [0, -10, 0] : 0
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    style={{
                      WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                    }}
                  />
                </motion.div>

                {/* Active Product Details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="absolute bottom-[8%] left-0 right-0 flex flex-col items-center text-center px-10 z-30 pointer-events-none"
                    >
                      <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                        iPhone 18 Pro Max
                      </motion.h2>
                      <motion.span className="text-xl text-white/80 mb-4 font-medium tracking-tight">
                        {product.name}
                      </motion.span>
                      <motion.p className="text-white/60 max-w-md text-sm leading-relaxed mb-6">
                        {product.description}
                      </motion.p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="pointer-events-auto px-10 py-4 bg-white text-black rounded-full font-bold text-sm shadow-xl flex items-center gap-2 group"
                      >
                        Buy Now
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inactive Overlay / Tooltip */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/5">
                    <span className="text-white font-bold text-xs uppercase tracking-widest -rotate-90 whitespace-nowrap">
                      {product.name}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Side Color Indicators (Dots) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
          {IPHONE_PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="relative flex items-center justify-end group cursor-pointer p-2 -m-2" 
              onClick={() => setActiveId(product.id)}
            >
              <span className="absolute right-8 text-white text-[10px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap drop-shadow-md pointer-events-none">
                {product.name}
              </span>
              <motion.div
                animate={{
                  scale: activeId === product.id ? 1.5 : 1,
                  border: activeId === product.id ? '2px solid black' : '2px solid transparent'
                }}
                className="w-4 h-4 rounded-full shadow-lg"
                style={{ backgroundColor: product.color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Sections below the hero slider */}
      <TitaniumSection />
      <ChipSection />
      <CameraSection />
      <ModelComparisonSection />
      <Footer />
    </div>
  );
};

export default Iphone;
