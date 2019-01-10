const { main } = require("../logic/migrate/ml");

const express = require("express");

const router = express.Router();

router.get("/migrate", async (req, res) => {
  await main();
  res.send();
});

module.exports = router;
