import React, { useState } from 'react';
import { ArrowRight, RefreshCw, ShieldCheck, Sparkles, Laptop } from 'lucide-react';

interface CtaBannerProps {
  onOpenOrderModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenOrderModal }) => {
  const [tradeInModel, setTradeInModel] = useState<string>('m1-max-16');

  const tradeInValues: Record<string, { name: string; credit: number }> = {
    'm2-max-16': { name: 'MacBook Pro 16" (M2 Max)', credit: 1850 },
    'm1-max-16': { name: 'MacBook Pro 16" (M1 Max)', credit: 1400 },
    'm1-pro-14': { name: 'MacBook Pro 14" (M1 Pro)', credit: 950 },
    'intel-i9': { name: 'MacBook Pro 16" (Intel Core i9)', credit: 550 }
  };

  const selectedTradeIn = tradeInValues[tradeInModel] || tradeInValues['m1-max-16'];

  return (
    <section className="py-24 relative z-10 bg-gradient-to-b from-black via-zinc-950 to-black border-y border-white/10 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#0071E3]/25 via-purple-600/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass-apple rounded-3xl p-8 sm:p-16 border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2997FF]/20 border border-[#2997FF]/40 text-xs font-semibold text-[#64D2FF]">
                <Sparkles className="w-3.5 h-3.5" /> Apple ProMotion Studio Ready to Ship
              </div>

              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ready to render your <br className="hidden sm:inline" />
                <span className="shimmer-text">magnum opus?</span>
              </h2>

              <p className="text-lg text-zinc-300 max-w-xl">
                Experience 120Hz zero-latency viewports, 4.8x faster hardware ray tracing, and 128GB of unified memory. Upgrade your personal setup or deploy for your entire creative team.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenOrderModal}
                  className="px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#2997FF] text-white font-bold text-base sm:text-lg tracking-tight transition-all shadow-2xl shadow-[#0071E3]/40 flex items-center gap-2 group"
                >
                  <span>Order ProMotion Workstation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#simulator"
                  className="px-6 py-4 rounded-full glass-apple hover:bg-white/10 text-white font-semibold text-sm transition-all border border-white/15"
                >
                  Re-visit 120Hz Lab
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Free Next-Day Studio Shipping
                </span>
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4 text-[#2997FF]" /> 14-Day No-Questions Return
                </span>
              </div>
            </div>

            {/* Right: Instant Trade-In Value Estimator Card */}
            <div className="lg:col-span-5 bg-zinc-900/90 p-6 sm:p-8 rounded-2xl border border-white/15 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#2997FF]" /> Instant Trade-In Credit
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                  UP TO $1,850 VALUE
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Select your current workstation
                </label>
                <select
                  value={tradeInModel}
                  onChange={(e) => setTradeInModel(e.target.value)}
                  className="w-full p-3 rounded-xl bg-black border border-white/20 text-white font-medium text-sm focus:outline-none focus:border-[#2997FF]"
                >
                  {Object.entries(tradeInValues).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-black/60 p-5 rounded-xl border border-white/10 text-center">
                <span className="text-xs text-zinc-400 block mb-1">Estimated Apple Trade-In Credit</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">
                  -${selectedTradeIn.credit.toLocaleString()}
                </span>
                <span className="text-xs text-emerald-400 block mt-1">
                  Reduces your M4 Max upgrade starting price from $3,499 down to ${(3499 - selectedTradeIn.credit).toLocaleString()}!
                </span>
              </div>

              <button
                onClick={onOpenOrderModal}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/15 flex items-center justify-center gap-2"
              >
                Apply ${selectedTradeIn.credit} Credit to Order →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
