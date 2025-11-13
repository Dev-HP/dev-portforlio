import { Button } from "@/components/ui/button";
import { Code2, Database, Wrench, Brain } from "lucide-react";

interface SkillsSectionProps {
  onBack: () => void;
}

const skillCategories = [
  {
    title: "Desenvolvimento",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", level: 90 },
      { name: "C / C++ / C#", level: 85 },
      { name: "JavaScript / HTML / CSS", level: 80 },
      { name: "Java", level: 75 },
      { name: "PHP / .NET", level: 70 },
      { name: "API REST / POO", level: 85 }
    ]
  },
  {
    title: "IA & Dados",
    icon: Brain,
    color: "secondary",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Inteligência Artificial", level: 80 },
      { name: "Visão Computacional", level: 75 },
      { name: "Análise de Dados", level: 85 },
      { name: "Python (Matplotlib/Plotly)", level: 85 },
      { name: "Julia", level: 65 }
    ]
  },
  {
    title: "Banco de Dados & Ferramentas",
    icon: Database,
    color: "accent",
    skills: [
      { name: "Oracle", level: 80 },
      { name: "SQL (Relacional)", level: 85 },
      { name: "NoSQL (Não-relacional)", level: 75 },
      { name: "Power BI", level: 80 },
      { name: "Pacote Office", level: 90 }
    ]
  },
  {
    title: "Hardware & Automação",
    icon: Wrench,
    color: "foreground",
    skills: [
      { name: "Arduino / ESP32", level: 95 },
      { name: "Eletrônica Embarcada", level: 90 },
      { name: "AutoDesk Fusion 360", level: 80 },
      { name: "Impressora 3D", level: 85 },
      { name: "Robótica", level: 90 },
      { name: "Automação Industrial", level: 85 }
    ]
  }
];

export default function SkillsSection({ onBack }: SkillsSectionProps) {
  return (
    <div className="min-h-screen p-4 sm:p-8 terminal-scanline">
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
                className="bg-card border border-border rounded p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 text-${category.color}`} />
                  <h3 className={`text-xl font-semibold text-${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-foreground text-sm font-mono">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-background rounded-full overflow-hidden border border-border">
                        <div
                          className={`h-full bg-${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="bg-card border border-border rounded p-6 mb-6">
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

        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="outline"
          className="border-primary/30 hover:border-primary hover:bg-primary/10"
        >
          <span className="text-primary">$ clear</span>
        </Button>
      </div>
    </div>
  );
}
