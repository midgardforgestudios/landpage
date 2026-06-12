import { useState, useEffect } from "react";

/* ==========================================================================
   CONFIGURAÇÕES GLOBAIS
   Separamos os dados estáticos do componente para melhorar a performance
   ========================================================================== */

/** Dicionário de tradução dos status técnicos para a interface do usuário */
const STATUS_MAP = {
  "all": "Todos Aceitos",
  "essential": "Apenas Essenciais",
  "rejected": "Opcionais Recusados",
  "Não definido": "Nenhuma Escolha"
};

/** Configuração dos botões de consentimento para evitar repetição (Clean Code) */
const CONSENT_OPTIONS = [
  {
    key: "rejected",
    label: "Recusar",
    activeStyle: "bg-zinc-800 text-white border-zinc-700 shadow-inner cursor-default",
    idleStyle: "bg-transparent border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-900 hover:border-zinc-700"
  },
  {
    key: "essential",
    label: "Essenciais",
    activeStyle: "bg-gold/10 text-gold border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] cursor-default",
    idleStyle: "bg-transparent border-zinc-800 text-gold/50 hover:border-gold/30 hover:text-gold hover:bg-gold/5"
  },
  {
    key: "all",
    label: "Aceitar Todos",
    activeStyle: "bg-gold text-black border-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-default",
    idleStyle: "bg-zinc-950 border-gold/50 text-gold hover:bg-gold hover:border-gold hover:text-black"
  }
];

/* ==========================================================================
   COMPONENTE PRINCIPAL
   ========================================================================== */
export default function Cookies() {
  const [consentStatus, setConsentStatus] = useState("Não definido");

  /**
   * Sincroniza o estado com o localStorage.
   * Chamado na inicialização e quando o evento global 'cookies_updated' é emitido.
   */
  const syncStatus = () => {
    const status = localStorage.getItem("midgard_cookie_consent");
    setConsentStatus(status || "Não definido");
  };

  useEffect(() => {
    syncStatus();
    window.addEventListener("cookies_updated", syncStatus);
    return () => window.removeEventListener("cookies_updated", syncStatus);
  }, []);

  /**
   * Salva a nova preferência do usuário e notifica outras abas/componentes.
   * @param {string} status - O novo nível de consentimento ('all', 'essential', 'rejected')
   */
  const handleUpdate = (status) => {
    if (consentStatus === status) return; // Proteção contra re-renderizações desnecessárias
    localStorage.setItem("midgard_cookie_consent", status);
    window.dispatchEvent(new Event("cookies_updated"));
  };

  /**
   * Remove o consentimento do cache e força o banner a reaparecer.
   */
  const handleClear = () => {
    localStorage.removeItem("midgard_cookie_consent");
    window.dispatchEvent(new Event("cookies_updated"));
  };

  return (
    <main className="max-w-4xl mx-auto px-6 pt-40 pb-24 min-h-screen relative z-10">
      <article className="bg-[#050303]/90 backdrop-blur-md border border-zinc-900 p-8 md:p-12 rounded-sm shadow-2xl relative">
        
        {/* Cabeçalho Oficial */}
        <header className="mb-10 border-b border-zinc-900 pb-6 text-center sm:text-left">
          <p className="text-fire font-mono text-xs uppercase tracking-[0.3em] mb-2">Transparência e Privacidade</p>
          <h1 className="text-3xl md:text-5xl font-black text-white font-medieval uppercase">
            Política de <span className="text-gold">Cookies</span>
          </h1>
        </header>

        {/* Painel de Controle de Consentimento (Grid Lock) */}
        <div className="mb-14 p-6 bg-[#0A0A0A] border border-zinc-900 border-l-4 border-l-gold rounded-sm shadow-[0_5px_20px_rgba(0,0,0,0.5)] grid grid-cols-1 xl:grid-cols-12 gap-6 items-center">
          
          {/* Status Atual */}
          <div className="xl:col-span-4 shrink-0">
            <p className="text-[10px] text-zinc-500 font-sans uppercase tracking-[0.2em] mb-2">Status Atual</p>
            <p className="text-white font-medieval text-lg flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full transition-colors duration-300 shrink-0 ${consentStatus !== 'Não definido' ? 'bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-zinc-700'}`}></span>
              <span className="truncate w-full">{STATUS_MAP[consentStatus]}</span>
            </p>
          </div>
          
          {/* Controles de Ação Dinâmicos */}
          <div className="xl:col-span-8 flex flex-col sm:flex-row flex-wrap items-center justify-start xl:justify-end gap-3 w-full">
            
            {CONSENT_OPTIONS.map((option) => {
              const isActive = consentStatus === option.key;
              return (
                <button 
                  key={option.key}
                  onClick={() => handleUpdate(option.key)} 
                  disabled={isActive}
                  className={`w-full sm:w-auto px-5 h-11 flex items-center justify-center text-xs font-bold font-medieval tracking-[0.1em] uppercase rounded-sm border transition-all duration-300 ${isActive ? option.activeStyle : option.idleStyle}`}
                  aria-pressed={isActive}
                >
                  {option.label}
                </button>
              );
            })}

            <div className="hidden sm:block w-px h-8 bg-zinc-800 mx-2"></div>

            <button 
              onClick={handleClear} 
              disabled={consentStatus === "Não definido"}
              className={`w-full sm:w-auto px-5 h-11 flex items-center justify-center text-xs font-bold font-medieval tracking-[0.1em] border uppercase rounded-sm transition-all duration-300 ${consentStatus === "Não definido" ? 'border-zinc-800 text-zinc-700 opacity-50 cursor-not-allowed' : 'border-fire/30 text-fire/80 hover:bg-fire hover:text-white hover:border-fire hover:shadow-[0_0_15px_rgba(255,69,0,0.4)]'}`}
              aria-label="Resetar opções de cookies"
            >
              Resetar
            </button>
            
          </div>
        </div>

        {/* Termos e Explicações Técnicas */}
        <section className="space-y-8 text-zinc-400 font-light font-sans text-base leading-relaxed">
          <div>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">1. O que são Cookies?</h2>
            <p>Cookies são pequenos arquivos de texto salvos no seu dispositivo. Na Midgard Forge Studios, usamos essa tecnologia para garantir o funcionamento seguro do site, entender como você interage com nossa plataforma e melhorar a sua experiência.</p>
          </div>

          <div>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">2. Como utilizamos?</h2>
            <ul className="list-disc pl-5 space-y-3 marker:text-fire">
              <li><strong className="text-zinc-200 font-medium">Estritamente Necessários:</strong> Fundamentais para a segurança e o funcionamento básico. Não podem ser desativados nos nossos sistemas.</li>
              <li><strong className="text-zinc-200 font-medium">Desempenho e Análise:</strong> Ajudam a entender o tráfego do site e corrigir erros de forma totalmente anônima.</li>
              <li><strong className="text-zinc-200 font-medium">Funcionais:</strong> Lembram as suas escolhas, como a própria gestão de consentimento deste aviso.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">3. Seus Direitos e Controle</h2>
            <p>Você tem controle total sobre os seus dados. Use o painel acima para verificar, alterar ou apagar as suas preferências a qualquer momento. Ao resetar suas escolhas, o aviso inicial de cookies voltará a aparecer na sua próxima visita.</p>
          </div>
        </section>

      </article>
    </main>
  );
}