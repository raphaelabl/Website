const express  = require('express');
const app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/'));

app.listen(1337, function(){
    console.log('Listening at Port 1337');
});