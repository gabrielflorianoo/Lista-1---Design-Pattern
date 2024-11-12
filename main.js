// Importa as classes de contato e a fábrica de contatos
const Contato = require('./Tipos/Contato');
const ContatoProfissional = require('./Tipos/ContatoProfissional');
const ContatoServico = require('./Tipos/ContatoServico');

const ContatoFabrica = require('./ContatoFabrica');

// Importa os gerenciadores de contatos, prefixos e domínios
const GerenciadorContatos = require('./Gerenciadores/GerenciadorContatos');
const GerenciadorPrefixos = require('./Gerenciadores/Prefixos');
const GerenciadorDominios = require('./Gerenciadores/Dominios');

// Cria instâncias dos gerenciadores de prefixos e domínios
const prefixos = new GerenciadorPrefixos();
const dominios = new GerenciadorDominios();

const _ = require('lodash')

// Define e adiciona uma lista de prefixos ao gerenciador de prefixos
const listaPrefixos = [
    { chave: 'Brazil', prefixo: '55' },
    { chave: 'USA', prefixo: '1' },
    { chave: 'France', prefixo: '33' },
    { chave: 'Japan', prefixo: '81' },
    { chave: 'China', prefixo: '86' },
];
prefixos.adicionarLista(listaPrefixos);

// Define e adiciona uma lista de domínios ao gerenciador de domínios
const listaDominios = [
    { chave: 'Google', dominio: 'google.com' },
    { chave: 'Facebook', dominio: 'facebook.com' },
    { chave: 'Twitter', dominio: 'twitter.com' },
    { chave: 'Instagram', dominio: 'instagram.com' },
    { chave: 'LinkedIn', dominio: 'linkedin.com' },
];
dominios.adicionarLista(listaDominios);

// Cria uma instância do gerenciador de contatos
const gerenciadorContatos = new GerenciadorContatos();

// Define os tipos de contatos disponíveis
const tiposContatos = [Contato, ContatoProfissional, ContatoServico];

// Cria 100 contatos aleatórios e os adiciona ao gerenciador de contatos
for (let i = 0; i < 100; i++) {
    const tipo = _.sample(tiposContatos);
    const nome = _.sample([
        'Galileu Galilei',
        'Isaac Newton',
        'Marie Curie',
        'Albert Einstein',
        'Stephen Hawking',
    ]);
    const telefone = `(${prefixos.obterPrefixo(
        _.sample(['Brazil', 'USA', 'France', 'Japan', 'China']),
        null
    )}) ${_.sample([
        '99999-9999',
        '88888-8888',
        '77777-7777',
        '66666-6666',
        '55555-5555',
    ])}`;
    const email = `${_.sample([
        'galileu',
        'isaac',
        'marie',
        'albert',
        'stephen',
    ])}@${dominios.getDominio(
        _.sample(['Google', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn']),
        null
    )}`;

    // Define parâmetros adicionais para contatos profissionais e de serviço
    const params =
        tipo === ContatoProfissional
            ? [
                  _.sample(['Physics', 'Math', 'Computer Science']),
                  _.sample(['Professor', 'Researcher', 'Engineer']),
              ]
            : tipo === ContatoServico
            ? [
                  _.sample([
                      'Web Development',
                      'Mobile App Development',
                      'Data Science',
                  ]),
              ]
            : [];

    // Cria e adiciona o contato ao gerenciador
    const contato = ContatoFabrica.criarContato(
        tipo,
        nome,
        telefone,
        email,
        ...params
    );

    gerenciadorContatos.adicionar(contato);
}

// Filtra contatos por tipos especificados
const filtrarContatos = (tipos) => {
    return gerenciadorContatos
        .listarContatos()
        .filter((contato) => tipos.includes(contato.constructor));
};

// Exibe contatos profissionais
console.log('Contatos Profissionais:');
filtrarContatos([ContatoProfissional]).forEach((contato) =>
    console.log(contato)
);

// Exibe contatos de serviço
console.log('Contatos de Serviço:');
filtrarContatos([ContatoServico]).forEach((contato) => console.log(contato));

// Exibe todos os contatos
console.log('Todos os Contatos:');
gerenciadorContatos.listarContatos().forEach((contato) => console.log(contato));
