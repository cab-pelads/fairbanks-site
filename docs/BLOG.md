# Blog: artigos, notícias e na mídia

## Como funciona

Cada publicação é um arquivo Markdown em `content/blog/<slug>.md`, com um cabeçalho (frontmatter) e o texto. No build, o site gera:

| Rota | Conteúdo |
| --- | --- |
| `/blog/` | Todas as publicações, com destaque e filtros |
| `/blog/artigos/` | Só `type: artigo` (textos próprios, explicativos) |
| `/blog/noticias/` | Só `type: noticia` (mudanças na lei, decisões, novidades) |
| `/blog/na-midia/` | Só `type: midia` (entrevistas e menções na imprensa) |
| `/blog/<slug>/` | A publicação, com autor, data, tempo de leitura, FAQ, áreas relacionadas e "Leia também" |
| `/feed.xml` | Feed RSS (sem link visível no site; usado por leitores de feed, automações e rastreadores) |

A página do blog tem busca por texto (sem distinguir acentos; procura em título, resumo, tags, áreas e corpo), filtro por tipo e filtro por área, tudo no navegador, sem servidor. Publicações com data futura só aparecem depois da data, desde que o site seja republicado naquele dia (ver "Agendamento").

Além disso, a home mostra os 3 últimos artigos/notícias e as 4 últimas aparições na mídia, e cada página de área de atuação mostra as publicações marcadas com aquela área.

## Agendamento

Para programar uma publicação, basta salvar o arquivo com a data desejada no campo `date` e `draft: false`. O build ignora posts com data futura. Como o site é estático, ele precisa ser reconstruído na data: configure na hospedagem um "deploy hook" chamado por um agendador diário (Cloudflare Pages e Vercel oferecem o hook; o disparo pode vir de um cron do GitHub Actions ou do próprio painel).

## Três formas de publicar

1. **PagesCMS (recomendado para o escritório).** Acesse https://app.pagescms.org, entre com o GitHub e abra o repositório `cab-pelads/fairbanks-site`. O arquivo `.pages.yml` já define o formulário "📝 Blog - Publicações" com todos os campos, descrições e validações. Ao salvar, o arquivo é commitado no Git e a hospedagem republica o site.
2. **Editando o arquivo no GitHub.** Em `content/blog/`, clique em "Add file" e cole o modelo abaixo.
3. **Localmente**, criando o arquivo e fazendo `git push`.

Imagens enviadas pelo CMS vão para `public/media/` e são referenciadas como `/media/...`.

## Modelo de arquivo

```markdown
---
title: "Pergunta ou título da publicação"
slug: pergunta-ou-titulo-da-publicacao
type: artigo            # artigo | noticia | midia
description: "Resumo de 150 a 160 caracteres, que aparece no Google e na lista."
date: 2026-11-03
updated:                # opcional, ao revisar
author: "Dra. Cristiane Fairbanks"
cover: /media/blog/imagem.webp      # opcional, 1200x630
coverAlt: "Descrição da imagem"     # opcional
areas:                  # slugs das áreas (ver src/data/services.ts)
  - inventario-e-sucessoes
tags:
  - inventário
outlet: "Folha de S.Paulo"          # só para midia
sourceUrl: https://...              # link da matéria ou da fonte
featured: false
draft: false
faq:
  - q: "Pergunta curta?"
    a: "Resposta objetiva."
---

Primeiro parágrafo: responda a pergunta do título de forma direta.

## Subtítulo em formato de pergunta?

Texto de 150 a 300 palavras, autocontido.
```

## Regras editoriais (SEO + AEO)

- Título como pergunta real de busca; resposta direta nos dois primeiros parágrafos.
- Subtítulos `##` como perguntas; um a cada 150 a 300 palavras.
- Cite a lei ou a fonte no próprio texto ("conforme o artigo 611 do CPC"). Nunca invente número, data ou estatística.
- Sem travessões (— ou –), sem muletas de IA, parágrafos de 2 a 3 frases.
- Termine com link para a página da área relacionada e para `/contato/`.
- Artigos: 800 a 1.800 palavras. Notícias: 300 a 800. Na mídia: 100 a 300, com link para a matéria original.
- Preencha `areas` para a publicação aparecer na página da área e gerar links internos.
- Marque `featured: true` em no máximo uma ou duas publicações por vez.

## Conteúdo publicado na migração

Os artigos e as aparições na mídia foram importados do site anterior, com datas e links verificados nas fontes originais:

| Tipo | Publicação | Data | Fonte |
| --- | --- | --- | --- |
| Artigo | Perfil e trajetória dos egressos de Pedagogia da Unifesp | 29/09/2025 | Revista da FAEEBA v. 34 n. 79 (DOI 10.21879/faeeba2358-0194.2025.v34.n79.p114-135) |
| Artigo | Dossiê Florestan Fernandes | a confirmar | CEMJ |
| Artigo | Dossiê Newton Sucupira | a confirmar | CEMJ |
| Notícia | Reforma tributária e aluguéis a partir de 2026 | 03/11/2026 | LC 214/2025 |
| Na mídia | Jornal Nova Manhã, série Inventários, episódio 2 | 20/08/2025 | Nova Brasil (sem link) |
| Na mídia | Folha: projeto de lei previdenciário para pós-graduandos | 05/02/2026 | Folhapress (reprodução no Acessa.com) |
| Na mídia | Sindpesp lança o livro "Sindpesp: 30 anos de luta" | 03/12/2021 | Delegados.com.br |
| Na mídia | Jornal do CA 22 de Agosto: entrevista com o Prof. Canotilho | 23/11/2007 | Migalhas |

Os PDFs do artigo da Unifesp e da entrevista com Canotilho estão em `public/media/blog/`.

## Plano de conteúdo sugerido (próximos 3 meses)

Cada tema abaixo nasce de uma dúvida real que já aparece nas FAQs das páginas de serviço. Títulos como pergunta de busca.

| Mês | Tipo | Tema | Área |
| --- | --- | --- | --- |
| 1 | Artigo | Quanto tempo demora um inventário em cartório? | Inventário |
| 1 | Artigo | Guarda compartilhada: como montar um plano de convivência? | Guarda |
| 2 | Artigo | Pacto antenupcial: quando vale a pena fazer? | Casamento |
| 2 | Artigo | Divórcio em cartório: documentos, custos e passo a passo | Divórcio |
| 2 | Notícia | O que muda com a atualização da Resolução 35 do CNJ para inventários | Inventário |
| 3 | Artigo | Pensão alimentícia: como é calculado o valor e quando revisar? | Alimentos |
| 3 | Artigo | Comprar imóvel em leilão: quais riscos verificar antes do lance? | Imobiliário |
| 3 | Artigo | Guarda de pet no divórcio: como fica a convivência com o animal? | Direito dos animais |

Rascunhos dos três primeiros temas existem no histórico do Git (commit `c5c3583`) e podem ser recuperados e revisados pela Dra. Cristiane antes de publicar.

## Pendências

- Confirmar a data de lançamento dos dossiês Florestan Fernandes e Newton Sucupira (hoje com a data de publicação no site anterior, 06/05/2026).
- Obter o link do áudio ou vídeo da participação no Jornal Nova Manhã, se existir.
- **Folha de S.Paulo (05/02/2026):** o texto da reportagem disponível não cita a Dra. Cristiane. Confirmar com o escritório se ela foi entrevistada na versão original. Até lá, o post descreve a matéria como leitura relacionada, sem afirmar participação.
- Definir se o escritório quer receber e-mail a cada publicação (pode ser feito com o RSS em um serviço como o Zapier ou o Make).
