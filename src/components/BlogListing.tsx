import { BlogExplorer, type PostSummary } from "@/components/BlogExplorer";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/data/services";
import { coverFor, formatDate, getAllPosts, postTypes, type Post, type PostType } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function toSummary(p: Post): PostSummary {
  const bodyText = p.body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_>`|-]/g, " ")
    .replace(/\s+/g, " ")
    .slice(0, 6000);
  const areaLabels = p.areas.map((a) => services.find((s) => s.slug === a)?.shortTitle ?? "");
  return {
    slug: p.slug,
    type: p.type,
    title: p.title,
    description: p.description,
    date: p.date,
    dateLabel: formatDate(p.date),
    cover: p.cover ?? coverFor(p.areas),
    coverPosition: p.coverPosition,
    areas: p.areas,
    tags: p.tags,
    outlet: p.outlet,
    featured: p.featured,
    readingMinutes: p.readingMinutes,
    haystack: normalize([p.title, p.description, p.outlet ?? "", postTypes[p.type].label, ...p.tags, ...areaLabels, bodyText].join(" ")),
  };
}

export function BlogListing({ type }: { type?: PostType }) {
  const all = getAllPosts();
  const posts = all.map(toSummary);
  const path = type ? `/blog/${postTypes[type].slug}/` : "/blog/";
  const title = type ? postTypes[type].plural : "Blog";
  const description = type
    ? postTypes[type].description
    : "Artigos, notícias e aparições na mídia da Dra. Cristiane Fairbanks sobre direito de família, sucessões, imóveis e educação.";
  const crumbs = type
    ? [{ name: "Início", path: "/" }, { name: "Blog", path: "/blog/" }, { name: postTypes[type].plural }]
    : [{ name: "Início", path: "/" }, { name: "Blog" }];
  const usedAreas = new Set(all.flatMap((p) => p.areas));
  const areas = services.filter((s) => usedAreas.has(s.slug)).map((s) => ({ value: s.slug, label: s.shortTitle }));
  const types = (Object.keys(postTypes) as PostType[]).map((t) => ({ value: t, label: postTypes[t].plural }));

  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({ path, name: `${title} | ${site.name}`, description, type: "CollectionPage" }),
            hasPart: all
              .filter((p) => !type || p.type === type)
              .slice(0, 20)
              .map((p) => ({ "@type": "BlogPosting", headline: p.title, url: absoluteUrl(`/blog/${p.slug}/`), datePublished: p.date })),
          },
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Conteúdo"
        title={type ? postTypes[type].plural : "Artigos, notícias e imprensa"}
        lead={<p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">{description}</p>}
      >
      </PageHeader>

      <section className="bg-ivory">
        <div className="container-site py-12">
          <BlogExplorer posts={posts} initialType={type} types={types} areas={areas} />
        </div>
      </section>
    </>
  );
}
