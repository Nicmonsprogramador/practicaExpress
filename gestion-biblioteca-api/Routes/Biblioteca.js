const express = require('express');
const { getBibliotecas, createBiblioteca } = require('../Controllers/Bibliotecacontroller');
const router = express.Router();

router.get('/', getBibliotecas);
router.post('/', createBiblioteca);

module.exports = router;
