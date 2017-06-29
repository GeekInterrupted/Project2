"use strict";

module.exports = function(sequelize, DataTypes) {
    var AnnualAQITX = sequelize.define("AnnualAQITX", {
        county: DataTypes.STRING,
        dayswithAQI: DataTypes.INTEGER,
        goodDays: DataTypes.INTEGER,
        moderateDays: DataTypes.INTEGER,
        unhealthySensitive: DataTypes.INTEGER,
        unhealthyDays: DataTypes.INTEGER,
        veryUnhealthy: DataTypes.INTEGER,
        hazardous: DataTypes.INTEGER,
        maxAQI: DataTypes.INTEGER,
        percentileAQI: DataTypes.INTEGER,
        medianAQI: DataTypes.INTEGER,
        daysCO: DataTypes.INTEGER,
        daysNO2: DataTypes.INTEGER,
        daysO3: DataTypes.INTEGER,
        daysSO2: DataTypes.INTEGER,
        daysPM25: DataTypes.INTEGER,
        daysPM10: DataTypes.INTEGER,
    }, {
        timestamps: false
    })
    return AnnualAQITX;
};