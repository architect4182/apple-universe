import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { Check, ArrowRight, Laptop, Monitor, Terminal, Tablet } from 'lucide-react';

interface HardwareEcosystemProps {
  onSelectProductForOrder: (productId: string) => void;
}

export const HardwareEcosystem: React.FC<HardwareEcosystemProps> = ({ onSelectProductForOrder }) => {
  const [selectedTab, setSelectedTab] = useState<string>('macbook-pro-m4-max');

  const activeProduct = PRODUCTS.find(p => p.id === selectedTab) || PRODUCTS[0];

  return (
    <section id="ecosystem" className="py-28 relative z-10 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#2997FF] uppercase tracking-wider block mb-3">
            The ProMotion Studio Hardware Ecosystem
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Mastered for motion. Engineered to work as one.
          </h2>
          <p className="text-lg text-zinc-400">
            From mobile 120Hz viewports to 6K Quantum OLED desktop reference displays, every component of the Apple ProMotion Studio is purpose-built for visual velocity.
          </p>
        </div>

        {/* Product Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PRODUCTS.map((prod) => {
            const isActive = selectedTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedTab(prod.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#0071E3] text-white border-[#2997FF] shadow-xl shadow-[#0071E3]/30 scale-105'
                    : 'glass-apple text-zinc-400 hover:text-white border-white/10'
                }`}
              >
                {prod.category === 'MacBook Pro' && <Laptop className="w-4 h-4" />}
                {prod.category === 'Display' && <Monitor className="w-4 h-4" />}
                {prod.category === 'Software' && <Terminal className="w-4 h-4" />}
                {prod.category === 'iPad Pro' && <Tablet className="w-4 h-4" />}
                <span>{prod.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Feature Showcase */}
        <div className="glass-apple rounded-3xl p-6 sm:p-12 border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visual Display */}
            <div className="lg:col-span-7 relative group">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[16/10] relative shadow-2xl">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2997FF] animate-pulse" />
                  <span>{activeProduct.badge}</span>
                </div>
              </div>

              {/* Quick Key Specs Grid overlaid / underneath */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {activeProduct.keySpecs.map((spec, i) => (
                  <div key={i} className="bg-zinc-900/80 p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[11px] text-zinc-400 block truncate">{spec.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Copy & Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#2997FF] uppercase tracking-wider">
                  {activeProduct.category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 mb-3 leading-tight">
                  {activeProduct.name}
                </h3>
                <p className="text-base sm:text-lg text-zinc-300 font-medium italic mb-4 text-emerald-400">
                  "{activeProduct.tagline}"
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Highlights Bullet List */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                  Studio Workflow Highlights
                </span>
                {activeProduct.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-[#2997FF]/20 text-[#2997FF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-zinc-400 block">Starting workstation configuration</span>
                  <span className="text-3xl font-extrabold text-white font-mono">
                    ${activeProduct.startingPrice.toLocaleString()}{' '}
                    <span className="text-xs font-normal text-zinc-400">or $149/mo</span>
                  </span>
                </div>

                <button
                  onClick={() => onSelectProductForOrder(activeProduct.id)}
                  className="px-6 py-3.5 rounded-full bg-[#0071E3] hover:bg-[#2997FF] text-white font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Configure & Order</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
