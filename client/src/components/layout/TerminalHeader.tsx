import React, { useState, useEffect } from "react";

const TerminalHeader: React.FC = () => {
  const [glitch, setGlitch] = useState(false);

  // Efeito subtil de cintilação para dar vida ao monitor "CRT"
  useEffect(() => {
    const triggerGlitch = () => {
      if (Math.random() > 0.9) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 50);
      }
    };
    const interval = setInterval(triggerGlitch, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black p-12 font-mono select-none">
      <style>{`
        .text-glow-custom {
          text-shadow: 0 0 20px rgba(0, 255, 128, 0.4);
        }
        .dot-glow-custom {
          box-shadow: 0 0 10px rgba(0, 255, 128, 0.8);
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-flicker {
          animation: pulse-opacity 4s infinite ease-in-out;
        }
      `}</style>

      <div className="relative flex flex-col items-center w-full max-w-2xl animate-flicker">
        {/* Título Principal: HELIO.DEV */}
        <div className="relative mb-4">
          <h1
            className={`text-6xl md:text-8xl font-black tracking-tighter transition-all duration-75 text-glow-custom ${
              glitch ? "translate-x-[1px] text-cyan-400" : "text-[#00FF80]"
            }`}
          >
            HELIO<span className="text-[#a6ffdb]">.</span>DEV
          </h1>
        </div>

        {/* Separador com Pontos Centralizados */}
        <div className="flex items-center w-full max-w-md justify-center gap-4 my-4">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#006633] to-[#00FF80]/40"></div>
          <div className="flex gap-2 items-center">
            <span className="w-1 h-1 bg-[#006633] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[#00FF80] rounded-full dot-glow-custom"></span>
            <span className="w-1 h-1 bg-[#006633] rounded-full"></span>
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00FF80]/40 via-[#006633] to-transparent"></div>
        </div>

        {/* Tagline Principal: DESENVOLVEDOR & CRIADOR */}
        <div className="mt-2 text-center">
          <h2 className="text-xl md:text-2xl text-[#00FF80] font-bold tracking-[0.5em] uppercase opacity-90">
            Desenvolvedor <span className="text-[#00994d]">&</span> Criador
          </h2>
        </div>

        {/* Sub-tagline: Especialidades */}
        <div className="mt-4">
          <p className="text-[10px] md:text-xs text-[#006633] tracking-[0.25em] font-bold uppercase opacity-80">
            Sistemas Inteligentes <span className="mx-2">•</span> Automação <span className="mx-2">•</span> Web 3.0
          </p>
        </div>

      </div>
    </div>
  );
};

export default TerminalHeader;
