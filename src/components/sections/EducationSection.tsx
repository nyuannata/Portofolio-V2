import React from "react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolio-data";
import { GraduationCap, Award, MapPin, CheckCircle2, BookOpen } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#365314] dark:text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#365314]/10 dark:bg-[#C3E41D]/10 border border-[#365314]/30 dark:border-[#C3E41D]/30 font-semibold">
          // 05. ACADEMICS & CREDENTIALS
        </span>
        <div className="h-px bg-neutral-300 dark:bg-neutral-800 flex-1" />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-neutral-900 dark:text-foreground">
          Education &amp; <span className="text-[#365314] dark:text-[#C3E41D]">Certifications</span>.
        </h2>
        <p className="text-neutral-700 dark:text-neutral-400 mt-2 text-base max-w-2xl">
          Formal academic foundation in computer systems combined with verified industry certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Card (5 cols) */}
        <div className="lg:col-span-5 p-7 rounded-2xl bg-white dark:bg-neutral-950/90 border border-neutral-300 dark:border-neutral-800 hover:border-[#365314]/50 dark:hover:border-[#C3E41D]/50 transition-all duration-300 shadow-md dark:shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#365314]/5 dark:bg-[#C3E41D]/5 rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-[#365314] dark:text-[#C3E41D]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800 font-semibold">
                {EDUCATION.period}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-fira text-neutral-900 dark:text-white mb-1">
              {EDUCATION.degree}
            </h3>
            <div className="text-base font-semibold text-[#365314] dark:text-[#C3E41D] mb-3">
              {EDUCATION.institution}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#365314] dark:text-[#C3E41D]" />
              {EDUCATION.location}
            </div>

            <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-900 pt-5">
              <div>
                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 block mb-1 uppercase tracking-wider font-semibold">
                  Academic Focus
                </span>
                <p className="leading-relaxed">
                  {EDUCATION.focus}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/80">
                <span className="text-xs font-mono text-[#365314] dark:text-[#C3E41D] block mb-1 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <BookOpen className="w-3.5 h-3.5" /> Undergraduate Thesis
                </span>
                <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
                  "{EDUCATION.thesis}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications (7 cols) */}
        <div id="certifications" className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold font-fira text-neutral-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#365314] dark:text-[#C3E41D]" /> Professional Certifications
            </h3>
            <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 font-semibold">
              Dicoding Indonesia &bull; 2025
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-neutral-950/80 border border-neutral-300 dark:border-neutral-800 hover:border-[#365314]/50 dark:hover:border-[#C3E41D]/50 transition-all duration-200 group hover:-translate-y-0.5 flex items-start gap-3 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#365314]/40 dark:group-hover:border-[#C3E41D]/40 text-[#365314] dark:text-[#C3E41D]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-[#365314] dark:group-hover:text-[#C3E41D] transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-800">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-[#365314] dark:text-[#C3E41D] font-bold">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
