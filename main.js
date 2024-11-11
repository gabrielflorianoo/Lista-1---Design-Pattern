const ContatoProfissional = require('./Tipos/ContatoProfissional');
const ContatoServico = require('./Tipos/ContatoServico');
const ContatoFabrica = require('./ContatoFabrica');
const GerenciadorContatos = require('./Gerenciadores/GerenciadorContatos');
const GerenciadorPrefixos = require('./Gerenciadores/Prefixos');
const GerenciadorDominios = require('./Gerenciadores/Dominios');

const prefixos = new GerenciadorPrefixos();
const dominios = new GerenciadorDominios();

const listaPrefixos = [
    { chave: 'Brazil', prefixo: '55' },
    { chave: 'USA', prefixo: '1' },
    { chave: 'France', prefixo: '33' },
    { chave: 'Japan', prefixo: '81' },
    { chave: 'China', prefixo: '86' },
];

const listaDominios = [
    { chave: 'Google', dominio: 'google.com' },
    { chave: 'Facebook', dominio: 'facebook.com' },
    { chave: 'Twitter', dominio: 'twitter.com' },
    { chave: 'Instagram', dominio: 'instagram.com' },
    { chave: 'LinkedIn', dominio: 'linkedin.com' },
];

prefixos.adicionarLista(listaPrefixos);
dominios.adicionarLista(listaDominios);

const _ = require('lodash');

const gerenciadorContatos = new GerenciadorContatos();

for (let i = 0; i < 100; i++) {
    const tipo = _.sample(['Contato', 'ContatoProfissional', 'ContatoServico']);
    const nome = _.sample(['Galileu Galilei', 'Isaac Newton', 'Marie Curie', 'Albert Einstein', 'Stephen Hawking']);
    const telefone = `(${prefixos.obterPrefixo(_.sample(['Brazil', 'USA', 'France', 'Japan', 'China']), null)}) ${_.sample(['99999-9999', '88888-8888', '77777-7777', '66666-6666', '55555-5555'])}`;
    const email = `${_.sample(['galileu', 'isaac', 'marie', 'albert', 'stephen'])}@${dominios.getDominio(_.sample(['Google', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn']), null)}`;

    const params = tipo === 'ContatoProfissional' ? [_.sample(['Physics', 'Math', 'Computer Science']), _.sample(['Professor', 'Researcher', 'Engineer'])] : tipo === 'ContatoServico' ? [_.sample(['Web Development', 'Mobile App Development', 'Data Science'])] : [];

    const contato = ContatoFabrica.criarContato(tipo, nome, telefone, email, ...params);

    gerenciadorContatos.adicionar(contato);
}


// Listar apenas Contatos Profissionais
console.log('Contatos Profissionais:');
// gerenciadorContatos.listarContatos().filter(contato => contato instanceof ContatoProfissional).forEach(contato => console.log(contato));

// Listar apenas Contatos de Serviço
console.log('Contatos de Serviço:');
// gerenciadorContatos.listarContatos().filter(contato => contato instanceof ContatoServico).forEach(contato => console.log(contato));

// Listar todos os Contatos
console.log('Todos os Contatos:');
// gerenciadorContatos.listarContatos().forEach(contato => console.log(contato));

