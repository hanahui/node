var fs = require("fs");
//启用path(路径)模块，此模块为node自带模块
var path = require("path");
//获取读取文件夹的路径
var content = process.argv[2];
//获取输入所需文件后缀名不带“.”
var ext = process.argv[3];
console.log("--------目录----------");
fs.readdir(content,function(err,list){
    if(err) throw err;
    // if(err){
    //     throw err;
    // }
    for(var i=0;i<list.length;i++){
        var file = list[i];//循环得到文件夹中每一个子文件
        // console.log("第" + i + "次循环\n"+ file + "\n\n");
        //遍历数组中每一个文件 list.join 所有的元素 list[i] 第【i】个元素
        // console.log(file);//输出文件夹中所有的子文件，
        //path.extname：返回路径中文件的后缀名，即路径中最后一个'.'之后的部分
        if(path.extname(file) === "." + ext){
            console.log(file+ "\n");
        }
    }
});
//控制台输入 node app.js \Users\Administrator\Desktop\韩阿辉\five\router txt
//或者输入node app.js router txt

