import Link from "next/link";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/InstagramIcon";
import { Logo, Monogram } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";
import { services } from "@/data/services";
import { nav, site, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white/80">
      {/* Chamada para contato, fundida ao rodapé */}
      <section aria-labelledby="cta-title" className="relative overflow-hidden bg-plum-900 text-white">
        <Monogram className="pointer-events-none absolute -right-10 -top-10 w-72 opacity-[0.07]" />
        <div className="container-site relative grid gap-8 py-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Atendimento</p>
            <h2 id="cta-title" className="font-display text-balance text-3xl font-bold leading-tight sm:text-4xl">
              Converse sobre o seu caso com clareza.
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-white/75">
              Um primeiro contato para compreender a situação, orientar os próximos passos e indicar a
              estratégia jurídica mais adequada. {site.contact.hours}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <ButtonLink href={whatsappLink("Olá, gostaria de agendar uma consulta.")} variant="gold">
              <MessageCircle className="size-4" aria-hidden />
              Falar no WhatsApp
            </ButtonLink>
            <ButtonLink href="/contato/" variant="outline-light">
              Outros canais
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="bg-plum-950">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="white" className="w-48" />
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-white/70">
              Advocacia estratégica para família, sucessões, patrimônio, relações imobiliárias e
              demandas educacionais. {site.founder.honorific}, {site.founder.oab}.
            </p>
            <a
              href={site.founder.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-200"
            >
              <Instagram className="size-4" aria-hidden />
              {site.founder.instagramHandle}
            </a>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Áreas de atuação</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicos/${s.slug}/`} className="hover:text-white hover:underline">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Navegação</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/feed.xml" className="hover:text-white hover:underline">
                  RSS do blog
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Contato</h2>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                <span>WhatsApp {site.contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                <span>{site.contact.email}</span>
              </a>
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                <span>{site.contact.hours}</span>
              </p>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.neighborhood}, {site.address.city}, {site.address.region}
                </span>
              </a>
            </address>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-site flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {site.name}. Todos os direitos reservados. Conteúdo de caráter informativo, em
              conformidade com o Código de Ética e Disciplina da OAB.
            </p>
            <p className="shrink-0">
              {site.founder.honorific} · {site.founder.oab}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
