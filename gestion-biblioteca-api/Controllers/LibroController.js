const Libro = require('../models/Libro');

exports.getLibros = async (req, res) => {
  const libros = await Libro.findAll();
  res.json(libros);
};

exports.createLibro = async (req, res) => {
  const { titulo, añoPublicacion, disponible, autorId, bibliotecaId } = req.body;
  const libro = await Libro.create({ titulo, añoPublicacion, disponible, autorId, bibliotecaId });
  res.json(libro);
};
