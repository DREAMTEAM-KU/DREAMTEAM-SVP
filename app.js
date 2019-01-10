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
if (process.env.NODE_ENV === "production") {
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

if (process.env.NODE_ENV === "production") {
  // # certificate part HTTPS
  // Certificate
  const privateKey = fs.readFileSync(
    "/etc/letsencrypt/live/tesatopgun.thitgorn.com/privkey.pem",
    "utf8"
  );
  const certificate = fs.readFileSync(
    "/etc/letsencrypt/live/tesatopgun.thitgorn.com/cert.pem",
    "utf8"
  );
  const ca = fs.readFileSync(
    "/etc/letsencrypt/live/tesatopgun.thitgorn.com/chain.pem",
    "utf8"
  );

  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };

  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(process.env.HTTPS_PORT, () => {
    console.log("HTTPS Server running on port " + process.env.HTTPS_PORT);
  });
}
