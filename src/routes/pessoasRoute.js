const { Router } = require('express');
const PessoaControler = require('../controllers/PessoaController.js');

const pessoaControler = new PessoaControler();

const router = Router();

router.get('/pessoas', (req, res) => pessoaControler.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaControler.pegaPorId(req, res));
router.post('/pessoas', (req, res) => pessoaControler.criaNovo(req, res));

router.delete('/pessoas/:id', (req, res) => pessoaControler.exclui(req, res));

module.exports = router;