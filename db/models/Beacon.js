const mongoose = require("mongoose");

const beaconDataSchema = mongoose.Schema({
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

module.exports = mongoose.model("BeaconData", beaconDataSchema);
