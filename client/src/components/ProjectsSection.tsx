import { ExternalLink, Github, FolderGit2, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectsSectionProps {
  onBack: () => void;
}

const projects = [
  {
    name: "NeuroScope - Dashboard Clínico com IA",
    description: "Plataforma clínica baseada em Inteligência Artificial para apoiar o diagnóstico do Transtorno do Espectro Autista (TEA) em adultos. Utiliza algoritmos de Machine Learning (Random Forest, SVM, Redes Neurais) para análise de padrões clínicos.",
    impact: "Precisão de 85% no diagnóstico de TEA • Reduz tempo de análise em 60%",
    technologies: ["Python", "Machine Learning", "IA", "Random Forest", "SVM", "Redes Neurais", "Matplotlib", "Plotly", "Microsserviços"],
    github: "https://github.com/Dev-HP/neuroscope",
    demo: null,
    status: "development",
    award: "Publicação: ENFOC 2025 (maio/2025)"
  },
  {
    name: "Sistema de Irrigação Automatizado",
    description: "Sistema inteligente de irrigação utilizando Arduino que mede a umidade do solo e aciona automaticamente bombas quando necessário. Solução sustentável que otimiza o uso de recursos hídricos.",
    impact: "Reduz consumo de água em 40% • Aumenta produtividade agrícola em 25%",
    technologies: ["Arduino", "C++", "Sensores", "Automação", "IoT"],
    github: "https://github.com/Dev-HP/sistema-irrigacao",
    demo: null,
    status: "production",
    award: "🏆 Premiado: FeroCIT 2017 e Ciência Jovem Internacional 2017"
  },
  {
    name: "Line Following Robot",
    description: "Robô autônomo seguidor de linha desenvolvido com Arduino para competições de robótica. Demonstra habilidades em programação embarcada, eletrônica e integração de sensores.",
    impact: "Líder de equipe OBR 2019 e 2023 • Velocidade de 2m/s com precisão de 95%",
    technologies: ["Arduino", "C++", "Robótica", "Sensores", "Eletrônica"],
    github: "https://github.com/Dev-HP/line-following-robot",
    demo: null,
    status: "production",
    award: null
  },
  {
    name: "Motor Nitro V1",
    description: "Projeto de robótica focado em programação e desenho técnico, aplicando conceitos de eletrônica para criar dispositivos autônomos com Arduino. Inclui modelagem 3D e prototipagem.",
    impact: "Projeto acadêmico premiado • Integração completa CAD + Eletrônica + Software",
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-primary/30 rounded p-4 text-center hover:border-primary transition-all duration-300 hover:scale-105">
            <p className="text-3xl font-bold text-primary">20+</p>
            <p className="text-sm text-muted-foreground">Projetos Concluídos</p>
          </div>
          <div className="bg-card border border-secondary/30 rounded p-4 text-center hover:border-secondary transition-all duration-300 hover:scale-105">
            <p className="text-3xl font-bold text-secondary">6+</p>
            <p className="text-sm text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="bg-card border border-accent/30 rounded p-4 text-center hover:border-accent transition-all duration-300 hover:scale-105">
            <p className="text-3xl font-bold text-accent">2</p>
            <p className="text-sm text-muted-foreground">Prêmios Internacionais</p>
          </div>
          <div className="bg-card border border-primary/30 rounded p-4 text-center hover:border-primary transition-all duration-300 hover:scale-105">
            <p className="text-3xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Tecnologias Dominadas</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded p-6 hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
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
              <p className="text-foreground text-sm mb-3">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mb-4 p-3 bg-secondary/10 border border-secondary/30 rounded">
                <p className="text-secondary text-xs font-semibold mb-1">📊 IMPACTO</p>
                <p className="text-foreground text-xs">{project.impact}</p>
              </div>

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
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 flex-1 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
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
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 flex-1 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
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

        {/* Testimonials Section */}
        <div className="bg-card border border-border rounded p-6 mb-6">
          <div className="border-l-2 border-accent pl-4">
            <h3 className="text-lg font-semibold text-accent mb-4">
              $ cat testimonials.txt
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-accent/5 border border-accent/20 rounded hover:border-accent/40 transition-all duration-300">
                <p className="text-foreground text-sm italic mb-2">
                  "Hélio demonstrou excelente capacidade técnica e liderança ao coordenar a equipe de robótica. 
                  Seu projeto de irrigação automatizada foi destaque nacional."
                </p>
                <p className="text-accent text-xs font-semibold">— Professor Orientador, IFRO</p>
              </div>
              <div className="p-4 bg-accent/5 border border-accent/20 rounded hover:border-accent/40 transition-all duration-300">
                <p className="text-foreground text-sm italic mb-2">
                  "Profissional dedicado e proativo. Implementou soluções de automação que otimizaram 
                  significativamente nossos processos de TI."
                </p>
                <p className="text-accent text-xs font-semibold">— Gestor de TI, Planeta Distribuidora</p>
              </div>
              <div className="p-4 bg-accent/5 border border-accent/20 rounded hover:border-accent/40 transition-all duration-300">
                <p className="text-foreground text-sm italic mb-2">
                  "Conhecimento técnico sólido em eletrônica e automação. Sempre buscando aprender e 
                  aplicar novas tecnologias nos projetos."
                </p>
                <p className="text-accent text-xs font-semibold">— Supervisor Técnico, Del Engenharia Clínica</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-6">
          <div className="text-center space-y-3">
            <p className="text-accent font-bold text-lg">
              🚀 Quer ver mais projetos ou discutir uma colaboração?
            </p>
            <p className="text-foreground text-sm">
              Tenho experiência em automação, IA e desenvolvimento full stack
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
              Vamos Conversar
            </Button>
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
