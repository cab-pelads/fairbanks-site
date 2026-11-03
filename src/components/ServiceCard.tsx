import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, type Service } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className, showCategory }: { service: Service; className?: string; showCategory?: boolean }) {
  return (
    <Link
      href={`/servicos/${service.slug}/`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors duration-150 hover:border-gold-400",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-plum-50 text-plum-800">
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
        {showCategory && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-600">
            {categories[service.category].label}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-balance text-xl font-medium leading-snug text-plum-900">
        {service.shortTitle}
      </h3>
      <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">{service.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-plum-800 group-hover:text-plum-900">
        Saiba mais
        <ArrowUpRight className="size-4 text-gold-500 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
