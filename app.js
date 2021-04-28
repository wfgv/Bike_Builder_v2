const http = require('http');
//const axios = require('axios');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 

var app = express();
var port = 8000;

app.use(express.static('views'));

app.set('view engine', 'ejs');
app.get('/home', function(req,res) {
    res.render("../views/home");
})

dotenv.config();
app.use(bodyParser.json()); //express use json
app.use(logger('tiny'));

app.use(require('./routes')); // included as a middleware

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true})
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

app.listen(port, function(err){
    console.log('Listening on port:' + port);
});