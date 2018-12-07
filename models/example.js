module.exports = function(sequelize, DataTypes) {
  var recipes = sequelize.define("recipes", {
    id: DataTypes.INT,
    recipe_name: DataTypes.TEXT,
    description: DataTypes.TEXT
  });
  return recipes;
};
