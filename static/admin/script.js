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
    var addPS = document.getElementsByClassName('addPS')[0];
    console.log(jsonObj)
    addPS.classList.add('addPSpan');
    // addPS.innerHTML=jsonObj;

}