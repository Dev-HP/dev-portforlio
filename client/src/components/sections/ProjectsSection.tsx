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
    impact: "Protótipo de apoio à análise clínica; métricas de desempenho ainda precisam de validação independente.",
    technologies: ["Python", "Machine Learning", "IA", "Random Forest", "SVM", "Redes Neurais", "Matplotlib", "Plotly", "Microsserviços"],
    github: null,
    demo: null,
    status: "development",
    award: "Publicação: ENFOC 2025 (maio/2025)",
    team: null,
    advisor: null,
    links: []
  },
  {
    name: "💧 Sistema Automatizado de Irrigação Sustentável",
    description: "Sistema inteligente de irrigação desenvolvido no Colégio Tiradentes da Polícia Militar de Jacy-Paraná (2016-2017). Iniciado por Ryan Balestieri, aperfeiçoado e apresentado individualmente na FeroCIT 2017, conquistando vaga para representar Rondônia na Feira Internacional de Pernambuco. Na etapa internacional, Cleiton Vicentini integrou a equipe. O sistema mede umidade do solo via sensores conectados ao Arduino (programado em C), acionando automaticamente bombas/válvulas quando necessário. Opera com energia elétrica ou bateria, ideal para áreas rurais.",
    impact: "Protótipo de irrigação automatizada apresentado em feira científica; economia e produtividade devem ser medidas em teste controlado.",
    technologies: ["Arduino", "C/C++", "Sensores de Umidade", "Automação", "IoT", "Energia Híbrida"],
    github: null,
    demo: null,
    status: "production",
    award: "🏆 FeroCIT 2017 (Representante RO) • 🌍 Feira Internacional PE 2017",
    team: "Hélio Paulo (líder), Ryan Balestieri (protótipo inicial), Cleiton Vicentini (etapa internacional)",
    advisor: "Ten. PM Erika Josiani Ossucci",
    links: [
      {
        label: "📰 Gov. RO",
        url: "https://rondonia.ro.gov.br/estudantes-do-colegio-tiradentes-de-jacy-parana-participarao-da-feira-internacional-de-pernambuco/"
      },
      {
        label: "📰 PM RO",
        url: "https://www.pm.ro.gov.br/aluno-do-colegio-tiradentes-de-jacy-parana-expoe-em-feira-internacional-modelo-de-irrigacao-que-nao-desperdica-agua/"
      }
    ]
  },
  {
    name: "Line Following Robot",
    description: "Robô autônomo seguidor de linha desenvolvido com Arduino para competições de robótica. Demonstra habilidades em programação embarcada, eletrônica e integração de sensores.",
    impact: "Protótipo de robótica para competições; desempenho depende da pista, calibração e configuração do hardware.",
    technologies: ["Arduino", "C++", "Robótica", "Sensores", "Eletrônica"],
    github: null,
    demo: null,
    status: "production",
    award: null,
    team: null,
    advisor: null,
    links: []
  },
  {
    name: "Motor Nitro V1",
    description: "Projeto de robótica focado em programação e desenho técnico, aplicando conceitos de eletrônica para criar dispositivos autônomos com Arduino. Inclui modelagem 3D e prototipagem.",
    impact: "Protótipo acadêmico que integra CAD, eletrônica e software; documentação pública individual ainda não está disponível.",
    technologies: ["Arduino", "CAD", "Desenho Técnico", "Eletrônica", "C++"],
    github: null,
    demo: null,
    status: "production",
    award: null,
    team: null,
    advisor: null,
    links: []
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
          {[
            [String(projects.length), "Cases selecionados"],
            ["IA", "Área de foco"],
            ["IoT", "Área de foco"],
            ["Web", "Área de foco"]
          ].map(([value, label], index) => (
            <div key={label + index} className="bg-card border border-primary/30 rounded p-4 text-center">
              <p className="text-3xl font-bold text-primary">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
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

              {/* Team & Advisor */}
              {(project.team || project.advisor) && (
                <div className="mb-3 space-y-1">
                  {project.team && (
                    <p className="text-foreground/70 text-xs">
                      <span className="text-primary font-semibold">👥 Equipe:</span> {project.team}
                    </p>
                  )}
                  {project.advisor && (
                    <p className="text-foreground/70 text-xs">
                      <span className="text-secondary font-semibold">🎓 Orientação:</span> {project.advisor}
                    </p>
                  )}
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
              <div className="flex flex-wrap gap-2">
                {project.github ? (
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
                ) : (
                  <span className="flex flex-1 items-center justify-center rounded border border-border px-3 py-2 text-xs text-muted-foreground">
                    Repositório não publicado
                  </span>
                )}
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
                {project.links && project.links.length > 0 && project.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="outline"
                    size="sm"
                    className="border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 flex-1 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {link.label}
                    </a>
                  </Button>
                ))}
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
