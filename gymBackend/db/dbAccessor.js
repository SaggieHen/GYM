const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GYM',{useNewUrlParser: true});
var db = mongoose.connection;
db.on('error',console.error.bind('mongo connection error:'));