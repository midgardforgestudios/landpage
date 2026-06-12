import { useRef, useCallback } from "react";

// Sub-componente: Card Magnético que reage ao mouse
function MagneticCard({ titulo, desc }) {
  const lightRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
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

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-8 border border-zinc-900 bg-zinc-950/40 hover:border-fire/40 transition-all duration-500 group rounded-xs overflow-hidden"
    >
      {/* Luz interna que segue o mouse */}
      <div
        ref={lightRef}
        className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-screen"
      />

      <div className="relative z-10">
        <h3 className="text-xl font-medieval text-white mb-3 group-hover:text-gold transition-colors">
          {titulo}
        </h3>
        <p className="text-base text-zinc-500 font-sans leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const bannerLightRef = useRef(null);
  const bannerRafRef = useRef(null);

  const handleBannerMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (bannerRafRef.current) cancelAnimationFrame(bannerRafRef.current);
    bannerRafRef.current = requestAnimationFrame(() => {
      if (bannerLightRef.current) {
        bannerLightRef.current.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(255,69,0,0.15), transparent 50%)`;
      }
    });
  }, []);

  const handleBannerMouseLeave = useCallback(() => {
    if (bannerRafRef.current) cancelAnimationFrame(bannerRafRef.current);
    if (bannerLightRef.current) {
      bannerLightRef.current.style.background = "none";
    }
  }, []);

  const servicos = [
    {
      titulo: "Desenvolvimento de Jogos",
      desc: "Criação de jogos para PC, consoles e plataformas digitais.",
    },
    {
      titulo: "Assets e Ferramentas",
      desc: "Produção e comercialização de recursos para desenvolvedores e estúdios.",
    },
    {
      titulo: "Produção Visual",
      desc: "Criação de efeitos visuais (VFX), animações, modelagem e conteúdos digitais.",
    },
    {
      titulo: "Inteligência Artificial Criativa",
      desc: "Desenvolvimento de personagens, vídeos e soluções visuais com tecnologias de IA.",
    },
    {
      titulo: "Consultoria e Suporte Técnico",
      desc: "Auxiliamos equipes e empresas na estruturação de projetos digitais.",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-32 px-6 bg-transparent border-t border-zinc-900/50"
      style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-fire font-bold tracking-[0.3em] text-sm mb-4 uppercase">
            Soluções
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white font-medieval tracking-tight">
            Nossos Serviços
          </h2>
          <div className="w-12 h-[2px] bg-fire mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {servicos.slice(0, 3).map((srv, i) => (
            <MagneticCard key={i} titulo={srv.titulo} desc={srv.desc} />
          ))}
        </div>

        <div className="flex justify-center mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-2/3">
            {servicos.slice(3).map((srv, i) => (
              <MagneticCard key={i + 3} titulo={srv.titulo} desc={srv.desc} />
            ))}
          </div>
        </div>

        {/* Banner Horizontal */}
        <div
          className="relative border border-zinc-900 bg-[#060404]/80 backdrop-blur-md p-10 md:p-12 rounded-xs grid lg:grid-cols-3 gap-10 items-center overflow-hidden group"
          onMouseMove={handleBannerMouseMove}
          onMouseLeave={handleBannerMouseLeave}
        >
          {/* Brilho Magnético Interno (Segue o Mouse) */}
          <div
            ref={bannerLightRef}
            className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-screen"
          />

          {/* Marcadores de Quina em Fogo */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-fire shadow-[0_0_10px_rgba(255,69,0,0.5)] z-20" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-fire shadow-[0_0_10px_rgba(255,69,0,0.5)] z-20" />

          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white font-medieval tracking-wide group-hover:text-gold transition-colors duration-300">
              Por Que Escolher a{" "}
              <span className="text-gold">Midgard Forge?</span>
            </h3>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 relative z-10">
            {[
              "Experiência acumulada desde 2011.",
              "Foco em inovação e tecnologia.",
              "Desenvolvimento de projetos próprios.",
              "Serviços especializados para o mercado criativo.",
              "Compromisso com qualidade e evolução contínua.",
              "Visão voltada para o mercado global.",
            ].map((dif, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-zinc-400 font-light font-sans text-base group/item cursor-default"
              >
                <div className="relative w-2 h-2 mr-1 flex items-center justify-center">
                  <span className="absolute w-1.5 h-1.5 bg-fire rounded-full shadow-[0_0_5px_rgba(255,69,0,0.8)] group-hover/item:bg-gold group-hover/item:shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300" />
                  <span className="absolute w-full h-full border border-fire/30 rounded-full animate-ping opacity-0 group-hover/item:opacity-100" />
                </div>
                <span className="group-hover/item:text-white transition-colors duration-200">
                  {dif}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
