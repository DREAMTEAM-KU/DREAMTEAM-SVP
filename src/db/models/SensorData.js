const mongoose = require("mongoose");

const sensorDataSchema = mongoose.Schema({
  temperature: {
      type: Number,
      default: 0
  },
  humidity: {
      type: Number,
      default: 0
  },
  pin: {
      type: Number,
      default: 0
  },
  pout: {
      type: Number,
      default: 0
  },
  timestamp: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("SensorData", sensorDataSchema);
