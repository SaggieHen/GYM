const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    location:{
        lat: Number,
        lon: Number
    }
});

module.exports = mongoose.model('club',clubSchema);