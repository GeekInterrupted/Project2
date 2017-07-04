
// Dependencies
var express = require("express");
var path = require("path");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Authentication packages
var cookieParser = require('cookie-parser')
var flash = require('connect-flash-plus');
var session = require('express-session')
var passport = require('passport');

//log incoming traffic to console
var morgan = require("morgan");



var PORT = process.env.PORT || 8080;
var app = express();

var db = require("./models");

// Serve static content for the app from the public directory in the application directory
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Write cookies on header
app.use(cookieParser());

// create a session for user
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {}
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));

// Add login app 
require("./routes/login-routes.js") (app);

db.sequelize.sync({force:true}).then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});