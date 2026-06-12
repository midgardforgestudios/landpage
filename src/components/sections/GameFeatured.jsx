import { useRef, useCallback } from 'react';
import pescocoDragonImg from '../../assets/img/pescoco-dragon.svg';

export default function GameFeatured() {
  const lightRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (lightRef.current) {
        lightRef.current.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(255,69,0,0.15), transparent 50%)`;
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (lightRef.current) {
      lightRef.current.style.background = 'none';
    }
  }, []);

  const recursos = [
    "Survivor RPG em Fantasia Sombria",
    "Combate Dinâmico contra Mortos-Vivos",
    "Progressão Profunda do Personagem",
    "Defesa Estratégica do Vilarejo",
    "Exploração de Regiões Hostis",
    "Missões Épicas e Desafios",
    "Sistema de Sobrevivência e Crafting",
    "Narrativa de Resistência e Esperança"
  ];

  return (
    <section id="dark-meeting" className="py-32 px-6 bg-transparent relative overflow-hidden border-t border-zinc-900/60" style={{ contentVisibility: 'auto', containIntrinsicSize: '400px' }}>
      
      {/* Luz de fundo sutil */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.03)_0%,transparent_70%)] blur-[50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        {/* =========================================
            1. DESCRITIVO E LORE DO JOGO
            ========================================= */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-fire font-bold tracking-[0.3em] text-sm uppercase">Projeto em Destaque</p>
          
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase font-medieval drop-shadow-[0_0_15px_rgba(255,69,0,0.15)]">
            DARK MEETING
          </h2>
          
          <p className="text-lg text-gold font-mono tracking-widest uppercase">
  SOBREVIVA <span className="text-zinc-600 mx-3">|</span> PROTEJA <span className="text-zinc-600 mx-3">|</span> RECONSTRUA
</p>
          
          <div className="w-20 h-[2px] bg-fire shadow-[0_0_10px_rgba(255,69,0,0.6)] my-6" />

          <p className="text-zinc-400 font-light font-sans leading-relaxed text-lg">
            <span className="text-white font-medium">Dark Meeting</span> é um Survivor RPG imersivo ambientado em um vasto universo de fantasia sombria, onde hordas de mortos-vivos dominam a terra. Assuma o papel de um lendário guerreiro encarregado de fortificar e defender um pequeno vilarejo, um dos últimos bastiões da esperança diante da ameaça crescente das forças da escuridão.
          </p>
          <p className="text-zinc-400 font-light font-sans leading-relaxed text-lg">
            Explore territórios perigosos, fortaleça seu personagem, enfrente criaturas aterrorizantes e domine a arte da forja para criar equipamentos poderosos. Reconstrua o que foi perdido e garanta a sobrevivência daqueles que dependem de você.
          </p>
        </div>

        {/* =========================================
            2. PAINEL DO HUD LATERAL (Cantos Encaixados)
            ========================================= */}
        <div 
          className="lg:col-span-5 w-full bg-[#050303]/90 backdrop-blur-md border border-zinc-900 p-8 rounded-xs shadow-[0_0_40px_rgba(0,0,0,0.8)] relative group overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Brilho Magnético Interno (Segue o Mouse) */}
          <div 
            ref={lightRef}
            className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-screen"
          />

          {/* Marcadores de Quina em Fogo */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-fire shadow-[0_0_10px_rgba(255,69,0,0.5)] z-20" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-fire shadow-[0_0_10px_rgba(255,69,0,0.5)] z-20" />
          
          {/* 🐉 ORNAMENTO DRAGÃO: Top-Right (Encaixado e Realista) */}
          <div className="absolute -top-5 -right-20 w-61 h-60 opacity-55 pointer-events-none z-0 rotate-[-65deg]">
            <img 
              src={pescocoDragonImg} 
              alt="Moldura Dragão" 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* 🐉 ORNAMENTO DRAGÃO: Bottom-Left (Encaixado e Realista) */}
          <div className="absolute -bottom-25 -left-5 w-60 h-61 opacity-55 pointer-events-none z-0 -rotate-[190deg]">
            <img 
              src={pescocoDragonImg} 
              alt="Moldura Dragão" 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* Conteúdo do HUD (Textos) */}
          <div className="relative z-10">
            <h4 className="text-sm font-medieval text-white mb-6 uppercase tracking-[0.2em] border-b border-zinc-900/80 pb-4 group-hover:text-gold transition-colors duration-300">
              Principais Recursos
            </h4>
            
            <ul className="space-y-4">
              {recursos.map((rec, i) => (
                <li key={i} className="flex items-center text-zinc-400 font-light font-sans text-base group/item cursor-default">
                  
                  {/* Brasa Animada da Lista */}
                  <div className="relative w-2 h-2 mr-4 flex items-center justify-center">
                    <span className="absolute w-1.5 h-1.5 bg-fire rounded-full shadow-[0_0_5px_rgba(255,69,0,0.8)] group-hover/item:bg-gold group-hover/item:shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300" />
                    <span className="absolute w-full h-full border border-fire/30 rounded-full animate-ping opacity-0 group-hover/item:opacity-100" />
                  </div>

                  {/* Texto */}
                  <span className="group-hover/item:text-white transition-colors duration-200">
                    {rec}
                  </span>
                  
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}