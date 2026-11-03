import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path?: string };

export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <nav aria-label="Navegação estrutural" className={cn("text-sm", light ? "text-white/60" : "text-muted")}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {last || !item.path ? (
                <span aria-current={last ? "page" : undefined} className={last ? (light ? "text-white" : "text-plum-900") : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={cn("hover:underline", light ? "hover:text-white" : "hover:text-plum-900")}>
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight className={cn("size-3.5", light ? "text-gold-400" : "text-gold-500")} aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
