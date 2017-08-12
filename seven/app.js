var http = require("http");
var url = process.argv[2];
//发起get请求 使用函数在控制台输出
http.get(url,function(response){
    response = response.setEncoding("utf8");
    //转义编码格式

    response.on("data",console.log);
    // response.on("data",function(data){console.log(data)})
    //打印返回数据

    response.on("error",console.error);
//    打印错误项
}).on("error",console.error);
