import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Cpu, Languages, CheckCircle2, Award, Terminal } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#C3E41D]/10 border border-[#C3E41D]/30">
          // 01. PROFILE
        </span>
        <div className="h-px bg-neutral-800 flex-1" />
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-foreground mb-8">
        Engineering Intelligent <span className="text-[#C3E41D]">AI Systems</span> &amp; Modern Applications.
      </h2>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio & Core Mission */}
        <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg">
          <p className="border-l-2 border-[#C3E41D] pl-4 text-neutral-200">
            {PERSONAL_INFO.summary}
          </p>

          <p className="text-neutral-400 text-base">
            Specialized in deploying large speech-to-text models like <strong className="text-white">OpenAI Whisper Large-v3</strong> on enterprise-grade GPU architectures, orchestrating <strong className="text-white">Retrieval-Augmented Generation (RAG)</strong> using Google Gemini API, and designing robust system prompt guardrails with high token efficiency.
          </p>

          {/* Target Roles */}
          <div className="pt-2">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-mono mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#C3E41D]" /> Target Engineering Opportunities
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-sm font-medium text-white hover:border-[#C3E41D] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C3E41D]" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono mb-1">
                <Languages className="w-4 h-4 text-[#C3E41D]" /> LANGUAGES
              </div>
              <div className="text-sm font-medium text-white">
                Indonesian <span className="text-[#C3E41D]">(Native)</span> &bull; English <span className="text-neutral-400">(Intermediate)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono mb-1">
                <Award className="w-4 h-4 text-[#C3E41D]" /> BASE LOCATION
              </div>
              <div className="text-sm font-medium text-white">
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
              className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-[#C3E41D]/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C3E41D]/5 rounded-full blur-2xl group-hover:bg-[#C3E41D]/15 transition-all" />
              <div className="font-fira font-bold text-3xl sm:text-4xl text-[#C3E41D] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}

          <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C3E41D]/10 flex items-center justify-center shrink-0 border border-[#C3E41D]/20">
              <Cpu className="w-6 h-6 text-[#C3E41D]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Hardware &amp; Model Integration</div>
              <div className="text-xs text-neutral-400">
                Astra Credit Companies (ACC) GPU pipelines, Whisper, Gemini, Azure AI &amp; IoT ESP32.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
