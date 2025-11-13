import { useState } from "react";
import TerminalPrompt from "@/components/TerminalPrompt";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

type Section = "prompt" | "about" | "projects" | "skills" | "contact";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>("prompt");

  const handleCommandExecute = (command: string) => {
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

  return (
    <div className="min-h-screen bg-background">
      {currentSection === "prompt" && (
        <TerminalPrompt onCommandExecute={handleCommandExecute} />
      )}
      {currentSection === "about" && <AboutSection onBack={handleBack} />}
      {currentSection === "projects" && <ProjectsSection onBack={handleBack} />}
      {currentSection === "skills" && <SkillsSection onBack={handleBack} />}
      {currentSection === "contact" && <ContactSection onBack={handleBack} />}
    </div>
  );
}
