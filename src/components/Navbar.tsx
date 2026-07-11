import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ChevronRight, Monitor, Cpu, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, onOpenSimulator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fps, setFps] = useState(120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate real-time 120Hz ProMotion stability
  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = Math.random() > 0.85 ? Math.floor(Math.random() * 2) - 1 : 0;
      setFps(Math.min(120, Math.max(119, 120 + fluctuation)));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-apple-header py-3 shadow-2xl shadow-black/80' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white via-zinc-300 to-zinc-600 flex items-center justify-center shadow-lg shadow-white/10 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-black fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.13-1.9-14.34-6.08-3.69-3.03-7.74-7.83-12.16-14.4-6.84-10.13-12.23-21.65-16.18-34.56-3.95-12.91-5.92-25.13-5.92-36.68 0-14.62 3.66-26.69 10.98-36.2 7.32-9.51 16.55-14.33 27.69-14.46 4.35 0 9.04 1.05 14.08 3.17 5.04 2.12 8.78 3.23 11.23 3.33 1.88 0 5.61-1.15 11.19-3.46 5.58-2.31 10.36-3.41 14.34-3.3 11.45.62 20.65 4.88 27.59 12.77-9.96 6.07-14.83 14.46-14.62 25.18.21 8.84 3.49 16.19 9.84 22.04 6.35 5.85 13.9 8.97 22.65 9.35-.91 6.94-3.16 14.52-6.75 22.73zM119.22 31.89c0-6.74 2.37-13.16 7.11-19.26 4.74-6.1 10.66-9.83 17.76-11.2-1.05 7.63-3.95 14.43-8.7 20.4-4.75 5.97-10.36 9.68-16.17 10.06-.06-.88-.06-.88-.06-.06z" />
                </svg>
              </div>
              <span className="font-semibold text-lg tracking-tight text-white flex items-center gap-1.5">
                ProMotion <span className="text-[#2997FF] font-light">Studio</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 bg-zinc-900/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium">
              <a href="#ecosystem" className="px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
                Hardware Ecosystem
              </a>
              <button
                onClick={onOpenSimulator}
                className="px-3 py-1.5 rounded-full text-[#2997FF] hover:text-white hover:bg-[#2997FF]/20 transition-colors flex items-center gap-1.5 font-semibold"
              >
                <Layers className="w-3.5 h-3.5 animate-pulse" />
                120Hz Motion Lab
              </button>
              <a href="#features" className="px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
                Keyframe & Ray Tracing
              </a>
              <a href="#configurator" className="px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
                Configurator
              </a>
              <a href="#pricing" className="px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
                Pricing & ROI
              </a>
              <a href="#faq" className="px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
                FAQ
              </a>
            </nav>

            {/* Right Status & CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Live telemetry badge */}
              <div
                onClick={onOpenSimulator}
                className="cursor-pointer bg-black/60 border border-[#2997FF]/40 rounded-full px-3 py-1 flex items-center gap-2 text-xs font-mono text-[#64D2FF] shadow-inner shadow-[#2997FF]/20 hover:border-[#2997FF] transition-all"
                title="Click to launch interactive ProMotion 120Hz simulator"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#2997FF] animate-spin" style={{ animationDuration: '6s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] animate-ping" />
                <span>{fps} FPS ProMotion Active</span>
              </div>

              <button
                onClick={onOpenOrderModal}
                className="bg-[#0071E3] hover:bg-[#2997FF] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 shadow-lg shadow-[#0071E3]/25 hover:shadow-[#2997FF]/40 flex items-center gap-1.5 group"
              >
                <span>Order Studio Setup</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-24 px-6 md:hidden flex flex-col justify-between pb-10 animate-fadeIn">
          <div className="flex flex-col gap-5 text-xl font-semibold">
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-300 hover:text-[#2997FF] border-b border-white/10 flex items-center justify-between"
            >
              <span>Hardware Ecosystem</span>
              <Monitor className="w-5 h-5 text-zinc-500" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="py-2 text-[#2997FF] text-left border-b border-white/10 flex items-center justify-between"
            >
              <span>120Hz Motion Design Lab</span>
              <Layers className="w-5 h-5 text-[#2997FF]" />
            </button>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-300 hover:text-[#2997FF] border-b border-white/10 flex items-center justify-between"
            >
              <span>Keyframe & Ray Tracing</span>
              <Cpu className="w-5 h-5 text-zinc-500" />
            </a>
            <a
              href="#configurator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-300 hover:text-[#2997FF] border-b border-white/10 flex items-center justify-between"
            >
              <span>Configurator</span>
              <ChevronRight className="w-5 h-5 text-zinc-500" />
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-300 hover:text-[#2997FF] border-b border-white/10 flex items-center justify-between"
            >
              <span>Pricing & ROI Calculator</span>
              <ChevronRight className="w-5 h-5 text-zinc-500" />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-300 hover:text-[#2997FF] border-b border-white/10 flex items-center justify-between"
            >
              <span>FAQ</span>
              <ChevronRight className="w-5 h-5 text-zinc-500" />
            </a>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-white/10 text-center">
              <span className="text-xs text-zinc-400 block uppercase tracking-wider mb-1">Status Telemetry</span>
              <span className="text-sm font-mono text-[#2997FF] font-semibold">{fps} FPS ProMotion Active</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full bg-[#0071E3] text-white py-4 rounded-2xl font-semibold text-center shadow-xl shadow-[#0071E3]/30"
            >
              Order Pro Studio Setup
            </button>
          </div>
        </div>
      )}
    </>
  );
};
