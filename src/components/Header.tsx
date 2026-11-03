import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { nav, whatsappLink } from "@/lib/site";
import { buttonClass } from "@/components/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-plum-900 text-white">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-plum-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <div className="container-site relative flex h-18 items-center justify-between gap-6">
        <Link href="/" aria-label="Fairbanks Advocacia, página inicial" className="shrink-0">
          <Logo variant="white" priority className="w-40 sm:w-48" />
        </Link>
        <nav aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Olá, gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("gold", "hidden px-5 py-2.5 lg:inline-flex")}
          >
            <MessageCircle className="size-4" aria-hidden />
            Agendar consulta
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
