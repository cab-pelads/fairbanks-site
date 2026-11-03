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

O vinho é acento, não fundo dominante. Fundos claros (`ivory`, `white`, `sand`) ocupam a maior parte da página. Blocos escuros: apenas o bloco da fundadora na home, o card lateral de contato nas páginas de área e de post, a lista "para quem é o escritório" no Sobre, a chamada para contato fundida ao rodapé e o rodapé. Header claro com logo vinho. Cabeçalho das páginas internas (`PageHeader`) claro, com breadcrumbs, título em Fraunces e um filete dourado.

## Tipografia por nível

Fraunces só em `h1`, `h2` e números de etapa. Títulos de card, `h3` e rótulos em Inter semibold. Isso evita o aspecto fino da serifa em tamanhos pequenos.
