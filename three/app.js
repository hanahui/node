//添加fs模块 文件系统模块
var fs = require('fs');
//同步文件系统
// var filename = process.argv[2];
// //使用fs模块同步读取filename文件内的行
// var str = fs.readFileSync(filename).toString();
// //获取行的长度并打印输出到控制台split("\n")匹配换行符
// console.log(str.split("\n").length);
//整合后简写 "utf8"编码格式 [2]表示读取的哪个文件
var sum = fs.readFileSync(process.argv[2],'utf8').split("\n").length;
console.log(sum)