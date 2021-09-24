const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());






//server code
const server = app.listen(5000, async () => {
  // mailer.sendGrid({ data: {}, templateId: "msdovm", to: "mlsdmv" });
  console.log(`running → PORT ${server.address().port}`);
});

module.exports = server;
