const express = require("express");

const router = express.Router();

router.get("/webhook", (req, res) => {
  res.send("/webhook line api");
});

router.post("/webhook", (req, res) => {
  // do some thing
  res.send();
});

module.exports = router;
