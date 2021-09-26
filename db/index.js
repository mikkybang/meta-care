const Sequelize = require("sequelize");

let sequelize;

sequelize = new Sequelize({ dialect: "sqlite", storage: "../database.sqlite" });

// sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);

// mysql://b79aa396e5fb85:16f3b5bf@us-cdbr-east-04.cleardb.com/heroku_b871a5b68c78528?reconnect=true


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
