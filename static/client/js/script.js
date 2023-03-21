let berger = document.querySelector('.berger');
let nav = document.querySelector('.nav-links');
let searchIcon = document.querySelector('.searchIcon');
let searchBox = document.querySelector('.searchBox');
berger.onclick = function () {
    nav.classList.add('active')
}
let Obj = {
    flashMsg: function (msg) {
        let msgBody = document.getElementById('flashMsg')
        msgBody.style.display = 'block'
        msgBody.children[0].innerHTML = `${msg}`
        this.Anim(msgBody, 'animate__backInDown', 'show')
        setTimeout(() => {
            this.Anim(msgBody, 'animate__bounceOut', false)
            setTimeout(() => { msgBody.style.display = 'none'; }, 2000);
        }, 3000);
    },
    Anim: function (obj, animType, dpOpt) {
        if (dpOpt == true) {
            obj.classList.add('animate__animated'); obj.classList.add(animType);
        } else if (dpOpt === 'rm') { obj.classList.remove(animType) } else { obj.classList.add(animType) }
    }
}



