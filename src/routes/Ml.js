const moment = require("moment");
const axios = require("axios");
const { main } = require("../logic/migrate/ml");
const { list, indexing } = require("../db/function/Ml");
const { getSanam } = require("../logic/ml");

const express = require("express");

const router = express.Router();

router.get("/getSanam", async (req, res) => {
  const { hours } = req.query;
  const lists = await list();
  if (lists.length >= hours) {
    const data = await getSanam(parseInt(hours, 10));
    const output = data.map(d => d.value);
    const result = {
      number_of_tourist: output
    };
    res.send(result);
  } else {
    res.send("Error");
  }
});

router.get("/predict", async (req, res) => {
  await axios
    .get("http://localhost:4000/predict")
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send("error");
    });
});

router.post("/migrate", async (req, res) => {
  await main();
  res.send();
});

router.post("/indexDB", async (req, res) => {
  await indexing();
  res.send("done");
});

module.exports = router;
