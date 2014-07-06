var express = require("express");

var port = 5000;

var app = express();

app.use(express.static(__dirname+"/public"));

app.listen(port);