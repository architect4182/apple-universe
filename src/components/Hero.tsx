import React, { useState } from 'react';
import { Play, ArrowRight, Activity, Wand2, Layers, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { HERO_MODES } from '../data/mockData';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenCinemaModal: () => void;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onOpenCinemaModal, onOpenSimulator }) => {
  const [activeMode, setActiveMode] = useState('studio');

  const currentModeInfo = HERO_MODES.find(m => m.id === activeMode) || HERO_MODES[0];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden z-10">
      {/* Subtle ambient lighting spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#0071E3]/20 via-[#BF5AF2]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-[#2997FF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex flex-col items-center text-center">
          <div
            onClick={onOpenSimulator}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-xs font-medium text-zinc-300 hover:border-[#2997FF] hover:text-white transition-all cursor-pointer shadow-lg mb-8 animate-float group"
          >
            <span className="w-2 h-2 rounded-full bg-[#2997FF] animate-pulse" />
            <span>Apple ProMotion Motion Studio Ecosystem</span>
            <span className="text-zinc-500">|</span>
            <span className="text-[#2997FF] font-semibold flex items-center gap-1 group-hover:underline">
              Try 120Hz Lab <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Super Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05] mb-6">
            The speed of thought. <br className="hidden sm:inline" />
            <span className="shimmer-text">In 120Hz fluid motion.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-zinc-400 font-normal max-w-3xl leading-relaxed mb-10">
            Engineered exclusively for motion designers, 3D artists, and visual innovators. Experience crystal-clear 120Hz ProMotion viewports, M4 Max hardware ray tracing, and zero-latency keyframe precision.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={onOpenOrderModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#2997FF] text-white font-semibold text-base sm:text-lg tracking-tight transition-all duration-300 shadow-2xl shadow-[#0071E3]/40 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <span>Configure Workstation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenCinemaModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-apple hover:bg-white/10 text-white font-medium text-base sm:text-lg tracking-tight transition-all border border-white/15 flex items-center justify-center gap-2.5 group"
            >
              <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch the 3-Minute Film</span>
            </button>
          </div>

          {/* Quick trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-400 mb-14 font-medium">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#2997FF]" /> 120Hz Adaptive ProMotion
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#BF5AF2]" /> Up to 128GB Unified Memory
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% DCI-P3 Color Calibrated
            </span>
          </div>
        </div>

        {/* Interactive Viewport Stage */}
        <div className="relative mt-4 mx-auto max-w-6xl">
          {/* Viewport Mode Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {HERO_MODES.map((mode) => {
              const isActive = activeMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-lg shadow-white/10 border-white scale-105'
                      : 'glass-apple text-zinc-400 hover:text-white border-white/10'
                  }`}
                >
                  {mode.id === 'studio' && <Layers className="w-4 h-4" />}
                  {mode.id === 'promotion' && <Activity className="w-4 h-4 text-[#2997FF]" />}
                  {mode.id === 'keyframe' && <Wand2 className="w-4 h-4 text-[#BF5AF2]" />}
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mode description & telemetry overlay banner */}
          <div className="mb-4 text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-[#2997FF]/15 text-[#2997FF] text-xs font-semibold uppercase tracking-wider mb-2">
              {currentModeInfo.badge}
            </span>
            <p className="text-sm text-zinc-300 animate-fadeIn">
              {currentModeInfo.description}
            </p>
          </div>

          {/* Main Visual Display Card */}
          <div className="relative rounded-3xl p-1 lg:p-2 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl overflow-hidden group">
            <div className="relative rounded-2xl bg-black overflow-hidden border border-white/10 aspect-[16/9] sm:aspect-[21/9]">
              {/* Hero Image */}
              <img
                src="/images/promotion-studio-hero.jpg"
                alt="Apple ProMotion Studio Setup"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-102"
              />

              {/* Interactive Mode Specific Overlays */}
              {activeMode === 'promotion' && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-6 animate-fadeIn">
                  <div className="max-w-xl glass-apple p-6 sm:p-8 rounded-2xl border border-[#2997FF]/40 shadow-2xl text-left relative overflow-hidden">
                    <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#2997FF]/30 rounded-full blur-2xl" />
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#2997FF]/20 text-[#64D2FF]">
                        REAL-TIME VIEWPORT STREAM
                      </span>
                      <span className="text-sm font-mono text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> 120.00 FPS LOCKED
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Zero Ghosting. Zero Frame Tearing.
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      When scrubbing high-speed volumetric particle timelines or animating kinetic typography, standard 60Hz screens blur the frames between 16.6ms intervals. With Apple ProMotion at 8.3ms frame intervals, every interpolation ease curve is visible with razor-sharp clarity.
                    </p>
                    <button
                      onClick={onOpenSimulator}
                      className="bg-[#2997FF] text-black font-semibold px-4 py-2 rounded-lg text-xs hover:bg-white transition-colors flex items-center gap-1.5"
                    >
                      Open Interactive Comparison Lab <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {activeMode === 'keyframe' && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-6 animate-fadeIn">
                  <div className="max-w-xl glass-apple p-6 sm:p-8 rounded-2xl border border-[#BF5AF2]/40 shadow-2xl text-left relative overflow-hidden">
                    <div className="absolute -right-12 -bottom-12 w-36 h-36 bg-[#BF5AF2]/30 rounded-full blur-2xl" />
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#BF5AF2]/20 text-[#BF5AF2]">
                        M4 MAX NEURAL ENGINE ASSISTANT
                      </span>
                      <span className="text-xs font-mono text-zinc-300">
                        38 TOPS AI FLUID INTERPOLATION
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Instant Bezier Ease & Optical Flow
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      Our 16-core Neural Engine processes complex 3D keyframe nodes across Final Cut Pro and Apple Motion. Drag a single Bezier handle, and the system automatically calculates multi-body physics damping and optical flow subframes in real time.
                    </p>
                    <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                      <div className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Ease-In: cubic-bezier(0.4, 0.0, 0.2, 1)</div>
                      <div className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-400">Time Saved: 4.8x</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Telemetry Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-300 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-white">
                    <span className="w-2 h-2 rounded-full bg-[#2997FF]" /> DISPLAY: Pro Display XDR 2 (6016x3384)
                  </span>
                  <span className="hidden md:inline text-zinc-500">|</span>
                  <span className="hidden md:inline text-zinc-400">SOC: M4 Max 16-Core CPU / 40-Core GPU</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 rounded bg-white/10 text-white">HDR: 1600 Nits</span>
                  <span className="px-2 py-1 rounded bg-[#0071E3] text-white font-bold">120Hz ProMotion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
