const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const commentRoute = require("./routes/comment");
const movieRoute = require("./routes/movies");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/comment", commentRoute);
app.use("/movies", movieRoute);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(400).json({
    message: "An Error Occured",
    error: error.message,
  });
});

const port = process.env.PORT || 5000;

//server code
const server = app.listen(port, async () => {
  console.log(`running → PORT ${server.address().port}`);
});

module.exports = server;
