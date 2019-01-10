const { migrate } = require("../ml");
var csv = require("fast-csv");

let data = [];
let date = [];

function readCSV(file_name) {
  return new Promise(function(resolve, reject) {
    csv
      .fromPath(file_name)
      .on("data", function(str) {
        let splitString = str[0].split(";");
        if (splitString[0] != "day" && splitString[0] != "values") {
          date.push(splitString[0]);
          data.push(splitString.slice(1, splitString.length));
        }
        // console.log(data)
        // console.log(data)
        // xs.push(str[0])
        // ys.push(str[1])
      })
      .on("end", function() {
        // console.log(csv);
        // console.log(data.length);
        resolve(data);
      });
  });
}

async function main() {
  await readCSV(__dirname + "/sanam.csv");
  // console.log(data)
  // console.log(date);

  for (let index = 0; index < date.length; index++) {
    let time = date[index];
    const jsonDB = {
      [time]: data[index]
    };
    console.log(jsonDB);
    await migrate(jsonDB);
  }
}

module.exports = {
  main
};
