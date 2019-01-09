const typetable = [
  {
    name: "Digital Input",
    hex: 0,
    size: 1
  },
  {
    name: "Digital Output",
    hex: 1,
    size: 1
  },
  {
    name: "Analog Input",
    hex: 2,
    size: 2
  },
  {
    name: "Analog Output",
    hex: 3,
    size: 2
  },
  {
    name: "Illuminance Sensor",
    hex: 65,
    size: 2
  },
  {
    name: "Presence Sensor",
    hex: 66,
    size: 1
  },
  {
    name: "Temperature Sensor",
    hex: 67,
    size: 2
  },
  {
    name: "Humidity Sensor",
    hex: 68,
    size: 1
  },
  {
    name: "Accelerometer",
    hex: 71,
    size: 6
  },
  {
    name: "Barometer",
    hex: 73,
    size: 2
  },
  {
    name: "Gyrometer",
    hex: 86,
    size: 6
  },
  {
    name: "GPS Location",
    hex: 88,
    size: 9
  }
];

module.exports = {
  typetable
};
