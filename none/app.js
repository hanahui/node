var http = require('http');
var urls = process.argv.slice(2,process.argv.length);
var datas = [];
var end = [];
var is = false;
urls.forEach(function(url,index){
    http.get(url,function(response){
        var list = [];
        response.setEncoding('utf8');
        response.on("data",function(data){
            list.push(data);
        });
        //接收进程返回的数据

        response.on("error",function(err){
            throw err;
        });
        //抛出

        response.on("end",function(){
            var str = '';
            list.forEach(function(s){
                str += s;
            });
            datas[index] = str;
            end.push(true);

            //判断是否打印
            if (isEnd()) {
                for (var i = 0; i < datas.length; i++) {
                    console.log(datas[i]);
                }
            }
        });
    });
});
function isEnd(){
    //判断是否全部返回
    if (end.length === urls.length) {
        end.forEach(function(blo){
            if(blo){
                is = true;
            }else{
                is = false;
            }
        });
    }
    return is;
}