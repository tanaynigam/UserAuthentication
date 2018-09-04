var index = {};
var express = require('express');
var app = express();
var mysql = require('mysql');

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.sendFile(path.join(_dirname+ '/index.html'));
})

app.get('/logged.html', function(req, res){
  res.sendFile(path.join(_dirname+ '/logged.html'));
})

app.get('/notlogged.html', function(req, res){
  res.sendFile(path.join(_dirname+ '/notlogged.html'));
})

app.get('/user', function(req, res){
	var username = req.query.username;
	var password = req.query.userPassword;
	console.log(username+" "+ password);
  var logged = index.checkPassword('password' , 'password', res);
  

  index.DatabaseConnect(username, password, res);
 });


var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);

})

index.DatabaseConnect = function (username, password, res){
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "userAuthentication"
});

con.connect(function(err) {
   if (err) throw err;
   con.query("SELECT password FROM userAuthentication WHERE username='"+ username + "'", function(err, result, fields){
    if(err) throw err;
    var logged = checkPassword(result, password, res)
   })
  })
};

index.checkPassword = function(result, password, res){
  if(password == result){
      res.redirect('http://localhost:8081/logged.html')
      return 'logged in'
      } 
    else{
      res.redirect('http://localhost:8081/notlogged.html')
      return 'not logged'
    }

}


module.exports = index;
