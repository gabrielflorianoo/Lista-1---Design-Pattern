const Contato = require('./Contato');

class ContatoProfissional extends Contato {
    
    /**
     * Representa um contato profissional.
     * @constructor
     * @param {string} nome - O nome do contato.
     * @param {string} telefone - O telefone do contato.
     * @param {string} email - O e-mail do contato.
     * @param {string} empresa - A empresa do contato.
     * @param {string} cargo - O cargo do contato.
     */
    constructor(nome, telefone, email, empresa, cargo) {
        super(nome, telefone, email);
        this.empresa = empresa;
        this.cargo = cargo;
    }

    /**
     * Retorna a empresa do contato.
     * @return {string} - A empresa do contato.
     */
    getEmpresa() {
        return this.empresa;
    }

    /**
     * Altera a empresa do contato.
     * @param {string} empresa - A nova empresa do contato.
     */
    setEmpresa(empresa) {
        this.empresa = empresa;
    }

    /**
     * Retorna o cargo do contato.
     * @return {string} - O cargo do contato.
     */
    getCargo() {
        return this.cargo;
    }

    /**
     * Altera o cargo do contato.
     * @param {string} cargo - O novo cargo do contato.
     */
    setCargo(cargo) {
        this.cargo = cargo;
    }
}

module.exports = ContatoProfissional;
