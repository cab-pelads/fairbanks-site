import { absoluteUrl, SITE_URL, site } from "@/lib/site";
import type { Faq, Service } from "@/data/services";

export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#cristiane-fairbanks`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": ["LegalService", "Organization"],
    "@id": ORG_ID,
    name: site.name,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/logo.svg"),
    },
    image: absoluteUrl("/images/cristiane-fairbanks-escritorio.webp"),
    description: site.description,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    founder: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "City", name: "São Paulo" },
      { "@type": "State", name: "São Paulo" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phoneE164,
      contactType: "customer service",
      availableLanguage: ["Portuguese"],
      areaServed: "BR",
    },
    sameAs: [site.founder.instagram],
    knowsAbout: [
      "Direito de Família",
      "Divórcio",
      "Guarda de filhos",
      "Pensão alimentícia",
      "Inventário",
      "Planejamento sucessório",
      "Direito imobiliário",
      "Locação de imóveis",
      "Direito educacional",
    ],
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.founder.honorific,
    givenName: "Cristiane",
    familyName: "Fairbanks",
    honorificPrefix: "Dra.",
    jobTitle: "Advogada",
    description:
      "Advogada (OAB/SP 274.480) e Doutora pela PUC-SP, com mais de 20 anos de atuação em direito de família e sucessões. Pós-doutoranda em Educação pela Unifesp.",
    image: absoluteUrl("/images/cristiane-fairbanks-retrato.webp"),
    url: absoluteUrl("/sobre/"),
    worksFor: { "@id": ORG_ID },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Pontifícia Universidade Católica de São Paulo (PUC-SP)" },
      { "@type": "CollegeOrUniversity", name: "Universidade Federal de São Paulo (Unifesp)" },
    ],
    memberOf: [
      { "@type": "Organization", name: "Ordem dos Advogados do Brasil, Seccional São Paulo (OAB/SP)" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Inscrição na OAB/SP",
      name: "OAB/SP 274.480",
    },
    knowsAbout: [
      "Direito de Família",
      "Direito das Sucessões",
      "Direito Educacional",
      "Mediação de conflitos familiares",
    ],
    sameAs: [site.founder.instagram, site.founder.lattes],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    description: site.description,
    inLanguage: "pt-BR",
    publisher: { "@id": ORG_ID },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: string;
  primaryImage?: string;
}) {
  const url = absoluteUrl(opts.path);
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(opts.primaryImage
      ? { primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(opts.primaryImage) } }
      : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.path && i < items.length - 1 ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function faqSchema(faq: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(service: Service) {
  const url = absoluteUrl(`/servicos/${service.slug}/`);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.shortTitle,
    serviceType: service.shortTitle,
    description: service.excerpt,
    url,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: "São Paulo" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contato/"),
      availableLanguage: "Portuguese",
    },
  };
}

export function servicesListSchema(items: Service[]) {
  return {
    "@type": "ItemList",
    name: "Áreas de atuação da Fairbanks Advocacia",
    itemListElement: items.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.shortTitle,
      url: absoluteUrl(`/servicos/${s.slug}/`),
    })),
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
