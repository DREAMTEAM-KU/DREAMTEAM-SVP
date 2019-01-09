const mongoose = require('mongoose')

const temperatureSchema = mongoose.Schema({
  teamID: String,
  temp: Number
});

module.exports = mongoose.model("temperature", temperatureSchema);