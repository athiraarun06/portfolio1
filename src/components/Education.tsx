import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#292929] bg-[#080808]/75 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
            <span>05</span>
            <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            Education
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] mt-2 max-w-xl">
            Foundational engineering studies in Artificial Intelligence & Machine Learning and preparatory schooling.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((entry, index) => (
            <motion.div
              key={entry.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#F28AB2]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Period & Institution Type */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-[#F28AB2] bg-[#F28AB2]/10 px-3 py-1 rounded-md border border-[#F28AB2]/25 font-semibold">
                    {entry.period}
                  </span>
                  <div className="flex items-center gap-1 text-[#888]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{entry.location}</span>
                  </div>
                </div>

                {/* Degree / Level */}
                <h3 className="text-xl font-bold text-[#F5F5F5] leading-snug">
                  {entry.institution}
                </h3>
                <div className="text-sm font-mono text-[#F28AB2] mt-2">
                  {entry.degree}
                </div>

                {/* Description */}
                {entry.details && (
                  <p className="text-xs sm:text-sm text-[#A1A1AA] mt-4 leading-relaxed">
                    {entry.details}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between text-[11px] font-mono text-[#777]">
                <span>Status: {index === 0 ? 'Currently Enrolled' : 'Completed'}</span>
                <span className="text-[#F28AB2]">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
