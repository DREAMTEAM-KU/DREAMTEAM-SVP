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
  const data = await getSanam(parseInt(hours, 10));
  const output = data.map(d => d.value);
  const result = {
    number_of_tourist: output
  };
  res.send(result);
});

router.get("/predict", async (req, res) => {
  res.send("/predict");
});

module.exports = router;
