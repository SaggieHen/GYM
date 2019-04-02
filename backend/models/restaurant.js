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
    },
    accountId:{ 
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'account'
    }
});

module.exports = mongoose.model('restaurant',restaurantSchema);