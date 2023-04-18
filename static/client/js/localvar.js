let data = document.querySelectorAll(".u-u-u-u-u");

data.forEach((el)=>{
    el.addEventListener("click", (e)=>{
       
        let dataI = el.dataset.clinicidentity;
        console.log(dataI)
        sessionStorage.setItem("dataV", dataI)
    })
})