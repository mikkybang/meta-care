const Sequelize = require("sequelize");

let sequelize;

sequelize = new Sequelize({ dialect: "sqlite", storage: "../database.sqlite" });

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

module.exports = {
  Comment,
};
