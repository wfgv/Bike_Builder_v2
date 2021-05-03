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
  //--------------#####---------------
// read single Frame
exports.getFrame = function(req, res) {
  Frame.findOne({_id: req.params.id}, function (err, frame) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(frame);
  }); 
};
  //--------------#####---------------
// UPDATE frame
  exports.updateFrame = function(req, res) {
  Frame.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};
//--------------#####---------------
// DELETE frame
exports.deleteFrame = function(req, res) {
  Frame.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.redirect('/');
  }); 
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