const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const routes = require("./routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log("server is started on port " + PORT);
});

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
httpsServer.listen(8081, () => {
  console.log("HTTPS Server running on port 8081");
});
