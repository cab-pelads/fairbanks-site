"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type PostSummary = {
  slug: string;
  type: "artigo" | "noticia" | "midia";
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  cover: string;
  coverPosition: string;
  areas: string[];
  tags: string[];
  outlet?: string;
  featured: boolean;
  readingMinutes: number;
  /** Texto normalizado (título, resumo, tags, corpo) usado só na busca. */
  haystack: string;
};

type Props = {
  posts: PostSummary[];
  initialType?: PostSummary["type"];
  types: { value: PostSummary["type"]; label: string }[];
  areas: { value: string; label: string }[];
};

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function BlogExplorer({ posts, initialType, types, areas }: Props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<PostSummary["type"] | "">(initialType ?? "");
  const [area, setArea] = useState("");
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const terms = normalize(deferredQuery).split(/\s+/).filter(Boolean);
    return posts.filter((p) => {
      if (type && p.type !== type) return false;
      if (area && !p.areas.includes(area)) return false;
      return terms.every((t) => p.haystack.includes(t));
    });
  }, [posts, deferredQuery, type, area]);

  const filtering = Boolean(deferredQuery || type || area);
  const featured = !filtering ? results.find((p) => p.featured) : undefined;
  const rest = featured ? results.filter((p) => p !== featured) : results;
  const typeLabel = (t: PostSummary["type"]) => types.find((x) => x.value === t)?.label ?? t;

  return (
    <div>
      {/* Controles */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filtrar por tipo" className="flex flex-wrap gap-2">
          {[{ value: "" as const, label: "Tudo" }, ...types].map((t) => {
            const active = t.value === type;
            return (
              <button
                key={t.value || "all"}
                type="button"
                aria-pressed={active}
                onClick={() => setType(t.value)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  active ? "border-plum-900 bg-plum-900 text-white" : "border-line bg-white text-plum-900 hover:border-plum-900/40",
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative block">
            <span className="sr-only">Buscar publicações</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por assunto, lei ou palavra"
              className="w-full rounded-full border border-line bg-white py-2.5 pl-10 pr-10 text-sm text-ink placeholder:text-muted/70 focus:border-plum-700 focus:outline-none focus:ring-2 focus:ring-gold-400/40 sm:w-72 [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                aria-label="Limpar busca"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:bg-plum-50 hover:text-plum-900"
              >
                <X className="size-4" aria-hidden />
              </button>
            )}
          </label>
          <label className="block">
            <span className="sr-only">Filtrar por área</span>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full rounded-full border border-line bg-white px-4 py-2.5 text-sm text-ink focus:border-plum-700 focus:outline-none focus:ring-2 focus:ring-gold-400/40 sm:w-56"
            >
              <option value="">Todas as áreas</option>
              {areas.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="mt-5 text-sm text-muted" aria-live="polite">
        {results.length === 0
          ? "Nenhuma publicação encontrada."
          : results.length === 1
            ? "1 publicação"
            : `${results.length} publicações`}
        {filtering && (
          <>
            {" · "}
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setType(initialType ?? "");
                setArea("");
              }}
              className="font-semibold text-plum-800 underline decoration-gold-400 underline-offset-4 hover:text-plum-900"
            >
              limpar filtros
            </button>
          </>
        )}
      </p>

      {results.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-line bg-white p-8 text-center">
          <p className="font-semibold text-plum-900">Não encontramos nada com esses filtros.</p>
          <p className="mt-2 text-sm text-muted">
            Tente outra palavra ou veja <Link href="/servicos/" className="underline">as áreas de atuação</Link>, onde cada tema tem perguntas e respostas.
          </p>
        </div>
      ) : (
        <>
          {featured && (
            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Em destaque</p>
              <Card post={featured} typeLabel={typeLabel(featured.type)} wide />
            </div>
          )}
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug}>
                <Card post={p} typeLabel={typeLabel(p.type)} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Card({ post, typeLabel, wide }: { post: PostSummary; typeLabel: string; wide?: boolean }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-gold-400",
        wide && "lg:grid lg:grid-cols-2",
      )}
    >
      <Link href={`/blog/${post.slug}/`} className={cn("relative block overflow-hidden bg-sand", wide ? "aspect-[16/9] lg:aspect-auto lg:min-h-72" : "aspect-[16/9]")} tabIndex={-1} aria-hidden>
        <Image src={post.cover} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" style={{ objectPosition: post.coverPosition }} className="object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-600">
          <span>{post.outlet ?? typeLabel}</span>
          <span aria-hidden className="text-line">·</span>
          <time dateTime={post.date} className="font-medium normal-case tracking-normal text-muted">
            {post.dateLabel}
          </time>
        </p>
        <h3 className={cn("mt-2 text-balance font-semibold leading-snug text-plum-900", wide ? "text-xl" : "text-lg")}>
          <Link href={`/blog/${post.slug}/`} className="decoration-gold-400 underline-offset-4 hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">{post.description}</p>
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
