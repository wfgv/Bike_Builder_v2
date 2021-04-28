const express = require('express'),
router = express.Router();


//--------------#####---------------
// controllers declaration

var itemCtrl = require('./controller/item-controller'),
userCtrl = require('./controller/user-controller');

var frameCtrl = require('./controller/frame-controller');


//--------------#####---------------
// GET home page: 
router.get('/', function(req, res, next) {
    res.render('home', {title: 'Express'});
    
});

//--------------#####---------------
// add frame: 
router.post('/frames/add', frameCtrl.createFrame);
//--------------#####---------------

router.get('/frames', frameCtrl.getFrames);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.get('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);

router.get('/users/:id', userCtrl.getUser);

router.put('/users/:id', userCtrl.updateUser);

router.delete('/users/:id', userCtrl.deleteUser);

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer"); //includes multer
var upload = multer({dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./controller/image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;