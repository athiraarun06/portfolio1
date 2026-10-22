/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { LanguagesAndSocial } from './components/LanguagesAndSocial';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F5F5F5] font-sans antialiased selection:bg-[#F28AB2]/25 selection:text-[#F28AB2]">
      {/* Living Animated Black Background: Neural Particle Constellation */}
      <AnimatedBackground />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* 01: About Me */}
        <About />

        {/* 02: Projects (Exactly 3 featured projects) */}
        <Projects />

        {/* 03: Technical Skills */}
        <Skills />

        {/* 04: Internship Experience */}
        <Experience />

        {/* 05: Education */}
        <Education />

        {/* 06: Certifications & Additional Learning */}
        <Certifications />

        {/* 07: Languages & 08: Social Profiles */}
        <LanguagesAndSocial />

        {/* 09: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
