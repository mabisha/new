module.exports = (sequelize, Sequelize) => {
  const Calender = sequelize.define("calenderevent", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    enddate: {
      type: Sequelize.STRING
    }, approved: {
      type: Sequelize.SMALLINT
    },

    start: {
      type: Sequelize.STRING
    },
    event: {
      type: Sequelize.SMALLINT
    },
    type: {
      type: Sequelize.SMALLINT
    },

  });
  return Calender;
};

