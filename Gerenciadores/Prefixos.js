class GerenciadorPrefixos {
    constructor() {
        this.prefixos = new Map();
    }

    /**
     * Retorna o prefixo associado a chave. Se a chave nao existir,
     * adiciona o prefixo fornecido a chave.
     * @param {string} chave - A chave do prefixo.
     * @param {string} prefixo - O prefixo a ser associado.
     * @return {string} O prefixo associado a chave.
     */
    obterPrefixo(chave, prefixo) {
        if (!this.prefixos.has(chave)) {
            this.prefixos.set(chave, prefixo);
        }
        return this.prefixos.get(chave);
    }

    /**
     * Adiciona uma lista de prefixos ao gerenciador.
     * @param {Array} lista - Lista de objetos contendo chave e prefixo.
     */
    adicionarLista(lista) {
        for (let i = 0; i < lista.length; i++) {
            this.obterPrefixo(lista[i].chave, lista[i].prefixo);
        }
    }
}

module.exports = GerenciadorPrefixos;
