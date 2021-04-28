var mongoose = require('mongoose');

var frameSchema = new mongoose.Schema({
    brand: String,
    model: String
    

},
{timestamps: true}
);

module.exports = mongoose.model('Frame', frameSchema);