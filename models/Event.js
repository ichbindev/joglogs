/**
 * A specific event to be displayed on our calendar
 * It contains the data about a specific run on a specific day
 * Has a foreign key to Plan, one Plan has many events
 */
module.exports = function(sequelize, DataTypes) {
  let Event = sequelize.define("Event", {
    // how far the user will run on this day
    runDistance: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    // date/time of the run event
    dateTime: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // description of the event, contains run type
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // allow the user to save comments about their run
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  Event.associate = function(models) {
    // A Plan has many events, so Event belongs to Plan
    // Event must have a foreign key to Plan
    Event.belongsTo(models.Plan, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Event;
};
