const express = require("express");

const router = express.Router();

const userRoute = require("./user");
const dataRoute = require("./data");

router.use("/", userRoute);

router.use("/", dataRoute);

router.get("/", (req, res) => {
  res.send("DreamTeam api server");
});

module.exports = router;
