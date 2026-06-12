<div align="center">
  <img src="src/assets/logos/logo-midgard.jpg" alt="Midgard Forge Studios Logo" width="220" style="border-radius: 16px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(255, 69, 0, 0.2);"/>
  
  <h1 style="margin: 0;">⚔️ Midgard Forge Studios</h1>
  
  <p style="font-size: 1.2rem; font-weight: 600; color: #D4AF37;">O Portal Oficial da Forja</p>
  
  <p style="color: #A1A1AA; max-width: 600px; margin: 0 auto 24px auto;">
    Uma experiência digital imersiva de alta performance, unindo atmosfera de fantasia sombria e engenharia web de ponta.
  </p>

  <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 32px;">
    <img src="https://img.shields.io/badge/React-19.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5.0-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD622" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Status-Em_Desenvolvimento-success?style=for-the-badge" alt="Status" />
  </div>
</div>

<br />

> _"Não criamos apenas jogos. Forjamos mundos onde a luz é escassa, os desafios são brutais e a tecnologia é invisível aos olhos, mas sentida em cada interação."_
>
> <div align="right">— <strong>Equipe Midgard Forge</strong></div>

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

- 🔥 **Paleta Incandescente:** O contraste absoluto entre o abismo (fundo escuro `#050303`), o **Fogo Crítico** (`#FF4500`) e o **Ouro Épico** (`#D4AF37`) guia a atenção do usuário e cria hierarquia visual.
- 🐉 **Imersão Ouroboros:** Elementos anatômicos (o dragão de Midgard) rompem as bordas tradicionais dos contêineres, utilizando máscaras radiais e mix-blend modes para emergir da escuridão.
- ✒️ **Tipografia Híbrida:**
  - `MedievalSharp` (Serifada): Aplicada em títulos épicos e chamadas de impacto.
  - `Inter` (Geométrica): Utilizada para garantir legibilidade impecável nas descrições de lore, serviços e textos institucionais.

---

## ⚡ Recursos de Alta Performance

A página reage ativamente à presença do usuário, empregando técnicas de desenvolvimento _AAA_ para garantir performance sem sacrificar a estética:

| Módulo Visual                   | Arquitetura Técnica                                                                                                                                                              |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🎇 Física de Forja (Canvas)** | O cursor atua como um martelo. Movimentos geram faíscas dinâmicas renderizadas via `HTML5 Canvas API`, sofrendo forças de gravidade, fricção do ar e _motion blur_.              |
| **💡 Iluminação Magnética**     | Cards de serviços e HUDs de projetos rastreiam a posição do cursor (`getBoundingClientRect`), gerando um gradiente de luz térmica com renderização local.                        |
| **🌀 Parallax Assíncrono**      | Elementos de cenário movimentam-se em taxas diferentes de scroll. Utilizamos `transform: translate3d()` para repassar a carga gráfica para a **GPU**, mantendo 60 FPS estáticos. |
| **🛡️ Resiliência (Guards)**     | Implementação de `Error Boundaries` e `Page Guards` (HOCs) para proteger rotas e isolar falhas críticas sem colapsar a árvore do DOM.                                            |

---

## 🛠️ Stack Tecnológica

A infraestrutura foi desenhada para priorizar escalabilidade de código, manutenibilidade e velocidade extrema de entrega (TTFB e FCP).

- **Núcleo:** `React 19` (Hooks, Context e Functional Components).
- **Empacotador e Build:** `Vite` (HMR instantâneo e compilação otimizada).
- **Estilização:** `Tailwind CSS` (Utility-first com injeção de variáveis CSS globais).
- **Animações Gráficas:** `Canvas 2D API` e Transições CSS de baixo custo.
- **Roteamento:** `React Router DOM` (SPA sem recarregamento de página).

---

## 🚀 Guia de Inicialização e Deploy

Siga os passos abaixo para executar o ecossistema na sua máquina local ou prepará-lo para produção.

### 1. Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema operacional.

### 2. Clonando o Repositório

Abra o terminal e execute:

```bash
git clone [https://github.com/JossMattos/midgard.git]
cd midgard-forge
```
