<<<<<<< HEAD
const express  = require('express');
const app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/'));

app.listen(1337, function(){
    console.log('Listening at Port 1337');
});
=======
var path = require('path');

const express  = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.listen(1111, function(){
    console.log('Listening at Port 1111');
});

//app.use(express.urlencoded({extended: true}));
>>>>>>> 1b5112aa5764b94ee1a4ffa61787358332243f41
