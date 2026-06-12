import { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = memo(() => {
  const anoAtual = new Date().getFullYear();

  return (
    // AJUSTE SUTIL: Alterado 'from-[#050202]' para 'from-black' e 'via-fire/5' para 'via-fire/3' para escurecer ligeiramente o fundo.
    <footer className="bg-gradient-to-t from-black via-fire/3 to-transparent backdrop-blur-sm pt-16 pb-8 px-4 sm:px-6 border-t border-zinc-900/60 relative overflow-hidden mt-auto">
      
      {/* Efeito de braseiro no fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-fire/40 to-transparent shadow-[0_0_20px_rgba(255,69,0,0.3)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* =========================================
            1. BLOCO DE CONVITE 
            ========================================= */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-medieval mb-4 sm:mb-6 tracking-wide drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
            Junte-se à Nossa <span className="text-gold">Jornada</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed text-sm sm:text-base font-light px-2">
            Estamos construindo novos mundos, novas histórias e novas experiências. Seja como jogador, parceiro, cliente ou colaborador, convidamos você a fazer parte dessa história.
          </p>
        </div>
        
        {/* =========================================
            2. BASE DO RODAPÉ (Centralizada e Responsiva)
            ========================================= */}
        <div className="pt-8 border-t border-zinc-900/80 flex flex-col items-center gap-5">
          
          {/* Marca */}
          <p className="text-fire font-black tracking-[0.2em] sm:tracking-[0.3em] text-base sm:text-lg drop-shadow-[0_0_10px_rgba(255,69,0,0.3)] uppercase text-center">
            Midgard Forge Studios
          </p>

          {/* Links Legais (Divisores ocultos no Mobile para não quebrar feio) */}
          <nav 
            aria-label="Links Legais do Rodapé" 
            className="flex flex-wrap justify-center items-center gap-y-3 gap-x-4 sm:gap-x-4 text-[10px] sm:text-xs font-medieval tracking-widest uppercase text-zinc-500"
          >
            <Link 
              to="/termos" 
              className="hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Termos de Uso
            </Link>
            
            <span className="text-zinc-800 hidden sm:inline-block">|</span>
            
            <Link 
              to="/privacidade" 
              className="hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Privacidade
            </Link>
            
            <span className="text-zinc-800 hidden sm:inline-block">|</span>
            
            <Link 
              to="/cookies" 
              className="hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Cookies
            </Link>
          </nav>

          {/* Copyright ajustado para telas muito pequenas */}
          <p className="text-zinc-600 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-widest uppercase mt-2 text-center px-4">
            Forjando Mundos — Criando Lendas © {anoAtual}
          </p>

        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;