import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={`/servicos/${service.slug}/`}
      className={cn(
        "group flex h-full flex-col border-t-2 border-gold-500 bg-white px-5 pb-6 pt-5 transition-colors duration-150 hover:bg-ivory",
        className,
      )}
    >
      <h3 className="text-balance text-lg font-semibold leading-snug text-plum-900">{service.shortTitle}</h3>
      <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">{service.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-plum-800">
        Ver área
        <ArrowRight className="size-4 text-gold-500 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
