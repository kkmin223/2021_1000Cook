var fs = require('fs');
fs.readFile('1000Cook\recipe_data\recipe_info.json',function(err,data){
  console.log(data);
});
