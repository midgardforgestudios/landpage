import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  // Função central que verifica se tem algo salvo
  const checkVisibility = () => {
    const hasConsent = localStorage.getItem("midgard_cookie_consent");
    setVisible(!hasConsent); // Se não tem consentimento, fica visível (true)
  };

  useEffect(() => {
    checkVisibility(); // Checa ao abrir o site
    window.addEventListener("cookies_updated", checkVisibility); // Fica escutando mudanças
    return () => window.removeEventListener("cookies_updated", checkVisibility);
  }, []);

  // Salva no navegador e grita para o site todo: "ATUALIZOU!"
  const saveConsent = (status) => {
    localStorage.setItem("midgard_cookie_consent", status);
    window.dispatchEvent(new Event("cookies_updated"));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#050303]/95 backdrop-blur-md border-t border-fire/30 p-4 shadow-[0_-10px_30px_rgba(255,69,0,0.1)]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <p className="text-sm text-zinc-400 flex-1 font-sans font-light leading-relaxed">
          A Forja utiliza cookies essenciais para manter o fogo aceso e melhorar a sua experiência. 
          Gerencie suas opções ou leia a nossa{" "}
          <Link to="/cookies" className="text-fire font-medium underline decoration-fire/40 hover:text-gold hover:decoration-gold transition-colors duration-300">
            Política de Cookies
          </Link>.
        </p>
        <div className="flex flex-wrap justify-center gap-3 shrink-0">
          <button 
            onClick={() => saveConsent("rejected")} 
            className="px-5 py-2.5 text-xs text-zinc-400 border border-zinc-800 rounded-sm font-medieval tracking-widest hover:bg-zinc-900 hover:text-white transition-all uppercase"
          >
            Recusar
          </button>
          <button 
            onClick={() => saveConsent("essential")} 
            className="px-5 py-2.5 text-xs text-gold border border-gold/40 rounded-sm font-medieval tracking-widest hover:bg-gold/10 transition-all uppercase"
          >
            Essenciais
          </button>
          <button 
            onClick={() => saveConsent("all")} 
            className="px-5 py-2.5 text-xs font-bold font-medieval tracking-widest bg-fire text-white rounded-sm hover:bg-gold hover:text-black shadow-[0_0_15px_rgba(255,69,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all uppercase"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
}