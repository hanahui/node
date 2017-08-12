var fs = require("fs");
var filename = process.argv[3];
//执行fs.read.File方法
// 第一个参数为读取文件的完整路径，
// 第二个参数使用回调函数同时把收集的数据作为第三个参数进行输出打印
fs.readFile(filename, function(err,data){
    //先判断第一个参数的真假，err的实参返回的值为布尔
    if(err) {
        //抛出错误
        throw err;
    }
    var lines = data.toString().split("\n").length;
    //收集返回值的数据长度
    console.log(lines);
})