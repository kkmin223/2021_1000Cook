 const express = require('express');
 const app =express();
 app.set('view engine', 'ejs');
 app.set('views', './views');
 var mysql      = require('mysql');
 var db = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'ss99223!',
   database : 'web_recipe'
 });
db.connect();

 app.listen(8080, function(){
   console.log('listenting on 8080')
 });

 app.get('/', function(req,res){
   res.sendFile(__dirname+'/main.html')
 });

 app.get('/recipe', function(req,res){
   res.sendFile(__dirname+'/Recipe.html')
   
 });
