var express = require("express");
var app = express();
app.get('/',function(req,res){
    res.send("<h1 id='dome'>hello wolrd!</h1>");
    console.log('hello wolrd!');
})
app.listen(3000,function(){
    console.log("node is ok!")
})