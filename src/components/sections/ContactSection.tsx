import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Mail, Linkedin, MapPin, Download, Copy, Check, Send, ExternalLink, RefreshCw } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedMessage = `Hello Yuan,\n\n${formState.message}\n\n---\nSender: ${formState.name}\nEmail: ${formState.email}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const subject = encodeURIComponent(`Engineering Inquiry / Opportunity from ${formState.name}`);
    const body = encodeURIComponent(formattedMessage);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setLastMailtoUrl(mailtoUrl);
    setIsSent(true);

    // Open default mail client
    window.open(mailtoUrl, "_blank");
  };

  const handleCopyMessageBody = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative max-w-screen-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-[#365314] dark:text-[#C3E41D] tracking-wider uppercase px-2.5 py-1 rounded bg-[#365314]/10 dark:bg-[#C3E41D]/10 border border-[#365314]/30 dark:border-[#C3E41D]/30 font-semibold">
          // 06. CONTACT &amp; CONNECT
        </span>
        <div className="h-px bg-neutral-300 dark:bg-neutral-800 flex-1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fira tracking-tight text-neutral-900 dark:text-foreground">
            Let's Collaborate on <span className="text-[#365314] dark:text-[#C3E41D]">AI Engineering</span>.
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            I am actively seeking roles as a <strong className="text-neutral-950 dark:text-white">Junior AI Engineer, Machine Learning Engineer, Generative AI Specialist, or NLP Engineer</strong>. Whether you have an open opportunity, a speech recognition benchmark, or a collaborative project, feel free to reach out.
          </p>

          {/* Direct Actions */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={PERSONAL_INFO.cvUrl}
              download="CV-Yuan-Nata-Nugraha.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-bold bg-[#365314] dark:bg-[#C3E41D] text-white dark:text-black hover:opacity-95 shadow-md dark:shadow-[0_0_25px_rgba(195,228,29,0.3)] transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" /> Download Official CV (PDF)
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-white border border-neutral-300 dark:border-neutral-800 hover:border-[#365314] dark:hover:border-[#C3E41D] hover:text-[#365314] dark:hover:text-[#C3E41D] transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn Profile
            </a>
          </div>

          {/* Quick Info Cards */}
          <div className="space-y-3 pt-4">
            {/* Email Card with Copy */}
            <div className="p-4 rounded-xl bg-white dark:bg-neutral-950/80 border border-neutral-300 dark:border-neutral-800 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-[#365314] dark:text-[#C3E41D] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 font-semibold">EMAIL ADDRESS</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-medium text-neutral-900 dark:text-white hover:text-[#365314] dark:hover:text-[#C3E41D] transition-colors truncate block font-sans"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-[#365314] dark:hover:border-[#C3E41D] transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-[#365314] dark:text-[#C3E41D]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-neutral-950/80 border border-neutral-300 dark:border-neutral-800 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-[#365314] dark:text-[#C3E41D] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 font-semibold">LOCATION</div>
                <div className="text-sm font-medium text-neutral-900 dark:text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-6">
          <div className="p-8 rounded-2xl bg-white dark:bg-neutral-950/90 border border-neutral-300 dark:border-neutral-800/90 shadow-lg dark:shadow-2xl relative overflow-hidden">
            <h3 className="text-xl font-bold font-fira text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#365314] dark:text-[#C3E41D]" /> Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono mb-6">
              Leave your contact details and message below.
            </p>

            {isSent ? (
              <div className="p-6 sm:p-8 text-center rounded-xl bg-neutral-50 dark:bg-neutral-900/90 border border-[#365314]/50 dark:border-[#C3E41D]/50 animate-in zoom-in-95 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#365314]/15 dark:bg-[#C3E41D]/15 text-[#365314] dark:text-[#C3E41D] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">Draft Email Siap Dikirim!</h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-md mx-auto">
                    Aplikasi email default Anda telah dibuka dengan pesan yang sudah terformat. Jika aplikasi email tidak terbuka otomatis, silakan salin pesan atau buka kembali melalui tombol di bawah.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                  <a
                    href={lastMailtoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold bg-[#365314] dark:bg-[#C3E41D] text-white dark:text-black hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" /> Buka Aplikasi Email
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessageBody}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:border-[#365314] dark:hover:border-[#C3E41D] border border-neutral-300 dark:border-neutral-700 transition-colors"
                  >
                    {copiedBody ? <Check className="w-4 h-4 text-[#365314] dark:text-[#C3E41D]" /> : <Copy className="w-4 h-4" />}
                    {copiedBody ? "Tersalin!" : "Salin Isi Pesan"}
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSent(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Tulis Pesan Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-[#365314] dark:focus:border-[#C3E41D] focus:ring-1 focus:ring-[#365314] dark:focus:ring-[#C3E41D] text-sm font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-[#365314] dark:focus:border-[#C3E41D] focus:ring-1 focus:ring-[#365314] dark:focus:ring-[#C3E41D] text-sm font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
                    Project / Opportunity Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about the engineering opportunity or technical challenge..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-[#365314] dark:focus:border-[#C3E41D] focus:ring-1 focus:ring-[#365314] dark:focus:ring-[#C3E41D] text-sm font-sans resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-mono text-sm font-bold bg-[#365314] dark:bg-[#C3E41D] text-white dark:text-black hover:opacity-95 shadow-md dark:shadow-[0_0_20px_rgba(195,228,29,0.25)] transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
