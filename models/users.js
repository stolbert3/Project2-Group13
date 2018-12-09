module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("recipes", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    restaurant: DataTypes.STRING
  });
  return Users;
};