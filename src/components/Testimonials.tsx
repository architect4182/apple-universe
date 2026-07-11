import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote, Clock, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Motion Graphics', 'VFX', '3D Animation', 'UI/UX Interactive'];

  const filteredTestimonials = filter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === filter);

  return (
    <section className="py-28 relative z-10 bg-zinc-950/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#64D2FF] uppercase tracking-wider block mb-3">
            Creative Director Testimonials
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Why world-class motion designers swear by ProMotion.
          </h2>
          <p className="text-lg text-zinc-400">
            Hear directly from VFX leads and interactive agency directors who switched their teams to Apple M4 Max workstations and Pro Display XDR 2 displays.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all border ${
                filter === cat
                  ? 'bg-white text-black font-bold border-white scale-105 shadow-lg'
                  : 'glass-apple text-zinc-400 hover:text-white border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="glass-apple p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-[#2997FF]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-[#2997FF]/10 transition-colors pointer-events-none">
                <Quote className="w-20 h-20" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#2997FF] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#2997FF]" />
                  <span>{t.category.toUpperCase()} PIPELINE</span>
                </div>

                <p className="text-base sm:text-lg text-zinc-200 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10">
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border border-[#2997FF]/40 shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-white text-base flex items-center gap-1.5">
                      {t.author}
                      <CheckCircle2 className="w-4 h-4 text-[#2997FF]" />
                    </h4>
                    <span className="text-xs text-zinc-400 block">{t.role}</span>
                    <span className="text-xs text-zinc-500 font-mono block">{t.studio}</span>
                  </div>
                </div>

                {/* Project Metric Highlight */}
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> {t.projectExample}
                  </span>
                  <span className="text-emerald-400 font-bold ml-2 shrink-0">{t.renderTimeReduction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
