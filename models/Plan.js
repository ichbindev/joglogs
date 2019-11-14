/**
 * a running plan for the user. We are storing the relevant items so
 * we can recreate or recalibrate on the fly. All items other than ID, UserId
 * and runsPerWeek are initially strings for flexibility as we develop.
 * TODO: revisit data types as we figure out how we store data, especially
 * if we're going to want to grab data ordered from the DB
 */
module.exports = function(sequelize, DataTypes) {
  let Plan = sequelize.define("Plan", {
    startDistance: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    // date the user starts the plan
    startDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // how far the user would like to run on raceDate, in miles
    raceDistance: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    // the date of the run the user is training for
    raceDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // the user-entered name for the race
    raceName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // which day of the week the user wants to do their longest run
    longRunDay: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // which days of the week does the user want to run
    runDays: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // a reference to the calendar created for this user with planned runs
    calendarRef: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    // a reference to the calendar created for this user with planned runs
    credentialRef: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
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

    // A plan has multiple events
    // If a plan is deleted, delete all events that belong to that plan
    Plan.hasMany(models.Event, {
      onDelete: "cascade"
    });
  };

  return Plan;
};
