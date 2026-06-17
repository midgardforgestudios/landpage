const CONTACT_OPTIONS = [
  {
    title: "Parcerias",
    description:
      "Conecte sua marca a projetos digitais, jogos e experiências criativas.",
  },
  {
    title: "Projetos",
    description:
      "Compartilhe ideias para desenvolvimento de jogos, assets e soluções digitais.",
  },
  {
    title: "Oportunidades",
    description:
      "Acompanhe possibilidades de colaboração com a MidGard Forge Studios.",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contato"
      // UX MOBILE: Reduzido o padding vertical no mobile para não gerar rolagens vazias
      className="py-24 lg:py-32 px-6 bg-transparent border-t border-zinc-900/50"
      style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-16">
          <p className="text-fire font-bold tracking-[0.3em] text-xs lg:text-sm mb-4 uppercase opacity-90">
            Fale Conosco
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white font-medieval tracking-tight">
            Entre na Forja
          </h2>

          <div className="w-12 h-[2px] bg-fire mt-4 lg:mt-5 opacity-80" />
        </div>

        <p className="text-zinc-400 font-light leading-relaxed text-base md:text-lg font-sans max-w-2xl mb-12 lg:mb-16">
          A MidGard Forge Studios está construindo jogos, experiências digitais
          e soluções criativas. Entre em contato para parcerias, projetos ou
          novas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {CONTACT_OPTIONS.map((option) => (
            <div
              key={option.title}
              tabIndex={0} // Permite receber foco de toque no celular
              // PERFORMANCE E UX: Adicionado active states para feedback tátil perfeito
              className="relative p-6 lg:p-8 border border-zinc-800/80 bg-zinc-950/30 hover:bg-zinc-900/40 hover:border-fire/40 active:border-fire/60 active:bg-zinc-900/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition duration-300 group rounded-sm overflow-hidden h-full transform-gpu will-change-transform cursor-default sm:cursor-auto"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="relative z-10">
                {/* group-active para mudar a cor instantaneamente no toque */}
                <h3 className="text-lg lg:text-xl font-medieval text-white mb-3 group-hover:text-gold group-active:text-gold transition-colors duration-300">
                  {option.title}
                </h3>

                <p className="text-sm lg:text-base text-zinc-500 font-sans leading-relaxed font-light group-hover:text-zinc-400 transition-colors duration-300">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 lg:mt-16">
          <a
            href="mailto:midgardforgestudios@gmail.com"
            // UX MOBILE: active:bg-fire e active:text-black adicionados para o botão acender no toque
            className="inline-block px-8 py-4 border border-zinc-800 bg-zinc-950/40 text-white font-medieval text-sm lg:text-base tracking-widest hover:bg-fire hover:text-black hover:border-fire hover:-translate-y-0.5 active:translate-y-0 active:bg-fire active:text-black active:border-fire active:scale-[0.98] hover:shadow-lg hover:shadow-fire/10 active:shadow-fire/30 transition duration-300 rounded-sm transform-gpu will-change-transform"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
}