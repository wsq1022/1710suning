/**
 * Created by lenovo on 2017/12/28.
 */
{
    var banners = document.querySelectorAll(".img-box li");
    var pagers = document.querySelectorAll(".yuan li");
    var bn = document.querySelector(".banner");
    var left=document.querySelector(".zuoxiaokuang");
    var right=document.querySelector(".youxiaokuang");
    console.log(left);
    pagers.forEach(function (ele, index) {
        ele.onmouseover = function () {
            for (var i = 0; i < banners.length; i++) {
                pagers[i].classList.remove("active");
                banners[i].classList.remove("active");
            }
            ele.classList.add("active");
            banners[index].classList.add("active")
            n=index;
        }

    });
    var n=0;
    function ab(bir="r") {
       if(bir==="r"){
           n++;
       }else if(bir==="1"){
           n--;
       }
       if(n===banners.length){
           n=0;
       }
       if(n===-1){
           n=banners.length-1;
       }
       if(n===banners.length){
           n=0
       }
        for (var i = 0; i < banners.length; i++) {
            pagers[i].classList.remove("active");
            banners[i].classList.remove("active");
        }
        banners[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    let t=setInterval(ab,2000);
    bn.onmouseover=function(){
        clearInterval(t);
    }
    bn.onmouseout=function () {
        t=setInterval(ab,2000);
    }
//左右点击
    var asd=true;
    right.onclick=function () {
        if(asd){
            asd=false;
            ab();
        }
    };
    left.onclick=function () {
        if(asd){
            asd=false;
            ab("1")
        }
    };
    banners.forEach(function (ele,index) {
        ele.addEventListener("transitionend",function () {
            asd=true;
        })
    });

}
//返回顶部
{
    var totap=document.querySelector(".abc");
    totap.onclick=function () {
        //document.documentElement.scrollTop=0;
        let sp=document.documentElement.scrollTop;
        let saq=sp*30/300;
        let t=setInterval(function () {
            sp-=saq;
            if(sp<=0){
                sp=0;
                clearInterval(t)
            }
            document.documentElement.scrollTop=sp;

        },20)
    }

}
{
    let btn=document.querySelectorAll(".cdh ul li a");
    let fnr=document.querySelectorAll(".sjdn");
    console.log(fnr);
    btn.forEach(function (ele,index) {
        ele.onclick=function () {
            let ot=fnr[index].offsetTop;
            console.log(index);
            console.log(fnr[index]);
            let now=document.documentElement.scrollTop;
            let ser=(ot-now)*10/300;
            let time=0;
            let t=setInterval(function (){
                console.log("p");
                now+=ser;
                time+=10;
                if(time>=300){
                    clearInterval(t);
                    now=ot;
                }
                document.documentElement.scrollTop=now;
            },10);
            // document.documentElement.scrollTop=ot;
        }
    })
}
