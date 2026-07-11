import React, { useState } from 'react';
import { WorkstationConfig } from '../types';
import { Sliders, Cpu, Check, ShieldCheck, ArrowRight, Zap, Award } from 'lucide-react';

interface WorkstationConfiguratorProps {
  onOrderConfigured: (config: WorkstationConfig, totalPrice: number) => void;
}

export const WorkstationConfigurator: React.FC<WorkstationConfiguratorProps> = ({ onOrderConfigured }) => {
  const [config, setConfig] = useState<WorkstationConfig>({
    finish: 'space-black',
    chip: 'm4-max-40-gpu',
    memory: 64,
    storage: 2,
    displayAddon: 'xdr-standard',
    softwareSuite: true
  });

  // Calculate dynamic pricing and render score based on configuration
  const calculateTotal = () => {
    let base = 2499;

    // Chip pricing
    if (config.chip === 'm4-max-16') base += 600;
    if (config.chip === 'm4-max-40-gpu') base += 1000;

    // Memory pricing
    if (config.memory === 64) base += 400;
    if (config.memory === 128) base += 1200;

    // Storage pricing
    if (config.storage === 2) base += 400;
    if (config.storage === 4) base += 1000;
    if (config.storage === 8) base += 2200;

    // Display pricing
    if (config.displayAddon === 'xdr-standard') base += 4999;
    if (config.displayAddon === 'xdr-nano') base += 5999;

    // Software Suite
    if (config.softwareSuite) base += 299;

    return base;
  };

  const calculateRenderScore = () => {
    let score = 55;
    if (config.chip === 'm4-max-16') score += 15;
    if (config.chip === 'm4-max-40-gpu') score += 25;
    if (config.memory === 64) score += 10;
    if (config.memory === 128) score += 18;
    return Math.min(100, score);
  };

  const totalPrice = calculateTotal();
  const renderScore = calculateRenderScore();

  return (
    <section id="configurator" className="py-28 relative z-10 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#2997FF] uppercase tracking-wider block mb-3">
            Interactive Studio Configurator
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Build your ProMotion Workstation.
          </h2>
          <p className="text-lg text-zinc-400">
            Tailor silicon performance, unified memory capacity, and Quantum OLED display pairings to match your exact studio rendering pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Live Specs & Render Telemetry Dashboard */}
          <div className="lg:col-span-5 glass-apple p-6 sm:p-8 rounded-3xl border border-white/15 sticky top-28 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#2997FF]" /> Live Build Telemetry
              </span>
              <span className="px-2.5 py-1 rounded bg-[#2997FF]/20 text-[#2997FF] text-xs font-mono font-bold flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#2997FF] fill-current animate-bounce" /> PROMOTION STUDIO READY
              </span>
            </div>

            {/* Visual Chassis Preview Card */}
            <div className="rounded-2xl bg-zinc-900/80 p-6 border border-white/10 text-center relative overflow-hidden">
              <div className="w-full aspect-[16/9] mb-4 flex items-center justify-center relative">
                <div className={`w-4/5 h-4/5 rounded-xl border border-white/20 transition-colors duration-500 flex items-center justify-center relative shadow-2xl ${
                  config.finish === 'space-black' ? 'bg-[#121214]' : 'bg-[#e2e4e8]'
                }`}>
                  <span className={`text-xs font-bold ${config.finish === 'space-black' ? 'text-zinc-400' : 'text-zinc-700'}`}>
                    MacBook Pro 16" ({config.finish === 'space-black' ? 'Space Black' : 'Silver'})
                  </span>
                  {config.displayAddon !== 'none' && (
                    <div className="absolute -top-6 -right-6 w-24 h-16 rounded-lg bg-black border border-[#2997FF] shadow-xl flex items-center justify-center text-[9px] text-[#2997FF] font-mono">
                      + XDR 2 120Hz
                    </div>
                  )}
                </div>
              </div>

              {/* Render Score Meter */}
              <div className="text-left bg-black/60 p-4 rounded-xl border border-white/5 mt-2">
                <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                  <span className="text-zinc-300">3D Ray Tracing Velocity Index</span>
                  <span className="text-[#2997FF] font-bold">{renderScore} / 100 PTS</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0071E3] via-[#2997FF] to-emerald-400 transition-all duration-500"
                    style={{ width: `${renderScore}%` }}
                  />
                </div>
                <span className="text-[10px] text-zinc-400 block mt-1.5">
                  {renderScore >= 90
                    ? '⚡ Ultra Workstation: Handles 8K volumetric particle sims seamlessly without proxies.'
                    : '🔥 Pro Creator: Superb performance across After Effects and Blender viewport ray tracing.'}
                </span>
              </div>
            </div>

            {/* Summary List */}
            <div className="space-y-3 text-xs font-mono text-zinc-300">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400">Silicon Engine:</span>
                <span className="text-white font-bold text-right">
                  {config.chip === 'm4-pro-14' && 'M4 Pro (14-Core CPU / 20-Core GPU)'}
                  {config.chip === 'm4-max-16' && 'M4 Max (16-Core CPU / 32-Core GPU)'}
                  {config.chip === 'm4-max-40-gpu' && 'M4 Max (16-Core CPU / 40-Core GPU + RT)'}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400">Unified Memory Pool:</span>
                <span className="text-white font-bold">{config.memory}GB High-Bandwidth Pool</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400">NVMe SSD Storage:</span>
                <span className="text-white font-bold">{config.storage}TB (7.4 GB/s speed)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-400">External Studio Monitor:</span>
                <span className="text-emerald-400 font-bold">
                  {config.displayAddon === 'none' && 'No External Display'}
                  {config.displayAddon === 'xdr-standard' && 'Pro Display XDR 2 Standard Glass'}
                  {config.displayAddon === 'xdr-nano' && 'Pro Display XDR 2 Nano-Texture'}
                </span>
              </div>
              {config.softwareSuite && (
                <div className="flex justify-between py-2 text-[#BF5AF2]">
                  <span>Pre-Installed Software:</span>
                  <span className="font-bold">Apple Motion & FCP X Suite Included</span>
                </div>
              )}
            </div>

            {/* Total Price & CTA Button */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-zinc-400 uppercase tracking-wider">Total Investment</span>
                <div className="text-right font-mono">
                  <span className="text-3xl font-extrabold text-white block">
                    ${totalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-emerald-400">
                    Or ${(totalPrice / 24).toFixed(0)}/mo with 0% Studio Financing
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOrderConfigured(config, totalPrice)}
                className="w-full py-4 rounded-full bg-[#0071E3] hover:bg-[#2997FF] text-white font-bold text-sm transition-all shadow-xl shadow-[#0071E3]/40 flex items-center justify-center gap-2 group"
              >
                <span>Order Custom Build</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" /> 3-Year AppleCare+ Studio Support
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#2997FF]" /> Free 14-Day Studio Trial
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Configuration Options */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Finish */}
            <div className="glass-apple p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#2997FF] font-mono">1</span>
                Select Finish
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 'space-black', label: 'Space Black', desc: 'Anodized fingerprint seal', colorHex: '#1d1d1f' },
                  { id: 'silver', label: 'Silver Titanium', desc: 'Classic Apple studio alloy', colorHex: '#e3e4e6' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setConfig({ ...config, finish: f.id as any })}
                    className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      config.finish === f.id
                        ? 'bg-white/10 border-[#2997FF] shadow-lg scale-[1.02]'
                        : 'bg-zinc-900/40 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-white text-sm block">{f.label}</span>
                      <span className="text-xs text-zinc-400">{f.desc}</span>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-white/30 shadow-inner" style={{ backgroundColor: f.colorHex }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: System-on-Chip (SoC) */}
            <div className="glass-apple p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#2997FF] font-mono">2</span>
                Apple Silicon Engine & Ray Tracing Cores
              </h3>
              <div className="space-y-3">
                {[
                  {
                    id: 'm4-pro-14',
                    name: 'Apple M4 Pro with 14-Core CPU, 20-Core GPU, 16-Core Neural Engine',
                    desc: 'Perfect for standard 4K motion graphics and UI prototype interaction.',
                    priceAdd: 'Included in base'
                  },
                  {
                    id: 'm4-max-16',
                    name: 'Apple M4 Max with 16-Core CPU, 32-Core GPU, 16-Core Neural Engine',
                    desc: 'Accelerates fluid dynamics, particle emitters, and real-time optical flow.',
                    priceAdd: '+$600'
                  },
                  {
                    id: 'm4-max-40-gpu',
                    name: 'Apple M4 Max with 16-Core CPU, 40-Core GPU + Hardware Ray Tracing',
                    desc: 'The flagship monster. Unlocks maximum viewport ray tracing velocity at 120 FPS.',
                    priceAdd: '+$1,000'
                  }
                ].map((chipOption) => (
                  <button
                    key={chipOption.id}
                    onClick={() => setConfig({ ...config, chip: chipOption.id as any })}
                    className={`w-full p-4.5 rounded-2xl border text-left flex items-start justify-between transition-all ${
                      config.chip === chipOption.id
                        ? 'bg-white/10 border-[#2997FF] shadow-lg scale-[1.01]'
                        : 'bg-zinc-900/40 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Cpu className="w-4 h-4 text-[#2997FF]" />
                        <span className="font-bold text-white text-sm">{chipOption.name}</span>
                      </div>
                      <span className="text-xs text-zinc-400 block">{chipOption.desc}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#2997FF] whitespace-nowrap pt-1">
                      {chipOption.priceAdd}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Unified Memory */}
            <div className="glass-apple p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#2997FF] font-mono">3</span>
                Unified Memory (RAM + VRAM Pool)
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { ram: 36, label: '36GB Unified', price: 'Included' },
                  { ram: 64, label: '64GB Unified', price: '+$400' },
                  { ram: 128, label: '128GB Pro Pool', price: '+$1,200' }
                ].map((m) => (
                  <button
                    key={m.ram}
                    onClick={() => setConfig({ ...config, memory: m.ram as any })}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      config.memory === m.ram
                        ? 'bg-white/10 border-[#2997FF] shadow-lg scale-105'
                        : 'bg-zinc-900/40 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="font-mono font-bold text-white text-base block mb-0.5">{m.label}</span>
                    <span className="text-[11px] text-[#2997FF] font-mono block">{m.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Pro Display XDR 2 Addon */}
            <div className="glass-apple p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-[#2997FF] font-mono">4</span>
                External Pro Display XDR 2 (6K 120Hz ProMotion)
              </h3>
              <div className="space-y-3">
                {[
                  { id: 'none', label: 'No External Monitor (MacBook Pro Only)', price: '$0' },
                  { id: 'xdr-standard', label: 'Pro Display XDR 2 with Standard Nano-Reflective Glass + Pro Stand', price: '+$4,999' },
                  { id: 'xdr-nano', label: 'Pro Display XDR 2 with Nano-Texture Etched Glass + Pro Stand', price: '+$5,999' }
                ].map((disp) => (
                  <button
                    key={disp.id}
                    onClick={() => setConfig({ ...config, displayAddon: disp.id as any })}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      config.displayAddon === disp.id
                        ? 'bg-white/10 border-emerald-400 shadow-lg'
                        : 'bg-zinc-900/40 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="font-bold text-white text-sm">{disp.label}</span>
                    <span className="font-mono text-xs font-bold text-emerald-400 whitespace-nowrap ml-4">{disp.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Pre-Installed Software Suite */}
            <div className="glass-apple p-6 sm:p-8 rounded-3xl border border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#BF5AF2]" /> Pre-Install Apple Motion 6 & Final Cut Pro X Suite
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Lifetime native M4 optimization license. Instant setup out of the box with zero downloads.
                </p>
              </div>
              <button
                onClick={() => setConfig({ ...config, softwareSuite: !config.softwareSuite })}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border transition-all ${
                  config.softwareSuite
                    ? 'bg-[#BF5AF2] text-white border-[#BF5AF2]'
                    : 'bg-zinc-900 text-zinc-400 border-white/20'
                }`}
              >
                {config.softwareSuite ? '✓ Included (+$299)' : '+ Add Suite ($299)'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
