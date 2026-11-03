import Image from "next/image";
import { press } from "@/data/press";
import { SectionHeading } from "@/components/SectionHeading";

export function PressSection() {
  return (
    <section aria-labelledby="press-title" className="bg-sand">
      <div className="container-site py-20">
        <SectionHeading
          eyebrow="Na mídia"
          title={<span id="press-title">Presença em veículos de imprensa e publicações</span>}
          text="Participações e entrevistas da Dra. Cristiane Fairbanks em rádio, jornal e publicações acadêmicas."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {press.map((item) => (
            <li key={item.title} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative aspect-[16/9] bg-plum-50">
                <Image
                  src={item.image}
                  alt={`${item.outlet}: ${item.title}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">{item.outlet}</p>
                <h3 className="mt-2 text-balance font-sans text-base font-semibold leading-snug text-plum-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{item.description}</p>
                {item.date && (
                  <time dateTime={item.date} className="mt-3 text-xs text-muted">
                    {new Date(item.date + "T12:00:00").toLocaleDateString("pt-BR")}
                  </time>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
