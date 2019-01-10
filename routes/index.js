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


const { clearDB } = require('../db/function/Beacon')
router.get("/clearBeacon", async (req, res) => {
  const result = await clearDB()
  res.send(result)
})

module.exports = router;
