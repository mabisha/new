module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("tblfacility", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    imagelink: {
      type: Sequelize.STRING
    }, approved: {
      type: Sequelize.SMALLINT
    },
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
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