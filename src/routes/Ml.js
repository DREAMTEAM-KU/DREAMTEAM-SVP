const { main } = require("../logic/migrate/ml");
const { getSanam } = require("../logic/ml");

const express = require("express");

const router = express.Router();

router.get("/migrate", async (req, res) => {
  await main();
  res.send();
});

router.get("/getSanam", async (req, res) => {
  const { hours } = req.query;
  const result = await getSanam(parseInt(hours, 10));
  res.send(result);
});

module.exports = router;
