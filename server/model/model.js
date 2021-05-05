const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    category : {
        type : String,
        required: true
    },
    brand : {
        type : String,
        required: true
    },
    model : {
        type : String,
        required: true
    },
    colour : {
        type : String,
        required: true
    },
    rating : {
        type : String,
        required: true
    },
    price : {
        type: String,
        required: true
    }
})

const Componentdb = mongoose.model('componentdb', schema);

module.exports = Componentdb;