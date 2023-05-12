document.getElementById("writeReview").addEventListener("click", () => {
  document.getElementById('cls-mainbox').classList.remove('hide')
})

document.getElementById("saveReview").addEventListener("click", () => {
  console.log("SaveReview")
  document.getElementById('reviewPopup-NE').classList.remove('hide')

})
document.getElementById('clsX').addEventListener("click", () => {
  document.getElementById('cls-mainbox').classList.add('hide')
})

document.getElementById('Xclse').addEventListener("click", () => {
  document.getElementById('reviewPopup-NE').classList.add('hide')
})

function Cl_opnForm() {
  document.getElementsByClassName('registration-form')[0].style.display = 'none'
}
//2nd part-------------------------------------------------
let i_d = location.pathname.split('/')[1];
let dat = fetch(`http://localhost:8000/apiV3/r/fn/${i_d}`);

dat.then(function (ress) {
  return ress.json();
}).then(function (re) {
 // console.log(re);
  re.forEach(ell => {
    let clinicname = document.getElementById('clinicName');
    let clinicrating = document.getElementById('clinicRating');
    let clinicrev = document.getElementById('clinicRev');
    clinicname.innerHTML = ell.c_name;
    clinicrating.innerHTML = `${ell.star.toFixed(1)}&#9733;`;
    clinicrev.innerHTML = `(${ell.total_review}+ Ratings)`

    //2nd part of the same function================================================================
    // let d = { num: ell.cl_id };
    // let opt = {
    //   method: 'GET',
    //   body: JSON.stringify(d),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }
    let rr = fetch(`http://localhost:8000/apiV3/r/revv/${i_d}`);
    rr.then(function (res) {
      return res.json();
    }).then(function (res) {
      //console.log(res);
      res.forEach((el) => {
        let html = ` <div class="customerReview-profile">
      <div class="reviewProfile-name">
          <i class="uil uil-user-square "></i>
          <p>${el.userName}</p>
      </div>
      <div class="reviewProfile-stars">
          <label for="5" class="uis uis-star"></label>
          <label for="5" class="uis uis-star"></label>
          <label for="5" class="uis uis-star"></label>
          <label for="5" class="uis uis-star"></label>
          <label for="5" class="uis uis-star"></label>
      </div>
      <div class="reviewProfile-text">
          <p>${el.review}</p>
      </div>
  </div>
  <hr>`
        let box = document.getElementById('review')
        if (el.review != null) {
          box.insertAdjacentHTML('afterbegin', html);
        }
      })
    })
  });
})// then function ended here bro !

//3rd part ===============submitting star and review-----------------------
const star = document.querySelectorAll("#star");
//console.log(star)
let a;
star.forEach(function (el) {el.addEventListener("click", function (e) {
    a = el.dataset.val;
  })
})
const submitReview = document.getElementById('submit-review');
function getRatePoint() {
  let name = document.getElementById('cus-name').value;
  let review = document.getElementById('cus-review').value;
  let idnumber = i_d; //document.getElementById('clinicid').dataset.guti;
  let email_id = document.getElementById('emails').value;
  let validationRes = {nValid: valid.regName(name), eValid: valid.regEmail(email_id)};
if (validationRes.nValid === true && validationRes.eValid === true) {
  document.getElementById('cls-mainbox').classList.add('hide')
  document.getElementById('reviewPopup-NE').classList.add('hide')
  let valu = {
    idNum: idnumber,
    rating: 4,// a || '',
    review: review,
    u_name: name,
    mail: email_id
  };
  let options = {
    method: 'POST',
    body: JSON.stringify(valu),
    headers: {
      'Content-Type': 'application/json'
    }
  }
 fetch('/apiV3/r/rv', options).then(function (response) {
  return response.json();}).then(function (respond) {
    //console.log(respond);
    Obj.flashMsg(respond.msg, '', 200);
  });  
}else{
  document.getElementById('err-Msg').innerHTML = 'Name and Email is required properly!'
}}
submitReview.addEventListener('click', getRatePoint);

//Zoom photo effects===========================================================

Array.from(document.getElementsByTagName('img')).forEach(function (el) {
  el.addEventListener('click', () => {
    document.getElementById('photo-Box').classList.remove('hide')
    document.getElementById('photoBox').src = el.src;
  })
})
document.getElementById('pclose').addEventListener('click', () => {
  document.getElementById('photo-Box').classList.add('hide')
})

