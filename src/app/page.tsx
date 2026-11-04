import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
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
import { areaImage } from "@/lib/areaImages";
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


const mentions = ["Folha de S.Paulo", "Nova Brasil", "PUC-SP", "Unifesp"];


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
      <section className="bg-ivory lg:grid lg:grid-cols-[57fr_43fr]">
        <div className="px-4 py-16 sm:px-6 lg:py-24 lg:pl-[max(2rem,calc((100vw-76rem)/2+2rem))] lg:pr-12">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
              {site.founder.honorific} · {site.founder.oab}
            </p>
            <h1 className="font-display text-balance text-4xl font-bold leading-[1.1] text-plum-900 sm:text-[2.75rem] lg:text-[3rem]">
              Advocacia de família, sucessões e patrimônio em São Paulo
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink/80 sm:text-xl">
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
        </div>
        {/* Faixa vinho com a foto centralizada */}
        <div className="flex flex-col items-center justify-center border-t border-gold-500 bg-plum-900 px-6 py-12 lg:border-l lg:border-t-0 lg:py-14">
          <div className="relative w-full max-w-md lg:w-[74%] lg:max-w-[30rem]">
            <div className="absolute -left-3 -bottom-3 h-full w-full rounded-3xl bg-gold-500" aria-hidden />
            <Image
              src="/images/cristiane-fairbanks-escritorio.webp"
              alt="Dra. Cristiane Fairbanks em pé, de braços cruzados, diante de um quadro com a cidade de São Paulo"
              width={986}
              height={1273}
              priority
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top"
            />
          </div>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-white/70">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-400">Presença em</span>
            {mentions.map((m, i) => (
              <span key={m} className="flex items-center gap-x-3">
                {i > 0 && <span aria-hidden className="text-white/25">|</span>}
                <span className="font-medium">{m}</span>
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section aria-labelledby="areas-title" className="bg-ivory">
        <div className="container-site py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Áreas de atuação"
              title={<span id="areas-title">Em que podemos ajudar você</span>}
              text="Há mais de 20 anos atuamos em direito de família e sucessões, cível e consumidor, e também em direito educacional. Escolha a sua situação: cada área tem uma página com respostas diretas às dúvidas mais comuns."
            />
            <Link href="/servicos/" className="inline-flex items-center gap-1 text-sm font-semibold text-plum-800 hover:text-plum-900">
              Todas as áreas
              <ArrowRight className="size-4 text-gold-500" aria-hidden />
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const img = areaImage(s.slug);
              return (
                <li key={s.slug}>
                  <Link
                    href={`/servicos/${s.slug}/`}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-plum-900 sm:aspect-[4/4.6]"
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      style={{ objectPosition: img.position }}
                      className={cn(
                        "object-cover transition-transform duration-200 ease-out group-hover:scale-[1.04]",
                        img.mirror && "-scale-x-100 group-hover:scale-x-[-1.04] group-hover:scale-y-[1.04]",
                      )}
                    />
                    <span aria-hidden className="absolute inset-0 bg-[linear-gradient(to_top,rgba(42,19,35,0.92)_0%,rgba(42,19,35,0.55)_45%,rgba(42,19,35,0.05)_100%)]" />
                    <span className="absolute inset-x-0 bottom-0 p-5">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-400">
                        {categories[s.category].label}
                      </span>
                      <span className="mt-1.5 block text-balance text-lg font-semibold leading-snug text-white">
                        {s.shortTitle}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/80">
                        Saiba mais
                        <ArrowRight className="size-4 text-gold-400 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
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
