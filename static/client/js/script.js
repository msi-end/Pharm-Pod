// let berger = document.querySelector('.berger');
// let nav = document.querySelector('.nav-links');
// let searchIcon = document.querySelector('.searchIcon');
// let searchBox = document.querySelector('.searchBox');
// berger.onclick = function () { nav.classList.add('active')}

let navMenu = document.getElementById('nav-menu');
let navlist = document.getElementById('navlist');

let a = true;

navMenu.addEventListener('click', function() {

    let navbar = document.getElementById('navbar');

    console.log(a);
    if (a === true) {
        //navbar.classList.remove('hidden')
        navlist.style.left = 0;
        a = false;
    }else{
        //navbar.classList.add('hidden') 
        navlist.style.left = '-100%';
        a = true;
    }
})





let Obj = { flashMsg: function (h,p,e) {
        let msgBody = document.getElementById('msg_bx')
        let ctn = document.getElementById('msg_Ctn').children;
        ctn[0].children[0].classList.add(e?'uil-check-circle':'uil-exclamation-triangle');
        ctn[1].children[0].innerHTML=h;ctn[1].children[1].innerHTML=p;
        ctn[0].parentElement.style.background =`${ e?'linear-gradient(to bottom,#86efac,#00d54e)':'linear-gradient(to bottom,#f87171,#ef4444)'}`
        msgBody.style.display = 'block'; this.Anim(msgBody, 'animate__backInUp', true)
        setTimeout(() => { this.Anim(msgBody, 'animate__backInUp', false)
            this.Anim(msgBody, 'animate__bounceOut', true)
            setTimeout(() => { msgBody.style.display = 'none';this.Anim(msgBody, 'animate__bounceOut', false)}, 1000);
            ctn[0].children[0].classList.remove(e?'uil-check-circle':'uil-exclamation-triangle')},2000);},
    Anim: function (obj, animType, dpOpt) {dpOpt ?obj.classList.add(animType): obj.classList.remove(animType)}}
function dSplit(val,p,t){let [d,m,y]=val.split(p);return t?`${d}/${m}/${y}`:`${y}-${m}-${d}`}
let dtEm=document.getElementById('reqDate');let tdy =new Date;
let tdyVal=tdy.toLocaleDateString({ month: "2-digit",year:"numeric", day:"2-digit"})
let odt =new Date(tdy.setDate(tdy.getDate()-parseInt(dtEm.dataset.min))).toLocaleDateString({ month: "2-digit",year:"numeric", day:"2-digit"});
let ndt =new Date(tdy.setDate(tdy.getDate()+parseInt(dtEm.dataset.max)+parseInt(dtEm.dataset.min))).toLocaleDateString({ month: "2-digit",year:"numeric",day:"2-digit"})
dtEm.value=dSplit(tdyVal,'/',false);    dtEm.min=dSplit(odt,'/',false); dtEm.max=dSplit(ndt,'/',false);



// USE  Obj.flashMsg('main message','second detailed message',true)















    
// Host Master 




