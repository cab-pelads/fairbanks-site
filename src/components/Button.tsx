import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-plum-900 text-white hover:bg-plum-800 shadow-sm",
  gold: "bg-gold-500 text-plum-950 hover:bg-gold-400 shadow-sm",
  outline:
    "border border-plum-900/30 text-plum-900 hover:border-plum-900 hover:bg-plum-50",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10",
  ghost: "text-plum-900 hover:bg-plum-50",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

type Props = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "children">;

export function ButtonLink({ href, variant = "primary", className, children, external, ...rest }: Props) {
  const cls = cn(base, styles[variant], className);
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, styles[variant], className);
}
