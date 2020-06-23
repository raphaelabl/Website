var path = require('path');

const express  = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.listen(1111, function(){
    console.log('Listening at Port 1111');
});