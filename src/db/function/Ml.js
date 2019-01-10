const Ml = require("../models/Ml");

async function insert(data) {
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

  const _Ml = await Ml.findOne({ time: modifiedTime })
    .lean()
    .exec();
  if (_Ml) {
    const oldValue = _Ml.value;
    const result = await Ml.updateOne(
      { _id: _Ml._id },
      { value: oldValue + data.value }
    );
    return result;
  } else {
    console.log(value);
    const _ml = new Ml({
      time: modifiedTime,
      value: data.value,
      timestamp: new Date()
    });
    const result = await _ml.save();
    return result;
  }
}

module.exports = {
  insert
};
