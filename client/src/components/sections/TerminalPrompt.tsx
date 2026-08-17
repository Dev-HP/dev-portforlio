import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TerminalHeader from "@/components/layout/TerminalHeader";

interface TerminalPromptProps {
  onCommandExecute: (command: string) => void;
  skipIntro?: boolean;
}

export default function TerminalPrompt({ onCommandExecute, skipIntro = false }: TerminalPromptProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCommands, setShowCommands] = useState(skipIntro);
  
  

  const welcomeLines = [
    "Loading Portfolio OS v1.0...",
    "Initializing system modules... [OK]",
    "Loading user profile... [OK]",
    "Starting interactive shell... [OK]",
    "",
    "═══════════════════════════════════════════════════════════════════",
    "",
    "Bem-vindo ao meu portfólio interativo!",
    "",
    "Sistema Operacional: Portfolio OS v1.0",
    "Desenvolvedor: Hélio Paulo Leite de Lima",
    "Especialização: Desenvolvimento de Software e Automação",
    "Localização: Porto Velho, Rondônia - Brasil",
    "",
    "═══════════════════════════════════════════════════════════════════",
    "",
    "Type 'help' to get started or click on the commands below.",
    ""
  ];

  const commands = [
    { cmd: "whoami", desc: "Descubra quem eu sou", key: "1" },
    { cmd: "ls projects", desc: "Veja meus projetos", key: "2" },
    { cmd: "cat skills.txt", desc: "Minhas habilidades técnicas", key: "3" },
    { cmd: "contact --help", desc: "Entre em contato", key: "4" }
  ];

  useEffect(() => {
    // If skipIntro is true, show all lines immediately
    if (skipIntro && displayedLines.length === 0) {
      setDisplayedLines(welcomeLines);
      setCurrentLine(welcomeLines.length);
      setShowCommands(true);
      return;
    }

    if (currentLine >= welcomeLines.length) {
      // Mostrar comandos mais rápido: 100ms ao invés de 300ms
      setTimeout(() => setShowCommands(true), 100);
      return;
    }

    const line = welcomeLines[currentLine];
    // Velocidades muito mais rápidas: 5ms para loading, 10ms para texto normal
    const typingSpeed = currentLine < 4 ? 5 : 10;

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      // Delay entre linhas: 20ms para loading, 30ms para texto normal
      const timer = setTimeout(() => {
        setDisplayedLines([...displayedLines, line]);
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, currentLine < 4 ? 20 : 30);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, displayedLines, welcomeLines, skipIntro]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 terminal-scanline">
      <div className="w-full max-w-4xl">
        {/* New Header Component */}
        <TerminalHeader />

        {/* Resumo essencial visível antes da interação. */}
        <section
          aria-labelledby="portfolio-summary-title"
          className="mb-6 rounded border border-primary/30 bg-card/80 p-5 shadow-lg"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">Software, automação e dados</p>
          <h2 id="portfolio-summary-title" className="text-xl font-semibold text-foreground sm:text-2xl">
            Desenvolvedor de software com foco em soluções full stack, IA e IoT.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Porto Velho, Rondônia — construo protótipos e produtos que conectam interfaces, APIs, dados e hardware.
          </p>
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Áreas principais">
            {["React", "Python", "IA e dados", "Automação", "IoT"].map((item) => (
              <span key={item} className="rounded border border-primary/30 px-2 py-1 text-xs text-primary">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button type="button" onClick={() => onCommandExecute("ls projects")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Ver projetos
            </Button>
            <Button type="button" variant="outline" onClick={() => onCommandExecute("contact --help")}>
              Entrar em contato
            </Button>
          </div>
        </section>

        {/* Welcome Text */}
        <div className="mb-8 bg-card border border-border rounded p-6 shadow-lg" aria-live="off">
          <pre className="text-foreground whitespace-pre-wrap font-mono text-sm leading-relaxed">
            {displayedLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {currentLine < welcomeLines.length && (
              <div>
                {welcomeLines[currentLine].substring(0, currentChar)}
                <span className="terminal-cursor"></span>
              </div>
            )}
          </pre>
        </div>

        {/* Command Buttons */}
        {showCommands && (
          <div className="space-y-3 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground">Comandos disponíveis:</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commands.map((command, index) => (
                <Button
                  key={command.cmd}
                  onClick={() => onCommandExecute(command.cmd)}
                  variant="outline"
                  className="justify-start h-auto py-4 px-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group relative hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                    animation: 'fade-in 0.5s ease-out forwards'
                  }}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex-shrink-0 w-6 h-6 rounded border border-primary/30 flex items-center justify-center text-primary text-xs font-bold group-hover:border-primary group-hover:bg-primary/20">
                      {command.key}
                    </div>
                    <div className="flex flex-col items-start gap-1 flex-1">
                      <span className="text-primary font-mono text-sm group-hover:terminal-glow">
                        $ {command.cmd}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {command.desc}
                      </span>
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            <div className="mt-6 text-center space-y-2">
              <p className="text-muted-foreground text-sm">
                💡 Dica: Clique nos botões ou pressione as teclas <kbd className="px-2 py-1 bg-primary/20 text-primary border border-primary/30 rounded text-xs">1-4</kbd>
              </p>
              <p className="text-muted-foreground text-xs">
                Pressione <kbd className="px-2 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded text-xs">ESC</kbd> para voltar
              </p>
              <div className="mt-4 p-3 bg-accent/5 border border-accent/20 rounded">
                <p className="text-accent text-sm font-semibold">
                  🚀 Disponível para projetos em Automação, IA e Desenvolvimento
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
