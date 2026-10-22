import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, ShieldCheck, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#292929] bg-[#080808]/75 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
            <span>06</span>
            <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
            <span>Accreditations</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
                Certifications & Additional Learning
              </h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] mt-2 max-w-xl">
                Verified professional credentials across artificial intelligence, cloud architectures, system administration, and software engineering.
              </p>
            </div>
            <div className="text-xs font-mono text-[#A1A1AA]">
              Total Verified: <span className="text-[#F28AB2]">{CERTIFICATIONS_DATA.length} Credentials</span>
            </div>
          </div>
        </div>

        {/* Certifications Grid (Text-based cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-5 sm:p-6 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#F28AB2]/50 hover:bg-[#131313] transition-all duration-200 group flex items-start gap-4"
            >
              {/* Icon badge */}
              <div className="w-9 h-9 rounded-lg bg-[#080808] border border-[#292929] group-hover:border-[#F28AB2]/60 group-hover:text-[#F28AB2] text-[#A1A1AA] flex items-center justify-center shrink-0 transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono text-[#F28AB2] tracking-wider truncate">
                    {cert.issuer}
                  </span>
                  {cert.badgeTag && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181818] border border-[#292929] text-[#A1A1AA] shrink-0">
                      {cert.badgeTag}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-[#F28AB2] transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
