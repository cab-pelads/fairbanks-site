import type { Metadata } from "next";
import { BlogListing } from "@/components/BlogListing";
import { site } from "@/lib/site";

const description =
  "Artigos, notícias e aparições na mídia da Dra. Cristiane Fairbanks sobre direito de família, sucessões, imóveis e educação.";

export const metadata: Metadata = {
  title: "Blog: artigos, notícias e imprensa",
  description,
  alternates: { canonical: "/blog/", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { title: `Blog | ${site.name}`, description, url: "/blog/" },
};

export default function BlogPage() {
  return <BlogListing />;
}
