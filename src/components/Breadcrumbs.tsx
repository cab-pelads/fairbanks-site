import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Navegação estrutural" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {last || !item.path ? (
                <span aria-current={last ? "page" : undefined} className={last ? "text-plum-900" : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-plum-900 hover:underline">
                  {item.name}
                </Link>
              )}
              {!last && <ChevronRight className="size-3.5 text-gold-500" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
