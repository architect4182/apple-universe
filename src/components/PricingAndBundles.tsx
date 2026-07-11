import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/mockData';
import { Check, ArrowRight, Calculator, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface PricingAndBundlesProps {
  onSelectTierForOrder: (tierId: string) => void;
}

export const PricingAndBundles: React.FC<PricingAndBundlesProps> = ({ onSelectTierForOrder }) => {
  const [teamSize, setTeamSize] = useState<number>(4);
  const [hourlyRate, setHourlyRate] = useState<number>(125);
  const [hoursWaitedWeekly, setHoursWaitedWeekly] = useState<number>(8);

  // M4 Max cuts render & preview waiting time by ~74%
  const hoursSavedPerDesignerWeekly = hoursWaitedWeekly * 0.74;
  const totalHoursSavedYearly = Math.round(hoursSavedPerDesignerWeekly * 50 * teamSize);
  const netFinancialReturnYearly = totalHoursSavedYearly * hourlyRate;
  const estimatedEquipmentCost = teamSize * 4500;
  const paybackPeriodMonths = ((estimatedEquipmentCost / (netFinancialReturnYearly / 12)) || 1).toFixed(1);

  return (
    <section id="pricing" className="py-28 relative z-10 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-[#2997FF] uppercase tracking-wider block mb-3">
            Transparent Tiered Investment & Bundles
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Invest in your creative velocity.
          </h2>
          <p className="text-lg text-zinc-400">
            Choose from tailored hardware/software bundles, or configure multi-workstation deployments with AppleCare+ and next-day hardware swap for studio peace of mind.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'glass-apple border-2 border-[#2997FF] shadow-2xl shadow-[#0071E3]/20 lg:-translate-y-4 scale-[1.02]'
                  : 'glass-apple border border-white/10 hover:border-white/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 inset-x-0 mx-auto w-fit px-4 py-1 rounded-full bg-[#2997FF] text-black font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-current" /> Most Popular Studio Setup
                </div>
              )}

              <div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-zinc-400 min-h-[36px] mb-6">
                  {tier.tagline}
                </p>

                <div className="mb-8 font-mono">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    ${tier.priceUpfront.toLocaleString()}
                  </span>
                  <span className="text-xs text-zinc-400 block mt-1">
                    or ${tier.priceMonthly}/mo (24-mo 0% studio lease)
                  </span>
                </div>

                <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
                  <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block">
                    What's Included
                  </span>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-[#2997FF]/20 text-[#2997FF] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectTierForOrder(tier.id)}
                  className={`w-full py-4 rounded-full font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-[#0071E3] hover:bg-[#2997FF] text-white shadow-[#0071E3]/40'
                      : 'bg-white hover:bg-zinc-200 text-black'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center mt-3 text-[11px] text-zinc-400 font-mono flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> AppleCare+ Priority Support Included
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Studio ROI Calculator */}
        <div className="glass-apple rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-[#0071E3]/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-[#2997FF] font-mono text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" /> Motion Design Studio ROI Calculator
              </div>
              <h3 className="text-3xl font-bold text-white leading-tight">
                Calculate your studio's time recovery & profit opportunity.
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Slow render exports, proxy generation, and 60Hz stutter cost creative agencies hundreds of hours annually. See how rapidly an M4 Max fleet pays for itself.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                {/* Slider 1: Team Size */}
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-zinc-300">Motion Designers / 3D Artists on Team</span>
                    <span className="font-mono text-[#2997FF] font-bold">{teamSize} {teamSize === 1 ? 'Artist' : 'Artists'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-[#2997FF] bg-zinc-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Slider 2: Hourly Billing Rate */}
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-zinc-300">Average Studio Hourly Billing / Value Rate</span>
                    <span className="font-mono text-emerald-400 font-bold">${hourlyRate} / hour</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="300"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-zinc-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Slider 3: Weekly Wait Hours */}
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-zinc-300">Hours Lost Weekly per Designer (Render/Proxy wait)</span>
                    <span className="font-mono text-[#BF5AF2] font-bold">{hoursWaitedWeekly} hours / wk</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="18"
                    value={hoursWaitedWeekly}
                    onChange={(e) => setHoursWaitedWeekly(Number(e.target.value))}
                    className="w-full accent-[#BF5AF2] bg-zinc-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right Telemetry Results */}
            <div className="lg:col-span-6 bg-zinc-900/90 rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="text-center pb-6 border-b border-white/10">
                <span className="text-xs font-mono text-zinc-400 block mb-1">
                  Total Creative Time Recovered Annually
                </span>
                <span className="text-4xl sm:text-6xl font-extrabold text-white font-mono tracking-tight block">
                  {totalHoursSavedYearly.toLocaleString()}{' '}
                  <span className="text-lg text-[#2997FF] font-normal">Hours</span>
                </span>
                <span className="text-xs text-zinc-400 block mt-1">
                  Equivalent to {(totalHoursSavedYearly / (40 * 50)).toFixed(1)} full-time extra designers added to your capacity
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center font-mono">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-zinc-400 block mb-1">Net Yearly Profit Value</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">
                    +${netFinancialReturnYearly.toLocaleString()}
                  </span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-xs text-zinc-400 block mb-1">Fleet Payback Period</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#2997FF] block">
                    {paybackPeriodMonths} Months
                  </span>
                </div>
              </div>

              <div className="bg-[#2997FF]/15 border border-[#2997FF]/30 p-4 rounded-xl text-xs text-zinc-200 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#2997FF] shrink-0" /> Ready to upgrade your team of {teamSize}?
                </span>
                <button
                  onClick={() => onSelectTierForOrder('studio-workstation')}
                  className="px-4 py-2 rounded-lg bg-[#0071E3] hover:bg-[#2997FF] text-white font-bold text-xs transition-colors shrink-0"
                >
                  Request Studio Quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
