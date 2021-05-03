const express = require('express'),
router = express.Router();

//--------------#####---------------
// controllers declaration

var userCtrl = require('./controller/user-controller');
var frameCtrl = require('./controller/frame-controller');

//--------------#####---------------
router.post('/addFrame', frameCtrl.createFrame);

router.post('/delete/:id', frameCtrl.deleteFrame);

router.post('/update:id', function(req, res, next) {
    res.render('update');
 });

router.put('/deleteFrame/:id', frameCtrl.updateFrame);

router.get('/frame/:id', frameCtrl.getFrame);

router.post('/users', userCtrl.createUser);

router.get('/users', userCtrl.getUsers);

router.get('/users/:id', userCtrl.getUser);

router.put('/users/:id', userCtrl.updateUser);

router.delete('/users/:id', userCtrl.deleteUser);

//--------------#####---------------
// Image related
module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer"); //includes multer
var upload = multer({dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./controller/image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;