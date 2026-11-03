import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { CtaSection } from "@/components/CtaSection";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ServiceIcon } from "@/components/ServiceIcon";
import { categories, getService, services } from "@/data/services";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = `/servicos/${service.slug}/`;
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: path },
    openGraph: { title: service.metaTitle, description: service.metaDescription, url: path, type: "article" },
  };
}

export default async function ServicePage({ params }: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/servicos/${service.slug}/`;
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Áreas de atuação", path: "/servicos/" },
    { name: service.shortTitle },
  ];
  const related = service.related.map(getService).filter(Boolean);
  const message = `Olá, gostaria de agendar uma consulta sobre ${service.shortTitle}.`;

  return (
    <article>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: service.metaTitle, description: service.metaDescription }),
          serviceSchema(service),
          faqSchema(service.faq),
          breadcrumbSchema(crumbs),
        )}
      />

      <header className="bg-ivory">
        <div className="container-site pb-12 pt-6">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
              <ServiceIcon name={service.icon} className="size-4" />
              {categories[service.category].label}
            </p>
            <h1 className="font-display text-balance text-4xl font-medium leading-[1.08] text-plum-900 sm:text-5xl">
              {service.title}
            </h1>
            {service.lead.map((p, i) => (
              <p key={i} className={i === 0 ? "mt-6 text-pretty text-lg leading-relaxed text-ink/85 sm:text-xl" : "mt-4 text-pretty text-lg leading-relaxed text-ink/80"}>
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(message)} variant="primary">
                <MessageCircle className="size-4" aria-hidden />
                Agendar consulta
              </ButtonLink>
              <ButtonLink href="#faq" variant="outline">
                Perguntas frequentes
              </ButtonLink>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-12">
          <div className="prose-fb max-w-none lg:col-span-8">
            <nav aria-label="Nesta página" className="not-prose rounded-2xl border border-line bg-ivory p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Nesta página</p>
              <ol className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
                {service.sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#secao-${i + 1}`} className="text-plum-800 hover:text-plum-900 hover:underline">
                      {s.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="text-plum-800 hover:text-plum-900 hover:underline">
                    Perguntas frequentes
                  </a>
                </li>
              </ol>
            </nav>

            {service.sections.map((section, i) => (
              <section key={i} id={`secao-${i + 1}`} className="scroll-mt-24">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.list &&
                  (section.ordered ? (
                    <ol>
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul>
                      {section.list.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  ))}
                {section.table && (
                  <div className="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          {section.table.head.map((h) => (
                            <th key={h} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, r) => (
                          <tr key={r}>
                            {row.map((cell, c) => (
                              <td key={c}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            <div id="faq" className="scroll-mt-24 pt-6">
              <Faq items={service.faq} title={`Perguntas frequentes sobre ${service.shortTitle.toLowerCase()}`} />
            </div>

            <p className="mt-10 text-sm text-muted">
              Conteúdo informativo elaborado por {site.founder.honorific}, {site.founder.oab}. Não
              substitui a análise individual do seu caso. Para orientação específica,{" "}
              <Link href="/contato/">entre em contato</Link>.
            </p>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-plum-900 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Fale com a advogada</p>
                <p className="mt-3 font-display text-2xl font-medium leading-snug">
                  Agende uma consulta sobre {service.shortTitle.toLowerCase()}
                </p>
                <p className="mt-3 text-sm text-white/75">
                  {site.founder.honorific}, {site.founder.oab}. Atendimento presencial em São Paulo ou por videoconferência.
                </p>
                <ButtonLink href={whatsappLink(message)} variant="gold" className="mt-5 w-full">
                  <MessageCircle className="size-4" aria-hidden />
                  WhatsApp {site.contact.phoneDisplay}
                </ButtonLink>
                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  <li className="flex items-start gap-2">
                    <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                    <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                      {site.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                    {site.contact.hours}
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                    {site.address.neighborhood}, {site.address.city}
                  </li>
                </ul>
              </div>

              {related.length > 0 && (
                <div className="rounded-2xl border border-line bg-ivory p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Áreas relacionadas</p>
                  <ul className="mt-4 divide-y divide-line">
                    {related.map((r) => (
                      <li key={r!.slug}>
                        <Link
                          href={`/servicos/${r!.slug}/`}
                          className="group flex items-center justify-between gap-3 py-3 text-sm font-semibold text-plum-900"
                        >
                          <span className="flex items-center gap-2">
                            <ServiceIcon name={r!.icon} className="size-4 text-plum-700" />
                            {r!.shortTitle}
                          </span>
                          <ArrowRight className="size-4 text-gold-500 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/servicos/" className="mt-3 inline-block text-sm text-plum-800 underline decoration-gold-400 underline-offset-4 hover:text-plum-900">
                    Ver todas as áreas
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      <CtaSection message={message} />
    </article>
  );
}
