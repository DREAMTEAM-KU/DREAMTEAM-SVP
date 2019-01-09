const Temp = require("../models/temperature");

async function list() {
  try {
    const datas = await Temp.find({})
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
    const temperature = new Temp(timeData);
    const result = await temperature.save();
    return result;
  } catch (e) {
    throw e;
  }
}

async function update(teamID, editData) {
  try {
    const timeData = {
      ...editData,
      updatedDate: new Date()
    };
    const result = await Temp.updateMany({ teamID }, timeData)
      .lean()
      .exec();
    return result;
  } catch (e) {
    throw e;
  }
}

async function removeID(teamID) {
  try {
    const result = await Temp.deleteMany({ teamID })
      .remove()
      .exec();
    return result;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  list,
  insert,
  update,
  removeID
};
