const Contato = require('./Contato');
const ContatoProfissional = require('./Tipos/ContatoProfissional');
const ContatoServico = require('./Tipos/ContatoServico');

class ContatoFabrica {
    static criarContato(tipo, nome, telefone, email, ...params) {
        switch (tipo) {
            case 'Contato':
                return new Contato(nome, telefone, email);
            case 'ContatoProfissional':
                return new ContatoProfissional(nome, telefone, email, ...params);
            case 'ContatoServico':
                return new ContatoServico(nome, telefone, email, ...params);
            default:
                throw new Error('Tipo de contato desconhecido');
        }
    }
}

module.exports = ContatoFabrica;