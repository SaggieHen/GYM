const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    detail:{
        type:String,
        require: true
    },
    location:{
        lat: Number,
        lon: Number
    }
});

module.exports = mongoose.model('restaurant',restaurantSchema);