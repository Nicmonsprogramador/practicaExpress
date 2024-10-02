// models/Libro.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Autor = require('./Autor');
const Biblioteca = require('./Biblioteca');

const Libro = sequelize.define('Libro', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  añoPublicacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  disponible: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  autorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Autor,
      key: 'id'
    }
  },
  bibliotecaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Biblioteca,
      key: 'id'
    }
  }
});

Libro.belongsTo(Autor, { foreignKey: 'autorId' });
Libro.belongsTo(Biblioteca, { foreignKey: 'bibliotecaId' });

module.exports = Libro;