class GerenciadorDominios {
    constructor() {
        this.dominios = new Map();
    }

    getDominio(chave, dominio) {
        if (!this.dominios.has(chave)) {
            this.dominios.set(chave, dominio);
        }
        return this.dominios.get(chave);
    }

    adicionarLista(lista) {
        for (let i = 0; i < lista.length; i++) {
            this.getDominio(lista[i].chave, lista[i].dominio);
        }
    }
}

module.exports = GerenciadorDominios;