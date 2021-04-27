const http = require('http');
const axios = require('axios');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json()); //express use json
app.use(logger('tiny'));

app.use(require('./routes')); // included as a middleware

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true})
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

   // http.createServer((req, res)=>{
    //  res.write(users.join("\n ")); // write a response
      //res.write(emails.join("\n")); // write a response
    //  res.end(); //end the response
    //}).listen(8000); // listen for requests on port 8000

//     let users = []; // names of users will be stored here
//     //let emails = [];
// (async function getNames(){
//   try{
//     const {data} = await axios.get("https://swapi.dev/api/people/");
//     users = data.results.map(user=>user.name);
//     //emails = data.map(email=>email.email);
//     console.log(users)
//   } catch(error){
//     console.log(error)
//   }
// })();

app.listen(port, function(err){
    console.log('Listening on port:' + port);
});