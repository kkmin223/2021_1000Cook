const express = require('express');
const hbs = require("express-handlebars");

const server = express();


server.use(express.static(__dirname));

//get : url을 읽어오고 그에 맞는 행동을해야한다.
server.get("/", (req,res)=>{
  console.log(req.url);
  res.sendFile(__dirname+"/Recipe.html");
});
server.get("/Recipe", (req,res)=>{
  console.log(req.url);
  res.sendFile(__dirname+"/Recipe.html");
});

server.get("/recipe-grid", (req,res)=>{
  console.log(req.url);
  res.sendFile(__dirname+"/recipe-grid.html");
});


server.use((req,res)=> {
  var str = "/recipe_enter";
  if(req.url.indexOf(str)!=-1){
    var _url = req.url;
    var length = _url.length;
    var r_code = _url.substring(13,length);
    res.sendFile(__dirname+str+".html");
  }
  else{
    res.sendFile(__dirname+"/404.html");
  }


})

server.listen(8080,(err)=>{
  if(err) return console.log(err);
  console.log("The server is listening on port 8080");
})
