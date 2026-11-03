import type { Metadata } from "next";
import { BlogListing } from "@/components/BlogListing";
import { postTypes } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Na mídia",
  description: postTypes.midia.description,
  alternates: { canonical: "/blog/na-midia/" },
  openGraph: { title: `Na mídia | ${site.name}`, description: postTypes.midia.description, url: "/blog/na-midia/" },
};

export default function Page() {
  return <BlogListing type="midia" />;
}
