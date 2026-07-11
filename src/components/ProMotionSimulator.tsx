import React, { useState, useEffect, useRef } from 'react';
import { Layers, Zap, Sliders, RefreshCw, CheckCircle2, ArrowRight, Play, Pause, Sparkles } from 'lucide-react';

interface ProMotionSimulatorProps {
  onOpenOrderModal: () => void;
}

export const ProMotionSimulator: React.FC<ProMotionSimulatorProps> = ({ onOpenOrderModal }) => {
  const [targetFps, setTargetFps] = useState<30 | 60 | 120>(120);
  const [stiffness, setStiffness] = useState<number>(140);
  const [damping, setDamping] = useState<number>(16);
  const [velocity, setVelocity] = useState<number>(1.8);
  const [aiOpticalFlow, setAiOpticalFlow] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Position tracking for our interactive spring simulation
  const [springPos, setSpringPos] = useState<number>(0);
  const animRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // Trigger an impulse animation loop
  useEffect(() => {
    let lastTime = performance.now();
    let x = -200;
    let v = velocity * 400;

    const runSimulation = (currentTime: number) => {
      if (!isPlaying) {
        animRef.current = requestAnimationFrame(runSimulation);
        return;
      }

      const dt = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      timeRef.current += dt;

      // Spring physics equation: F = -k*x - c*v
      const k = stiffness;
      const c = damping;
      const force = -k * x - c * v;
      v += force * dt;
      x += v * dt;

      // If motion comes to rest, re-impulse for continuous demonstration
      if (Math.abs(x) < 0.5 && Math.abs(v) < 10) {
        x = -220;
        v = velocity * 450;
      }

      setSpringPos(x);
      animRef.current = requestAnimationFrame(runSimulation);
    };

    animRef.current = requestAnimationFrame(runSimulation);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [stiffness, damping, velocity, isPlaying]);

  const triggerImpulse = () => {
    setSpringPos(-240);
  };

  return (
    <section id="simulator" className="py-24 sm:py-32 relative z-10 bg-gradient-to-b from-black via-zinc-950 to-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2997FF]/15 border border-[#2997FF]/30 text-xs font-semibold text-[#2997FF] uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" /> Interactive Microinteraction Lab
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Test 120Hz ProMotion vs Standard Refresh.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            For UI/UX and motion designers, fluid physics and ease curves make or break an experience. Use our interactive spring damping lab below to inspect how ProMotion double-frame density eliminates motion blur and frame judder.
          </p>
        </div>

        {/* Main Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls & Telemetry Sidebar */}
          <div className="lg:col-span-5 glass-apple p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#2997FF]" /> Physics & Frame Controls
              </h3>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? 'Pause Lab' : 'Resume Lab'}
              </button>
            </div>

            {/* Frame Rate Selection Tabs */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Simulated Display Refresh Rate
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[30, 60, 120].map((rate) => {
                  const isSelected = targetFps === rate;
                  return (
                    <button
                      key={rate}
                      onClick={() => setTargetFps(rate as 30 | 60 | 120)}
                      className={`py-2.5 px-3 rounded-xl font-mono text-sm font-semibold transition-all border ${
                        isSelected
                          ? rate === 120
                            ? 'bg-[#0071E3] text-white border-[#2997FF] shadow-lg shadow-[#0071E3]/40 scale-105'
                            : 'bg-white text-black border-white'
                          : 'bg-zinc-900 text-zinc-400 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {rate} Hz {rate === 120 && '✨'}
                    </button>
                  );
                })}
              </div>
              <span className="block text-[11px] text-zinc-500 mt-2 italic">
                {targetFps === 120
                  ? '⚡ Apple ProMotion 120Hz: 8.33ms per frame interval. Silky smooth motion interpolation.'
                  : targetFps === 60
                  ? '📱 Standard 60Hz: 16.66ms per frame interval. Noticeable motion step blur.'
                  : '⏳ Legacy 30Hz: 33.33ms per frame interval. Severe visual judder.'}
              </span>
            </div>

            {/* Spring Stiffness Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-300">Spring Stiffness (k)</span>
                <span className="font-mono text-[#2997FF]">{stiffness} N/m</span>
              </div>
              <input
                type="range"
                min="40"
                max="300"
                value={stiffness}
                onChange={(e) => setStiffness(Number(e.target.value))}
                className="w-full accent-[#2997FF] bg-zinc-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Spring Damping Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-300">Damping Damping Ratio (c)</span>
                <span className="font-mono text-[#BF5AF2]">{damping} N·s/m</span>
              </div>
              <input
                type="range"
                min="5"
                max="45"
                value={damping}
                onChange={(e) => setDamping(Number(e.target.value))}
                className="w-full accent-[#BF5AF2] bg-zinc-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Velocity Target Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-zinc-300">Impulse Velocity Multiplier</span>
                <span className="font-mono text-emerald-400">{velocity}x</span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={velocity}
                onChange={(e) => setVelocity(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-zinc-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* AI Optical Flow Toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2997FF]" />
                <span className="text-xs font-medium text-white">M4 Neural Optical Flow Assist</span>
              </div>
              <button
                onClick={() => setAiOpticalFlow(!aiOpticalFlow)}
                className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                  aiOpticalFlow ? 'bg-[#0071E3]' : 'bg-zinc-700'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    aiOpticalFlow ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Trigger Button */}
            <div className="pt-2">
              <button
                onClick={triggerImpulse}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-white/15"
              >
                <RefreshCw className="w-4 h-4 text-[#2997FF]" /> Re-launch Impulse Physics
              </button>
            </div>
          </div>

          {/* Live Viewport Visualizer */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Comparison Canvas Stage */}
            <div className="glass-apple rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2997FF] animate-ping" />
                  <span className="text-sm font-bold text-white tracking-wide uppercase">
                    Live Spring Physics Viewport ({targetFps} Hz Mode)
                  </span>
                </div>
                <div className="px-3 py-1 rounded bg-black/60 border border-white/10 font-mono text-xs text-zinc-300">
                  Step interval: {(1000 / targetFps).toFixed(2)}ms
                </div>
              </div>

              {/* The Kinetic Track Area */}
              <div className="relative py-16 px-4 bg-black/70 rounded-2xl border border-white/10 flex flex-col items-center justify-center overflow-hidden">
                {/* Center equilibrium target line */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#2997FF]/30 border-r border-dashed border-[#2997FF]/40" />

                {/* Simulated frame ghosting if 30Hz or 60Hz */}
                {targetFps < 120 && (
                  <div
                    className="absolute w-14 h-14 rounded-2xl bg-[#BF5AF2]/20 border border-[#BF5AF2]/30 flex items-center justify-center pointer-events-none transition-none"
                    style={{
                      transform: `translateX(${springPos * (targetFps === 30 ? 0.7 : 0.88)}px)`,
                      filter: `blur(${targetFps === 30 ? '8px' : '3px'})`
                    }}
                  >
                    <span className="text-[10px] font-mono text-[#BF5AF2]">Ghost</span>
                  </div>
                )}

                {/* Primary Spring Node */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl relative transition-none cursor-pointer ${
                    targetFps === 120
                      ? 'bg-gradient-to-br from-[#0071E3] via-[#2997FF] to-[#64D2FF] shadow-[#0071E3]/50 border-2 border-white'
                      : targetFps === 60
                      ? 'bg-gradient-to-br from-purple-600 to-indigo-600 shadow-purple-500/30 border border-white/50'
                      : 'bg-gradient-to-br from-amber-600 to-red-600 shadow-amber-500/20 border border-white/30'
                  }`}
                  style={{
                    transform: `translateX(${springPos}px)`,
                    /* Add step simulation for legacy refresh rates */
                    transition: targetFps === 30 ? 'transform 0.033s step-end' : targetFps === 60 ? 'transform 0.016s step-end' : 'none'
                  }}
                  onClick={triggerImpulse}
                  title="Click node to trigger impulse"
                >
                  <span className="text-white font-mono font-extrabold text-xs">
                    {targetFps}Hz
                  </span>
                </div>

                {/* Connecting Spring Ribbon */}
                <div
                  className="absolute h-1 bg-gradient-to-r from-transparent via-[#2997FF]/60 to-[#2997FF] pointer-events-none"
                  style={{
                    width: `${Math.abs(springPos)}px`,
                    left: springPos < 0 ? `calc(50% + ${springPos}px)` : '50%'
                  }}
                />

                <div className="mt-8 text-center font-mono text-xs text-zinc-400">
                  Displacement: <span className="text-white font-bold">{Math.round(springPos)} px</span> | Damping status: <span className={Math.abs(springPos) < 2 ? 'text-emerald-400' : 'text-[#2997FF]'}>{Math.abs(springPos) < 2 ? 'Equilibrium' : 'Oscillating'}</span>
                </div>
              </div>

              {/* Technical breakdown summary inside card */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-start gap-2">
                  <Zap className="w-4 h-4 text-[#2997FF] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-zinc-400 block mb-0.5">Frame Density</span>
                    <span className="text-white font-bold text-sm">
                      {targetFps === 120 ? '2x vs 60Hz (Ultra Crisp)' : targetFps === 60 ? '1x Standard Baseline' : '0.5x Choppy Motion'}
                    </span>
                  </div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-start gap-2">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${aiOpticalFlow ? 'text-emerald-400' : 'text-zinc-600'}`} />
                  <div>
                    <span className="text-zinc-400 block mb-0.5">Optical Flow AI</span>
                    <span className={`font-bold text-sm ${aiOpticalFlow ? 'text-emerald-400' : 'text-zinc-500'}`}>
                      {aiOpticalFlow ? 'Active (Sub-frame Ease)' : 'Disabled'}
                    </span>
                  </div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2997FF] mt-1.5 shrink-0 animate-pulse" />
                  <div>
                    <span className="text-zinc-400 block mb-0.5">Viewport Response</span>
                    <span className="text-[#2997FF] font-bold text-sm">
                      {targetFps === 120 ? 'Sub-3ms Instant Tactile' : '16ms - 33ms Latency'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Box under visualizer */}
            <div className="rounded-3xl bg-gradient-to-r from-[#0071E3]/20 via-purple-900/20 to-[#0071E3]/20 p-6 sm:p-8 border border-[#2997FF]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Ready to upgrade your studio's refresh rate?
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Every MacBook Pro M4 Max and Pro Display XDR 2 comes equipped with factory-calibrated 120Hz ProMotion technology right out of the box.
                </p>
              </div>
              <button
                onClick={onOpenOrderModal}
                className="whitespace-nowrap px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-[#2997FF] hover:text-white transition-all shadow-xl flex items-center gap-1.5"
              >
                <span>Order Pro Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
