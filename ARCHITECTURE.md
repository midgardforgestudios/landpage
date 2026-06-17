# 🏛️ Arquitetura e Engenharia de Software — Midgard Forge Studios

Este documento define os padrões arquiteturais, a topologia do projeto e as diretrizes de manutenção do frontend da Midgard Forge Studios. O objetivo é fornecer integração rápida para novos desenvolvedores e garantir que a base de código permaneça escalável, performática e de fácil manutenção.

---

## 1. Visão Geral do Sistema

A aplicação é uma **Single Page Application (SPA)** construída com **React 19** e empacotada via **Vite**. A arquitetura segue o princípio de **Separation of Concerns (Separação de Conceitos)**, dividindo responsabilidades entre roteamento, layout global, seções de conteúdo e tratamento de erros.

- **Linguagem/Framework:** JavaScript (ES6+) / React
- **Estilização:** Tailwind CSS (Utility-first) + CSS Nativo (Variáveis e Animações)
- **Engine Gráfica:** HTML5 Canvas API (para partículas e física)
- **Roteamento:** React Router DOM

---

## 2. Topologia de Diretórios

A estrutura de pastas foi desenhada para suportar escalabilidade horizontal, onde cada módulo tem um escopo de responsabilidade estrito.

```text
src/
├── App.jsx           # Árvore de rotas e injeção de provedores globais.
├── index.css         # Reset global e injeção do Tailwind.
├── main.jsx          # Entry point de montagem no DOM.
├── assets/           # Ativos estáticos brutos.
│   ├── img/          # Imagens e ilustrações (SVGs, WebP).
│   └── logos/        # Logotipos e variações da marca (SVG, PNG).
├── components/       # Módulos reutilizáveis e lógicos.
│   ├── layout/       # Componentes persistentes de infraestrutura (Header, Footer, Background, etc.).
│   └── sections/     # Blocos autônomos de UI que compõem as views principais.
├── guards/           # Middlewares e High-Order Components (HOCs) de proteção.
└── pages/            # Componentes de nível de Rota (Views).
    ├── Legal/        # Documentos de conformidade isolados (Cookies, Termos, Privacidade).
    └── Home.jsx      # View principal (orquestradora das Sections).
```

---

# 3. Arquitetura da Landing Page

A Landing Page da Midgard Forge Studios foi projetada seguindo uma arquitetura baseada em **Componentes Modulares**, onde cada seção possui responsabilidade única e pode evoluir de forma independente sem impactar o restante da aplicação.

A composição da página principal segue o padrão **Section-Based Architecture**, amplamente utilizado em aplicações modernas desenvolvidas com React, permitindo reutilização, manutenção simplificada e melhor organização do código.

## Estrutura Hierárquica

```text
App.jsx (Orquestrador Global)
│
├── Background                    # Ambientação visual (partículas)
├── Router (BrowserRouter)
│   ├── ScrollToTop               # Reset de scroll ao navegar
│   ├── PageGuard                 # Bloqueio condicional (manutenção)
│   │   ├── Header                # Navegação principal
│   │   ├── <Routes>
│   │   │   ├── Home.jsx          # View raiz (orquestrador de seções)
│   │   │   │   ├── Hero
│   │   │   │   ├── AboutSection
│   │   │   │   ├── Services
│   │   │   │   └── ContactSection
│   │   │   ├── Termos
│   │   │   ├── Privacidade
│   │   │   └── Cookies
│   │   └── Footer                # Rodapé institucional
│   └── CookieConsent             # Banner de cookies
└── ErrorBoundary                 # Isolamento de falhas
```

A composição segue duas camadas:

- **`App.jsx`** atua como **Orquestrador Global**, responsável por montar a infraestrutura persistente (roteador, header, footer, background, guards) e definir as rotas da aplicação.
- **`Home.jsx`** atua como **Orquestrador de Seções**, responsável apenas por montar a sequência de blocos de conteúdo da landing page. Ela não gerencia Header, Footer ou Background — esses são injetados por `App.jsx`.

---

## 3.1 Hero Section (Hero.jsx)

A Hero Section representa o ponto inicial de contato entre o usuário e a identidade da Midgard Forge Studios.

### Responsabilidades

- Apresentação da marca.
- Exibição da descrição institucional e tags de posicionamento.
- Conversão inicial do visitante através de Call-To-Action (CTA).
- Fortalecimento da identidade visual do estúdio.

### Conteúdo

- Logotipo principal (`midgard-logo.svg`).
- Descrição institucional: "Somos um estúdio independente focado no desenvolvimento de jogos e produtos digitais."
- Tags de posicionamento: `Criatividade | Inovação | Tecnologia`
- Efeito visual **Ouroboros**: três elementos de dragão (cabeça, pescoço, cauda) em SVG com parallax assíncrono via `transform: translate3d()` e máscaras radiais.
- Partículas de fagulha (`forgeSparks`) animadas em CSS com cores ouro e laranja.
- Barra de status inferior com indicadores: **Fundação 2011**, **Projeto Destaque: Dark Meeting**, **Foco: Survivor RPG**.
- Botão CTA (visível apenas em desktop):

> "Entrar na Forja" → ancora para `#contato`

### Objetivo Estratégico

