export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fairbanksadvocacia.com.br"
).replace(/\/$/, "");

export const site = {
  name: "Fairbanks Advocacia",
  legalName: "Fairbanks Advocacia",
  tagline: "Advocacia de família, sucessões e patrimônio em São Paulo",
  description:
    "Escritório de advocacia em São Paulo com atuação em direito de família, inventário e sucessões, planejamento sucessório, direito imobiliário e direito educacional. Atendimento da Dra. Cristiane Fairbanks, OAB/SP 274.480, com mais de 20 anos de experiência.",
  founder: {
    name: "Cristiane Fairbanks",
    honorific: "Dra. Cristiane Fairbanks",
    shortName: "Dra. Cris Fairbanks",
    oab: "OAB/SP 274.480",
    jobTitle: "Advogada, Doutora pela PUC-SP",
    lattes: "http://lattes.cnpq.br/4495819531624621",
    instagram: "https://www.instagram.com/crisfairbanks_adv/",
    instagramHandle: "@crisfairbanks_adv",
  },
  contact: {
    phoneDisplay: "(11) 99623-2400",
    phoneE164: "+5511996232400",
    whatsapp: "https://wa.me/5511996232400",
    email: "contato@fairbanksadvocacia.com.br",
    hours: "Segunda a sexta, das 9h às 18h",
  },
  address: {
    street: "Rua Tenente Gomes Ribeiro, 57, Cj. 25",
    neighborhood: "Vila Clementino",
    city: "São Paulo",
    region: "SP",
    country: "BR",
    full: "Rua Tenente Gomes Ribeiro, 57, Cj. 25, Vila Clementino, São Paulo, SP",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Tenente+Gomes+Ribeiro%2C+57+-+Vila+Clementino%2C+S%C3%A3o+Paulo+-+SP",
    mapsEmbed:
      "https://maps.google.com/maps?q=Rua%20Tenente%20Gomes%20Ribeiro%2C%2057%2C%20Vila%20Clementino%2C%20S%C3%A3o%20Paulo%20-%20SP&t=m&z=16&output=embed&iwloc=near",
    wazeUrl:
      "https://waze.com/live-map/directions/br/sp/r.-ten.-gomes-ribeiro,-57?navigate=yes",
  },
  experienceYears: 20,
  foundingText: "Mais de 20 anos de advocacia em direito de família e sucessões",
} as const;

export function whatsappLink(message?: string) {
  const base = site.contact.whatsapp;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function absoluteUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/servicos/", label: "Áreas de atuação" },
  { href: "/blog/", label: "Blog" },
  { href: "/contato/", label: "Contato" },
] as const;
