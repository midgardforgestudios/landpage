import { useState, useEffect, useMemo } from "react";
import midgardTextoImg from "../../assets/logos/midgard-logo.svg";
import cabecaDragonImg from "../../assets/img/cabeca-dragon.svg";
import pescocoDragonImg from "../../assets/img/pescoco-dragon.svg";
import caldaDragonImg from "../../assets/img/calda-dragon.svg";

const forgeSparks = Array.from({ length: 40 }, () => {
  const size = Math.random() * 5 + 2;
  return {
    size,
    left: Math.random() * 100,
    duration: Math.random() * 3 + 3,
    delay: Math.random() * 5,
    isGold: Math.random() > 0.6,
    opacity: Math.random() * 0.5 + 0.5,
  };
});

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PERFORMANCE: Impede que as 40 faíscas sejam recriadas a cada milissegundo de scroll
  const memoizedSparks = useMemo(() => {
    return forgeSparks.map((s, i) => (
      <div
        key={i}
        className="absolute bottom-[-20px] rounded-full mix-blend-screen pointer-events-none transform-gpu"
        style={{
          left: `${s.left}%`,
          width: `${s.size}px`,
          height: `${s.size}px`,
          backgroundColor: s.isGold
            ? "var(--color-gold-light)"
            : "var(--color-fire)",
          boxShadow: `0 0 ${s.size * 2}px ${s.isGold ? "var(--color-gold)" : "var(--color-ember)"}, 0 0 ${s.size * 4}px var(--color-fire)`,
          animation: `float-up ${s.duration}s infinite linear`,
          animationDelay: `${s.delay}s`,
          opacity: s.opacity,
          willChange: "transform, opacity",
        }}
      />
    ));
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden bg-transparent">
      {/* 1. Vinheta Global de Escurecimento */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)] z-40 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/95 via-black/50 to-transparent z-40 pointer-events-none transform-gpu"></div>

      {/* 2. FOGO E NÚCLEO DA FORJA */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex justify-center transform-gpu">
        <div className="absolute bottom-0 w-full md:w-[90vw] h-[60vh] bg-[radial-gradient(ellipse_at_bottom,_rgba(255,69,0,0.15)_0%,_transparent_70%)] blur-[50px] animate-[flicker_4s_infinite] will-change-[opacity]"></div>
        <div className="absolute bottom-[-100px] w-[70vw] h-[40vh] bg-[radial-gradient(ellipse_at_bottom,_var(--color-fire)_0%,_transparent_60%)] blur-[90px] opacity-30"></div>
        {memoizedSparks}
      </div>

      {/* =========================================
          3. O EFEITO OUROBOROS (Imersão Profunda)
          ========================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden perspective-1000">
        {/* 🐉 PESCOÇO */}
        <div
          className="absolute top-[-4%] right-[-18%] md:right-[-10%] w-[75vw] md:w-[40vw] max-w-[700px] z-10 opacity-75 animate-[forge-reveal_1.8s_ease-out_forwards] hidden sm:block transform-gpu"
          style={{
            transform: `translate3d(0, ${scrollY * -0.04}px, 0) rotate(18deg)`,
            transformOrigin: "top right",
            willChange: "transform",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 50%, transparent 90%)",
            maskImage:
              "radial-gradient(circle at center, black 50%, transparent 90%)",
          }}
        >
          <img
            src={pescocoDragonImg}
            alt="Pescoço do Dragão"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="w-full h-auto object-contain animate-dragon delay-300 transform-gpu"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        </div>

        {/* 🐉 CAUDA */}
        <div
          className="absolute bottom-[-6%] right-[-6%] md:right-[-2%] w-[70vw] md:w-[38vw] max-w-[600px] z-20 opacity-90 animate-[forge-reveal_2s_ease-out_forwards] hidden sm:block transform-gpu"
          style={{
            transform: `translate3d(0, ${scrollY * -0.09}px, 0) rotate(65deg)`,
            transformOrigin: "bottom right",
            willChange: "transform",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 60%, transparent 100%)",
            maskImage:
              "radial-gradient(circle at center, black 60%, transparent 100%)",
          }}
        >
          <img
            src={caldaDragonImg}
            alt="Cauda do Dragão"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="w-full h-auto object-contain animate-dragon delay-700 transform-gpu"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        </div>

        {/* 🐉 CABEÇA */}
        <div
          className="absolute bottom-[2%] left-[-15%] sm:left-[-10%] md:left-[-5%] w-[85vw] sm:w-[60vw] md:w-[50vw] max-w-[780px] z-30 opacity-100 animate-[forge-reveal_1.5s_ease-out_forwards] transform-gpu"
          style={{
            transform: `translate3d(0, ${scrollY * -0.12}px, 0)`,
            willChange: "transform",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            maskImage:
              "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
          }}
        >
          <img
            src={cabecaDragonImg}
            alt="Cabeça do Dragão"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="w-full h-auto object-contain animate-dragon transform-gpu"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>

      {/* =========================================
          4. BLOCO CENTRAL 
          ========================================= */}
      <div
        className="relative z-50 flex flex-col items-center justify-center text-center w-full max-w-4xl px-4 sm:px-6 gap-6 md:gap-10 mt-2 pb-20 md:pb-32 transform-gpu"
        style={{
          transform: `translate3d(0, ${scrollY * -0.03}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[650px] animate-[forge-reveal_1s_ease-out_forwards] transform-gpu">
          <img
            src={midgardTextoImg}
            alt="Midgard Forge Studios"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
            className="w-full h-auto drop-shadow-[0_10px_25px_rgba(255,69,0,0.3)] hover:scale-105 transition-transform duration-700 transform-gpu"
          />
        </div>

        <div className="space-y-4 animate-[forge-reveal_1.5s_ease-out_forwards] px-4 transform-gpu">
          {/* Nova frase profissional do estúdio */}
          <p className="text-zinc-300 text-xs sm:text-sm md:text-lg max-w-2xl leading-relaxed font-sans font-light tracking-wide mx-auto text-balance">
            Somos um estúdio independente focado no desenvolvimento de jogos e
            produtos&nbsp;digitais.
          </p>
          {/* As três palavras-chave ajustadas para a identidade de um estúdio */}
          <p className="text-white font-medieval tracking-[0.25em] text-xs sm:text-sm md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,1)] uppercase">
            Criatividade <span className="text-zinc-500 mx-2 sm:mx-3">|</span>{" "}
            Inovação <span className="text-zinc-500 mx-2 sm:mx-3">|</span>{" "}
            Tecnologia
          </p>
        </div>

        <div className="animate-[forge-reveal_2s_ease-out_forwards] transform-gpu">
          <a
            href="#contato"
            draggable="false"
            // 👇 AQUI: Trocado `inline-flex` por `hidden lg:inline-flex` 👇
            className="hidden lg:inline-flex justify-center items-center px-8 py-3.5 md:px-14 md:py-5 bg-black/40 border border-fire text-fire hover:bg-fire hover:text-white transition-all duration-500 font-medieval tracking-[0.2em] text-xs md:text-sm shadow-[0_0_20px_rgba(255,69,0,0.2)] hover:shadow-[0_0_40px_rgba(255,69,0,0.6)] uppercase rounded-sm backdrop-blur-md transform-gpu"
          >
            Entrar na Forja
          </a>
        </div>
      </div>

      {/* =========================================
          5. BARRA INFERIOR DE STATUS
          ========================================= */}
      <div className="absolute bottom-0 left-0 w-full border-t border-zinc-900/50 bg-black/60 backdrop-blur-xl z-50 hidden md:block transform-gpu">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex justify-between items-center text-center">
          <div className="flex-1 border-r border-zinc-900/60">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-sans mb-2">
              Fundação
            </p>
            <p className="text-xl text-white font-medieval tracking-widest">
              2011
            </p>
          </div>

          <div className="flex-1 border-r border-zinc-900/60 relative">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-sans mb-2">
              Projeto Destaque
            </p>
            <p className="text-xl text-ouro-epico font-medieval tracking-wider drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              Dark Meeting
            </p>
          </div>

          <div className="flex-1">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-sans mb-2">
              Foco
            </p>
            <p className="text-xl text-zinc-300 font-medieval tracking-wider">
              Survivor RPG
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
