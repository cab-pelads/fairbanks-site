# Fairbanks Advocacia: site institucional

Site estático da **Fairbanks Advocacia** (Dra. Cristiane Fairbanks, OAB/SP 274.480), construído com **Next.js 16 (App Router, export estático)**, **React 19** e **Tailwind CSS 4**.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home: hero, 12 áreas de atuação, fundadora, método de atendimento, imprensa, FAQ, CTA |
| `/sobre/` | Perfil da Dra. Cristiane Fairbanks, comissões da OAB/SP, publicações |
| `/servicos/` | Índice das áreas de atuação agrupadas por categoria |
| `/servicos/<slug>/` | Uma página por área (12), com resposta direta, seções em formato pergunta, tabela/listas e FAQ |
| `/contato/` | Canais, endereço, horário, formulário (WhatsApp/e-mail) e mapa |

Arquivos de indexação gerados automaticamente: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `opengraph-image`, `llms.txt`, `humans.txt`.

## Rodando localmente

```bash
pnpm install
cp .env.example .env.local   # ajuste a URL pública e, se quiser, GA4 / Search Console
pnpm dev                     # http://localhost:3000
pnpm build                   # gera a pasta out/ (site estático)
npx serve out                # testa o build
```

## Deploy

O build gera HTML estático em `out/`. Pode ser publicado em qualquer hospedagem estática
(Cloudflare Pages, Vercel, Netlify, GitHub Pages, servidor Nginx/Apache):

- **Comando de build:** `pnpm build`
- **Diretório de saída:** `out`
- **Variáveis:** `NEXT_PUBLIC_SITE_URL=https://fairbanksadvocacia.com.br`

Como as URLs usam barra final (`trailingSlash: true`), configure a hospedagem para servir
`pasta/index.html` (padrão em todas as citadas).

## Onde editar o conteúdo

- `src/lib/site.ts`: nome, telefone, WhatsApp, e-mail, endereço, horário, redes.
- `src/data/services.ts`: as 12 áreas de atuação (título, meta tags, texto, FAQ, áreas relacionadas).
- `src/data/press.ts`: itens de imprensa e publicações.
- `src/app/page.tsx`, `src/app/sobre/page.tsx`, `src/app/contato/page.tsx`: textos das páginas fixas.
- `public/brand/`: logos (SVG) nas variantes ameixa, branca e monograma.
- `public/images/`: fotos.

## Documentação

- [`docs/SEO.md`](docs/SEO.md): o que foi implementado de SEO/AEO/GEO e checklist de indexação (Search Console, Bing, GA4).
- [`docs/DESIGN.md`](docs/DESIGN.md): identidade visual (cores, tipografia, componentes).
