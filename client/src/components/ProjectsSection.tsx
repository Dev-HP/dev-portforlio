import { ExternalLink, Github, FolderGit2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectsSectionProps {
  onBack: () => void;
}

const projects = [
  {
    name: "NeuroScope - Dashboard Clínico com IA",
    description: "Plataforma clínica baseada em Inteligência Artificial para apoiar o diagnóstico do Transtorno do Espectro Autista (TEA) em adultos. Utiliza algoritmos de Machine Learning (Random Forest, SVM, Redes Neurais) para análise de padrões clínicos.",
    technologies: ["Python", "Machine Learning", "IA", "Random Forest", "SVM", "Redes Neurais", "Matplotlib", "Plotly", "Microsserviços"],
    github: "https://github.com/Dev-HP/neuroscope",
    demo: null,
    status: "development",
    award: "Publicação: ENFOC 2025 (maio/2025)"
  },
  {
    name: "Sistema de Irrigação Automatizado",
    description: "Sistema inteligente de irrigação utilizando Arduino que mede a umidade do solo e aciona automaticamente bombas quando necessário. Premiado em feiras nacionais e internacionais por sua inovação e sustentabilidade.",
    technologies: ["Arduino", "C++", "Sensores", "Automação", "IoT"],
    github: "https://github.com/Dev-HP/sistema-irrigacao",
    demo: null,
    status: "production",
    award: "🏆 Premiado: FeroCIT 2017 e Ciência Jovem Internacional 2017"
  },
  {
    name: "Line Following Robot",
    description: "Robô autônomo seguidor de linha desenvolvido com Arduino, demonstrando habilidades em programação, eletrônica e integração de componentes complexos.",
    technologies: ["Arduino", "C++", "Robótica", "Sensores", "Eletrônica"],
    github: "https://github.com/Dev-HP/line-following-robot",
    demo: null,
    status: "production",
    award: null
  },
  {
    name: "Motor Nitro V1",
    description: "Projeto de robótica focado em programação e desenho técnico, aplicando conceitos de eletrônica para criar dispositivos autônomos com Arduino.",
    technologies: ["Arduino", "CAD", "Desenho Técnico", "Eletrônica", "C++"],
    github: "https://github.com/Dev-HP/motor-nitro-v1",
    demo: null,
    status: "production",
    award: null
  }
];

export default function ProjectsSection({ onBack }: ProjectsSectionProps) {
  return (
    <div className="min-h-screen p-4 sm:p-8 terminal-scanline">
      <div className="max-w-6xl mx-auto">
        {/* Command Header */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-primary">$</span>
          <span className="text-foreground font-mono">ls projects</span>
        </div>

        {/* Output Header */}
        <div className="mb-4 text-muted-foreground text-sm">
          <p>total {projects.length} projetos encontrados</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded p-6 hover:border-primary/50 transition-all group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 flex-1">
                  <FolderGit2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-primary group-hover:terminal-glow">
                    {project.name}
                  </h3>
                </div>
                <Badge
                  variant={project.status === "production" ? "default" : "secondary"}
                  className={
                    project.status === "production"
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-accent/20 text-accent border-accent/30"
                  }
                >
                  {project.status === "production" ? "concluído" : "em desenvolvimento"}
                </Badge>
              </div>

              {/* Award Badge */}
              {project.award && (
                <div className="mb-3 flex items-start gap-2 bg-accent/10 border border-accent/30 rounded p-2">
                  <Award className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-accent text-xs">{project.award}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-secondary/10 text-secondary border border-secondary/30 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-card border border-border rounded p-6 mb-6">
          <div className="border-l-2 border-secondary pl-4">
            <h3 className="text-lg font-semibold text-secondary mb-2">
              $ cat achievements.txt
            </h3>
            <div className="text-foreground text-sm space-y-2">
              <p>• Representou Rondônia em feiras científicas nacionais e internacionais</p>
              <p>• Desenvolveu soluções sustentáveis premiadas para agricultura inteligente</p>
              <p>• Pesquisador em IA aplicada à saúde (diagnóstico de TEA)</p>
              <p>• Palestrante sobre IA e Machine Learning no IFRO</p>
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
