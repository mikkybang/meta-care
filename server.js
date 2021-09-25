const express = require("express");
const cors = require("cors");

const app = express();

const commentRoute = require("./routes/comment");

app.use(cors());

app.use("/comment", commentRoute);

app.use((error, req, res, next) => {
  res.status(400).json({
    message: "An Error Occured",
    error,
  });
});

//server code
const server = app.listen(5000, async () => {
  console.log(`running → PORT ${server.address().port}`);
});

module.exports = server;