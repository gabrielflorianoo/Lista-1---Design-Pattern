const Contato = require('./Contato');

/**
 * Representa um contato de servico.
 * @extends Contato
 */
class ContatoServico extends Contato {
    /**
     * Cria um contato de servico.
     * @param {string} nome - O nome do contato.
     * @param {string} telefone - O telefone do contato.
     * @param {string} email - O email do contato.
     * @param {string} servico - O servico do contato.
     */
    constructor(nome, telefone, email, servico) {
        super(nome, telefone, email);
        this.servico = servico;
    }

    /**
     * Retorna o servico do contato.
     * @return {string} O servico do contato.
     */
    getServico() {
        return this.servico;
    }

    /**
     * Altera o servico do contato.
     * @param {string} servico - O novo servico do contato.
     */
    setServico(servico) {
        this.servico = servico;
    }
}

module.exports = ContatoServico;
