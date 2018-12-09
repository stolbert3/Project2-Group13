module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define("ingredient_list", {
    recipes_id: DataTypes.INTEGER,
    ingredient_name: DataTypes.STRING,
    ingredient_quantity: DataTypes.STRING,
    ingredient_measure: DataTypes.STRING
  });

  Ingredients.associate = function(models) {
    Ingredients.belongsTo(models.Recipes, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Ingredients;
};