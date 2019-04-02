const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    accountId:{ 
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'account'
    },
    restaurantId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'restaurant'
    },
    date:{
        type: Date,
        required: true
    },
    seats:{
        type: Number,
        require: true
    }
    
});

module.exports = mongoose.model('reservation',reservationSchema);