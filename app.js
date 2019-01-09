const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");
const cors = require("cors");

const routes = require("./routes");

const PORT = process.env.PORT || 8080;

// database connection
var mongoose = require("mongoose");
const collections = ["users"];
const option = { auth: { user: "ziveso", password: "password" } };

// fix this locally, setup env.
mongoose.connect(
  "mongodb://tesatopgun.thitgorn.com/TGR_2019",
  option
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we're connected to mongodb");
});

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log("server is started on port " + PORT);
});
