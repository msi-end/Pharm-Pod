const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const accordionContent = document.querySelectorAll(".accordion-content");
const appForm = document.querySelector(".addPs");
const openBook = document.querySelector("#openBook");
const openForm = document.querySelector(`#openPs`);
const closeForm = document.querySelector(`#canCel`);
const approveOpen = document.querySelector('#approveOpen');
const appPopup = document.querySelector('.popupBox');
const cancelPopup = document.querySelector('#cancelPopup');

//====menu
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})
if(matchMedia(`only screen and (max-width :480px)`).matches){
    document.querySelectorAll(`.nav-links`).forEach(n => n.addEventListener('click', ()=>{
        sideMenu.style.display = 'none';
    }))
}
// ===Form===
openForm.addEventListener ('click', ()=>{
    appForm.style.display = 'block';
})
openBook.addEventListener ('click', ()=>{
    appForm.style.display = 'block';
})
closeForm.addEventListener('click', ()=>{
    appForm.style.display = 'none';
})

//Popup
approveOpen.addEventListener('click', () =>{
    appPopup.style.display = `block`;
})
cancelPopup.addEventListener('click', () =>{
    appPopup.style.display = `none`;
})

//accordion
accordionContent.forEach((item, index) =>{
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");
        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("uil-plus", "uil-minus")
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("uil-minus", "uil-plus")
        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove ("open")
            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("uil-minus", "uil-plus")
        }
    })
}

