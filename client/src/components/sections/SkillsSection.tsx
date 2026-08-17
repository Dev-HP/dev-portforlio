import { Button } from "@/components/ui/button";
import { Code2, Database, Wrench, Brain, ArrowUp, Award, Mail } from "lucide-react";
import { useState, useEffect } from "react";

interface SkillsSectionProps {
  onBack: () => void;
}

const skillCategories = [
  {
    title: "Desenvolvimento",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", experience: "Aplicação prática", projects: "ML & Automação", detail: "Scripts, APIs e análise" },
      { name: "C / C++", experience: "Aplicação prática", projects: "Robótica & Embarcados", detail: "Sensores e controle" },
      { name: "JavaScript", experience: "Aplicação prática", projects: "Full Stack Web", detail: "React, Vite e APIs" },
      { name: "Java", experience: "Formação e prática", projects: "Backend & POO", detail: "Projetos acadêmicos" },
      { name: "PHP / SQL", experience: "Aplicação prática", projects: "APIs & Databases", detail: "Modelagem e consultas" }
    ]
  },
  {
    title: "IA & Dados",
    icon: Brain,
    color: "secondary",
    skills: [
      { name: "Machine Learning", experience: "Protótipos", projects: "NeuroScope", detail: "Scikit-learn e modelagem" },
      { name: "Análise de Dados", experience: "Projetos", projects: "Power BI", detail: "Pandas e NumPy" },
      { name: "Visão Computacional", experience: "Protótipos", projects: "OpenCV", detail: "Detecção e tracking" },
      { name: "Data Visualization", experience: "Projetos", projects: "Dashboards", detail: "Plotly e Matplotlib" }
    ]
  },
  {
    title: "Banco de Dados",
    icon: Database,
    color: "accent",
    skills: [
      { name: "Oracle", experience: "Experiência corporativa", projects: "Administração & Queries", detail: "Rotinas de dados" },
      { name: "MySQL", experience: "Projetos", projects: "Design & Otimização", detail: "Modelagem relacional" },
      { name: "MongoDB", experience: "Projetos", projects: "APIs REST", detail: "NoSQL e agregações" }
    ]
  },
  {
    title: "Hardware & Automação",
    icon: Wrench,
    color: "foreground",
    skills: [
      { name: "Arduino / ESP32", experience: "Protótipos", projects: "IoT & Robótica", detail: "Sensores e atuadores" },
      { name: "Robótica", experience: "Competições", projects: "Liderança de equipe", detail: "Controle e testes" },
      { name: "CLP Siemens", experience: "Aplicação industrial", projects: "Automação & HMI", detail: "Lógica de controle" },
      { name: "CAD / Impressão 3D", experience: "Prototipagem", projects: "Modelagem", detail: "Fusion 360" }
    ]
  }
];

export default function SkillsSection({ onBack }: SkillsSectionProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    // Trigger skill bar animations after component mounts
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 300);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 terminal-scanline animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Command Header */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-primary">$</span>
          <span className="text-foreground font-mono">cat skills.txt</span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-card border border-border rounded p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 text-${category.color}`} />
                  <h3 className={`text-xl font-semibold text-${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="p-3 bg-background/50 border border-border rounded hover:border-primary/30 transition-all duration-200"
                      style={{ 
                        opacity: animateSkills ? 1 : 0,
                        transform: animateSkills ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.5s ease-out ${(categoryIndex * 100) + (skillIndex * 50)}ms`
                      }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-foreground font-semibold text-sm">
                          {skill.name}
                        </span>
                        <span className={`text-${category.color} text-xs font-mono`}>
                          {skill.experience}
                        </span>
                      </div>
                      <div className="flex gap-2 text-xs text-muted-foreground">
                        <span>📦 {skill.projects}</span>
                        <span>•</span>
                        <span>{skill.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-card border border-border rounded p-6 mb-6 animate-in slide-in-from-bottom duration-700 delay-500">
          <div className="border-l-2 border-accent pl-4">
            <h3 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
              <Award className="w-5 h-5" />
              $ cat certifications.txt
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded text-sm transition-all duration-200 hover:scale-105 hover:bg-accent/30">
                Git e Versionamento
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded text-sm transition-all duration-200 hover:scale-105 hover:bg-accent/30">
                NLW Connect - Java
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded text-sm transition-all duration-200 hover:scale-105 hover:bg-accent/30">
                Internet das Coisas (IoT)
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded text-sm transition-all duration-200 hover:scale-105 hover:bg-accent/30">
                Redes com VLANs
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded text-sm transition-all duration-200 hover:scale-105 hover:bg-accent/30">
                NLW Pocket - Javascript Full-stack
              </span>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="bg-card border border-border rounded p-6 mb-6 animate-in slide-in-from-bottom duration-700 delay-600">
          <div className="border-l-2 border-primary pl-4 mb-4">
            <h3 className="text-lg font-semibold text-primary mb-2">
              $ cat languages.txt
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Português</span>
                <span className="text-muted-foreground text-sm">Nativo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Inglês</span>
                <span className="text-muted-foreground text-sm">Básico - Intermediário</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Inglês Técnico</span>
                <span className="text-muted-foreground text-sm">Avançado</span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-secondary pl-4">
            <h3 className="text-lg font-semibold text-secondary mb-2">
              $ echo "Áreas de Interesse"
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                Robótica
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                Automação Industrial
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                Machine Learning
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                Inteligência Artificial
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                IoT
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                Visão Computacional
              </span>
              <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                Análise de Dados
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-6">
          <div className="text-center space-y-3">
            <p className="text-accent font-bold text-lg">
              💡 Precisa de alguém com essas habilidades?
            </p>
            <p className="text-foreground text-sm">
              Estou disponível para projetos de automação, IA e desenvolvimento
            </p>
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                  setTimeout(() => {
                    window.dispatchEvent(new KeyboardEvent('keydown', { key: '4' }));
                  }, 400);
                }, 300);
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
            >
              <Mail className="w-4 h-4" />
              Fale Comigo
            </Button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <Button
            onClick={onBack}
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            <span className="text-primary">$ clear</span>
          </Button>
          
          {showScrollTop && (
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="border-accent/30 hover:border-accent hover:bg-accent/10 gap-2 animate-in fade-in duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-accent">Voltar ao topo</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
