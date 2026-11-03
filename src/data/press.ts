export type PressItem = {
  outlet: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  date?: string;
};

export const press: PressItem[] = [
  {
    outlet: "Jornal Nova Manhã (Nova Brasil)",
    title: "Série Inventários, episódio 2: quem paga a herança?",
    description:
      "Participação ao vivo da Dra. Cristiane Fairbanks explicando quem arca com as dívidas e os custos de um inventário.",
    image: "/images/midia-nova-manha-inventarios.webp",
    date: "2025-08-20",
  },
  {
    outlet: "Folha de S.Paulo",
    title: "Projeto de lei quer estender direitos previdenciários a pós-graduandos",
    description:
      "Reportagem sobre a proposta que amplia a proteção previdenciária de mestrandos e doutorandos, tema de pesquisa da Dra. Cristiane.",
    image: "/images/midia-folha-projeto-de-lei.webp",
  },
  {
    outlet: "SINDPESP",
    title: "SINDPESP: 30 anos de luta",
    description:
      "Registro da participação institucional em evento comemorativo do sindicato.",
    image: "/images/midia-sindpesp.webp",
  },
  {
    outlet: "Jornal do Centro Acadêmico 22 de Agosto (PUC-SP)",
    title: "Entrevista com o jurista português Professor Canotilho",
    description:
      "Publicação acadêmica com entrevista conduzida pela Dra. Cristiane Fairbanks, então professora convidada.",
    image: "/images/midia-jornal-centro-academico.webp",
  },
];

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
