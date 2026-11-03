import { Handshake, Landmark, GraduationCap, Scale, Clock, FileCheck2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  {
    icon: Handshake,
    title: "Consenso antes do litígio",
    text: "Mediação, acordos e procedimentos em cartório sempre que a lei permite. O Judiciário é o último recurso, não o primeiro.",
  },
  {
    icon: Landmark,
    title: "Especialista em via extrajudicial",
    text: "Divórcios e inventários em tabelionato, com agilidade, transparência e redução de custos. Integrante da Comissão de Direito Notarial da OAB/SP.",
  },
  {
    icon: Scale,
    title: "Mais de 20 anos em família e sucessões",
    text: "Experiência acumulada em inventários, partilhas, guarda, convivência e alimentos, dos casos simples aos mais delicados.",
  },
  {
    icon: GraduationCap,
    title: "Formação acadêmica sólida",
    text: "Doutora pela PUC-SP, graduada em Filosofia e pós-doutoranda em Educação pela Unifesp. Técnica jurídica com profundidade.",
  },
  {
    icon: Clock,
    title: "Informação em tempo real",
    text: "Você acompanha cada etapa do caso. Em demandas urgentes, como alimentos, atuamos com pedidos liminares e atualização constante.",
  },
  {
    icon: FileCheck2,
    title: "Honorários claros, em contrato",
    text: "Valores e etapas combinados por escrito antes de começar. Sem surpresas no meio do caminho.",
  },
];

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="bg-white">
      <div className="container-site py-20">
        <SectionHeading
          eyebrow="Por que a Fairbanks"
          title={<span id="why-title">Estratégia, escuta e presença em cada decisão</span>}
          text="O que diferencia o atendimento do escritório, da primeira conversa à solução do caso."
          align="center"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line bg-ivory p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-plum-900 text-gold-400">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-medium leading-snug text-plum-900">{item.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
