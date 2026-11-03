import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { variant?: "plum" | "white"; className?: string; priority?: boolean };

export function Logo({ variant = "plum", className, priority }: Props) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-branco.svg" : "/brand/logo.svg"}
      alt="Fairbanks Advocacia"
      width={599}
      height={177}
      priority={priority}
      className={cn("h-auto w-44 sm:w-52", className)}
    />
  );
}

export function Monogram({ className, gold = true }: { className?: string; gold?: boolean }) {
  return (
    <Image
      src={gold ? "/brand/monograma-dourado.svg" : "/brand/monograma.svg"}
      alt=""
      aria-hidden
      width={236}
      height={177}
      className={cn("h-auto w-16", className)}
    />
  );
}
