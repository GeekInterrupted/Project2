//call for sequelize
var Sequelize = require("sequelize");

//create mySQL connection using Sequelize
var sequelize = new Sequelize("toxic_db", "mnasom2e22hqm0mf", "rj9g495x8qx6payn", {
    host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});



//exporting connection to be available for other files
module.exports = sequelize;