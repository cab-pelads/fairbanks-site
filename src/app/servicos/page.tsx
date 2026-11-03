import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
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

export default function ServicosPage() {
  return (
    <>
      <JsonLd
        data={graph(
          { ...webPageSchema({ path: "/servicos/", name: title, description, type: "CollectionPage" }) },
          servicesListSchema(services),
          breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Áreas de atuação" }]),
        )}
      />
      <div className="bg-ivory">
        <div className="container-site py-6">
          <Breadcrumbs items={[{ name: "Início", path: "/" }, { name: "Áreas de atuação" }]} />
        </div>
      </div>
      <section className="bg-ivory">
        <div className="container-site grid gap-10 pb-16 pt-4 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              as="h1"
              eyebrow="Áreas de atuação"
              title="Advocacia para família, sucessões, patrimônio e educação"
              text="Há mais de 20 anos a Fairbanks Advocacia atua em direito de família e sucessões, cível e consumidor, e também em direito educacional. Cada área abaixo tem uma página própria, com explicações diretas e respostas às perguntas mais frequentes."
            />
          </div>
          <div className="lg:col-span-5">
            <Image
              src="/images/areas-de-atuacao-colagem.webp"
              alt="Colagem com objetos que representam as áreas do escritório: alianças, balança, chaves de casa, coleira de pet, beca de formatura e testamento"
              width={965}
              height={1072}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="mx-auto w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {order.map((cat, i) => (
        <section key={cat} aria-labelledby={`cat-${cat}`} className={i % 2 === 0 ? "bg-white" : "bg-ivory"}>
          <div className="container-site py-16">
            <h2 id={`cat-${cat}`} className="font-display text-balance text-3xl font-medium text-plum-900">
              {categories[cat].label}
            </h2>
            <p className="mt-2 max-w-2xl text-pretty text-muted">{categories[cat].description}</p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      <CtaSection />
    </>
  );
}
