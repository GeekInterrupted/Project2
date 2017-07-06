// =================================================================
// Dependencies
// =================================================================
var express = require("express");
var path = require("path");
var favicon = require('static-favicon');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var helpers = require('handlebars-helpers');
var Handlebars = require('handlebars');

// =================================================================
// Initialize new Express app
// =================================================================
var PORT = process.env.PORT || 3000;
var app = express();

// =================================================================
// Models for syncing
// =================================================================

var db = require("./models");

// Serve static content for the app from the public directory in the application directory

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//set handlebars
var exphbs = require("express-handlebars");





app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//import routes to give the server access to them.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);



db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("listening on port %s", PORT);
    });
});