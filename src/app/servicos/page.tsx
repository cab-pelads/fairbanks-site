import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { categories, services, type ServiceCategory } from "@/data/services";
import { breadcrumbSchema, graph, servicesListSchema, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "Áreas de atuação: família, sucessões, imobiliário e educacional";
const description =
  "Conheça as áreas de atuação da Fairbanks Advocacia em São Paulo: direito de família, divórcio, guarda, pensão alimentícia, inventário, planejamento sucessório, direito imobiliário, locações e direito educacional.";

export const metadata: Metadata = {
  title: "Áreas de atuação",
  description,
  alternates: { canonical: "/servicos/" },
  openGraph: { title: `${title} | ${site.name}`, description, url: "/servicos/" },
};

const order: ServiceCategory[] = ["familia", "sucessoes", "patrimonio", "educacional"];
const crumbs = [{ name: "Início", path: "/" }, { name: "Áreas de atuação" }];

export default function ServicosPage() {
  return (
    <>
      <JsonLd
        data={graph(
          { ...webPageSchema({ path: "/servicos/", name: title, description, type: "CollectionPage" }) },
          servicesListSchema(services),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Áreas de atuação"
        title="Advocacia para família, sucessões, patrimônio e educação"
        lead={
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            Há mais de 20 anos a Fairbanks Advocacia atua em direito de família e sucessões, cível e consumidor, e também em direito educacional. Cada área abaixo tem uma página própria, com explicações diretas, sinais de que é hora de procurar a advogada e respostas às perguntas mais frequentes.
          </p>
        }
        aside={
          <Image
            src="/images/areas-de-atuacao-colagem.webp"
            alt="Colagem com objetos que representam as áreas do escritório: alianças, balança, chaves de casa, coleira de pet, beca de formatura e testamento"
            width={965}
            height={1072}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="mx-auto w-full max-w-sm"
          />
        }
      />

      {order.map((cat, i) => (
        <section key={cat} aria-labelledby={`cat-${cat}`} className={i % 2 === 0 ? "bg-white" : "bg-ivory"}>
          <div className="container-site grid gap-8 py-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">{String(i + 1).padStart(2, "0")}</p>
              <h2 id={`cat-${cat}`} className="mt-2 font-display text-balance text-3xl font-medium text-plum-900">
                {categories[cat].label}
              </h2>
              <p className="mt-3 max-w-sm text-pretty text-muted">{categories[cat].description}</p>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {services
                .filter((s) => s.category === cat)
                .map((s) => (
                  <li key={s.slug}>
                    <ServiceCard service={s} />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      ))}

    </>
  );
}
