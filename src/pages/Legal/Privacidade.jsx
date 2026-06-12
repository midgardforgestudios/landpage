// src/pages/Legal/Privacidade.jsx

export default function Privacidade() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-40 pb-24 min-h-screen relative z-10">
      <article className="bg-[#050303]/90 backdrop-blur-md border border-zinc-900 p-8 md:p-12 rounded-sm shadow-2xl relative">
        
        {/* Detalhe de luz linear no topo do pergaminho */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-fire/40 to-transparent"></div>

        {/* Cabeçalho Oficial */}
        <header className="mb-10 border-b border-zinc-900 pb-6 text-center sm:text-left">
          <p className="text-fire font-mono text-xs uppercase tracking-[0.3em] mb-2">Segurança e Proteção de Dados</p>
          <h1 className="text-3xl md:text-5xl font-black text-white font-medieval uppercase">
            Política de <span className="text-gold">Privacidade</span>
          </h1>
          <p className="text-zinc-500 font-sans text-xs mt-4 uppercase tracking-widest">Atualizado em: Junho de 2026</p>
        </header>

        {/* Corpo do Texto Legal */}
        <div className="space-y-8 text-zinc-400 font-light font-sans text-base leading-relaxed">
          
          <section>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">1. Compromisso com a Segurança</h2>
            <p>
              Na Midgard Forge Studios, a privacidade e a segurança dos dados dos nossos usuários são prioridades absolutas. 
              Este documento esclarece de forma transparente como coletamos, utilizamos, armazenamos e protegemos as suas 
              informações ao interagir com o nosso site, jogos e serviços ecossistêmicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">2. Coleta de Informações</h2>
            <p className="mb-3">
              A coleta de dados é realizada de forma estritamente necessária para fornecer estabilidade e segurança. Dividimos essas informações em:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-fire">
              <li><strong className="text-zinc-200 font-medium">Dados de Navegação:</strong> Registros automáticos de servidor (endereço IP, tipo de navegador e páginas acessadas) para manutenção preventiva e auditoria de tráfego.</li>
              <li><strong className="text-zinc-200 font-medium">Preferências de Interface:</strong> Registros locais no seu dispositivo (como as escolhas de consentimento de cookies) para garantir que suas decisões de privacidade sejam respeitadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">3. Uso e Finalidade dos Dados</h2>
            <p className="mb-3">
              Quaisquer dados coletados possuem finalidade técnica direta e legítima, sendo aplicados para:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-fire">
              <li>Garantir a integridade física e a segurança cibernética da nossa infraestrutura.</li>
              <li>Otimizar o tempo de carregamento e a performance geral do site.</li>
              <li>Desenvolver e calibrar novas experiências digitais com base no comportamento técnico geral da nossa comunidade.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">4. Compartilhamento de Informações</h2>
            <p>
              A Midgard Forge Studios adota uma política rigorosa de não comercialização de dados. Suas informações nunca serão 
              vendidas a terceiros. O compartilhamento só ocorrerá mediante obrigações legais rígidas ou com provedores de 
              infraestrutura essenciais e homologados (como os nossos servidores seguros de hospedagem), que operam sob 
              contratos de sigilo absoluto.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-medieval uppercase tracking-widest mb-3">5. Seus Direitos Legais</h2>
            <p>
              De acordo com as legislações vigentes de proteção de dados (LGPD), você possui o direito de consultar, retificar 
              ou solicitar a exclusão de suas informações a qualquer momento. Para dados salvos de forma automatizada no seu 
              navegador, a limpeza completa pode ser realizada diretamente na nossa página de controle de cookies.
            </p>
          </section>

        </div>

      </article>
    </main>
  );
}