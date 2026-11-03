import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { coverFor, formatDate, postTypes, type Post } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function PostCard({ post, className, compact }: { post: Post; className?: string; compact?: boolean }) {
  const type = postTypes[post.type];
  return (
    <article className={cn("group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-gold-400", className)}>
      <Link href={`/blog/${post.slug}/`} className="relative block aspect-[16/9] overflow-hidden bg-sand" tabIndex={-1} aria-hidden>
        <Image
          src={post.cover ?? coverFor(post.areas)}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-600">
          <span>{post.outlet ?? type.label}</span>
          <span aria-hidden className="text-line">·</span>
          <time dateTime={post.date} className="font-medium normal-case tracking-normal text-muted">
            {formatDate(post.date)}
          </time>
        </p>
        <h3 className={cn("mt-2 text-balance font-semibold leading-snug text-plum-900", compact ? "text-base" : "text-lg")}>
          <Link href={`/blog/${post.slug}/`} className="hover:underline decoration-gold-400 underline-offset-4">
            {post.title}
          </Link>
        </h3>
        {!compact && <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">{post.description}</p>}
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden />
            {post.readingMinutes} min de leitura
          </span>
          <Link href={`/blog/${post.slug}/`} className="inline-flex items-center gap-1 text-sm font-semibold text-plum-800 group-hover:text-plum-900">
            Ler
            <ArrowUpRight className="size-4 text-gold-500" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
