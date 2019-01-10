const express = require("express");

const router = express.Router();

router.post("/putSanam", async (req, res) => {
  const data = await insertData(req.body);
  res.send();
});

module.exports = router;
