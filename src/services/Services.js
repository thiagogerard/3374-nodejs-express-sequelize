const dataSource = require('../database/models');

class Sevices {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async pegaRegistrosPorEscopo(escopo) {
        return dataSource[this.model].scope(escopo).findAll();
    }

    async pegaRegistroPorId(id) {
        return dataSource[this.model].findByPk(id);
    }

    async pegaRegistro(where) {
        return dataSource[this.model].findOne({ where: { ...where } });
    }


    async criaRegistro(dados) {
        return dataSource[this.model].create(dados);
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
            where: { id: id }
        });
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false;
        }
        return true;
    }

    async excluiRegistro(id) {
        return dataSource[this.model].destroy({where: { id: id }});
    }
}

module.exports = Sevices;