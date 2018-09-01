var express = require('express');
var app = express();
var mysql = require('mysql');

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.sendFile(path.join(_dirname+ '/index.html'));
})

app.get('/user', function(req, res){
	var userinput = req.query.username;
	var userpassword = req.query.userPassword;
	console.log(userinput+" "+ userpassword);

	var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "userAuthentication"
});
//res.redirect('http://localhost:8081/logged')
 con.connect(function(err) {
   if (err) throw err;
   con.query("SELECT password FROM userAuthentication WHERE username='"+ userinput + "'", function(err, result, fields){
   	if(err) throw err;
   	if(userpassword == result)
   		res.redirect('http://localhost:8081/logged')
   	else
   		res.redirect('http://localhost:8081/notlogged')

   })
 });

})

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

})


app.use(express.static(__dirname));
app.get('/logged', function(req, res){
	res.sendFile(path.join(_dirname+ '/logged.html'));
})


app.use(express.static(__dirname));
app.get('/notlogged', function(req, res){
	res.sendFile(path.join(_dirname+ '/notlogged.html'));
})
