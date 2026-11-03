import {
  Baby,
  Building2,
  FileSignature,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  KeyRound,
  Landmark,
  PawPrint,
  ScrollText,
  ShieldAlert,
  Split,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/data/services";

const icons: Record<Service["icon"], React.ComponentType<LucideProps>> = {
  "heart-handshake": HeartHandshake,
  "file-signature": FileSignature,
  split: Split,
  baby: Baby,
  "hand-coins": HandCoins,
  "shield-alert": ShieldAlert,
  "paw-print": PawPrint,
  "scroll-text": ScrollText,
  landmark: Landmark,
  "building-2": Building2,
  "key-round": KeyRound,
  "graduation-cap": GraduationCap,
};

export function ServiceIcon({ name, ...props }: { name: Service["icon"] } & LucideProps) {
  const Icon = icons[name];
  return <Icon aria-hidden {...props} />;
}
