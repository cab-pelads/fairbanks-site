import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ eyebrow, title, text, align = "left", tone = "dark", as = "h2", className }: Props) {
  const Tag = as;
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-gold-600" : "text-gold-400",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display text-balance font-medium leading-[1.1]",
          as === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl",
          tone === "dark" ? "text-plum-900" : "text-white",
        )}
      >
        {title}
      </Tag>
      {text && (
        <p className={cn("mt-4 text-pretty text-lg leading-relaxed", tone === "dark" ? "text-muted" : "text-white/80")}>
          {text}
        </p>
      )}
    </div>
  );
}
