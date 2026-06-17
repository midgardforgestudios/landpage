import { useRef, useCallback, useEffect } from "react";

// Sub-componente: Card Magnético que reage ao mouse e ao toque
function MagneticCard({ titulo, desc }) {
  const lightRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    // Ignora movimento se for touch (evita bugs no mobile)
    if (e.pointerType === "touch") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    rafRef.current = requestAnimationFrame(() => {
      if (lightRef.current) {
        lightRef.current.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,69,0,0.15), transparent 50%)`;
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (lightRef.current) {
      lightRef.current.style.background = "none";
    }
  }, []);

  // Cleanup de segurança para evitar vazamento de memória se o componente for desmontado
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0} // Permite receber foco no mobile
      // PERFORMANCE: Trocado 'transition-all' por 'transition'
      // UX MOBILE: Adicionado 'active:scale-[0.98] active:border-fire/60' para feedback tátil
      className="relative p-6 lg:p-8 border border-zinc-800/80 bg-zinc-950/30 hover:bg-zinc-900/40 hover:border-fire/40 active:border-fire/60 active:scale-[0.98] transition duration-300 group rounded-sm overflow-hidden h-full transform-gpu will-change-transform cursor-default sm:cursor-auto"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Luz interna que segue o mouse - Acelerada pela GPU */}
      <div
        ref={lightRef}
        className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-screen transform-gpu"
      />

      <div className="relative z-10">
        <h3 className="text-lg lg:text-xl font-medieval text-white mb-3 group-hover:text-gold transition-colors duration-300">
          {titulo}
        </h3>
        <p className="text-sm lg:text-base text-zinc-500 font-sans leading-relaxed font-light group-hover:text-zinc-400 transition-colors duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const servicos = [
    {
      titulo: "Desenvolvimento de Projetos",
      desc: "Apoio ao desenvolvimento de jogos e projetos digitais.",
    },
    {
      titulo: "Character Design",
      desc: "Criação e desenvolvimento de personagens.",
    },
    {
      titulo: "Modelagem 3D",
      desc: "Produção de modelos para jogos, animações e projetos digitais.",
    },
    {
      titulo: "Animação",
      desc: "Criação de animações para personagens, cenários e conteúdos digitais.",
    },
    {
      titulo: "Assets",
      desc: "Desenvolvimento de recursos digitais para projetos e produções.",
    },
    {
      titulo: "Produção Visual",
      desc: "Efeitos visuais (VFX), motion graphics e conteúdos produzidos com ferramentas como After Effects.",
    },
    {
      titulo: "Ambientação",
      desc: "Criação de cenários, universos, documentação criativa e conteúdos para projetos.",
    },
    {
      titulo: "Suporte à Produção",
      desc: "Colaboração com estúdios e equipes em diferentes etapas do desenvolvimento.",
    },
  ];

  return (
    <section
      id="servicos"
      // Ajuste de padding vertical para mobile respirar melhor
      className="py-24 lg:py-32 px-6 bg-transparent border-t border-zinc-900/50"
      style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-16">
          <p className="text-fire font-bold tracking-[0.3em] text-xs lg:text-sm mb-4 uppercase opacity-90">
            Soluções
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white font-medieval tracking-tight">
            Nossos Serviços
          </h2>
          <div className="w-12 h-[2px] bg-fire mt-4 lg:mt-5 opacity-80" />
        </div>

        {/* Grid perfeitamente responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {servicos.map((srv, i) => (
            <MagneticCard key={i} titulo={srv.titulo} desc={srv.desc} />
          ))}
        </div>

      </div>
    </section>
  );
}