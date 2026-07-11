import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, ChevronRight, Menu, Search, Headphones, Battery, Bluetooth, Mic, Zap, Layers, Feather, Wind, CircleDot } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'sky-blue',
    name: 'Sky Blue',
    color: '#9BB7D4',
    bg: '#A9C4E0',
    image: '/images/airpods-max-blue.svg',
    price: '$549.00',
    description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.'
  },
  {
    id: 'pink',
    name: 'Pink',
    color: '#F9B7B7',
    bg: '#FFC5C5',
    image: '/images/airpods-max-pink.svg',
    price: '$549.00',
    description: 'Experience the ultimate listening experience with an industrial design that is as comfortable as it is beautiful.'
  },
  {
    id: 'green',
    name: 'Green',
    color: '#AFBCA0',
    bg: '#BDCCAD',
    image: '/images/airpods-max-green.svg',
    price: '$549.00',
    description: 'High-fidelity audio combined with industry-leading Active Noise Cancellation for an unparalleled experience.'
  },
  {
    id: 'space-gray',
    name: 'Black',
    color: '#000000',
    bg: '#121212',
    image: '/images/airpods-max-black.svg',
    price: '$549.00',
    description: 'Computational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough sound.'
  },
  {
    id: 'white',
    name: 'White',
    color: '#E3E3E3',
    bg: '#F5F5F5',
    image: '/images/airpods-max-white.svg',
    price: '$549.00',
    description: 'A minimalist and elegant design with exceptional high-fidelity audio and Active Noise Cancellation.'
  }
];

const AudioQualitySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const featuresY = useTransform(scrollYProgress, [0.2, 0.7], ["60vh", "-10vh"]);
  const featuresOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section ref={ref} className="h-[250vh] w-full bg-black relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="max-w-5xl w-full text-center px-8"
        >
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-white leading-tight">
            Sounds like an epiphany.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-medium max-w-4xl mx-auto leading-normal tracking-tight">
            Active Noise Cancellation with Transparency mode. Spatial audio for theater-like sound that surrounds you.
          </p>
        </motion.div>
        
        <motion.div 
          style={{ y: featuresY, opacity: featuresOpacity }}
          className="absolute w-full px-8 max-w-6xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 bg-black/80 backdrop-blur-3xl p-16 rounded-[3rem] border border-white/10 shadow-2xl">
            {[
              {
                icon: <Headphones className="w-10 h-10 mb-8 text-white" />,
                title: "Computational Audio",
                desc: "With a powerful Apple-designed H1 chip in each cup, our custom acoustic design, and advanced software."
              },
              {
                icon: <Layers className="w-10 h-10 mb-8 text-white" />,
                title: "Active Noise Cancellation",
                desc: "Industry-leading ANC counters external sound with equal anti-noise, allowing you to immerse yourself."
              },
              {
                icon: <Mic className="w-10 h-10 mb-8 text-white" />,
                title: "Transparency Mode",
                desc: "Press the noise control button to switch to Transparency mode, which lets outside sound in."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div>{feature.icon}</div>
                <h3 className="text-3xl font-semibold mb-4 text-white tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DesignSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  
  const iconScale1 = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const iconOpacity1 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const iconScale2 = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const iconOpacity2 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  const iconScale3 = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]);
  const iconOpacity3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const featureAnims = [
    { scale: iconScale1, opacity: iconOpacity1 },
    { scale: iconScale2, opacity: iconOpacity2 },
    { scale: iconScale3, opacity: iconOpacity3 },
  ];

  return (
    <section ref={ref} className="h-[200vh] w-full bg-zinc-950 relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-8 overflow-hidden">
        <motion.div 
          style={{ y: titleY, opacity: titleOpacity }}
          className="max-w-5xl w-full text-center mx-auto mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-white leading-tight">
            A radically original composition.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-medium max-w-4xl mx-auto leading-normal tracking-tight">
            The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-6xl w-full">
          {[
            {
              icon: <Wind className="w-10 h-10 mb-8 text-white" />,
              title: "Knit Mesh Canopy",
              desc: "The custom-designed mesh canopy reduces on-head pressure and distributes weight perfectly."
            },
            {
              icon: <Feather className="w-10 h-10 mb-8 text-white" />,
              title: "Memory Foam",
              desc: "Acoustically engineered memory foam ear cushions gently create an immersive seal."
            },
            {
              icon: <CircleDot className="w-10 h-10 mb-8 text-white" />,
              title: "Digital Crown",
              desc: "Control volume, skip tracks, and answer calls with precise, tactile feedback."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              style={featureAnims[idx]}
              className="flex flex-col items-center text-center px-4"
            >
              <div>{feature.icon}</div>
              <h3 className="text-3xl font-semibold mb-4 text-white tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechSpecsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0.2, 0.8], [0.85, 1.15]);
  const imageRotate = useTransform(scrollYProgress, [0.2, 0.8], [-5, 5]);

  return (
    <section ref={ref} className="h-[200vh] w-full bg-black relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-8 overflow-hidden">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-16 text-white leading-tight">
              A battery that keeps staying alive.
            </h2>
            <div className="space-y-12">
              {[
                {
                  icon: <Battery className="w-8 h-8 text-white" />,
                  title: "20 hours",
                  desc: "Up to 20 hours of listening time with a single charge with Active Noise Cancellation enabled."
                },
                {
                  icon: <Zap className="w-8 h-8 text-white" />,
                  title: "Fast Charge",
                  desc: "5 minutes of charge time provides around 1.5 hours of listening time."
                },
                {
                  icon: <Bluetooth className="w-8 h-8 text-white" />,
                  title: "Seamless switching",
                  desc: "Move effortlessly between your iPhone, iPad, and Mac."
                }
              ].map((spec, idx) => (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="mt-1">{spec.icon}</div>
                  <div>
                    <h3 className="text-3xl font-semibold mb-3 text-white tracking-tight">{spec.title}</h3>
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-sm">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
             <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full" />
             <motion.img 
               style={{ scale: imageScale, rotate: imageRotate }}
               src="/images/airpods-max-black.svg" 
               alt="Airpods Max Black" 
               className="relative z-10 w-full object-contain" 
             />
          </div>
        </div>
      </div>
    </section>
  );
};


const App: React.FC = () => {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id); // Sky Blue is active by default

  return (
    <div className="w-full font-sans select-none bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-8 w-full">
            <img 
              src="/images/apple.svg" 
              alt="Apple"
              className="w-4 h-4 opacity-80 hover:opacity-100 cursor-pointer" 
            />
            <div className="hidden md:flex flex-1 justify-center gap-8 font-medium tracking-wide opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">Store</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Mac</a>
              <a href="#" className="hover:opacity-100 transition-opacity">iPad</a>
              <a href="#" className="hover:opacity-100 transition-opacity">iPhone</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Watch</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Vision</a>
              <a href="#" className="hover:opacity-100 transition-opacity">AirPods</a>
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

        {/* Main Showcase Panels */}
        <div className="flex h-full w-full">
          {PRODUCTS.map((product) => {
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
                {/* Background Text "APPLE" */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 100, scale: 0.8 }}
                      animate={{ opacity: 0.1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -100, scale: 0.8 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                    >
                      <span className="text-[20vw] font-black tracking-tighter text-white leading-none">APPLE</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Product Image */}
                <motion.div
                  animate={{
                    scale: isActive ? 1 : 0.4,
                    y: isActive ? -50 : 0,
                    rotate: isActive ? -15 : 0
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  className="relative z-20 w-[400px] h-[400px] pointer-events-none"
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    animate={{
                      y: isActive ? [0, -20, 0] : 0
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full object-contain drop-shadow-2xl"
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
                      className="absolute bottom-[10%] left-0 right-0 flex flex-col items-center text-center px-10 z-30 pointer-events-none"
                    >
                      <motion.span className="text-3xl font-bold text-white mb-2 tracking-tight">
                        {product.price}
                      </motion.span>
                      <motion.p className="text-white/80 max-w-md text-sm leading-relaxed mb-8">
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
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                    <span className="text-white font-bold text-xs uppercase tracking-widest -rotate-90">
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
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              onClick={() => setActiveId(product.id)}
              animate={{
                scale: activeId === product.id ? 1.5 : 1,
                border: activeId === product.id ? '2px solid white' : '2px solid transparent'
              }}
              className="w-4 h-4 rounded-full cursor-pointer shadow-lg"
              style={{ backgroundColor: product.color }}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-10 flex items-center gap-8 text-[10px] uppercase tracking-widest text-white/50 z-40">
          <span>© 2024 Apple Inc.</span>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>

      <AudioQualitySection />
      <DesignSection />
      <TechSpecsSection />
      
      {/* Expanded Footer */}
      <footer className="bg-zinc-950 py-12 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-gray-500 font-medium">
          <div>© 2024 Apple Inc. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sales and Refunds</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
