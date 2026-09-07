import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp, Linkedin, FileText } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-900 bg-black/60 backdrop-blur-md text-neutral-400 py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-4">
          <div
            className="text-4xl text-[#C3E41D] select-none font-bold"
            style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
          >
            Y
          </div>
          <div>
            <div className="text-base font-bold text-white font-fira">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              {PERSONAL_INFO.title}
            </div>
          </div>
        </div>

        {/* Center Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a href="#about" className="hover:text-[#C3E41D] transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-[#C3E41D] transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-[#C3E41D] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#C3E41D] transition-colors">
            Skills
          </a>
          <a href="#education" className="hover:text-[#C3E41D] transition-colors">
            Education
          </a>
          <a href="#contact" className="hover:text-[#C3E41D] transition-colors">
            Contact
          </a>
        </div>

        {/* Right Social & Scroll To Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#C3E41D] text-neutral-300 hover:text-[#C3E41D] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.cvUrl}
            download="CV-Yuan-Nata-Nugraha.pdf"
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#C3E41D] text-neutral-300 hover:text-[#C3E41D] transition-colors"
            aria-label="Download CV"
          >
            <FileText className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#C3E41D] text-black hover:opacity-90 transition-opacity font-bold shadow-[0_0_15px_rgba(195,228,29,0.3)]"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-8 pt-6 border-t border-neutral-900/80 text-center text-xs font-mono text-neutral-400">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript, Tailwind CSS &amp; shadcn/ui.
      </div>
    </footer>
  );
};
