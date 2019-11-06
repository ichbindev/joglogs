/**
 * a running plan for the user. We are storing the relevant items so
 * we can recreate or recalibrate on the fly. All items other than ID, UserId
 * and runsPerWeek are initially strings for flexibility as we develop.
 * TODO: revisit data types as we figure out how we store data, especially
 * if we're going to want to grab data ordered from the DB
 */
module.exports = function(sequelize, DataTypes) {
  let Plan = sequelize.define("Plan", {
    // a reference to the calendar created for this user with planned runs
    calendarRef: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "BROKE",
      len: [1]
    },
    // a reference to which google account created the calendar
    credentialRef: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1]
    }
  });

  Plan.associate = function(models) {
    // A User can have multiple Plans, so Plan belongs to User
    // Plan cannot be created without a User due to the foreign key constraint
    Plan.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Plan;
};
