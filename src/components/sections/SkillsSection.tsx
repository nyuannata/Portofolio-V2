import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { Brain, Wrench, Terminal, Globe, Cpu } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & Machine Learning":
        return <Brain className="w-5 h-5 text-[#C3E41D]" />;
      case "AI / ML Tools & Frameworks":
        return <Wrench className="w-5 h-5 text-[#C3E41D]" />;
      case "Programming & Data":
        return <Terminal className="w-5 h-5 text-[#C3E41D]" />;
      case "Web & Cloud Engineering":
        return <Globe className="w-5 h-5 text-[#C3E41D]" />;
      case "IoT & Embedded Systems":
        return <Cpu className="w-5 h-5 text-[#C3E41D]" />;
      default:
        return <Brain className="w-5 h-5 text-[#C3E41D]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#C3E41D]/10 border border-[#C3E41D]/30">
          // 04. TECHNICAL SKILLS
        </span>
        <div className="h-px bg-neutral-800 flex-1" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-foreground">
            Tools, Languages &amp; <span className="text-[#C3E41D]">Competencies</span>.
          </h2>
          <p className="text-neutral-400 mt-2 text-base max-w-2xl">
            A comprehensive spectrum spanning theoretical AI algorithms, deep learning models, and production software engineering.
          </p>
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-[#C3E41D]/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg relative ${
              idx === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-[#C3E41D]/40 transition-colors">
                {getCategoryIcon(cat.category)}
              </div>
              <div>
                <h3 className="text-lg font-bold font-fira text-white group-hover:text-[#C3E41D] transition-colors">
                  {cat.category}
                </h3>
                <p className="text-xs text-neutral-400 font-mono">
                  {cat.description}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-neutral-900/90 text-neutral-200 border border-neutral-800 hover:border-[#C3E41D] hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3E41D]" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
