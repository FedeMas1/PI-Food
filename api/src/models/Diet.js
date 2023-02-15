const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  let alias = "Diet";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allownull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  };

  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false
  }
  const Diet = sequelize.define(alias, cols, config);

  Diet.associate = function (models) {
    Diet.belongsToMany(models.Recipe, {
      as: "recipies",
    })
  }
  return Diet
};


