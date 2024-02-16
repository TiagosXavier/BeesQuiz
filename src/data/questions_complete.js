const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
  {
    category: "Cerveja",
    questions: [
      {
        question: "Em que ano foi lançada a cerveja brahma",
        options: ["1982", "1857", "1888", "1964"],
        answer: "1888",
      },
      {
        question: "Qual é o lema da Ambev que enfatiza a responsabilidade social?",
        options: ["Sempre nos melhores locais.", "Desce redondo.", "Beba com responsabilidade.", "Se persistirem os sintomas, um médico deverá ser consultado."],
        answer: "Beba com responsabilidade.",
      },
      {
        question: "Qual é o estilo de cerveja da Corona?",
        options: ["Pilsen.", "Lager.", "IPA.", "Pale Ale."],
        answer: "Lager.",
      },
      {
        question: "Qual é a cidade de origem da Cervejaria Colorado?",
        options: ["Ribeirão Preto - SP.", "Blumenau - SC.", "Colorado City - TX - ", "Curitiba - PR"],
        answer: "Ribeirão Preto - SP.",
      },
      {
        question: "Qual é o lema da Budweiser que enfatiza sua qualidade e tradição?",
        options: ["B is the best.", "Made for you.", "Thought in beer, thought in budweiser.", "The King of Beers."],
        answer: "The King of Beers.",
      },
    ],
  },
];

export default data;
