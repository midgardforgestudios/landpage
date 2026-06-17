// src/components/layout/Maintenance.jsx
import logoMidgard from '../../assets/logos/midgard-logo.svg'; 

export default function Maintenance() {
  return (
    // Tela travada: fixed inset-0 e overflow-hidden
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050303] overflow-hidden p-4 sm:p-6 antialiased">
      
      {/* Luz de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.08)_0%,transparent_60%)] blur-[80px] pointer-events-none -z-10 animate-pulse duration-[3000ms] transform-gpu will-change-transform"></div>

      {/* Card: max-w expandido para 5xl e gaps aumentados */}
      <div className="relative w-full max-w-5xl max-h-full flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/50 p-8 sm:p-10 md:p-14 rounded-md shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-zinc-700/50 text-center overflow-hidden">
        
        {/* Bordas decorativas iluminadas */}
        <div className="absolute top-0 left-0 w-8 h-8 md:w-10 md:h-10 border-t-2 border-l-2 border-fire/40 rounded-tl-md transition-all duration-500 hover:border-fire"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-fire/40 rounded-br-md transition-all duration-500 hover:border-fire"></div>

        {/* Logo */}
        <div className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] animate-[forge-reveal_1s_ease-out_forwards] transform-gpu shrink-0">
          <img
            src={logoMidgard}
            alt="Midgard Forge Studios"
            className="w-full h-auto max-h-[15vh] sm:max-h-[22vh] object-contain drop-shadow-[0_0_20px_rgba(255,69,0,0.3)] opacity-95 transition-transform duration-700 md:hover:scale-[1.02]"
            loading="eager"
          />
        </div>

        {/* Título */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-medieval tracking-widest uppercase drop-shadow-md shrink-0">
          A Forja em <span className="text-gold">Manutenção</span>
        </h1>

        {/* Divisor Animado */}
        <div className="relative w-32 sm:w-48 h-[2px] bg-zinc-800 mx-auto overflow-hidden rounded-full shrink-0">
          <div className="absolute top-0 left-0 h-full w-full bg-fire shadow-[0_0_15px_rgba(255,69,0,0.8)] animate-pulse transform-gpu"></div>
        </div>

        {/* Texto de aviso */}
        <p className="text-zinc-400 font-sans tracking-wide text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed shrink-0">
          Nossos ferreiros estão trabalhando profundamente no código para forjar novas atualizações. 
          O acesso estará liberado em breve, trazendo melhorias e estabilidade ao sistema.
        </p>

        {/* Indicador de status */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 bg-[#050303] border border-fire/20 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-inner shrink-0">
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fire opacity-75 transform-gpu"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-fire shadow-[0_0_8px_rgba(255,69,0,0.8)]"></span>
          </span>
          <span className="text-fire font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold">
            Aguarde o resfriamento
          </span>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 border-t border-zinc-800/60 pt-5 sm:pt-8 mt-2 w-full shrink-0">
          <p className="text-zinc-500 font-medieval text-[10px] sm:text-xs md:text-sm uppercase tracking-widest opacity-80">
            Acompanhe as novidades
          </p>
          <div className="flex gap-8 sm:gap-10">
            
            <a 
              href="#" 
              // Adicionado active:scale-90 e active:translate-y-0 para o efeito de "clique/toque"
              // Adicionado p-3 e -m-3 para aumentar a hitbox invisível do botão
              className="p-3 -m-3 text-zinc-500 md:hover:text-gold md:hover:-translate-y-1 active:scale-90 active:translate-y-0 active:text-gold transition-all duration-300 transform-gpu rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50" 
              aria-label="Twitter"
              style={{ WebkitTapHighlightColor: 'transparent' }} // Remove o brilho de toque padrão de celulares
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            
            <a 
              href="#" 
              className="p-3 -m-3 text-zinc-500 md:hover:text-gold md:hover:-translate-y-1 active:scale-90 active:translate-y-0 active:text-gold transition-all duration-300 transform-gpu rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50" 
              aria-label="Instagram"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            <a 
              href="#" 
              className="p-3 -m-3 text-zinc-500 md:hover:text-gold md:hover:-translate-y-1 active:scale-90 active:translate-y-0 active:text-gold transition-all duration-300 transform-gpu rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50" 
              aria-label="Comunidade"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}