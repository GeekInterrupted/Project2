// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Rank.findAll({
            raw: true
        }).then(function(dbRank) {
            var hbsObject = {
                ranks: dbRank
            }
            console.log(hbsObject);
            res.render('index', hbsObject)
        });
    });
};