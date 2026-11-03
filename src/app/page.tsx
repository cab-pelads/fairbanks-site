import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FounderSection } from "@/components/FounderSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PressSection } from "@/components/PressSection";
import { BlogPreview } from "@/components/BlogPreview";
import { WhyUs } from "@/components/WhyUs";
import { CtaSection } from "@/components/CtaSection";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Monogram } from "@/components/Logo";
import { services } from "@/data/services";
import { faqSchema, graph, servicesListSchema, webPageSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

const title = "Advocacia de Família, Sucessões e Patrimônio em São Paulo";
const description =
  "Fairbanks Advocacia: escritório em São Paulo com mais de 20 anos em direito de família, divórcio, guarda, pensão alimentícia, inventário, planejamento sucessório, direito imobiliário e educacional. Dra. Cristiane Fairbanks, OAB/SP 274.480.";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | ${title}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: `${site.name} | ${title}`, description, url: "/" },
};

const homeFaq = [
  {
    q: "Quais áreas do direito a Fairbanks Advocacia atende?",
    a: "Direito de família (casamento, união estável, divórcio, guarda, pensão alimentícia, alienação parental e guarda de pets), inventário e sucessões, planejamento sucessório, direito imobiliário, locações de imóveis e direito educacional.",
  },
  {
    q: "Onde fica o escritório e como é o atendimento?",
    a: "O escritório fica na Rua Tenente Gomes Ribeiro, 57, Cj. 25, Vila Clementino, São Paulo, SP, de segunda a sexta, das 9h às 18h. O atendimento pode ser presencial ou por videoconferência, com primeiro contato pelo WhatsApp (11) 99623-2400 ou por e-mail.",
  },
  {
    q: "Quem é a advogada responsável?",
    a: "A Dra. Cristiane Fairbanks, OAB/SP 274.480, advogada e Doutora pela PUC-SP, com mais de 20 anos de atuação em direito de família e sucessões, pós-doutoranda em Educação pela Unifesp e integrante de comissões da OAB/SP.",
  },
  {
    q: "O escritório prioriza acordos ou processos judiciais?",
    a: "Sempre que possível, a solução consensual e extrajudicial, em cartório ou por mediação, por ser mais rápida, mais econômica e menos desgastante. Quando não há acordo, o escritório atua no Judiciário com a mesma dedicação.",
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "Na consulta, a advogada ouve o relato, analisa os documentos disponíveis e explica os caminhos possíveis, com prazos, custos e riscos de cada um. Os honorários são informados antes do início de qualquer trabalho e formalizados em contrato.",
  },
  {
    q: "O escritório atende pessoas de fora de São Paulo?",
    a: "Sim. O atendimento por videoconferência permite orientar clientes de outras cidades, e procedimentos em cartório podem ser feitos por procuração. Demandas judiciais em outras comarcas são analisadas caso a caso.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/", name: `${site.name} | ${title}`, description, primaryImage: "/images/cristiane-fairbanks-escritorio.webp" }),
          servicesListSchema(services),
          faqSchema(homeFaq),
        )}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-950 text-white">
        <Monogram className="pointer-events-none absolute -left-24 -bottom-24 w-[28rem] opacity-[0.05]" />
        <div className="container-site relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
              {site.founder.honorific} · {site.founder.oab}
            </p>
            <h1 className="font-display text-balance text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
              Advocacia de família, sucessões e patrimônio em São Paulo
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
              Direito tratado com estratégia, escuta e presença. Atuação jurídica para decisões
              sensíveis envolvendo família, patrimônio, sucessão e reorganização de vínculos, há
              mais de 20 anos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink("Olá, gostaria de agendar uma consulta.")} variant="gold">
                <MessageCircle className="size-4" aria-hidden />
                Solicitar atendimento
              </ButtonLink>
              <ButtonLink href="/servicos/" variant="outline-light">
                Ver áreas de atuação
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Experiência</dt>
                <dd className="mt-1 font-display text-3xl font-medium text-gold-400">20+ anos</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Áreas</dt>
                <dd className="mt-1 font-display text-3xl font-medium text-gold-400">12</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Doutorado</dt>
                <dd className="mt-1 font-display text-3xl font-medium text-gold-400">PUC-SP</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Comissões OAB/SP</dt>
                <dd className="mt-1 font-display text-3xl font-medium text-gold-400">5</dd>
              </div>
            </dl>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-3xl border border-gold-500/70" aria-hidden />
            <Image
              src="/images/cristiane-fairbanks-escritorio.webp"
              alt="Dra. Cristiane Fairbanks em pé, de braços cruzados, diante de um quadro com a cidade de São Paulo"
              width={986}
              height={1273}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section aria-labelledby="areas-title" className="bg-ivory">
        <div className="container-site py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Áreas de atuação"
              title={<span id="areas-title">Direito de família, sucessões, imobiliário e educacional</span>}
              text="Há mais de 20 anos atuamos em direito de família e sucessões, cível e consumidor, e também em direito educacional. Cada área tem uma página própria, com explicações diretas e respostas às dúvidas mais comuns."
            />
            <Link href="/servicos/" className="inline-flex items-center gap-1 text-sm font-semibold text-plum-800 hover:text-plum-900">
              Todas as áreas
              <ArrowRight className="size-4 text-gold-500" aria-hidden />
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} showCategory />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FounderSection />
      <ProcessSteps />
      <WhyUs />
      <BlogPreview />
      <PressSection />

      <section className="bg-white">
        <div className="container-site max-w-3xl py-20">
          <Faq items={homeFaq} title="Perguntas frequentes sobre o escritório" />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
