import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Sparkles, Eye, Server, Compass, CheckCircle2 } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

const FOCUS_ICONS = [
  Brain,
  Sparkles,
  Cpu,
  Eye,
  Server
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#292929] relative bg-[#080808]/75 backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
            <span>01</span>
            <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            {ABOUT_DATA.heading}
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-invert max-w-none text-[#A1A1AA] text-base sm:text-lg leading-relaxed space-y-5">
              {ABOUT_DATA.narrative.map((paragraph, idx) => (
                <p key={idx} className="font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Working Principles Card */}
            <div className="mt-8 p-6 rounded-xl bg-[#111111] border border-[#292929] space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#F5F5F5] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#F28AB2]" />
                <span>Engineering Philosophy</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A1A1AA]">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F28AB2] mt-1.5 shrink-0" />
                  <span>Pragmatic AI over purely speculative models</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F28AB2] mt-1.5 shrink-0" />
                  <span>Explainability & transparent system behavior</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F28AB2] mt-1.5 shrink-0" />
                  <span>End-to-end reliability from data to interface</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F28AB2] mt-1.5 shrink-0" />
                  <span>Disciplined continuous learning and research</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Five Focus Areas */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-4">
              Primary Focus Areas
            </h3>

            <div className="space-y-3">
              {ABOUT_DATA.focusAreas.map((area, index) => {
                const IconComponent = FOCUS_ICONS[index % FOCUS_ICONS.length];
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-5 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#F28AB2]/40 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#080808] border border-[#292929] group-hover:border-[#F28AB2]/50 flex items-center justify-center shrink-0 transition-colors">
                        <IconComponent className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#F28AB2] transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[#F5F5F5] group-hover:text-[#F28AB2] transition-colors">
                          {area.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1.5 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
