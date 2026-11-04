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


const areaCards: { cat: ServiceCategory; imageSlug: string; text: string }[] = [
  {
    cat: "familia",
    imageSlug: "direito-de-familia",
    text: "Casamento e união estável, divórcio, guarda dos filhos, pensão alimentícia, alienação parental e guarda de pets.",
  },
  {
    cat: "sucessoes",
    imageSlug: "inventario-e-sucessoes",
    text: "Inventário em cartório ou judicial, partilha de herança, testamento e planejamento sucessório.",
  },
  {
    cat: "patrimonio",
    imageSlug: "direito-imobiliario",
    text: "Compra e venda de imóveis com segurança, leilões, contratos de locação, despejo e tributação de aluguéis.",
  },
  {
    cat: "educacional",
    imageSlug: "direito-educacional",
    text: "Acesso e permanência, contratos com instituições de ensino, inclusão e o direito à educação.",
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
      <section className="bg-ivory lg:grid lg:grid-cols-[57fr_43fr] lg:items-stretch">
        <div className="flex items-center px-4 py-16 sm:px-6 lg:py-20 lg:pl-[max(1.5rem,calc((100vw-76rem)/2+0.5rem))] lg:pr-12">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold-600 sm:text-[15px]">
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
            <p className="mt-4 text-pretty text-base leading-relaxed text-ink/70 sm:text-lg">
              Divórcio, guarda, pensão, inventário, planejamento sucessório e imóveis, com
              prioridade para acordos e procedimentos em cartório. Atendimento presencial na Vila
              Clementino, em São Paulo, ou por videoconferência.
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

      {/* Áreas de atuação: só as quatro áreas, levando ao índice completo */}
      <section aria-labelledby="areas-title" className="bg-ivory">
        <div className="container-site py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Áreas de atuação"
              title={<span id="areas-title">Em que podemos ajudar você</span>}
              text="Quatro frentes de atuação, há mais de 20 anos. Escolha a sua situação para ver os serviços de cada área e as respostas às dúvidas mais comuns."
            />
            <ButtonLink href="/servicos/" variant="outline">
              Ver todas as áreas
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areaCards.map((card) => {
              const img = areaImage(card.imageSlug);
              const count = services.filter((s) => s.category === card.cat).length;
              return (
                <li key={card.cat}>
                  <Link
                    href={`/servicos/#cat-${card.cat}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-150 hover:border-gold-400"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden bg-sand">
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        style={{ objectPosition: img.position }}
                        className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.04]"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-600">
                        {count === 1 ? "1 serviço" : `${count} serviços`}
                      </span>
                      <span className="mt-1.5 block font-display text-xl font-bold leading-snug text-plum-900">
                        {categories[card.cat].label}
                      </span>
                      <span className="mt-2 block flex-1 text-pretty text-sm leading-relaxed text-muted">{card.text}</span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-plum-800">
                        Ver serviços
                        <ArrowRight className="size-4 text-gold-500 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
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
