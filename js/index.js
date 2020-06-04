//客服联系方式
let cuse = document.querySelectorAll('#cuser>a')   //获取节点
for (let i = 0, len = cuse.length; i < len; i++) {  //获取遍历元素
        cuse[i].addEventListener('mouseenter', function () {   //注册事件鼠标移入
                this.style.backgroundPositionX = `-50px`   //鼠标移入图片向左50px
                this.querySelector('span').style.display = `block`;   //取消隐藏
        })
        cuse[i].addEventListener('mouseleave', function () {   //注册事件 鼠标移出
                this.style.backgroundPositionX = '0px'    //移出恢复位置
                this.querySelector('span').style.display = 'none';  //取消显示
        })
}

/* 
    需求：滚动条滚动时，判断当前滚动的距离是否大于８００
        　大于800： 显示回到顶部按钮
          小于800： 隐藏回到顶部按钮      
*/
//获取元素
let rTop = document.querySelector('.bg4')

//注册事件
window.addEventListener('scroll', function () {

        //获取滚动的距离
        let sTop = document.documentElement.scrollTop || document.body.acrollTop

        //判断距离是否显示回到最上箭头
        if (sTop >= 800) {
                //显示
                rTop.style.display = 'block'
        } else {
                rTop.style.display = 'none';
        }
})


/* 
    需求： 点击回到顶部按钮,让滚动条回到顶部
    需求： 点击回到顶部按钮,每隔30毫秒改变html节点对象的scrollTop值
    每30毫秒：   html节点的scrollTop值 = 起始值的scrollTop值 - 50

    运动缺点： 运动的总时间不定，影响用户的体验度，增加了用户的心里等待时间
*/


//方法一
//获取回到顶部按钮
//let rTop = document.querySelector('bg4')

//注册事件
/* rTop.addEventListener('click',function(){

       //设置计时器
        let time = setInterval(function(){
              
               //获取运动距离
               let sTop = document.documentElement.scrollTop || document.body.scrollTop
               
               //运动
               document.documentElement.scrollTop = sTop-30
               document.body.scrollTop = sTop-60
                
               //清除计时器
               if(sTop<=0){
                  clearInterval(time)
               }

        },30)
}) */


//方法二
//获取bg4元素
//let rTop = document.querySelector('bg4')

//注册点击事件
rTop.addEventListener('click', function () {
        //时间
        let t = 1000;//毫秒
        //距离
        let s = document.documentElement.scrollTop || document.body.scrollTop
        //速度
        let v = s / t

        //设置计时器
        let time = setInterval(function () {

                //运动的距离
                let sTop = document.documentElement.scrollTop || document.body.scrollTop
                //运动
                document.documentElement.scrollTop = sTop - v * 30
                document.body.scrollTop = sTop - v * 30
                if(sTop<=0){
                   clearInterval(time)
                }
        }, 30)
})