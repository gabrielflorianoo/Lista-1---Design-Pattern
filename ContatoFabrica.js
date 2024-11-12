const Contato = require('./Tipos/Contato');
const ContatoProfissional = require('./Tipos/ContatoProfissional');
const ContatoServico = require('./Tipos/ContatoServico');

class ContatoFabrica {
    /**
     * Cria um novo contato.
     *
     * @param {Function} tipo - A classe do contato a ser criado (Contato, ContatoProfissional, ContatoServico).
     * @param {string} nome - O nome do contato.
     * @param {string} telefone - O telefone do contato.
     * @param {string} email - O email do contato.
     * @param {...*} params - Parâmetros adicionais para o tipo de contato específico.
     * @returns {*|Contato|ContatoProfissional|ContatoServico} - O contato criado.
     * @throws {Error} Caso o tipo de contato seja desconhecido.
     */
    static criarContato(tipo, nome, telefone, email, ...params) {
        if (![Contato, ContatoProfissional, ContatoServico].includes(tipo)) {
            throw new Error('Tipo de contato desconhecido');
        }
        return new tipo(nome, telefone, email, ...params);
    }
}

module.exports = ContatoFabrica;
