//获取元素
let navLi = document.querySelectorAll('.nav>li')

//遍历事件
for (let i = 0; i < navLi.length; i++) {
    //注册事件
    navLi[i].addEventListener('mouseenter', function () {
        //添加激活样式
         this.className = 'cur';
         //判断是否有子选项
         if(this.querySelector('p')){
            this.querySelector('p').style.display='block'
         }
    })
    navLi[i].addEventListener('mouseleave',function(){
        //添加移出样式
         this.className=''
         //判断移出
        if(this.querySelector('p')){
            this.querySelector('p').style.display='none'
        }
    })
}
