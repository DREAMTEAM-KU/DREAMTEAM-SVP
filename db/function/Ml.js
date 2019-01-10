const Ml = require("../models/Ml");

function insert(data) {
  // const timeData = {
  //     ...data,
  //     timestamp: new Date()
  // }

  // [ "date", 1,2,3,4,5,6,8,9,10]
  var date = new Date(data[0]);

  data.splice(0, 1);
  data.forEach((d, index) => {
    add({
      time: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        index,
        0,
        0
      ),
      value: d
    });
  });

  //
  return ml;
}

function add(data) {
  const ml = new Ml({
    ...data,
    timestamp: new Date()
  });
  return ml;
}

module.exports = {
  insert,
  add
};
