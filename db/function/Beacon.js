const Beacon = require("../models/Beacon");

async function getCurrentPeople(type) {
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
  const lastBeacon = await Beacon.find({ _id: -1 }).limit(1);
  const currentPin = lastBeacon[0];

  const nextBeacon = new Beacon({
    pin: currentPin.pin + 1,
    pout: currentPout,
    timestamp: new Date()
  });

  const result = await nextBeacon.save();
  return result;
}

async function leave() {
  const lastBeacon = await Beacon.find({ _id: -1 }).limit(1);
  const currentPin = lastBeacon[0];

  const nextBeacon = new Beacon({
    pin: currentPin.pin,
    pout: currentPout + 1,
    timestamp: new Date()
  });

  const result = await nextBeacon.save();
  return result;
}

module.exports = {
  getCurrentPeople
};
