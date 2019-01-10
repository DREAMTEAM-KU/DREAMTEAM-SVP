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
      updatedDate: new Date()
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
      updatedDate: new Date()
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
        const result = await SensorData.find({}).sort({_id:-1}).limit(1);
        return result[0]
    } catch (e) {
        throw e;
    }
}

module.exports = {
  list,
  insert,
  update,
  removeID,
  getLatestData
};
