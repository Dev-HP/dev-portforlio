import { Mail, MapPin, Download } from "lucide-react";
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
              <div className="w-32 h-32 rounded-full border-2 border-primary overflow-hidden terminal-glow">
                <img 
                  src="/profile.jpg" 
                  alt="Hélio Paulo Leite de Lima" 
                  className="w-full h-full object-cover"
                />
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
                  <a href="https://github.com/Dev-HP" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/helio-leite" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
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
