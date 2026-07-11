import React from 'react';
import { FEATURES } from '../data/mockData';
import { Sparkles, Cpu, Activity, Wand2, Palette, Wind } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#2997FF]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#BF5AF2]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'Wand2':
        return <Wand2 className="w-6 h-6 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-pink-400" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#64D2FF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#2997FF]" />;
    }
  };

  return (
    <section id="features" className="py-28 relative z-10 bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-[#BF5AF2] uppercase tracking-wider block mb-3">
            Hardware Ray Tracing & Viewport Velocity
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Designed for the most demanding 3D pipelines.
          </h2>
          <p className="text-lg text-zinc-400">
            We rebuilt the graphic pipeline from silicon up. Experience how the M4 Max architecture eliminates rendering bottlenecks so you can iterate at the speed of your imagination.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="glass-apple p-8 rounded-3xl border border-white/10 hover:border-[#2997FF]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              {/* Top ambient glow on hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#2997FF]/10 rounded-full blur-3xl group-hover:bg-[#2997FF]/25 transition-colors pointer-events-none" />

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(feature.iconName)}
                  </div>
                  {feature.badge && (
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2997FF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs font-semibold text-zinc-300 mb-4 italic">
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Metric Callout */}
              {feature.metric && (
                <div className="pt-5 border-t border-white/10 flex items-baseline justify-between font-mono">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white group-hover:scale-105 transition-transform inline-block">
                      {feature.metric}
                    </span>
                    <span className="text-[11px] text-zinc-400 block mt-0.5">
                      {feature.metricLabel}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#2997FF] group-hover:animate-ping" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
