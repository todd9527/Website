var express = require("express");
//var log = require("logfmt");

var port = 5000;

var app = express();

//app.use(log);
app.use(express.static(__dirname+"/public"));

app.listen(port);