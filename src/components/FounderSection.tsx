import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export function FounderSection() {
  return (
    <section aria-labelledby="founder-title" className="bg-white">
      <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="absolute -left-3 -bottom-3 h-full w-full rounded-3xl bg-gold-500" aria-hidden />
          <Image
            src="/images/cristiane-fairbanks-retrato.webp"
            alt="Dra. Cristiane Fairbanks, advogada, sentada em um sofá de couro preto, vestindo blazer preto"
            width={848}
            height={982}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="relative aspect-[4/5] w-full rounded-3xl object-cover"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
            A fundadora · {site.founder.oab}
          </p>
          <h2 id="founder-title" className="font-display text-balance text-3xl font-medium leading-tight text-plum-900 sm:text-4xl">
            {site.founder.honorific}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-ink/85">
            Advogada e Doutora pela Pontifícia Universidade Católica de São Paulo (PUC-SP), dedica-se
            à advocacia cível de família há mais de 20 anos. Acumula experiência em inventários,
            divórcios e partilhas, ações de guarda, regime de convivência parental e alimentos,
            procurando sempre a via da mediação entre ex-cônjuges e genitores.
          </p>
          <blockquote className="mt-6 border-l-2 border-gold-500 pl-5 font-display text-xl italic leading-snug text-plum-800">
            “A técnica jurídica deve sustentar decisões delicadas com transparência, serenidade e
            estratégia.”
          </blockquote>
          <ul className="mt-8 grid gap-3 text-sm text-ink/85 sm:grid-cols-2">
            <li className="rounded-xl bg-ivory px-4 py-3">Doutora pela PUC-SP e graduada em Filosofia</li>
            <li className="rounded-xl bg-ivory px-4 py-3">Pós-doutoranda em Educação pela Unifesp</li>
            <li className="rounded-xl bg-ivory px-4 py-3">Comissões de Família e Sucessões e de Soluções Consensuais da OAB/SP</li>
            <li className="rounded-xl bg-ivory px-4 py-3">Especialista em inventário e divórcio extrajudiciais</li>
          </ul>
          <ButtonLink href="/sobre/" variant="outline" className="mt-8">
            Conheça a trajetória completa
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
