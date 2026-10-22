import React from 'react';
import { motion } from 'motion/react';
import { Globe2, ArrowUpRight } from 'lucide-react';
import { LANGUAGES_DATA, SOCIAL_LINKS } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, InstagramIcon, LeetCodeIcon } from './Icons';

export const LanguagesAndSocial: React.FC = () => {
  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <GitHubIcon className="w-5 h-5" />;
      case 'linkedin':
        return <LinkedInIcon className="w-5 h-5" />;
      case 'instagram':
        return <InstagramIcon className="w-5 h-5" />;
      case 'leetcode':
        return <LeetCodeIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#292929] bg-[#080808]/75 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Languages Section */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
              <span>07</span>
              <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
              <span>Linguistic Proficiency</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] tracking-tight">
              Languages
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1.5">
              Natural languages spoken and written across multilingual environments.
            </p>
          </div>

          {/* Simple text labels without artificial proficiency bars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {LANGUAGES_DATA.map((lang) => (
              <div
                key={lang.name}
                className="p-3.5 rounded-lg bg-[#111111] border border-[#292929] hover:border-[#F28AB2]/40 transition-colors"
              >
                <div className="text-sm font-semibold text-[#F5F5F5]">
                  {lang.name}
                </div>
                <div className="text-xs font-mono text-[#F28AB2] mt-0.5">
                  {lang.proficiency}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer & Social Profiles: "Find Me Online" */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
              <span>08</span>
              <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
              <span>Network</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] tracking-tight">
              Find Me Online
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1.5">
              Verified code repositories, professional networks, algorithmic problem solving, and social handles.
            </p>
          </div>

          {/* 4 Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#F28AB2] hover:bg-[#131113] transition-all duration-200 flex items-center justify-between"
                aria-label={`Visit Athira Arun on ${link.name} (${link.username})`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#080808] border border-[#292929] group-hover:border-[#F28AB2]/50 group-hover:text-[#F28AB2] text-[#A1A1AA] flex items-center justify-center transition-colors">
                    {getSocialIcon(link.type)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#F28AB2] transition-colors">
                      {link.name}
                    </div>
                    <div className="text-xs font-mono text-[#777] group-hover:text-[#A1A1AA] transition-colors">
                      {link.username}
                    </div>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-[#181818] border border-[#252525] group-hover:border-[#F28AB2]/40 flex items-center justify-center text-[#777] group-hover:text-[#F28AB2] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