Capturar a atenção do usuário nos primeiros segundos de navegação através de imersão visual (dragões, partículas, parallax) e direcioná-lo para a jornada principal da plataforma.

---

## 3.2 Quem Somos (AboutSection.jsx)

Módulo responsável pela apresentação institucional da empresa.

### Responsabilidades

- Apresentar a trajetória da Midgard Forge Studios.
- Comunicar missão, visão e valores.
- Gerar credibilidade e confiança para visitantes, parceiros e potenciais clientes.

### Estrutura Interna

#### História

Apresentação cronológica da evolução da empresa desde 2011, destacando sua transição do desenvolvimento independente para a criação de soluções digitais em escala global.

#### Missão e Visão

Exibição em painéis com efeito Glassmorphism (Backdrop Blur), enfatizando:

- Posicionamento estratégico.
- Objetivos de longo prazo.
- Direcionamento corporativo.

#### Valores

Os pilares institucionais são apresentados em cards interativos:

1. Excelência
2. Dedicação
3. Inovação
4. Transparência
5. Comunidade

Cada valor utiliza elementos visuais iluminados para reforçar sua importância dentro da cultura organizacional.

---

## 3.3 Fale Conosco (ContactSection.jsx)

Seção destinada ao contato institucional e abertura de canais de comunicação.

### Responsabilidades

- Disponibilizar canais de contato para parcerias, projetos e oportunidades.
- Facilitar a comunicação direta entre visitantes e o estúdio.
- Reforçar a abertura da empresa para novas colaborações.

### Canais Disponíveis

- **Parcerias** — Conexão de marcas a projetos digitais, jogos e experiências criativas.
- **Projetos** — Submissão de ideias para desenvolvimento de jogos, assets e soluções digitais.
- **Oportunidades** — Colaboração com a Midgard Forge Studios.

### Implementação

Os canais são apresentados em uma grade responsiva de cards com efeito hover, seguidas por um CTA central que abre o cliente de e-mail padrão do usuário.

---

## 3.4 Nossos Serviços (Services.jsx)

Seção destinada à divulgação das áreas de atuação da empresa.

### Responsabilidades

- Demonstrar expertise técnica.
- Apresentar soluções oferecidas ao mercado.
- Converter visitantes em potenciais clientes ou parceiros.

### Serviços Disponíveis

- **Desenvolvimento de Projetos** — Apoio ao desenvolvimento de jogos e projetos digitais.
- **Character Design** — Criação e desenvolvimento de personagens.
- **Modelagem 3D** — Produção de modelos para jogos, animações e projetos digitais.
- **Animação** — Criação de animações para personagens, cenários e conteúdos digitais.
- **Assets** — Desenvolvimento de recursos digitais para projetos e produções.
- **Produção Visual** — Efeitos visuais (VFX), motion graphics e conteúdos produzidos com After Effects.
- **Ambientação** — Criação de cenários, universos, documentação criativa e conteúdos para projetos.
- **Suporte à Produção** — Colaboração com estúdios e equipes em diferentes etapas do desenvolvimento.

### Implementação

Os serviços são apresentados em uma grade responsiva (`grid-cols-1 sm:2 lg:3 xl:4`) utilizando o sub-componente `MagneticCard`, que implementa **Iluminação Magnética**: um gradiente radial acompanha a posição do cursor via `onMouseMove`/`getBoundingClientRect`, criando um efeito de luz térmica local. Em dispositivos touch, o efeito é desativado automaticamente via `pointerType === "touch"`.

---

## 3.5 Componentes Estruturais Globais

Componentes persistentes compartilhados por toda a aplicação.

### Background (Background.jsx)

Responsável pelos elementos visuais de ambientação.

#### Funções

- Renderização de partículas.
- Efeitos atmosféricos.
- Elementos de profundidade visual.
- Reforço da identidade visual da marca.

---

### Header (Header.jsx)

Componente de navegação principal.

#### Responsabilidades

- Navegação entre seções.
- Exibição da identidade visual.
- Controle de acessibilidade e experiência do usuário.

---

### Footer (Footer.jsx)

Componente institucional persistente.

#### Responsabilidades

- Informações corporativas.
- Direitos autorais.
- Links complementares.
- Contatos e redes oficiais.

---

### Cookie Consent (CookieConsent.jsx)

Banner de consentimento de cookies.

#### Responsabilidades

- Notificação sobre uso de cookies.
- Links para a política de privacidade.
- Controle de aceitação do usuário.

---

### Scroll to Top (ScrollToTop.jsx)

Utilitário de navegação.

#### Responsabilidades

- Reset automático do scroll ao navegar entre rotas.
- Garantia de consistência na experiência de navegação SPA.

---

### Maintenance (Maintenance.jsx)

Componente de manutenção.

#### Responsabilidades

- Exibição de aviso quando o site está em manutenção.
- Bloqueio de acesso a rotas durante janelas de manutenção.

---

## 3.6 Fluxo de Navegação

A experiência do usuário segue uma progressão narrativa planejada:

```text
Hero
 ↓
Quem Somos (AboutSection)
 ↓
Nossos Serviços (Services)
 ↓
Fale Conosco (ContactSection)
 ↓
Footer
```
