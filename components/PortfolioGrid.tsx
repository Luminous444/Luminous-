
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';
import { Language, PortfolioItem } from '../types';
import { X, Palette, PenTool, Layout, ArrowUpRight, Zap } from 'lucide-react';
import CommentSection from './CommentSection';

interface PortfolioGridProps {
  lang: Language;
  theme: 'dark' | 'light';
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ lang, theme }) => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['all', ...new Set(PORTFOLIO_DATA.map(item => item.category[lang]))];
  const filtered = filter === 'all' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.category[lang] === filter);

  const labels = {
    all: lang === 'id' ? 'semua' : 'all',
    view: lang === 'id' ? 'lihat proyek' : 'view project',
    click: lang === 'id' ? 'klik untuk detail' : 'click for details',
    concept: lang === 'id' ? 'konsep' : 'concept',
    execution: lang === 'id' ? 'eksekusi' : 'execution',
    delivery: lang === 'id' ? 'hasil' : 'delivery',
    conceptDesc: lang === 'id' ? 'mendefinisikan narasi inti dan arah visual.' : 'defining core narrative and visual direction.',
    execDesc: lang === 'id' ? 'sketsa, iterasi, dan penyempurnaan detail.' : 'sketching, iterating, and polishing details.',
    delivDesc: lang === 'id' ? 'ekspor akhir dan konsistensi visual.' : 'final export and visual consistency.'
  };

  return (
    <div className="w-full">
      {/* Editorial Filter System - Scrollable on mobile */}
      <div className="flex gap-3 mb-12 md:mb-20 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black transition-all duration-300 border uppercase tracking-widest shrink-0 ${
              filter === cat 
                ? 'bg-[#A3FF12] text-black border-[#A3FF12]' 
                : 'bg-transparent text-white/40 border-white/10'
            }`}
          >
            {cat === 'all' ? labels.all : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <AnimatePresence mode='popLayout'>
          {filtered.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedItem(item)}
              className={`group relative cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-zinc-900 border border-white/5 relative shadow-2xl">
                <img src={item.image} alt={item.title[lang]} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-active:scale-105" />
                <div className="absolute inset-0 bg-[#A3FF12]/90 opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 md:p-12 text-black text-center">
                   <Zap className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 fill-black" />
                   <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 md:mb-4 leading-none">{labels.view}</h4>
                   <p className="text-[10px] font-bold uppercase tracking-widest">{labels.click}</p>
                </div>
                {/* Mobile view project hint */}
                <div className="absolute bottom-4 right-4 md:hidden p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="mt-6 md:mt-8 flex justify-between items-start">
                <div>
                  <span className="text-[#A3FF12] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-3 block">{item.category[lang]}</span>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">{item.title[lang]}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <motion.div 
              initial={{ opacity: 0, y: 100 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 100 }} 
              className="relative w-full md:w-[95%] lg:w-full lg:max-w-7xl h-full md:h-[90vh] bg-[#0B0B0B] md:rounded-[3rem] overflow-hidden shadow-2xl z-10 border-x border-t md:border border-white/10 flex flex-col"
            >
              <div className="flex-1 overflow-y-auto no-scrollbar">
                <div className="relative aspect-video w-full bg-zinc-900">
                   <img src={selectedItem.image} alt={selectedItem.title[lang]} className="w-full h-full object-cover" />
                   <button 
                    onClick={() => setSelectedItem(null)} 
                    className="absolute top-4 right-4 md:top-8 md:right-8 p-3 md:p-4 rounded-full bg-black/50 text-white hover:bg-[#A3FF12] hover:text-black transition-all z-20 backdrop-blur-md"
                   >
                    <X className="w-6 h-6" />
                   </button>
                </div>
                <div className="p-6 md:p-12 lg:p-24">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-20">
                      <div className="max-w-2xl">
                        <span className="text-[#A3FF12] font-black uppercase tracking-[0.4em] text-[9px] md:text-[10px] mb-4 md:mb-6 block">{selectedItem.category[lang]}</span>
                        <h2 className="text-4xl md:text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6 md:mb-10">{selectedItem.title[lang]}</h2>
                        <p className="text-lg md:text-2xl lg:text-3xl text-zinc-400 font-medium leading-tight">{selectedItem.description[lang]}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                         {selectedItem.tags.map(tag => (
                           <span key={tag} className="px-4 py-1.5 md:px-6 md:py-2 bg-zinc-900 border border-white/5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500">#{tag}</span>
                         ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 md:py-20 border-y border-white/5 mb-12 md:mb-20">
                      <div className="space-y-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#A3FF12]/10 rounded-2xl flex items-center justify-center"><PenTool className="w-6 h-6 md:w-8 md:h-8 text-[#A3FF12]" /></div>
                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter">01. {labels.concept}</h4>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed">{labels.conceptDesc}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#7C7CFF]/10 rounded-2xl flex items-center justify-center"><Palette className="w-6 h-6 md:w-8 md:h-8 text-[#7C7CFF]" /></div>
                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter">02. {labels.execution}</h4>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed">{labels.execDesc}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center"><Layout className="w-6 h-6 md:w-8 md:h-8 text-white" /></div>
                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter">03. {labels.delivery}</h4>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed">{labels.delivDesc}</p>
                      </div>
                    </div>
                    <div className="pb-12">
                      <CommentSection theme="dark" projectId={`project-${selectedItem.id}`} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGrid;
