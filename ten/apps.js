var getTime = function(){
    var date = new Date();
    var year = date.getFullYear();
    var month = formate(date.getMonth()+1);
    var day = formate(date.getDate());
    var hour = formate(date.getHours());
    var minute = formate(date.getMinutes());
    var time = year + "-"+month+"-"+day+" "+hour+":"+minute;
    function formate(time){
        return (time.toString()>=10 ? "":"0")+ time;
    }
    return time;
};
console.log(getTime());