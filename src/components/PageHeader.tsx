import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Monogram } from "@/components/Logo";
import { cn } from "@/lib/utils";

type Props = {
  crumbs: Crumb[];
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

/** Faixa escura (vinho) no topo das páginas internas. */
export function PageHeader({ crumbs, eyebrow, title, lead, children, aside, className }: Props) {
  return (
    <header className={cn("relative overflow-hidden bg-plum-900 text-white", className)}>
      <Monogram className="pointer-events-none absolute -right-16 -top-10 w-80 opacity-[0.06]" />
      <div className="container-site relative pb-14 pt-6">
        <Breadcrumbs items={crumbs} tone="light" />
        <div className={cn("mt-8 grid gap-10", aside && "lg:grid-cols-12 lg:items-center")}>
          <div className={cn("max-w-3xl", aside && "lg:col-span-7")}>
            {eyebrow && (
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">{eyebrow}</p>
            )}
            <h1 className="font-display text-balance text-4xl font-medium leading-[1.08] sm:text-5xl">{title}</h1>
            {lead}
            {children}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </header>
  );
}
