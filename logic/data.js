const { list, insert, update, removeID } = require("../db/function/temperature");

async function receiveData(data) {
  return data;
}

async function showData() {
  try {
    const data = await list();
    console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
}

async function addData(input) {
  try {
    const data = await insert(input);
    return data;
  } catch (e) {
    throw e;
  }
}

async function editData(teamID, inputData) {
  try {
    const data = await update(teamID, inputData);
    return data;
  } catch (e) {
    throw e;
  }
}

async function deleteData(teamID) {
  try {
    const data = await removeID(teamID)
    return data
  } catch(e) {
    throw e
  }
}

module.exports = {
  receiveData,
  showData,
  addData,
  editData,
  deleteData
};
