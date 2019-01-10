const express = require("express");

const router = express.Router();

const userRoute = require("./user");
const dataRoute = require("./data");
const webhookRoute = require("./webhook")

router.use(userRoute);

router.use(dataRoute);

router.use(webhookRoute)

router.get("/", (req, res) => {
  res.send("DreamTeam api server");
});

module.exports = router;
