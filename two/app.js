console.log(process.argv);
//通过process这个全局对象来获取命令行的参数
//process 对象 拥有一个名为 argv 的属性，
// 该属性是一个数组，数组中包含了整条命令的所有部分。
var num = 0;
for (var i = 2;i<process.argv.length;i++){
    //从二开始是为了排除数组中非整数对象，
    // 第一个元素永远都会是node，并且第二个参数总是指向程序的路径
    num += Number(process.argv[i]);
    console.log(num);
}
//通过循环确定数组的数值进行求和运算并打印