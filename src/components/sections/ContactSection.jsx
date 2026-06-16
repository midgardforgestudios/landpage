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
      className="py-32 px-6 bg-transparent border-t border-zinc-900/50"
      style={{ contentVisibility: "auto", containIntrinsicSize: "400px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-fire font-bold tracking-[0.3em] text-sm mb-4 uppercase">
            Fale Conosco
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white font-medieval tracking-tight">
            Entre na Forja
          </h2>

          <div className="w-12 h-[2px] bg-fire mt-4" />
        </div>

        <p className="text-zinc-400 font-light leading-relaxed text-base md:text-lg font-sans max-w-2xl mb-16">
          A MidGard Forge Studios está construindo jogos, experiências digitais
          e soluções criativas. Entre em contato para parcerias, projetos ou
          novas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTACT_OPTIONS.map((option) => (
            <div
              key={option.title}
              className="relative p-8 border border-zinc-900 bg-zinc-950/40 hover:border-fire/40 transition-all duration-500 group rounded-xs overflow-hidden h-full"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-medieval text-white mb-3 group-hover:text-gold transition-colors">
                  {option.title}
                </h3>

                <p className="text-base text-zinc-500 font-sans leading-relaxed font-light">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="mailto:midgardforgestudios@gmail.com"
            className="inline-block px-8 py-4 border border-zinc-900 bg-zinc-950/40 text-white font-medieval text-base tracking-wider hover:bg-fire hover:text-black hover:border-fire transition-all duration-500 rounded-xs"
          >
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
}
