var db = require("../models");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/all-recipes", function(req, res) {
    db.Recipes.findAll({
      include: [db.Allergens],
      include: [db.Ingredients]
    }).then(function(dbAll) {
      res.json(dbAll);
    });
  });

  // Get recipes by chef name
  app.get("/api/all-recipes/chef/:chef", function(req, res) {
    db.Recipes.findAll({
      where: {
        chef_name: req.params.chef
      }
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Get recipes by restaurant name
  app.get("/api/all-recipes/restaurant/:restaurant", function(req, res) {
    db.Recipes.findAll({
      where: {
        restaurant_name: req.params.restaurant
      }
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Get recipes by cuisine type
  app.get("/api/all-recipes/cuisine/:cuisine", function(req, res) {
    db.Recipes.findAll({
      where: {
        cuisine_type: req.params.cuisine
      }
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Get recipes by course type
  app.get("/api/all-recipes/course/:course", function(req, res) {
    db.Recipes.findAll({
      where: {
        course_type: req.params.course
      }
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Get info by recipe id
  app.get("/api/all-recipes/:recipe-id", function(req, res) {
    db.Recipes.findAll({
      where: {
        recipe_id: req.params.recipe-id
      },
      include: [db.Ingredients],
      include: [db.Allergens]
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Create a new recipe
  app.post("/api/add-recipe", function(req, res) {
    db.Recipes.create({
      recipe_name: req.body.name,
      chef_name: req.body.chefName,
      cuisine_type: req.body.cuisine,
      course_type: req.body.course,
      cooking_instructions: req.body.cookingInstructions,
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
    db.Ingredients.create({
      recipes_id: 0,
      ingredient_name: req.body.name,
      ingredient_quantity: req.body.quantity,
      ingredient_measure: req.body.measure,
    }).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
    db.Allergens.create({
      gluten: req.body.gluten,
      shellfish: req.body.shellfish,
      peanuts: req.body.peanuts,
      nuts_other: req.body.nutsOther,
      dairy: req.body.dairy,
      eggs: req.body.eggs
    }).then(function(dbAllergens) {
      res.json(dbAllergens);
    });
  });

  // Delete a recipe by id
  app.delete("/api/delete-recipe/:id", function(req, res) {
    db.Recipes.destroy({ 
      where: { 
        recipe_id: req.params.id 
      },
      include: [db.Ingredients],
      include: [db.Allergens]
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Update a recipe by id
  app.put("/api/update-recipe/:id", function(req, res) {
    db.Recipes.update(req.body, {
      where: {
        recipe_id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
    db.Ingredients.update(req.body, {
      where: {
        recipe_id: req.body.id
      }
    }).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
    db.Allergens.update(req.body, {
      where: {
        recipe_id: req.body.id
      }
    }).then(function(dbAllergens) {
      res.json(dbAllergens);
    });
  });
};