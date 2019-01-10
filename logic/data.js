const { list, insert, update, removeID, getLatestData } = require("../db/function/SensorData");
const { typetable } = require("./enum");

async function receiveData(payload) {
  const data = await payloadDivider(payload);
  jData = {
    temp: binarySignConverter(hex2decimal(data["00"].data).toString(2)) / 10
  };
  const result = await addData(jData);
  return result;
}

async function showData() {
  try {
    const data = await list();
    return data;
  } catch (e) {
    throw e;
  }
}

async function showLatestData() {
  try {
    const data = await getLatestData();
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
    const data = await removeID(teamID);
    return data;
  } catch (e) {
    throw e;
  }
}

function binarySignConverter(binary) {
  // add 0 to 16 bit
  if (binary.length !== 16) {
    const grap = 16 - binary.length;
    let x = "";
    for (var i = 0; i < grap; i++) {
      x += "0";
    }
    binary = `${x}${binary}`;
  }

  // to array
  const binaryArray = binary.split("");

  // check +-
  if (binaryArray[0] === "1") {
    // -
    const realnumber = binary.substring(1, binary.length).split("");
    let ss = "";
    realnumber.forEach(number => {
      if (number === "1") {
        ss += "0";
      } else {
        ss += "1";
      }
    });
    const result = (parseInt(ss, 2) + 1) * -1;
    return result;
  } else {
    // +
    const realnumber = binary.substring(1, binary.length);
    const result = parseInt(realnumber, 2);
    return result;
  }
}

function hex2decimal(number) {
  if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) return "#NUM!";

  // Convert hexadecimal number to decimal
  var decimal = parseInt(number, 16);

  // Return decimal number
  return decimal >= 549755813888 ? decimal - 1099511627776 : decimal;
}

function payloadDivider(payload_hex) {
  let pointer = 0;
  const result = {};
  const payloadArray = payload_hex.split("");
  while (pointer <= payload_hex.length) {
    // channel
    const channel = `${payloadArray[pointer]}${payloadArray[pointer + 1]}`;
    pointer += 2;
    // type
    const type = parseInt(
      `${payloadArray[pointer]}${payloadArray[pointer + 1]}`,
      10
    );
    pointer += 2;

    // map type
    let mtype = undefined;
    typetable.forEach(t => {
      if (t.hex === type) {
        // found
        mtype = t;
      }
    });

    // not found
    if (!mtype) {
      break;
    }

    // data
    let data = "";
    const size = mtype.size * 2;
    for (var i = 0; i < size; i++) {
      data += `${payloadArray[pointer + i]}`;
    }
    pointer += size;

    result[channel] = {
      channel,
      mtype,
      data,
      payload_hex
    };
  }
  return result;
}

module.exports = {
  receiveData,
  showData,
  addData,
  editData,
  deleteData,
  showLatestData
};
