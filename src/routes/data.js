const express = require("express");

const {
  receiveData,
  showData,
  addData,
  editData,
  deleteData,
  getLastFiveHourPin
} = require("../logic/data");

const router = express.Router();

router.post("/receiveData", async (req, res) => {
  if (req.body.DevEUI_uplink) {
    const payloadHex = req.body.DevEUI_uplink.payload_hex;
    const data = await receiveData(payloadHex);
    res.send(data);
  } else {
    res.end();
  }
});

router.get("/showData", async (req, res) => {
  const data = await showData();
  res.send(data);
});

router.post("/addData", async (req, res) => {
  const inputData = {
    temperature: req.body.temperature,
    humidity: req.body.humidity,
    pin: req.body.pin,
    pout: req.body.pout
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

router.delete("/deleteData/:teamID", async (req, res) => {
  const teamID = req.params.teamID;
  const data = await deleteData(teamID);
  res.send(data);
});

router.get("/fivepin", async (req, res) => {
  const data = await getLastFiveHourPin();
  res.send(data);
});

module.exports = router;
