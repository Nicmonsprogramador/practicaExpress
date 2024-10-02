const Autor = require('../models/Autor');

exports.getAutores = async (req, res) => {
  const autores = await Autor.findAll();
  res.json(autores);
};

exports.createAutor = async (req, res) => {
  const { nombre, nacionalidad } = req.body;
  const autor = await Autor.create({ nombre, nacionalidad });
  res.json(autor);
};
