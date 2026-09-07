import PortfolioHero from "@/components/ui/portfolio-hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#C3E41D] selection:text-black font-sans">
      {/* Hero Section from shadcn UI component */}
      <PortfolioHero />

      {/* Main Portfolio Content */}
      <div className="relative z-10">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
