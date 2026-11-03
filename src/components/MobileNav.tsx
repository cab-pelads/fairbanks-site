"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { nav, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-11 items-center justify-center rounded-full text-plum-900 hover:bg-plum-50"
      >
        {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
      </button>
      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          "absolute inset-x-0 top-full border-b border-line bg-ivory shadow-lg",
          open ? "block" : "hidden",
        )}
      >
        <nav aria-label="Menu principal (celular)" className="container-site flex flex-col py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-plum-900 hover:bg-plum-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Olá, gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-plum-900 px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" aria-hidden />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </div>
  );
}
