import React from "react";
import { EXPERIENCES } from "@/data/portfolio-data";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#365314] dark:text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#365314]/10 dark:bg-[#C3E41D]/10 border border-[#365314]/30 dark:border-[#C3E41D]/30 font-semibold">
          // 02. EXPERIENCE
        </span>
        <div className="h-px bg-neutral-300 dark:bg-neutral-800 flex-1" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-neutral-900 dark:text-foreground">
            Work Experience &amp; <span className="text-[#365314] dark:text-[#C3E41D]">Industry Impact</span>.
          </h2>
          <p className="text-neutral-700 dark:text-neutral-400 mt-2 text-base max-w-2xl">
            Hands-on enterprise AI development, speech recognition pipelines, and rapid prototyping.
          </p>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-[#365314] dark:before:from-[#C3E41D] before:via-neutral-300 dark:before:via-neutral-800 before:to-transparent">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="relative pl-12 md:pl-20 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-2.5 md:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-[#365314] dark:border-[#C3E41D] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(54,83,20,0.4)] dark:shadow-[0_0_10px_#C3E41D]" />

            {/* Experience Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-950/90 border border-neutral-300 dark:border-neutral-800/90 hover:border-[#365314]/50 dark:hover:border-[#C3E41D]/50 transition-all duration-300 shadow-md dark:shadow-xl group-hover:shadow-[0_0_30px_rgba(54,83,20,0.1)] dark:group-hover:shadow-[0_0_30px_rgba(195,228,29,0.08)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800/80">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold font-fira text-neutral-900 dark:text-white">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-[#365314]/15 dark:bg-[#C3E41D]/15 text-[#365314] dark:text-[#C3E41D] border border-[#365314]/30 dark:border-[#C3E41D]/30 animate-pulse">
                        Active Role
                      </span>
                    )}
                  </div>
                  <div className="text-lg font-medium text-[#365314] dark:text-[#C3E41D] mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-700 dark:text-neutral-400">
                  <span className="inline-flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-800 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#365314] dark:text-[#C3E41D]" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-800 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#365314] dark:text-[#C3E41D]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements Bullet List */}
              <div className="mt-6 space-y-3">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-neutral-800 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                    <div className="mt-1.5 shrink-0">
                      <ChevronRight className="w-4 h-4 text-[#365314] dark:text-[#C3E41D]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-900 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800 hover:border-[#365314]/40 dark:hover:border-[#C3E41D]/40 transition-colors"
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
