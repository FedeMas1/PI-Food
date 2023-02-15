const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  let alias = "Recipe";
  let cols = {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    healthScore: {
      type: DataTypes.INTEGER
    },

    steps: {
      type: DataTypes.STRING
    },
  };
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false
  }
  const Recipe = sequelize.define(alias, cols, config);

  Recipe.associate = function(models) {
    Recipe.belongsToMany(models.Diet, {
      as: "diets",
    })
  }
  return Recipe
};
