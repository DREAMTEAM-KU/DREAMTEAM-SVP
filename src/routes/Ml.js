const { migrate } = require("../logic/ml");

const express = require("express");

const router = express.Router();

router.post("/migrate", async (req, res) => {
  const data = await migrate(req.body);
  res.send();
});

module.exports = router;
