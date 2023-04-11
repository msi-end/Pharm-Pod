document.getElementById("writeReview").addEventListener("click", ()=>{
  document.getElementById('cls-mainbox').classList.remove('hide')
} )

document.getElementById("saveReview").addEventListener("click", ()=>{
  console.log("SaveReview")
  document.getElementById('reviewPopup-NE').classList.remove('hide')

})
document.getElementById('clsX').addEventListener("click", ()=>{
  document.getElementById('cls-mainbox').classList.add('hide')
})

document.getElementById('Xclse').addEventListener("click", ()=>{
  document.getElementById('reviewPopup-NE').classList.add('hide')
})

function Cl_opnForm(){
  document.getElementsByClassName('registration-form')[0].style.display='none'
}


//2nd part------------------------------------------------------------

let dat = fetch('/clinics');

dat.then(function(ress) {
    return ress.json();
 }).then(function(re){
    re.forEach(ell => {
    let n = ell.star.toFixed(1)
    let clinicid = document.getElementById('clinicid');
    let clinicname = document.getElementById('clinicName');
    let clinicrating = document.getElementById('clinicRating');
    let clinicrev = document.getElementById('clinicRev');
    clinicname.innerHTML = ell.Name;
    clinicrating.innerHTML = `${n}&#9733;`;
    clinicrev.innerHTML = `(${ell.total_rev}+ Ratings)`
    clinicid.dataset.valuguti = ell.cl_id;

    //2nd part of the function================================================================

let d = {num : ell.cl_id};

let opt = {
  method: 'POST',
  body: JSON.stringify(d),
  headers: {
      'Content-Type': 'application/json'
  }
}

let rr = fetch("http://localhost:3000/eachclinic", opt);

rr.then(function(res) {
  return res.json();
}).then(function(res){
  //console.log(res);
    res.forEach((el)=>{
      let html = ` <div class="customerReview-profile">
      <div class="reviewProfile-name">
          <i class="uil uil-user-square "></i>
          <p>${el.user_name}</p>
      </div>
      <div class="reviewProfile-stars">
          <label for="5" class="uis uis-star"></label>
          <label for="5" class="uis uis-star"></label>
          <label for="5" class="uis uis-star"></label>
          <label for="5" class="uis uis-star"></label>
          <label for="5" class="uis uis-star"></label>
      </div>
      <div class="reviewProfile-text">
          <p>${el.rev}</p>
      </div>
  </div>
  <hr>`
      let box = document.getElementById('review')
      if (el.rev != null) {
        box.insertAdjacentHTML('afterbegin', html); 
      }
      
    })
})
    
    });
   
 })

//3rd part ================================= submitting star and review--------------------------------

 const star = document.querySelectorAll("#star");
 //console.log(star)
let a;
star.forEach(function(el) {
  el.addEventListener("click", function(e) {
    a = el.dataset.val;
    console.log(a);
  })
})

const submitReview = document.getElementById('submit-review');


let valu;
function getRatePoint() {
  document.getElementById('cls-mainbox').classList.add('hide')
  document.getElementById('reviewPopup-NE').classList.add('hide')
  let name =  document.getElementById('cus-name').value;
  let review = document.getElementById('cus-review').value;
  let idnumber = Number(document.getElementById('clinicid').dataset.valuguti);
  let valu = {
    idNum: idnumber,
    rating: a || '',
    review: review,
    u_name: name 
  };
   console.log(valu);

   let options = {
    method: 'POST',
    body: JSON.stringify(valu),
    headers: {
        'Content-Type': 'application/json'
    }
  }
  
  let data = fetch('/data', options);
  
  data.then(function(res) {
     return res.json();
  }).then(function(res){
     console.log(res);
  })

 

}
 submitReview.addEventListener('click',getRatePoint);
  
//Zoom photo effects===========================================================

let tag = document.getElementsByTagName('img');

const imgArray= Array.from(tag);

imgArray.forEach(function(el){
  el.addEventListener('click',()=>{
  document.getElementById('photo-Box').classList.remove('hide')
  document.getElementById('photoBox').src = el.src;
   
  })
})
document.getElementById('pclose').addEventListener('click',()=>{
  document.getElementById('photo-Box').classList.add('hide')
})


//*-----*//
//*-------*//
// Request Handler.js
let doc=document.getElementsByClassName('user-details')[0].children
let ReqURI ={FormSet:location.origin+'/apiV3/add?user='}
let ReqHandler ={
    GET: async function(url) {
       const response = await fetch(url, {
         method: "GET",
         headers: {"Content-Type": "application/json; charset=UTF-8",}
       });return response.json();},
      POST: async function(url,data) {
       const response = await fetch(url, {
         method: "POST",
         headers: {"Content-Type": "application/json; charset=UTF-8",},
         body:JSON.stringify(data)
       });return response.json();}}
const userReq ={
  FormSet:function() {
      let val=document.getElementsByClassName('user-details')[0].children;
      let ap_date = dSplit(doc[3].children[1].value,'-',true)
    let data ={name:doc[0].children[1].value,number:doc[1].children[1].value,doctor:doc[2].children[1].value,date:ap_date,otherInfo:doc[4].children[1].value}
      ReqHandler.POST(ReqURI.FormSet+location.pathname.split('/')[1],data).then((data)=>{
        Cl_opnForm();if(data.status){Obj.flashMsg(data.msg,'',data.status)}
      else{Obj.flashMsg(data.msg,'',data.status)}})
    }}