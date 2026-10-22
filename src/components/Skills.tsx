import React from 'react';
import { motion } from 'motion/react';
import { Code2, Brain, Server, Wrench, Users } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

const CATEGORY_ICONS = [
  Code2,
  Brain,
  Server,
  Wrench,
  Users
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#292929] bg-[#080808]/75 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
            <span>03</span>
            <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
            <span>Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] mt-2 max-w-xl">
            Applied technical disciplines across deep learning, backend architecture, and algorithmic systems.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((category, idx) => {
            const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#F28AB2]/40 transition-all duration-300 flex flex-col justify-between ${
                  idx === 1 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0c0c0c] border border-[#292929] flex items-center justify-center text-[#F28AB2]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F5F5]">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#777]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag List */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#161616] text-[#dedede] border border-[#262626] hover:border-[#F28AB2]/50 hover:text-[#F28AB2] hover:bg-[#1a1418] transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#222222] flex items-center justify-between text-[11px] font-mono text-[#666]">
                  <span>{category.skills.length} core competencies</span>
                  <span className="text-[#F28AB2]">•</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
