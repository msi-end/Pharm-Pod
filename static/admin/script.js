let mformbtn = document.getElementById('mformbtn');

let val = true;

function addPS() {
   

   let jsonObj =`
   <span class="hover">x</span><br>
   <p>Patient Name:</p>
    <input type='text' name="PName" placeholder='Patient Name'>
    <p>Additional Info :</p>
    <input type='text' name="PInfo"  placeholder='Additional Info'>
    <p>Select Doctor :</p>
    <select name="PDoc" id='psDoctor'>
        <option value='Jays Mehra'>Jays Mehra</option>
        <option value='PK Das'>PK Das</option>
        <option value='Probin Borua'>Probin Borua</option>
    </select><br>
    <button type="button" class="cgreen hover">Save </button>
    <button type="button" class="cred hover"> Cancel</button>`

 if (val === false) {
    closemform();
   
 }else{
        var addPS = document.getElementById('eform');
        mformbtn.innerHTML = `&times;`;
        addPS.classList.add('addPSpan');
        val = false; 
    }  
}

function closemform() {
        let addp = document.getElementById('eform')
        addp.classList.remove('addPSpan');
        mformbtn.innerHTML = `+`;
        val = true;
    
}

mformbtn.addEventListener('click', addPS);



//sending form to db----

const saveBtn = document.getElementById('save');

saveBtn.addEventListener('click', () =>{
    console.log('sending form to db')
})

//footer buttons--

let fbtn = document.querySelectorAll('#fbtn');

fbtn.forEach((element)=>{
    element.addEventListener('click', ()=>{
        event.preventDefault();
        fbtn.forEach((el)=>{
            el.classList.remove('a_action')
        })
    element.classList.add('a_action');
    })
});

//header-->

let mxapply = document.getElementById('val1');
let mxapdisplay = document.getElementById('mxaply');
let closeBtn = document.getElementById('close');
let cont = document.getElementById('content');
let x = `<input type="number">`;
let y = `<input type="radio">`;

function modelopen(maxx) {
    event.preventDefault();
    mxapdisplay.classList.remove('hide');
    cont.innerHTML = maxx;
}

function modelclose() {
    mxapdisplay.classList.add('hide'); 
}

mxapply.addEventListener('click', ()=>{
    
    modelopen(x);
})

closeBtn.addEventListener('click', ()=>{
    modelclose();
})


//auto-apply--------

const autoApply = document.getElementById('val2');

autoApply.addEventListener('click', ()=>{
    modelopen(y);
});

// sending-msg-------

let a = fetch('http://localhost:3000/apiV2/findOne/2');

a.then((res)=>{
    console.log(res.ok);
    sendingMsg(res.ok);
    return res.json();
})

const msgBox = document.getElementById('msg');

function sendingMsg(val) {
    if (val===true) msgBox.classList.remove('hide');  
    setTimeout(() => {
        msgBox.classList.add('hide');
      }, 1500) 
 
}

