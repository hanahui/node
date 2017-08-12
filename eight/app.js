var http = require("http");
var bl = require("bl");
var url = process.argv[2];

http.get(url,function(res){
    //回调
    res.pipe(bl(function(err,data){
        if(err)
            return console.error(err);
        data = data.toString("utf8");
        console.log(data.length);
        console.log(data);
    }))
})