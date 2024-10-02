// models/Autor.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Autor = sequelize.define('Autor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nacionalidad: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Autor;