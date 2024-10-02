const express = require('express');
const bodyParser = require('body-parser');
const bibliotecaRoutes = require('../gestion-biblioteca-api/Routes/Biblioteca');
const autorRoutes = require('../gestion-biblioteca-api/Routes/Autor');
const libroRoutes = require('../gestion-biblioteca-api/Routes/Libro');
const sequelize = require('./config/database');
const app = express();

app.use(bodyParser.json());

app.use('/bibliotecas', bibliotecaRoutes);
app.use('/autores', autorRoutes);
app.use('/libros', libroRoutes);

sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
