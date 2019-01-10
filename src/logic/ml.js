const { insert } = require("../db/function/Ml");

async function insertData(data) {
  const data = await insert(timeData);
  return data;
}

module.exports = {
  insertData
};
