import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { INTERNSHIP_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#292929] bg-[#080808]/75 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
            <span>04</span>
            <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            Internship Experience
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] mt-2 max-w-xl">
            Practical industry engagements across artificial intelligence, enterprise workflows, and full-stack software development.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#292929] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {INTERNSHIP_EXPERIENCE.map((item, index) => {
            const isCynaris = item.id === 'cynaris-solutions';
            const isProglint = item.id === 'proglint';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node bullet */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#111111] border-2 border-[#292929] group-hover:border-[#F28AB2] flex items-center justify-center transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F28AB2]"></div>
                </div>

                {/* Organization Card */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#F28AB2]/40 transition-all duration-300">
                  {/* Top Bar: Company Name, Role, Year, Location */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#222222]">
                    <div>
                      <span className="text-xs font-mono text-[#F28AB2] uppercase tracking-wider">
                        0{index + 1} · {item.role}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] tracking-tight mt-0.5">
                        {item.company}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                      {item.location && (
                        <div className="flex items-center gap-1 text-[#888]">
                          <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      <div className="px-2.5 py-1 rounded bg-[#181818] border border-[#2e2e2e] text-[#F28AB2] font-semibold">
                        {item.yearRange}
                      </div>
                    </div>
                  </div>

                  {/* Body: Specially handle Cynaris with two separate 2025 & 2026 sub-projects */}
                  {isCynaris && item.projects && (
                    <div className="mt-6 space-y-6">
                      <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                        Dual Project Progression:
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.projects.map((subProj) => (
                          <div
                            key={subProj.title}
                            className="p-5 rounded-lg bg-[#0d0d0d] border border-[#252525] hover:border-[#F28AB2]/30 transition-colors flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F28AB2]/10 text-[#F28AB2] border border-[#F28AB2]/30">
                                  {subProj.year} Project
                                </span>
                                <span className="text-xs font-mono text-[#777]">
                                  {subProj.period}
                                </span>
                              </div>
                              <h4 className="text-base font-semibold text-[#F5F5F5] mb-3">
                                {subProj.title}
                              </h4>
                              <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                                {subProj.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F28AB2] shrink-0 mt-1.5" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {subProj.technologies && (
                              <div className="mt-4 pt-3 border-t border-[#1e1e1e] flex flex-wrap gap-1.5">
                                {subProj.technologies.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#161616] text-[#A1A1AA] border border-[#282828]"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Standard Internship Entries (Mindenious, Unified Mentor, CodTech) */}
                  {!isCynaris && !isProglint && item.bullets && (
                    <div className="mt-5 space-y-3">
                      {item.period && (
                        <div className="text-xs font-mono text-[#F28AB2] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Period: {item.period}</span>
                        </div>
                      )}
                      <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F28AB2] shrink-0 mt-1.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Proglint Engagement Programme Entry */}
                  {isProglint && (
                    <div className="mt-5 p-4 rounded-lg bg-[#0d0d0d] border border-[#252525] flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#F28AB2] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-[#F5F5F5]">
                          R&D Workshop & Hackathon Selection
                        </div>
                        <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 leading-relaxed">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
