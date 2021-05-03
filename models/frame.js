var mongoose = require('mongoose');

var frameSchema = new mongoose.Schema({
    type: String,
    brand: String,
    model: String
    

},
{timestamps: true}
);

module.exports = mongoose.model('Frame', frameSchema);