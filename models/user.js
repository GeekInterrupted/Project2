module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: DataTypes.STRING,
        user_password: DataTypes.STRING,
        user_email: DataTypes.STRING,
        location: {
            type: DataTypes.STRING,
            defaultValue: "ABC"
        },
        donation: {
            type: DataTypes.STRING,
            defaultValue: 0
        }
    })
    return User;
}