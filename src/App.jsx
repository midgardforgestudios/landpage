// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Importações das novas páginas legais
import Termos from './pages/Legal/Termos';
import Privacidade from './pages/Legal/Privacidade';
import Cookies from './pages/Legal/Cookies';

import Background from './components/layout/Background';
import ScrollToTop from './components/layout/ScrollToTop';
import CookieConsent from './components/layout/CookieConsent';
import ErrorBoundary from './guards/ErrorBoundary';
import PageGuard from './guards/PageGuard';

export default function App() {
  // Puxa o status de manutenção do arquivo .env
  // A variável precisa ser exatamente VITE_MAINTENANCE_MODE=true para ativar
  const emManutencao = import.meta.env.VITE_MAINTENANCE_MODE === 'true'; 

  return (
    <ErrorBoundary>
      {/* Background posicionado aqui garante que a tela de Erro 
        e a de Manutenção mantenham a imersão visual da Forja.
      */}
      <Background />
      
      <Router>
        {/* ScrollToTop PRECISA ficar dentro do Router para ouvir as mudanças de rota */}
        <ScrollToTop />
        
        <PageGuard isUnderMaintenance={emManutencao}>
          {/* Container principal para empurrar o Footer sempre para o final da página */}
          <div className="flex flex-col min-h-screen relative z-10">
            <Header />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Rotas das páginas legais */}
                <Route path="/termos" element={<Termos />} />
                <Route path="/privacidade" element={<Privacidade />} />
                <Route path="/cookies" element={<Cookies />} />
              </Routes>
            </main>
            
            <Footer />
          </div>
          
          <CookieConsent />
        </PageGuard>
      </Router>
    </ErrorBoundary>
  );
}