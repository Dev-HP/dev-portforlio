import { useState, useEffect, lazy, Suspense } from "react";
import TerminalPrompt from "@/components/sections/TerminalPrompt";

// Lazy load sections for better performance
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

// Loading component
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="mt-4 text-primary font-mono">Loading...</p>
    </div>
  </div>
);

type Section = "prompt" | "about" | "projects" | "skills" | "contact";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>("prompt");
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  const handleCommandExecute = (command: string) => {
    // Mark intro as seen when user interacts
    if (!hasSeenIntro) {
      setHasSeenIntro(true);
    }

    switch (command) {
      case "whoami":
        setCurrentSection("about");
        break;
      case "ls projects":
        setCurrentSection("projects");
        break;
      case "cat skills.txt":
        setCurrentSection("skills");
        break;
      case "contact --help":
        setCurrentSection("contact");
        break;
      default:
        setCurrentSection("prompt");
    }
  };

  const handleBack = () => {
    setCurrentSection("prompt");
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // ESC to go back
      if (e.key === "Escape" && currentSection !== "prompt") {
        handleBack();
        return;
      }

      // Number keys for navigation (only on prompt screen)
      if (currentSection === "prompt") {
        switch (e.key) {
          case "1":
            setCurrentSection("about");
            break;
          case "2":
            setCurrentSection("projects");
            break;
          case "3":
            setCurrentSection("skills");
            break;
          case "4":
            setCurrentSection("contact");
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-background">
      <div className="section-transition">
        {currentSection === "prompt" && (
          <TerminalPrompt 
            onCommandExecute={handleCommandExecute} 
            skipIntro={hasSeenIntro}
          />
        )}
        <Suspense fallback={<SectionLoader />}>
          {currentSection === "about" && <AboutSection onBack={handleBack} />}
          {currentSection === "projects" && <ProjectsSection onBack={handleBack} />}
          {currentSection === "skills" && <SkillsSection onBack={handleBack} />}
          {currentSection === "contact" && <ContactSection onBack={handleBack} />}
        </Suspense>
      </div>
    </div>
  );
}
