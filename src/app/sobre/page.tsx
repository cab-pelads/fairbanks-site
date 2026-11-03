import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/InstagramIcon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { publications } from "@/data/press";
import { breadcrumbSchema, graph, PERSON_ID, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "Sobre a Dra. Cristiane Fairbanks e o escritório";
const description =
  "Conheça a Dra. Cristiane Fairbanks, OAB/SP 274.480, advogada e Doutora pela PUC-SP com mais de 20 anos em direito de família e sucessões, e a forma de trabalhar da Fairbanks Advocacia em São Paulo.";

export const metadata: Metadata = {
  title: "Sobre a Dra. Cristiane Fairbanks",
  description,
  alternates: { canonical: "/sobre/" },
  openGraph: { title: `${title} | ${site.name}`, description, url: "/sobre/", type: "profile" },
};

const commissions = [
  "Comissão Especial da Advocacia de Família e Sucessões",
  "Comissão de Soluções Consensuais de Conflitos",
  "Comissão Especial de Direito Notarial e Registros Públicos",
  "Comissão Permanente de Mulheres Advogadas",
  "Comissão Especial do Acadêmico e da Acadêmica de Direito",
];

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({ path: "/sobre/", name: title, description, type: "ProfilePage", primaryImage: "/images/cristiane-fairbanks-retrato.webp" }),
            mainEntity: { "@id": PERSON_ID },
          },
          breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Sobre" }]),
        )}
      />
      <div className="bg-ivory">
        <div className="container-site py-6">
          <Breadcrumbs items={[{ name: "Início", path: "/" }, { name: "Sobre" }]} />
        </div>
      </div>

      <section className="bg-ivory">
        <div className="container-site grid gap-12 pb-20 pt-4 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              as="h1"
              eyebrow={`A fundadora · ${site.founder.oab}`}
              title="Dra. Cristiane Fairbanks"
              text="Advogada e Doutora pela Pontifícia Universidade Católica de São Paulo (PUC-SP), dedica-se à advocacia cível de família há mais de 20 anos."
            />
            <div className="prose-fb mt-8 max-w-none">
              <p>
                Ao longo dessas duas décadas, a Dra. Cris Fairbanks acumulou experiência na realização
                de inventários, divórcios e partilhas, ações de guarda, regime de convivência parental
                e alimentos. Em todos esses casos procura a via da mediação entre ex-cônjuges e
                genitores, defendendo a máxima de que uma decisão construída e tomada em conjunto
                terá mais chances de sucesso do que uma sentença determinada pelo Judiciário.
              </p>
              <h2>Por que a via extrajudicial?</h2>
              <p>
                Com o crescimento do direito extrajudicial e a possibilidade de resolver demandas de
                família e de sucessão diretamente nos tabelionatos, o escritório ganhou ainda mais
                agilidade, transparência e redução de custos. Compor os interesses e realizar os
                procedimentos em cartório permite o acesso ao patrimônio de forma muito mais rápida,
                sem abrir mão da segurança jurídica.
              </p>
              <h2>Formação e pesquisa</h2>
              <p>
                Além do doutorado em Direito pela PUC-SP, a Dra. Cristiane é formada em Filosofia,
                pesquisadora e escritora. É pós-doutoranda em Educação pela Universidade Federal de
                São Paulo (Unifesp), onde desenvolve pesquisas sobre a universidade e o direito
                educacional. Sua produção acadêmica está disponível no Currículo Lattes.
              </p>
              <h2>Atuação institucional na OAB/SP</h2>
              <p>Integra as seguintes comissões da Ordem dos Advogados do Brasil, Seccional São Paulo:</p>
              <ul>
                {commissions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <h2>Como trabalhamos</h2>
              <p>
                Direito tratado com estratégia, escuta e presença. Cada caso começa com uma consulta
                em que explicamos, em linguagem clara, as alternativas, os prazos e os custos.
                Priorizamos acordos e procedimentos em cartório. Quando o litígio é necessário,
                atuamos no Judiciário com firmeza e mantemos o cliente informado em cada etapa.
              </p>
              <blockquote>
                A técnica jurídica deve sustentar decisões delicadas com transparência, serenidade e
                estratégia.
              </blockquote>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.founder.lattes} variant="outline">
                Currículo Lattes
                <ExternalLink className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={site.founder.instagram} variant="outline">
                <Instagram className="size-4" aria-hidden />
                {site.founder.instagramHandle}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="relative">
                <div className="absolute -right-3 -bottom-3 h-full w-full rounded-3xl bg-plum-900" aria-hidden />
                <Image
                  src="/images/cristiane-fairbanks-retrato.webp"
                  alt="Retrato da Dra. Cristiane Fairbanks, advogada, de blazer preto e óculos, sentada em sofá de couro"
                  width={848}
                  height={982}
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="relative w-full rounded-3xl object-cover"
                />
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-line bg-white p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Inscrição</dt>
                  <dd className="mt-1 font-semibold text-plum-900">{site.founder.oab}</dd>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Experiência</dt>
                  <dd className="mt-1 font-semibold text-plum-900">Mais de 20 anos</dd>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Doutorado</dt>
                  <dd className="mt-1 font-semibold text-plum-900">PUC-SP</dd>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Pós-doutorado</dt>
                  <dd className="mt-1 font-semibold text-plum-900">Educação, Unifesp</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="pub-title" className="bg-white">
        <div className="container-site py-20">
          <SectionHeading
            eyebrow="Publicações"
            title={<span id="pub-title">Produção acadêmica e artigos</span>}
            text="Pesquisas e publicações da Dra. Cristiane Fairbanks no campo da educação e do direito educacional."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {publications.map((p) => (
              <li key={p.title} className="flex flex-col rounded-2xl border border-line bg-ivory p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">{p.publisher}</p>
                <h3 className="mt-2 text-balance font-sans text-base font-semibold leading-snug text-plum-900">{p.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">{p.description}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-plum-800 hover:text-plum-900"
                >
                  Ver publicação
                  <ExternalLink className="size-3.5 text-gold-500" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
