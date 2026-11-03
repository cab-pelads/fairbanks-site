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
| `/feed.xml` | RSS com as 30 publicações mais recentes |

Além disso, a home mostra os 3 últimos artigos/notícias e as 4 últimas aparições na mídia, e cada página de área de atuação mostra as publicações marcadas com aquela área.

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

## Plano de conteúdo sugerido (primeiros 3 meses)

Cada tema abaixo nasce de uma dúvida real que já aparece nas FAQs das páginas de serviço.

| Mês | Tipo | Tema (título como pergunta) | Área |
| --- | --- | --- | --- |
| 1 | Artigo | Quanto tempo demora um inventário em cartório? (publicado) | Inventário |
| 1 | Artigo | Guarda compartilhada: como montar um plano de convivência? (publicado) | Guarda |
| 1 | Notícia | Reforma tributária e aluguéis a partir de 2026 (publicado) | Locações |
| 1 | Na mídia | Migrar as 4 aparições existentes com data e link reais | Vários |
| 2 | Artigo | Divórcio em cartório: documentos, custos e passo a passo | Divórcio |
| 2 | Artigo | Pensão alimentícia: como é calculado o valor e quando revisar? | Alimentos |
| 2 | Notícia | O que muda com a atualização da Resolução 35 do CNJ para inventários | Inventário |
| 3 | Artigo | Testamento ou doação em vida: qual é melhor para a minha família? | Planejamento sucessório |
| 3 | Artigo | Comprar imóvel em leilão: quais riscos verificar antes de dar o lance? | Imobiliário |
| 3 | Artigo | Guarda de pet no divórcio: como fica a convivência com o animal? | Direito dos animais |

Depois do terceiro mês, use o relatório "Desempenho" do Search Console para ver quais perguntas geram impressões e escreva sobre elas.

## Pendências

- As três aparições na mídia sem data conhecida (Folha, SINDPESP, Jornal do CA 22 de Agosto) estão com `date: 2026-05-01` e um comentário no arquivo. Confirmar a data real e o link da matéria.
- Definir se o escritório quer receber e-mail a cada publicação (pode ser feito com o RSS em um serviço como o Zapier ou o Make).
