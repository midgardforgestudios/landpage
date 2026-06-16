import { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaLinkedinIn, 
  FaRedditAlien, 
  FaTiktok 
} from 'react-icons/fa6';

// Array para facilitar a manutenção dos links no futuro
const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
  { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com' },
  { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com' },
  { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com' },
  { name: 'Reddit', icon: FaRedditAlien, url: 'https://reddit.com' },
  { name: 'TikTok', icon: FaTiktok, url: 'https://tiktok.com' },
];

const Footer = memo(() => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black via-fire/3 to-transparent backdrop-blur-sm pt-16 pb-8 px-4 sm:px-6 border-t border-zinc-900/60 relative overflow-hidden mt-auto">
      
      {/* Efeito de braseiro no fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-fire/40 to-transparent shadow-[0_0_20px_rgba(255,69,0,0.3)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* =========================================
            1. BLOCO DE CONVITE 
            ========================================= */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-medieval mb-4 sm:mb-6 tracking-wide drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
            Junte-se à Nossa <span className="text-gold">Jornada</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed text-sm sm:text-base font-light px-2">
            Estamos construindo novos mundos, novas histórias e novas experiências. Seja como jogador, parceiro, cliente ou colaborador, convidamos você a fazer parte dessa história.
          </p>
        </div>

        {/* =========================================
            2. REDES SOCIAIS
            ========================================= */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Siga-nos no ${social.name}`}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-zinc-800 bg-black/40 flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:scale-95 active:text-gold active:border-gold/50 active:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:-translate-y-0 transition-all duration-200"
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            );
          })}
        </div>
        
        {/* =========================================
            3. BASE DO RODAPÉ 
            ========================================= */}
        <div className="pt-8 border-t border-zinc-900/80 flex flex-col items-center gap-5">
          
          {/* Marca */}
          <p className="text-fire font-black tracking-[0.2em] sm:tracking-[0.3em] text-base sm:text-lg drop-shadow-[0_0_10px_rgba(255,69,0,0.3)] uppercase text-center">
            Midgard Forge Studios
          </p>

          {/* Links Legais */}
          <nav 
            aria-label="Links Legais do Rodapé" 
            className="flex flex-wrap justify-center items-center gap-y-3 gap-x-4 sm:gap-x-4 text-[10px] sm:text-xs font-medieval tracking-widest uppercase text-zinc-500"
          >
            <Link 
              to="/termos" 
              className="hover:text-gold active:scale-95 active:text-gold transition-all duration-200"
            >
              Termos de Uso
            </Link>
            
            <span className="text-zinc-800 hidden sm:inline-block">|</span>
            
            <Link 
              to="/privacidade" 
              className="hover:text-gold active:scale-95 active:text-gold transition-all duration-200"
            >
              Privacidade
            </Link>
            
            <span className="text-zinc-800 hidden sm:inline-block">|</span>
            
            <Link 
              to="/cookies" 
              className="hover:text-gold active:scale-95 active:text-gold transition-all duration-200"
            >
              Cookies
            </Link>
          </nav>

          {/* Copyright */}
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