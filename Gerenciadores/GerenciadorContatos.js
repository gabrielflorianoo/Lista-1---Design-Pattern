class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    /**
     * Adiciona um contato ao gerenciador.
     * @param {Contato} contato - O contato a ser adicionado.
     */
    adicionar(contato) {
        this.contatos.push(contato);
    }

    /**
     * Remove um contato do gerenciador.
     * @param {Contato} contato - O contato a ser removido.
     */
    remover(contato) {
        this.contatos.splice(this.contatos.indexOf(contato), 1);
    }

    /**
     * Retorna uma lista com todos os contatos do gerenciador.
     * @return {Array<Contato>} - A lista de contatos.
     */
    listarContatos() {
        return this.contatos;
    }
}

module.exports = GerenciadorContatos;
