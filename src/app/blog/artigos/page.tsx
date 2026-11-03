import type { Metadata } from "next";
import { BlogListing } from "@/components/BlogListing";
import { postTypes } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Artigos",
  description: postTypes.artigo.description,
  alternates: { canonical: "/blog/artigos/" },
  openGraph: { title: `Artigos | ${site.name}`, description: postTypes.artigo.description, url: "/blog/artigos/" },
};

export default function Page() {
  return <BlogListing type="artigo" />;
}
