import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logos/midgard-icon.png';
import midgardText from '../../assets/logos/midgard-text.svg';
import forgeText from '../../assets/logos/studios-text.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Função profissional para lidar com links âncora e fazer o scroll suave
  const handleNavClick = (e, targetId) => {
    // Só previne o comportamento padrão se estivermos na página inicial
    if (window.location.pathname === '/') {
      e.preventDefault();
      closeMenu();
      
      const element = document.getElementById(targetId);
      if (element) {
        // Compensa a altura do header fixo para não cobrir o título da seção
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
       closeMenu();
    }
  };

  return (
    // A MÁGICA AQUI: z-[100] garante que o Header fique acima de tudo no Hero
    <header className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-b from-fire/10 via-dark-bg/60 to-transparent backdrop-blur-md border-b border-fire/10 shadow-[0_4px_20px_rgba(255,69,0,0.05)] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Link para o topo da página */}
        <Link to="/" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-4 group cursor-pointer">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 shadow-md group-hover:border-gold/40 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-500 shrink-0">
            <img 
              src={logoIcon} 
              alt="Logo Midgard" 
              className="w-full h-full object-cover shadow-inner" 
            />
          </div>
          
          <div className="hidden sm:flex items-center -my-20">
            <img 
              src={midgardText} 
              alt="Midgard" 
              className="h-[140px] w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
            />
            <img 
              src={forgeText} 
              alt="Studios" 
              className="h-[150px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 -ml-8 -mt-6" 
            />
          </div>
        </Link>

        {/* NAVEGAÇÃO DESKTOP: Tags <a> com a função handleNavClick resolvida */}
        <nav className="hidden md:flex gap-10 text-xs font-bold font-medieval tracking-[0.25em] text-silver">
          <a href="/#quem-somos" onClick={(e) => handleNavClick(e, 'quem-somos')} className="hover:text-gold hover:drop-shadow-[0_0_6px_rgba(212,175,55,0.8)] transition-all duration-300 cursor-pointer">QUEM SOMOS</a>
          <a href="/#dark-meeting" onClick={(e) => handleNavClick(e, 'dark-meeting')} className="hover:text-gold hover:drop-shadow-[0_0_6px_rgba(212,175,55,0.8)] transition-all duration-300 cursor-pointer">DARK MEETING</a>
          <a href="/#servicos" onClick={(e) => handleNavClick(e, 'servicos')} className="hover:text-gold hover:drop-shadow-[0_0_6px_rgba(212,175,55,0.8)] transition-all duration-300 cursor-pointer">SERVIÇOS</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="/#dark-meeting" 
            onClick={(e) => handleNavClick(e, 'dark-meeting')}
            className="hidden sm:inline-block px-6 py-2.5 border border-gold/30 text-gold font-medieval text-xs tracking-widest uppercase rounded-xs hover:bg-gold hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300 cursor-pointer"
          >
            Entrar na Forja
          </a>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 border border-zinc-800 rounded-xs hover:border-gold/40 transition-colors cursor-pointer"
            aria-label="Abrir menu"
          >
            <span className={`block w-5 h-[1.5px] bg-gold transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-gold transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-gold transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>

      </div>

      {/* NAVEGAÇÃO MOBILE */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 border-t border-fire/10' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 py-4 gap-4 bg-dark-bg/75 backdrop-blur-lg">
          <a href="/#quem-somos" onClick={(e) => handleNavClick(e, 'quem-somos')} className="text-sm font-bold font-medieval tracking-[0.25em] text-silver hover:text-gold transition-colors py-3 border-b border-zinc-900/50 cursor-pointer">QUEM SOMOS</a>
          <a href="/#dark-meeting" onClick={(e) => handleNavClick(e, 'dark-meeting')} className="text-sm font-bold font-medieval tracking-[0.25em] text-silver hover:text-gold transition-colors py-3 border-b border-zinc-900/50 cursor-pointer">DARK MEETING</a>
          <a href="/#servicos" onClick={(e) => handleNavClick(e, 'servicos')} className="text-sm font-bold font-medieval tracking-[0.25em] text-silver hover:text-gold transition-colors py-3 border-b border-zinc-900/50 cursor-pointer">SERVIÇOS</a>
          <a href="/#dark-meeting" onClick={(e) => handleNavClick(e, 'dark-meeting')} className="text-sm font-bold font-medieval tracking-[0.25em] text-gold hover:text-gold transition-colors py-3 cursor-pointer">ENTRAR NA FORJA</a>
        </nav>
      </div>
    </header>
  );
}