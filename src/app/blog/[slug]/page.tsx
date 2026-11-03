import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, ExternalLink, MessageCircle, Share2 } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CtaSection } from "@/components/CtaSection";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PostCard } from "@/components/PostCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getService } from "@/data/services";
import { formatDate, getAllPosts, getPost, postTypes } from "@/lib/blog";
import { breadcrumbSchema, faqSchema, graph, ORG_ID, PERSON_ID, webPageSchema } from "@/lib/schema";
import { absoluteUrl, site, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}/`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      ...(post.cover ? { images: [{ url: post.cover }] } : {}),
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}/`;
  const type = postTypes[post.type];
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: type.plural, path: `/blog/${type.slug}/` },
    { name: post.title },
  ];
  const areas = post.areas.map(getService).filter(Boolean);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && (p.type === post.type || p.areas.some((a) => post.areas.includes(a))))
    .slice(0, 3);
  const schemaType = post.type === "noticia" ? "NewsArticle" : "BlogPosting";

  return (
    <article>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: post.title, description: post.description, primaryImage: post.cover }),
          {
            "@type": schemaType,
            "@id": `${absoluteUrl(path)}#article`,
            headline: post.title,
            description: post.description,
            url: absoluteUrl(path),
            mainEntityOfPage: `${absoluteUrl(path)}#webpage`,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            inLanguage: "pt-BR",
            wordCount: post.wordCount,
            keywords: post.tags.join(", "),
            author: { "@id": PERSON_ID },
            publisher: { "@id": ORG_ID },
            ...(post.cover ? { image: absoluteUrl(post.cover) } : {}),
            ...(post.areas.length ? { about: areas.map((a) => ({ "@type": "Thing", name: a!.shortTitle, url: absoluteUrl(`/servicos/${a!.slug}/`) })) } : {}),
            ...(post.sourceUrl ? { citation: post.sourceUrl } : {}),
          },
          ...(post.faq.length ? [faqSchema(post.faq)] : []),
          breadcrumbSchema(crumbs),
        )}
      />

      <PageHeader
        crumbs={crumbs}
        eyebrow={post.outlet ? `${type.label} · ${post.outlet}` : type.label}
        title={post.title}
        lead={<p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">{post.description}</p>}
      >
        <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
          <span>
            Escrito por <span className="font-semibold text-white">{post.author}</span>
          </span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.updated && <span>Atualizado em {formatDate(post.updated)}</span>}
          <span className="inline-flex items-center gap-1">
            <Clock className="size-4 text-gold-400" aria-hidden />
            {post.readingMinutes} min de leitura
          </span>
        </p>
      </PageHeader>

      <div className="bg-white">
        <div className="container-site grid gap-12 py-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {post.cover && (
              <figure className="mb-10 overflow-hidden rounded-3xl border border-line">
                <Image src={post.cover} alt={post.coverAlt ?? ""} width={1200} height={675} priority sizes="(min-width: 1024px) 66vw, 100vw" className="w-full object-cover" />
                {post.coverAlt && <figcaption className="px-4 py-2 text-xs text-muted">{post.coverAlt}</figcaption>}
              </figure>
            )}
            <div className="prose-fb max-w-none" dangerouslySetInnerHTML={{ __html: post.html }} />

            {post.sourceUrl && (
              <p className="mt-8">
                <ButtonLink href={post.sourceUrl} variant="outline">
                  {post.type === "midia" ? "Ver matéria original" : "Ver fonte"}
                  <ExternalLink className="size-4" aria-hidden />
                </ButtonLink>
              </p>
            )}

            {post.faq.length > 0 && (
              <div className="mt-12">
                <Faq items={post.faq} />
              </div>
            )}

            {post.tags.length > 0 && (
              <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
                {post.tags.map((t) => (
                  <li key={t} className="rounded-full bg-ivory px-3 py-1 text-xs font-medium text-plum-800">
                    {t}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 rounded-2xl border border-line bg-ivory p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Sobre a autora</p>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-ink/85">
                <Link href="/sobre/" className="font-semibold text-plum-900 hover:underline">{site.founder.honorific}</Link>, {site.founder.oab}, é advogada e Doutora pela PUC-SP, com mais de 20 anos de atuação em direito de família e sucessões, e pós-doutoranda em Educação pela Unifesp. Este conteúdo é informativo e não substitui a análise individual do seu caso.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-plum-900 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Precisa de orientação?</p>
                <p className="mt-3 font-display text-2xl font-medium leading-snug">Converse com a advogada sobre o seu caso</p>
                <ButtonLink href={whatsappLink("Olá, li um conteúdo no site e gostaria de agendar uma consulta.")} variant="gold" className="mt-5 w-full">
                  <MessageCircle className="size-4" aria-hidden />
                  Falar no WhatsApp
                </ButtonLink>
              </div>
              {areas.length > 0 && (
                <div className="rounded-2xl border border-line bg-ivory p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Áreas relacionadas</p>
                  <ul className="mt-4 divide-y divide-line">
                    {areas.map((a) => (
                      <li key={a!.slug}>
                        <Link href={`/servicos/${a!.slug}/`} className="group flex items-center justify-between gap-3 py-3 text-sm font-semibold text-plum-900">
                          <span className="flex items-center gap-2">
                            <ServiceIcon name={a!.icon} className="size-4 text-plum-700" />
                            {a!.shortTitle}
                          </span>
                          <ArrowRight className="size-4 text-gold-500" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="rounded-2xl border border-line bg-white p-6 text-sm text-muted">
                <p className="flex items-center gap-2 font-semibold text-plum-900">
                  <Share2 className="size-4 text-gold-500" aria-hidden /> Compartilhar
                </p>
                <p className="mt-2 break-all">{absoluteUrl(path)}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-ivory">
          <div className="container-site py-16">
            <h2 className="font-display text-balance text-2xl font-medium text-plum-900 sm:text-3xl">Leia também</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} compact />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaSection />
    </article>
  );
}
