// src/components/layout/Maintenance.jsx
import logoMidgard from '../../assets/logos/midgard-logo.svg'; 

export default function Maintenance() {
  return (
    <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      
      {/* Luz de fundo pulsante da forja */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.12)_0%,transparent_70%)] blur-[70px] pointer-events-none -z-10 animate-pulse duration-1000"></div>

      <div className="bg-zinc-950/40 backdrop-blur-md border border-zinc-900/60 p-10 md:p-16 rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.5)] max-w-3xl w-full flex flex-col items-center relative group">
        
        {/* Bordas decorativas iluminadas */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-fire/50 rounded-tl-sm transition-all duration-700 group-hover:border-fire"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-fire/50 rounded-br-sm transition-all duration-700 group-hover:border-fire"></div>

        {/* Logo */}
        <div className="w-full max-w-[240px] sm:max-w-[320px] mb-8 animate-[forge-reveal_1s_ease-out_forwards]">
          <img
            src={logoMidgard}
            alt="Midgard Forge Studios"
            className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,69,0,0.4)] opacity-90"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-black text-white font-medieval tracking-widest mb-4 uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          A Forja em <span className="text-gold">Manutenção</span>
        </h1>

        {/* Divisor Animado */}
        <div className="relative w-32 h-[2px] bg-zinc-800 mb-8 mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-fire shadow-[0_0_15px_rgba(255,69,0,0.8)] animate-[translateX_2s_ease-in-out_infinite_alternate]" style={{ animationName: 'ping' }}></div>
        </div>

        {/* Texto de aviso */}
        <p className="text-zinc-400 font-sans tracking-wide text-base md:text-lg max-w-xl leading-relaxed mb-10">
          Nossos ferreiros estão trabalhando profundamente no código para forjar novas atualizações. 
          O acesso estará liberado em breve, trazendo melhorias e estabilidade ao sistema.
        </p>

        {/* Indicador de status */}
        <div className="flex items-center justify-center gap-4 bg-[#050303] border border-fire/30 px-6 py-3 rounded-sm shadow-[0_0_15px_rgba(255,69,0,0.1)] mb-10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fire opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-fire shadow-[0_0_10px_rgba(255,69,0,1)]"></span>
          </span>
          <span className="text-fire font-mono text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
            Aguarde o resfriamento
          </span>
        </div>

        {/* Redes Sociais com SVGs Inline */}
        <div className="flex flex-col items-center gap-4 border-t border-zinc-900/80 pt-8 w-full">
          <p className="text-zinc-500 font-medieval text-xs uppercase tracking-widest">Acompanhe as novidades</p>
          <div className="flex gap-6">
            
            {/* SVG Twitter */}
            <a href="#" className="text-zinc-500 hover:text-gold hover:-translate-y-1 transition-all duration-300" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            
            {/* SVG Instagram */}
            <a href="#" className="text-zinc-500 hover:text-gold hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>

            {/* SVG Comunidade (Message Square) */}
            <a href="#" className="text-zinc-500 hover:text-gold hover:-translate-y-1 transition-all duration-300" aria-label="Comunidade">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}