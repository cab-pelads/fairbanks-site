import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Primeiro contato",
    text: "Você escreve pelo WhatsApp ou e-mail. Entendemos o essencial e agendamos a consulta, presencial na Vila Clementino ou por videoconferência.",
  },
  {
    title: "Consulta e estratégia",
    text: "Analisamos fatos e documentos e explicamos, em linguagem clara, os caminhos possíveis, com prazos, custos e riscos. Honorários combinados em contrato.",
  },
  {
    title: "Condução do caso",
    text: "Acordo, procedimento em cartório ou ação judicial, com informação constante. Em demandas urgentes, pedidos liminares e atualização em tempo real.",
  },
];

export function ProcessSteps() {
  return (
    <section aria-labelledby="process-title" className="bg-white">
      <div className="container-site py-20">
        <SectionHeading
          eyebrow="Como funciona"
          title={<span id="process-title">Do primeiro contato à solução, em três etapas</span>}
        />
        <ol className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-display text-4xl font-bold leading-none text-gold-500">0{i + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-plum-900">{step.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
