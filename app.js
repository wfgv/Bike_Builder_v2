const http = require('http');
//const axios = require('axios');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 

var frameCtrl = require('./controller/frame-controller');
var app = express();
var port = 3000;

app.use(express.static('views'));
app.use(express.urlencoded({extended: true})); //We allow the data sent from the client to be coming in as part of the URL in GET and POST requests
app.use(express.json()); //We include support for JSON that is coming from the client



app.set('view engine', 'ejs');
app.get('/', frameCtrl.getFrames);
//app.get('/', frameCtrl.getWheels);


dotenv.config();
app.use(bodyParser.json()); //express use json
app.use(logger('tiny'));

//app.use('/', routes);
app.use(require('./routes')); // included as a middleware

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true})
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

app.listen(port, function(err){
    console.log('Listening on port:' + port);
});