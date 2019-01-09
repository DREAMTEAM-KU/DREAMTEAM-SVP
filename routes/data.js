const express = require("express");

const {
  receiveData,
  showData,
  addData,
  editData,
  deleteData
} = require("../logic/data");

const router = express.Router();

router.post("/receiveData", async (req, res) => {
  const payloadHex = req.body.DevEUI_uplink.payload_hex;
  const data = await receiveData(payloadHex);
  res.send(data);
});

router.get("/showData", async (req, res) => {
  const data = await showData();
  res.send(data);
});

router.post("/addData", async (req, res) => {
  const inputData = {
    teamID: req.body.teamID,
    temp: req.body.temp
  };
  const data = await addData(inputData);
  res.send(data);
});

router.put("/editData/:teamID", async (req, res) => {
  const teamID = req.params.teamID;
  const inputData = req.body;
  const data = await editData(teamID, inputData);
  res.send(data);
});

router.delete("/deleteData/:teamID", (req, res) => {
  const teamID = req.params.teamID;
  const data = deleteData(teamID);
  res.send(data);
});

module.exports = router;
