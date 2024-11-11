class GerenciadorContatos {
    constructor() {
        this.contatos = []
    }

    adicionar(contato) {
        this.contatos.push(contato)
    }

    remover(contato) {
        this.contatos.splice(this.contatos.indexOf(contato), 1)
    }

    listarContatos() {
        return this.contatos;
    }
}

module.exports = GerenciadorContatos;