'use strict'
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

// Path to app directive
app.use(express.static(__dirname+'/app'));
// Path to Node modules
app.use('/node_modules',express.static(__dirname+'/node_modules'));
// Path to Bower components
app.use('/bower_components',express.static(__dirname+'/bower_components'));

app.listen(PORT,function(err){
   if(err){
       console.log(err)
   }else{
       console.log('Server Running on:'+PORT);
   } 
});