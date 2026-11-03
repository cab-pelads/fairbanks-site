import { Plus } from "lucide-react";
import type { Faq as FaqItem } from "@/data/services";

export function Faq({ items, title = "Perguntas frequentes" }: { items: FaqItem[]; title?: string }) {
  return (
    <section aria-labelledby="faq-title" className="not-prose">
      <h2 id="faq-title" className="font-display text-balance text-2xl font-medium text-plum-900 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {items.map((item, i) => (
          <details key={i} className="faq group py-1" name="faq">
            <summary className="flex items-start justify-between gap-4 py-4 text-left text-base font-semibold text-plum-900 sm:text-lg">
              <span>{item.q}</span>
              <Plus
                className="faq-icon mt-1 size-5 shrink-0 text-gold-500 transition-transform duration-150"
                aria-hidden
              />
            </summary>
            <p className="pb-5 pr-9 text-pretty leading-relaxed text-ink/85">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
