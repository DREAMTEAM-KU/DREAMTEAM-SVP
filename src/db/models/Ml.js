const mongoose = require("mongoose");

const mlSchema = mongoose.Schema({
    time: {
        type: Date,
        default: new Date()
    },
    value: Number,
    timestamp: {
        type: Date,
        default: new Date()
    },
});

module.exports = mongoose.model("ml", mlSchema);
