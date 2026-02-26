import React, { useState, useEffect } from "react";

const TerminalHeader: React.FC = () => {
  const [glitch, setGlitch] = useState(false);
  const [typed, setTyped] = useState("");
  const subtitle = "Desenvolvedor & Criador";

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

  // Typing effect for subtitle
  useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      setTyped((prev) => prev + subtitle[idx]);
      idx += 1;
      if (idx >= subtitle.length) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black py-8 px-4 sm:py-10 sm:px-8 font-mono select-none">
      <style>{`
        .text-glow-custom {
          text-shadow: 0 0 20px rgba(0, 255, 128, 0.36);
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
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .cursor {
          display: inline-block;
          width: 10px;
          background: transparent;
          margin-left: 6px;
          box-shadow: 0 0 6px rgba(0,255,128,0.7);
          animation: blink 1s steps(2, start) infinite;
        }
      `}</style>

      <div className="relative flex flex-col items-center w-full max-w-3xl animate-flicker">
        {/* Título Principal: helio.dev (lowercase) */}
        <div className="relative mb-3">
          <h1
            className={`lowercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter transition-all duration-75 text-glow-custom ${
              glitch ? "translate-x-[1px] text-cyan-400" : "text-[#00FF80]"
            }`}
            style={{ lineHeight: 1 }}
          >
            helio<span className="text-[#a6ffdb]">.</span>dev
          </h1>
        </div>

        {/* Separador com Pontos Centralizados */}
        <div className="flex items-center w-full max-w-md justify-center gap-4 my-3">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#006633] to-[#00FF80]/40"></div>
          <div className="flex gap-2 items-center">
            <span className="w-1 h-1 bg-[#006633] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[#00FF80] rounded-full dot-glow-custom"></span>
            <span className="w-1 h-1 bg-[#006633] rounded-full"></span>
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00FF80]/40 via-[#006633] to-transparent"></div>
        </div>

        {/* Tagline Principal com typing */}
        <div className="mt-2 text-center">
          <h2 className="text-base sm:text-lg md:text-xl text-[#00FF80] font-bold tracking-[0.45em] uppercase opacity-95">
            <span>{typed}</span>
            <span className="cursor" aria-hidden />
          </h2>
        </div>

        {/* Sub-tagline: Especialidades */}
        <div className="mt-3">
          <p className="text-[9px] sm:text-[10px] md:text-xs text-[#006633] tracking-[0.25em] font-bold uppercase opacity-80">
            Sistemas Inteligentes <span className="mx-2">•</span> Automação <span className="mx-2">•</span> Web 3.0
          </p>
        </div>

      </div>
    </div>
  );
};

export default TerminalHeader;
