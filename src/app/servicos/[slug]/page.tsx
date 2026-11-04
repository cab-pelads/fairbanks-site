import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowRight, CheckCircle2, Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PostCard } from "@/components/PostCard";
import { getPostsByArea } from "@/lib/blog";
import { ButtonLink } from "@/components/Button";
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
  const posts = getPostsByArea(service.slug, 3);

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

      <PageHeader
        crumbs={crumbs}
        eyebrow={
          <>
            <ServiceIcon name={service.icon} className="size-4" />
            {categories[service.category].label}
          </>
        }
        title={service.title}
        lead={
          <>
            {service.lead.map((p, i) => (
              <p key={i} className={i === 0 ? "mt-6 text-pretty text-lg leading-relaxed text-ink/85 sm:text-xl" : "mt-4 text-pretty text-lg leading-relaxed text-ink/75"}>
                {p}
              </p>
            ))}
          </>
        }
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={whatsappLink(message)} variant="primary">
            <MessageCircle className="size-4" aria-hidden />
            Agendar consulta
          </ButtonLink>
          <ButtonLink href="#faq" variant="outline">
            Perguntas frequentes
          </ButtonLink>
        </div>
      </PageHeader>

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
                  <a href="#quando-procurar" className="text-plum-800 hover:text-plum-900 hover:underline">
                    Quando procurar a advogada?
                  </a>
                </li>
                <li>
                  <a href="#erros-comuns" className="text-plum-800 hover:text-plum-900 hover:underline">
                    Erros comuns
                  </a>
                </li>
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

            <section id="quando-procurar" className="not-prose scroll-mt-24 rounded-2xl bg-sand p-6 sm:p-8">
              <h2 className="font-display text-balance text-2xl font-bold text-plum-900 sm:text-3xl">Quando procurar a advogada?</h2>
              <p className="mt-2 text-sm text-muted">Sinais de que é hora de uma consulta sobre {service.shortTitle.toLowerCase()}.</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.signals.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="erros-comuns" className="not-prose scroll-mt-24 rounded-2xl border border-line bg-white p-6 sm:p-8">
              <h2 className="font-display text-balance text-2xl font-bold text-plum-900 sm:text-3xl">Erros comuns que vemos nesses casos</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.mistakes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                    <AlertTriangle className="mt-0.5 size-4 shrink-0 text-plum-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

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
                <p className="mt-3 font-display text-2xl font-bold leading-snug">
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

      {posts.length > 0 && (
        <section aria-labelledby="posts-title" className="bg-ivory">
          <div className="container-site py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="posts-title" className="font-display text-balance text-2xl font-bold text-plum-900 sm:text-3xl">
                Conteúdo sobre {service.shortTitle.toLowerCase()}
              </h2>
              <Link href="/blog/" className="inline-flex items-center gap-1 text-sm font-semibold text-plum-800 hover:text-plum-900">
                Ver o blog
                <ArrowRight className="size-4 text-gold-500" aria-hidden />
              </Link>
            </div>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} compact />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

    </article>
  );
}
