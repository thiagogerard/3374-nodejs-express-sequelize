const { Router } = require('express');
const PessoaControler = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaControler.pegaTodas);

module.exports = router;