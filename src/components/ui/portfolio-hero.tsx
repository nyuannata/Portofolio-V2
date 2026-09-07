import React, { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Inline Button component
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// BlurText animation component
export interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export interface PortfolioHeroProps {
  onNavigate?: (id: string) => void;
}

export default function PortfolioHero({ onNavigate }: PortfolioHeroProps) {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
    { label: "HOME", href: "#hero", highlight: true },
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "EDUCATION", href: "#education" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    if (onNavigate) {
      onNavigate(targetId);
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      id="hero"
      className="min-h-screen text-foreground transition-colors relative selection:bg-[#C3E41D] selection:text-black"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      {/* Subtle background ambient glow in dark mode */}
      {isDark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C3E41D]/10 blur-[130px] rounded-full pointer-events-none -z-0" />
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-md bg-background/20 transition-all">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Menu Button */}
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50 text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C3E41D]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-8 h-8 transition-colors duration-300 ${isDark ? "text-[#C3E41D]" : "text-[#365314]"}`} strokeWidth={2} />
              ) : (
                <Menu className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
              )}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[220px] md:w-[260px] border border-neutral-300 dark:border-neutral-800 shadow-2xl mt-2 ml-4 p-4 rounded-xl z-[100] backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200"
                style={{
                  backgroundColor: isDark ? "rgba(10, 10, 10, 0.95)" : "rgba(255, 255, 255, 0.98)",
                }}
              >
                <div className="text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-2 px-2 font-mono font-semibold">
                  Navigation
                </div>
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-base md:text-lg font-bold tracking-tight py-1.5 px-2.5 rounded-md cursor-pointer transition-all duration-200 hover:translate-x-1"
                    style={{
                      color: item.highlight ? (isDark ? "#C3E41D" : "#365314") : isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = isDark ? "#C3E41D" : "#365314";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = item.highlight ? (isDark ? "#C3E41D" : "#365314") : (isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)");
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Signature / Monogram */}
          <a
            href="#hero"
            className="text-4xl hover:opacity-80 transition-opacity select-none font-bold"
            style={{ 
              color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)", 
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" 
            }}
          >
            Y
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity border border-neutral-700/50"
            style={{ backgroundColor: isDark ? "hsl(0 0% 15%)" : "hsl(0 0% 90%)" }}
            aria-label="Toggle theme"
          >
            <div
              className="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center text-[10px]"
              style={{
                backgroundColor: isDark ? "#C3E41D" : "hsl(0 0% 10%)",
                transform: isDark ? "translateX(2rem)" : "translateX(0)",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col justify-center items-center">
        {/* Centered Main Name - Always Perfectly Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 select-none">
          <div className="relative text-center">
            <div>
              <BlurText
                text="YUAN"
                delay={100}
                animateBy="letters"
                direction="top"
                className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
                style={{ color: isDark ? "#C3E41D" : "#365314", fontFamily: "'Fira Code', monospace" }}
              />
            </div>
            <div>
              <BlurText
                text="NATA"
                delay={100}
                animateBy="letters"
                direction="top"
                className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
                style={{ color: isDark ? "#C3E41D" : "#365314", fontFamily: "'Fira Code', monospace" }}
              />
            </div>

            {/* Profile Picture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={`w-[70px] h-[115px] sm:w-[95px] sm:h-[156px] md:w-[115px] md:h-[190px] lg:w-[132px] lg:h-[224px] rounded-full overflow-hidden shadow-2xl ring-2 ${isDark ? "ring-[#C3E41D]/60" : "ring-[#365314]/60"} transition-transform duration-300 hover:scale-110 cursor-pointer bg-black`}>
                <picture>
                  <source srcSet="/profile.webp" type="image/webp" />
                  <img
                    src="/profile.png"
                    alt="Yuan Nata Nugraha"
                    width={264}
                    height={448}
                    loading="eager"
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline - Proper Distance Below Hero */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 xl:bottom-32 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <BlurText
              text="Designing intelligent AI systems & machine learning pipelines in code."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-800 dark:text-neutral-400 hover:text-black dark:hover:text-white font-medium"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-500 font-mono tracking-widest uppercase font-semibold">
              AI Engineer &bull; Speech Recognition &bull; LLM &amp; RAG
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={() => {
            const nextElem = document.getElementById("about");
            if (nextElem) {
              nextElem.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 hover:translate-y-1 group"
          aria-label="Scroll down to About section"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-neutral-700 dark:text-neutral-500 group-hover:text-[#365314] dark:group-hover:text-[#C3E41D] transition-colors duration-300 animate-bounce" />
        </button>
      </main>
    </div>
  );
}
