import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp, Linkedin, FileText } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-300 dark:border-neutral-900 bg-white/80 dark:bg-black/60 backdrop-blur-md text-neutral-700 dark:text-neutral-400 py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-4">
          <div
            className="text-4xl text-[#365314] dark:text-[#C3E41D] select-none font-bold"
            style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
          >
            Y
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white font-fira">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono font-medium">
              {PERSONAL_INFO.title}
            </div>
          </div>
        </div>

        {/* Center Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-medium">
          <a href="#about" className="text-neutral-700 dark:text-neutral-400 hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors">
            About
          </a>
          <a href="#experience" className="text-neutral-700 dark:text-neutral-400 hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-neutral-700 dark:text-neutral-400 hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-neutral-700 dark:text-neutral-400 hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors">
            Skills
          </a>
          <a href="#education" className="text-neutral-700 dark:text-neutral-400 hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors">
            Education
          </a>
          <a href="#contact" className="text-neutral-700 dark:text-neutral-400 hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors">
            Contact
          </a>
        </div>

        {/* Right Social & Scroll To Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-[#365314] dark:hover:border-[#C3E41D] text-neutral-700 dark:text-neutral-300 hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.cvUrl}
            download="CV-Yuan-Nata-Nugraha.pdf"
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-[#365314] dark:hover:border-[#C3E41D] text-neutral-700 dark:text-neutral-300 hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors shadow-sm"
            aria-label="Download CV"
          >
            <FileText className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#365314] dark:bg-[#C3E41D] text-white dark:text-black hover:opacity-90 transition-opacity font-bold shadow-md dark:shadow-[0_0_15px_rgba(195,228,29,0.3)]"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-900/80 text-center text-xs font-mono text-neutral-600 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript, Tailwind CSS &amp; shadcn/ui.
      </div>
    </footer>
  );
};
