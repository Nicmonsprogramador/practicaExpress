const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'  // Ubicación de la base de datos SQLite
});

module.exports = sequelize;
