import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
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

/** Cabeçalho claro das páginas internas: breadcrumbs, título grande, filete dourado. */
export function PageHeader({ crumbs, eyebrow, title, lead, children, aside, className }: Props) {
  return (
    <header className={cn("border-b border-line bg-ivory", className)}>
      <div className="container-site pb-12 pt-6">
        <Breadcrumbs items={crumbs} />
        <div className={cn("mt-8 grid gap-10", aside && "lg:grid-cols-12 lg:items-center")}>
          <div className={cn("max-w-3xl", aside && "lg:col-span-7")}>
            {eyebrow && (
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">{eyebrow}</p>
            )}
            <h1 className="font-display text-balance text-3xl font-bold leading-[1.15] text-plum-900 sm:text-4xl lg:text-[2.75rem]">{title}</h1>
            <span className="mt-6 block h-0.5 w-16 bg-gold-500" aria-hidden />
            {lead}
            {children}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </header>
  );
}
