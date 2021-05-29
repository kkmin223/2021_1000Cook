 const express = require('express');
 const app =express();

 app.listen(8080, function(){
   console.log('listenting on 8080')
 });

 app.get('/', function(req,res){
   res.sendFile(__dirname+'/main.html')
 });

 app.get('/recipe', function(req,res){
   res.send('레시피 홈페이지입니다.');
 });
