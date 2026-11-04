# SEO, AEO, GEO e indexação

## O que está implementado

### SEO técnico
- HTML 100% estático (Next.js `output: "export"`), uma página por URL, sem JavaScript obrigatório para ler o conteúdo.
- `<title>` e `meta description` únicos por página, com keyword no início (ex.: "Advogada para Inventário em São Paulo").
- `rel="canonical"` absoluto em todas as páginas; URLs limpas com barra final.
- Open Graph + Twitter Card com imagem 1200x630 gerada em build (`/opengraph-image`).
- `sitemap.xml` e `robots.txt` gerados a partir das rotas (`src/app/sitemap.ts`, `src/app/robots.ts`).
- `manifest.webmanifest`, ícones 32/192/512 e Apple touch icon.
- Hierarquia de headings: 1 `h1` por página, `h2` em formato de pergunta nas páginas de serviço.
- Breadcrumbs visuais e em JSON-LD.
- Links internos: cards na home e no índice, "áreas relacionadas" em cada serviço, rodapé com todas as áreas.
- Imagens com `alt` descritivo, dimensões declaradas (sem CLS), WebP, `priority` apenas no hero.
- Fontes auto-hospedadas (Libre Baskerville + Inter via Fontsource), sem requisições ao Google Fonts.
- `lang="pt-BR"`, `theme-color`, `viewport` e detecção de telefone/endereço.

### Dados estruturados (JSON-LD, `@graph`)
- Global (layout): `LegalService`+`Organization` (endereço, horário, telefone, `sameAs`, `knowsAbout`), `Person` (Dra. Cristiane: OAB, formação, `sameAs` Lattes/Instagram), `WebSite`.
- Home: `WebPage`, `ItemList` das áreas, `FAQPage`.
- Sobre: `ProfilePage` com `mainEntity` apontando para a `Person`.
- Serviços (índice): `CollectionPage`, `ItemList`, `BreadcrumbList`.
- Cada serviço: `WebPage`, `Service` (provider = escritório), `FAQPage`, `BreadcrumbList`.
- Contato: `ContactPage`, `BreadcrumbList`.
- Blog: `CollectionPage` com `hasPart`; cada publicação `BlogPosting` (ou `NewsArticle` para notícias) com `author`, `publisher`, `datePublished`, `dateModified`, `wordCount`, `about` e `FAQPage` quando houver FAQ.

Validar em: https://search.google.com/test/rich-results e https://validator.schema.org/

### AEO / GEO / AIO (ser citado por ChatGPT, Perplexity, Gemini, AI Overviews)
- Resposta direta nos 2 primeiros parágrafos de cada página de serviço.
- Seções `h2` formuladas como perguntas reais ("Qual é o prazo para abrir o inventário?"), cada uma autocontida.
- Listas, passos numerados e tabela (regimes de bens) em HTML semântico.
- Fatos verificáveis com atribuição inline (artigos do Código Civil, CPC, leis, Resolução CNJ 35).
- FAQ por página com schema `FAQPage`.
- Entidades explícitas: nome, OAB, formação, endereço, cidade, horário.
- `public/llms.txt` com resumo e índice de URLs para rastreadores de IA.
- Blog com artigos em formato pergunta-resposta, selo "Escrito por", data e tempo de leitura, e feed RSS (`/feed.xml`).
- `robots.txt` liberando GPTBot, ClaudeBot, PerplexityBot, Google-Extended etc.
- Texto sem travessões e sem muletas de IA (checado com grep).

## Checklist de indexação (fazer após o deploy)

