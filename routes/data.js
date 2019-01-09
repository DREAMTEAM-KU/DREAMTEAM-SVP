const express = require("express");

const {
  receiveData,
  showData,
  addData,
  editData,
  deleteData
} = require("../logic/data");

const router = express.Router();

router.post("/receiveData", (req, res) => {
  const data = receiveData(req.body);
  res.send(data);
});

router.get("/showData", (req, res) => {
  const data = receiveData();
  res.send(data);
});

router.post("/addData", (req, res) => {
  const inputData = {
    teamID: req.body.teamID,
    temp: req.body.temp
  };
  const data = addData(inputData);
  res.send(data);
});

router.put("/editData/:teamID", (req, res) => {
  const data = editData();
  res.send(data);
});

router.delete("/deleteData/:teamID", (req, res) => {
  const data = deleteData();
  res.send(data);
});

module.exports = router;
