const express  = require('express');
const app = express();

var mysql = require('mysql');
var path = require('path');

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.join("C:/Users/ablin/OneDrive/Dokumente/GitHub/Website/login.html"));
});

function insert(username, password){
  
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

app.post('/login-backend', function(req, res){

  let username = req.body.username_input, password = req.body.password_input;
  var isRight = 0;

  for(var i = 0; i < username.length; i++){
    if(username.charAt(i) == "\"" ||
     password.charAt(i) == "\""){
      isRight = 1;
    }
  }

  if(isRight == 0){
    insert(req.body.username_input ,hashCode(req.body.password_input));
    res.sendFile(path.join("C:/Users/ablin/OneDrive/Dokumente/GitHub/Website/logincorrect.html"));
  }
});

const server = app.listen(80, function(){
  console.log("Server started");
});

hashCode=function(s){
  var h = 0, l = s.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + s.charCodeAt(i++) | 0;
  return h;
}