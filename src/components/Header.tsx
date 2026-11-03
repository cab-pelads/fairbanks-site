import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { nav, whatsappLink } from "@/lib/site";
import { buttonClass } from "@/components/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur supports-[backdrop-filter]:bg-ivory/80">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-plum-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <div className="container-site relative flex h-18 items-center justify-between gap-6">
        <Link href="/" aria-label="Fairbanks Advocacia, página inicial" className="shrink-0">
          <Logo priority className="w-40 sm:w-48" />
        </Link>
        <nav aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-plum-900/85 transition-colors hover:bg-plum-50 hover:text-plum-900"
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
            className={buttonClass("primary", "hidden px-5 py-2.5 lg:inline-flex")}
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
