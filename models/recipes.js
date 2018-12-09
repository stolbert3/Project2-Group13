module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("recipes", {
    id: DataTypes.INTEGER,
    recipe_name: DataTypes.STRING,
    chef_name: DataTypes.STRING,
    restaurant_name: DataTypes.STRING,
    cuisine_type: DataTypes.STRING,
    course_type: DataTypes.STRING,
    cooking_instructions: DataTypes.STRING,
    privacy: DataTypes.BOOLEAN
  });


  Recipes.associate = function(models) {
    Recipes.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Recipes;
};