// POST Data :  http://localhost:8000/apiV3/r/rv 
// GET All data: http://localhost:8000/apiV3/r/getAll?user=min01
// GET Data By ID :http://localhost:8000/apiV3/r/fn/3

// Request Handler.js
let doc = document.getElementsByClassName('user-details')[0].children
let ReqURI = { FormSet: location.origin + '/apiV3/add?user=' }
let ReqHandler = {
  GET: async function (url) {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8", }
    }); return response.json();
  },
  POST: async function (url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8", },
      body: JSON.stringify(data)
    }); return response.json();
  }
}
const userReq = {
  FormSet: function () {
    let val = document.getElementsByClassName('user-details')[0].children;
    let ap_date = dSplit(doc[3].children[1].value, '-', true)
    let data = { name: doc[0].children[1].value, number: doc[1].children[1].value, doctor: doc[2].children[1].value, date: ap_date, otherInfo: doc[4].children[1].value }
    ReqHandler.POST(ReqURI.FormSet + location.pathname.split('/')[1], data).then((data) => {
      Cl_opnForm();if (data.status) { 
        document.querySelector('.booked-msg').classList.remove('hide')
        Obj.flashMsg(data.msg, '', data.status) }
      else { Obj.flashMsg(data.msg, '', data.status) }
    })
  }
}
  // ABout Know More Text 
    const detailContainer = document.querySelector('.details');

    detailContainer.addEventListener('click', event=>{
      const detail = event.target;
      const isDetailsmoreBtn = detail.className.includes('detailsMore-btn');
      if(!isDetailsmoreBtn) return;
      const detailText = event.target.parentNode.querySelector('.detailsText');
      detailText.classList.toggle('detailsText--show');
      detail.textContent = detail.textContent.includes('Know More') ?
      "Know Less...." : "Know More...."  
    })

//validation form--------------------------------

let valid = {
  pat: {
    pat1: /^[A-Za-z. ]+$/, pat3:/^[A-Za-z.@0-9 ]+$/, pat4: /[@]/g, pat5: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, pat6 : /^\+?[1-9][0-9]{9}$/
  },
  regTextBox: function (val) {
    if (val === '' || this.pat.pat3.test(val)) {return true;}else{return 'Character are invalid!'}
  }, regEmail: function (val) {
    let v = val.replace(/\s/g,"")
    if (this.pat.pat5.test(v)) { return true; } else { return 'Invalid Email'; }
  }, regNumber: function (val) {
    if (this.pat.pat6.test(val)) {return true;}else{return 'Invalid Number'}
  }, regName: function (val) {
     if (this.pat.pat1.test(val)) {return true;}else{return 'Invalid Name'}
  }, regReq: function (val) {
    if (val === '') {return false;} else { return true }
  },
  ValResult: function result(name, number, date, text) {
    let result = {reName: this.regName(name), reNumber: this.regNumber(number), reText: this.regTextBox(text)}
    let fieldEmpty = { reEmptya: this.regReq(name), reEmptyc: this.regReq(number), reEmptyd : this.regReq(date) };
    if (fieldEmpty.reEmptya === true && fieldEmpty.reEmptyc === true && fieldEmpty.reEmptyd === true) {
      if (result.reName != true) { return result.reName;} 
    else if (result.reNumber != true) {return result.reNumber;} else if (result.reText != true) {return result.reText;
      } else { return true; }} else { return 'Field cant be empty!'; }
  }
}

function formSubmit() {
  let ap_date = dSplit(doc[3].children[1].value, '-', true)
  let data = { name: doc[0].children[1].value, number: doc[1].children[1].value, doctor: doc[2].children[1].value,
   date: ap_date, otherInfo: doc[4].children[1].value }
   let res = valid.ValResult(data.name, data.number, data.date, data.otherInfo);
   if (res === true) {userReq.FormSet();}else{
    document.getElementById('err-msg').innerHTML = res;
   }
   console.log(data);
}
document.getElementById('btnn').addEventListener('click', formSubmit)

function closeWindow(){
  document.querySelector('.booked-msg').classList.add('hide');
}



