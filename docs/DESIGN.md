# Identidade visual

Extraída do site anterior (logo e paleta) com nova tipografia.

## Cores (tokens Tailwind em `src/app/globals.css`)

| Token | Hex | Uso |
| --- | --- | --- |
| `plum-950` | `#2a1323` | Rodapé |
| `plum-900` | `#3d182e` | Cor principal: títulos, botões, seções escuras, `theme-color` |
| `plum-800` / `plum-700` | `#491e3c` / `#5f2d4b` | Hover, gradiente do logo |
| `plum-600` | `#792d43` | Mensagens de erro |
| `plum-50` / `plum-100` | `#f8f1f5` / `#efe3ea` | Fundos de ícone e hover |
| `gold-500` | `#b88a46` | Acento (monograma dourado, marcadores, linhas, botão no CTA) |
| `gold-400` / `gold-600` | `#cba65b` / `#a67a3a` | Eyebrows e hover |
| `ivory` | `#faf7f2` | Fundo padrão |
| `sand` | `#f1ebe1` | Fundo alternado (imprensa) |
| `line` | `#e4dcd0` | Bordas |
| `ink` / `muted` | `#1f171c` / `#6b5d66` | Texto e texto secundário |

Regra: um acento (dourado) por seção; sem gradientes além do logo original.

## Ritmo de seções

O vinho é a cor dominante: header, hero da home, cabeçalho de todas as páginas internas (`PageHeader`), faixa "Como funciona", trajetória no Sobre, bloco "Quando procurar" nas áreas, CTA e rodapé. Entre elas, fundos `ivory`, `white` e `sand` alternam para dar respiro. Nos fundos escuros, títulos em branco, eyebrows e números em `gold-400`, botão principal `gold`.

## Tipografia

- **Fraunces** (variável, eixo `opsz` em 144): títulos `h1`-`h3`, números das etapas, citações.
- **Inter** (variável): corpo, navegação, botões, rótulos.
- Eyebrows: Inter 12px, caixa alta, `tracking-[0.18em]`, dourado.

## Logo

- `public/brand/logo.svg`: ameixa com o gradiente original (fundo claro).
- `public/brand/logo-branco.svg`: texto branco e monograma dourado (fundo escuro).
- `public/brand/monograma.svg` / `monograma-dourado.svg`: só o "F" (favicon, marca d'água no CTA).

## Componentes

`src/components/`: `Header` (fixo, com menu mobile), `Footer`, `ButtonLink` (primary, gold, outline, outline-light, ghost), `SectionHeading`, `ServiceCard`, `Faq` (`<details>` nativo), `Breadcrumbs`, `CtaSection`, `PressSection`, `ProcessSteps`, `FounderSection`, `ContactForm`, `WhatsAppFloat`, `JsonLd`.

Raio padrão: cards `rounded-2xl`, fotos `rounded-3xl`, botões `rounded-full`.
