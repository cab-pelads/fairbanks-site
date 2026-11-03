import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = { title: "Página não encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <div className="container-site py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">Erro 404</p>
        <h1 className="mt-3 font-display text-balance text-4xl font-medium text-plum-900">Página não encontrada</h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-muted">
          O endereço pode ter mudado. Veja as áreas de atuação ou volte para a página inicial.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/">Página inicial</ButtonLink>
          <ButtonLink href="/servicos/" variant="outline">
            Áreas de atuação
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
