// models/Biblioteca.js
const {DataTypes} = ("sequelize");
const sequelize = require("../config/database");
const Biblioteca = sequelize.define('Biblioteca', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  module.exports =Biblioteca;
  