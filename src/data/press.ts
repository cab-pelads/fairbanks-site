export type Publication = {
  title: string;
  description: string;
  href: string;
  publisher: string;
};

export const publications: Publication[] = [
  {
    title: "Perfil e trajetória dos egressos do Curso de Pedagogia da Unifesp (2010 a 2022)",
    description:
      "Pesquisa sobre acesso, permanência e inserção profissional de egressos da Unifesp, no campo do direito educacional.",
    href: "http://lattes.cnpq.br/4495819531624621",
    publisher: "Universidade Federal de São Paulo (Unifesp)",
  },
  {
    title: "Dossiê Florestan Fernandes",
    description:
      "Publicação da Cátedra Edgard Morin / Centro de Estudos Marxistas sobre a obra e o legado de Florestan Fernandes.",
    href: "https://www.cemj.org.br/publicacoescatedra/dossie-florestan-fernandes",
    publisher: "CEMJ, Publicações da Cátedra",
  },
  {
    title: "Dossiê Newton Sucupira",
    description:
      "Publicação sobre Newton Sucupira e a construção da pós-graduação brasileira.",
    href: "https://www.cemj.org.br/publicacoescatedra/dossie-newton-sucupira",
    publisher: "CEMJ, Publicações da Cátedra",
  },
];
