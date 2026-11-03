import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getPostsByType } from "@/lib/blog";

export function PressSection() {
  const posts = getPostsByType("midia").slice(0, 4);
  if (posts.length === 0) return null;
  return (
    <section aria-labelledby="press-title" className="bg-sand">
      <div className="container-site py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Na mídia"
            title={<span id="press-title">Presença em veículos de imprensa e publicações</span>}
            text="Participações e entrevistas da Dra. Cristiane Fairbanks em rádio, jornal e publicações acadêmicas."
          />
          <Link href="/blog/na-midia/" className="inline-flex items-center gap-1 text-sm font-semibold text-plum-800 hover:text-plum-900">
            Todas as aparições
            <ArrowRight className="size-4 text-gold-500" aria-hidden />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} compact />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
