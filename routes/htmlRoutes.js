var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/login.html"));
  });

  // Load search page
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/search.html"));
  });

  // Load submit page
  app.get("/submit", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/submit.html"));
  });

  // Load search results page
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/results.html"));
  });

  // Load recipe detail page
  app.get("/recipe", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/recipes.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
