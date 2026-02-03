import { Mail, MapPin, Download, Award, Briefcase, Code2, Cpu, Wrench, Presentation, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Helper function to navigate to contact
const navigateToContact = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    // Trigger ESC to go back to main menu
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    // Then trigger contact command
    setTimeout(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: '4' }));
    }, 400);
  }, 300);
};

interface AboutSectionProps {
  onBack: () => void;
}

export default function AboutSection({ onBack }: AboutSectionProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 terminal-scanline animate-in fade-in duration-500">
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
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-48 h-48 rounded-full border-4 border-primary overflow-hidden terminal-glow transition-transform duration-300 hover:scale-105">
                <img 
                  src="/dev-portforlio/profile.jpg" 
                  alt="Hélio Paulo Leite de Lima" 
                  className="w-full h-full object-cover object-[center_15%]"
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
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
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
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
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
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200 hover:scale-110"
                  asChild
                >
                  <a href="mailto:paulohelio751@gmail.com" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-accent/30 hover:border-accent hover:bg-accent/10 gap-2 transition-all duration-200 hover:scale-105"
                  asChild
                >
                  <a href="/dev-portforlio/cv-helio-paulo.pdf" download aria-label="Download CV">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Download CV</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4 animate-in slide-in-from-left duration-700">
              <h3 className="text-lg font-semibold text-primary mb-2">$ cat bio.txt</h3>
              <div className="text-foreground space-y-3">
                <p className="text-lg text-accent font-semibold">
                  Transformo ideias em soluções automatizadas premiadas internacionalmente.
                </p>
                <p>
                  Aos 17 anos, criei um sistema de irrigação inteligente que conquistou prêmios em feiras 
                  nacionais e internacionais (FeroCIT 2017 e Ciência Jovem Internacional 2017). Hoje, combino 
                  hardware, software e IA para resolver problemas reais — desde equipamentos médicos que salvam 
                  vidas até sistemas de automação industrial que otimizam recursos.
                </p>
                <p>
                  Atuo na intersecção estratégica entre Engenharia de Controle e Automação (IFRO) e Engenharia 
                  de Software (UNINTER), desenvolvendo projetos que integram Machine Learning, robótica e IoT. 
                  Minha abordagem: identificar problemas complexos e criar soluções elegantes que geram impacto 
                  mensurável.
                </p>
                <p className="text-accent">
                  🚀 Disponível para oportunidades em Automação, IA e Desenvolvimento Full Stack
                </p>
              </div>
            </div>

            {/* Technical Skills - Moved here after Bio */}
            <div className="border-l-2 border-primary pl-4 mt-6 animate-in slide-in-from-left duration-700 delay-100">
              <h3 className="text-lg font-semibold text-accent mb-2 flex items-center gap-2">
                <Award className="w-5 h-5" />
                $ cat awards.txt
              </h3>
              <div className="space-y-2">
                <div className="transition-all duration-200 hover:translate-x-1">
                  <p className="text-primary font-semibold">🏆 FeroCIT 2017 - Feira de Ciências e Tecnologia</p>
                  <p className="text-foreground text-sm mt-1">
                    Premiado com sistema de irrigação automatizado inteligente
                  </p>
                </div>
                <div className="transition-all duration-200 hover:translate-x-1">
                  <p className="text-primary font-semibold">🌍 Ciência Jovem Internacional 2017</p>
                  <p className="text-foreground text-sm mt-1">
                    Reconhecimento internacional por inovação em automação sustentável
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills - Consolidated */}
            <div className="border-l-2 border-primary pl-4 mt-6">
              <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                $ cat skills.txt
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-secondary font-semibold mb-2">💻 Linguagens & Frameworks</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">• <span className="text-primary">Python</span> - 5+ anos, 15+ projetos, Machine Learning & Automação</p>
                    <p className="text-foreground">• <span className="text-primary">C/C++</span> - 4+ anos, Robótica & Sistemas Embarcados</p>
                    <p className="text-foreground">• <span className="text-primary">JavaScript</span> - 3+ anos, Full Stack Web Development</p>
                    <p className="text-foreground">• <span className="text-primary">Java</span> - Certificado NLW Connect, Projetos Acadêmicos</p>
                  </div>
                </div>
                <div>
                  <p className="text-secondary font-semibold mb-2">🗄️ Banco de Dados</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">• <span className="text-primary">Oracle</span> - Administração em ambiente corporativo</p>
                    <p className="text-foreground">• <span className="text-primary">MySQL/MongoDB</span> - Projetos pessoais e acadêmicos</p>
                  </div>
                </div>
                <div>
                  <p className="text-secondary font-semibold mb-2">🤖 IA & Machine Learning</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">• <span className="text-primary">Scikit-learn, Pandas, NumPy</span> - Análise de dados e ML</p>
                    <p className="text-foreground">• <span className="text-primary">OpenCV</span> - Visão computacional aplicada</p>
                    <p className="text-foreground">• <span className="text-primary">Power BI, Plotly</span> - Visualização de dados</p>
                  </div>
                </div>
                <div>
                  <p className="text-secondary font-semibold mb-2">⚙️ Hardware & Automação</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">• <span className="text-primary">Arduino/ESP32</span> - 6+ anos, 20+ projetos IoT</p>
                    <p className="text-foreground">• <span className="text-primary">CLP Siemens S7</span> - Automação industrial</p>
                    <p className="text-foreground">• <span className="text-primary">Robótica</span> - Líder OBR 2019 e 2023</p>
                  </div>
                </div>
                <div>
                  <p className="text-secondary font-semibold mb-2">🔧 Infraestrutura & DevOps</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-foreground">• <span className="text-primary">Linux/Windows Server</span> - Administração de sistemas</p>
                    <p className="text-foreground">• <span className="text-primary">Docker, Git</span> - Certificado em versionamento</p>
                    <p className="text-foreground">• <span className="text-primary">Scrum, ITIL</span> - Metodologias ágeis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="border-l-2 border-secondary pl-4 mt-6">
              <h3 className="text-lg font-semibold text-secondary mb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                $ cat experience.log
              </h3>
              <div className="space-y-3">
                <div className="transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 p-2 rounded">
                  <p className="text-primary font-semibold flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Analista de T.I @ Planeta Distribuidora LTDA
                  </p>
                  <p className="text-muted-foreground text-sm">01/2025 - 07/2025 | Porto Velho, RO</p>
                  <p className="text-foreground text-sm mt-1">
                    Administração de redes, servidores e sistemas. Desenvolvimento de scripts e automações (RPA/Python). 
                    Gerenciamento de banco de dados Oracle. Suporte técnico de Nível 1, 2 e 3 (ITIL).
                  </p>
                </div>
                <div className="transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 p-2 rounded">
                  <p className="text-primary font-semibold flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Técnico em Eletrônica @ Del Engenharia Clínica
                  </p>
                  <p className="text-muted-foreground text-sm">09/2024 - 01/2025 | Porto Velho, RO</p>
                  <p className="text-foreground text-sm mt-1">
                    Manutenção preventiva e corretiva em equipamentos médicos hospitalares. Testes de segurança 
                    elétrica e calibrações precisas. Otimização de processos de manutenção.
                  </p>
                </div>
                <div className="transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 p-2 rounded">
                  <p className="text-primary font-semibold flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    Técnico Eletrônico @ WPS Estacionamento LTDA
                  </p>
                  <p className="text-muted-foreground text-sm">08/2023 - 09/2024 | Porto Velho, RO</p>
                  <p className="text-foreground text-sm mt-1">
                    Gestão de manutenção de máquinas (ATMs, Terminais de Cancela). Administração de banco de dados. 
                    Configuração e manutenção de redes. Montagem de sistemas Linux (CentOS) em servidores.
                  </p>
                </div>
                <div className="transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 p-2 rounded">
                  <p className="text-primary font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Líder de Equipe @ OBR - Olimpíada Brasileira de Robótica
                  </p>
                  <p className="text-muted-foreground text-sm">2019 e 2023</p>
                  <p className="text-foreground text-sm mt-1">
                    Liderança de equipe no desenvolvimento de carrinho de resgate autônomo com Arduino. 
                    Programação, montagem e testes de robô seguidor de linha com sensores e atuadores.
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

            {/* Talks & Workshops */}
            <div className="border-l-2 border-secondary pl-4 mt-6">
              <h3 className="text-lg font-semibold text-secondary mb-2 flex items-center gap-2">
                <Presentation className="w-5 h-5" />
                $ cat talks.log
              </h3>
              <div className="space-y-3">
                <div className="transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 p-2 rounded">
                  <p className="text-primary font-semibold">🎤 Palestra: IA e Machine Learning na Engenharia</p>
                  <p className="text-muted-foreground text-sm">1ª Semana das Graduações - IFRO</p>
                  <p className="text-foreground text-sm mt-1">
                    Apresentação sobre conceitos introdutórios, aplicações práticas e novas tendências de 
                    Inteligência Artificial e Machine Learning na Engenharia de Controle e Automação.
                  </p>
                </div>
                <div className="transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 p-2 rounded">
                  <p className="text-primary font-semibold">🎤 Palestra sobre Redes Neurais</p>
                  <p className="text-muted-foreground text-sm">3ª Semana das Graduações - IFRO</p>
                  <p className="text-foreground text-sm mt-1">
                    Apresentação sobre conceitos, arquiteturas e aplicações práticas de Redes Neurais 
                    na Engenharia de Controle e Automação.
                  </p>
                </div>
                <div className="transition-all duration-200 hover:translate-x-1 hover:bg-primary/5 p-2 rounded">
                  <p className="text-primary font-semibold">📚 Mini Curso: Banco de Dados e SQL</p>
                  <p className="text-muted-foreground text-sm">3ª Semana das Graduações - IFRO</p>
                  <p className="text-foreground text-sm mt-1">
                    Ministrei mini curso prático sobre fundamentos de Banco de Dados e SQL aplicados 
                    à Engenharia de Controle e Automação.
                  </p>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="border-l-2 border-primary pl-4 mt-6">
              <h3 className="text-lg font-semibold text-primary mb-2">$ echo $SPECIALIZATIONS</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm transition-all duration-200 hover:scale-110 hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                  Robótica
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm transition-all duration-200 hover:scale-110 hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                  Automação
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm transition-all duration-200 hover:scale-110 hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                  Desenvolvimento Full Stack
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm transition-all duration-200 hover:scale-110 hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                  Análise de Dados
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm transition-all duration-200 hover:scale-110 hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-sm transition-all duration-200 hover:scale-110 hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 cursor-default">
                  Inteligência Artificial
                </span>
              </div>
            </div>

            {/* Stats Section */}
            <div className="border-l-2 border-secondary pl-4 mt-6">
              <h3 className="text-lg font-semibold text-secondary mb-4">$ cat stats.json</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-secondary/10 border border-secondary/30 rounded text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                  <p className="text-3xl font-bold text-secondary">20+</p>
                  <p className="text-xs text-muted-foreground mt-1">Projetos Concluídos</p>
                </div>
                <div className="p-4 bg-accent/10 border border-accent/30 rounded text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <p className="text-3xl font-bold text-accent">6+</p>
                  <p className="text-xs text-muted-foreground mt-1">Anos de Experiência</p>
                </div>
                <div className="p-4 bg-primary/10 border border-primary/30 rounded text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <p className="text-3xl font-bold text-primary">2</p>
                  <p className="text-xs text-muted-foreground mt-1">Prêmios Internacionais</p>
                </div>
                <div className="p-4 bg-secondary/10 border border-secondary/30 rounded text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                  <p className="text-3xl font-bold text-secondary">10+</p>
                  <p className="text-xs text-muted-foreground mt-1">Tecnologias</p>
                </div>
                <div className="p-4 bg-accent/10 border border-accent/30 rounded text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <p className="text-3xl font-bold text-accent">3</p>
                  <p className="text-xs text-muted-foreground mt-1">Palestras Ministradas</p>
                </div>
                <div className="p-4 bg-primary/10 border border-primary/30 rounded text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <p className="text-3xl font-bold text-primary">2x</p>
                  <p className="text-xs text-muted-foreground mt-1">Líder OBR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-6 animate-in fade-in duration-500">
          <div className="text-center space-y-3">
            <p className="text-accent font-bold text-lg">
              💼 Gostou do que viu?
            </p>
            <p className="text-foreground">
              Vamos conversar sobre como posso contribuir com seu projeto ou equipe
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button
                onClick={navigateToContact}
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
              >
                <Mail className="w-4 h-4" />
                Entre em Contato
              </Button>
              <Button
                variant="outline"
                className="border-accent/30 hover:border-accent hover:bg-accent/10 gap-2"
                asChild
              >
                <a href="/dev-portforlio/cv-helio-paulo.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
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

        {/* Scroll Indicator - Only show at top */}
        {!showScrollTop && (
          <div className="mt-6 flex justify-center animate-bounce">
            <div className="text-muted-foreground text-sm flex flex-col items-center gap-1">
              <span>Role para ver mais</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
