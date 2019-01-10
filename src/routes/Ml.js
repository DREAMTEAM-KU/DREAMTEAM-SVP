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
      const now = new Date();
      const xDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours() - i,
        now.getMinutes(),
        now.getSeconds(),
        now.getMilliseconds()
      );
      const xDate2 = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours() - (i + 1),
        now.getMinutes(),
        now.getSeconds(),
        now.getMilliseconds()
      );
      out = data.filter(d => {
        return xDate >= new Date(d.time) && xDate2 <= new Date(d.time);
      });

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
