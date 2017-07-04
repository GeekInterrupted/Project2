// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/login", passport.authenticate('local'), function(req, res) {
    res.json('/');
  });
  
  app.post("/register", function(req, res) {

    db.User.create({
      email: req.body.emailOrUsername,
      password: req.body.password
    }).then((result)=> {
      res.redirect('/')
    }).catch(function(err) {
      res.json(err);
    });
  });

  app.get("/", (req,res)=>{
      console.log(req.user);
      // console.log(req.isAuthenticated());
      if(req.user){
          db.User.findOne({
            where: {
              id : req.user
            },
            raw: true
          }).then((dbUser)=>{
            res.render("index", {
              loginStatus: true,
              email: dbUser.name
            });
          })
      } else {
        res.render("index");
      }
  })

   app.get("/register", (req,res)=>{
     console.log("Hi");
      res.render("register");
  })

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });


  //Twitter login routes
  app.get('/auth/twitter',
  passport.authenticate('twitter'));

  app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/twittererror' }),
    function(req, res) {

    // Successful authentication, redirect home.
    res.redirect('/');
  });

}