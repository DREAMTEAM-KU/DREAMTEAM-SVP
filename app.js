const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");
const cors = require("cors");

const routes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

// database connection
var mongoose = require("mongoose");

// const collections = ["users"];
if (!process.env.DATABASE_USERNAME) {
  mongoose.connect(
    process.env.DATABASE_URL,
    {
      auth: {
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
      }
    }
  );
} else {
  mongoose.connect("mongodb://localhost/hwData");
}

// mongoose.connect(
//   "mongodb://localhost/hwData"
//   // option
// );

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
