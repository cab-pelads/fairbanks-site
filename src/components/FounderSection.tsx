import Image from "next/image";
import { ArrowRight, Handshake, Landmark, FileCheck2 } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

const points = [
  {
    icon: Handshake,
    title: "Consenso antes do litígio",
    text: "Mediação, acordos e procedimentos em cartório sempre que a lei permite. O Judiciário é o último recurso.",
  },
  {
    icon: Landmark,
    title: "Foco na via extrajudicial",
    text: "Divórcios e inventários em tabelionato, com mais agilidade, transparência e menor custo.",
  },
  {
    icon: FileCheck2,
    title: "Honorários claros, em contrato",
    text: "Valores e etapas combinados por escrito antes de começar. Informação constante durante o caso.",
  },
];

export function FounderSection() {
  return (
    <section aria-labelledby="founder-title" className="bg-plum-900 text-white">
      <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Image
            src="/images/cristiane-fairbanks-retrato.webp"
            alt="Dra. Cristiane Fairbanks, advogada, sentada em um sofá de couro preto, vestindo blazer preto"
            width={848}
            height={982}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
            A fundadora · {site.founder.oab}
          </p>
          <h2 id="founder-title" className="font-display text-balance text-3xl font-medium leading-tight sm:text-4xl">
            {site.founder.honorific}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-white/80">
            Advogada e Doutora pela Pontifícia Universidade Católica de São Paulo (PUC-SP), dedica-se
            à advocacia cível de família há mais de 20 anos. Acumula experiência em inventários,
            divórcios e partilhas, ações de guarda, regime de convivência parental e alimentos,
            procurando sempre a via da mediação entre ex-cônjuges e genitores.
          </p>
          <blockquote className="mt-6 border-l-2 border-gold-400 pl-5 font-display text-xl italic leading-snug text-gold-200">
            “A técnica jurídica deve sustentar decisões delicadas com transparência, serenidade e
            estratégia.”
          </blockquote>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {points.map((p) => (
              <li key={p.title}>
                <p.icon className="size-5 text-gold-400" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-white/70">{p.text}</p>
              </li>
            ))}
          </ul>
          <ButtonLink href="/sobre/" variant="outline-light" className="mt-8">
            Conheça a trajetória completa
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
