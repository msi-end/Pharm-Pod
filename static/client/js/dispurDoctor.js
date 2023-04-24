
let dname = document.getElementById('dname');
let dspec = document.getElementById('dspec');
let ddeg = document.getElementById('ddeg');
let dexp = document.getElementById('dexp');
let dlang = document.getElementById('dlang');
let drat = document.getElementById('drat');
let dasum = document.getElementById('aboutsum');
let dblog = document.getElementById('blog');  

const doctor1 = {did: 0, Name: 'Mr. senthur nambi', deg: 'MBBS', specific : 'radiology', exp: 12,
 Lang: ['assamese', 'hindi'], rating: "2500+", time: {sun: 12, mon: 14},  about : "welcome to profile", blog: 'lghurhgorhogho'};

const doctor2 = {did: 1, Name: 'Dr R.N Kalita', deg: 'MBBS', specific : 'General Physician', exp: '5 Years Experience',
 Lang: ['Assamese', 'Hindi', 'English'], rating: "179+ Ratings", time: {sun: 12, mon: 14},  about : "Dr. R.N. Kalita is a highly skilled doctor with over five years of experience in the medical field. During his career, he has helped over 500 patients from all walks of life, providing them with the highest standard of care and support.", blog: 'lghurhgorhogho'};
 
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

