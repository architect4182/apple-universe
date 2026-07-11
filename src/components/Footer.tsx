import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-400 text-xs py-16 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Footnotes & Disclaimers */}
        <div className="space-y-3 text-[11px] text-zinc-500 leading-relaxed border-b border-white/10 pb-8">
          <p>
            1. 120Hz ProMotion variable refresh rate technology adapts dynamically based on active screen content, from 1Hz up to 120Hz. External monitor support up to 6K at 120Hz requires Pro Display XDR 2 connected via Thunderbolt 5 with Apple M4 Max silicon.
          </p>
          <p>
            2. Testing conducted by Apple using pre-production 16-inch MacBook Pro systems with Apple M4 Max, 16-core CPU, 40-core GPU, and 128GB of unified memory. Performance tests conducted using Maxon Cinema 4D 2026, Blender 4.3 Cycles ray-tracing viewport, and Adobe After Effects multi-frame render engine.
          </p>
          <p>
            3. Trade-in values vary based on the condition, year, and configuration of your trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase.
          </p>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 font-medium">
          <div className="space-y-3">
            <span className="font-bold text-white block text-sm mb-4">Hardware & Silicon</span>
            <ul className="space-y-2">
              <li><a href="#ecosystem" className="hover:text-white transition-colors">MacBook Pro 16" M4 Max</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Pro Display XDR 2 (OLED)</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">iPad Pro M4 & Pencil Pro</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Mac Studio M4 Ultra</a></li>
              <li><a href="#configurator" className="hover:text-white transition-colors text-[#2997FF]">Configure Custom Build</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-bold text-white block text-sm mb-4">Creative Software Suite</span>
            <ul className="space-y-2">
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Apple Motion 6 Pro</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Final Cut Pro X Studio</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Neural Keyframe Assistant</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Metal 3 Hardware Ray Tracing</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">USDZ Spatial 3D Pipeline</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-bold text-white block text-sm mb-4">Motion Design & Labs</span>
            <ul className="space-y-2">
              <li><a href="#simulator" className="hover:text-white transition-colors font-semibold text-emerald-400">120Hz vs 60Hz Comparison</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Spring Physics Damping Lab</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">100% DCI-P3 Color Spectrometer</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Studio ROI Calculator</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Thermal Acoustic Specs</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-bold text-white block text-sm mb-4">Studio Teams & Enterprise</span>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-white transition-colors">Studio Workstation Bundles</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">0% APR 24-Mo Financing</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">White-Glove Fleet Installation</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">AppleCare+ for Studios</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Enterprise Trade-In Credits</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-bold text-white block text-sm mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Pro & Environmental
            </span>
            <ul className="space-y-2">
              <li><span className="text-zinc-300">100% Recycled Aluminum</span></li>
              <li><span className="text-zinc-300">Zero Rare Earth Mining</span></li>
              <li><span className="text-zinc-300">Net Zero Studio Footprint</span></li>
              <li><span className="text-zinc-300">Arsenic-Free Display Glass</span></li>
              <li><span className="text-zinc-300">Beryllium-Free Enclosure</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold flex items-center gap-1.5">
               Apple ProMotion Studio
            </span>
            <span>| Engineered for designers worldwide.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Sales and Refunds</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
