"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.INTEGER,
        location: DataTypes.INTEGER,
        donation: DataTypes.INTEGER,
        cumDonation: DataTypes.INTEGER
    })
    return User;
};