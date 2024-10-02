const express = require('express');
const { getAutores, createAutor } = require('../controllers/autorController');
const router = express.Router();

router.get('/', getAutores);
router.post('/', createAutor);

module.exports = router;
