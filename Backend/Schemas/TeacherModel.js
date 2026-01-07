 
 module.exports = (sequelize, Sequelize) => {
    const Teachers = sequelize.define("tblteacher", {
      id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true},
      name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      },
      imagelink: {
        type: Sequelize.STRING
      },

      public_id: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.TINYINT
      },
      approved: {
        type: Sequelize.TINYINT
      },
      
    });
    return Teachers;
  };