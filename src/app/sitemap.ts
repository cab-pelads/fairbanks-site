import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getAllPosts, postTypes } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/servicos/"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/sobre/"), lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/contato/"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    ...services.map((s) => ({
      url: absoluteUrl(`/servicos/${s.slug}/`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/blog/"), lastModified, changeFrequency: "weekly" as const, priority: 0.8 },
    ...Object.values(postTypes).map((t) => ({
      url: absoluteUrl(`/blog/${t.slug}/`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...getAllPosts().map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}/`),
      lastModified: new Date(`${p.updated ?? p.date}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
