import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, ChevronRight, Menu, Search, Headphones, Battery, Bluetooth, Mic, Zap, Layers, Feather, Wind, CircleDot, Smartphone, Share2, Radio } from 'lucide-react';

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
    <section ref={ref} className="h-[250vh] w-full bg-white relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="max-w-5xl w-full text-center px-8"
        >
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-zinc-900 leading-tight">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 bg-black/80 backdrop-blur-3xl p-16 rounded-[3rem] border border-black/10 shadow-2xl">
            {[
              {
                icon: <Headphones className="w-10 h-10 mb-8 text-zinc-900" />,
                title: "Computational Audio",
                desc: "With a powerful Apple-designed H1 chip in each cup, our custom acoustic design, and advanced software."
              },
              {
                icon: <Layers className="w-10 h-10 mb-8 text-zinc-900" />,
                title: "Active Noise Cancellation",
                desc: "Industry-leading ANC counters external sound with equal anti-noise, allowing you to immerse yourself."
              },
              {
                icon: <Mic className="w-10 h-10 mb-8 text-zinc-900" />,
                title: "Transparency Mode",
                desc: "Press the noise control button to switch to Transparency mode, which lets outside sound in."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div>{feature.icon}</div>
                <h3 className="text-3xl font-semibold mb-4 text-zinc-900 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">{feature.desc}</p>
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
    <section ref={ref} className="h-[200vh] w-full bg-zinc-50 relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-8 overflow-hidden">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="max-w-5xl w-full text-center mx-auto mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-zinc-900 leading-tight">
            A radically original composition.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-medium max-w-4xl mx-auto leading-normal tracking-tight">
            The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-6xl w-full">
          {[
            {
              icon: <Wind className="w-10 h-10 mb-8 text-zinc-900" />,
              title: "Knit Mesh Canopy",
              desc: "The custom-designed mesh canopy reduces on-head pressure and distributes weight perfectly."
            },
            {
              icon: <Feather className="w-10 h-10 mb-8 text-zinc-900" />,
              title: "Memory Foam",
              desc: "Acoustically engineered memory foam ear cushions gently create an immersive seal."
            },
            {
              icon: <CircleDot className="w-10 h-10 mb-8 text-zinc-900" />,
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
              <h3 className="text-3xl font-semibold mb-4 text-zinc-900 tracking-tight">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">{feature.desc}</p>
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
    <section ref={ref} className="h-[200vh] w-full bg-white relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-8 overflow-hidden">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-16 text-zinc-900 leading-tight">
              A battery that keeps staying alive.
            </h2>
            <div className="space-y-12">
              {[
                {
                  icon: <Battery className="w-8 h-8 text-zinc-900" />,
                  title: "20 hours",
                  desc: "Up to 20 hours of listening time with a single charge with Active Noise Cancellation enabled."
                },
                {
                  icon: <Zap className="w-8 h-8 text-zinc-900" />,
                  title: "Fast Charge",
                  desc: "5 minutes of charge time provides around 1.5 hours of listening time."
                },
                {
                  icon: <Bluetooth className="w-8 h-8 text-zinc-900" />,
                  title: "Seamless switching",
                  desc: "Move effortlessly between your iPhone, iPad, and Mac."
                }
              ].map((spec, idx) => (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="mt-1">{spec.icon}</div>
                  <div>
                    <h3 className="text-3xl font-semibold mb-3 text-zinc-900 tracking-tight">{spec.title}</h3>
                    <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-sm">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-black/5 blur-[120px] rounded-full" />
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


const SpatialAudioSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 1, 0.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} className="h-[200vh] w-full bg-zinc-50 relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-8 overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-4xl w-full text-center relative z-10"
        >
          <div className="mb-12 flex justify-center relative">
            <motion.div style={{ rotate }} className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-[1px] border-black/20 rounded-full border-dashed" />
            </motion.div>
            <motion.div style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }} className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-[1px] border-black/10 rounded-full border-dashed" />
            </motion.div>
            <Radio className="w-24 h-24 text-zinc-900 relative z-10" />
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-zinc-900 leading-tight mt-16">
            Personalized Spatial Audio
          </h2>
          <p className="text-2xl text-gray-600 font-medium leading-relaxed">
            With dynamic head tracking, it provides a theater-like listening experience for movies and shows. Built-in gyroscopes and accelerometers track the subtle motion of your head, anchoring sounds to your device.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const MagicalExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section ref={ref} className="h-[200vh] w-full bg-white relative">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-8 overflow-hidden">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="max-w-5xl w-full text-center mx-auto mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-zinc-900 leading-tight">
            Magically effortless.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-medium max-w-4xl mx-auto leading-normal tracking-tight">
            From setup to Siri commands, the experience is completely seamless across all your devices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0.3, 0.5], [100, 0]), opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
            className="bg-black/80 backdrop-blur-xl p-12 rounded-[3rem] border border-black/5 hover:border-black/20 transition-colors duration-500"
          >
            <Smartphone className="w-12 h-12 text-zinc-900 mb-8" />
            <h3 className="text-3xl font-semibold text-zinc-900 mb-6">One-tap setup</h3>
            <p className="text-xl text-gray-600 leading-relaxed">AirPods Max connect immediately to your iPhone or iPad. To pair, simply place AirPods Max near your device and tap Connect on your screen.</p>
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollYProgress, [0.4, 0.6], [100, 0]), opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]) }}
            className="bg-black/80 backdrop-blur-xl p-12 rounded-[3rem] border border-black/5 hover:border-black/20 transition-colors duration-500"
          >
            <Share2 className="w-12 h-12 text-zinc-900 mb-8" />
            <h3 className="text-3xl font-semibold text-zinc-900 mb-6">Audio Sharing</h3>
            <p className="text-xl text-gray-600 leading-relaxed">Seamlessly share an audio stream between two sets of AirPods on your iPhone, iPad, Mac, or Apple TV with just a tap.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AirpodsMax: React.FC = () => {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id); // Sky Blue is active by default

  return (
    <div className="w-full font-sans select-none bg-white text-zinc-900">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-white">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between text-zinc-900 text-xs">
          <div className="flex items-center gap-8 w-full">
            <div className="flex items-center gap-4 cursor-pointer group">
              <img
                src="/images/apple.svg" className="invert" className="invert" className="invert"
                alt="Apple"
                className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity invert invert invert"
              />
              <span className="text-zinc-900/30 font-light text-xs group-hover:text-zinc-900/60 transition-colors">|</span>
              <span className="text-zinc-900/70 font-semibold tracking-widest text-[11px] uppercase group-hover:text-zinc-900 transition-colors">Chai's Studio</span>
            </div>
            <div className="hidden md:flex flex-1 justify-center gap-8 font-medium tracking-wide opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">Store</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Mac</a>
              <a href="#" className="hover:opacity-100 transition-opacity">iPad</a>
              <Link to="/iphone" className="hover:opacity-100 transition-opacity">iPhone</Link>
              <a href="#" className="hover:opacity-100 transition-opacity">Watch</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Vision</a>
              <Link to="/" className="hover:opacity-100 transition-opacity text-zinc-900/100 drop-shadow-md">AirPods</Link>
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
                      <span className="text-[20vw] font-black tracking-tighter text-zinc-900/90 leading-none">MAX</span>
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
                      <motion.span className="text-3xl font-bold text-zinc-900 mb-2 tracking-tight">
                        {product.price}
                      </motion.span>
                      <motion.p className="text-zinc-900/80 max-w-md text-sm leading-relaxed mb-8">
                        {product.description}
                      </motion.p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="pointer-events-auto px-10 py-4 bg-white text-zinc-900 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 group"
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
                    <span className="text-zinc-900 font-bold text-xs uppercase tracking-widest -rotate-90">
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
        <div className="absolute bottom-6 left-10 flex items-center gap-8 text-[10px] uppercase tracking-widest text-zinc-900/50 z-40">
          <span>Concept by Chaitanya © 2024</span>
          <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Legal</a>
        </div>
      </div>

      <AudioQualitySection />
      <DesignSection />
      <TechSpecsSection />
      <SpatialAudioSection />
      <MagicalExperienceSection />

      {/* Expanded Footer */}
      <footer className="bg-zinc-50 py-12 px-8 border-t border-black/5">
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
    </div>
  );
};

export default AirpodsMax;
