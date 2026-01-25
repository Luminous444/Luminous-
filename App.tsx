
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, Mail, Download, Plus, Zap, Trophy
} from 'lucide-react';
import { Language } from './types';
import { SKILL_DATA, EXPERIENCE_DATA, ACHIEVEMENT_DATA } from './constants';
import AnimatedSection from './components/AnimatedSection';
import PortfolioGrid from './components/PortfolioGrid';
import CommentSection from './components/CommentSection';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('id');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    nav: {
      works: lang === 'id' ? 'karya' : 'works',
      about: lang === 'id' ? 'tentang' : 'about',
      contact: lang === 'id' ? 'kontak' : 'contact'
    },
    hero: {
      subtitle: lang === 'id' ? 'xi dkv • smk yadika bandar lampung' : 'grade xi dkv • smk yadika bandar lampung',
      title: lang === 'id' ? 'desain visual & ilustrasi digital.' : 'visual design & digital illustration.',
      tagline: lang === 'id' ? 'mengembangkan visual yang bercerita.' : 'creating visuals that tell stories.',
      cta: lang === 'id' ? 'lihat karya' : 'view works',
      contact: lang === 'id' ? 'hubungi saya' : 'contact me'
    },
    about: {
      title: lang === 'id' ? 'tentang saya' : 'about me',
      desc: lang === 'id' 
        ? 'saya adalah pelajar dkv yang fokus pada ilustrasi digital, visual storytelling, dan eksplorasi desain modern dengan pendekatan gen z aesthetic.'
        : 'i am a dkv student focused on digital illustration, visual storytelling, and exploring modern design with a gen z aesthetic approach.'
    },
    skills: { title: lang === 'id' ? 'software & keahlian' : 'software & expertise' },
    experience: { title: lang === 'id' ? 'pengalaman' : 'experience' },
    achievements: { title: lang === 'id' ? 'pencapaian' : 'achievements' },
    contact: {
      title: lang === 'id' ? 'ayo ngobrol' : "let's talk",
      subtitle: lang === 'id' ? 'say something 👀' : 'say something 👀'
    }
  };

  return (
    <div className="dark">
      <div className="min-h-screen bg-[#0B0B0B] text-white transition-colors duration-500 overflow-x-hidden lowercase-style">
        
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-40 transition-all duration-500 px-4 md:px-12 py-4 md:py-6 ${isScrolled ? 'bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl md:text-2xl font-black tracking-tighter"
            >
              Luminous<span className="text-[#A3FF12]">.std</span>
            </motion.div>
            
            <div className="flex items-center gap-2 md:gap-4">
              {/* Language Switcher */}
              <div className="flex bg-white/5 rounded-full p-0.5 md:p-1 border border-white/10 overflow-hidden">
                <button 
                  onClick={() => setLang('id')}
                  className={`px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase transition-all ${lang === 'id' ? 'bg-[#A3FF12] text-black' : 'text-white/40 hover:text-white'}`}
                >
                  id
                </button>
                <button 
                  onClick={() => setLang('en')}
                  className={`px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase transition-all ${lang === 'en' ? 'bg-[#A3FF12] text-black' : 'text-white/40 hover:text-white'}`}
                >
                  en
                </button>
              </div>

              <a 
                href="#" 
                className="flex items-center gap-2 px-4 md:px-6 py-2 bg-white text-black rounded-full text-[9px] md:text-[10px] font-black hover:bg-[#A3FF12] transition-all uppercase tracking-widest"
              >
                <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span className="hidden xs:inline">cv</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden pt-20">
          <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#A3FF12]/5 blur-[80px] md:blur-[150px] rounded-full -mr-20 md:-mr-96 -mt-20 md:-mt-96 z-0" />
          
          <div className="max-w-7xl mx-auto w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <span className="h-[1px] w-8 md:w-12 bg-[#A3FF12]" />
                <h2 className="text-[#A3FF12] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px]">
                  {t.hero.subtitle}
                </h2>
              </div>
              
              <h1 className="hero-title text-5xl sm:text-7xl md:text-[8rem] lg:text-[12rem] font-black leading-[0.9] md:leading-[0.85] mb-8 md:mb-12 tracking-tighter text-white uppercase italic">
                arya elang<br />samudra
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-lg md:text-3xl text-white font-black uppercase tracking-tighter">
                    {t.hero.title}
                  </p>
                  <p className="text-base md:text-2xl text-zinc-400 max-w-xl font-medium leading-tight lowercase-style">
                    {t.hero.tagline}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="#portfolio" 
                    className="group w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-3 transition-all hover:bg-[#A3FF12] active:scale-95"
                  >
                    {t.hero.cta}
                    <Zap className="w-4 h-4 fill-black" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden xs:flex"
          >
            <div className="flex flex-col items-center gap-4">
               <span className="text-[8px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.5em] rotate-90 mb-8">{lang === 'id' ? 'gulir' : 'scroll'}</span>
               <div className="w-px h-12 md:h-20 bg-gradient-to-b from-[#A3FF12] to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-40 px-6 md:px-20 border-y border-white/5 bg-zinc-900/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 md:gap-20">
              <div className="md:col-span-5">
                <AnimatedSection>
                  <div className="relative group aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-zinc-800 shadow-2xl">
                    <img 
                      src="./assets/images/arya-profile.jpg" 
                      alt="Arya Elang Samudra" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="md:col-span-7 flex flex-col justify-center">
                <AnimatedSection delay={0.2}>
                  <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-12 tracking-tighter uppercase leading-none">{t.about.title}</h2>
                  <p className="text-xl md:text-4xl text-zinc-300 leading-snug md:leading-tight mb-12 md:mb-16 font-medium">
                    {t.about.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t border-white/10 pt-10 md:pt-16">
                    <div>
                      <h4 className="text-[#A3FF12] font-black mb-2 text-[9px] md:text-[10px] uppercase tracking-widest">{lang === 'id' ? 'lokasi' : 'location'}</h4>
                      <p className="text-lg md:text-xl font-bold">Bandar Lampung, ID</p>
                    </div>
                    <div>
                      <h4 className="text-[#A3FF12] font-black mb-2 text-[9px] md:text-[10px] uppercase tracking-widest">{lang === 'id' ? 'pendidikan' : 'education'}</h4>
                      <p className="text-lg md:text-xl font-bold">XI DKV - Smk Yadika</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="portfolio" className="py-24 md:py-40 px-6 md:px-20">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-16 md:mb-32">
              <h2 className="text-5xl md:text-[10rem] font-black tracking-tighter uppercase leading-none mb-6 md:mb-8">{lang === 'id' ? 'karya' : 'works'}</h2>
              <div className="flex items-center gap-4 md:gap-6">
                 <div className="h-px flex-1 bg-white/10" />
                 <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/40 shrink-0">2024 — 2025</span>
              </div>
            </AnimatedSection>
            <PortfolioGrid lang={lang} theme="dark" />
          </div>
        </section>

        {/* Tools & Experience */}
        <section className="py-24 md:py-40 px-6 md:px-20 bg-zinc-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 md:gap-40">
              <div>
                <AnimatedSection>
                  <h2 className="text-3xl md:text-6xl font-black mb-12 md:mb-20 tracking-tighter uppercase">{t.experience.title}</h2>
                  <div className="space-y-16 md:space-y-24">
                    {EXPERIENCE_DATA.map((exp) => (
                      <div key={exp.id} className="group relative">
                        <div className="absolute -left-6 md:-left-8 top-0 h-full w-px bg-white/5" />
                        <div className="absolute -left-[33.5px] md:-left-[35.5px] top-0 w-4 h-4 rounded-full bg-[#0B0B0B] border border-white/20 flex items-center justify-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#A3FF12]" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black text-[#A3FF12] uppercase tracking-widest mb-3 md:mb-4 block">{exp.period}</span>
                        <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 leading-tight uppercase">{exp.role[lang]}</h3>
                        <p className="text-white/40 mb-6 md:mb-10 text-[9px] md:text-[11px] font-black uppercase tracking-widest">{exp.company}</p>
                        <div className="space-y-3 md:space-y-4">
                          {exp.description[lang].map((item, idx) => (
                            <div key={idx} className="flex gap-3 text-zinc-400 text-sm font-medium leading-relaxed">
                               <Plus className="w-4 h-4 shrink-0 text-[#A3FF12]" />
                               {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              <div>
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl md:text-6xl font-black mb-12 md:mb-20 tracking-tighter uppercase">{t.skills.title}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {SKILL_DATA.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="p-6 md:p-10 bg-zinc-900/50 border border-white/5 rounded-2xl md:rounded-3xl hover:border-[#A3FF12]/50 transition-all group relative overflow-hidden"
                      >
                        <div className="flex items-center md:block gap-4 md:gap-0">
                          <img 
                            src={skill.iconUrl} 
                            alt={skill.name} 
                            className="w-8 h-8 md:w-12 md:h-12 md:mb-8 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                          />
                          <h4 className="font-black text-[10px] md:text-xs uppercase tracking-widest group-hover:text-[#A3FF12] transition-colors">{skill.name}</h4>
                        </div>
                        <div className="mt-6 md:mt-0 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} className="h-full bg-[#A3FF12]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-24 md:py-40 px-6 md:px-20 border-t border-white/5">
           <div className="max-w-7xl mx-auto">
             <AnimatedSection>
                <h2 className="text-3xl md:text-6xl font-black mb-12 md:mb-20 tracking-tighter uppercase">{t.achievements.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                   {ACHIEVEMENT_DATA.map((ach) => (
                     <div key={ach.id} className="p-8 md:p-12 bg-zinc-900/40 border border-white/5 rounded-[2rem] md:rounded-[3rem] group flex flex-col sm:flex-row items-start gap-6 md:gap-10">
                        <div className="w-14 h-14 md:w-20 md:h-20 bg-[#A3FF12]/10 rounded-2xl md:rounded-[2rem] flex items-center justify-center shrink-0">
                          <Trophy className="w-6 h-6 md:w-10 md:h-10 text-[#A3FF12]" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-2 md:mb-4 leading-none">{ach.title[lang]}</h3>
                          <p className="text-zinc-500 font-bold uppercase tracking-widest text-[9px] md:text-xs leading-relaxed">{ach.subtitle[lang]}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </AnimatedSection>
           </div>
        </section>

        {/* Feedback Section */}
        <section className="py-24 md:py-40 px-6 md:px-20 bg-zinc-900/10">
          <div className="max-w-4xl mx-auto">
            <CommentSection theme="dark" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-40 px-6 md:px-20 bg-[#A3FF12] text-black">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl sm:text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-none mb-12 md:mb-20">{t.contact.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 w-full mb-16 md:mb-32">
              <a href="mailto:aryaelsa19@gmail.com" className="p-8 md:p-12 bg-black text-white rounded-[2rem] md:rounded-[3rem] text-lg md:text-2xl font-black transition-all flex flex-col items-center gap-4 md:gap-6 group active:scale-95">
                <Mail className="w-8 h-8 md:w-12 md:h-12 text-[#A3FF12]" />
                <span className="break-all text-sm md:text-2xl">aryaelsa19@gmail.com</span>
              </a>
              <a href="https://instagram.com/luminous.std_" target="_blank" rel="noopener noreferrer" className="p-8 md:p-12 bg-white text-black rounded-[2rem] md:rounded-[3rem] text-lg md:text-2xl font-black transition-all flex flex-col items-center gap-4 md:gap-6 border-2 border-black/5 group active:scale-95">
                <Instagram className="w-8 h-8 md:w-12 md:h-12" />
                @luminous.std_
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em]">
               <a href="https://tiktok.com/@luminous.std" target="_blank" rel="noopener noreferrer" className="underline decoration-black/20 underline-offset-8">tiktok</a>
               <a href="#" className="underline decoration-black/20 underline-offset-8">behance</a>
               <a href="#" className="underline decoration-black/20 underline-offset-8">dribbble</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 md:py-20 px-6 md:px-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="text-xl font-black tracking-tighter">arya<span className="text-[#A3FF12]">.studio</span></div>
            <div className="text-[8px] md:text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] text-center">
              © {new Date().getFullYear()} arya elang samudra. {lang === 'id' ? 'dibuat dengan semangat.' : 'built with grit.'}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
