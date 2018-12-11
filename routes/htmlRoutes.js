var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../layouts/login.html"));
  });

  // Load search page
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../layouts/search.html"));
  });

  // Load submit page
  app.get("/submit", function(req, res) {
    res.sendFile(path.join(__dirname, "../layouts/submit.html"));
  });

  // Load results page
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../layouts/results.html"));
  });

  // Load results page
  app.get("/recipes", function(req, res) {
    res.sendFile(path.join(__dirname, "../layouts/recipes.html"));
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
