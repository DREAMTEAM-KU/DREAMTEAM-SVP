const { list } = require("../db/function/temperature");

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

function addData() {
  return {};
}

function editData() {
  return {};
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
