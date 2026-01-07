module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("tblgallery", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    imagelink: {
      type: Sequelize.ARRAY(Sequelize.STRING(10000)),
    },
    approved: {
      type: Sequelize.TINYINT,
    },
    public_id: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.TINYINT,
    },
  });
  return Image;
};
