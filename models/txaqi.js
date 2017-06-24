"use strict";

module.exports = function(sequelize, DataTypes) {
    var Txaqi = sequelize.define("Txaqi", {
        county: DataTypes.STRING,
        daysaqi: DataTypes.INTEGER,
        goodDays: DataTypes.INTEGER,
        moderateDays: DataTypes.INTEGER,
        unhealthySensitive: DataTypes.INTEGER,
        unhealthyDays: DataTypes.INTEGER,
        veryUnhealthy: DataTypes.INTEGER,
        hazardousDays: DataTypes.INTEGER,
        maxaqi: DataTypes.INTEGER,
        percaqi: DataTypes.INTEGER,
        medianaqi: DataTypes.INTEGER,
        daysCO: DataTypes.INTEGER,
        daysNO2: DataTypes.INTEGER,
        daysO3: DataTypes.INTEGER,
        daysSO2: DataTypes.INTEGER,
        daysPM25: DataTypes.INTEGER,
        daysPM10: DataTypes.INTEGER
    })
    return Txaqi;
};