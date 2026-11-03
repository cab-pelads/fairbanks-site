import { MessageCircle, Mail } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Monogram } from "@/components/Logo";
import { site, whatsappLink } from "@/lib/site";

export function CtaSection({
  title = "Converse sobre o seu caso com clareza.",
  text = "Um primeiro contato para compreender a situação, orientar os próximos passos e indicar a estratégia jurídica mais adequada.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-plum-950 text-white">
      <div className="container-site relative overflow-hidden py-20">
        <Monogram className="pointer-events-none absolute -right-10 -top-10 w-64 opacity-[0.07] sm:w-80" />
        <div className="relative max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Atendimento</p>
          <h2 id="cta-title" className="font-display text-balance text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-white/80">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink(message ?? "Olá, gostaria de agendar uma consulta.")} variant="gold">
              <MessageCircle className="size-4" aria-hidden />
              Falar no WhatsApp
            </ButtonLink>
            <ButtonLink href={`mailto:${site.contact.email}`} variant="outline-light">
              <Mail className="size-4" aria-hidden />
              {site.contact.email}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/60">
            {site.contact.hours} · {site.address.neighborhood}, {site.address.city}
          </p>
        </div>
      </div>
    </section>
  );
}
