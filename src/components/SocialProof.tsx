import React from 'react';
import { Award, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { CLIENT_STUDIOS } from '../data/mockData';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 border-b border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
            Industry Benchmark & Studio Validation
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white max-w-2xl mx-auto">
            Trusted by the world's most innovative motion design houses, VFX studios, and interactive agencies.
          </h3>
        </div>

        {/* Studio Logos / Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {CLIENT_STUDIOS.map((studio, idx) => (
            <div
              key={idx}
              className="glass-apple p-4 rounded-2xl border border-white/10 text-center flex flex-col justify-center items-center hover:border-[#2997FF]/50 hover:bg-white/5 transition-all group cursor-default"
            >
              <span className="font-extrabold text-lg text-white group-hover:text-[#2997FF] transition-colors">
                {studio.name}
              </span>
              <span className="text-[11px] text-zinc-400 block mt-0.5">
                {studio.location}
              </span>
              <span className="text-[10px] text-[#2997FF] block font-mono mt-1 opacity-70 group-hover:opacity-100">
                {studio.specialty}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Primary Benchmark Stat Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-apple p-6 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0071E3]/20 rounded-bl-full blur-xl pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-[#0071E3]/20 flex items-center justify-center text-[#2997FF] mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              74<span className="text-[#2997FF]">%</span>
            </div>
            <div className="text-sm font-semibold text-zinc-200 mb-1">
              Faster Timeline Rendering
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Average reduction in export and viewport cache generation times across Cinema 4D and After Effects projects.
            </p>
          </div>

          <div className="glass-apple p-6 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#BF5AF2]/20 rounded-bl-full blur-xl pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-[#BF5AF2]/20 flex items-center justify-center text-[#BF5AF2] mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              120<span className="text-[#BF5AF2]"> FPS</span>
            </div>
            <div className="text-sm font-semibold text-zinc-200 mb-1">
              Locked Viewport Scrubbing
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Experience zero frame dropping during complex multi-layer Bezier interpolation and particle playback.
            </p>
          </div>

          <div className="glass-apple p-6 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 rounded-bl-full blur-xl pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              100<span className="text-emerald-400">%</span>
            </div>
            <div className="text-sm font-semibold text-zinc-200 mb-1">
              DCI-P3 & True 10-Bit Color
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every screen factory calibrated with individual spectrometer profiles to guarantee exact client brand colors.
            </p>
          </div>

          <div className="glass-apple p-6 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/20 rounded-bl-full blur-xl pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              128<span className="text-amber-400"> GB</span>
            </div>
            <div className="text-sm font-semibold text-zinc-200 mb-1">
              Unified Memory Pool
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Eliminate VRAM crashes. Share up to 546 GB/s memory bandwidth seamlessly between CPU and 40-core GPU.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
