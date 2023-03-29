let berger = document.querySelector('.berger');
let nav = document.querySelector('.nav-links');
let searchIcon = document.querySelector('.searchIcon');
let searchBox = document.querySelector('.searchBox');
berger.onclick = function () { nav.classList.add('active')}
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




// USE  Obj.flashMsg('main message','second detailed message',true)















    
// Host Master 




