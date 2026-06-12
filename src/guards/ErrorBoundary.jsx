// src/guards/ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-4 bg-dark-bg/80 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-fire font-medieval mb-4 drop-shadow-[0_0_15px_rgba(255,69,0,0.5)] uppercase">A Forja Falhou</h2>
          <p className="text-zinc-400 font-sans tracking-wide text-center max-w-md">
            As chamas saíram de controle e ocorreu um erro inesperado. Tente recarregar a página para restaurar o equilíbrio.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-8 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black font-medieval uppercase tracking-widest transition-all duration-300"
          >
            Recarregar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}