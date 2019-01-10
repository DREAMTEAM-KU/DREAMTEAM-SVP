const Beacon = require("../models/Beacon");

async function getCurrentPeople(type) {
  console.log(type);
  try {
    let newBeacon;
    switch (type) {
      case "enter":
        newBeacon = await enter();
        break;
      case "leave":
        newBeacon = await leave();
        break;
    }
    return newBeacon.pin - newBeacon.pout;
  } catch (e) {
    throw e;
  }
}

async function enter() {
  const lastBeacon = await Beacon.find({})
    .sort({ _id: -1 })
    .limit(1);
  const currentPin = lastBeacon[0]
    ? lastBeacon[0]
    : {
        pin: 0,
        pout: 0
      };

  const nextBeacon = new Beacon({
    pin: currentPin.pin + 1,
    pout: currentPin.pout,
    timestamp: new Date()
  });

  console.log("nextBeacon", nextBeacon);

  const result = await nextBeacon.save();
  console.log(result);
  return result;
}

async function leave() {
  const lastBeacon = await Beacon.find({})
    .sort({ _id: -1 })
    .limit(1);
  const currentPin = lastBeacon[0]
    ? lastBeacon[0]
    : {
        pin: 0,
        pout: 0
      };

  const nextBeacon = new Beacon({
    pin: currentPin.pin,
    pout: currentPin.pout + 1,
    timestamp: new Date()
  });

  const result = await nextBeacon.save();
  return result;
}

module.exports = {
  getCurrentPeople
};
