var db = require("../models");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/all-recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // Create a new recipe
  app.post("/api/add-recipe", function(req, res) {
    db.Recipes.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Delete a recipe by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Recipes.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });
};
