import { useState, useEffect } from "react";
import TerminalPrompt from "@/components/TerminalPrompt";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

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
        {currentSection === "about" && <AboutSection onBack={handleBack} />}
        {currentSection === "projects" && <ProjectsSection onBack={handleBack} />}
        {currentSection === "skills" && <SkillsSection onBack={handleBack} />}
        {currentSection === "contact" && <ContactSection onBack={handleBack} />}
      </div>
    </div>
  );
}
