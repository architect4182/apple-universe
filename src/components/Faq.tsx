import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hardware & M4 Max', 'ProMotion & Color', 'Software Compatibility', 'Financing & Trade-in'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-28 relative z-10 bg-zinc-950 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#64D2FF] uppercase tracking-wider block mb-3">
            Technical Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Everything you need to know about the ProMotion Studio.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Have questions about external 6K monitor scaling, Metal 3 ray-tracing support, or studio trade-in options? We have answers.
          </p>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search technical specs, plugins, or calibration..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-apple border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#2997FF] transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  activeCategory === cat
                    ? 'bg-white text-black font-bold border-white scale-105'
                    : 'glass-apple text-zinc-400 hover:text-white border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 glass-apple rounded-2xl border border-white/10 text-zinc-400">
              No questions found matching "{searchQuery}". Contact our 24/7 Creative Engineer team for custom inquiries.
            </div>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'glass-apple border-[#2997FF]/50 shadow-xl'
                      : 'bg-zinc-900/40 border-white/10 hover:border-white/25'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#2997FF] shrink-0" />
                      <span>{item.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#2997FF]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-zinc-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                      <div className="mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2997FF]/15 text-[#64D2FF] uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
