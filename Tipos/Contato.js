class Contato {
    /**
     * Representa um contato.
     * @constructor
     * @param {string} nome - O nome do contato.
     * @param {string} telefone - O telefone do contato.
     * @param {string} email - O e-mail do contato.
     */
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    /**
     * Retorna o nome do contato.
     * @return {string} O nome do contato.
     */
    getNome() {
        return this.nome;
    }

    /**
     * Altera o nome do contato.
     * @param {string} nome - O novo nome do contato.
     */
    setNome(nome) {
        this.nome = nome;
    }

    /**
     * Retorna o telefone do contato.
     * @return {string} O telefone do contato.
     */
    getTelefone() {
        return this.telefone;
    }

    /**
     * Altera o telefone do contato.
     * @param {string} telefone - O novo telefone do contato.
     */
    setTelefone(telefone) {
        this.telefone = telefone;
    }

    /**
     * Retorna o e-mail do contato.
     * @return {string} O e-mail do contato.
     */
    getEmail() {
        return this.email;
    }

    /**
     * Altera o e-mail do contato.
     * @param {string} email - O novo e-mail do contato.
     */
    setEmail(email) {
        this.email = email;
    }
}

module.exports = Contato;
