var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Username is a String
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // the salted+hashed password, also a String
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    }
  });

  User.associate = function(models) {
    // A user can have multiple Plans
    // If a user is deleted, delete all Plans that belong to them as well
    // TODO: if a plan is deleted, delete the Google calendar
    User.hasMany(models.Plan, {
      onDelete: "cascade"
    });
  };

  User.beforeSave(function(user) {
    if (!user.changed("password")) {
      return;
    }
    var salt = bcrypt.genSaltSync(12);
    var hash = bcrypt.hashSync(user.dataValues.password, salt);
    user.dataValues.password = hash;
  });

  User.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // function(dbUser) {
  //   dbUser.checkPassword(enteredPassword);
  // }

  return User;
};
