import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import readingTime from "reading-time";
import { services } from "@/data/services";
import { areaImages } from "@/lib/areaImages";

export type PostType = "artigo" | "noticia" | "midia";

export const postTypes: Record<PostType, { label: string; plural: string; slug: string; description: string }> = {
  artigo: {
    label: "Artigo",
    plural: "Artigos",
    slug: "artigos",
    description: "Textos da Dra. Cristiane Fairbanks explicando, em linguagem direta, temas de família, sucessões, imóveis e educação.",
  },
  noticia: {
    label: "Notícia",
    plural: "Notícias",
    slug: "noticias",
    description: "Mudanças na lei, decisões dos tribunais e novidades do escritório que afetam o seu caso.",
  },
  midia: {
    label: "Na mídia",
    plural: "Na mídia",
    slug: "na-midia",
    description: "Entrevistas, participações e menções da Dra. Cristiane Fairbanks em rádio, TV, jornais e publicações.",
  },
};

/** Capa padrão de um post sem imagem, escolhida pela primeira área relacionada. */
export function coverFor(areas: string[]) {
  for (const a of areas) if (areaImages[a]) return areaImages[a].src;
  return "/images/areas/familia.jpg";
}

export type Post = {
  slug: string;
  type: PostType;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  cover?: string;
  coverAlt?: string;
  areas: string[];
  tags: string[];
  outlet?: string;
  sourceUrl?: string;
  featured: boolean;
  draft: boolean;
  body: string;
  html: string;
  readingMinutes: number;
  wordCount: number;
  faq: { q: string; a: string }[];
};

const BLOG_DIR = join(process.cwd(), "content/blog");

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeStringify);

function toStringArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.map(String).filter(Boolean);
  if (typeof v === "string" && v.trim()) return v.split(",").map((s) => s.trim()).filter(Boolean);
  return [];
}

function isPostType(v: unknown): v is PostType {
  return v === "artigo" || v === "noticia" || v === "midia";
}

let cache: Post[] | null = null;

export function getAllPosts({ includeDrafts = false } = {}): Post[] {
  if (!cache) {
    const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
    cache = files
      .map((file) => {
        const raw = readFileSync(join(BLOG_DIR, file), "utf8");
        const { data, content } = matter(raw);
        const slug = String(data.slug ?? file.replace(/\.mdx?$/, ""));
        const type = isPostType(data.type) ? data.type : "artigo";
        const html = String(processor.processSync(content));
        const stats = readingTime(content);
        const areas = toStringArray(data.areas).filter((a) => services.some((s) => s.slug === a));
        const faq = Array.isArray(data.faq)
          ? data.faq
              .filter((f: unknown) => f && typeof f === "object" && "q" in f && "a" in f)
              .map((f: { q: unknown; a: unknown }) => ({ q: String(f.q), a: String(f.a) }))
          : [];
        const post: Post = {
          slug,
          type,
          title: String(data.title ?? slug),
          description: String(data.description ?? ""),
          date: toIsoDate(data.date),
          updated: data.updated ? toIsoDate(data.updated) : undefined,
          author: String(data.author ?? "Dra. Cristiane Fairbanks"),
          cover: data.cover ? String(data.cover) : undefined,
          coverAlt: data.coverAlt ? String(data.coverAlt) : undefined,
          areas,
          tags: toStringArray(data.tags),
          outlet: data.outlet ? String(data.outlet) : undefined,
          sourceUrl: data.sourceUrl ? String(data.sourceUrl) : undefined,
          featured: Boolean(data.featured),
          draft: Boolean(data.draft),
          body: content,
          html,
          readingMinutes: Math.max(1, Math.round(stats.minutes)),
          wordCount: stats.words,
          faq,
        };
        return post;
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }
  return includeDrafts ? cache : cache.filter((p) => !p.draft);
}

function toIsoDate(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  const s = String(v ?? "");
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? new Date().toISOString().slice(0, 10) : d.toISOString().slice(0, 10);
}

export function getPost(slug: string) {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByType(type: PostType) {
  return getAllPosts().filter((p) => p.type === type);
}

export function getPostsByArea(areaSlug: string, limit = 3) {
  return getAllPosts()
    .filter((p) => p.areas.includes(areaSlug))
    .slice(0, limit);
}

export function typeFromSlug(slug: string): PostType | undefined {
  return (Object.keys(postTypes) as PostType[]).find((t) => postTypes[t].slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}
