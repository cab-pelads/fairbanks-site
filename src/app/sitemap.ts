import type { MetadataRoute } from "next";
import { services } from "@/data/services";
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
  ];
}
