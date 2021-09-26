const Sequelize = require("sequelize");

let sequelize;

sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);

const Comment = sequelize.define("comment", {
  comment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ip_address: {
    type: Sequelize.STRING,
  },
  episode_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Comment.sync();

module.exports = {
  Comment,
};