1. **DNS e HTTPS** apontando para a hospedagem; confirmar `https://fairbanksadvocacia.com.br/` (sem `www`) como canônico e redirecionar `www` → raiz (301).
2. **Google Search Console**
   - Adicionar propriedade de domínio (`fairbanksadvocacia.com.br`) via DNS, ou propriedade de URL com o meta tag: colocar o código em `NEXT_PUBLIC_GSC_VERIFICATION` e rebuildar.
   - Enviar `https://fairbanksadvocacia.com.br/sitemap.xml`.
   - Inspecionar e pedir indexação da home, `/servicos/` e das 12 páginas de serviço.
   - Como o site antigo (WordPress) tinha URLs diferentes (ex.: `/inventario-e-sucessoes2/`), criar **redirecionamentos 301** na hospedagem. Mapa sugerido:

     | URL antiga | Nova |
     | --- | --- |
     | `/direito-de-familia2/` | `/servicos/direito-de-familia/` |
     | `/casamento-uniao-estavel-regime-de-bens-e-pacto-antenupcial2/` | `/servicos/casamento-uniao-estavel-regime-de-bens-pacto-antenupcial/` |
     | `/divorcio-e-partilha2/` | `/servicos/divorcio-e-partilha/` |
     | `/guarda-e-regime-de-convivencia-parental2/` | `/servicos/guarda-e-convivencia-parental/` |
     | `/alimentos2/` | `/servicos/pensao-alimenticia/` |
     | `/alienacao-parental-e-abandono-afetivo2/` | `/servicos/alienacao-parental-e-abandono-afetivo/` |
     | `/direito-dos-animais-animais-de-servico-e-guarda-pet-em-caso-de-divorcio2/` | `/servicos/direito-dos-animais-e-guarda-pet/` |
     | `/inventario-e-sucessoes2/` | `/servicos/inventario-e-sucessoes/` |
     | `/planejamento-sucessorio2/` | `/servicos/planejamento-sucessorio/` |
     | `/direito-imobiliario2/` | `/servicos/direito-imobiliario/` |
     | `/locacoes-de-imoveis2/` | `/servicos/locacao-de-imoveis/` |
     | `/direito-educacional2/` | `/servicos/direito-educacional/` |
     | `/dra-cristiane-fairbanks-advogada2/` | `/sobre/` |

3. **Bing Webmaster Tools**: importar do Search Console ou verificar com `NEXT_PUBLIC_BING_VERIFICATION`; enviar o sitemap (o Bing alimenta ChatGPT/Copilot).
4. **Google Business Profile**: criar/atualizar a ficha com o mesmo nome, endereço, telefone e horário do site (NAP idêntico ao `src/lib/site.ts`), categoria "Advogado de direito de família", link para o site e para as páginas de serviço.
5. **Google Analytics 4**: criar propriedade e preencher `NEXT_PUBLIC_GA_ID` (o script só é carregado se a variável existir). Métricas úteis: cliques em WhatsApp (`wa.me`) e e-mail (`mailto`), páginas de serviço mais vistas.
6. **Core Web Vitals**: rodar PageSpeed Insights após o deploy (https://pagespeed.web.dev/). O site é estático e sem fontes externas, então LCP/CLS tendem a ficar verdes; a única requisição de terceiro é o mapa do Google na página de contato (carregado com `loading="lazy"`).
7. **Rich Results Test** em uma página de serviço e na home para confirmar `FAQPage`, `BreadcrumbList` e `LegalService`.
8. **Acompanhar**: no Search Console, relatórios "Páginas" (cobertura) e "Desempenho" por consulta; revisar mensalmente as perguntas que geram impressões e incorporá-las às FAQs em `src/data/services.ts`.

## Dados pendentes de confirmação com o escritório

- **Datas dos dossiês do CEMJ** e link da participação na Nova Brasil: ver `docs/BLOG.md`.

- **CEP** do endereço (não foi incluído no schema para não publicar dado não confirmado).
- Coordenadas exatas para `geo` no `LocalBusiness` (opcional).
- Links diretos das matérias de imprensa (hoje os cards não têm link externo, apenas o Lattes e as publicações do CEMJ).
- Confirmar o número e o ano da **Resolução do CNJ** citada (texto usa "atualização da Resolução 35 do CNJ", sem ano) e da **Lei 15.240/2025** sobre abandono afetivo (mantida como consta no site atual).
