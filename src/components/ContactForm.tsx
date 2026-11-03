"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { services } from "@/data/services";
import { site, whatsappLink } from "@/lib/site";
import { buttonClass } from "@/components/Button";

const inputCls =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted/70 focus:border-plum-700 focus:outline-none focus:ring-2 focus:ring-gold-400/40";

export function ContactForm({ defaultArea }: { defaultArea?: string }) {
  const [name, setName] = useState("");
  const [area, setArea] = useState(defaultArea ?? "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function compose() {
    const areaLabel = services.find((s) => s.slug === area)?.shortTitle ?? "Não informada";
    return `Olá, meu nome é ${name}.\nÁrea: ${areaLabel}.\n${message}`;
  }

  function validate() {
    if (!name.trim()) return "Informe seu nome.";
    if (!message.trim()) return "Descreva brevemente o que você precisa.";
    return null;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const err = validate();
    setError(err);
    if (err) return;
    window.open(whatsappLink(compose()), "_blank", "noopener,noreferrer");
  }

  function mailtoHref() {
    const subject = encodeURIComponent("Contato pelo site");
    const body = encodeURIComponent(compose());
    return `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="nome" className="text-sm font-semibold text-plum-900">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputCls}
          placeholder="Como devemos chamar você"
        />
      </div>
      <div>
        <label htmlFor="area" className="text-sm font-semibold text-plum-900">
          Área relacionada
        </label>
        <select id="area" name="area" value={area} onChange={(e) => setArea(e.target.value)} className={inputCls}>
          <option value="">Não sei / outra</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.shortTitle}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="text-sm font-semibold text-plum-900">
          Conte brevemente a situação
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputCls}
          placeholder="Ex.: preciso fazer o inventário do meu pai, que faleceu há 20 dias. Somos três herdeiros e estamos de acordo."
        />
      </div>
      {error && (
        <p role="alert" className="text-sm font-medium text-plum-600">
          {error}
        </p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className={buttonClass("primary", "w-full sm:w-auto")}>
          <MessageCircle className="size-4" aria-hidden />
          Enviar pelo WhatsApp
        </button>
        <a href={mailtoHref()} className={buttonClass("outline", "w-full sm:w-auto")}>
          <Mail className="size-4" aria-hidden />
          Enviar por e-mail
        </a>
      </div>
      <p className="text-xs text-muted">
        Ao enviar, você será direcionado ao WhatsApp ou ao seu aplicativo de e-mail com a mensagem
        pronta. Nenhum dado é armazenado neste site.
      </p>
    </form>
  );
}
