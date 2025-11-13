class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch (err) {
            //Erro
        }
    }

    async pegaPorId(req, res) {
        const { id } = req.params;
        try {
            const umRegistro = await this.entidadeService.pegaRegistroPorId(Number(id));
            return res.status(200).json(umRegistro);
        } catch (err) {
            //Erro
        }
    }

    async criaNovo(req, res) {
        const dadosPraCriacao = req.body;
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosPraCriacao);
            return res.status(201).json(novoRegistroCriado);
        } catch (err) {
            //Err
        }
    }

    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
            if (!foiAtualizado) {
                return res.status(400).json({message: 'registro não atualizado'});
            }
            return res.status(200).json({message: 'registro atulaizado'});
        } catch (err) {
            //erro
        }
    }

    async exclui(req, res) {
        const { id } = req.params;
        try {
            await this.entidadeService.excluiRegistro(Number(id));
            res.status(200).json({message: `id ${id} deletado.`});
        } catch (err) {
            //erro
        }
    }

}

module.exports = Controller;