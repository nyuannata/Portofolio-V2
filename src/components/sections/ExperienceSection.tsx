import React from "react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#C3E41D]/10 border border-[#C3E41D]/30">
          // 02. EXPERIENCE
        </span>
        <div className="h-px bg-neutral-800 flex-1" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-foreground">
            Work Experience &amp; <span className="text-[#C3E41D]">Industry Impact</span>.
          </h2>
          <p className="text-neutral-400 mt-2 text-base max-w-2xl">
            Hands-on enterprise AI development, speech recognition pipelines, and rapid prototyping.
          </p>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-[#C3E41D] before:via-neutral-800 before:to-transparent">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="relative pl-12 md:pl-20 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-2.5 md:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#C3E41D] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_#C3E41D]" />

            {/* Experience Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-neutral-950/90 border border-neutral-800/90 hover:border-[#C3E41D]/50 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_30px_rgba(195,228,29,0.08)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold font-fira text-white">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-[#C3E41D]/15 text-[#C3E41D] border border-[#C3E41D]/30 animate-pulse">
                        Active Role
                      </span>
                    )}
                  </div>
                  <div className="text-lg font-medium text-[#C3E41D] mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                  <span className="inline-flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
                    <Calendar className="w-3.5 h-3.5 text-[#C3E41D]" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
                    <MapPin className="w-3.5 h-3.5 text-[#C3E41D]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements Bullet List */}
              <div className="mt-6 space-y-3">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
                    <div className="mt-1.5 shrink-0">
                      <ChevronRight className="w-4 h-4 text-[#C3E41D]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="mt-6 pt-4 border-t border-neutral-900 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-[#C3E41D]/40 transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
