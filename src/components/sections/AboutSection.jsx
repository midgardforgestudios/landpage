import logoIcon from '../../assets/logos/midgard-icon.png';

/* ==========================================================================
   DADOS ESTÁTICOS
   Extraídos para fora do componente para evitar recriação a cada renderização
   ========================================================================== */
const VALORES_FORJA = [
  {
    id: "01",
    titulo: "Excelência",
    texto: "Buscamos qualidade absoluta em cada detalhe dos nossos projetos.",
  },
  {
    id: "02",
    titulo: "Dedicação",
    texto: "Somos movidos pela paixão de criar, inovar e evoluir constantemente.",
  },
  {
    id: "03",
    titulo: "Inovação",
    texto: "Exploramos novas tecnologias para expandir os limites criativos.",
  },
  {
    id: "04",
    titulo: "Transparência",
    texto: "Cultivamos relações honestas com jogadores, clientes e parceiros.",
  },
  {
    id: "05",
    titulo: "Comunidade",
    texto: "Grandes projetos são forjados junto com as pessoas que os apoiam.",
  },
];

/* ==========================================================================
   COMPONENTE PRINCIPAL
   ========================================================================== */
export default function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="py-32 px-6 bg-transparent relative border-t border-zinc-900/60"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '400px' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            1. BLOCO SUPERIOR (História)
            ========================================= */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          
          {/* Arte / Escudo Esquerdo */}
          <div className="lg:col-span-5 relative hidden lg:block group">
            <div className="absolute inset-0 bg-fire/5 blur-[40px] rounded-full group-hover:bg-fire/10 transition-colors duration-700"></div>

            <div className="w-full aspect-[4/5] bg-gradient-to-b from-zinc-900/80 to-[#050303] border border-zinc-800 flex items-center justify-center p-8 rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <img
                src={logoIcon} /* <-- ERRO CORRIGIDO AQUI: Antes estava logoTeste */
                alt="Logo Midgard Forge Studios"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto Institucional */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <p className="text-fire font-bold tracking-[0.3em] text-xs uppercase">
              A Forja
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white font-medieval tracking-tight">
              Midgard Forge Studios
            </h2>
            <div className="w-16 h-[2px] bg-fire shadow-[0_0_10px_rgba(255,69,0,0.6)]" />

            <p className="text-zinc-400 font-light leading-relaxed text-lg font-sans">
              Nascemos da paixão pelo desenvolvimento de jogos e da busca
              incansável por criar experiências únicas para o público gamer.
              Nossa jornada teve início em 2011, explorando diferentes
              tecnologias, motores gráficos e ferramentas de desenvolvimento.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed text-lg font-sans">
              Ao longo dos anos, acumulamos conhecimento, experiência técnica e
              uma visão clara sobre o futuro da indústria. Hoje, atuamos não
              apenas no desenvolvimento de projetos próprios, mas também na
              criação de soluções inovadoras para marcas globais.
            </p>
          </div>
        </div>

        {/* =========================================
            2. MISSÃO E VISÃO
            ========================================= */}
        <div className="grid md:grid-cols-2 gap-8 mb-32 relative z-10">
          
          {/* Card Missão */}
          <article className="bg-[#050303]/80 backdrop-blur-sm p-10 border border-zinc-900 hover:border-fire/40 hover:shadow-[0_0_30px_rgba(255,69,0,0.05)] transition-all duration-500 relative rounded-sm group">
            <span className="text-[10px] font-mono text-zinc-700 absolute top-6 right-8 tracking-widest group-hover:text-fire/50 transition-colors duration-500">
              // MISSÃO
            </span>
            <h3 className="text-2xl font-medieval text-white mb-4 group-hover:text-gold transition-colors duration-300">
              Nossa Missão
            </h3>
            <p className="text-zinc-400 font-light leading-relaxed font-sans">
              Desenvolver jogos e experiências digitais de alta qualidade que
              proporcionem diversão, imersão e inovação para públicos de
              diferentes idades, fomentando o crescimento do ecossistema criativo.
            </p>
          </article>

          {/* Card Visão */}
          <article className="bg-[#050303]/80 backdrop-blur-sm p-10 border border-zinc-900 hover:border-fire/40 hover:shadow-[0_0_30px_rgba(255,69,0,0.05)] transition-all duration-500 relative rounded-sm group">
            <span className="text-[10px] font-mono text-zinc-700 absolute top-6 right-8 tracking-widest group-hover:text-fire/50 transition-colors duration-500">
              // VISÃO
            </span>
            <h3 className="text-2xl font-medieval text-white mb-4 group-hover:text-gold transition-colors duration-300">
              Nossa Visão
            </h3>
            <p className="text-zinc-400 font-light leading-relaxed font-sans">
              Ser reconhecida globalmente como uma desenvolvedora independente
              de jogos e soluções digitais inovadoras, construindo universos,
              histórias e experiências que deixem a sua marca na indústria.
            </p>
          </article>

        </div>

        {/* =========================================
            3. PILARES / VALORES
            ========================================= */}
        <div className="relative z-10">
          <h3 className="text-xl font-medieval text-white mb-16 text-center tracking-[0.25em] uppercase text-gold">
            Nossos Valores
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {VALORES_FORJA.map((val) => (
              <div
                key={val.id}
                className="p-6 bg-zinc-950/60 backdrop-blur-sm border border-zinc-900 rounded-sm transition-all duration-500 relative pt-12 group hover:border-zinc-700 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              >
                {/* Badge Numérico Dinâmico */}
                <div className="absolute top-0 left-6 -translate-y-1/2 px-3 py-0.5 bg-[#0A0A0A] border border-fire/40 text-fire font-mono text-xs rounded-sm shadow-[0_0_10px_rgba(255,69,0,0.2)] group-hover:bg-fire group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,69,0,0.5)] transition-all duration-500">
                  {val.id}
                </div>

                <h4 className="text-lg font-bold text-white mb-3 font-medieval tracking-wide group-hover:text-gold transition-colors duration-300">
                  {val.titulo}
                </h4>
                <p className="text-base text-zinc-400 font-light font-sans leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {val.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}