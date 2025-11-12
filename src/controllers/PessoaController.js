const database = require('../models');

class PessoaControler {
    static async pegaTodas(req, res) {
        try {
            const listaDePessoas = await database.Pessoa.findAll();
            return res.status(200).json(listaDePessoas);
        } catch (err) {
            //ERRO
        }
    }
}

module.exports = PessoaControler;