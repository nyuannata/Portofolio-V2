import React, { useState, useEffect } from "react";
import { PROJECTS, ProjectItem } from "@/data/portfolio-data";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeProject) {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  const categories = ["All", "AI / GenAI", "Web Application", "IoT & Hardware"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#C3E41D]/10 border border-[#C3E41D]/30">
          // 03. PROJECTS
        </span>
        <div className="h-px bg-neutral-800 flex-1" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-foreground">
            Featured <span className="text-[#C3E41D]">Engineering</span> Works.
          </h2>
          <p className="text-neutral-400 mt-2 text-base max-w-xl">
            From GPU-accelerated speech transcription to grounded RAG agents and embedded IoT telemetry.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#C3E41D] text-black font-bold shadow-[0_0_15px_rgba(195,228,29,0.3)]"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveProject(project);
              }
            }}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            aria-label={`Lihat detail proyek ${project.title}`}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-[#C3E41D]/60 focus:border-[#C3E41D] focus:outline-none focus:ring-1 focus:ring-[#C3E41D] transition-all duration-300 group cursor-pointer hover:-translate-y-1.5 shadow-xl relative overflow-hidden"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C3E41D]/5 rounded-bl-full group-hover:bg-[#C3E41D]/15 transition-all duration-300 -z-0 pointer-events-none" />

            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-neutral-900 text-[#C3E41D] border border-neutral-800">
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="text-[11px] font-mono text-neutral-400">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold font-fira text-white group-hover:text-[#C3E41D] transition-colors line-clamp-2">
                {project.title}
              </h3>
              <p className="text-xs text-neutral-400 font-mono mt-1 mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Feature Highlights */}
              <ul className="space-y-1.5 mb-6 text-xs text-neutral-400">
                {project.features.slice(0, 2).map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C3E41D] shrink-0" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Tags & Action */}
            <div className="pt-4 border-t border-neutral-900/90 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-500">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:bg-[#C3E41D] transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              aria-label="Tutup jendela modal detail proyek"
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#C3E41D]"
            >
              ✕
            </button>

            <span className="text-xs font-mono text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#C3E41D]/10 border border-[#C3E41D]/30 inline-block mb-3">
              {activeProject.category}
            </span>

            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold font-fira text-white mb-1">
              {activeProject.title}
            </h3>
            <p className="text-sm font-mono text-neutral-400 mb-6">
              {activeProject.subtitle}
            </p>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 mb-6">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Project Overview
              </div>
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            <div className="mb-6">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Key Technical Features &amp; Outcomes
              </div>
              <div className="space-y-2">
                {activeProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C3E41D] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Technologies &amp; Frameworks
              </div>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-neutral-900 text-[#C3E41D] border border-neutral-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
