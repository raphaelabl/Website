const express  = require('express');
const app = express();

var mysql = require('mysql');
var path = require('path');

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.join("C:/Users/ablin/OneDrive/Dokumente/GitHub/Website/login.html"));
});

function insert(username, password){
  var isRight = 0;

  for(var i = 0; i < username.length; i++){
    if(username.charAt(i) == "\"" ||
     password.charAt(i) == "\""){
      isRight = 1;
    }
  }
  if(isRight == 0){
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Apschi2001",
      database: "mydb"
    });

    con.connect(function(err){
      if(err) throw err;
    });
    con.query("INSERT INTO customers (name, password) VALUES (?, ?)", [username, password], function(err, result){
      if(err) throw err;
    });
    con.end();
  }
  
}

app.post('/login-backend', function(req, res){
  res.send(req.body.username_input + " " + req.body.password_input)
  insert(req.body.username_input ,req.body.password_input);
});

const server = app.listen(80, function(){
  console.log("Server started");
});