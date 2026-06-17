<div align="center">
  <img src="src/assets/logos/midgard-icon.png" alt="Midgard Forge Studios Logo" width="220" style="border-radius: 16px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(255, 69, 0, 0.2);"/>
  
  <h1 style="margin: 0;">⚔️ Midgard Forge Studios</h1>
  
  <p style="font-size: 1.2rem; font-weight: 600; color: #D4AF37;">O Portal Oficial da Forja</p>
  
  <p style="color: #A1A1AA; max-width: 600px; margin: 0 auto 24px auto;">
    Uma experiência digital imersiva de alta performance, unindo atmosfera de fantasia sombria e engenharia web de ponta.
  </p>

  <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 32px;">
    <img src="https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.0-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD622" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge" alt="Status" />
  </div>
</div>

<br />

> _"Não criamos apenas jogos. Forjamos mundos onde a luz é escassa, os desafios são brutais e a tecnologia é invisível aos olhos, mas sentida em cada interação."_
>
> <div align="right">— <strong>Equipe Midgard Forge Studios</strong></div>

<br />

---

## 📑 Índice de Navegação

- [Visão Geral](#-visão-geral)
- [Design e Identidade Visual](#-design-e-identidade-visual)
- [Recursos de Alta Performance](#-recursos-de-alta-performance)
- [Stack Tecnológica](#-stack-tecnológica)
- [Guia de Inicialização e Deploy](#-guia-de-inicialização-e-deploy)

---

## 👁️ Visão Geral

Fundada em 2011, a **Midgard Forge Studios** é uma desenvolvedora independente especializada em RPGs de sobrevivência e universos de fantasia sombria.

Este repositório contém o código-fonte do nosso portal oficial. Ele não é apenas um site corporativo, mas um **manifesto técnico**. Construído para refletir a atmosfera do nosso principal projeto em desenvolvimento (_Dark Meeting_), o portal utiliza renderização assistida por hardware e física matemática para criar uma navegação que mimetiza a fluidez de um jogo.

---

## 🎨 Design e Identidade Visual

A interface foi inteiramente desenhada com base em HUDs (_Heads-Up Displays_) de RPGs modernos e cinemáticas épicas, garantindo uma imersão contínua.

- 🔥 **Paleta Incandescente:** O contraste absoluto entre o abismo (fundo escuro `#0A0A0A`), o **Fogo Crítico** (`#FF4500`) e o **Ouro Épico** (`#D4AF37`) guia a atenção do usuário e cria hierarquia visual.
- 🐉 **Imersão Ouroboros:** Elementos anatômicos (o dragão de Midgard) rompem as bordas tradicionais dos contêineres, utilizando máscaras radiais e mix-blend modes para emergir da escuridão.
- ✒️ **Tipografia Híbrida:**
  - `Cinzel` (Serifada): Importada do Google Fonts, aplicada em títulos épicos e chamadas de impacto via classe `font-medieval`.
  - `font-sans` (Sans-serif): Pilha de fontes padrão do Tailwind, utilizada em descrições de lore, serviços e textos institucionais para garantir legibilidade.

---

## ⚡ Recursos de Alta Performance

A página reage ativamente à presença do usuário, empregando técnicas de desenvolvimento _AAA_ para garantir performance sem sacrificar a estética:

| Módulo Visual                   | Arquitetura Técnica                                                                                                                                                                                                                        |
| :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🎇 Física de Forja (Canvas)** | No `Background.jsx`, o cursor atua como um martelo. Movimentos geram faíscas dinâmicas via `HTML5 Canvas API` (classes `TearSpark` e `FireCore`), sofrendo forças de gravidade, fricção do ar e _motion blur_ com `requestAnimationFrame`. |
| **💡 Iluminação Magnética**     | Cards de serviços (`MagneticCard`) rastreiam a posição do cursor via `getBoundingClientRect`, gerando um gradiente de luz térmica com renderização local. Desativado em touch via `pointerType === "touch"`.                               |
| **🌀 Parallax Assíncrono**      | Elementos de cenário movimentam-se em taxas diferentes de scroll. Utilizamos `transform: translate3d()` para repassar a carga gráfica para a **GPU**, mantendo 60 FPS estáticos.                                                           |
| **🛡️ Resiliência (Guards)**     | Implementação de `Error Boundaries` e `Page Guards` (HOCs) para proteger rotas e isolar falhas críticas sem colapsar a árvore do DOM.                                                                                                      |

---

## 🛠️ Stack Tecnológica

A infraestrutura foi desenhada para priorizar escalabilidade de código, manutenibilidade e velocidade extrema de entrega (TTFB e FCP).

- **Núcleo:** `React 19` (Hooks, Context e Functional Components).
- **Bundler:** `Vite 8` (HMR instantâneo e compilação otimizada com `@vitejs/plugin-react`).
- **Estilização:** `Tailwind CSS 4` (Utility-first com `@theme` para variáveis CSS customizadas e plugin `@tailwindcss/vite`).
- **Roteamento:** `React Router DOM 7` (SPA sem recarregamento de página).
- **Ícones:** `lucide-react` e `react-icons`.
- **Lint:** `ESLint 10` com plugins `react-hooks` e `react-refresh`.
- **Animações Gráficas:** `Canvas 2D API` (partículas com física no background) e Transições CSS otimizadas com `transform-gpu`.

---

## 🚀 Guia de Inicialização e Deploy

Siga os passos abaixo para executar o projeto na sua máquina local ou fazer deploy no Vercel.

---

### 1. Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) — [Baixe aqui](https://nodejs.org/)
- **Git** — [Baixe aqui](https://git-scm.com/downloads)
- Uma conta no [Vercel](https://vercel.com) (para deploy)

Para verificar se o Node.js está instalado corretamente:

```bash
node --version
npm --version
```

---

### 2. Clonando o Repositório

Abra o terminal no diretório onde deseja salvar o projeto e execute:

```bash
git clone https://github.com/JossMattos/midgard.git
cd midgard
```

---

### 3. Instalando as Dependências

Com o terminal ainda na pasta do projeto (`midgard`), instale todas as dependências:

```bash
npm install
```

Este comando lerá o `package.json` e instalará as seguintes dependências:

**Dependências de produção:**

- `react` e `react-dom` — biblioteca principal
- `react-router-dom` — roteamento SPA
- `tailwindcss` e `@tailwindcss/vite` — estilização utility-first
- `lucide-react` e `react-icons` — bibliotecas de ícones

**Dependências de desenvolvimento:**

- `vite` — bundler e servidor de desenvolvimento
- `@vitejs/plugin-react` — suporte ao React no Vite
- `eslint` e plugins — linting de código
- `@types/react` e `@types/react-dom` — tipos TypeScript (para autocomplete em IDEs)

---

### 4. Abrindo no VS Code (Recomendado)

Após clonar e instalar as dependências, abra o projeto no Visual Studio Code:

```bash
code .
```

Com o projeto aberto, utilize o **terminal integrado** do VS Code (`Ctrl + "`) para executar os comandos abaixo — isso mantém o terminal sincronizado com o diretório do projeto e facilita o acesso aos arquivos.

> 💡 **Extensões recomendadas:**  
> - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) — destaca erros de lint em tempo real  
> - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) — autocomplete das classes Tailwind

---

### 5. Executando em Ambiente de Desenvolvimento

Inicie o servidor de desenvolvimento com HMR (Hot Module Replacement) no terminal integrado do VS Code (ou no terminal do seu sistema):

```bash
npm run dev
```

O Vite iniciará um servidor local, geralmente em `http://localhost:5173`. Abra este endereço no navegador. Qualquer alteração nos arquivos será refletida automaticamente na página.

---

### 6. Build de Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`. Para testar o build localmente:

```bash
npm run preview
```

---

### 7. Lint (Opcional)

Verifique a qualidade do código:

```bash
npm run lint
```

---

### 8. Deploy no Vercel

#### 8.1 Via Vercel CLI

Instale a CLI do Vercel globalmente:

```bash
npm install -g vercel
```

Faça login:

```bash
vercel login
```

No diretório raiz do projeto, execute:

```bash
vercel
```

O Vercel detectará automaticamente que é um projeto Vite/React. Siga as instruções interativas:

- **Set up and deploy?** → `Y`
- **Which scope?** → Selecione sua conta
- **Link to existing project?** → `N` (criar novo)
- **Project name?** → `midgard` (ou o nome desejado)
- **Directory?** → `.` (diretório atual)
- **Override settings?** → `N`

Após o deploy, o Vercel fornecerá uma URL pública (ex: `https://midgard.vercel.app`).

#### 8.2 Via GitHub + Vercel (deploy contínuo)

1. Faça push do repositório para o GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new).
3. Importe o repositório `midgard`.
4. O Vercel detectará automaticamente o framework **Vite** e preencherá:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique em **Deploy**.

A cada novo push no branch principal, o Vercel fará o deploy automaticamente.

---

### 9. Configuração Adicional (Opcional)

#### Variáveis de Ambiente

Se o projeto precisar de variáveis de ambiente, crie um arquivo `.env` na raiz:

```env
VITE_API_URL=https://sua-api.com
```

No Vercel, adicione as mesmas variáveis em **Project Settings > Environment Variables**.

#### Arquivo `vercel.json` (customização)

Caso queira sobrescrever as configurações padrão, crie um `vercel.json` na raiz:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

---

### 10. Comandos Rápidos

| Comando           | Descrição                    |
| ----------------- | ---------------------------- |
| `npm run dev`     | Inicia servidor de dev       |
| `npm run build`   | Gera build de produção       |
| `npm run preview` | Preview do build local       |
| `npm run lint`    | Verifica qualidade do código |
| `vercel`          | Deploy para produção         |
