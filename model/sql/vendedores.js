const { sequelize } = require("../../db/sql");
const { DataTypes } = require("sequelize");

// codigo, cedula, descripcion, id_ruta, id_clase, id_supervisor, clase_desc_vend

const Vendedores = sequelize.define(
  "VENDEDORES",
  {
    codigo: {
      type: DataTypes.STRING,
      primaryKey: true,
      // allowNull: false,
    },
    cedula: {
      type: DataTypes.NUMBER,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    id_ruta: {
      type: DataTypes.STRING,
    },
    id_clase: {
      type: DataTypes.STRING,
    },
    id_supervisor: {
      type: DataTypes.STRING,
    },
    clase_desc_vend: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Vendedores;
