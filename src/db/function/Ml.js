const Ml = require("../models/Ml");

async function migration(data) {
  // check duplicate time
  const time = new Date(data.time);

  const modifiedTime = new Date(
    time.getFullYear(),
    time.getMonth(),
    time.getDate(),
    time.getHours(),
    0,
    0
  );

  const _ml = new Ml({
    time: modifiedTime,
    value: data.value,
    timestamp: new Date()
  });
  const result = await _ml.save();
  return result;
}

module.exports = {
  migration
};
