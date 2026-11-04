export type Publication = {
  title: string;
  description: string;
  href: string;
  publisher: string;
};

/** Produção acadêmica exibida na página Sobre. Os links levam às publicações no blog. */
export const publications: Publication[] = [
  {
    title: "Perfil e trajetória dos egressos do curso de Pedagogia da Unifesp (2010 a 2022)",
    description:
      "Artigo na Revista da FAEEBA (v. 34, n. 79, 2025), em coautoria com Maria Angelica Minhoto e Celia Maria Benedicto Giglio, sobre inserção profissional e continuidade dos estudos dos egressos.",
    href: "/blog/perfil-e-trajetoria-egressos-pedagogia-unifesp-2010-2022/",
    publisher: "Revista da FAEEBA, Unifesp",
  },
  {
    title: "Dossiê Florestan Fernandes",
    description:
      "Publicação da Cátedra do Centro de Estudos Marxistas (CEMJ) que diagnostica o estado da pós-graduação brasileira e defende a valorização de pesquisadoras e pesquisadores.",
    href: "/blog/dossie-florestan-fernandes/",
    publisher: "CEMJ, Publicações da Cátedra",
  },
  {
    title: "Dossiê Newton Sucupira",
    description:
      "Continuação do Dossiê Florestan Fernandes, com proposta de integração entre universidade e mercado de trabalho para a pós-graduação.",
    href: "/blog/dossie-newton-sucupira/",
    publisher: "CEMJ, Publicações da Cátedra",
  },
  {
    title: "Sindpesp: 30 anos de luta",
    description:
      "Livro em coautoria com Estela Ribeiro, lançado pelo Sindicato dos Delegados de Polícia do Estado de São Paulo em dezembro de 2021, que resgata três décadas de história da entidade.",
    href: "/blog/sindpesp-30-anos-de-luta/",
    publisher: "Sindpesp",
  },
];
