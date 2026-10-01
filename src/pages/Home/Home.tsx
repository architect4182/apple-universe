import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar theme="dark" activePage="store" />

      {/* Hero 1: iPhone 18 Pro Max */}
      <section className="relative w-full h-screen flex flex-col items-center justify-start pt-32 overflow-hidden bg-black text-white">
        <div className="text-center z-10 flex flex-col items-center mt-8">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2">iPhone 18 Pro Max</h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-medium tracking-tight mb-6">Titanium. Designed for Apple Intelligence.</h2>
          <div className="flex gap-6">
            <Link to="/iphone" onClick={() => window.scrollTo(0,0)} className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg">
              Learn more
            </Link>
            <Link to="/iphone" onClick={() => window.scrollTo(0,0)} className="px-6 py-3 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
              Buy <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-[65%] flex items-end justify-center pointer-events-none">
          <img 
            src="/images/iphone-18-burgundy.png" 
            alt="iPhone 18 Pro Max" 
            className="h-full object-contain object-bottom drop-shadow-2xl translate-y-16" 
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }} 
          />
        </div>
      </section>

      {/* Hero 2: iPhone Duo */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-start pt-24 overflow-hidden bg-[#f5f5f7] text-zinc-900 border-t-[8px] border-white">
        <div className="text-center z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2 text-zinc-900">iPhone Duo</h1>
          <h2 className="text-2xl md:text-3xl text-zinc-600 font-medium tracking-tight mb-6">The ultimate foldable experience.</h2>
          <div className="flex gap-6">
            <Link to="/iphone" onClick={() => window.scrollTo(0,0)} className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-blue-600/30">
              Learn more
            </Link>
            <Link to="/iphone" onClick={() => window.scrollTo(0,0)} className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2">
              Buy <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full flex items-end justify-center pointer-events-none mt-32">
          <img 
            src="/images/iphone-duo-white.png" 
            alt="iPhone Duo" 
            className="h-[75%] object-contain object-bottom drop-shadow-2xl translate-y-8" 
          />
        </div>
      </section>

      {/* Grid: AirPods Max */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
        
        {/* AirPods Max */}
        <section className="relative w-full h-[600px] bg-black text-white flex flex-col items-center pt-16 overflow-hidden rounded-2xl group">
          <div className="text-center z-20 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2">AirPods Max</h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-medium tracking-tight mb-6">High-fidelity audio.</h2>
            <div className="flex gap-4">
              <Link to="/airpods" onClick={() => window.scrollTo(0,0)} className="px-5 py-2.5 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg">
                Learn more
              </Link>
              <Link to="/airpods" onClick={() => window.scrollTo(0,0)} className="px-5 py-2.5 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors flex items-center gap-1">
                Buy <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex items-center justify-center pointer-events-none z-10 pb-8 mt-8">
            <img 
              src="/images/airpods-max-black.svg" 
              alt="AirPods Max" 
              className="h-[280px] md:h-[340px] w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-lighten" 
            />
          </div>
        </section>

        {/* Watch placeholder */}
        <section className="relative w-full h-[600px] bg-[#f5f5f7] text-zinc-900 flex flex-col items-center justify-center p-8 overflow-hidden rounded-2xl group">
          <div className="text-center z-10 flex flex-col items-center justify-center">
            <img src="/images/apple.svg" className="w-10 h-10 mb-6 opacity-90 invert" alt="Apple" />
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-2">WATCH</h1>
            <h2 className="text-base md:text-lg text-red-600 font-bold tracking-widest mb-6 uppercase">Series X</h2>
            <p className="text-2xl text-zinc-600 font-medium mb-8">Thinner. Greater.</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg">
                Coming soon
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <footer className="bg-zinc-100 py-12 px-8 mt-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <p className="text-xs text-gray-500 font-medium leading-relaxed">
            Concept design by Chaitanya. Not affiliated with Apple Inc. All product names, logos, and brands are property of their respective owners.
          </p>
          <div className="w-full h-px bg-black/10 my-4" />
          <p className="text-sm font-semibold text-zinc-700">Apple Universe Storefront</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
