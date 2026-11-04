import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Users, Heart, Scale, Shield } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/InstagramIcon";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
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

const trajectory = [
  { label: "Formação", title: "Direito e Filosofia", text: "Graduada em Direito e em Filosofia, base que une técnica jurídica e reflexão sobre as pessoas por trás de cada processo." },
  { label: "Doutorado", title: "PUC-SP", text: "Doutora pela Pontifícia Universidade Católica de São Paulo, uma das principais escolas de Direito do país." },
  { label: "Advocacia", title: "Mais de 20 anos em família e sucessões", text: "Inventários, divórcios e partilhas, guarda, convivência e alimentos, com prioridade para a mediação e a via extrajudicial." },
  { label: "Pesquisa", title: "Pós-doutorado em Educação (Unifesp)", text: "Pesquisa sobre a universidade, o acesso e a permanência de estudantes e o direito educacional, com publicações na área." },
  { label: "Instituição", title: "Cinco comissões da OAB/SP", text: "Participação ativa em comissões de família e sucessões, soluções consensuais, direito notarial, mulheres advogadas e acadêmicos." },
  { label: "Imprensa", title: "Rádio, jornal e publicações", text: "Participações no Jornal Nova Manhã (Nova Brasil), reportagem na Folha de S.Paulo e publicações acadêmicas." },
];

const values = [
  { icon: Heart, title: "Escuta", text: "Divórcio, guarda e inventário tocam o emocional. Ouvimos antes de propor qualquer caminho." },
  { icon: Scale, title: "Estratégia", text: "Cada decisão é tomada com o mapa completo: alternativas, prazos, custos e riscos explicados em linguagem clara." },
  { icon: Users, title: "Presença", text: "A advogada conduz o caso pessoalmente e mantém o cliente informado em cada etapa." },
  { icon: Shield, title: "Sigilo e transparência", text: "Tudo o que é tratado fica protegido pelo sigilo profissional. Honorários combinados por escrito, antes de começar." },
];

const profiles = [
  "Casais que vão casar ou formalizar união estável e querem definir o regime de bens.",
  "Pessoas em processo de separação, com ou sem filhos, que preferem resolver por acordo.",
  "Mães e pais que precisam regulamentar guarda, convivência ou pensão alimentícia.",
  "Famílias que perderam alguém e precisam fazer o inventário com rapidez e segurança.",
  "Quem deseja planejar a sucessão do patrimônio em vida, com testamento, doações ou holding.",
  "Compradores, vendedores e proprietários de imóveis, inclusive em leilões e locações.",
  "Estudantes, famílias e instituições com conflitos ligados ao direito à educação.",
];

const crumbs = [{ name: "Início", path: "/" }, { name: "Sobre" }];

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({ path: "/sobre/", name: title, description, type: "ProfilePage", primaryImage: "/images/cristiane-fairbanks-retrato.webp" }),
            mainEntity: { "@id": PERSON_ID },
          },
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow={`A fundadora · ${site.founder.oab}`}
        title="Dra. Cristiane Fairbanks"
        lead={
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            Advogada e Doutora pela Pontifícia Universidade Católica de São Paulo (PUC-SP), dedica-se à advocacia cível de família há mais de 20 anos, procurando sempre a via da mediação entre ex-cônjuges e genitores.
          </p>
        }
        aside={
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-3xl bg-plum-900" aria-hidden />
            <Image
              src="/images/cristiane-fairbanks-retrato.webp"
              alt="Retrato da Dra. Cristiane Fairbanks, advogada, de blazer preto e óculos, sentada em sofá de couro"
              width={848}
              height={982}
              priority
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="relative w-full rounded-3xl object-cover"
            />
          </div>
        }
      >
        <dl className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          {[
            ["Inscrição", site.founder.oab],
            ["Experiência", "20+ anos"],
            ["Doutorado", "PUC-SP"],
            ["Pós-doutorado", "Unifesp"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{k}</dt>
              <dd className="mt-1 font-display text-xl font-bold text-plum-900">{v}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <section className="bg-white">
        <div className="container-site grid gap-12 py-20 lg:grid-cols-12">
          <div className="prose-fb max-w-none lg:col-span-8">
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
            <p>
              Desde a Lei 11.441/2007, divórcios, dissoluções de união estável e inventários
              consensuais podem ser feitos por escritura pública. As atualizações da Resolução 35 do
              Conselho Nacional de Justiça ampliaram essas hipóteses, inclusive para inventários com
              herdeiros menores e com testamento. O escritório acompanha essas mudanças de perto e
              as aplica em favor do cliente.
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
            <h2>Como é a consulta?</h2>
            <p>
              A primeira consulta serve para entender a situação e organizar o caminho. A advogada
              ouve o relato, analisa os documentos disponíveis e explica as alternativas: acordo,
              mediação, procedimento em cartório ou ação judicial, com os prazos, os custos e os
              riscos de cada uma. Ao final, o cliente sai sabendo o que fazer primeiro. Os honorários
              são informados nesse momento e formalizados em contrato antes do início do trabalho.
            </p>
            <blockquote>
              A técnica jurídica deve sustentar decisões delicadas com transparência, serenidade e
              estratégia.
            </blockquote>
            <div className="not-prose mt-8 flex flex-col gap-3 sm:flex-row">
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
          <aside className="lg:col-span-4">
            <div className="rounded-2xl bg-plum-900 p-6 text-white lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">Para quem é o escritório</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                {profiles.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="traj-title" className="bg-white">
        <div className="container-site py-20">
          <SectionHeading eyebrow="Trajetória" title={<span id="traj-title">Formação, advocacia e pesquisa</span>} />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trajectory.map((t) => (
              <li key={t.title} className="border-t-2 border-gold-500 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">{t.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-plum-900">{t.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-ivory">
        <div className="container-site py-20">
          <SectionHeading eyebrow="Como atendemos" title={<span id="values-title">Quatro compromissos com cada cliente</span>} align="center" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="border-t-2 border-gold-500 pt-5">
                <v.icon className="size-5 text-plum-800" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-plum-900">{v.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="pub-title" className="bg-sand">
        <div className="container-site py-20">
          <SectionHeading
            eyebrow="Publicações"
            title={<span id="pub-title">Produção acadêmica</span>}
            text="Pesquisas e publicações da Dra. Cristiane Fairbanks no campo da educação e do direito educacional."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {publications.map((p) => (
              <li key={p.title} className="flex flex-col rounded-2xl border border-line bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">{p.publisher}</p>
                <h3 className="mt-2 text-balance font-sans text-base font-semibold leading-snug text-plum-900">{p.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">{p.description}</p>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-plum-800 hover:text-plum-900">
                  Ver publicação
                  <ExternalLink className="size-3.5 text-gold-500" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}
