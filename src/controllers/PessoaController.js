const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaControler extends Controller{
    constructor() {
        super(pessoaServices);
    }

    async pegaMatriculasAtivas(req, res) {
        const { estudanteId } = req.params;
        try {
            const listaMatriculas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        }catch (err) {
            return res.status(500).json({ erro: err.message });
        }
    }

    async pegaTodasAsMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const listaMatriculas = await pessoaServices.pegaTodasAsMatriculasPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        }catch (err) {
            return res.status(500).json({ erro: err.message });
        }
    }

    async pegaTodasAsPessoas(req, res) {
        try {
            const listaTodasPessoas = await pessoaServices.pegaPessoasEscopoTodos();
            return res.status(200).json(listaTodasPessoas);
        } catch(err) {
            return res.status(500).json({ erro: err.message });
        }
    }
}

module.exports = PessoaControler;