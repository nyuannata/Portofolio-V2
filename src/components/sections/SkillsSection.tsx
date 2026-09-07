import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { Brain, Wrench, Terminal, Globe, Cpu } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & Machine Learning":
        return <Brain className="w-5 h-5 text-[#365314] dark:text-[#C3E41D]" />;
      case "AI / ML Tools & Frameworks":
        return <Wrench className="w-5 h-5 text-[#365314] dark:text-[#C3E41D]" />;
      case "Programming & Data":
        return <Terminal className="w-5 h-5 text-[#365314] dark:text-[#C3E41D]" />;
      case "Web & Cloud Engineering":
        return <Globe className="w-5 h-5 text-[#365314] dark:text-[#C3E41D]" />;
      case "IoT & Embedded Systems":
        return <Cpu className="w-5 h-5 text-[#365314] dark:text-[#C3E41D]" />;
      default:
        return <Brain className="w-5 h-5 text-[#365314] dark:text-[#C3E41D]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#365314] dark:text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#365314]/10 dark:bg-[#C3E41D]/10 border border-[#365314]/30 dark:border-[#C3E41D]/30 font-semibold">
          // 04. TECHNICAL SKILLS
        </span>
        <div className="h-px bg-neutral-300 dark:bg-neutral-800 flex-1" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-neutral-900 dark:text-foreground">
            Tools, Languages &amp; <span className="text-[#365314] dark:text-[#C3E41D]">Competencies</span>.
          </h2>
          <p className="text-neutral-700 dark:text-neutral-400 mt-2 text-base max-w-2xl">
            A comprehensive spectrum spanning theoretical AI algorithms, deep learning models, and production software engineering.
          </p>
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-950/80 border border-neutral-300 dark:border-neutral-800/80 hover:border-[#365314]/50 dark:hover:border-[#C3E41D]/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm relative ${
              idx === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center group-hover:border-[#365314]/40 dark:group-hover:border-[#C3E41D]/40 transition-colors">
                {getCategoryIcon(cat.category)}
              </div>
              <div>
                <h3 className="text-lg font-bold font-fira text-neutral-900 dark:text-white group-hover:text-[#365314] dark:group-hover:text-[#C3E41D] transition-colors">
                  {cat.category}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                  {cat.description}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 hover:border-[#365314] dark:hover:border-[#C3E41D] hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#365314] dark:bg-[#C3E41D]" />
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
