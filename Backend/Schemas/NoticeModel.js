module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("noticetable", {
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
    imagelink: {
      type: Sequelize.STRING
    },
    approved: {
      type: Sequelize.SMALLINT
    },

    public_id: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.SMALLINT
    },

  });
  return Post;
};