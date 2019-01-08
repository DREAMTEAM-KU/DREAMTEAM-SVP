const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log("server is started on port " + PORT);
});
