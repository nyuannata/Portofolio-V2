import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Cpu, Languages, CheckCircle2, Award, Terminal } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#365314] dark:text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#365314]/10 dark:bg-[#C3E41D]/10 border border-[#365314]/30 dark:border-[#C3E41D]/30 font-semibold">
          // 01. PROFILE
        </span>
        <div className="h-px bg-neutral-300 dark:bg-neutral-800 flex-1" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-neutral-900 dark:text-foreground mb-8">
        Engineering Intelligent <span className="text-[#365314] dark:text-[#C3E41D]">AI Systems</span> &amp; Modern Applications.
      </h2>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio & Core Mission */}
        <div className="lg:col-span-7 space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
          <p className="border-l-2 border-[#365314] dark:border-[#C3E41D] pl-4 text-neutral-900 dark:text-neutral-200 font-medium">
            {PERSONAL_INFO.summary}
          </p>

          <p className="text-neutral-700 dark:text-neutral-400 text-base">
            Specialized in deploying large speech-to-text models like <strong className="text-neutral-950 dark:text-white font-semibold">OpenAI Whisper Large-v3</strong> on enterprise-grade GPU architectures, orchestrating <strong className="text-neutral-950 dark:text-white font-semibold">Retrieval-Augmented Generation (RAG)</strong> using Google Gemini API, and designing robust system prompt guardrails with high token efficiency.
          </p>

          {/* Target Roles */}
          <div className="pt-2">
            <h3 className="text-xs uppercase tracking-widest text-neutral-700 dark:text-neutral-400 font-mono mb-3 flex items-center gap-2 font-bold">
              <Terminal className="w-4 h-4 text-[#365314] dark:text-[#C3E41D]" /> Target Engineering Opportunities
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Junior AI Engineer",
                "Machine Learning Engineer",
                "Generative AI Engineer",
                "NLP / ASR Specialist",
              ].map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-white hover:border-[#365314] dark:hover:border-[#C3E41D] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#365314] dark:text-[#C3E41D]" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-300 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-400 text-xs font-mono mb-1 font-semibold">
                <Languages className="w-4 h-4 text-[#365314] dark:text-[#C3E41D]" /> LANGUAGES
              </div>
              <div className="text-sm font-medium text-neutral-900 dark:text-white">
                Indonesian <span className="text-[#365314] dark:text-[#C3E41D] font-bold">(Native)</span> &bull; English <span className="text-neutral-600 dark:text-neutral-400">(Intermediate)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-300 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-400 text-xs font-mono mb-1 font-semibold">
                <Award className="w-4 h-4 text-[#365314] dark:text-[#C3E41D]" /> BASE LOCATION
              </div>
              <div className="text-sm font-medium text-neutral-900 dark:text-white">
                Bekasi / Jakarta, Indonesia (Open to Hybrid &amp; On-site)
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics Bento */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-950/80 border border-neutral-300 dark:border-neutral-800 hover:border-[#365314]/50 dark:hover:border-[#C3E41D]/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#365314]/5 dark:bg-[#C3E41D]/5 rounded-full blur-2xl group-hover:bg-[#365314]/15 dark:group-hover:bg-[#C3E41D]/15 transition-all" />
              <div className="font-fira font-bold text-3xl sm:text-4xl text-[#365314] dark:text-[#C3E41D] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-400 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}

          <div className="col-span-2 p-5 rounded-2xl bg-neutral-100 dark:bg-gradient-to-r dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 border border-neutral-300 dark:border-neutral-800/80 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#365314]/10 dark:bg-[#C3E41D]/10 flex items-center justify-center shrink-0 border border-[#365314]/20 dark:border-[#C3E41D]/20">
              <Cpu className="w-6 h-6 text-[#365314] dark:text-[#C3E41D]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-950 dark:text-white">Hardware &amp; Model Integration</div>
              <div className="text-xs text-neutral-700 dark:text-neutral-400">
                Astra Credit Companies (ACC) GPU pipelines, Whisper, Gemini, Azure AI &amp; IoT ESP32.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
