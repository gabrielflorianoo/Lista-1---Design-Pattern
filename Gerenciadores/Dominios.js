class GerenciadorDominios {
    constructor() {
        this.dominios = new Map();
    }

    /**
     * Retorna o dominio associado a chave. Se a chave nao existir,
     * adiciona o dominio fornecido a chave.
     * @param {string} chave - A chave do dominio.
     * @param {string} dominio - O dominio a ser associado.
     * @return {string} O dominio associado a chave.
     */
    getDominio(chave, dominio) {
        if (!this.dominios.has(chave)) {
            this.dominios.set(chave, dominio);
        }
        return this.dominios.get(chave);
    }

    /**
     * Adiciona uma lista de dominios ao gerenciador.
     * @param {Array} lista - Lista de objetos contendo chave e dominio.
     */
    adicionarLista(lista) {
        for (let i = 0; i < lista.length; i++) {
            this.getDominio(lista[i].chave, lista[i].dominio);
        }
    }
}

module.exports = GerenciadorDominios;
