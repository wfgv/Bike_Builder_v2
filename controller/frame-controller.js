var Frame = require('../models/frame');

//--------------#####---------------
// create frame
exports.createFrame = function(req, res) { 
    var newframe = new Frame(req.body);
    newframe.save(function (err, frame) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.redirect('/');
});
};

//--------------#####---------------
// read ALL frames
exports.getFrames = function(req, res) {
  Frame.find ({}, function (err, frames) {
    if (err) {
      res.status(400).json(err); 
    } 
    console.log(frames);
    //JSON.stringify(frames);
    //res.render('home' , {'frames': frames})
    res.render('home', {'frames': frames});
    } );
    
  };
  exports.getWheels = function(req, res) {
  Frame.find ({}, function (err, wheels) {
    if (err) {
      res.status(400).json(err); 
    } 
    console.log(wheels);
    //JSON.stringify(frames);
    //res.render('home' , {'frames': frames})
    res.render('home', {'wheels': wheels});
    } );
    
  };