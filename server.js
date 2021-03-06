require("dotenv").config();
var express = require("express");
var app = express();


var db = require("./models");

var app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/views'));


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(process.env.port || 3000, function() {
    console.log(
      "==> 🌎  Listening on port 3000. Visit http://localhost:3000/ in your browser."
    );
  });
});

module.exports = app;
