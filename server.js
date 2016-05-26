'use strict'
var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var PORT = process.env.PORT || 3000;

// Path to app directive
app.use(express.static(path.join(__dirname+'/app')));

// Path to Node modules
app.use('/node_modules',express.static(path.join(__dirname+'/node_modules')));

// Path to Bower components
app.use('/bower_components',express.static(path.join(__dirname+'/bower_components')));

// Send form
app.post('/form', function(req,res){
	console.log(res);
})

// Listen Server
app.listen(PORT,function(err){
   if(err){
       console.log(err)
   }else{
       console.log('Server Running on:'+PORT);
   } 
});