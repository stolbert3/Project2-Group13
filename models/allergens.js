module.exports = function(sequelize, DataTypes) {
  var Allergens = sequelize.define("allergens", {
    recipe_id: DataTypes.INTEGER,
    gluten: DataTypes.BOOLEAN,
    shellfish: DataTypes.BOOLEAN,
    peanuts: DataTypes.BOOLEAN,
    nuts_other: DataTypes.BOOLEAN,
    dairy: DataTypes.BOOLEAN,
    eggs: DataTypes.BOOLEAN
  });

  Allergens.associate = function(models) {
    Allergens.belongsTo(models.Recipes, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Allergens;
};