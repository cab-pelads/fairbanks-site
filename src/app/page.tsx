import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { FounderSection } from "@/components/FounderSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { BlogPreview } from "@/components/BlogPreview";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { categories, services, type ServiceCategory } from "@/data/services";
import { faqSchema, graph, servicesListSchema, webPageSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

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
    q: "Como funciona a primeira consulta?",
    a: "Na consulta, a advogada ouve o relato, analisa os documentos disponíveis e explica os caminhos possíveis, com prazos, custos e riscos de cada um. Os honorários são informados antes do início de qualquer trabalho e formalizados em contrato.",
  },
  {
    q: "O escritório prioriza acordos ou processos judiciais?",
    a: "Sempre que possível, a solução consensual e extrajudicial, em cartório ou por mediação, por ser mais rápida, mais econômica e menos desgastante. Quando não há acordo, o escritório atua no Judiciário com a mesma dedicação.",
  },
];

const trust = [
  { label: "Inscrição", value: site.founder.oab },
  { label: "Formação", value: "Doutorado PUC-SP" },
  { label: "Experiência", value: "Mais de 20 anos" },
  { label: "Atuação", value: "São Paulo e online" },
];

const mentions = ["Folha de S.Paulo", "Nova Brasil", "PUC-SP", "Unifesp"];

function AreaBlock({ cat, className }: { cat: ServiceCategory; className?: string }) {
  const items = services.filter((s) => s.category === cat);
  return (
    <div className={cn("rounded-3xl border border-line bg-white p-7 sm:p-8", className)}>
      <h3 className="font-display text-2xl font-medium text-plum-900">{categories[cat].label}</h3>
      <p className="mt-2 text-pretty text-sm text-muted">{categories[cat].description}</p>
      <ul className="mt-5">
        {items.map((s) => (
          <li key={s.slug} className="border-t border-line">
            <Link
              href={`/servicos/${s.slug}/`}
              className="group flex items-center justify-between gap-3 py-3 text-sm font-semibold text-plum-900 hover:text-plum-700"
            >
              {s.shortTitle}
              <ChevronRight className="size-4 shrink-0 text-gold-500 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
      <section className="bg-ivory">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
              {site.founder.honorific} · {site.founder.oab}
            </p>
            <h1 className="font-display text-balance text-4xl font-medium leading-[1.05] text-plum-900 sm:text-5xl lg:text-6xl">
              Advocacia de família, sucessões e patrimônio em São Paulo
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink/80 sm:text-xl">
              Direito tratado com estratégia, escuta e presença. Atuação jurídica para decisões
              sensíveis envolvendo família, patrimônio, sucessão e reorganização de vínculos, há
              mais de 20 anos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink("Olá, gostaria de agendar uma consulta.")} variant="primary">
                <MessageCircle className="size-4" aria-hidden />
                Solicitar atendimento
              </ButtonLink>
              <ButtonLink href="/servicos/" variant="outline">
                Ver áreas de atuação
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-3xl bg-plum-900" aria-hidden />
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

      {/* Faixa de confiança */}
      <section aria-label="Credenciais" className="border-y border-line bg-white">
        <div className="container-site flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
            {trust.map((t) => (
              <div key={t.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{t.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold text-plum-900">{t.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:justify-end">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Presença em</span>
            {mentions.map((m) => (
              <span key={m} className="font-display text-lg font-medium text-ink/45">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de atuação em quatro blocos */}
      <section aria-labelledby="areas-title" className="bg-ivory">
        <div className="container-site py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Áreas de atuação"
              title={<span id="areas-title">Direito de família, sucessões, imobiliário e educacional</span>}
              text="Há mais de 20 anos atuamos em direito de família e sucessões, cível e consumidor, e também em direito educacional. Cada área tem uma página própria com respostas às dúvidas mais comuns."
            />
            <Link href="/servicos/" className="inline-flex items-center gap-1 text-sm font-semibold text-plum-800 hover:text-plum-900">
              Todas as áreas
              <ArrowRight className="size-4 text-gold-500" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <AreaBlock cat="familia" className="lg:col-span-7" />
            <div className="grid gap-6 lg:col-span-5">
              <AreaBlock cat="sucessoes" />
              <AreaBlock cat="patrimonio" />
              <AreaBlock cat="educacional" />
            </div>
          </div>
        </div>
      </section>

      <FounderSection />
      <ProcessSteps />
      <BlogPreview />

      <section className="bg-white">
        <div className="container-site max-w-3xl py-20">
          <Faq items={homeFaq} title="Perguntas frequentes sobre o escritório" />
        </div>
      </section>
    </>
  );
}
