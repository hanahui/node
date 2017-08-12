var mymodule = require ("./mymodule")
var content = process.argv[2];
var ext = process.argv[3];
mymodule(content,ext,function(err,data){
    if(err)
        return console.log("这是一个错误：",err);
    data.forEach(function(file){
        console.log(file);
    })
})