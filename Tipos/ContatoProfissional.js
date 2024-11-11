const Contato = require('./Contato');

class ContatoProfissional extends Contato {
    constructor(nome, telefone, email, empresa, cargo) {
        super(nome, telefone, email);
        this.empresa = empresa;
        this.cargo = cargo;
    }

    getEmpresa() {
        return this.empresa;
    }

    setEmpresa(empresa) {
        this.empresa = empresa;
    }

    getCargo() {
        return this.cargo;
    }

    setCargo(cargo) {
        this.cargo = cargo;
    }
}

module.exports = ContatoProfissional;
