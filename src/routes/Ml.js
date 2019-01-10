const moment = require("moment");
const { main } = require("../logic/migrate/ml");
const { list } = require("../db/function/Ml");
const { getSanam } = require("../logic/ml");

const express = require("express");

const router = express.Router();

router.get("/migrate", async (req, res) => {
  await main();
  res.send();
});

router.get("/getSanam", async (req, res) => {
  const { hours } = req.query;
  const lists = await list();
  if (lists.length >= hours) {
    const data = await getSanam(parseInt(hours, 10));
    console.log(data);
    const output = [];
    let out;
    for (var i = 0; i < hours; i++) {
      const xDate = moment().subtract(i, "hour");

      const xDate2 = moment().subtract(i + 1, "hour");

      out = data.filter(
        d => moment(d.time).isBefore(xDate) && moment(d.time).isAfter(xDate2)
      );

      const outp = out[0] ? out[0].value : 0;
      output.push(outp);
    }
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

module.exports = router;
