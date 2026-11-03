import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Primeiro contato",
    text: "Você nos escreve pelo WhatsApp ou e-mail. Entendemos o essencial da situação e agendamos a consulta, presencial na Vila Clementino ou por videoconferência.",
  },
  {
    title: "Consulta e diagnóstico",
    text: "Analisamos fatos e documentos e explicamos, em linguagem clara, os caminhos possíveis, os prazos, os custos e os riscos de cada um.",
  },
  {
    title: "Estratégia definida",
    text: "Escolhemos juntos a via mais adequada: acordo, mediação, procedimento em cartório ou ação judicial. Honorários combinados em contrato escrito.",
  },
  {
    title: "Condução com presença",
    text: "Você acompanha cada etapa com informação constante. Em demandas urgentes, como alimentos, atuamos com pedidos liminares e atualização em tempo real.",
  },
];

export function ProcessSteps() {
  return (
    <section aria-labelledby="process-title" className="bg-plum-900 text-white">
      <div className="container-site py-20">
        <SectionHeading
          eyebrow="Como funciona"
          title={<span id="process-title">Um atendimento com método, do primeiro contato à solução</span>}
          text="Direito tratado com estratégia, escuta e presença. Assim conduzimos cada caso."
          tone="light"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative border-t border-gold-500/70 pt-6">
              <span className="font-display text-4xl font-medium text-gold-400">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-medium text-white">{step.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-white/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
