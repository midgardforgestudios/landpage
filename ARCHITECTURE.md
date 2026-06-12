# 🏛️ Arquitetura e Engenharia de Software — Midgard Forge

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
├── assets/           # Ativos estáticos brutos (imagens, ícones, logos).
├── components/       # Módulos reutilizáveis e lógicos.
│   ├── guards/       # Middlewares e High-Order Components (HOCs) de proteção.
│   ├── layout/       # Componentes persistentes de infraestrutura (Header, Footer, Background).
│   └── sections/     # Blocos autônomos de UI que compõem as views principais.
├── pages/            # Componentes de nível de Rota (Views).
│   ├── Institucional/# Páginas corporativas futuras.
│   ├── Legal/        # Documentos de conformidade isolados (Termos, Privacidade).
│   └── Home.jsx      # View principal (orquestradora das Sections).
├── App.jsx           # Árvore de rotas e injeção de provedores globais.
├── index.css         # Reset global e injeção do Tailwind.
└── main.jsx          # Entry point de montagem no DOM.
```

---

# 3. Arquitetura da Landing Page

A Landing Page da Midgard Forge Studios foi projetada seguindo uma arquitetura baseada em **Componentes Modulares**, onde cada seção possui responsabilidade única e pode evoluir de forma independente sem impactar o restante da aplicação.

A composição da página principal segue o padrão **Section-Based Architecture**, amplamente utilizado em aplicações modernas desenvolvidas com React, permitindo reutilização, manutenção simplificada e melhor organização do código.

## Estrutura Hierárquica

```text
Home.jsx
│
├── Background
├── Header
│
├── Hero
├── AboutSection
├── GameFeatured
├── Services
│
└── Footer
```

A página principal (`Home.jsx`) atua apenas como um **Orquestrador de Componentes**, sendo responsável por montar a sequência das seções e controlar a experiência de navegação da aplicação.

---

## 3.1 Hero Section (Hero.jsx)

A Hero Section representa o ponto inicial de contato entre o usuário e a identidade da Midgard Forge Studios.

### Responsabilidades

- Apresentação da marca.
- Exibição do slogan institucional.
- Conversão inicial do visitante através de Call-To-Action (CTA).
- Fortalecimento da identidade visual do estúdio.

### Conteúdo

- Logotipo principal.
- Slogan institucional:

> "Sobreviva. Proteja. Reconstrua."

- Botão principal de ação:

> "Entrar na Forja"

### Objetivo Estratégico

Capturar a atenção do usuário nos primeiros segundos de navegação e direcioná-lo para a jornada principal da plataforma.

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

## 3.3 Projeto em Destaque (GameFeatured.jsx)

Seção dedicada à apresentação do principal produto proprietário da Midgard Forge Studios.

### Projeto

**Dark Meeting**

### Responsabilidades

- Apresentar o universo do jogo.
- Demonstrar a capacidade técnica e criativa do estúdio.
- Funcionar como vitrine principal do portfólio.

### Conteúdo

- Título estilizado com efeitos inspirados em metal forjado e brasas incandescentes.
- Lore oficial do universo.
- Sinopse narrativa.
- Destaques de gameplay.

### Conceito

```text
Gênero: Survivor RPG
Ambientação: Pós-apocalíptica
Tema: Sobrevivência contra hordas de mortos-vivos
```

---

## 3.4 Nossos Serviços (Services.jsx)

Seção destinada à divulgação das áreas de atuação da empresa.

### Responsabilidades

- Demonstrar expertise técnica.
- Apresentar soluções oferecidas ao mercado.
- Converter visitantes em potenciais clientes ou parceiros.

### Serviços Disponíveis

- Desenvolvimento de Jogos
- Produção de Assets Digitais
- Efeitos Visuais (VFX)
- Integração com Inteligência Artificial
- Consultoria Técnica Especializada

### Implementação

Os serviços são apresentados em uma grade responsiva baseada em cards reutilizáveis, garantindo adaptação para dispositivos desktop, tablet e mobile.

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

### Header

Componente de navegação principal.

#### Responsabilidades

- Navegação entre seções.
- Exibição da identidade visual.
- Controle de acessibilidade e experiência do usuário.

---

### Footer

Componente institucional persistente.

#### Responsabilidades

- Informações corporativas.
- Direitos autorais.
- Links complementares.
- Contatos e redes oficiais.

---

## 3.6 Fluxo de Navegação

A experiência do usuário segue uma progressão narrativa planejada:

```text
Hero
 ↓
Quem Somos
 ↓
Dark Meeting
 ↓
Nossos Serviços
 ↓
Footer
```
