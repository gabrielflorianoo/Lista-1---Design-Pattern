class GerenciadorPrefixos {
    constructor() {
        this.prefixos = new Map();
    }

    obterPrefixo(chave, prefixo) {
        if (!this.prefixos.has(chave)) {
            this.prefixos.set(chave, prefixo);
        }
        return this.prefixos.get(chave);
    }

    adicionarLista(lista) {
        for (let i = 0; i < lista.length; i++) {
            this.obterPrefixo(lista[i].chave, lista[i].prefixo);
        }
    }
}

module.exports = GerenciadorPrefixos;