export type ServiceCategory = "familia" | "sucessoes" | "patrimonio" | "educacional";

export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  table?: { head: string[]; rows: string[][] };
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  icon:
    | "heart-handshake"
    | "file-signature"
    | "split"
    | "baby"
    | "hand-coins"
    | "shield-alert"
    | "paw-print"
    | "scroll-text"
    | "landmark"
    | "building-2"
    | "key-round"
    | "graduation-cap";
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  lead: string[];
  sections: ServiceSection[];
  faq: Faq[];
  related: string[];
};

export const categories: Record<ServiceCategory, { label: string; description: string }> = {
  familia: {
    label: "Direito de Família",
    description:
      "Casamento, união estável, divórcio, guarda, alimentos e proteção de crianças e adolescentes.",
  },
  sucessoes: {
    label: "Sucessões e Patrimônio",
    description: "Inventário, partilha de herança, testamento e planejamento sucessório.",
  },
  patrimonio: {
    label: "Direito Imobiliário",
    description: "Compra e venda de imóveis, contratos, leilões e locações.",
  },
  educacional: {
    label: "Direito Educacional",
    description: "Relações entre estudantes, famílias e instituições de ensino.",
  },
};

export const services: Service[] = [
  {
    slug: "direito-de-familia",
    title: "Advogada de Direito de Família em São Paulo",
    shortTitle: "Direito de Família",
    category: "familia",
    icon: "heart-handshake",
    excerpt:
      "Atuação completa em divórcio, guarda, alimentos, união estável e demais conflitos familiares, com prioridade para soluções consensuais.",
    metaTitle: "Advogada de Direito de Família em São Paulo | Fairbanks Advocacia",
    metaDescription:
      "Advogada de família em São Paulo com mais de 20 anos de experiência em divórcio, guarda, pensão alimentícia e união estável. Dra. Cristiane Fairbanks, OAB/SP 274.480.",
    keywords: [
      "advogada de família são paulo",
      "advogado direito de família",
      "escritório direito de família vila clementino",
    ],
    lead: [
      "O direito de família trata das relações entre cônjuges, companheiros, pais e filhos: casamento, união estável, divórcio, guarda, convivência, pensão alimentícia e proteção de crianças e adolescentes. Na Fairbanks Advocacia essa é a área central do escritório, conduzida pela Dra. Cristiane Fairbanks há mais de 20 anos.",
      "Nosso método parte de uma premissa simples: decisões construídas em conjunto pelas partes têm mais chance de durar do que sentenças impostas. Por isso buscamos primeiro a via consensual e extrajudicial. Quando o acordo não é possível, atuamos com firmeza no Judiciário.",
    ],
    sections: [
      {
        heading: "O que faz uma advogada de direito de família?",
        paragraphs: [
          "A advogada de família orienta e representa a pessoa em todas as decisões jurídicas que envolvem a vida familiar. Isso inclui formalizar uma união, escolher o regime de bens, conduzir um divórcio, definir guarda e convivência dos filhos, fixar ou revisar pensão alimentícia e resolver conflitos patrimoniais entre familiares.",
          "Na prática, grande parte do trabalho acontece fora do tribunal: em reuniões, negociações, mediações e atos em cartório. O processo judicial é a ferramenta usada quando o diálogo se esgota ou quando a lei exige a participação do juiz, como nos casos que envolvem filhos menores de idade.",
        ],
      },
      {
        heading: "Quais demandas de família o escritório atende?",
        list: [
          "Casamento, união estável, contrato de namoro, regime de bens e pacto antenupcial.",
          "Divórcio e dissolução de união estável, judicial ou em cartório, com partilha de bens e dívidas.",
          "Guarda compartilhada ou unilateral e plano de convivência parental.",
          "Pensão alimentícia: fixação, revisão, exoneração e execução.",
          "Alienação parental e abandono afetivo.",
          "Reconhecimento e dissolução de união estável, inclusive para casais homoafetivos.",
          "Famílias multiespécie: guarda de animais de estimação após a separação.",
        ],
      },
      {
        heading: "Como funciona o atendimento em direito de família?",
        ordered: true,
        list: [
          "Primeiro contato pelo WhatsApp ou e-mail para entender a situação e agendar a consulta.",
          "Consulta de orientação: análise dos fatos, dos documentos e das alternativas, com explicação clara sobre caminhos, prazos e custos.",
          "Definição da estratégia: acordo, mediação, procedimento em cartório ou ação judicial.",
          "Condução do caso com informação constante ao cliente, sem surpresas.",
        ],
      },
      {
        heading: "Por que priorizar a solução consensual?",
        paragraphs: [
          "Desde a Lei 11.441/2007, divórcios e inventários consensuais podem ser feitos em cartório, sem processo judicial. Esse caminho costuma ser mais rápido, mais barato e menos desgastante, principalmente quando há filhos e o relacionamento entre os pais precisa continuar.",
          "A Dra. Cristiane Fairbanks integra a Comissão de Soluções Consensuais de Conflitos e a Comissão Especial de Direito Notarial e Registros Públicos da OAB/SP, e aplica essa experiência para resolver o máximo possível por acordo. Isso não significa abrir mão de direitos: significa negociá-los com técnica.",
        ],
      },
    ],
    faq: [
      {
        q: "Preciso de advogado para fazer divórcio em cartório?",
        a: "Sim. A lei exige a assistência de advogado no divórcio extrajudicial. Quando o casal está de acordo, as duas partes podem ser assistidas pela mesma advogada.",
      },
      {
        q: "O escritório atende casos fora de São Paulo?",
        a: "O escritório fica na Vila Clementino, em São Paulo, e atende presencialmente ou por videoconferência. Demandas em outras comarcas são analisadas caso a caso.",
      },
      {
        q: "Quanto custa uma consulta de direito de família?",
        a: "Os honorários variam conforme a complexidade do caso e o tipo de procedimento (cartório ou judicial). O valor é informado de forma transparente antes do início do trabalho, em contrato escrito.",
      },
      {
        q: "O atendimento é sigiloso?",
        a: "Sim. Tudo o que é tratado com a advogada é protegido pelo sigilo profissional, previsto no Estatuto da Advocacia (Lei 8.906/1994).",
      },
    ],
    related: ["divorcio-e-partilha", "guarda-e-convivencia-parental", "pensao-alimenticia"],
  },
  {
    slug: "casamento-uniao-estavel-regime-de-bens-pacto-antenupcial",
    title: "Casamento, União Estável, Regime de Bens e Pacto Antenupcial",
    shortTitle: "Casamento, União Estável e Pacto Antenupcial",
    category: "familia",
    icon: "file-signature",
    excerpt:
      "Orientação para formalizar a vida a dois com segurança: escolha do regime de bens, pacto antenupcial, escritura de união estável e contrato de namoro.",
    metaTitle: "Pacto Antenupcial e Regime de Bens em São Paulo | Fairbanks Advocacia",
    metaDescription:
      "Advogada para pacto antenupcial, escolha do regime de bens, escritura de união estável e contrato de namoro em São Paulo. Proteja o patrimônio antes de casar.",
    keywords: [
      "pacto antenupcial são paulo",
      "regime de bens casamento",
      "escritura de união estável",
      "contrato de namoro",
    ],
    lead: [
      "Casar no civil ou formalizar uma união estável são as formas mais seguras de começar a vida a dois. A formalização garante direitos civis, define qual regime de bens vai reger o patrimônio do casal e estabelece quem responde pelo outro em situações de incapacidade, como uma decisão médica.",
      "A Fairbanks Advocacia orienta casais na escolha do regime de bens, redige o pacto antenupcial, acompanha a lavratura da escritura de união estável e elabora contratos de namoro quando a intenção é justamente não constituir família. A regra é uma só: boas decisões se tomam em momentos de tranquilidade.",
    ],
    sections: [
      {
        heading: "Qual a diferença entre casamento e união estável?",
        paragraphs: [
          "O casamento é um ato formal celebrado no cartório de registro civil, com habilitação prévia. A união estável é a convivência pública, contínua e duradoura com o objetivo de constituir família, reconhecida pelo artigo 1.723 do Código Civil. Ela existe de fato mesmo sem documento, mas pode e deve ser formalizada por escritura pública ou contrato escrito.",
          "Nos efeitos patrimoniais, as duas são parecidas: sem pacto ou contrato, vale a comunhão parcial de bens. A principal diferença prática está na prova. O casamento se prova com a certidão. A união estável sem escritura precisa ser provada, o que gera insegurança em separações e inventários.",
        ],
      },
      {
        heading: "Quais são os regimes de bens no Brasil?",
        table: {
          head: ["Regime", "O que se comunica", "Como se adota"],
          rows: [
            [
              "Comunhão parcial",
              "Bens adquiridos onerosamente durante a união. Heranças e doações recebidas por um só não entram.",
              "É a regra legal quando não há pacto (art. 1.640 do Código Civil).",
            ],
            [
              "Comunhão universal",
              "Todos os bens, presentes e futuros, salvo exceções legais.",
              "Pacto antenupcial por escritura pública.",
            ],
            [
              "Separação total (convencional)",
              "Nada se comunica. Cada um mantém patrimônio próprio.",
              "Pacto antenupcial por escritura pública.",
            ],
            [
              "Participação final nos aquestos",
              "Durante a união cada um administra o seu. Na dissolução, partilham-se os bens adquiridos onerosamente.",
              "Pacto antenupcial por escritura pública.",
            ],
            [
              "Separação obrigatória",
              "Imposta pela lei em hipóteses do art. 1.641 do Código Civil, como casamento de pessoa maior de 70 anos.",
              "Determinação legal.",
            ],
          ],
        },
      },
      {
        heading: "O que é o pacto antenupcial e quando ele deve ser feito?",
        paragraphs: [
          "O pacto antenupcial é a escritura pública, lavrada em tabelionato de notas, em que os noivos escolhem um regime de bens diferente da comunhão parcial ou personalizam regras patrimoniais. Ele precisa ser feito antes do casamento e só produz efeitos se o casamento acontecer, conforme o artigo 1.653 do Código Civil.",
          "Depois de casado, mudar o regime de bens é possível, mas exige autorização judicial, pedido motivado de ambos os cônjuges e a garantia de que não haverá prejuízo a terceiros. É um procedimento mais caro e mais lento do que decidir antes.",
        ],
      },
      {
        heading: "Para que serve um contrato de namoro?",
        paragraphs: [
          "O contrato de namoro é a declaração, por escritura pública ou instrumento particular, de que o relacionamento não tem o objetivo de constituir família. Ele serve para afastar o reconhecimento de união estável e os efeitos patrimoniais decorrentes dela.",
          "É indicado para casais que moram juntos ou têm rotina de convivência intensa, mas não desejam comunicação de bens nem direitos sucessórios. O documento não impede que a situação mude no futuro, e deve ser revisto se a relação evoluir.",
        ],
      },
      {
        heading: "Como o escritório conduz esse trabalho?",
        ordered: true,
        list: [
          "Consulta para entender o patrimônio atual, a expectativa de cada um e os planos do casal.",
          "Comparação dos regimes de bens aplicados à situação concreta, com exemplos de divórcio e sucessão.",
          "Redação do pacto antenupcial, do contrato de namoro ou da escritura de união estável.",
          "Acompanhamento no tabelionato e orientação sobre o registro no cartório de imóveis, quando houver bens imóveis.",
        ],
      },
    ],
    faq: [
      {
        q: "Quem casa sem pacto antenupcial fica em qual regime?",
        a: "Na comunhão parcial de bens. Os bens comprados durante o casamento são de ambos, e os bens anteriores, heranças e doações continuam particulares.",
      },
      {
        q: "A união estável precisa ser registrada em cartório?",
        a: "Não é obrigatório, mas é altamente recomendável. A escritura pública dá segurança sobre a data de início, o regime de bens e os direitos de cada um, e evita disputas judiciais no futuro.",
      },
      {
        q: "É possível converter a união estável em casamento?",
        a: "Sim. O artigo 1.726 do Código Civil permite a conversão, mediante pedido ao oficial do registro civil. O escritório orienta sobre o procedimento e sobre a escolha do regime de bens.",
      },
      {
        q: "Quanto custa um pacto antenupcial?",
        a: "Há o custo da escritura no tabelionato, fixado em tabela oficial do Estado, e os honorários advocatícios para a análise do caso e a redação das cláusulas. O escritório informa os valores previamente.",
      },
    ],
    related: ["divorcio-e-partilha", "planejamento-sucessorio", "direito-de-familia"],
  },
  {
    slug: "divorcio-e-partilha",
    title: "Divórcio e Partilha de Bens em São Paulo",
    shortTitle: "Divórcio e Partilha",
    category: "familia",
    icon: "split",
    excerpt:
      "Divórcio consensual em cartório ou judicial, dissolução de união estável e partilha de bens e dívidas, com atenção à guarda e aos alimentos dos filhos.",
    metaTitle: "Advogada para Divórcio e Partilha em São Paulo | Fairbanks Advocacia",
    metaDescription:
      "Divórcio em cartório ou judicial em São Paulo, dissolução de união estável e partilha de bens. Advogada de família com mais de 20 anos de experiência. Agende uma consulta.",
    keywords: [
      "advogada divórcio são paulo",
      "divórcio em cartório",
      "divórcio consensual",
      "partilha de bens divórcio",
      "dissolução de união estável",
    ],
    lead: [
      "O divórcio pode ser feito de duas formas: em cartório, quando há consenso entre os cônjuges, ou pela via judicial, quando não há acordo ou quando a lei exige a participação do juiz. A dissolução de união estável segue a mesma lógica. Em ambos os casos, é preciso definir a partilha de bens e dívidas, o uso do sobrenome e eventual pensão entre os ex-cônjuges.",
      "A Fairbanks Advocacia conduz divórcios e dissoluções com foco na solução consensual, inclusive representando as duas partes quando estão de acordo. Quando há filhos menores, cuidamos para que guarda, convivência e alimentos sejam resolvidos junto com a separação.",
    ],
    sections: [
      {
        heading: "Divórcio em cartório ou judicial: qual é o meu caso?",
        paragraphs: [
          "O divórcio extrajudicial, feito em tabelionato de notas, é possível quando os dois cônjuges concordam com o fim do casamento e com os termos da partilha, conforme o artigo 733 do Código de Processo Civil. É obrigatória a assistência de advogado, e o mesmo profissional pode assistir ambos. O ato costuma ser concluído em poucos dias depois de reunidos os documentos.",
          "O divórcio judicial é necessário quando não há acordo sobre algum ponto ou quando há filhos menores ou incapazes com questões de guarda, convivência e alimentos ainda não definidas. Mesmo no Judiciário, é possível apresentar o pedido de forma consensual, o que torna o processo bem mais rápido.",
        ],
      },
      {
        heading: "O que precisa ser decidido no divórcio?",
        list: [
          "Partilha dos bens e das dívidas, de acordo com o regime de bens do casal.",
          "Manutenção ou retirada do sobrenome adotado no casamento.",
          "Pensão alimentícia entre ex-cônjuges, quando um deles não tem condições de se manter, ainda que temporariamente.",
          "Guarda, plano de convivência e alimentos dos filhos, obrigatoriamente com participação do juiz e do Ministério Público quando forem menores.",
          "Uso do imóvel residencial e responsabilidade por financiamentos e contratos em andamento.",
        ],
      },
      {
        heading: "Como o regime de bens define a partilha?",
        paragraphs: [
          "Na comunhão parcial, regime legal da maioria dos casamentos e das uniões estáveis sem contrato, partilham-se os bens adquiridos de forma onerosa durante a união, independentemente de em nome de quem estejam. É o chamado direito à meação. Bens recebidos por herança ou doação por apenas um dos cônjuges são particulares e não entram na partilha.",
          "Na comunhão universal, em regra tudo é partilhado. Na separação total, cada um fica com o que está em seu nome, salvo prova de contribuição conjunta em bem específico. Dívidas contraídas em benefício da família também são divididas. Cada patrimônio exige análise própria, especialmente quando há empresas, imóveis financiados ou bens no exterior.",
        ],
      },
      {
        heading: "Quais documentos são necessários para o divórcio?",
        list: [
          "Certidão de casamento atualizada e documentos pessoais dos cônjuges.",
          "Pacto antenupcial, se houver.",
          "Matrículas de imóveis, documentos de veículos, extratos de contas e de investimentos.",
          "Contratos de financiamento e comprovantes de dívidas.",
          "Certidão de nascimento dos filhos e, se houver, acordo prévio sobre guarda e alimentos.",
        ],
      },
      {
        heading: "Como o escritório conduz o divórcio?",
        ordered: true,
        list: [
          "Consulta inicial para mapear bens, dívidas, filhos e o grau de consenso entre as partes.",
          "Proposta de acordo e negociação, quando necessário, com a outra parte ou com a advogada dela.",
          "Redação da minuta de escritura ou da petição consensual, com partilha detalhada.",
          "Lavratura em cartório ou homologação judicial, seguida das averbações no registro civil e no registro de imóveis.",
        ],
      },
    ],
    faq: [
      {
        q: "Quanto tempo demora um divórcio em cartório?",
        a: "Com a documentação completa e a minuta aprovada pelas partes, a escritura pode ser lavrada em poucos dias. O prazo total depende da reunião dos documentos e da agenda do tabelionato.",
      },
      {
        q: "Posso me divorciar sem partilhar os bens agora?",
        a: "Sim. O Código Civil permite o divórcio sem a partilha imediata, que pode ser feita depois. Em muitos casos, porém, é mais seguro resolver tudo de uma vez para evitar novo litígio.",
      },
      {
        q: "Tenho união estável sem escritura. Preciso de divórcio?",
        a: "Não. No caso da união estável o procedimento é a dissolução, que pode ser feita em cartório, se houver consenso, ou judicialmente. Se a união não estiver formalizada, pode ser necessário primeiro reconhecer sua existência e o período.",
      },
      {
        q: "O outro cônjuge mora em outra cidade ou país. É possível divorciar?",
        a: "Sim. O divórcio consensual pode ser feito com procuração pública ou com participação por videoconferência, conforme as regras do tabelionato. No divórcio judicial, a citação é feita no endereço do outro cônjuge.",
      },
    ],
    related: [
      "guarda-e-convivencia-parental",
      "pensao-alimenticia",
      "casamento-uniao-estavel-regime-de-bens-pacto-antenupcial",
    ],
  },
  {
    slug: "guarda-e-convivencia-parental",
    title: "Guarda de Filhos e Regime de Convivência Parental",
    shortTitle: "Guarda e Convivência Parental",
    category: "familia",
    icon: "baby",
    excerpt:
      "Guarda compartilhada ou unilateral, plano de convivência com calendário de rotina, férias e feriados, e coparentalidade em todas as configurações familiares.",
    metaTitle: "Guarda Compartilhada e Convivência Parental em SP | Fairbanks Advocacia",
    metaDescription:
      "Advogada para guarda compartilhada, guarda unilateral e plano de convivência parental em São Paulo. Calendário de férias, feriados e rotina escolar definidos com segurança.",
    keywords: [
      "advogada guarda compartilhada são paulo",
      "regime de convivência parental",
      "plano de parentalidade",
      "guarda de filhos divórcio",
    ],
    lead: [
      "Desde a Lei 13.058/2014, a guarda compartilhada é a regra no Brasil quando ambos os pais estão aptos a exercer o poder familiar, mesmo sem acordo entre eles. A guarda unilateral fica reservada a situações específicas, como quando um dos genitores declara que não deseja a guarda ou quando há risco para a criança.",
      "Na Fairbanks Advocacia, o foco vai além de definir o tipo de guarda. Trabalhamos com um plano de convivência parental detalhado, que organiza a rotina da criança com cada genitor e reduz a chance de novos conflitos. A Dra. Cristiane Fairbanks conduz esses casos há mais de 20 anos, sempre buscando a via da mediação.",
    ],
    sections: [
      {
        heading: "O que é guarda compartilhada e como ela funciona?",
        paragraphs: [
          "Guarda compartilhada significa que pai e mãe dividem as responsabilidades e as decisões sobre a vida do filho: escola, saúde, religião, viagens e atividades. Ela não exige divisão igual do tempo nem moradia alternada. A criança tem uma residência de referência e um calendário de convivência com o outro genitor.",
          "A guarda compartilhada também não dispensa a pensão alimentícia. As despesas da criança continuam sendo divididas conforme a possibilidade de cada um dos pais, e o genitor que não reside com o filho em geral contribui com valor mensal.",
        ],
      },
      {
        heading: "O que deve constar em um plano de convivência parental?",
        list: [
          "Dias de rotina escolar com cada genitor e quem leva e busca na escola.",
          "Finais de semana alternados e regras para datas comemorativas, como aniversário da criança, Dia das Mães e Dia dos Pais.",
          "Divisão dos feriados prolongados e das férias escolares de julho, dezembro e janeiro, em regra na proporção de metade para cada um.",
          "Responsabilidade por consultas médicas, atividades extracurriculares e esportes.",
          "Regras para troca de datas, que só devem ocorrer com aviso prévio e concordância do outro genitor.",
          "Comunicação entre os pais e contato da criança com o genitor que não está com ela, por telefone ou vídeo.",
        ],
      },
      {
        heading: "Como organizar o calendário de férias e feriados?",
        paragraphs: [
          "As escolas precisam cumprir 200 dias letivos por ano, conforme a Lei de Diretrizes e Bases da Educação (Lei 9.394/1996). Uma orientação prática que damos a todos os clientes: obtenha o calendário escolar do filho e construa, a partir dele, o calendário semestral ou anual de convivência, marcando desde já férias, recessos e feriados.",
          "Quando o calendário é definido com antecedência e registrado no acordo ou na decisão judicial, as expectativas da criança são respeitadas e cada genitor pode planejar viagens e compromissos. Isso gera estabilidade e segurança, que são os critérios que o Judiciário mais valoriza.",
        ],
      },
      {
        heading: "Guarda unilateral: quando ela é aplicada?",
        paragraphs: [
          "A guarda unilateral é concedida a um só dos genitores quando o outro não quer ou não pode exercê-la, ou quando o compartilhamento não atende ao melhor interesse da criança, por exemplo em casos de violência doméstica, dependência química ou abandono. Mesmo nesses casos, o genitor sem a guarda mantém o direito de convivência e o dever de supervisionar os interesses do filho, salvo decisão judicial em contrário.",
        ],
      },
      {
        heading: "Coparentalidade em famílias LGBTQIA+",
        paragraphs: [
          "O escritório atende pais e mães em relacionamentos homoafetivos e famílias formadas por coparentalidade planejada. O princípio constitucional da igualdade garante a essas famílias os mesmos direitos de guarda, convivência e registro, e tratamos o tema com a mesma técnica e o mesmo cuidado de qualquer outra configuração familiar.",
        ],
      },
    ],
    faq: [
      {
        q: "Guarda compartilhada quer dizer que a criança mora metade do tempo com cada um?",
        a: "Não necessariamente. A guarda compartilhada trata da divisão das decisões e responsabilidades. O tempo de convivência é definido no plano parental e pode ser equilibrado sem ser matematicamente igual.",
      },
      {
        q: "O pai ou a mãe pode mudar de cidade com a criança?",
        a: "A mudança de residência que afete a convivência com o outro genitor precisa de acordo entre os pais ou de autorização judicial. Mudar sem autorização pode caracterizar alienação parental.",
      },
      {
        q: "A criança pode escolher com quem quer morar?",
        a: "A opinião da criança ou do adolescente é ouvida e considerada conforme sua idade e maturidade, mas a decisão final cabe aos pais, em acordo, ou ao juiz, sempre com base no melhor interesse do menor.",
      },
      {
        q: "Avós têm direito de convivência?",
        a: "Sim. O artigo 1.589 do Código Civil estende aos avós o direito de visita, a critério do juiz e observado o interesse da criança.",
      },
    ],
    related: ["pensao-alimenticia", "alienacao-parental-e-abandono-afetivo", "divorcio-e-partilha"],
  },
  {
    slug: "pensao-alimenticia",
    title: "Pensão Alimentícia: Fixação, Revisão e Execução",
    shortTitle: "Alimentos (Pensão Alimentícia)",
    category: "familia",
    icon: "hand-coins",
    excerpt:
      "Ação de alimentos, revisão de pensão alimentícia defasada, exoneração e execução contra o devedor, com pedidos liminares e informação em tempo real ao cliente.",
    metaTitle: "Advogada de Pensão Alimentícia em São Paulo | Fairbanks Advocacia",
    metaDescription:
      "Ação de alimentos, revisão e execução de pensão alimentícia em São Paulo. Advogada de família com mais de 20 anos de experiência. Atendimento ágil com pedidos liminares.",
    keywords: [
      "advogada pensão alimentícia são paulo",
      "ação de alimentos",
      "revisão de pensão alimentícia",
      "execução de alimentos",
      "pensão alimentícia valor",
    ],
    lead: [
      "A pensão alimentícia é a obrigação dos pais de contribuir para o sustento, a educação, a saúde e o lazer dos filhos. Para ser exigida e executada em caso de atraso, ela precisa estar fixada em sentença ou em acordo homologado. O valor é definido pelo binômio necessidade de quem recebe e possibilidade de quem paga, previsto no artigo 1.694 do Código Civil.",
      "Por se tratar de direito indisponível e urgente, atuamos com pedidos liminares de alimentos provisórios e mantemos o cliente informado em tempo real sobre cada movimentação. A Fairbanks Advocacia atua na fixação, na revisão, na exoneração e na execução de alimentos.",
    ],
    sections: [
      {
        heading: "Como é calculado o valor da pensão alimentícia?",
        paragraphs: [
          "Não existe percentual fixo em lei. O juiz avalia as despesas reais da criança ou do adolescente e a capacidade financeira de cada genitor, lembrando que ambos são responsáveis pelo sustento. Na prática forense, quando o alimentante é empregado com carteira assinada, é comum a fixação entre 10% e 30% dos rendimentos líquidos, descontada diretamente em folha.",
          "Para autônomos e empresários, o valor costuma ser fixado em quantia certa, atualizada por índice oficial, podendo ser combinada com o pagamento direto de despesas como escola e plano de saúde. A premissa que orienta o cálculo é a manutenção do padrão de vida que a criança tinha antes da separação.",
        ],
      },
      {
        heading: "Quando pedir a revisão da pensão alimentícia?",
        paragraphs: [
          "A ação revisional cabe sempre que mudar a necessidade de quem recebe ou a possibilidade de quem paga. Exemplos: a pensão ficou defasada diante das despesas atuais, o alimentante teve aumento ou redução relevante de renda, ou surgiram novas despesas de saúde ou educação. A revisão pode ser para aumentar ou para reduzir o valor.",
          "Também é possível pedir a exoneração quando a obrigação deixa de existir, como no caso do filho maior de idade que concluiu os estudos e já tem meios próprios de sustento. A maioridade, por si só, não encerra a pensão automaticamente: é preciso decisão judicial.",
        ],
      },
      {
        heading: "O que fazer quando a pensão não é paga?",
        list: [
          "Execução pelo rito da prisão civil: cobra as três últimas parcelas vencidas e as que vencerem no curso do processo. O devedor é intimado a pagar em três dias, sob pena de prisão de um a três meses, conforme o artigo 528 do Código de Processo Civil.",
          "Execução por penhora: para o débito mais antigo, com bloqueio de contas, penhora de bens e inclusão do nome do devedor em cadastros de inadimplentes.",
          "Desconto em folha de pagamento: quando o devedor tem vínculo formal, o juiz pode determinar o desconto direto do empregador.",
          "Protesto da decisão judicial: medida que gera restrição de crédito ao devedor.",
        ],
      },
      {
        heading: "Pensão entre ex-cônjuges e outras hipóteses",
        paragraphs: [
          "Os alimentos também podem ser devidos entre ex-cônjuges ou ex-companheiros quando um deles não tem condições de prover o próprio sustento, em geral por prazo determinado, até a reinserção no mercado de trabalho. Há ainda os alimentos gravídicos, devidos à gestante durante a gravidez, e os alimentos avoengos, cobrados dos avós quando os pais não têm como arcar.",
        ],
      },
    ],
    faq: [
      {
        q: "A pensão alimentícia tem valor mínimo?",
        a: "Não há valor mínimo legal. O valor depende das necessidades da criança e das possibilidades dos pais. Mesmo quem está desempregado tem o dever de contribuir, ainda que com quantia menor.",
      },
      {
        q: "Até que idade o filho recebe pensão?",
        a: "Em regra até os 18 anos, podendo se estender até cerca dos 24 anos se o filho estiver cursando ensino superior ou técnico. A extinção depende de decisão judicial.",
      },
      {
        q: "Guarda compartilhada dispensa a pensão?",
        a: "Não. A guarda compartilhada divide decisões e responsabilidades, mas as despesas continuam sendo rateadas conforme a possibilidade de cada genitor.",
      },
      {
        q: "Quanto tempo demora para conseguir a pensão?",
        a: "Com o pedido de alimentos provisórios, o juiz pode fixar um valor logo no início do processo, em geral nas primeiras semanas. O valor definitivo é decidido na sentença.",
      },
    ],
    related: ["guarda-e-convivencia-parental", "divorcio-e-partilha", "direito-de-familia"],
  },
  {
    slug: "alienacao-parental-e-abandono-afetivo",
    title: "Alienação Parental e Abandono Afetivo",
    shortTitle: "Alienação Parental e Abandono Afetivo",
    category: "familia",
    icon: "shield-alert",
    excerpt:
      "Defesa dos vínculos entre a criança e seus pais: medidas contra a alienação parental e responsabilização pelo abandono afetivo, sempre com foco no interesse do menor.",
    metaTitle: "Alienação Parental e Abandono Afetivo | Advogada em São Paulo",
    metaDescription:
      "Advogada para casos de alienação parental (Lei 12.318/2010) e abandono afetivo em São Paulo. Proteção da criança e do vínculo com os pais, com atuação técnica e sensível.",
    keywords: [
      "advogada alienação parental são paulo",
      "lei de alienação parental",
      "abandono afetivo indenização",
      "abandono afetivo lei",
    ],
    lead: [
      "Alienação parental é a interferência psicológica promovida por um dos pais, avós ou responsáveis para que a criança ou o adolescente rejeite o outro genitor sem justificativa. A conduta é definida e punida pela Lei 12.318/2010, com medidas que vão da advertência à alteração da guarda.",
      "O abandono afetivo é a omissão do pai ou da mãe no dever de cuidado, presença e participação na vida do filho. A Fairbanks Advocacia atua nos dois lados dessas situações: na proteção do genitor e da criança vítimas de alienação e na responsabilização de quem se omite, sempre com a cautela que o tema exige.",
    ],
    sections: [
      {
        heading: "O que a Lei de Alienação Parental prevê?",
        paragraphs: [
          "A Lei 12.318/2010 lista condutas típicas, como dificultar o contato da criança com o genitor, omitir informações escolares e médicas, apresentar falsa denúncia ou mudar de domicílio sem justificativa para afastar a criança do outro. Reconhecida a alienação, o juiz pode advertir o alienador, ampliar a convivência do genitor prejudicado, determinar acompanhamento psicológico, aplicar multa, alterar a guarda ou até suspender a autoridade parental.",
          "O Estatuto da Criança e do Adolescente já garantia a proteção integral e rechaçava esse tipo de conduta. A lei específica trouxe instrumentos processuais, inclusive a perícia psicológica ou biopsicossocial, para apurar os fatos com mais rigor.",
        ],
      },
      {
        heading: "Por que esses casos exigem cuidado técnico?",
        paragraphs: [
          "A acusação de alienação parental tem sido usada, em alguns casos, como instrumento de disputa patrimonial, por exemplo como reação a um pedido de revisão de alimentos, ou como resposta de um genitor acusado de violência ou abuso contra a criança. Quando isso acontece, a guarda passa a atender aos interesses dos adultos e as necessidades do menor ficam em segundo plano.",
          "Há projeto de lei em tramitação no Congresso Nacional propondo a revogação da Lei de Alienação Parental. Independentemente do destino legislativo, o escritório avalia cada caso com base em provas concretas, na escuta especializada da criança e na perícia, evitando acusações precipitadas de qualquer lado.",
        ],
      },
      {
        heading: "O que é abandono afetivo e quais são as consequências?",
        paragraphs: [
          "O abandono afetivo é a falta de participação efetiva do pai ou da mãe na vida do filho, para além do sustento material. O Superior Tribunal de Justiça já reconhecia que o dever de cuidado tem conteúdo jurídico e que sua violação pode gerar indenização por dano moral. Conforme informado pelo escritório, a Lei 15.240/2025 alterou o Estatuto da Criança e do Adolescente para reconhecer expressamente o abandono afetivo como ilícito civil.",
          "Se o genitor do seu filho se isenta de participar da vida da criança ou do adolescente, o prejuízo emocional pode ser grande. Nesses casos, além da reparação, o objetivo principal é buscar instrumentos que estimulem a presença responsável, como a definição clara do plano de convivência.",
        ],
      },
      {
        heading: "Como o escritório atua nesses casos?",
        ordered: true,
        list: [
          "Escuta detalhada dos fatos e organização das provas: mensagens, registros escolares, laudos e testemunhas.",
          "Avaliação de medidas urgentes, como regulamentação ou ampliação da convivência e acompanhamento psicológico.",
          "Pedido de perícia psicológica ou estudo psicossocial, quando necessário.",
          "Condução do processo com foco em restabelecer vínculos saudáveis, e não em punir por punir.",
        ],
      },
    ],
    faq: [
      {
        q: "Quem pode denunciar alienação parental?",
        a: "O genitor prejudicado, outros familiares, o Ministério Público ou o próprio juiz podem levantar a questão, inclusive dentro de um processo de guarda ou convivência já em andamento.",
      },
      {
        q: "Alienação parental dá cadeia?",
        a: "A Lei 12.318/2010 prevê sanções civis, como multa, alteração da guarda e suspensão da autoridade parental. Condutas específicas, como falsa denúncia de crime, podem ter consequências penais próprias.",
      },
      {
        q: "O abandono afetivo gera indenização?",
        a: "Pode gerar, quando comprovados a omissão do genitor, o dano à criança e o nexo entre eles. Cada caso é analisado pelo Judiciário com base nas provas apresentadas.",
      },
      {
        q: "Como provar alienação parental?",
        a: "Com registros de mensagens, relatórios escolares, laudos de profissionais de saúde, testemunhas e, principalmente, com a perícia determinada pelo juiz. A organização das provas desde o início faz diferença.",
      },
    ],
    related: ["guarda-e-convivencia-parental", "pensao-alimenticia", "direito-de-familia"],
  },
  {
    slug: "direito-dos-animais-e-guarda-pet",
    title: "Direito dos Animais, Cães de Serviço e Guarda de Pets no Divórcio",
    shortTitle: "Direito dos Animais e Guarda Pet",
    category: "familia",
    icon: "paw-print",
    excerpt:
      "Assessoria para famílias multiespécie: convivência com o pet após a separação, direitos de tutores de cães de serviço e questões jurídicas envolvendo animais.",
    metaTitle: "Guarda de Pet no Divórcio e Direito dos Animais | Fairbanks Advocacia",
    metaDescription:
      "Advogada para guarda compartilhada de pets após divórcio, cães de serviço e direito dos animais em São Paulo. Famílias multiespécie com segurança jurídica.",
    keywords: [
      "guarda compartilhada de pet divórcio",
      "guarda de animal separação",
      "cão de serviço direitos",
      "direito dos animais advogada",
    ],
    lead: [
      "Quando um casal se separa, o animal de estimação também precisa de uma definição: com quem fica, como será a convivência e quem paga as despesas. O Código Civil ainda trata os animais como bens, mas o Superior Tribunal de Justiça já reconheceu que o juiz pode regulamentar a convivência com o pet após a separação, levando em conta o vínculo afetivo e o bem-estar do animal.",
      "A Fairbanks Advocacia é entusiasta das famílias multiespécie e presta assessoria para a chamada guarda pet, para tutores de cães de serviço e para outras questões jurídicas que envolvem animais.",
    ],
    sections: [
      {
        heading: "Como funciona a guarda de pet no divórcio?",
        paragraphs: [
          "A guarda pet é o acordo ou a decisão judicial que define como os ex-tutores vão conviver com o animal depois da separação. O documento pode estabelecer a residência principal do pet, períodos de convivência com o outro tutor, divisão de despesas com alimentação, veterinário e plano de saúde, e regras para viagens e decisões sobre tratamentos.",
          "Sempre que possível, construímos o acordo de forma consensual e o incluímos na escritura de divórcio ou na petição judicial. Quando não há consenso, o pedido é levado ao juiz, que decide considerando quem cuidava do animal, as condições de cada tutor e o bem-estar do pet.",
        ],
      },
      {
        heading: "Quais são os direitos de quem tem cão de serviço?",
        paragraphs: [
          "Cães de serviço são treinados para garantir autonomia e bem-estar a pessoas com deficiência visual, auditiva, física, intelectual ou psíquica. No Brasil, apenas o cão-guia tem legislação específica: a Lei 11.126/2005 garante à pessoa com deficiência visual o direito de ingressar e permanecer com o cão-guia em locais públicos e privados de uso coletivo e em meios de transporte.",
          "Para os demais tipos de cão de assistência, a proteção depende de análise jurídica pontual, combinando a Lei Brasileira de Inclusão (Lei 13.146/2015), normas locais e a comprovação do treinamento e do registro do animal. O escritório orienta tutores sobre documentação, acesso a estabelecimentos e medidas em caso de recusa.",
        ],
      },
      {
        heading: "Tipos de cão de serviço",
        list: [
          "Cão-guia: auxilia pessoas com deficiência visual na locomoção segura, desviando de obstáculos e sinalizando degraus e passagens.",
          "Cão de serviço para autismo: oferece suporte emocional a pessoas com Transtorno do Espectro Autista, identifica crises e previne comportamentos de risco.",
          "Cão de serviço psiquiátrico: treinado para dar suporte a pessoas com diagnóstico de ansiedade, depressão, transtorno bipolar e outros transtornos.",
          "Cão de assistência de mobilidade: ajuda pessoas com mobilidade reduzida a pegar objetos, abrir portas, acionar botões e manter o equilíbrio ao caminhar.",
          "Cão de alerta médico: detecta alterações fisiológicas, como crises de hipoglicemia ou convulsões, e alerta o tutor ou terceiros.",
        ],
      },
      {
        heading: "Outras questões jurídicas com animais",
        list: [
          "Responsabilidade civil por danos causados por animais, prevista no artigo 936 do Código Civil.",
          "Conflitos em condomínios sobre a permanência de animais nas unidades.",
          "Contratos de compra, adoção, hospedagem e serviços veterinários.",
          "Destinação do animal em testamento e planejamento sucessório.",
        ],
      },
    ],
    faq: [
      {
        q: "O juiz pode determinar guarda compartilhada de cachorro?",
        a: "O Judiciário vem admitindo a regulamentação da convivência com o animal após a separação, com base no vínculo afetivo dos tutores e no bem-estar do pet. O termo técnico é regulamentação de convivência, embora a expressão guarda pet seja a mais usada.",
      },
      {
        q: "Quem fica com o pet se ele foi comprado por um só dos cônjuges?",
        a: "A propriedade é um dos critérios, mas não o único. Quem cuidava do animal, as condições de moradia de cada um e o bem-estar do pet também são considerados.",
      },
      {
        q: "Estabelecimentos podem recusar a entrada de cão-guia?",
        a: "Não. A Lei 11.126/2005 garante o acesso do cão-guia, e a recusa pode gerar multa e responsabilização do estabelecimento.",
      },
      {
        q: "As despesas do pet entram no acordo de divórcio?",
        a: "Podem e devem entrar. O acordo pode prever a divisão de alimentação, veterinário, vacinas, plano de saúde e outras despesas.",
      },
    ],
    related: ["divorcio-e-partilha", "guarda-e-convivencia-parental", "planejamento-sucessorio"],
  },
  {
    slug: "inventario-e-sucessoes",
    title: "Inventário e Sucessões em São Paulo",
    shortTitle: "Inventário e Sucessões",
    category: "sucessoes",
    icon: "scroll-text",
    excerpt:
      "Inventário extrajudicial em cartório com agilidade, inventário judicial quando há litígio, partilha de herança, testamento e alvarás, com orientação clara em um momento difícil.",
    metaTitle: "Advogada para Inventário em São Paulo | Fairbanks Advocacia",
    metaDescription:
      "Inventário extrajudicial em cartório ou judicial em São Paulo, partilha de herança e sucessões. Advogada com mais de 20 anos de experiência. Prazo de 60 dias: fale conosco.",
    keywords: [
      "advogada inventário são paulo",
      "inventário extrajudicial cartório",
      "inventário judicial",
      "partilha de herança",
      "prazo para abrir inventário",
    ],
    lead: [
      "O inventário é o procedimento que apura os bens, as dívidas e os herdeiros de uma pessoa falecida e transfere o patrimônio a quem tem direito. Ele deve ser aberto em até 60 dias após o falecimento, conforme o artigo 611 do Código de Processo Civil, e pode ser feito em cartório, quando os herdeiros estão de acordo, ou pela via judicial, quando há conflito.",
      "A Fairbanks Advocacia é especializada em inventário extrajudicial e conduz o procedimento em prazo curto, para que o patrimônio chegue às mãos dos herdeiros com segurança jurídica. Quando o litígio é inevitável, atuamos no inventário judicial com a mesma dedicação.",
    ],
    sections: [
      {
        heading: "Quais são os primeiros passos após o falecimento?",
        ordered: true,
        list: [
          "Obter a certidão de óbito, documento que permite consultar a existência de testamento e iniciar o inventário.",
          "Reunir documentos pessoais do falecido, certidão de casamento ou de união estável e documentos dos herdeiros.",
          "Levantar o patrimônio: matrículas de imóveis, veículos, contas bancárias, investimentos, participações em empresas e dívidas.",
          "Procurar a advogada o quanto antes, para respeitar o prazo legal de 60 dias e evitar multa sobre o imposto de transmissão.",
        ],
      },
      {
        heading: "Inventário em cartório ou judicial: qual é o meu caso?",
        paragraphs: [
          "O inventário extrajudicial é feito em tabelionato de notas por escritura pública, com a assistência de advogado. Ele é mais rápido e mais econômico e exige que todos os herdeiros estejam de acordo com a partilha. Com a atualização da Resolução 35 do Conselho Nacional de Justiça, passou a ser possível fazer o inventário em cartório mesmo quando há herdeiros menores ou incapazes, com a participação do Ministério Público, e mesmo quando há testamento, desde que ele tenha sido registrado ou autorizado judicialmente.",
          "O inventário judicial é obrigatório quando há litígio entre os herdeiros ou quando a situação não se enquadra nas hipóteses admitidas em cartório. Ele tramita perante o juiz, com nomeação de inventariante, apresentação das primeiras declarações, avaliação dos bens, pagamento do imposto e sentença de partilha.",
        ],
      },
      {
        heading: "O que mudou com a nova Resolução do CNJ?",
        list: [
          "Inventário extrajudicial com herdeiros menores ou incapazes, com participação do Ministério Público.",
          "Inventário extrajudicial mesmo havendo testamento, atendidos os requisitos da norma.",
          "Possibilidade de autorização para venda de bens durante o inventário, a pedido do inventariante, de modo semelhante ao alvará judicial. A liquidez gerada muitas vezes permite que os herdeiros arquem com as custas e os impostos.",
        ],
      },
      {
        heading: "Quais são os custos de um inventário?",
        paragraphs: [
          "Os principais custos são o ITCMD, imposto estadual sobre a transmissão da herança, cuja alíquota em São Paulo é de 4% sobre o valor dos bens, os emolumentos do cartório ou as custas judiciais, as certidões e os honorários advocatícios. No Estado de São Paulo, a abertura do inventário após 60 dias do falecimento gera multa sobre o ITCMD, de 10% até 180 dias e de 20% depois disso, conforme a Lei estadual 10.705/2000.",
          "Quem responde pelas dívidas do falecido é o espólio, até o limite do valor da herança. Os herdeiros não respondem com o patrimônio pessoal, mas as dívidas são abatidas antes da partilha.",
        ],
      },
      {
        heading: "Como o escritório conduz o inventário extrajudicial?",
        ordered: true,
        list: [
          "Consulta e checagem de testamento a partir da certidão de óbito.",
          "Levantamento completo dos bens, dívidas e herdeiros e cálculo do ITCMD.",
          "Elaboração do plano de partilha e da minuta da escritura.",
          "Lavratura no tabelionato e registro da partilha nos cartórios de imóveis e demais órgãos.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual é o prazo para abrir o inventário?",
        a: "60 dias a contar do falecimento, conforme o artigo 611 do Código de Processo Civil. Depois desse prazo, incide multa sobre o ITCMD no Estado de São Paulo.",
      },
      {
        q: "Quanto tempo demora um inventário em cartório?",
        a: "Depende da reunião dos documentos e do pagamento do imposto. Com a documentação completa e os herdeiros em acordo, a escritura pode ser lavrada em poucas semanas.",
      },
      {
        q: "Posso fazer inventário se um herdeiro mora no exterior?",
        a: "Sim. O herdeiro pode participar por procuração pública, inclusive lavrada em consulado brasileiro.",
      },
      {
        q: "É possível vender um imóvel antes de terminar o inventário?",
        a: "Em regra, não, mas é possível pedir autorização para a venda, judicialmente por alvará ou, nos termos da Resolução 35 do CNJ, no próprio procedimento extrajudicial, para gerar liquidez ao espólio.",
      },
      {
        q: "O cônjuge sobrevivente é herdeiro?",
        a: "Depende do regime de bens. O cônjuge tem direito à meação dos bens comuns e, em determinadas hipóteses do artigo 1.829 do Código Civil, concorre com os descendentes na herança.",
      },
    ],
    related: ["planejamento-sucessorio", "direito-imobiliario", "divorcio-e-partilha"],
  },
  {
    slug: "planejamento-sucessorio",
    title: "Planejamento Sucessório e Testamento",
    shortTitle: "Planejamento Sucessório",
    category: "sucessoes",
    icon: "landmark",
    excerpt:
      "Testamento, doação com reserva de usufruto, adiantamento de legítima e outras ferramentas para organizar a transmissão do patrimônio em vida, com menos custo e menos conflito.",
    metaTitle: "Planejamento Sucessório e Testamento em SP | Fairbanks Advocacia",
    metaDescription:
      "Advogada para planejamento sucessório, testamento, doação em vida e proteção patrimonial em São Paulo. Organize a sucessão e evite conflitos entre herdeiros.",
    keywords: [
      "planejamento sucessório são paulo",
      "advogada testamento",
      "doação em vida herança",
      "adiantamento de legítima",
      "como evitar inventário",
    ],
    lead: [
      "Planejamento sucessório é o conjunto de medidas jurídicas adotadas em vida para definir como o patrimônio será transmitido após a morte, respeitando a lei e a vontade de quem planeja. Com ele, a família reduz custos, evita disputas e ganha previsibilidade. Sem ele, tudo passa pelo inventário e pelas regras gerais do Código Civil.",
      "Na Fairbanks Advocacia, o planejamento começa com uma análise criteriosa do patrimônio, da família e dos interesses do cliente, e usa os melhores meios técnicos para assegurar que a sua vontade será cumprida.",
    ],
    sections: [
      {
        heading: "Por que fazer planejamento sucessório?",
        paragraphs: [
          "A morte é o único fato certo da vida, e tratá-la como fato jurídico relevante é um gesto de cuidado com quem fica. Quem planeja e realiza em vida o que deseja para filhos e familiares pode também deixar a sucessão organizada: definir quem recebe o quê, proteger um herdeiro mais vulnerável, preservar uma empresa familiar e reduzir o tempo e o custo do inventário.",
          "O planejamento precisa respeitar a legítima: metade do patrimônio é reservada por lei aos herdeiros necessários (descendentes, ascendentes e cônjuge), conforme o artigo 1.846 do Código Civil. A outra metade, chamada parte disponível, pode ser destinada livremente.",
        ],
      },
      {
        heading: "Quais são as principais ferramentas?",
        list: [
          "Testamento público, cerrado ou particular: define a destinação da parte disponível, reconhece filhos, nomeia tutor para filhos menores e impõe cláusulas como incomunicabilidade e impenhorabilidade.",
          "Doação em vida com reserva de usufruto: transfere a propriedade do bem aos herdeiros, mas o doador mantém o uso e a renda enquanto viver.",
          "Adiantamento de legítima: doação feita a um herdeiro necessário que será descontada da parte dele na herança, salvo dispensa expressa.",
          "Pacto antenupcial e contrato de união estável: definem o regime de bens e, com isso, o que será meação e o que será herança.",
          "Holding familiar: constituição de sociedade para concentrar o patrimônio e organizar a sucessão por meio de quotas, indicada em patrimônios maiores ou com empresas.",
          "Seguro de vida e previdência privada: valores que, em regra, não passam pelo inventário e dão liquidez imediata aos beneficiários.",
        ],
      },
      {
        heading: "Como é feito um testamento?",
        paragraphs: [
          "O testamento público é lavrado em tabelionato de notas, na presença de duas testemunhas, e fica arquivado com segurança. É a forma mais usada e mais difícil de ser contestada. O testamento particular é escrito e assinado pelo testador na presença de três testemunhas, e o cerrado é entregue lacrado ao tabelião. Qualquer pessoa capaz e maior de 16 anos pode testar, conforme o artigo 1.860 do Código Civil.",
          "O testamento pode ser alterado ou revogado a qualquer tempo. Recomendamos revisá-lo quando houver mudanças relevantes, como nascimento de filhos, casamento, divórcio ou aquisição de patrimônio significativo.",
        ],
      },
      {
        heading: "Como o escritório conduz o planejamento?",
        ordered: true,
        list: [
          "Diagnóstico: mapeamento do patrimônio, da estrutura familiar, do regime de bens e dos objetivos do cliente.",
          "Desenho da estratégia: combinação das ferramentas adequadas, com simulação de custos tributários e de inventário.",
          "Execução dos atos: redação do testamento, escrituras de doação, alterações societárias e demais instrumentos.",
          "Revisão periódica, para que o planejamento acompanhe as mudanças na vida da família.",
        ],
      },
    ],
    faq: [
      {
        q: "Posso deixar todos os meus bens para quem eu quiser?",
        a: "Não, se houver herdeiros necessários. Metade do patrimônio é reservada a eles. A outra metade pode ser destinada livremente, inclusive a pessoas fora da família ou a instituições.",
      },
      {
        q: "Doar em vida evita o inventário?",
        a: "Os bens doados saem do patrimônio e não entram no inventário, mas a doação tem custos próprios, como o ITCMD e a escritura, e precisa respeitar a legítima dos herdeiros necessários.",
      },
      {
        q: "Testamento pode ser contestado?",
        a: "Pode, por exemplo se houver vício de forma, incapacidade do testador ou violação da legítima. Um testamento bem elaborado, com assessoria jurídica, reduz muito esse risco.",
      },
      {
        q: "Holding familiar serve para qualquer família?",
        a: "Não. É uma estrutura indicada quando há patrimônio relevante, imóveis de renda ou empresas. Para famílias com patrimônio menor, testamento e doações costumam ser suficientes e mais baratos.",
      },
    ],
    related: [
      "inventario-e-sucessoes",
      "casamento-uniao-estavel-regime-de-bens-pacto-antenupcial",
      "direito-imobiliario",
    ],
  },
  {
    slug: "direito-imobiliario",
    title: "Direito Imobiliário: Compra, Venda e Leilão de Imóveis",
    shortTitle: "Direito Imobiliário",
    category: "patrimonio",
    icon: "building-2",
    excerpt:
      "Assessoria jurídica completa na compra e venda de imóveis: análise de documentos e certidões, contratos, escritura, registro e aquisição em leilões.",
    metaTitle: "Advogada Imobiliária em São Paulo: Compra e Venda | Fairbanks Advocacia",
    metaDescription:
      "Assessoria jurídica para compra e venda de imóveis em São Paulo: análise de certidões, contrato, escritura e registro. Atuação também em leilões, doação, permuta e cessão de direitos.",
    keywords: [
      "advogada imobiliária são paulo",
      "assessoria jurídica compra de imóvel",
      "análise de documentos imóvel",
      "contrato de compra e venda imóvel",
      "compra de imóvel em leilão advogado",
    ],
    lead: [
      "A compra da casa própria continua sendo um dos maiores sonhos do brasileiro, e também um dos negócios de maior valor na vida de uma família. A assessoria jurídica imobiliária serve para garantir que o imóvel está livre de problemas, que o contrato protege o comprador ou o vendedor e que a transferência será concluída até a matrícula atualizada.",
      "A Fairbanks Advocacia elabora e revisa contratos de compra e venda, analisa toda a documentação e as certidões, acompanha a escritura no tabelionato e o registro no cartório de imóveis, e atua em doações, permutas, cessões de direitos e aquisições em leilão.",
    ],
    sections: [
      {
        heading: "O que é a análise de documentos (due diligence) do imóvel?",
        paragraphs: [
          "É a verificação de toda a situação jurídica do imóvel e do vendedor antes de assinar qualquer contrato ou pagar sinal. No Brasil, só é dono quem registra: a propriedade se transfere com o registro da escritura na matrícula, conforme o artigo 1.245 do Código Civil. Por isso a análise começa pela matrícula atualizada e se estende às certidões do vendedor.",
          "A diligência identifica penhoras, hipotecas, ações judiciais, dívidas de condomínio e IPTU, irregularidades de construção e riscos de fraude à execução, que podem levar à perda do imóvel mesmo depois de pago.",
        ],
      },
      {
        heading: "Quais certidões e documentos analisamos?",
        list: [
          "Matrícula atualizada do imóvel e certidão de ônus reais.",
          "Certidões de distribuidores cíveis, fiscais, trabalhistas e de protestos em nome do vendedor.",
          "Certidão negativa de IPTU e declaração de quitação de condomínio.",
          "Documentos pessoais, estado civil e regime de bens do vendedor, para verificar a necessidade de anuência do cônjuge.",
          "Documentação da construtora ou incorporadora, memorial de incorporação e habite-se, em imóveis novos ou na planta.",
        ],
      },
      {
        heading: "Como funciona a compra de imóvel em leilão?",
        paragraphs: [
          "Leilões judiciais e extrajudiciais podem oferecer imóveis por valores abaixo do mercado, mas exigem cuidado redobrado. É preciso analisar o edital, o processo de origem, a existência de ocupantes, as dívidas que acompanham o imóvel e as regras de pagamento e imissão na posse. Erros nessa etapa custam caro e podem anular a arrematação.",
          "O escritório tem atuado na assessoria para compra de imóveis em leilão, desde a análise prévia do lote até o registro da carta de arrematação e a regularização da posse.",
        ],
      },
      {
        heading: "Outras operações imobiliárias",
        list: [
          "Doação de imóvel, com ou sem reserva de usufruto, integrada ao planejamento sucessório.",
          "Permuta de imóveis e permuta com torna.",
          "Cessão de direitos sobre imóveis financiados ou em inventário.",
          "Contratos de locação residencial e comercial.",
          "Regularização de imóveis sem escritura, por usucapião ou adjudicação compulsória.",
        ],
      },
      {
        heading: "Etapas da assessoria na compra e venda",
        ordered: true,
        list: [
          "Análise da matrícula, das certidões e dos documentos das partes.",
          "Elaboração ou revisão do contrato de promessa de compra e venda, com cláusulas de garantia e condições de pagamento.",
          "Acompanhamento da escritura pública no tabelionato ou do contrato com o agente financeiro.",
          "Registro no cartório de imóveis e entrega da matrícula atualizada ao cliente.",
        ],
      },
    ],
    faq: [
      {
        q: "Preciso de advogado para comprar um imóvel?",
        a: "A lei não exige, mas a assessoria jurídica é a única forma de verificar riscos que o corretor e o cartório não analisam, como ações judiciais contra o vendedor e fraude à execução.",
      },
      {
        q: "Quais são os custos para transferir um imóvel?",
        a: "ITBI, imposto municipal que em São Paulo é de 3% sobre o valor do imóvel, além dos emolumentos da escritura e do registro, fixados em tabela estadual, e dos honorários advocatícios.",
      },
      {
        q: "Contrato de gaveta é seguro?",
        a: "Não. O contrato particular sem registro não transfere a propriedade e deixa o comprador exposto a dívidas e disputas envolvendo o vendedor. Ele deve ser evitado ou regularizado o quanto antes.",
      },
      {
        q: "Como saber se o imóvel tem dívidas?",
        a: "Pela matrícula, pela certidão negativa de IPTU, pela declaração do síndico sobre condomínio e pelas certidões de ações em nome do vendedor. Essa verificação integra a análise que o escritório realiza.",
      },
    ],
    related: ["locacao-de-imoveis", "planejamento-sucessorio", "inventario-e-sucessoes"],
  },
  {
    slug: "locacao-de-imoveis",
    title: "Locação de Imóveis: Contratos, Despejo e Tributação de Aluguéis",
    shortTitle: "Locações de Imóveis",
    category: "patrimonio",
    icon: "key-round",
    excerpt:
      "Contratos de locação residencial e comercial, cobrança e despejo, revisão de aluguel e orientação sobre a nova tributação dos aluguéis na reforma tributária.",
    metaTitle: "Advogada para Locação de Imóveis em São Paulo | Fairbanks Advocacia",
    metaDescription:
      "Contratos de aluguel, ação de despejo, cobrança e renovação de locação em São Paulo. Orientação sobre a tributação de aluguéis com a reforma tributária (LC 214/2025).",
    keywords: [
      "advogada locação de imóveis são paulo",
      "contrato de aluguel advogado",
      "ação de despejo",
      "tributação de aluguel reforma tributária",
      "lei do inquilinato",
    ],
    lead: [
      "A locação de imóveis urbanos é regida pela Lei 8.245/1991, a Lei do Inquilinato, que define direitos e deveres de locador e locatário, garantias, prazos, reajustes e as hipóteses de despejo. Um contrato bem redigido evita a maior parte dos conflitos.",
      "A Fairbanks Advocacia assessora proprietários e inquilinos na elaboração e revisão de contratos, na cobrança de aluguéis, nas ações de despejo, renovatória e revisional, e orienta sobre as obrigações fiscais, que mudam com a reforma tributária.",
    ],
    sections: [
      {
        heading: "O que precisa constar em um contrato de locação?",
        list: [
          "Identificação completa das partes e do imóvel, com a matrícula.",
          "Prazo da locação e regras de renovação e de desocupação antecipada, com a multa proporcional prevista no artigo 4º da Lei do Inquilinato.",
          "Valor do aluguel, data de pagamento, índice e periodicidade do reajuste.",
          "Garantia escolhida: caução, fiança, seguro-fiança ou cessão fiduciária, sem acumular mais de uma.",
          "Responsabilidade por IPTU, condomínio, consumo e manutenção.",
          "Vistoria de entrada com fotos, para evitar disputas na devolução.",
        ],
      },
      {
        heading: "Quando cabe ação de despejo?",
        paragraphs: [
          "A ação de despejo é cabível por falta de pagamento, por fim do prazo contratual sem desocupação, por infração contratual, por necessidade de uso próprio do imóvel e por outras hipóteses da Lei do Inquilinato. Em caso de falta de pagamento, o locatário pode evitar o despejo pagando o débito atualizado, com encargos, no prazo legal.",
          "Para contratos com garantia e situações específicas, a lei permite pedido de liminar de desocupação em 15 dias. O escritório avalia a estratégia mais rápida e segura para o proprietário, e também defende inquilinos em cobranças indevidas.",
        ],
      },
      {
        heading: "Como fica a tributação dos aluguéis com a reforma tributária?",
        paragraphs: [
          "A Lei Complementar 214/2025 instituiu o IVA dual, formado pela CBS federal e pelo IBS estadual e municipal, que passa a alcançar as locações de imóveis a partir de 2026, com transição gradual. Os chamados pequenos proprietários continuam sujeitos ao Imposto de Renda da pessoa física sobre os aluguéis, com recolhimento mensal pelo Carnê-Leão e fiscalização mais rigorosa pelo cruzamento de dados da Receita Federal.",
          "Já a pessoa física com quatro ou mais imóveis alugados e receita anual de aluguéis acima de R$ 240 mil passa a ser contribuinte do novo imposto sobre o consumo, nos termos da lei complementar. Locador e locatário devem declarar corretamente os valores no Imposto de Renda. O escritório orienta sobre o enquadramento e sobre a conveniência de estruturas como a holding patrimonial.",
        ],
      },
      {
        heading: "Outras demandas de locação",
        list: [
          "Ação renovatória de locação comercial, para garantir a continuidade do ponto.",
          "Ação revisional de aluguel, para adequar o valor ao mercado após três anos de contrato ou do último acordo.",
          "Cobrança de aluguéis e encargos contra locatário e fiador.",
          "Retomada do imóvel para uso próprio ou de familiares.",
          "Locação por temporada e plataformas de hospedagem, inclusive conflitos com condomínios.",
        ],
      },
    ],
    faq: [
      {
        q: "O proprietário pode pedir o imóvel de volta antes do fim do contrato?",
        a: "Durante o prazo determinado, em regra não, salvo infração do locatário. Após o prazo, em contratos residenciais de 30 meses ou mais, pode pedir a desocupação com aviso de 30 dias.",
      },
      {
        q: "O inquilino pode sair antes do prazo?",
        a: "Sim, pagando a multa proporcional ao tempo restante, prevista no contrato. Se a saída for por transferência de trabalho para outra localidade, a multa é dispensada com aviso de 30 dias.",
      },
      {
        q: "Qual índice reajusta o aluguel?",
        a: "O índice definido no contrato, em geral IPCA ou IGP-M, aplicado uma vez por ano.",
      },
      {
        q: "Quem paga o IPTU e o condomínio?",
        a: "O que o contrato definir. O IPTU pode ser repassado ao inquilino. As despesas extraordinárias de condomínio, como obras estruturais, são do proprietário.",
      },
    ],
    related: ["direito-imobiliario", "planejamento-sucessorio", "inventario-e-sucessoes"],
  },
  {
    slug: "direito-educacional",
    title: "Direito Educacional",
    shortTitle: "Direito Educacional",
    category: "educacional",
    icon: "graduation-cap",
    excerpt:
      "Atuação e pesquisa em direito educacional: acesso e permanência, relações entre estudantes e instituições de ensino, inclusão e o direito à educação como direito constitucional.",
    metaTitle: "Direito Educacional em São Paulo | Fairbanks Advocacia",
    metaDescription:
      "Advogada e pesquisadora em direito educacional em São Paulo: acesso e permanência, contratos com instituições de ensino, inclusão escolar e direito à educação.",
    keywords: [
      "direito educacional advogada",
      "advogada direito educacional são paulo",
      "direito à educação",
      "problemas com escola ou faculdade advogado",
    ],
    lead: [
      "O direito educacional é uma área em consolidação que vai além da relação entre aluno e escola ou aluno e universidade. Ele parte do direito à educação como direito reconhecido pela Constituição Federal (artigos 205 a 214) e abrange o acesso, a permanência, a qualidade do ensino e as relações contratuais e administrativas com as instituições.",
      "A Dra. Cristiane Fairbanks pesquisa há mais de uma década o direito educacional, o acesso à educação, a permanência e o impacto da formação na vida das pessoas. É pós-doutoranda em Educação pela Universidade Federal de São Paulo (Unifesp), e essa experiência acadêmica sustenta a atuação do escritório na área.",
    ],
    sections: [
      {
        heading: "Quais questões o direito educacional abrange?",
        list: [
          "Acesso e permanência: matrícula, rematrícula, transferência, vagas e políticas de cotas e assistência estudantil.",
          "Relações contratuais com instituições privadas: mensalidades, reajustes, inadimplência e a Lei 9.870/1999, que proíbe sanções pedagógicas ao aluno inadimplente.",
          "Inclusão de estudantes com deficiência e com necessidades específicas, nos termos da Lei Brasileira de Inclusão (Lei 13.146/2015).",
          "Processos disciplinares, expulsão, jubilamento e direito de defesa dentro da instituição.",
          "Emissão de diplomas, certificados e históricos e reconhecimento de cursos.",
          "Relação entre as famílias e a escola, inclusive na decisão sobre a educação dos filhos após o divórcio.",
        ],
      },
      {
        heading: "Por que o direito educacional tem uma dimensão política?",
        paragraphs: [
          "Porque a educação é um dever do Estado e da família e um direito de todos, e as escolhas sobre quem acessa, quem permanece e com que qualidade são escolhas políticas. A pesquisa da Dra. Cristiane sobre egressos da universidade pública, sobre a pós-graduação e sobre a trajetória de estudantes mostra como a formação altera a vida dos indivíduos e como barreiras jurídicas podem impedir isso.",
          "Essa visão orienta a atuação do escritório: cada caso de direito educacional é também uma questão de efetivação de um direito fundamental, e não apenas um conflito contratual.",
        ],
      },
      {
        heading: "Pesquisa e publicações",
        paragraphs: [
          "A produção acadêmica da Dra. Cristiane Fairbanks na área está disponível no Currículo Lattes e inclui pesquisas sobre o perfil e a trajetória dos egressos do curso de Pedagogia da Unifesp, além de contribuições para os dossiês Florestan Fernandes e Newton Sucupira, publicados pela Cátedra do Centro de Estudos Marxistas.",
        ],
      },
      {
        heading: "Como o escritório pode ajudar?",
        ordered: true,
        list: [
          "Consulta para entender o conflito com a instituição de ensino e os documentos envolvidos.",
          "Tentativa de solução administrativa, com notificação ou recurso interno, quando viável.",
          "Medidas judiciais, inclusive urgentes, para garantir matrícula, continuidade dos estudos ou emissão de documentos.",
          "Pareceres e consultoria para famílias, estudantes e instituições.",
        ],
      },
    ],
    faq: [
      {
        q: "A escola pode impedir o aluno inadimplente de fazer provas?",
        a: "Não. A Lei 9.870/1999 proíbe a suspensão de provas, a retenção de documentos e outras penalidades pedagógicas por inadimplência. A instituição pode cobrar a dívida e recusar a rematrícula para o período seguinte.",
      },
      {
        q: "A instituição é obrigada a oferecer adaptações a estudante com deficiência?",
        a: "Sim. A Lei Brasileira de Inclusão exige acessibilidade, adaptações razoáveis e atendimento educacional especializado, sem cobrança adicional.",
      },
      {
        q: "O escritório atende instituições de ensino?",
        a: "Sim. A atuação inclui consultoria e pareceres para instituições, além da representação de estudantes e famílias.",
      },
      {
        q: "Pais separados discordam sobre a escola do filho. Como resolver?",
        a: "Na guarda compartilhada, decisões sobre educação cabem a ambos. Sem consenso, a questão pode ser levada à mediação ou ao juiz, que decide pelo melhor interesse da criança.",
      },
    ],
    related: ["guarda-e-convivencia-parental", "direito-de-familia", "pensao-alimenticia"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}
