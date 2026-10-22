import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight, Github, Info, BookOpen, Globe, Code2 } from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { BrainTumorVisual, AtsWorkflowVisual, FraudDetectionVisual } from './ProjectVisuals';
import { GitHubIcon } from './Icons';

export const Projects: React.FC = () => {
  const renderVisual = (id: string) => {
    switch (id) {
      case 'brain-tumor-ai':
        return <BrainTumorVisual />;
      case 'ats-enhancement-frappe':
        return <AtsWorkflowVisual />;
      case 'credit-card-fraud-detection':
        return <FraudDetectionVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#292929] bg-[#080808]/75 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
            <span>02</span>
            <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
            <span>Featured Engineering</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base text-[#A1A1AA] mt-2 max-w-xl">
                A curated selection of deep learning models, enterprise automation workflows, and end-to-end intelligent systems.
              </p>
            </div>
            <div className="text-xs font-mono text-[#A1A1AA]">
              Showing <span className="text-[#F28AB2]">3 of 3</span> key projects
            </div>
          </div>
        </div>

        {/* Featured Projects Grid: Exactly 3 items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex flex-col rounded-xl bg-[#111111] border border-[#292929] hover:border-[#F28AB2]/50 transition-all duration-300 group overflow-hidden shadow-lg shadow-black/30"
              >
                {/* Visual Representation */}
                {renderVisual(project.id)}

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Category & index */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                      <span className="text-[#F28AB2] tracking-wider uppercase text-[11px]">
                        {project.category}
                      </span>
                      <span className="text-[#666]">0{index + 1} / 03</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#F28AB2] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Educational / Academic Disclaimer for BrainTumorAI */}
                    {project.disclaimer && (
                      <div className="p-2.5 rounded-lg bg-[#0e0e0e] border border-[#252525] flex items-start gap-2 text-[11px] text-[#888] leading-tight">
                        <Info className="w-3.5 h-3.5 text-[#F28AB2] shrink-0 mt-0.5" />
                        <span>{project.disclaimer}</span>
                      </div>
                    )}
                  </div>

                  {/* Technologies Tags */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono text-[#777] uppercase tracking-wider mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#161616] text-[#c4c4c7] border border-[#262626]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#222222] flex flex-wrap items-center gap-2">
                    {/* Primary GitHub link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#292929] bg-[#161616] text-xs font-medium text-[#F5F5F5] hover:text-[#F28AB2] hover:border-[#F28AB2]/50 transition-colors"
                      aria-label={`${project.title} repository`}
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      <span>{project.githubLabel || 'Explore on GitHub'}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#A1A1AA]" />
                    </a>

                    {/* Live Demo button if available */}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-xs font-medium text-emerald-300 hover:border-emerald-400 hover:bg-emerald-950/40 transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                      </a>
                    )}

                    {/* API Documentation if available */}
                    {project.apiDocsUrl && (
                      <a
                        href={project.apiDocsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#292929] bg-[#161616] text-xs font-medium text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#383838] transition-colors"
                        aria-label={`${project.title} API Documentation`}
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#F28AB2]" />
                        <span>API Docs</span>
                        <ArrowUpRight className="w-3 h-3 text-[#777]" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Single Prominent Button beneath the cards linking to GitHub */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/athiraarun06"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border border-[#292929] bg-[#111111] text-[#F5F5F5] hover:border-[#F28AB2] hover:text-[#F28AB2] font-medium text-sm transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
          >
            <GitHubIcon className="w-4 h-4 text-[#F28AB2]" />
            <span>Explore More Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#F28AB2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <p className="text-xs text-[#777] mt-3 font-mono">
            View additional codebases, experiments, and ongoing contributions on GitHub
          </p>
        </div>
      </div>
    </section>
  );
};
