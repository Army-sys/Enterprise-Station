
function timede(){
//定义现在时间时间
let time1 = new Date()

//五一未来时间
let futime = new Date('2020/5/1 00:00:00')

//计算五一时间差
let timeDif = futime -time1


   //五一天数
//天  1天 = 24小时 = 24 * 3600秒 = 24 * 3600000秒 
let day = Math.floor(timeDif/1000/60/60/24) 
        if(day<10)day = `0${day}`
//小时
let hour = Math.floor(timeDif/1000/60/60%24)
if(hour<10)hour = `0${hour}`
//分钟
let minute = Math.floor(timeDif/1000/60%60)
if(minute<10)minute = `0${minute}`
//秒
let second = Math.floor(timeDif/1000%60)
if(second<10)second = `0${second}`

//连接字符串
let timed = `${day}天${hour}小时${minute}分钟${second}秒`
//文本连接
document.querySelector('.timer1').innerHTML = timed 
}
timede();


setInterval(timede,1000)


