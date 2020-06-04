//获取元素
let modalbox = document.querySelector('#modalBox')  //模态框
let deng = document.querySelector('#deng')    //登录
let user = document.querySelector('#user')    //文本框
let user1 = document.querySelector('#user1')    ///密码框
let img1 = document.querySelector('.img1')     //清除
let img2 = document.querySelector('.img2')     //眼睛
let yh = document.querySelector('.yh')    //错误提示语
let ym = document.querySelector('.ym')    //错误提示语
let myform = document.querySelector('#myform')   //提交判断
let hiddend = document.querySelector('.hiddend')   //关闭
let loginbox = document.querySelector('.login-box')   //关闭


//测试
/* modalbox.style.width = document.documentElement.clientWidth+'px'
modalbox.style.height = document.documentElement.clientHeight+'px'

    window.addEventListener('resize',function(){
        modalbox.style.width = document.documentElement.clientWidth+'px'
        modalbox.style.height = document.documentElement.clientHeight+'px'
})
 */



 //封装
let fbox = function () {
  modalbox.style.width = document.documentElement.clientWidth + 'px'
  modalbox.style.height = document.documentElement.clientHeight + 'px'
}

//调用
fbox();


//重复获取
window.addEventListener('resize', function () {
  fbox()
}) 

 //点击事件
deng.addEventListener('click', function () {
  modalbox.style.display = 'block'
})
//按键显示   
//注册事件 键盘按一下则显示
user.addEventListener('keyup', function () {
  //判断按下的次数是否大于0
  if (user.value.length > 0) {
    //符合则图片显示
    img1.style.display = 'block'
    //否则图片隐藏
  } else {
    img1.style.display = 'none'
  }
})

//点击清除并消失
//注册点击事件
img1.addEventListener('click', function () {
  //清空用户名
  user.value = "";
  //内容为空则隐藏
  img1.style.display = "none"
})

//密码点击事件
//注册事件
//注册点击显示事件

/* //方法一
img2.addEventListener('click', function () {
   user1.type = 'text'
   img2.style.display='none'
   img3.style.display='block'

})
img3.addEventListener('click', function () {
   user1.type = 'password'
   img2.style.display='block'
   img3.style.display='none'
})
user1.addEventListener('keyup', function () {
  if (user1.value.length > 0) {
    img2.style.display = 'block';
  } else {
    img2.style.display = "none"
  }
})  */

 //密码框 显示与隐藏

 //立flog
 let passdflog = true;

 //注册点击事件
 img2.addEventListener('click',function(){
       if(passdflog){
            user1.type = 'text'
            img2.src = '../images/open.png'
       }else{
         user1.type='password'
         img2.src = '../images/close.png'
       }
       passdflog = !passdflog
 })


//提交事件
let formflog = {
    flog1:false,
    flog2:false
}
//用户名提交事件
  user.addEventListener('blur',function(){  
       //获取用户名
       let userVal = user.value
        //用户名正则，4到16位（字母，数字，下划线，减号
        let userrge =/^[a-zA-Z0-9_-]{4,16}$/;
        //检验用户名规则
        let userd = userrge.test(userVal)
        //判断
        if(userd){
              user.style.borderColor='green'
              yh.innerHTML = ''
              formflog.flog1 = true
        }else{
             user.style.borderColor='red'
             yh.innerHTML='请输入正确用户名'
             formflog.flog1 = false
        }
})
//密码焦点事件
user1.addEventListener('blur',function(){
       
       //获取密码内容
       let passdVal = user1.value
       //密码规则4到16位（字母，数字，下划线，减号
       let passed = /^[A-z][A-z0-9_]{4,16}$/;
       //检验密码规则
         let pass = passed.test(passdVal)

         //判断
         if(pass){
             user1.style.borderColor = 'green'
             ym.innerHTML = ''
             formflog.flog2 = true
         }else {
           user1.style.borderColor = 'red'
           ym.innerHTML = '请输入正确的密码'
           formflog.flog2 = false
         }

})

//提交事件
//点击提交
myform.addEventListener('submit',function(event){
       //判断失败内容  
       if(!formflog.flog1){
           user.style.borderColor = 'red'
           yh.innerHTML = '请输入正确用户名'
           //阻止默认行为
           event.preventDefault();
       }else if(!formflog.flog2){
        user1.style.borderColor = 'red'
        ym.innerHTML = '请输入正确密码'
        //阻止默认行为
          event.preventDefault();
       }
})

//点击关闭事件
hiddend.addEventListener('click',function(){
     modalBox.style.display="none"
})

modalbox.addEventListener('click',function(e){
        modalbox.style.display='none'
        //e.stopPropagation();
})
loginbox.addEventListener('click',function(e){
       e.stopPropagation();
})