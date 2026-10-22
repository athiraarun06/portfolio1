import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Copy, Check, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isPrepared, setIsPrepared] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please write a brief message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subjectText = formData.subject.trim() || `Inquiry from ${formData.name}`;
    const bodyText = `Hi Athira,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setIsPrepared(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#292929] bg-[#080808]/75 backdrop-blur-[1px] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F28AB2] uppercase tracking-widest mb-3">
            <span>09</span>
            <span className="w-6 h-[1px] bg-[#F28AB2]"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] mt-2 max-w-xl">
            Interested in AI, software engineering, or a collaborative project? I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Quick Copy */}
            <div className="p-6 rounded-xl bg-[#111111] border border-[#292929] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#F28AB2] uppercase tracking-wider">
                  Direct Institutional Email
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  Active Inbox
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#080808] border border-[#222222] flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-mono text-[#F5F5F5] hover:text-[#F28AB2] transition-colors truncate"
                  title="Click to email Athira Arun"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-md bg-[#181818] border border-[#2a2a2a] hover:border-[#F28AB2] text-xs text-[#A1A1AA] hover:text-[#F28AB2] flex items-center gap-1.5 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-[#777] leading-relaxed">
                Feel free to reach out regarding internship opportunities, technical discussions, research collaborations, or open-source software.
              </p>
            </div>


            {/* Privacy note */}
            <div className="px-4 py-3 rounded-lg bg-[#0e0e0e] border border-[#222222] text-[11px] text-[#777]">
              <span>Privacy notice: Direct phone number is maintained private by default. Verified recruiters and academic collaborators can request direct phone contact via email.</span>
            </div>
          </div>

          {/* Right Column: Pre-filled Mailto Contact Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-[#292929] space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#F5F5F5]">
                  Compose Direct Message
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Draft a message below to launch in your preferred email client or copy directly. No backend storage required.
                </p>
              </div>

              <form onSubmit={handleComposeEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-[#A1A1AA] mb-1.5"
                    >
                      Your Name <span className="text-[#F28AB2]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080808] border ${
                        errors.name ? 'border-rose-500' : 'border-[#292929]'
                      } text-sm text-[#F5F5F5] placeholder-[#555] focus:outline-none focus:border-[#F28AB2] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-[#A1A1AA] mb-1.5"
                    >
                      Your Email <span className="text-[#F28AB2]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080808] border ${
                        errors.email ? 'border-rose-500' : 'border-[#292929]'
                      } text-sm text-[#F5F5F5] placeholder-[#555] focus:outline-none focus:border-[#F28AB2] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-[#A1A1AA] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Internship Opportunity / Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080808] border border-[#292929] text-sm text-[#F5F5F5] placeholder-[#555] focus:outline-none focus:border-[#F28AB2] transition-colors"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[#A1A1AA] mb-1.5"
                  >
                    Message <span className="text-[#F28AB2]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Share project details, team requirements, or discussion topics..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080808] border ${
                      errors.message ? 'border-rose-500' : 'border-[#292929]'
                    } text-sm text-[#F5F5F5] placeholder-[#555] focus:outline-none focus:border-[#F28AB2] transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#F5F5F5] text-[#080808] hover:bg-[#F28AB2] font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28AB2]"
                  >
                    <Send className="w-4 h-4 text-[#080808]" />
                    <span>Compose Email</span>
                  </button>

                  <span className="text-[11px] text-[#777] font-mono text-center sm:text-left">
                    Opens mail client with prefilled details to athiraarun@karunya.edu.in
                  </span>
                </div>

                {isPrepared && (
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Email client opened. If nothing launched, click the direct email link on the left to send.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
