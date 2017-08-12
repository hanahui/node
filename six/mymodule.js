var fs = require("fs")
var path = require("path")
//module.exports 封装一个自定义模块 导出目录 ，扩展名 ，回调函数data
module.exports = function(dir,ext,next){
    fs.readdir(dir,function(err,data){
        if(err)
            return next(err);
        //返回错误并跳出
        data = data.filter(function(file){
            return path.extname(file) === "." + ext
        })
        next(null,data);
    });
}