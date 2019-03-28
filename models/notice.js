const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    detail:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    }
});

module.exports = mongoose.model('notice',noticeSchema);