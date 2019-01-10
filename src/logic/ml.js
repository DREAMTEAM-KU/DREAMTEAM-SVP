const { list } = require("../db/function/Ml");
const { migration } = require("../db/function/Ml");
const moment = require("moment");

async function getSanam(hours = 0) {
  const now = new Date();

  const xDate = moment().subtract(hours, "hour");

  let data = await list();

  data = data.filter(d => {
    return moment(d.time).isAfter(moment(xDate), "hours");
  });

  return data;
}

async function migrate(data) {
  // get key
  const key = Object.keys(data)[0];

  const value = data[key];

  const ymd = key.split("-");

  const results = [];
  for (var i = 0; i < value.length; i++) {
    const date = new Date(ymd[0], ymd[1] - 1, ymd[2], i, 0, 0, 0);
    const modified = {
      time: date,
      value: value[i]
    };
    const migrationed = await migration(modified);
    results.push(migrationed);
  }

  return results;
}

module.exports = {
  getSanam,
  migrate
};
