const SensorData = require("../models/SensorData");
const moment = require("moment");
const { findAndUpdate } = require("./Ml");

async function list() {
  try {
    const datas = await SensorData.find({})
      .lean()
      .exec();
    return datas;
  } catch (e) {
    throw e;
  }
}

async function insert(data) {
  try {
    const timeData = {
      ...data,
      timestamp: new Date()
    };
    console.log(timeData);
    await findAndUpdate(data);
    const sensorData = new SensorData(timeData);
    const result = await sensorData.save();
    return result;
  } catch (e) {
    throw e;
  }
}

async function update(_id, editData) {
  try {
    const timeData = {
      ...editData,
      timestamp: new Date()
    };
    const result = await SensorData.updateMany({ _id }, timeData)
      .lean()
      .exec();
    return result;
  } catch (e) {
    throw e;
  }
}

async function removeID(_id) {
  try {
    const result = await SensorData.deleteMany({ _id })
      .remove()
      .exec();
    return result;
  } catch (e) {
    throw e;
  }
}

async function getLatestData() {
  try {
    const result = await SensorData.find({})
      .sort({ _id: -1 })
      .limit(1);
    return result[0];
  } catch (e) {
    throw e;
  }
}

async function getLastFiveHourPin() {
  var now = new Date();

  var lastFive = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours() - 5,
    now.getMinutes(),
    now.getSeconds(),
    0
  );

  try {
    const data = await SensorData.find({});

    const timeData = data.filter(d => {
      return d.timestamp >= lastFive;
    });

    const cleanData = timeData.map(d => d.pin);
    return cleanData;
  } catch (e) {
    throw e;
  }
}

async function getLastOneHourPinPout() {
  var now = new Date();

  const lastHour = moment().subtract(2, "hour");
  try {
    const data = await SensorData.find({});

    const timeData = data.filter(d => {
      return moment(d.timestamp).isAfter(lastHour);
    });

    const cleanData = timeData.map(d => {
      return { pin: d.pin, pout: d.pout };
    });
    let pin = 0;
    let pout = 0;
    cleanData.forEach(c => {
      (pin += c.pin), (pout += c.pout);
    });

    return { pin, pout };
  } catch (e) {
    throw e;
  }
}

module.exports = {
  list,
  insert,
  update,
  removeID,
  getLatestData,
  getLastFiveHourPin,
  getLastOneHourPinPout
};
