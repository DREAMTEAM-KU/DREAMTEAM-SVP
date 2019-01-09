const mongoose = require("mongoose");

const temperatureSchema = mongoose.Schema({
  teamID: String,
  temp: Number,
  updateDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("temperature", temperatureSchema);
