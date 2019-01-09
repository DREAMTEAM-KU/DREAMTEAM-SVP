const { list, insert, update } = require("../db/function/temperature");

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

function deleteData() {
  return {};
}

module.exports = {
  receiveData,
  showData,
  addData,
  editData,
  deleteData
};
