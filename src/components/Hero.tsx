import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon } from './Icons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameLetters = "ATHIRA ARUN".split("");

  return (
    <div className="relative">
      {/* =========================================================================
          STAGE 1: ATHIRA ARUN — FULL-SCREEN CENTRED HERO WITH ANIMATIONS
          ========================================================================= */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-tech-grid"
      >
        {/* Dynamic ambient pink aura behind the big name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#F28AB2]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-white/[0.02] blur-[100px] pointer-events-none rounded-full" />

        {/* Futuristic concentric radar / geometric AI coordinate rings */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
          <svg
            className="w-full max-w-5xl h-auto"
            viewBox="0 0 900 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroRadarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#292929" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#F28AB2" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#292929" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F28AB2" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#080808" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="450" cy="280" r="320" fill="url(#centerGlow)" />
            <circle cx="450" cy="280" r="160" stroke="url(#heroRadarGrad)" strokeWidth="1" strokeDasharray="4 6" className="animate-[spin_70s_linear_infinite]" style={{ transformOrigin: '450px 280px' }} />
            <circle cx="450" cy="280" r="260" stroke="#262626" strokeWidth="0.8" strokeDasharray="3 8" className="animate-[spin_100s_linear_infinite_reverse]" style={{ transformOrigin: '450px 280px' }} />
            <circle cx="450" cy="280" r="360" stroke="#1d1d1d" strokeWidth="0.6" strokeDasharray="2 10" />
            <line x1="90" y1="280" x2="810" y2="280" stroke="#222222" strokeWidth="0.7" strokeDasharray="4 4" />
            <line x1="450" y1="60" x2="450" y2="500" stroke="#222222" strokeWidth="0.7" strokeDasharray="4 4" />
            <rect x="446" y="116" width="8" height="8" fill="#F28AB2" fillOpacity="0.7" rx="2" />
            <rect x="446" y="436" width="8" height="8" fill="#F28AB2" fillOpacity="0.7" rx="2" />
            <rect x="186" y="276" width="8" height="8" fill="#F28AB2" fillOpacity="0.7" rx="2" />
            <rect x="706" y="276" width="8" height="8" fill="#F28AB2" fillOpacity="0.7" rx="2" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center my-auto">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111]/90 border border-[#292929] mb-8 shadow-sm backdrop-blur-sm hover:border-[#F28AB2]/50 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28AB2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F28AB2]"></span>
            </span>
            <span className="text-xs font-mono text-[#A1A1AA] tracking-wide">
              {PERSONAL_INFO.status}
            </span>
          </motion.div>

          {/* BIG NAME IN THE CENTRE FIRST */}
          <div className="relative my-4">
            <div className="absolute -inset-6 bg-gradient-to-r from-transparent via-[#F28AB2]/20 to-transparent blur-3xl -z-10 pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.15,
                  },
                },
              }}
              className="flex items-center justify-center flex-wrap"
            >
              {nameLetters.map((char, index) => {
                if (char === " ") {
                  return (
                    <span key={index} className="w-4 sm:w-6 md:w-10 inline-block">
                      &nbsp;
                    </span>
                  );
                }

                return (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 45,
                        filter: 'blur(10px)',
                        scale: 0.8,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        scale: 1,
                        transition: {
                          type: 'spring',
                          damping: 14,
                          stiffness: 110,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.15,
                      color: '#F28AB2',
                      transition: { duration: 0.15 },
                    }}
                    className="inline-block text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold tracking-tight font-heading select-none cursor-default text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F5F5F5] to-[#999999] hover:text-[#F28AB2] transition-colors drop-shadow-sm leading-none"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.div>

            {/* Glowing Rose Pink Accent Line with Rotating Center Diamond */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              className="w-48 sm:w-72 md:w-96 h-[2px] mx-auto mt-6 bg-gradient-to-r from-transparent via-[#F28AB2] to-transparent relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45 bg-[#F28AB2] shadow-sm shadow-[#F28AB2]" />
            </motion.div>
          </div>

          {/* Subtitle / Department tag */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-xs sm:text-sm font-mono text-[#A1A1AA] tracking-widest uppercase mt-6 max-w-lg"
          >
            Computer Science & Engineering · AI & ML Undergrad
          </motion.p>
        </div>

        {/* Animated Scroll Down Indicator Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="relative z-10 pb-8 flex flex-col items-center"
        >
          <button
            onClick={() => scrollTo('statement')}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-[#F28AB2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2] p-2 rounded-lg"
            aria-label="Scroll down to statement and work"
          >
            <span className="tracking-widest uppercase text-[11px]">Scroll to Explore</span>
            <div className="w-8 h-8 rounded-full bg-[#111111] border border-[#292929] group-hover:border-[#F28AB2] flex items-center justify-center transition-all animate-bounce">
              <ChevronDown className="w-4 h-4 text-[#F28AB2]" />
            </div>
          </button>
        </motion.div>
      </section>

      {/* =========================================================================
          STAGE 2: WHEN SCROLLING DOWN — STATEMENT & SPECIALIZATION SECTION
          ========================================================================= */}
      <section
        id="statement"
        className="relative min-h-[85vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 border-t border-[#292929] bg-[#080808]/75 backdrop-blur-[1px]"
      >
        <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xs sm:text-sm font-mono tracking-widest text-[#F28AB2] uppercase mb-4"
          >
            {PERSONAL_INFO.roleEyebrow}
          </motion.p>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.18] max-w-3xl mx-auto mb-6"
          >
            {PERSONAL_INFO.headlinePrefix}
            <span className="text-[#F28AB2] relative inline-block">
              {PERSONAL_INFO.headlineHighlight}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-[#F28AB2]/0 via-[#F28AB2]/70 to-[#F28AB2]/0"></span>
            </span>
            {PERSONAL_INFO.headlineSuffix}
          </motion.h2>

          {/* Natural Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            {PERSONAL_INFO.introduction}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group px-6 py-3 rounded-lg bg-[#F5F5F5] text-[#080808] font-medium text-sm hover:bg-[#F28AB2] transition-all duration-200 flex items-center gap-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-lg border border-[#292929] bg-[#111111] text-[#F5F5F5] font-medium text-sm hover:border-[#F28AB2] hover:text-[#F28AB2] transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
            >
              <Mail className="w-4 h-4 text-[#F28AB2]" />
              <span>Let's Connect</span>
            </button>

            <a
              href="https://github.com/athiraarun06"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-[#292929] bg-[#111111]/70 text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] font-medium text-sm transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA]" />
            </a>
          </motion.div>

          {/* Technical quick spec indicator strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-[#292929]/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl w-full"
          >
            <div className="p-3.5 rounded-lg bg-[#111111]/60 border border-[#292929]/60 hover:border-[#F28AB2]/40 transition-colors backdrop-blur-sm">
              <div className="text-[11px] font-mono text-[#F28AB2]">DEGREE</div>
              <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">B.Tech CSE (AI & ML)</div>
              <div className="text-[10px] text-[#A1A1AA]">Karunya Institute</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#111111]/60 border border-[#292929]/60 hover:border-[#F28AB2]/40 transition-colors backdrop-blur-sm">
              <div className="text-[11px] font-mono text-[#F28AB2]">CORE FOCUS</div>
              <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">AI, NLP & Vision</div>
              <div className="text-[10px] text-[#A1A1AA]">Deep Learning & LLMs</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#111111]/60 border border-[#292929]/60 hover:border-[#F28AB2]/40 transition-colors backdrop-blur-sm">
              <div className="text-[11px] font-mono text-[#F28AB2]">EXPERIENCE</div>
              <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">Industry Internships</div>
              <div className="text-[10px] text-[#A1A1AA]">AI, ML & ERP Systems</div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#111111]/60 border border-[#292929]/60 hover:border-[#F28AB2]/40 transition-colors backdrop-blur-sm">
              <div className="text-[11px] font-mono text-[#F28AB2]">LOCATION</div>
              <div className="text-xs text-[#F5F5F5] font-medium mt-0.5">India</div>
              <div className="text-[10px] text-[#A1A1AA]">Open to Hybrid / Remote</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
