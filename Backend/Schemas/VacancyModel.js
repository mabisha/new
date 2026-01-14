module.exports = (sequelize, Sequelize) => {
  const Vacancy = sequelize.define("tblvacancy", {
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
    fromdate: {
      type: Sequelize.STRING
    },
    todate: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.SMALLINT
    },


  });
  return Vacancy;
};