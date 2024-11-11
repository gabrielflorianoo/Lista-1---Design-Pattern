const Contato = require('./Contato');

class ContatoServico extends Contato {
    constructor(nome, telefone, email, servico) {
        super(nome, telefone, email);
        this.servico = servico;
    }

    getServico() {
        return this.servico;
    }

    setServico(servico) {
        this.servico = servico;
    }
}

module.exports = ContatoServico;