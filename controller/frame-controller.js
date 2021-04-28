var Frame = require('../models/frame');

//--------------#####---------------
// create frame
exports.createFrame = function(req, res) { 
    var newframe = new Frame(req.body);
    newframe.save(function (err, frame) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(frame); 
});
};

//--------------#####---------------
// read ALL frames
exports.getFrames = function(req, res) {
  Frame.find({}, function (err, frames) {
    if (err) {
      res.status(400).json(err); 
    } 
    console.log(frames);
    
    res.json(frames);

    } );
    
  };