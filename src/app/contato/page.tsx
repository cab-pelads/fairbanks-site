import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Navigation } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/InstagramIcon";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";

const title = "Contato e agendamento de consulta";
const description =
  "Fale com a Fairbanks Advocacia em São Paulo: WhatsApp (11) 99623-2400, e-mail contato@fairbanksadvocacia.com.br. Rua Tenente Gomes Ribeiro, 57, Cj. 25, Vila Clementino. Segunda a sexta, das 9h às 18h.";

export const metadata: Metadata = {
  title: "Contato",
  description,
  alternates: { canonical: "/contato/" },
  openGraph: { title: `${title} | ${site.name}`, description, url: "/contato/" },
};

export default function ContatoPage() {
  const crumbs = [{ name: "Início", path: "/" }, { name: "Contato" }];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/contato/", name: title, description, type: "ContactPage" }),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Contato"
        title="Converse sobre o seu caso com clareza"
        lead={
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            Um primeiro contato para compreender a situação, orientar os próximos passos e indicar a estratégia jurídica mais adequada. Atendimento presencial na Vila Clementino, em São Paulo, ou por videoconferência.
          </p>
        }
      />
      <section className="bg-white">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold text-plum-900">Canais de atendimento</h2>
            <address className="mt-8 space-y-5 not-italic">
              <a href={whatsappLink("Olá, gostaria de agendar uma consulta.")} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-plum-900 text-white">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">WhatsApp</span>
                  <span className="block text-lg font-semibold text-plum-900 group-hover:underline">{site.contact.phoneDisplay}</span>
                </span>
              </a>
              <a href={`mailto:${site.contact.email}`} className="group flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-plum-50 text-plum-800">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">E-mail</span>
                  <span className="block text-lg font-semibold text-plum-900 group-hover:underline">{site.contact.email}</span>
                </span>
              </a>
              <a href={site.founder.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-plum-50 text-plum-800">
                  <Instagram className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">Instagram</span>
                  <span className="block text-lg font-semibold text-plum-900 group-hover:underline">{site.founder.instagramHandle}</span>
                </span>
              </a>
              <p className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-plum-50 text-plum-800">
                  <Clock className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">Atendimento</span>
                  <span className="block text-lg font-semibold text-plum-900">{site.contact.hours}</span>
                </span>
              </p>
              <p className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-plum-50 text-plum-800">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">Endereço</span>
                  <span className="block text-lg font-semibold text-plum-900">{site.address.street}</span>
                  <span className="block text-muted">
                    {site.address.neighborhood}, {site.address.city}, {site.address.region}
                  </span>
                  <span className="mt-2 flex gap-4 text-sm">
                    <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-plum-800 hover:underline">
                      <Navigation className="size-3.5 text-gold-500" aria-hidden /> Google Maps
                    </a>
                    <a href={site.address.wazeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-plum-800 hover:underline">
                      <Navigation className="size-3.5 text-gold-500" aria-hidden /> Waze
                    </a>
                  </span>
                </span>
              </p>
            </address>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-plum-900">Envie uma mensagem</h2>
              <p className="mt-2 text-sm text-muted">
                Preencha os campos e a mensagem será montada para o WhatsApp ou e-mail do escritório.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Mapa de localização" className="bg-ivory">
        <div className="container-site py-16">
          <h2 className="font-display text-2xl font-bold text-plum-900">Como chegar</h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted">
            O escritório fica na Vila Clementino, zona sul de São Paulo, próximo à estação Santa
            Cruz do metrô e ao Hospital São Paulo (Unifesp).
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Mapa: Rua Tenente Gomes Ribeiro, 57, Vila Clementino, São Paulo"
              src={site.address.mapsEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
