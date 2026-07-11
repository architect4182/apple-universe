import React, { useState } from 'react';
import { X, Play, Pause, Volume2, Maximize2, SkipForward, Layers, Sparkles } from 'lucide-react';

interface CinemaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderModal: () => void;
}

export const CinemaModal: React.FC<CinemaModalProps> = ({ isOpen, onClose, onOpenOrderModal }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeChapter, setActiveChapter] = useState<number>(0);

  if (!isOpen) return null;

  const chapters = [
    { title: '01: The 120Hz ProMotion Revolution', duration: '0:45', desc: 'Why double frame-rate density transforms motion design interpolation and kinetic ease curves.' },
    { title: '02: Second-Gen Hardware Ray Tracing', duration: '1:10', desc: 'Inside the M4 Max 40-Core GPU pipeline: instant glass refractions and volumetric lighting.' },
    { title: '03: 6K Quantum OLED Studio Display', duration: '0:35', desc: '1,600 nits peak brightness paired with spectrometer DCI-P3 factory calibration.' },
    { title: '04: Behind the Scenes at Buck & Framestore', duration: '0:30', desc: 'Lead creative directors share their real-world 8K rendering benchmarks.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-5xl glass-apple rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between p-4 sm:px-6 bg-black/60 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2997FF] animate-ping" />
            <span className="text-sm font-bold text-white tracking-tight">
               Keynote Film: Apple ProMotion Studio Showreel
            </span>
            <span className="hidden sm:inline-block text-xs text-zinc-400 font-mono">
              [4K HDR 120Hz Stream]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Stage */}
        <div className="relative aspect-[16/9] bg-black overflow-hidden group">
          {/* Simulated cinematic visual loop */}
          <img
            src={activeChapter === 0 ? '/images/promotion-studio-hero.jpg' : activeChapter === 1 ? 'https://images.pexels.com/photos/29128147/pexels-photo-29128147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200' : activeChapter === 2 ? 'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200' : 'https://images.pexels.com/photos/35697247/pexels-photo-35697247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200'}
            alt="Apple ProMotion Showreel"
            className={`w-full h-full object-cover object-center transition-all duration-700 ${
              isPlaying ? 'scale-105 filter brightness-110' : 'scale-100 filter brightness-75'
            }`}
          />

          {/* Animated Wave Overlay when playing */}
          {isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 flex items-center justify-center">
              <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-[#64D2FF] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#2997FF] animate-spin" style={{ animationDuration: '4s' }} />
                <span>PLAYING CHAPTER: {chapters[activeChapter].title}</span>
              </div>
            </div>
          )}

          {/* Play/Pause Center Overlay */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform shadow-2xl">
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </div>
          </button>

          {/* Player Bottom Control Bar */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-[#2997FF] transition-colors">
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
              </button>
              <span className="text-xs font-mono font-bold">{chapters[activeChapter].title}</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-zinc-400">Time: 01:24 / 03:00</span>
              <Volume2 className="w-4 h-4 cursor-pointer hover:text-[#2997FF]" />
              <Maximize2 className="w-4 h-4 cursor-pointer hover:text-[#2997FF]" />
            </div>
          </div>
        </div>

        {/* Chapter Selection Strip */}
        <div className="p-6 bg-zinc-950 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2997FF]" /> Keynote Chapters
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenOrderModal();
              }}
              className="px-4 py-2 rounded-full bg-[#0071E3] hover:bg-[#2997FF] text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow"
            >
              <span>Configure Workstation Now</span>
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveChapter(idx);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  activeChapter === idx
                    ? 'bg-white/10 border-[#2997FF] shadow-lg scale-102'
                    : 'bg-zinc-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold text-xs truncate ${activeChapter === idx ? 'text-[#2997FF]' : 'text-white'}`}>
                    {ch.title}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">{ch.duration}</span>
                </div>
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-snug">
                  {ch.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
