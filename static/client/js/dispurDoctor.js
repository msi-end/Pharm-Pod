
let dname = document.getElementById('dname');
let dspec = document.getElementById('dspec');
let ddeg = document.getElementById('ddeg');
let dexp = document.getElementById('dexp');
let dlang = document.getElementById('dlang');
let drat = document.getElementById('drat');
let dasum = document.getElementById('aboutsum');
let dblog = document.querySelector('#blog');


const doctor1 = {did: 0, Name: 'Mr. senthur nambi', deg: 'MBBS', specific : 'radiology', exp: 12,
 Lang: ['assamese', 'hindi'], rating: "2500+", time: {sun: 12, mon: 14},  about : "welcome to profile", blog: `Anatomical pathology is one of those medical doctor specialties that study the morphologic aspects of a disease. An anatomical pathologist's key specialization is to diagnose diseased tissue and investigate the mechanisms and development of the disease. They do this by examining the tissues removed by needle aspiration, surgical procedures, or autopsy. Anatomical is one of the better medical specialties for doctors who like working alone, in a lab setting, or in a more academic environment.`};

const doctor2 = {did: 1, Name: 'Dr. Bala', deg: 'MBBS', specific : 'radiology', exp: 12,
 Lang: ['assamese', 'hindi', 'Tamil'], rating: "300+", time: {sun: 12, mon: 14},  about : "welcome to profile", blog: 'lghurhgorhogho'};

let doctors = [doctor1, doctor2];

dname.innerHTML = doctors[0].Name;
dspec.innerHTML = doctors[0].specific;
ddeg.innerHTML = doctors[0].deg;
dexp.innerHTML = doctors[0].exp;
dlang.innerHTML = doctors[0].Lang;
drat.innerHTML = doctors[0].rating;
dasum.innerHTML = doctors[0].about
dblog.innerHTML = doctors[0].blog;


function getValu() {
    let a = document.getElementById('doctors');
    let v = Number(a.value);
    //console.log(typeof doctors[0].did)
for (let i = 0; i <= 1; i++) {
    if (v == doctors[i].did) {
        dname.innerHTML = doctors[i].Name;
        dspec.innerHTML = doctors[i].specific;
        ddeg.innerHTML = doctors[i].deg;
        dexp.innerHTML = doctors[i].exp;
        dlang.innerHTML = doctors[i].Lang;
        drat.innerHTML = doctors[i].rating;
    }
  }    
}

let btn = document.getElementById('click')

//btn.addEventListener('click', getValu)


document.getElementById("bookAppo").addEventListener("click", function(){
    document.querySelector(".registration-form").style.display = "block";
    })

    document.getElementById("closeX").addEventListener("click",
    function(){
        document.querySelector(".registration-form").style. display = "none";
    })


