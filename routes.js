const express = require('express'),
router = express.Router();


//--------------#####---------------
// declaration

var itemCtrl = require('./controller/item-controller'),
userCtrl = require('./controller/user-controller');


//--------------#####---------------
// End Points: 
router.get('/hello', itemCtrl.getWorld);

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

module.exports = router;