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
    console.log("database output", result);
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
    const result = await Temp.update({ teamID }, timeData);
    return result;
  } catch (e) {
    throw e;
  }
}

function deleteId(teamID) {}

module.exports = {
  list,
  insert,
  update,
  deleteId
};
