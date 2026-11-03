import type { Metadata } from "next";
import { BlogListing } from "@/components/BlogListing";
import { postTypes } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notícias",
  description: postTypes.noticia.description,
  alternates: { canonical: "/blog/noticias/" },
  openGraph: { title: `Notícias | ${site.name}`, description: postTypes.noticia.description, url: "/blog/noticias/" },
};

export default function Page() {
  return <BlogListing type="noticia" />;
}
