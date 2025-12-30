const { Transaction } = require('sequelize');
const dataSource = require('../database/models');

class Sevices {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros(where = {}) {
        return dataSource[this.model].findAll({ where: { ...where } });
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

    async pegaEContaRegistros(options) {
        return dataSource[this.model].findAndCountAll({ ...options });
    }

    async criaRegistro(dados) {
        return dataSource[this.model].create(dados);
    }

    async atualizaRegistro(dadosAtualizados, where, transacao = {}) {
        const listaDeRegistrosAtualizados = await dataSource[this.model]
            .update(dadosAtualizados, {
                where: { ...where },
                transaction: transacao
            });
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false;
        }
        return true;
    }

    async excluiRegistro(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Sevices;