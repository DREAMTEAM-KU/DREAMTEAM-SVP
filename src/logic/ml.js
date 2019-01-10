const { insert } = require("../db/function/Ml");

async function migrate(data) {
  // get key
  const key = Object.keys(data)[0];

  const value = data[key];

  const ymd = key.split("-");

  const results = [];
  for (var i = 0; i < value.length; i++) {
    const date = new Date(ymd[0], ymd[1], ymd[2], i, 0, 0);
    const modified = {
      time: date,
      value: value[i]
    };
    const inserted = await insert(modified);
    results.push(inserted);
  }

  return results;
}

module.exports = {
  migrate
};
