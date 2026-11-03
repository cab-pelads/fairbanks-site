import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getAllPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getAllPosts()
    .filter((p) => p.type !== "midia")
    .slice(0, 3);
  if (posts.length === 0) return null;
  return (
    <section aria-labelledby="blog-title" className="bg-sand">
      <div className="container-site py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Blog"
            title={<span id="blog-title">Artigos e notícias para decidir com mais segurança</span>}
            text="Textos da Dra. Cristiane Fairbanks respondendo às dúvidas que chegam ao escritório, e as mudanças na lei que afetam a sua família e o seu patrimônio."
          />
          <Link href="/blog/" className="inline-flex items-center gap-1 text-sm font-semibold text-plum-800 hover:text-plum-900">
            Ver todas as publicações
            <ArrowRight className="size-4 text-gold-500" aria-hidden />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
