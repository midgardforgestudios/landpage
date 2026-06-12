export default function Termos() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-40 pb-24 min-h-screen relative z-10">
      
      {/* Container estilo Documento da Forja */}
      <div className="bg-[#050303]/80 backdrop-blur-md border border-zinc-900 p-8 md:p-12 rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.8)] relative">
        
        {/* Detalhe de luz no topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-fire/50 to-transparent"></div>

        <div className="mb-12 border-b border-zinc-900 pb-8">
          <p className="text-fire font-mono text-xs uppercase tracking-[0.3em] mb-4">Documento Oficial</p>
          <h1 className="text-3xl md:text-5xl font-black text-white font-medieval tracking-tight uppercase">
            Termos de <span className="text-gold">Utilização</span>
          </h1>
          <p className="text-zinc-500 font-sans text-sm mt-4">Última atualização: Junho de 2026</p>
        </div>

        {/* Corpo do Texto */}
        <div className="space-y-8 text-zinc-400 font-sans font-light leading-relaxed text-base md:text-lg">
          
          <div>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar as plataformas, jogos e serviços da Midgard Forge Studios, o utilizador concorda integralmente com os termos e condições descritos neste documento. Caso não concorde, solicitamos que interrompa o uso de nossos serviços imediatamente.</p>
          </div>

          <div>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">2. Propriedade Intelectual</h2>
            <p>Todo o conteúdo presente neste site e em nossos produtos — incluindo artes, códigos, narrativas, modelos 3D, marcas e efeitos visuais — é de propriedade exclusiva da Midgard Forge Studios e protegido pelas leis de direitos autorais. A reprodução não autorizada é estritamente proibida.</p>
          </div>

          <div>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">3. Conduta do Utilizador</h2>
            <p>O utilizador compromete-se a não utilizar os nossos serviços para fins ilegais, distribuição de softwares maliciosos, engenharia reversa ou qualquer ação que comprometa a integridade dos servidores e da comunidade.</p>
          </div>

        </div>
      </div>
    </section>
  );
}