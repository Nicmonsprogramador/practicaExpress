const express = require('express');
const { getLibros, createLibro } = require('../Controllers/LibroController');
const router = express.Router();

router.get('/', getLibros);
router.post('/', createLibro);

module.exports = router;
