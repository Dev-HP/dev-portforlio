import { Github, Linkedin, Mail, MapPin, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onBack: () => void;
}

export default function AboutSection({ onBack }: AboutSectionProps) {
  return (
    <div className="min-h-screen p-4 sm:p-8 terminal-scanline">
      <div className="max-w-4xl mx-auto">
        {/* Command Header */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-primary">$</span>
          <span className="text-foreground font-mono">whoami</span>
        </div>

        {/* Content Card */}
        <div className="bg-card border border-border rounded p-6 sm:p-8 mb-6">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full border-2 border-primary bg-card flex items-center justify-center terminal-glow">
                <Code2 className="w-16 h-16 text-primary" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-primary mb-2 terminal-glow">
                Hélio Paulo Leite de Lima
              </h1>
              <h2 className="text-xl text-secondary mb-4">
                Engenheiro de Automação & Desenvolvedor de Software
              </h2>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>Porto Velho, Rondônia - Brasil</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="mailto:paulohelio751@gmail.com" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-accent/30 hover:border-accent hover:bg-accent/10 gap-2"
                  asChild
                >
                  <a href="/cv-helio-paulo.pdf" download aria-label="Download CV">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Download CV</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-lg font-semibold text-primary mb-2">$ cat bio.txt</h3>
              <div className="text-foreground space-y-3">
                <p>
                  Estudante de Engenharia de Controle e Automação (IFRO) e Engenharia de Software (UNINTER), 
                  com forte interesse por tecnologia e inovação. Experiência em manutenção eletrônica, 
                  programação e desenvolvimento de projetos que integram hardware e software.
                </p>
                <p>
                  Criei e implementei um sistema de irrigação automatizado premiado em eventos nacionais e 
                  internacionais (FeroCIT 2017 e Ciência Jovem Internacional 2017). Atualmente, desenvolvo 
                  projetos envolvendo Inteligência Artificial, Machine Learning e automação industrial.
                </p>
                <p>
                  Busco oportunidades desafiadoras para aplicar minhas habilidades em eletrônica, automação 
                  e desenvolvimento de sistemas, agregando valor através da inovação tecnológica.
                </p>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="border-l-2 border-secondary pl-4 mt-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">$ cat experience.log</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-primary font-semibold">Analista de T.I @ Planeta Distribuidora LTDA</p>
                  <p className="text-muted-foreground text-sm">01/2025 - 07/2025 | Porto Velho, RO</p>
                  <p className="text-foreground text-sm mt-1">
                    Administração de redes, servidores e sistemas. Desenvolvimento de scripts e automações. 
                    Gerenciamento de banco de dados Oracle. Suporte técnico de Nível 1, 2 e 3.
                  </p>
                </div>
                <div>
                  <p className="text-primary font-semibold">Técnico Eletrônico @ WPS Estacionamento LTDA</p>
                  <p className="text-muted-foreground text-sm">08/2023 - 09/2024 | Porto Velho, RO</p>
                  <p className="text-foreground text-sm mt-1">
                    Gestão de manutenção de máquinas. Administração de banco de dados. Configuração e 
                    manutenção de redes. Montagem de sistemas Linux (CentOS) em servidores.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="border-l-2 border-accent pl-4 mt-6">
              <h3 className="text-lg font-semibold text-accent mb-2">$ cat education.txt</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-primary font-semibold">Bacharelado em Engenharia de Controle e Automação</p>
                  <p className="text-muted-foreground text-sm">IFRO - 6º Período | Conclusão prevista: 12/2027</p>
                </div>
                <div>
                  <p className="text-primary font-semibold">Bacharelado em Engenharia de Software</p>
                  <p className="text-muted-foreground text-sm">UNINTER - 6º Período | Conclusão prevista: 12/2026</p>
                </div>
                <div>
                  <p className="text-primary font-semibold">Técnico em Eletromecânica</p>
                  <p className="text-muted-foreground text-sm">SENAI CETEM</p>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="border-l-2 border-primary pl-4 mt-6">
              <h3 className="text-lg font-semibold text-primary mb-2">$ echo $SPECIALIZATIONS</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                  Robótica
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                  Automação
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                  Desenvolvimento
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                  Análise de Dados
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm">
                  Inteligência Artificial
                </span>
              </div>
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
