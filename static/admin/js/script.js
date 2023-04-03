function EventHandler(element, eventType, fn) {
    const event = document.querySelector(`[${element}]`)
    event.addEventListener(eventType, fn);
}
// max, auto, off/On ,Anim
globalThis.mdlOpn=true
const userAction = {
    modelBox_Opn: function (e) {
        globalThis.mdlBox = document.getElementById('mdl_bx');
        mdlBox.style.display = 'block';
        document.getElementById('mainContent').style.opacity='.3'
        globalThis.mdlBox;this.Anim(mdlBox, 'animate__backInDown', true)
        if(mdlOpn){modelData(e)} },
    modelBox_Cls: function () {
        document.getElementById('mainContent').style.opacity='1'
        this.Anim(mdlBox, 'animate__bounceOutUp', false);
        mdlOpn= true;setTimeout(() => { mdlBox.style.display = 'none';
        this.Anim(mdlBox,'animate__bounceOutUp','rm');
        document.getElementById('mdl_bx').children[0].innerHTML=''}, 700);},
    flashMsg: function (msg) {
        let msgBody = document.getElementById('flashMsg')
        msgBody.style.display = 'block';msgBody.children[0].innerHTML = `${msg}`;
        this.Anim(msgBody, 'animate__backInDown', 'show')
        setTimeout(() => {this.Anim(msgBody, 'animate__bounceOut', false)
            setTimeout(() => { msgBody.style.display = 'none'; }, 2000);}, 3000);},
    Anim: function (obj, animType, dpOpt) {
        if (dpOpt ==true) {  obj.classList.add('animate__animated'); obj.classList.add(animType);
        }else if(dpOpt === 'rm'){ obj.classList.remove(animType)} else { obj.classList.add(animType)} }
}
// User Requestes To API
const userReq ={
    AddPs:function() {
        
    },
    MaxChange:function() {

    },
    AutoApv:function() {
        
    },
    ClsOpn:function() {
        
    }}
var addPS = document.getElementsByClassName('addPS')[0];
function Opn_addPS(e){ e.parentElement.classList.toggle('addPSpan'); }
function Cls_addPS(e){ e.parentElement.classList.remove('addPSpan');
setTimeout(() => {userAction.Anim(e.parentElement, 'animate__bounceOut', false) },.5);}
var inputObjects = {
    MaxChange: {
        title: '<p>Enter here Max Request(Number of Per day Apply)</p>',
        input: '<input type="number" placeholder="4,7,9,20, etc.">',
        saveFn: 'userReq.MaxApply()'
    },AutoApv: {
        title: '<p>Auto Request(On/Off auto Approval)</p>',
        input: '',
        saveFn: 'userReq.AutoApv()'
    }, ClsOpn: {
        title: '<p>Close/Open site Apply request</p>',
        input: '<input type="number" placeholder="4,7,9,20, etc." >',
        saveFn: 'userReq.ClsOpn()'
    }}
function modelData(e){
    let doc=mdlBox.children[0]
    doc.innerHTML+=inputObjects[e].title; doc.innerHTML+=inputObjects[e].input;
    mdlBox.children[1].children[0].setAttribute('onclick', `${inputObjects[e].saveFn}`);return  mdlOpn=false}
// //Naviation Btn buttons
let path = window.location.pathname;
let bottomNav =document.getElementById('bottomNav')
for (let i = 0; i < bottomNav.length; i++) { if(path=='/admin/'+bottomNav.children[i]){
  bottomNav.children.forEach(e => {e.removeAttribute('active') });this.setAttribute('action')}}
