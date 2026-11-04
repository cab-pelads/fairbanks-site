/** Imagem ilustrativa de cada área (recortes da colagem do escritório) e o enquadramento usado nos cards. */
export const areaImages: Record<string, { src: string; position: string; alt: string; mirror?: boolean }> = {
  "direito-de-familia": { src: "/images/areas/familia.jpg", position: "100% 30%", alt: "Figuras de madeira representando uma família ao lado de um porta-retrato" },
  "casamento-uniao-estavel-regime-de-bens-pacto-antenupcial": { src: "/images/areas/familia.jpg", position: "0% 75%", alt: "Duas alianças de casamento sobre a mesa" },
  "divorcio-e-partilha": { src: "/images/areas/divorcio.jpg", position: "35% center", alt: "Fotografia rasgada ao meio com duas alianças separadas" },
  "guarda-e-convivencia-parental": { src: "/images/areas/guarda.jpg", position: "0% center", alt: "Urso de pelúcia e tênis infantil" },
  "pensao-alimenticia": { src: "/images/areas/guarda.jpg", position: "50% center", alt: "Balança de justiça ao lado de objetos infantis" },
  "alienacao-parental-e-abandono-afetivo": { src: "/images/areas/guarda.jpg", position: "100% center", alt: "Miniatura de casa e chaves ao lado de brinquedos" },
  "direito-dos-animais-e-guarda-pet": { src: "/images/areas/pet.jpg", position: "center", alt: "Coleira de cachorro com pingente de pata" },
  "inventario-e-sucessoes": { src: "/images/areas/sucessoes.jpg", position: "100% center", alt: "Envelope lacrado com cera, caneta e chave antiga" },
  "planejamento-sucessorio": { src: "/images/areas/sucessoes.jpg", position: "0% center", alt: "Relógio de bolso e caixa antiga" },
  "direito-imobiliario": { src: "/images/areas/imobiliario.jpg", position: "0% 0%", alt: "Maquete de casa com chaves" },
  "locacao-de-imoveis": { src: "/images/areas/imobiliario.jpg", position: "100% 100%", mirror: true, alt: "Contrato e caneta ao lado de chaves" },
  "direito-educacional": { src: "/images/areas/educacional.jpg", position: "center", alt: "Capelo de formatura sobre livros e diploma" },
};

export function areaImage(slug: string) {
  return areaImages[slug] ?? areaImages["direito-de-familia"];
}
