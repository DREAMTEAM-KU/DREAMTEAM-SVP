const SensorData = require("../models/SensorData");

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

module.exports = {
  list,
  insert,
  update,
  removeID,
  getLatestData,
  getLastFiveHourPin
};
