import Link from "next/link";
import { Rss } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { getAllPosts, getPostsByType, postTypes, type PostType } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

const tabs: { href: string; label: string; type?: PostType }[] = [
  { href: "/blog/", label: "Tudo" },
  { href: "/blog/artigos/", label: "Artigos", type: "artigo" },
  { href: "/blog/noticias/", label: "Notícias", type: "noticia" },
  { href: "/blog/na-midia/", label: "Na mídia", type: "midia" },
];

export function BlogListing({ type }: { type?: PostType }) {
  const posts = type ? getPostsByType(type) : getAllPosts();
  const path = type ? `/blog/${postTypes[type].slug}/` : "/blog/";
  const title = type ? postTypes[type].plural : "Blog";
  const description = type
    ? postTypes[type].description
    : "Artigos, notícias e aparições na mídia da Dra. Cristiane Fairbanks sobre direito de família, sucessões, imóveis e educação.";
  const crumbs = type
    ? [{ name: "Início", path: "/" }, { name: "Blog", path: "/blog/" }, { name: postTypes[type].plural }]
    : [{ name: "Início", path: "/" }, { name: "Blog" }];
  const featured = posts.filter((p) => p.featured).slice(0, 1);
  const rest = posts.filter((p) => !featured.includes(p));

  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({ path, name: `${title} | ${site.name}`, description, type: "CollectionPage" }),
            hasPart: posts.slice(0, 20).map((p) => ({ "@type": "BlogPosting", headline: p.title, url: absoluteUrl(`/blog/${p.slug}/`), datePublished: p.date })),
          },
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Conteúdo"
        title={type ? postTypes[type].plural : "Artigos, notícias e imprensa"}
        lead={<p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">{description}</p>}
      >
        <nav aria-label="Tipo de publicação" className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const active = tab.type === type;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  active ? "border-gold-400 bg-gold-500 text-plum-950" : "border-white/25 text-white/85 hover:bg-white/10",
                )}
              >
                {tab.label}
              </Link>
            );
          })}
          <a href="/feed.xml" className="ml-auto inline-flex items-center gap-1.5 self-center text-sm text-white/70 hover:text-white">
            <Rss className="size-4 text-gold-400" aria-hidden /> RSS
          </a>
        </nav>
      </PageHeader>

      <section className="bg-ivory">
        <div className="container-site py-16">
          {posts.length === 0 ? (
            <p className="text-muted">Ainda não há publicações nesta seção. Volte em breve ou veja <Link href="/blog/" className="underline">todo o conteúdo</Link>.</p>
          ) : (
            <>
              {featured.length > 0 && (
                <div className="mb-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Em destaque</p>
                  <PostCard post={featured[0]} className="lg:grid lg:grid-cols-2 [&>a]:lg:aspect-auto [&>a]:lg:min-h-80" />
                </div>
              )}
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <li key={p.slug}>
                    <PostCard post={p} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
