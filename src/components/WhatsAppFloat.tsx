import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá, gostaria de agendar uma consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Fairbanks Advocacia no WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-30 inline-flex size-14 items-center justify-center rounded-full bg-plum-900 text-white shadow-lg transition-colors hover:bg-plum-800"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  );
}
